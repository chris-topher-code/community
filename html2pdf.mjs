import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  'beijing-breakfast-map.html',
  'travel-map.html',
  'hospital-map.html',
  'entertainment-map.html',
  'rent-map.html',
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const file of files) {
    const htmlPath = path.join(__dirname, file);
    const pdfPath = path.join(__dirname, file.replace('.html', '.pdf'));
    
    console.log(`Converting: ${file} -> ${file.replace('.html', '.pdf')}`);
    
    const page = await browser.newPage();
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    });
    
    await page.close();
    console.log(`  ✓ Created: ${pdfPath}`);
  }

  await browser.close();
  console.log('\nAll PDFs generated successfully!');
})();
