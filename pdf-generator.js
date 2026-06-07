(function () {
    'use strict';

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

    /* ---- CJK (Chinese/Japanese/Korean) Font Support ---- */
    const CJK_FONT_URL = 'https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYxNbPzS5HE.ttf';
    let _cjkFontBase64 = null;
    let _cjkFontReady = false;

    function _hasCJK(text) {
        return /[\u2E80-\u2EFF\u3000-\u303F\u31C0-\u31EF\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u{20000}-\u{2A6DF}]/u.test(text || '');
    }

    async function loadAndRegisterCJKFont(doc) {
        if (_cjkFontReady) {
            try {
                doc.addFileToVFS('NotoSansSC.ttf', _cjkFontBase64);
                doc.addFont('NotoSansSC.ttf', 'NotoSansSC', 'normal');
            } catch (e) { /* already registered */ }
            return true;
        }
        try {
            const resp = await fetch(CJK_FONT_URL);
            if (!resp.ok) throw new Error('Font fetch failed: ' + resp.status);
            const buf = await resp.arrayBuffer();
            const bytes = new Uint8Array(buf);
            let bin = '';
            const chunk = 32768;
            for (let i = 0; i < bytes.length; i += chunk) {
                bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
            }
            _cjkFontBase64 = btoa(bin);
            doc.addFileToVFS('NotoSansSC.ttf', _cjkFontBase64);
            doc.addFont('NotoSansSC.ttf', 'NotoSansSC', 'normal');
            _cjkFontReady = true;
            return true;
        } catch (e) {
            console.warn('CJK font load failed, falling back to Helvetica:', e);
            return false;
        }
    }

    function _setFont(doc, style) {
        if (_cjkFontReady) {
            doc.setFont('NotoSansSC', 'normal');
        } else {
            doc.setFont('helvetica', style || 'normal');
        }
    }
    /* ---- End CJK Font Support ---- */

    const FONT_SIZES = {
        coverTitle: 36,
        coverSubtitle: 14,
        coverBrand: 24,
        coverUrl: 10,
        sectionHeader: 22,
        h3: 15,
        body: 11,
        bullet: 11,
        footnote: 8,
        pageNumber: 8,
        footer: 7,
        articleTitle: 18,
        backCoverBrand: 40,
        backCoverSub: 16,
        backCoverInfo: 10,
    };

    const LINE_HEIGHT_FACTOR = 1.45;
    const PARAGRAPH_SPACING = 5;
    const HEADING_SPACING = 6;

    function parseRgb(rgbStr) {
        const parts = rgbStr.split(',').map(s => parseInt(s.trim(), 10));
        return { r: parts[0] || 0, g: parts[1] || 0, b: parts[2] || 0 };
    }

    function createOverlay() {
        const existing = document.getElementById('pdf-gen-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'pdf-gen-overlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:99999;display:flex;align-items:center;justify-content:center;';

        const card = document.createElement('div');
        card.style.cssText = 'background:#fff;border-radius:16px;padding:48px 56px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.25);';

        const spinner = document.createElement('div');
        spinner.style.cssText = 'width:48px;height:48px;border:4px solid #e0e0e0;border-top:4px solid #1a73e8;border-radius:50%;animation:pdf-spin 0.8s linear infinite;margin:0 auto 20px;';

        const style = document.createElement('style');
        style.textContent = '@keyframes pdf-spin{to{transform:rotate(360deg)}}';
        document.head.appendChild(style);

        const text = document.createElement('div');
        text.textContent = 'Generating PDF (loading fonts)...';
        text.style.cssText = 'font-family:helvetica,sans-serif;font-size:16px;color:#333;';

        card.appendChild(spinner);
        card.appendChild(text);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
    }

    function removeOverlay() {
        const overlay = document.getElementById('pdf-gen-overlay');
        if (overlay) overlay.remove();
    }

    function downloadPDF(doc, filename) {
        try {
            const blob = doc.output('blob');
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 200);
        } catch (e) {
            doc.save(filename);
        }
    }

    function sanitizeForPDF(text) {
        if (!text) return '';
        var result = text
            .replace(/[\u2018\u2019\u201A\u2032]/g, "'")
            .replace(/[\u201C\u201D\u201E\u2033]/g, '"')
            .replace(/[\u2013\u2012]/g, '-')
            .replace(/[\u2014]/g, '--')
            .replace(/[\u2026]/g, '...')
            .replace(/[\u2022\u2023\u25E6\u2043]/g, '*')
            .replace(/[\u2122]/g, 'TM')
            .replace(/[\u00A9]/g, '(c)')
            .replace(/[\u00AE]/g, '(R)')
            .replace(/[\u00B0]/g, ' deg')
            .replace(/[\u00B1]/g, '+/-')
            .replace(/[\u00D7]/g, 'x')
            .replace(/[\u00F7]/g, '/');
        // Replace emoji and symbols not supported by PDF fonts
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

    function getLineHeight(fontSize) {
        return fontSize * LINE_HEIGHT_FACTOR;
    }

    function splitTextToLines(doc, text, maxWidth) {
        if (!text) return [];
        try {
            var lines = doc.splitTextToSize(text, maxWidth);
            return Array.isArray(lines) ? lines : [text];
        } catch (e) {
            var words = text.split(/\s+/);
            var result = [];
            var currentLine = '';
            for (var i = 0; i < words.length; i++) {
                var word = words[i];
                var testLine = currentLine ? currentLine + ' ' + word : word;
                var testWidth = doc.getTextWidth(testLine);
                if (testWidth > maxWidth && currentLine) {
                    result.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            }
            if (currentLine) result.push(currentLine);
            return result;
        }
    }

    async function loadImageAsBase64(url) {
        try {
            if (url.startsWith('data:')) {
                return { data: url, format: url.includes('png') ? 'PNG' : 'JPEG' };
            }
            const response = await fetch(url, { mode: 'cors' });
            if (!response.ok) throw new Error('Image fetch failed');
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const dataUrl = reader.result;
                    const format = dataUrl.includes('image/png') ? 'PNG' : 'JPEG';
                    resolve({ data: dataUrl, format });
                };
                reader.onerror = () => reject(new Error('FileReader failed'));
                reader.readAsDataURL(blob);
            });
        } catch (e) {
            console.warn('Could not load image for PDF:', e.message);
            return null;
        }
    }

    const _imageCache = {};
    async function getCachedImage(topicKey) {
        if (_imageCache[topicKey]) return _imageCache[topicKey];
        const url = COVER_IMAGES[topicKey] || COVER_IMAGES.explore_default;
        if (!url) return null;
        const img = await loadImageAsBase64(url);
        if (img) _imageCache[topicKey] = img;
        return img;
    }

    let _currentTopicKey = 'explore_default';

    const categoryColors = {
        travel: '0, 188, 212',
        food: '244, 67, 54',
        study: '26, 115, 232',
        work: '76, 175, 80',
        visa: '255, 152, 0',
        life: '33, 150, 243',
        entertainment: '233, 30, 99',
        business: '255, 193, 7',
        language: '0, 188, 212',
        rent: '156, 39, 176',
        school: '156, 39, 176',
        sim: '0, 150, 136',
        hospital: '0, 150, 136',
        cultural: '255, 87, 34'
    };

    const categoryLabels = {
        travel: 'Travel',
        food: 'Food',
        study: 'Study',
        work: 'Work',
        visa: 'Visa',
        life: 'Life',
        entertainment: 'Entertainment',
        business: 'Business',
        language: 'Language',
        rent: 'Rent',
        school: 'School',
        sim: 'SIM Card',
        hospital: 'Hospital',
        cultural: 'Cultural'
    };

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
        cityRoutes: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80',
        explore_default: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80',
        beijing: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80',
        shanghai: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80',
        guangzhou: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=1200&q=80',
        shenzhen: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80',
        chengdu: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&q=80',
        hangzhou: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1200&q=80',
    };

    const HEADER_IMG_STRIP = 10;
    const HEADER_BAR_HEIGHT = 12;
    const HEADER_TOTAL = HEADER_IMG_STRIP + HEADER_BAR_HEIGHT + 2;

    function renderPageHeaderSync(doc, topicKey, accentRgb) {
        const ac = parseRgb(accentRgb);

        const img = _imageCache[topicKey] || null;
        if (img) {
            try {
                doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, undefined, 'FAST');
            } catch (e) {
                doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30));
                doc.rect(0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, 'F');
            }
        } else {
            doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30));
            doc.rect(0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, 'F');
        }

        doc.setFillColor(ac.r * 0.6, ac.g * 0.6, ac.b * 0.6);
        doc.rect(0, HEADER_IMG_STRIP, PAGE_WIDTH, HEADER_BAR_HEIGHT, 'F');

        doc.setFillColor(ac.r, ac.g, ac.b);
        doc.rect(0, HEADER_IMG_STRIP + HEADER_BAR_HEIGHT, PAGE_WIDTH, 0.8, 'F');

        doc.setFillColor(
            Math.min(255, ac.r + 40),
            Math.min(255, ac.g + 40),
            Math.min(255, ac.b + 40)
        );
        doc.roundedRect(PAGE_WIDTH - 30, HEADER_IMG_STRIP + HEADER_BAR_HEIGHT - 4, 25, 3, 0, 0, 'F');

        return HEADER_TOTAL;
    }

    async function renderPageHeader(doc, topicKey, accentRgb) {
        const ac = parseRgb(accentRgb);

        const img = await getCachedImage(topicKey);
        if (img) {
            try {
                doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, undefined, 'FAST');
            } catch (e) {
                doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30));
                doc.rect(0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, 'F');
            }
        } else {
            doc.setFillColor(Math.min(255, ac.r + 30), Math.min(255, ac.g + 30), Math.min(255, ac.b + 30));
            doc.rect(0, 0, PAGE_WIDTH, HEADER_IMG_STRIP, 'F');
        }

        doc.setFillColor(ac.r * 0.6, ac.g * 0.6, ac.b * 0.6);
        doc.rect(0, HEADER_IMG_STRIP, PAGE_WIDTH, HEADER_BAR_HEIGHT, 'F');

        doc.setFillColor(ac.r, ac.g, ac.b);
        doc.rect(0, HEADER_IMG_STRIP + HEADER_BAR_HEIGHT, PAGE_WIDTH, 0.8, 'F');

        doc.setFillColor(
            Math.min(255, ac.r + 40),
            Math.min(255, ac.g + 40),
            Math.min(255, ac.b + 40)
        );
        doc.roundedRect(PAGE_WIDTH - 30, HEADER_IMG_STRIP + HEADER_BAR_HEIGHT - 4, 25, 3, 0, 0, 'F');

        return HEADER_TOTAL;
    }

    function addPageNumber(doc, pageNum, accentColor) {
        const ac = parseRgb(accentColor);

        doc.setFillColor(ac.r, ac.g, ac.b);
        doc.rect(MARGIN_LEFT, PAGE_HEIGHT - 14, CONTENT_WIDTH, 0.3, 'F');

        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.pageNumber);
        doc.setTextColor(ac.r, ac.g, ac.b);
        doc.text(String(pageNum), CONTENT_RIGHT, PAGE_HEIGHT - 10, { align: 'right' });

        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.footer);
        doc.setTextColor(150, 150, 150);
        doc.text(FOOTER_TEXT, MARGIN_LEFT, PAGE_HEIGHT - 10);
    }

    function renderRichText(doc, html, startY, accentColor, options) {
        const opts = Object.assign({ fontSize: FONT_SIZES.body, maxWidth: CONTENT_WIDTH }, options);
        const ac = parseRgb(accentColor);
        let y = startY;
        let pageNum = doc.internal.getNumberOfPages();
        const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;

        function ensureSpace(needed) {
            if (y + needed > bottomLimit) {
                addPageNumber(doc, pageNum, accentColor);
                doc.addPage();
                pageNum = doc.internal.getNumberOfPages();
                renderPageHeaderSync(doc, _currentTopicKey, accentColor);
                y = MARGIN_TOP + HEADER_TOTAL;
                addPageNumber(doc, pageNum, accentColor);
            }
        }

        function parseNodes(htmlStr) {
            const nodes = [];
            const tagRegex = /<(\/?)(strong|b|em|i|h3|p|ul|li|a)\b([^>]*)>/gi;
            let lastIndex = 0;
            let match;

            while ((match = tagRegex.exec(htmlStr)) !== null) {
                if (match.index > lastIndex) {
                    const textContent = htmlStr.substring(lastIndex, match.index);
                    if (textContent.trim()) {
                        nodes.push({ type: 'text', text: textContent });
                    }
                }

                const isClosing = match[1] === '/';
                const tagName = match[2].toLowerCase();
                const attrs = match[3] || '';

                if (isClosing) {
                    nodes.push({ type: 'closeTag', tag: tagName });
                } else if (tagName === 'a') {
                    const hrefMatch = attrs.match(/href=["']([^"']+)["']/);
                    nodes.push({ type: 'openTag', tag: 'a', href: hrefMatch ? hrefMatch[1] : '' });
                } else {
                    nodes.push({ type: 'openTag', tag: tagName });
                }
                lastIndex = match.index + match[0].length;
            }

            if (lastIndex < htmlStr.length) {
                const remaining = htmlStr.substring(lastIndex);
                if (remaining.trim()) {
                    nodes.push({ type: 'text', text: remaining });
                }
            }
            return nodes;
        }

        const cleanHtml = stripHtml(html);
        const nodes = parseNodes(cleanHtml);

        let boldCount = 0;
        let italicCount = 0;
        let currentHref = null;
        let listDepth = 0;
        let isFirstListItem = false;
        let currentFontSize = opts.fontSize;

        function getCurrentFontStyle() {
            if (boldCount > 0 && italicCount > 0) return 'bolditalic';
            if (boldCount > 0) return 'bold';
            if (italicCount > 0) return 'italic';
            return 'normal';
        }

        function renderTextNode(text) {
            const cleaned = text.replace(/\s+/g, ' ').trim();
            if (!cleaned) return;

            const fontStyle = getCurrentFontStyle();
            _setFont(doc, fontStyle);
            doc.setFontSize(currentFontSize);
            doc.setTextColor(51, 51, 51);

            var textLines = doc.splitTextToSize(cleaned, opts.maxWidth);
            for (var li = 0; li < textLines.length; li++) {
                var line = textLines[li];
                ensureSpace(getLineHeight(currentFontSize));
                _setFont(doc, fontStyle);
                doc.setFontSize(currentFontSize);
                doc.setTextColor(51, 51, 51);
                if (currentHref) {
                    doc.setTextColor(ac.r, ac.g, ac.b);
                    var linkWidth = doc.getTextWidth(line);
                    doc.text(line, MARGIN_LEFT, y);
                    doc.link(MARGIN_LEFT, y - currentFontSize * 0.35, linkWidth, currentFontSize * 0.5, { url: currentHref });
                    doc.setTextColor(51, 51, 51);
                } else {
                    doc.text(line, MARGIN_LEFT, y);
                }
                y += getLineHeight(currentFontSize);
            }
        }

        function renderParagraphText(text, prefix) {
            const cleaned = text.replace(/\s+/g, ' ').trim();
            if (!cleaned && !prefix) return;

            const fullText = prefix ? prefix + cleaned : cleaned;
            const fontStyle = getCurrentFontStyle();
            _setFont(doc, fontStyle);
            doc.setFontSize(currentFontSize);
            doc.setTextColor(51, 51, 51);

            var textLines = doc.splitTextToSize(fullText, opts.maxWidth);
            for (var li = 0; li < textLines.length; li++) {
                var line = textLines[li];
                ensureSpace(getLineHeight(currentFontSize));
                _setFont(doc, fontStyle);
                doc.setFontSize(currentFontSize);
                doc.setTextColor(51, 51, 51);
                if (currentHref && !prefix) {
                    doc.setTextColor(ac.r, ac.g, ac.b);
                    doc.text(line, MARGIN_LEFT, y);
                    var lw = doc.getTextWidth(line);
                    doc.link(MARGIN_LEFT, y - currentFontSize * 0.35, lw, currentFontSize * 0.5, { url: currentHref });
                    doc.setTextColor(51, 51, 51);
                } else {
                    doc.text(line, MARGIN_LEFT, y);
                }
                y += getLineHeight(currentFontSize);
            }
        }

        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];

            if (node.type === 'openTag') {
                if (node.tag === 'strong' || node.tag === 'b') {
                    boldCount++;
                } else if (node.tag === 'em' || node.tag === 'i') {
                    italicCount++;
                } else if (node.tag === 'h3') {
                    boldCount++;
                    currentFontSize = FONT_SIZES.h3;
                    y += HEADING_SPACING;
                } else if (node.tag === 'p') {
                    y += PARAGRAPH_SPACING;
                } else if (node.tag === 'ul') {
                    listDepth++;
                    isFirstListItem = true;
                } else if (node.tag === 'li') {
                    if (!isFirstListItem) {
                        y += 2;
                    }
                    isFirstListItem = false;
                } else if (node.tag === 'a') {
                    currentHref = node.href;
                }
            } else if (node.type === 'closeTag') {
                if (node.tag === 'strong' || node.tag === 'b') {
                    boldCount = Math.max(0, boldCount - 1);
                } else if (node.tag === 'em' || node.tag === 'i') {
                    italicCount = Math.max(0, italicCount - 1);
                } else if (node.tag === 'h3') {
                    boldCount = Math.max(0, boldCount - 1);
                    currentFontSize = opts.fontSize;
                    y += 2;
                } else if (node.tag === 'p') {
                    y += 2;
                } else if (node.tag === 'ul') {
                    listDepth = Math.max(0, listDepth - 1);
                    if (listDepth === 0) y += 3;
                } else if (node.tag === 'a') {
                    currentHref = null;
                }
            } else if (node.type === 'text') {
                if (listDepth > 0) {
                    var indent = '';
                    for (var d = 1; d < listDepth; d++) indent += '  ';
                    renderParagraphText(node.text, indent + '* ');
                } else {
                    renderTextNode(node.text);
                }
            }
        }

        return y;
    }

    async function renderCoverPage(doc, guideData, accentRgb, topicKey) {
        const ac = parseRgb(accentRgb);

        doc.setFillColor(ac.r, ac.g, ac.b);
        doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

        const coverImageUrl = COVER_IMAGES[topicKey] || COVER_IMAGES.explore_default;
        if (coverImageUrl) {
            const img = await loadImageAsBase64(coverImageUrl);
            if (img) {
                try {
                    doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
                } catch (e) {
                    console.warn('Could not add cover image:', e.message);
                }
            }
        }

        doc.setFillColor(
            Math.min(255, ac.r + 30),
            Math.min(255, ac.g + 30),
            Math.min(255, ac.b + 30)
        );
        doc.roundedRect(-20, 40, 120, 120, 0, 0, 'F');

        doc.setFillColor(
            Math.max(0, ac.r - 40),
            Math.max(0, ac.g - 40),
            Math.max(0, ac.b - 40)
        );
        doc.roundedRect(140, 180, 100, 100, 0, 0, 'F');

        doc.setFillColor(255, 255, 255, 0.08);
        doc.circle(50, 230, 35, 'F');

        doc.setFillColor(
            Math.min(255, ac.r + 60),
            Math.min(255, ac.g + 60),
            Math.min(255, ac.b + 60)
        );
        doc.circle(170, 70, 20, 'F');

        doc.setFillColor(
            Math.max(0, ac.r - 60),
            Math.max(0, ac.g - 60),
            Math.max(0, ac.b - 60)
        );
        doc.roundedRect(30, 150, 50, 8, 0, 0, 'F');

        doc.setFillColor(255, 255, 255);
        doc.roundedRect(90, 130, 70, 6, 0, 0, 'F');

        const title = sanitizeForPDF(guideData.title || '');
        _setFont(doc, 'bold');
        doc.setFontSize(FONT_SIZES.coverTitle);
        doc.setTextColor(255, 255, 255);
        const titleLines = splitTextToLines(doc, title, CONTENT_WIDTH + 20);
        let titleY = 100;
        for (const line of titleLines) {
            doc.text(line, PAGE_WIDTH / 2, titleY, { align: 'center' });
            titleY += FONT_SIZES.coverTitle * 1.2;
        }

        const subtitle = sanitizeForPDF(guideData.subtitle || '');
        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.coverSubtitle);
        doc.setTextColor(255, 255, 255, 0.9);
        const subLines = splitTextToLines(doc, subtitle, CONTENT_WIDTH);
        let subY = titleY + 8;
        for (const line of subLines) {
            doc.text(line, PAGE_WIDTH / 2, subY, { align: 'center' });
            subY += FONT_SIZES.coverSubtitle * 1.4;
        }

        _setFont(doc, 'bold');
        doc.setFontSize(FONT_SIZES.coverBrand);
        doc.setTextColor(255, 255, 255);
        doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT - 55, { align: 'center' });

        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.coverUrl);
        doc.setTextColor(255, 255, 255, 0.8);
        doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT - 42, { align: 'center' });

        doc.setDrawColor(255, 255, 255, 0.4);
        doc.setLineWidth(0.5);
        doc.line(PAGE_WIDTH / 2 - 40, PAGE_HEIGHT - 65, PAGE_WIDTH / 2 + 40, PAGE_HEIGHT - 65);
    }

    async function renderGuideSummaryPage(doc, guideData, accentRgb, topicKey) {
        const ac = parseRgb(accentRgb);

        doc.addPage();
        const pageNum = doc.internal.getNumberOfPages();
        await renderPageHeader(doc, topicKey || _currentTopicKey, accentRgb);
        addPageNumber(doc, pageNum, accentRgb);

        let y = MARGIN_TOP + HEADER_TOTAL;

        _setFont(doc, 'bold');
        doc.setFontSize(FONT_SIZES.sectionHeader);
        doc.setTextColor(ac.r, ac.g, ac.b);
        doc.text(sanitizeForPDF(guideData.title || 'Guide'), MARGIN_LEFT, y);
        y += 8;

        doc.setFillColor(ac.r, ac.g, ac.b);
        doc.rect(MARGIN_LEFT, y, 50, 1.5, 'F');
        y += 10;

        if (guideData.subtitle) {
            _setFont(doc, 'italic');
            doc.setFontSize(FONT_SIZES.body + 1);
            doc.setTextColor(100, 100, 100);
            const subLines = splitTextToLines(doc, sanitizeForPDF(guideData.subtitle), CONTENT_WIDTH);
            for (const line of subLines) {
                doc.text(line, MARGIN_LEFT, y);
                y += getLineHeight(FONT_SIZES.body + 1);
            }
            y += 6;
        }

        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.body);
        doc.setTextColor(51, 51, 51);

        if (guideData.content) {
            renderRichText(doc, guideData.content, y, accentRgb);
        }
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

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.body - 1);
            doc.setTextColor(ac.r, ac.g, ac.b);
            doc.text('Article ' + (idx + 1), MARGIN_LEFT, y);
            y += 7;

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.articleTitle);
            doc.setTextColor(30, 30, 30);
            const titleLines = splitTextToLines(doc, sanitizeForPDF(article.title || ''), CONTENT_WIDTH);
            for (const line of titleLines) {
                doc.text(line, MARGIN_LEFT, y);
                y += FONT_SIZES.articleTitle * 1.2;
            }
            y += 2;

            doc.setFillColor(ac.r, ac.g, ac.b);
            doc.rect(MARGIN_LEFT, y, 40, 1.2, 'F');
            y += 8;

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.body);
            doc.setTextColor(51, 51, 51);

            if (article.content) {
                const sourceRegex = /<div class="ar-source">([\s\S]*?)<\/div>/i;
                const sourceMatch = article.content.match(sourceRegex);
                let mainContent = article.content;
                let sourceHtml = '';

                if (sourceMatch) {
                    mainContent = article.content.replace(sourceRegex, '').trim();
                    sourceHtml = sourceMatch[1];
                }

                const newY = renderRichText(doc, mainContent, y, accentRgb);

                if (sourceHtml) {
                    const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;
                    let sourceY = newY + 6;

                    const currentPages = doc.internal.getNumberOfPages();
                    doc.setPage(currentPages);
                    const checkY = sourceY;

                    if (checkY + 12 > bottomLimit) {
                        doc.addPage();
                        pageNum = doc.internal.getNumberOfPages();
                        renderPageHeaderSync(doc, _currentTopicKey, accentRgb);
                        addPageNumber(doc, pageNum, accentRgb);
                        sourceY = MARGIN_TOP + HEADER_TOTAL;
                    }

                    _setFont(doc, 'italic');
                    doc.setFontSize(FONT_SIZES.footnote);
                    doc.setTextColor(130, 130, 130);
                    const sourceText = stripHtml(sourceHtml).trim();
                    if (sourceText) {
                        const sourceLines = splitTextToLines(doc, 'Sources: ' + sourceText, CONTENT_WIDTH);
                        for (const line of sourceLines) {
                            if (sourceY + 4 > bottomLimit) {
                                doc.addPage();
                                pageNum = doc.internal.getNumberOfPages();
                                renderPageHeaderSync(doc, _currentTopicKey, accentRgb);
                                addPageNumber(doc, pageNum, accentRgb);
                                sourceY = MARGIN_TOP + HEADER_TOTAL;
                            }
                            doc.text(line, MARGIN_LEFT, sourceY);
                            sourceY += getLineHeight(FONT_SIZES.footnote);
                        }
                    }
                }
            }
        }
    }

    async function renderBackCoverPage(doc, accentRgb, topicKey) {
        const ac = parseRgb(accentRgb);

        doc.addPage();

        doc.setFillColor(ac.r, ac.g, ac.b);
        doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

        const backCoverImageUrl = COVER_IMAGES[topicKey] || COVER_IMAGES.explore_default;
        if (backCoverImageUrl) {
            const img = await loadImageAsBase64(backCoverImageUrl);
            if (img) {
                try {
                    doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
                } catch (e) {
                    console.warn('Could not add back cover image:', e.message);
                }
            }
        }

        doc.setFillColor(
            Math.min(255, ac.r + 25),
            Math.min(255, ac.g + 25),
            Math.min(255, ac.b + 25)
        );
        doc.circle(PAGE_WIDTH / 2, PAGE_HEIGHT / 2 - 30, 80, 'F');

        doc.setFillColor(
            Math.max(0, ac.r - 30),
            Math.max(0, ac.g - 30),
            Math.max(0, ac.b - 30)
        );
        doc.roundedRect(-10, PAGE_HEIGHT - 120, 100, 60, 0, 0, 'F');
        doc.roundedRect(PAGE_WIDTH - 60, 40, 80, 50, 0, 0, 'F');

        doc.setFillColor(255, 255, 255, 0.06);
        doc.circle(40, 80, 25, 'F');
        doc.circle(PAGE_WIDTH - 30, PAGE_HEIGHT - 60, 30, 'F');

        _setFont(doc, 'bold');
        doc.setFontSize(FONT_SIZES.backCoverBrand);
        doc.setTextColor(255, 255, 255);
        doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT / 2 - 30, { align: 'center' });

        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.backCoverSub);
        doc.setTextColor(255, 255, 255, 0.9);
        doc.text('Community Topics Guide', PAGE_WIDTH / 2, PAGE_HEIGHT / 2 - 10, { align: 'center' });

        doc.setDrawColor(255, 255, 255, 0.4);
        doc.setLineWidth(0.5);
        doc.line(PAGE_WIDTH / 2 - 30, PAGE_HEIGHT / 2, PAGE_WIDTH / 2 + 30, PAGE_HEIGHT / 2);

        _setFont(doc, 'normal');
        doc.setFontSize(FONT_SIZES.backCoverInfo);
        doc.setTextColor(255, 255, 255, 0.8);
        doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT / 2 + 15, { align: 'center' });

        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        doc.text('Generated on ' + dateStr, PAGE_WIDTH / 2, PAGE_HEIGHT / 2 + 28, { align: 'center' });

        doc.setFontSize(8);
        doc.setTextColor(255, 255, 255, 0.5);
        doc.text('Thank you for being part of the CDISCOVERY community.', PAGE_WIDTH / 2, PAGE_HEIGHT - 30, { align: 'center' });
    }

    async function generateTopicPDF(topicName) {
        if (typeof window.jspdf === 'undefined' || !window.jspdf.jsPDF) {
            alert('jsPDF library is not loaded. Please ensure the page has loaded completely.');
            return null;
        }

        const { jsPDF } = window.jspdf;

        if (typeof topicGuidesData === 'undefined') {
            alert('Topic data not available. Please ensure the page has loaded completely.');
            return null;
        }

        const guideData = topicGuidesData[topicName];
        if (!guideData) {
            alert('No guide data found for topic: ' + topicName);
            return null;
        }

        createOverlay();

        try {
            await new Promise(resolve => setTimeout(resolve, 50));

            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            await loadAndRegisterCJKFont(doc);

            const accentRgb = guideData.accentRgb || '0, 150, 136';
            _currentTopicKey = topicName;

            await getCachedImage(topicName);
            await renderCoverPage(doc, guideData, accentRgb, topicName);

            await renderGuideSummaryPage(doc, guideData, accentRgb, topicName);

            const articles = (typeof topicArticles !== 'undefined' && topicArticles[topicName]) || [];
            if (articles.length > 0) {
                await renderArticlePages(doc, articles, accentRgb, topicName);
            }

            await renderBackCoverPage(doc, accentRgb, topicName);

            const filename = 'cdiscovery-' + topicName + '-guide.pdf';
            downloadPDF(doc, filename);

            return doc;

        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('Failed to generate PDF: ' + error.message);
            return null;
        } finally {
            removeOverlay();
        }
    }

    async function generateArticlePDF(topicName, articleIndex) {
        if (typeof window.jspdf === 'undefined' || !window.jspdf.jsPDF) {
            alert('jsPDF library is not loaded. Please ensure the page has loaded completely.');
            return null;
        }

        const { jsPDF } = window.jspdf;

        if (typeof topicGuidesData === 'undefined') {
            alert('Topic data not available. Please ensure the page has loaded completely.');
            return null;
        }

        const guideData = topicGuidesData[topicName] || null;

        if (typeof topicArticles === 'undefined' || !topicArticles[topicName] || !topicArticles[topicName][articleIndex]) {
            alert('No article found at index ' + articleIndex + ' for topic: ' + topicName);
            return null;
        }

        const article = topicArticles[topicName][articleIndex];

        createOverlay();

        try {
            await new Promise(resolve => setTimeout(resolve, 50));

            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            await loadAndRegisterCJKFont(doc);

            const accentRgb = (guideData && guideData.accentRgb) || '0, 150, 136';
            _currentTopicKey = topicName;
            const ac = parseRgb(accentRgb);

            await getCachedImage(topicName);

            doc.setFillColor(ac.r, ac.g, ac.b);
            doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

            const articleCoverImageUrl = COVER_IMAGES[topicName] || COVER_IMAGES.explore_default;
            if (articleCoverImageUrl) {
                const img = await loadImageAsBase64(articleCoverImageUrl);
                if (img) {
                    try {
                        doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
                    } catch (e) {
                        console.warn('Could not add article cover image:', e.message);
                    }
                }
            }

            doc.setFillColor(
                Math.min(255, ac.r + 30),
                Math.min(255, ac.g + 30),
                Math.min(255, ac.b + 30)
            );
            doc.roundedRect(-20, 40, 120, 120, 0, 0, 'F');

            doc.setFillColor(
                Math.max(0, ac.r - 40),
                Math.max(0, ac.g - 40),
                Math.max(0, ac.b - 40)
            );
            doc.roundedRect(140, 180, 100, 100, 0, 0, 'F');

            doc.setFillColor(255, 255, 255, 0.08);
            doc.circle(50, 230, 35, 'F');

            doc.setFillColor(
                Math.min(255, ac.r + 60),
                Math.min(255, ac.g + 60),
                Math.min(255, ac.b + 60)
            );
            doc.circle(170, 70, 20, 'F');

            const coverTopicTitle = sanitizeForPDF((guideData && guideData.title) || topicName.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()));
            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.coverSubtitle);
            doc.setTextColor(255, 255, 255, 0.8);
            const topicTitleLines = splitTextToLines(doc, coverTopicTitle, CONTENT_WIDTH + 20);
            let topicTitleY = 80;
            for (const line of topicTitleLines) {
                doc.text(line, PAGE_WIDTH / 2, topicTitleY, { align: 'center' });
                topicTitleY += FONT_SIZES.coverSubtitle * 1.3;
            }

            const coverArticleTitle = sanitizeForPDF(article.title || '');
            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.coverTitle);
            doc.setTextColor(255, 255, 255);
            const titleLines = splitTextToLines(doc, coverArticleTitle, CONTENT_WIDTH + 20);
            let titleY = Math.max(topicTitleY + 15, 120);
            for (const line of titleLines) {
                doc.text(line, PAGE_WIDTH / 2, titleY, { align: 'center' });
                titleY += FONT_SIZES.coverTitle * 1.2;
            }

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.coverBrand);
            doc.setTextColor(255, 255, 255);
            doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT - 55, { align: 'center' });

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.coverUrl);
            doc.setTextColor(255, 255, 255, 0.8);
            doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT - 42, { align: 'center' });

            doc.setDrawColor(255, 255, 255, 0.4);
            doc.setLineWidth(0.5);
            doc.line(PAGE_WIDTH / 2 - 40, PAGE_HEIGHT - 65, PAGE_WIDTH / 2 + 40, PAGE_HEIGHT - 65);

            doc.addPage();
            let pageNum = doc.internal.getNumberOfPages();
            await renderPageHeader(doc, topicName, accentRgb);
            addPageNumber(doc, pageNum, accentRgb);

            let y = MARGIN_TOP + HEADER_TOTAL;

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.articleTitle);
            doc.setTextColor(30, 30, 30);
            const aTitleLines = splitTextToLines(doc, sanitizeForPDF(article.title || ''), CONTENT_WIDTH);
            for (const line of aTitleLines) {
                doc.text(line, MARGIN_LEFT, y);
                y += FONT_SIZES.articleTitle * 1.2;
            }
            y += 2;

            doc.setFillColor(ac.r, ac.g, ac.b);
            doc.rect(MARGIN_LEFT, y, 40, 1.2, 'F');
            y += 8;

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.body);
            doc.setTextColor(51, 51, 51);

            if (article.content) {
                const sourceRegex = /<div class="ar-source">([\s\S]*?)<\/div>/i;
                const sourceMatch = article.content.match(sourceRegex);
                let mainContent = article.content;
                let sourceHtml = '';

                if (sourceMatch) {
                    mainContent = article.content.replace(sourceRegex, '').trim();
                    sourceHtml = sourceMatch[1];
                }

                const newY = renderRichText(doc, mainContent, y, accentRgb);

                if (sourceHtml) {
                    const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;
                    let sourceY = newY + 6;

                    const currentPages = doc.internal.getNumberOfPages();
                    doc.setPage(currentPages);

                    if (sourceY + 12 > bottomLimit) {
                        doc.addPage();
                        pageNum = doc.internal.getNumberOfPages();
                        renderPageHeaderSync(doc, _currentTopicKey, accentRgb);
                        addPageNumber(doc, pageNum, accentRgb);
                        sourceY = MARGIN_TOP + HEADER_TOTAL;
                    }

                    _setFont(doc, 'italic');
                    doc.setFontSize(FONT_SIZES.footnote);
                    doc.setTextColor(130, 130, 130);
                    const sourceText = stripHtml(sourceHtml).trim();
                    if (sourceText) {
                        const sourceLines = splitTextToLines(doc, 'Sources: ' + sourceText, CONTENT_WIDTH);
                        for (const line of sourceLines) {
                            if (sourceY + 4 > bottomLimit) {
                                doc.addPage();
                                pageNum = doc.internal.getNumberOfPages();
                                renderPageHeaderSync(doc, _currentTopicKey, accentRgb);
                                addPageNumber(doc, pageNum, accentRgb);
                                sourceY = MARGIN_TOP + HEADER_TOTAL;
                            }
                            doc.text(line, MARGIN_LEFT, sourceY);
                            sourceY += getLineHeight(FONT_SIZES.footnote);
                        }
                    }
                }
            }

            await renderBackCoverPage(doc, accentRgb, topicName);

            const safeTopicName = topicName.replace(/[^a-zA-Z0-9-]/g, '_');
            const filename = 'cdiscovery-' + safeTopicName + '-article-' + (articleIndex + 1) + '.pdf';
            downloadPDF(doc, filename);

            return doc;

        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('Failed to generate PDF: ' + error.message);
            return null;
        } finally {
            removeOverlay();
        }
    }

    async function generateExplorePostPDF(postData) {
        if (typeof window.jspdf === 'undefined' || !window.jspdf.jsPDF) {
            alert('jsPDF library is not loaded. Please ensure the page has loaded completely.');
            return null;
        }

        const { jsPDF } = window.jspdf;

        if (!postData) {
            alert('No post data provided.');
            return null;
        }

        createOverlay();

        try {
            await new Promise(resolve => setTimeout(resolve, 50));

            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            await loadAndRegisterCJKFont(doc);

            const category = postData.category || 'life';
            const accentRgb = categoryColors[category] || categoryColors.life;
            _currentTopicKey = category;
            const ac = parseRgb(accentRgb);

            await getCachedImage(category);

            const coverTitle = postData.title
                ? sanitizeForPDF(postData.title)
                : sanitizeForPDF((postData.content || '').substring(0, 60));
            const authorName = sanitizeForPDF(postData.author || '');
            const country = sanitizeForPDF(postData.country || '');
            const city = sanitizeForPDF(postData.city || '');
            const categoryLabel = categoryLabels[category] || sanitizeForPDF(category);

            doc.setFillColor(ac.r, ac.g, ac.b);
            doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

            const exploreCoverImageUrl = postData.image_url || COVER_IMAGES[category] || COVER_IMAGES.explore_default;
            if (exploreCoverImageUrl) {
                const img = await loadImageAsBase64(exploreCoverImageUrl);
                if (img) {
                    try {
                        doc.addImage(img.data, img.format, 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
                    } catch (e) {
                        console.warn('Could not add explore cover image:', e.message);
                    }
                }
            }

            doc.setFillColor(
                Math.min(255, ac.r + 30),
                Math.min(255, ac.g + 30),
                Math.min(255, ac.b + 30)
            );
            doc.roundedRect(-20, 40, 120, 120, 0, 0, 'F');

            doc.setFillColor(
                Math.max(0, ac.r - 40),
                Math.max(0, ac.g - 40),
                Math.max(0, ac.b - 40)
            );
            doc.roundedRect(140, 180, 100, 100, 0, 0, 'F');

            doc.setFillColor(255, 255, 255, 0.08);
            doc.circle(50, 230, 35, 'F');

            doc.setFillColor(
                Math.min(255, ac.r + 60),
                Math.min(255, ac.g + 60),
                Math.min(255, ac.b + 60)
            );
            doc.circle(170, 70, 20, 'F');

            doc.setFillColor(
                Math.max(0, ac.r - 60),
                Math.max(0, ac.g - 60),
                Math.max(0, ac.b - 60)
            );
            doc.roundedRect(30, 150, 50, 8, 0, 0, 'F');

            doc.setFillColor(255, 255, 255);
            doc.roundedRect(90, 130, 70, 6, 0, 0, 'F');

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.coverTitle);
            doc.setTextColor(255, 255, 255);
            const titleLines = splitTextToLines(doc, coverTitle, CONTENT_WIDTH + 20);
            let titleY = 100;
            for (const line of titleLines) {
                doc.text(line, PAGE_WIDTH / 2, titleY, { align: 'center' });
                titleY += FONT_SIZES.coverTitle * 1.2;
            }

            const coverAuthorLine = authorName + (country ? '  |  ' + country : '');
            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.coverSubtitle);
            doc.setTextColor(255, 255, 255, 0.9);
            doc.text(coverAuthorLine, PAGE_WIDTH / 2, titleY + 10, { align: 'center' });

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.body);
            doc.setTextColor(255, 255, 255, 0.85);
            doc.text(categoryLabel.toUpperCase(), PAGE_WIDTH / 2, titleY + 24, { align: 'center' });

            if (city) {
                _setFont(doc, 'normal');
                doc.setFontSize(FONT_SIZES.body);
                doc.setTextColor(255, 255, 255, 0.75);
                doc.text(city, PAGE_WIDTH / 2, titleY + 34, { align: 'center' });
            }

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.coverBrand);
            doc.setTextColor(255, 255, 255);
            doc.text(BRAND_NAME, PAGE_WIDTH / 2, PAGE_HEIGHT - 55, { align: 'center' });

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.coverUrl);
            doc.setTextColor(255, 255, 255, 0.8);
            doc.text(BRAND_URL, PAGE_WIDTH / 2, PAGE_HEIGHT - 42, { align: 'center' });

            doc.setDrawColor(255, 255, 255, 0.4);
            doc.setLineWidth(0.5);
            doc.line(PAGE_WIDTH / 2 - 40, PAGE_HEIGHT - 65, PAGE_WIDTH / 2 + 40, PAGE_HEIGHT - 65);

            doc.addPage();
            let pageNum = doc.internal.getNumberOfPages();
            await renderPageHeader(doc, category, accentRgb);
            addPageNumber(doc, pageNum, accentRgb);

            let y = MARGIN_TOP + HEADER_TOTAL;

            _setFont(doc, 'bold');
            doc.setFontSize(FONT_SIZES.body + 1);
            doc.setTextColor(ac.r, ac.g, ac.b);
            doc.text(authorName, MARGIN_LEFT, y);

            const identityText = sanitizeForPDF(postData.identity || '');
            if (identityText) {
                const authorWidth = doc.getTextWidth(authorName);
                _setFont(doc, 'normal');
                doc.setFontSize(FONT_SIZES.footnote + 1);
                doc.setTextColor(150, 150, 150);
                doc.text('  ' + identityText, MARGIN_LEFT + authorWidth, y);
            }
            y += 5;

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.footnote + 1);
            doc.setTextColor(130, 130, 130);
            const metaLine = country + (country && postData.time ? '  |  ' : '') + sanitizeForPDF(postData.time || '');
            doc.text(metaLine, MARGIN_LEFT, y);
            y += 6;

            doc.setFillColor(ac.r, ac.g, ac.b);
            doc.rect(MARGIN_LEFT, y, CONTENT_WIDTH, 1.2, 'F');
            y += 8;

            _setFont(doc, 'normal');
            doc.setFontSize(FONT_SIZES.body);
            doc.setTextColor(51, 51, 51);

            const postContent = sanitizeForPDF(postData.content || '');
            if (postContent) {
                const contentLines = splitTextToLines(doc, postContent, CONTENT_WIDTH);
                const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;
                for (const line of contentLines) {
                    if (y + getLineHeight(FONT_SIZES.body) > bottomLimit) {
                        addPageNumber(doc, pageNum, accentRgb);
                        doc.addPage();
                        pageNum = doc.internal.getNumberOfPages();
                        renderPageHeaderSync(doc, _currentTopicKey, accentRgb);
                        y = MARGIN_TOP + HEADER_TOTAL;
                        addPageNumber(doc, pageNum, accentRgb);
                        _setFont(doc, 'normal');
                        doc.setFontSize(FONT_SIZES.body);
                        doc.setTextColor(51, 51, 51);
                    }
                    doc.text(line, MARGIN_LEFT, y);
                    y += getLineHeight(FONT_SIZES.body);
                }
                y += 4;
            }

            if (postData.image_url) {
                const imageData = await loadImageAsBase64(postData.image_url);
                if (imageData) {
                    const maxImgWidth = CONTENT_WIDTH;
                    const maxImgHeight = 120;
                    const bottomLimit = PAGE_HEIGHT - MARGIN_BOTTOM - 5;

                    let imgWidth = maxImgWidth;
                    let imgHeight = maxImgWidth * 0.6;

                    try {
                        const img = new Image();
                        img.src = imageData.data;
                        await new Promise((resolve, reject) => {
                            img.onload = resolve;
                            img.onerror = reject;
                        });
                        const aspect = img.naturalWidth / img.naturalHeight;
                        imgHeight = imgWidth / aspect;
                        if (imgHeight > maxImgHeight) {
                            imgHeight = maxImgHeight;
                            imgWidth = imgHeight * aspect;
                        }
                        if (imgWidth > maxImgWidth) {
                            imgWidth = maxImgWidth;
                            imgHeight = imgWidth / aspect;
                        }
                    } catch (e) {
                        imgWidth = maxImgWidth;
                        imgHeight = maxImgWidth * 0.6;
                    }

                    if (y + imgHeight > bottomLimit) {
                        addPageNumber(doc, pageNum, accentRgb);
                        doc.addPage();
                        pageNum = doc.internal.getNumberOfPages();
                        renderPageHeaderSync(doc, _currentTopicKey, accentRgb);
                        y = MARGIN_TOP + HEADER_TOTAL;
                        addPageNumber(doc, pageNum, accentRgb);
                    }

                    const imgX = MARGIN_LEFT + (CONTENT_WIDTH - imgWidth) / 2;
                    doc.addImage(imageData.data, imageData.format, imgX, y, imgWidth, imgHeight);
                    y += imgHeight + 5;
                }
            }

            addPageNumber(doc, pageNum, accentRgb);

            await renderBackCoverPage(doc, accentRgb, category);

            const safeId = String(postData.id || 'post').replace(/[^a-zA-Z0-9-]/g, '_');
            const filename = 'cdiscovery-explore-' + safeId + '.pdf';
            downloadPDF(doc, filename);

            return doc;

        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('Failed to generate PDF: ' + error.message);
            return null;
        } finally {
            removeOverlay();
        }
    }

    window.generateTopicPDF = generateTopicPDF;
    window.generateArticlePDF = generateArticlePDF;
    window.generateExplorePostPDF = generateExplorePostPDF;
})();
