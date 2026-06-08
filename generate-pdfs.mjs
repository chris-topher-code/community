/**
 * generate-pdfs.mjs
 * Pre-generates all topic guide PDFs and article PDFs.
 * Run: npm run generate-pdfs
 * Output: pdfs/ directory with all PDF files
 */

import { jsPDF } from 'jspdf';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'pdfs');

// ─── PDF Constants (match pdf-generator.js) ───
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_LEFT = 25;
const MARGIN_RIGHT = 25;
const MARGIN_TOP = 20;
const MARGIN_BOTTOM = 20;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
const CONTENT_RIGHT = PAGE_WIDTH - MARGIN_RIGHT;
const BRAND_NAME = 'CDISCOVERY';
const BRAND_URL = 'https://cdiscovery-community.netlify.app/';
const FOOTER_TEXT = 'cdiscovery-community.netlify.app';
const LINE_HEIGHT_FACTOR = 1.45;
const PARAGRAPH_SPACING = 5;
const HEADING_SPACING = 6;
const HEADER_IMG_STRIP = 10;
const HEADER_BAR_HEIGHT = 12;
const HEADER_TOTAL = HEADER_IMG_STRIP + HEADER_BAR_HEIGHT + 2;

const FONT_SIZES = {
    coverTitle: 36, coverSubtitle: 14, coverBrand: 24, coverUrl: 10,
    sectionHeader: 22, h3: 15, body: 11, bullet: 11, footnote: 8,
    pageNumber: 8, footer: 7, articleTitle: 18, backCoverBrand: 40,
    backCoverSub: 16, backCoverInfo: 10,
};

// ─── CJK Font ───
const CJK_FONT_URL = 'https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYxNbPzS5HE.ttf';
let _cjkFontBase64 = null;
let _cjkFontReady = false;

async function loadAndRegisterCJKFont(doc) {
    if (_cjkFontReady) {
        try { doc.addFileToVFS('NotoSansSC.ttf', _cjkFontBase64); doc.addFont('NotoSansSC.ttf', 'NotoSansSC', 'normal'); } catch (e) {}
        return true;
    }
    try {
        const buf = await fetchBuffer(CJK_FONT_URL);
        const bytes = new Uint8Array(buf);
        let bin = '';
        for (let i = 0; i < bytes.length; i += 32768) {
            bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
        }
        _cjkFontBase64 = btoa(bin);
        doc.addFileToVFS('NotoSansSC.ttf', _cjkFontBase64);
        doc.addFont('NotoSansSC.ttf', 'NotoSansSC', 'normal');
        _cjkFontReady = true;
        return true;
    } catch (e) {
        console.warn('CJK font load failed:', e.message);
        return false;
    }
}

function _setFont(doc, style) {
    if (_cjkFontReady) doc.setFont('NotoSansSC', 'normal');
    else doc.setFont('helvetica', style || 'normal');
}

// ─── Image Cache ───
const _imageCache = {};

async function loadImageAsBase64(url) {
    if (_imageCache[url]) return _imageCache[url];
    try {
        if (url.startsWith('data:')) return { data: url, format: url.includes('png') ? 'PNG' : 'JPEG' };
        const buf = await fetchBuffer(url);
        const bytes = new Uint8Array(buf);
        let bin = '';
        for (let i = 0; i < bytes.length; i += 32768) {
            bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
        }
        const dataUrl = 'data:image/jpeg;base64,' + btoa(bin);
        const result = { data: dataUrl, format: 'JPEG' };
        _imageCache[url] = result;
        return result;
    } catch (e) {
        console.warn('  Image load failed:', url, e.message);
        return null;
    }
}

// ─── HTTP Fetch Helper ───
function fetchBuffer(url) {
    return new Promise((resolve, reject) => {
        const mod = url.startsWith('https') ? https : http;
        mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchBuffer(res.headers.location).then(resolve, reject);
            }
            if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode));
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        }).on('error', reject);
    });
}

// ─── Utility ───
function parseRgb(rgbStr) {
    const parts = rgbStr.split(',').map(s => parseInt(s.trim(), 10));
    return { r: parts[0] || 0, g: parts[1] || 0, b: parts[2] || 0 };
}

function sanitizeForPDF(text) {
    if (!text) return '';
    var result = text
        .replace(/[\u2018\u2019\u201A\u2032]/g, "'").replace(/[\u201C\u201D\u201E\u2033]/g, '"')
        .replace(/[\u2013\u2012]/g, '-').replace(/[\u2014]/g, '--').replace(/[\u2026]/g, '...')
        .replace(/[\u2022\u2023\u25E6\u2043]/g, '*').replace(/[\u2122]/g, 'TM').replace(/[\u00A9]/g, '(c)')
        .replace(/[\u00AE]/g, '(R)').replace(/[\u00B0]/g, ' deg').replace(/[\u00B1]/g, '+/-')
        .replace(/[\u00D7]/g, 'x').replace(/[\u00F7]/g, '/');
    result = result.replace(/[\u{1F000}-\u{1FFFF}]/gu, '');
    result = result.replace(/[\u26A0]/g, '!');
    result = result.replace(/[\u{FE00}-\u{FE0F}]/gu, '');
    result = result.replace(/[\u{200D}]/gu, '');
    result = result.replace(/[\u200B\u200C\u00AD]/g, '');
    result = result.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\uFEFF]/g, '');
    result = result.replace(/\s{2,}/g, ' ').trim();
    return result;
}

function stripHtml(html) {
    if (!html) return '';
    let text = html;
    text = text.replace(/<div class="ar-source">[\s\S]*?<\/div>/gi, '');
    text = text.replace(/<div class="venue-location">[\s\S]*?<\/div>/gi, '');
    text = text.replace(/<span class="metro-badge[^"]*">[\s\S]*?<\/span>/gi, '');
    text = text.replace(/<span class="station-name">[\s\S]*?<\/span>/gi, '');
    text = text.replace(/<a class="loc-map-link"[^>]*>[\s\S]*?<\/a>/gi, '');
    text = text.replace(/<i class="[^"]*"><\/i>/gi, '');
    text = text.replace(/<i[^>]*><\/i>/gi, '');
    text = text.replace(/<div[^>]*>/gi, '');
    text = text.replace(/<\/div>/gi, '');
    text = text.replace(/<\/?span[^>]*>/gi, '');
    text = text.replace(/<br\s*\/?>/gi, '\n');
    text = text.replace(/\n{3,}/g, '\n\n');
    return sanitizeForPDF(text.trim());
}

function getLineHeight(fontSize) { return fontSize * LINE_HEIGHT_FACTOR; }

function splitTextToLines(doc, text, maxWidth) {
    if (!text) return [];
    try { var lines = doc.splitTextToSize(text, maxWidth); return Array.isArray(lines) ? lines : [text]; }
    catch (e) {
        var words = text.split(/\s+/), result = [], currentLine = '';
        for (var i = 0; i < words.length; i++) {
            var word = words[i], testLine = currentLine ? currentLine + ' ' + word : word;
            if (doc.getTextWidth(testLine) > maxWidth && currentLine) { result.push(currentLine); currentLine = word; }
            else currentLine = testLine;
        }
        if (currentLine) result.push(currentLine);
        return result;
    }
}

// ─── Cover Images ───
const COVER_IMAGES = {
    travel: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80',
    food: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80',
    study: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=1200&q=80',
    work: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    visa: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
    life: 'https://images.unsplash.com/photo-1474181628115-2cdb61704f79?w=1200&q=80',
    entertainment: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80',
    business: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80',
    language: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    rent: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    school: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=1200&q=80',
    sim: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    cultural: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80',
    explore_default: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80',
    beijing: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80',
    shanghai: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80',
    guangzhou: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=1200&q=80',
    shenzhen: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80',
    chengdu: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&q=80',
    hangzhou: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1200&q=80',
};

// ─── Topic Data (from app.js) ───
const topicGuidesData = {
    study: { icon: '📚', title: 'Study in China', subtitle: 'University experiences, study tips, and academic resources', tag: 'Education', accentRgb: '26, 115, 232' },
    school: { icon: '🎒', title: 'School Life in China', subtitle: 'Campus life, K-12 education, and student experiences', tag: 'Education', accentRgb: '156, 39, 176' },
    work: { icon: '⚡', title: 'Working in China', subtitle: 'Career opportunities, work culture, and professional development', tag: 'Career', accentRgb: '76, 175, 80' },
    visa: { icon: '✈️', title: 'Visa & Work Permits', subtitle: 'Visa processes, requirements, and legal information', tag: 'Travel', accentRgb: '255, 152, 0' },
    travel: { icon: '🗺️', title: 'Travel & Adventure', subtitle: 'Hidden gems, travel tips, and must-visit destinations', tag: 'Travel', accentRgb: '0, 188, 212' },
    food: { icon: '🥢', title: 'Food & Dining', subtitle: 'Chinese cuisine, restaurant recommendations, cooking tips', tag: 'Food', accentRgb: '244, 67, 54' },
    life: { icon: '🌆', title: 'Daily Life in China', subtitle: 'Housing, healthcare, transportation, and practical tips', tag: 'Lifestyle', accentRgb: '33, 150, 243' },
    entertainment: { icon: '🎬', title: 'Entertainment & Fun', subtitle: 'Movies, nightlife, festivals, and activities', tag: 'Entertainment', accentRgb: '233, 30, 99' },
    business: { icon: '🚀', title: 'Business & Entrepreneurship', subtitle: 'Startups, networking, and business culture', tag: 'Business', accentRgb: '255, 193, 7' },
    language: { icon: '💬', title: 'Language Learning', subtitle: 'Mandarin tips, resources, and language exchange', tag: 'Language', accentRgb: '0, 188, 212' },
    rent: { icon: '🏠', title: 'Rent an Apartment', subtitle: 'Housing market, rental platforms, and tenant rights for expats', tag: 'Housing', accentRgb: '156, 39, 176' },
    sim: { icon: '📱', title: 'SIM Card & Mobile Service', subtitle: 'Getting a phone number, carrier plans, and registration rules', tag: 'Telecom', accentRgb: '0, 150, 136' },
    hospital: { icon: '🏥', title: 'Hospital & Healthcare', subtitle: 'Seeing a doctor, prescriptions, and insurance', tag: 'Healthcare', accentRgb: '0, 150, 136' },
    cultural: { icon: '🌏', title: 'Cultural Differences', subtitle: 'Understanding Chinese culture, customs, and social norms for foreigners', tag: 'Culture', accentRgb: '255, 87, 34' },
};

const categoryColors = {
    travel: '0, 188, 212', food: '244, 67, 54', study: '26, 115, 232', work: '76, 175, 80',
    visa: '255, 152, 0', life: '33, 150, 243', entertainment: '233, 30, 99', business: '255, 193, 7',
    language: '0, 188, 212', rent: '156, 39, 176', school: '156, 39, 176', sim: '0, 150, 136',
    hospital: '0, 150, 136', cultural: '255, 87, 34',
};

// ─── PDF Rendering Functions ───

let _currentTopicKey = 'explore_default';

function renderPageHeaderSync(doc, topicKey, accentRgb) {
    const ac = parseRgb(accentRgb);
    const img = _imageCache[COVER_IMAGES[topicKey]] || null;
    if (img) {
        try { doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, undefined, 'FAST'); }
        catch (e) { doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30)); doc.rect(0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, 'F'); }
    } else {
        doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30));
        doc.rect(0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, 'F');
    }
    doc.setFillColor(ac.r * 0.6, ac.g * 0.6, ac.b * 0.6);
    doc.rect(0, HEADER_IMG_STRIP, PAGE_WIDTH, HEADER_BAR_HEIGHT, 'F');
    doc.setFillColor(ac.r, ac.g, ac.b);
    doc.rect(0, HEADER_IMG_STRIP + HEADER_BAR_HEIGHT, PAGE_WIDTH, 0.8, 'F');
    doc.setFillColor(Math.min(255, ac.r + 40), Math.min(255, ac.g + 40), Math.min(255, ac.b + 40));
    doc.roundedRect(PAGE_WIDTH - 30, HEADER_IMG_STRIP + HEADER_BAR_HEIGHT - 4, 25, 3, 0, 0, 'F');
    return HEADER_TOTAL;
}

async function renderPageHeader(doc, topicKey, accentRgb) {
    await loadImageAsBase64(COVER_IMAGES[topicKey] || COVER_IMAGES.explore_default);
    return renderPageHeaderSync(doc, topicKey, accentRgb);
}

function addPageNumber(doc, pageNum, accentColor) {
    const ac = parseRgb(accentColor);
    doc.setFillColor(ac.r, ac.g, ac.b);
    doc.rect(MARGIN_LEFT, PAGE_HEIGHT - 14, CONTENT_WIDTH, 0.3, 'F');
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.pageNumber); doc.setTextColor(ac.r, ac.g, ac.b);
    doc.text(String(pageNum), CONTENT_RIGHT, PAGE_HEIGHT - 10, { align: 'right' });
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.footer); doc.setTextColor(150, 150, 150);
    doc.text(FOOTER_TEXT, MARGIN_LEFT, PAGE_HEIGHT - 10);
}

function renderRichText(doc, html, startY, accentColor, options) {
    const opts = Object.assign({ fontSize: FONT_SIZES.body, maxWidth: CONTENT_WIDTH }, options);
    const ac = parseRgb(accentColor);
    let y = startY, pageNum = doc.internal.getNumberOfPages();
    const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;

    function ensureSpace(needed) {
        if (y + needed > bottomLimit) {
            addPageNumber(doc, pageNum, accentColor); doc.addPage();
            pageNum = doc.internal.getNumberOfPages();
            renderPageHeaderSync(doc, _currentTopicKey, accentColor);
            y = MARGIN_TOP + HEADER_TOTAL;
        }
    }

    function parseNodes(htmlStr) {
        const nodes = []; const tagRegex = /<(\/?)(strong|b|em|i|h3|p|ul|li|a|mark)\b([^>]*)>/gi;
        let lastIndex = 0, match;
        while ((match = tagRegex.exec(htmlStr)) !== null) {
            if (match.index > lastIndex) { const t = htmlStr.substring(lastIndex, match.index); if (t.trim()) nodes.push({ type: 'text', text: t }); }
            const isClosing = match[1] === '/', tagName = match[2].toLowerCase(), attrs = match[3] || '';
            if (isClosing) nodes.push({ type: 'closeTag', tag: tagName });
            else if (tagName === 'a') { const hm = attrs.match(/href=["']([^"']+)["']/); nodes.push({ type: 'openTag', tag: 'a', href: hm ? hm[1] : '' }); }
            else nodes.push({ type: 'openTag', tag: tagName });
            lastIndex = match.index + match[0].length;
        }
        if (lastIndex < htmlStr.length) { const r = htmlStr.substring(lastIndex); if (r.trim()) nodes.push({ type: 'text', text: r }); }
        return nodes;
    }

    const cleanHtml = stripHtml(html);
    const nodes = parseNodes(cleanHtml);
    let boldCount = 0, italicCount = 0, markCount = 0, currentHref = null, listDepth = 0, isFirstListItem = false, currentFontSize = opts.fontSize;

    function getCurrentFontStyle() {
        if (boldCount > 0 && italicCount > 0) return 'bolditalic';
        if (boldCount > 0) return 'bold'; if (italicCount > 0) return 'italic'; return 'normal';
    }

    function renderTextNode(text) {
        const cleaned = text.replace(/\s+/g, ' ').trim(); if (!cleaned) return;
        const fontStyle = getCurrentFontStyle();
        _setFont(doc, fontStyle); doc.setFontSize(currentFontSize); doc.setTextColor(51, 51, 51);
        var textLines = doc.splitTextToSize(cleaned, opts.maxWidth);
        for (var li = 0; li < textLines.length; li++) {
            var line = textLines[li]; ensureSpace(getLineHeight(currentFontSize));
            _setFont(doc, fontStyle); doc.setFontSize(currentFontSize); doc.setTextColor(51, 51, 51);
            if (markCount > 0) { var tw = doc.getTextWidth(line); doc.setFillColor(255, 243, 205); doc.rect(MARGIN_LEFT - 1, y - currentFontSize * 0.35, tw + 2, currentFontSize * 0.5, 'F'); }
            if (currentHref) { doc.setTextColor(ac.r, ac.g, ac.b); var lw = doc.getTextWidth(line); doc.text(line, MARGIN_LEFT, y); doc.link(MARGIN_LEFT, y - currentFontSize * 0.35, lw, currentFontSize * 0.5, { url: currentHref }); doc.setTextColor(51, 51, 51); }
            else doc.text(line, MARGIN_LEFT, y);
            y += getLineHeight(currentFontSize);
        }
    }

    function renderParagraphText(text, prefix) {
        const cleaned = text.replace(/\s+/g, ' ').trim(); if (!cleaned && !prefix) return;
        const fullText = prefix ? prefix + cleaned : cleaned;
        const fontStyle = getCurrentFontStyle();
        _setFont(doc, fontStyle); doc.setFontSize(currentFontSize); doc.setTextColor(51, 51, 51);
        var textLines = doc.splitTextToSize(fullText, opts.maxWidth);
        for (var li = 0; li < textLines.length; li++) {
            var line = textLines[li]; ensureSpace(getLineHeight(currentFontSize));
            _setFont(doc, fontStyle); doc.setFontSize(currentFontSize); doc.setTextColor(51, 51, 51);
            if (markCount > 0) { var tw = doc.getTextWidth(line); doc.setFillColor(255, 243, 205); doc.rect(MARGIN_LEFT - 1, y - currentFontSize * 0.35, tw + 2, currentFontSize * 0.5, 'F'); }
            if (currentHref && !prefix) { doc.setTextColor(ac.r, ac.g, ac.b); doc.text(line, MARGIN_LEFT, y); var lw = doc.getTextWidth(line); doc.link(MARGIN_LEFT, y - currentFontSize * 0.35, lw, currentFontSize * 0.5, { url: currentHref }); doc.setTextColor(51, 51, 51); }
            else doc.text(line, MARGIN_LEFT, y);
            y += getLineHeight(currentFontSize);
        }
    }

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.type === 'openTag') {
            if (node.tag === 'strong' || node.tag === 'b') boldCount++;
            else if (node.tag === 'em' || node.tag === 'i') italicCount++;
            else if (node.tag === 'h3') { boldCount++; currentFontSize = FONT_SIZES.h3; y += HEADING_SPACING + 3; ensureSpace(currentFontSize + 4); doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(MARGIN_LEFT, y - 2, 3, currentFontSize + 2, 'F'); }
            else if (node.tag === 'p') y += PARAGRAPH_SPACING;
            else if (node.tag === 'ul') { listDepth++; isFirstListItem = true; }
            else if (node.tag === 'li') { if (!isFirstListItem) y += 2; isFirstListItem = false; }
            else if (node.tag === 'a') currentHref = node.href;
            else if (node.tag === 'mark') markCount++;
        } else if (node.type === 'closeTag') {
            if (node.tag === 'strong' || node.tag === 'b') boldCount = Math.max(0, boldCount - 1);
            else if (node.tag === 'em' || node.tag === 'i') italicCount = Math.max(0, italicCount - 1);
            else if (node.tag === 'h3') { boldCount = Math.max(0, boldCount - 1); currentFontSize = opts.fontSize; y += 4; }
            else if (node.tag === 'p') y += 2;
            else if (node.tag === 'ul') { listDepth = Math.max(0, listDepth - 1); if (listDepth === 0) y += 3; }
            else if (node.tag === 'a') currentHref = null;
            else if (node.tag === 'mark') markCount = Math.max(0, markCount - 1);
        } else if (node.type === 'text') {
            if (listDepth > 0) { var indent = ''; for (var d = 1; d < listDepth; d++) indent += '  '; renderParagraphText(node.text, indent + '* '); }
            else renderTextNode(node.text);
        }
    }
    return y;
}

async function renderCoverPage(doc, guideData, accentRgb, topicKey) {
    const ac = parseRgb(accentRgb);
    doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');
    const coverImageUrl = COVER_IMAGES[topicKey] || COVER_IMAGES.explore_default;
    if (coverImageUrl) {
        const img = await loadImageAsBase64(coverImageUrl);
        if (img) { try { doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT); } catch (e) {} }
    }
    doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30));
    doc.roundedRect(-20, 40, 120, 120, 0, 0, 'F');
    doc.setFillColor(Math.max(0, ac.r - 40), Math.max(0, ac.g - 40), Math.max(0, ac.b - 40));
    doc.roundedRect(140, 180, 100, 100, 0, 0, 'F');
    doc.setFillColor(255, 255, 255, 0.08); doc.circle(50, 230, 35, 'F');
    doc.setFillColor(Math.min(255, ac.r + 60), Math.min(255, ac.g + 60), Math.min(255, ac.b + 60));
    doc.circle(170, 70, 20, 'F');
    doc.setFillColor(Math.max(0, ac.r - 60), Math.max(0, ac.g - 60), Math.max(0, ac.b - 60));
    doc.roundedRect(30, 150, 50, 8, 0, 0, 'F');
    doc.setFillColor(255, 255, 255); doc.roundedRect(90, 130, 70, 6, 0, 0, 'F');

    const title = sanitizeForPDF(guideData.title || '');
    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.coverTitle); doc.setTextColor(255, 255, 255);
    const titleLines = splitTextToLines(doc, title, CONTENT_WIDTH + 20);
    let titleY = 100;
    for (const line of titleLines) { doc.text(line, PAGE_WIDTH / 2, titleY, { align: 'center' }); titleY += FONT_SIZES.coverTitle * 1.2; }

    const subtitle = sanitizeForPDF(guideData.subtitle || '');
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.coverSubtitle); doc.setTextColor(255, 255, 255, 0.9);
    const subLines = splitTextToLines(doc, subtitle, CONTENT_WIDTH);
    let subY = titleY + 8;
    for (const line of subLines) { doc.text(line, PAGE_WIDTH / 2, subY, { align: 'center' }); subY += FONT_SIZES.coverSubtitle * 1.4; }

    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.coverBrand); doc.setTextColor(255, 255, 255);
    doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT - 55, { align: 'center' });
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.coverUrl); doc.setTextColor(255, 255, 255, 0.8);
    doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT - 42, { align: 'center' });
    doc.setDrawColor(255, 255, 255, 0.4); doc.setLineWidth(0.5);
    doc.line(PAGE_WIDTH / 2 - 40, PAGE_HEIGHT - 65, PAGE_WIDTH / 2 + 40, PAGE_HEIGHT - 65);
}

async function renderGuideSummaryPage(doc, guideData, accentRgb, topicKey) {
    const ac = parseRgb(accentRgb);
    doc.addPage();
    const pageNum = doc.internal.getNumberOfPages();
    await renderPageHeader(doc, topicKey || _currentTopicKey, accentRgb);
    addPageNumber(doc, pageNum, accentRgb);
    let y = MARGIN_TOP + HEADER_TOTAL;

    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.sectionHeader); doc.setTextColor(ac.r, ac.g, ac.b);
    doc.text(sanitizeForPDF(guideData.title || 'Guide'), MARGIN_LEFT, y); y += 8;
    doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(MARGIN_LEFT, y, 50, 1.5, 'F'); y += 10;

    if (guideData.subtitle) {
        _setFont(doc, 'italic'); doc.setFontSize(FONT_SIZES.body + 1); doc.setTextColor(100, 100, 100);
        const subLines = splitTextToLines(doc, sanitizeForPDF(guideData.subtitle), CONTENT_WIDTH);
        for (const line of subLines) { doc.text(line, MARGIN_LEFT, y); y += getLineHeight(FONT_SIZES.body + 1); }
        y += 6;
    }
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.body); doc.setTextColor(51, 51, 51);
    if (guideData.content) renderRichText(doc, guideData.content, y, accentRgb);
}

async function renderArticlePages(doc, articles, accentRgb, topicKey) {
    const ac = parseRgb(accentRgb);
    for (let idx = 0; idx < articles.length; idx++) {
        const article = articles[idx];
        doc.addPage();
        let pageNum = doc.internal.getNumberOfPages();
        await renderPageHeader(doc, topicKey || _currentTopicKey, accentRgb);
        addPageNumber(doc, pageNum, accentRgb);
        let y = MARGIN_TOP + HEADER_TOTAL;

        _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.body - 1); doc.setTextColor(ac.r, ac.g, ac.b);
        doc.text('Article ' + (idx + 1), MARGIN_LEFT, y); y += 7;
        _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.articleTitle); doc.setTextColor(30, 30, 30);
        const titleLines = splitTextToLines(doc, sanitizeForPDF(article.title || ''), CONTENT_WIDTH);
        for (const line of titleLines) { doc.text(line, MARGIN_LEFT, y); y += FONT_SIZES.articleTitle * 1.2; }
        y += 2;
        doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(MARGIN_LEFT, y, 40, 1.2, 'F'); y += 8;

        _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.body); doc.setTextColor(51, 51, 51);
        if (article.content) {
            const sourceRegex = /<div class="ar-source">([\s\S]*?)<\/div>/i;
            const sourceMatch = article.content.match(sourceRegex);
            let mainContent = article.content, sourceHtml = '';
            if (sourceMatch) { mainContent = article.content.replace(sourceRegex, '').trim(); sourceHtml = sourceMatch[1]; }
            const newY = renderRichText(doc, mainContent, y, accentRgb);
            if (sourceHtml) {
                const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;
                let sourceY = newY + 6;
                const currentPages = doc.internal.getNumberOfPages(); doc.setPage(currentPages);
                if (sourceY + 12 > bottomLimit) { doc.addPage(); pageNum = doc.internal.getNumberOfPages(); renderPageHeaderSync(doc, _currentTopicKey, accentRgb); addPageNumber(doc, pageNum, accentRgb); sourceY = MARGIN_TOP + HEADER_TOTAL; }
                _setFont(doc, 'italic'); doc.setFontSize(FONT_SIZES.footnote); doc.setTextColor(130, 130, 130);
                const sourceText = stripHtml(sourceHtml).trim();
                if (sourceText) {
                    const sourceLines = splitTextToLines(doc, 'Sources: ' + sourceText, CONTENT_WIDTH);
                    for (const line of sourceLines) {
                        if (sourceY + 4 > bottomLimit) { doc.addPage(); pageNum = doc.internal.getNumberOfPages(); renderPageHeaderSync(doc, _currentTopicKey, accentRgb); addPageNumber(doc, pageNum, accentRgb); sourceY = MARGIN_TOP + HEADER_TOTAL; }
                        doc.text(line, MARGIN_LEFT, sourceY); sourceY += getLineHeight(FONT_SIZES.footnote);
                    }
                }
            }
        }
    }
}

async function renderBackCoverPage(doc, accentRgb, topicKey) {
    const ac = parseRgb(accentRgb);
    doc.addPage();
    doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');
    const backCoverImageUrl = COVER_IMAGES[topicKey] || COVER_IMAGES.explore_default;
    if (backCoverImageUrl) {
        const img = await loadImageAsBase64(backCoverImageUrl);
        if (img) { try { doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT); } catch (e) {} }
    }
    doc.setFillColor(Math.min(255, ac.r + 25), Math.min(255, ac.g + 25), Math.min(255, ac.b + 25));
    doc.circle(PAGE_WIDTH / 2, PAGE_HEIGHT / 2 - 30, 80, 'F');
    doc.setFillColor(Math.max(0, ac.r - 30), Math.max(0, ac.g - 30), Math.max(0, ac.b - 30));
    doc.roundedRect(-10, PAGE_HEIGHT - 120, 100, 60, 0, 0, 'F');
    doc.roundedRect(PAGE_WIDTH - 60, 40, 80, 50, 0, 0, 'F');
    doc.setFillColor(255, 255, 255, 0.06); doc.circle(40, 80, 25, 'F'); doc.circle(PAGE_WIDTH - 30, PAGE_HEIGHT - 60, 30, 'F');

    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.backCoverBrand); doc.setTextColor(255, 255, 255);
    doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT / 2 - 30, { align: 'center' });
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.backCoverSub); doc.setTextColor(255, 255, 255, 0.9);
    doc.text('Community Topics Guide', PAGE_WIDTH / 2, PAGE_HEIGHT / 2 - 10, { align: 'center' });
    doc.setDrawColor(255, 255, 255, 0.4); doc.setLineWidth(0.5);
    doc.line(PAGE_WIDTH / 2 - 30, PAGE_HEIGHT / 2, PAGE_WIDTH / 2 + 30, PAGE_HEIGHT / 2);
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.backCoverInfo); doc.setTextColor(255, 255, 255, 0.8);
    doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT / 2 + 15, { align: 'center' });
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.text('Generated on ' + dateStr, PAGE_WIDTH / 2, PAGE_HEIGHT / 2 + 28, { align: 'center' });
    doc.setFontSize(8); doc.setTextColor(255, 255, 255, 0.5);
    doc.text('Thank you for being part of the CDISCOVERY community.', PAGE_WIDTH / 2, PAGE_HEIGHT - 30, { align: 'center' });
}

// ─── Article Content (extracted from app.js topicArticles) ───
// NOTE: This is a LARGE data set. We'll read it from app.js at runtime.
// For now, we define a function that extracts articles from the app.js file.

async function loadTopicArticles() {
    const appJsPath = path.join(__dirname, 'app.js');
    const content = fs.readFileSync(appJsPath, 'utf-8');

    // Extract topicArticles object using eval in a sandboxed way
    // We find the const topicArticles = { ... }; block
    const startMarker = 'const topicArticles = {';
    const startIdx = content.indexOf(startMarker);
    if (startIdx === -1) throw new Error('Could not find topicArticles in app.js');

    // Find the matching closing brace
    let braceCount = 0, endIdx = -1;
    for (let i = startIdx + startMarker.length - 1; i < content.length; i++) {
        if (content[i] === '{') braceCount++;
        if (content[i] === '}') { braceCount--; if (braceCount === 0) { endIdx = i + 1; break; } }
    }
    if (endIdx === -1) throw new Error('Could not parse topicArticles');

    const objStr = content.substring(startIdx + 'const topicArticles = '.length, endIdx);
    return eval('(' + objStr + ')');
}

// ─── Main Generation ───

async function generateTopicGuidePDF(topicName, guideData, articles) {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    await loadAndRegisterCJKFont(doc);

    const accentRgb = guideData.accentRgb || '0, 150, 136';
    _currentTopicKey = topicName;

    await loadImageAsBase64(COVER_IMAGES[topicName] || COVER_IMAGES.explore_default);

    await renderCoverPage(doc, guideData, accentRgb, topicName);
    await renderGuideSummaryPage(doc, guideData, accentRgb, topicName);
    if (articles.length > 0) await renderArticlePages(doc, articles, accentRgb, topicName);
    await renderBackCoverPage(doc, accentRgb, topicName);

    const filename = 'topic-' + topicName + '.pdf';
    const outputPath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(outputPath, Buffer.from(doc.output('arraybuffer')));
    console.log('  ✓ ' + filename + ' (' + (fs.statSync(outputPath).size / 1024).toFixed(0) + ' KB)');
    return filename;
}

async function generateArticlePDF(topicName, articleIndex, guideData, article) {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    await loadAndRegisterCJKFont(doc);

    const accentRgb = (guideData && guideData.accentRgb) || categoryColors[topicName] || '0, 150, 136';
    _currentTopicKey = topicName;
    const ac = parseRgb(accentRgb);

    await loadImageAsBase64(COVER_IMAGES[topicName] || COVER_IMAGES.explore_default);

    // Cover page
    doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');
    const coverImageUrl = COVER_IMAGES[topicName] || COVER_IMAGES.explore_default;
    if (coverImageUrl) {
        const img = await loadImageAsBase64(coverImageUrl);
        if (img) { try { doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT); } catch (e) {} }
    }
    doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30)); doc.roundedRect(-20, 40, 120, 120, 0, 0, 'F');
    doc.setFillColor(Math.max(0, ac.r - 40), Math.max(0, ac.g - 40), Math.max(0, ac.b - 40)); doc.roundedRect(140, 180, 100, 100, 0, 0, 'F');
    doc.setFillColor(255, 255, 255, 0.08); doc.circle(50, 230, 35, 'F');
    doc.setFillColor(Math.min(255, ac.r + 60), Math.min(255, ac.g + 60), Math.min(255, ac.b + 60)); doc.circle(170, 70, 20, 'F');

    const coverTopicTitle = sanitizeForPDF((guideData && guideData.title) || topicName.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()));
    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.coverSubtitle); doc.setTextColor(255, 255, 255, 0.8);
    const topicTitleLines = splitTextToLines(doc, coverTopicTitle, CONTENT_WIDTH + 20);
    let topicTitleY = 80;
    for (const line of topicTitleLines) { doc.text(line, PAGE_WIDTH / 2, topicTitleY, { align: 'center' }); topicTitleY += FONT_SIZES.coverSubtitle * 1.3; }

    const coverArticleTitle = sanitizeForPDF(article.title || '');
    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.coverTitle); doc.setTextColor(255, 255, 255);
    const titleLines = splitTextToLines(doc, coverArticleTitle, CONTENT_WIDTH + 20);
    let titleY = Math.max(topicTitleY + 15, 120);
    for (const line of titleLines) { doc.text(line, PAGE_WIDTH / 2, titleY, { align: 'center' }); titleY += FONT_SIZES.coverTitle * 1.2; }

    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.coverBrand); doc.setTextColor(255, 255, 255);
    doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT - 55, { align: 'center' });
    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.coverUrl); doc.setTextColor(255, 255, 255, 0.8);
    doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT - 42, { align: 'center' });
    doc.setDrawColor(255, 255, 255, 0.4); doc.setLineWidth(0.5);
    doc.line(PAGE_WIDTH / 2 - 40, PAGE_HEIGHT - 65, PAGE_WIDTH / 2 + 40, PAGE_HEIGHT - 65);

    // Content page
    doc.addPage();
    let pageNum = doc.internal.getNumberOfPages();
    await renderPageHeader(doc, topicName, accentRgb);
    addPageNumber(doc, pageNum, accentRgb);
    let y = MARGIN_TOP + HEADER_TOTAL;

    _setFont(doc, 'bold'); doc.setFontSize(FONT_SIZES.articleTitle); doc.setTextColor(30, 30, 30);
    const aTitleLines = splitTextToLines(doc, sanitizeForPDF(article.title || ''), CONTENT_WIDTH);
    for (const line of aTitleLines) { doc.text(line, MARGIN_LEFT, y); y += FONT_SIZES.articleTitle * 1.2; }
    y += 2;
    doc.setFillColor(ac.r, ac.g, ac.b); doc.rect(MARGIN_LEFT, y, 40, 1.2, 'F'); y += 8;

    _setFont(doc, 'normal'); doc.setFontSize(FONT_SIZES.body); doc.setTextColor(51, 51, 51);
    if (article.content) {
        const sourceRegex = /<div class="ar-source">([\s\S]*?)<\/div>/i;
        const sourceMatch = article.content.match(sourceRegex);
        let mainContent = article.content, sourceHtml = '';
        if (sourceMatch) { mainContent = article.content.replace(sourceRegex, '').trim(); sourceHtml = sourceMatch[1]; }
        const newY = renderRichText(doc, mainContent, y, accentRgb);
        if (sourceHtml) {
            const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;
            let sourceY = newY + 6;
            const currentPages = doc.internal.getNumberOfPages(); doc.setPage(currentPages);
            if (sourceY + 12 > bottomLimit) { doc.addPage(); pageNum = doc.internal.getNumberOfPages(); renderPageHeaderSync(doc, _currentTopicKey, accentRgb); addPageNumber(doc, pageNum, accentRgb); sourceY = MARGIN_TOP + HEADER_TOTAL; }
            _setFont(doc, 'italic'); doc.setFontSize(FONT_SIZES.footnote); doc.setTextColor(130, 130, 130);
            const sourceText = stripHtml(sourceHtml).trim();
            if (sourceText) {
                const sourceLines = splitTextToLines(doc, 'Sources: ' + sourceText, CONTENT_WIDTH);
                for (const line of sourceLines) {
                    if (sourceY + 4 > bottomLimit) { doc.addPage(); pageNum = doc.internal.getNumberOfPages(); renderPageHeaderSync(doc, _currentTopicKey, accentRgb); addPageNumber(doc, pageNum, accentRgb); sourceY = MARGIN_TOP + HEADER_TOTAL; }
                    doc.text(line, MARGIN_LEFT, sourceY); sourceY += getLineHeight(FONT_SIZES.footnote);
                }
            }
        }
    }

    await renderBackCoverPage(doc, accentRgb, topicName);

    const safeTopicName = topicName.replace(/[^a-zA-Z0-9-]/g, '_');
    const filename = 'article-' + safeTopicName + '-' + (articleIndex + 1) + '.pdf';
    const outputPath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(outputPath, Buffer.from(doc.output('arraybuffer')));
    console.log('  ✓ ' + filename + ' (' + (fs.statSync(outputPath).size / 1024).toFixed(0) + ' KB)');
    return filename;
}

// ─── Run ───

(async () => {
    console.log('=== CDISCOVERY PDF Generator ===\n');

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    // Load articles from app.js
    console.log('Loading article data from app.js...');
    let topicArticles;
    try {
        topicArticles = await loadTopicArticles();
        console.log('  ✓ Loaded ' + Object.keys(topicArticles).length + ' topic categories\n');
    } catch (e) {
        console.error('Failed to load topicArticles:', e.message);
        process.exit(1);
    }

    let totalGenerated = 0;

    // Generate topic guide PDFs
    console.log('--- Generating Topic Guide PDFs ---');
    for (const [topicName, guideData] of Object.entries(topicGuidesData)) {
        const articles = topicArticles[topicName] || [];
        console.log(`\n[${topicName}] ${guideData.title} (${articles.length} articles)`);
        try {
            await generateTopicGuidePDF(topicName, guideData, articles);
            totalGenerated++;
        } catch (e) {
            console.error('  ✗ FAILED:', e.message);
        }
    }

    // Generate individual article PDFs for topics that have extra articles not in guideData
    console.log('\n--- Generating Individual Article PDFs ---');
    for (const [topicName, articles] of Object.entries(topicArticles)) {
        const guideData = topicGuidesData[topicName] || null;
        for (let i = 0; i < articles.length; i++) {
            const filename = 'article-' + topicName.replace(/[^a-zA-Z0-9-]/g, '_') + '-' + (i + 1) + '.pdf';
            if (fs.existsSync(path.join(OUTPUT_DIR, filename))) {
                console.log('  → ' + filename + ' (already in topic guide, skipping)');
                continue;
            }
            console.log(`\n[${topicName}] Article ${i + 1}: ${articles[i].title}`);
            try {
                await generateArticlePDF(topicName, i, guideData, articles[i]);
                totalGenerated++;
            } catch (e) {
                console.error('  ✗ FAILED:', e.message);
            }
        }
    }

    // Also generate cityRoutes articles
    console.log('\n--- Generating City Route Article PDFs ---');
    try {
        const appContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf-8');
        const routeStartMarker = 'const cityRoutes = [';
        const routeStartIdx = appContent.indexOf(routeStartMarker);
        if (routeStartIdx !== -1) {
            // We'll just generate article PDFs for cityRoutes if they exist in topicArticles
            if (topicArticles['cityRoutes']) {
                for (let i = 0; i < topicArticles['cityRoutes'].length; i++) {
                    const filename = 'article-cityRoutes-' + (i + 1) + '.pdf';
                    console.log(`  [cityRoutes] Route ${i + 1}: ${topicArticles['cityRoutes'][i].title}`);
                    try {
                        await generateArticlePDF('cityRoutes', i, null, topicArticles['cityRoutes'][i]);
                        totalGenerated++;
                    } catch (e) {
                        console.error('  ✗ FAILED:', e.message);
                    }
                }
            }
            if (topicArticles['cityGuide_beijing']) {
                for (let i = 0; i < topicArticles['cityGuide_beijing'].length; i++) {
                    const filename = 'article-cityGuide_beijing-' + (i + 1) + '.pdf';
                    console.log(`  [cityGuide_beijing] Guide ${i + 1}: ${topicArticles['cityGuide_beijing'][i].title}`);
                    try {
                        await generateArticlePDF('cityGuide_beijing', i, null, topicArticles['cityGuide_beijing'][i]);
                        totalGenerated++;
                    } catch (e) {
                        console.error('  ✗ FAILED:', e.message);
                    }
                }
            }
        }
    } catch (e) {
        console.warn('City routes generation skipped:', e.message);
    }

    console.log('\n=== Done! Generated ' + totalGenerated + ' PDFs in ' + OUTPUT_DIR + ' ===');
})();
