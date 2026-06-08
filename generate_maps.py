#!/usr/bin/env python3
"""Generate 5 cartoon game-style map HTML files for the community project."""

import os

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

FONT_LINK = '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;900&family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet">'

BASE_STYLE = """
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    font-family: 'Noto Sans SC', 'Comic Neue', cursive, sans-serif;
    background: #f5e6c8;
    background-image:
        radial-gradient(ellipse at 20% 50%, rgba(210,180,140,0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(180,150,100,0.2) 0%, transparent 50%);
    min-height: 100vh;
    padding: 20px;
    color: #4a3728;
}
.map-page {
    max-width: 1100px;
    margin: 0 auto;
    background: #ede0c8;
    border: 4px dashed #8b6914;
    border-radius: 18px;
    padding: 30px 40px;
    box-shadow: 6px 6px 0 #c4a265, 10px 10px 20px rgba(0,0,0,0.15);
    position: relative;
    overflow: hidden;
}
.map-page::before {
    content: '';
    position: absolute;
    top: 8px; left: 8px; right: 8px; bottom: 8px;
    border: 2px dotted #b8944a;
    border-radius: 14px;
    pointer-events: none;
}
.download-hint {
    text-align: center;
    font-size: 12px;
    color: #8b6914;
    margin-bottom: 10px;
    font-family: 'Comic Neue', cursive;
}
.download-hint span {
    background: #8b6914;
    color: #f5e6c8;
    padding: 2px 10px;
    border-radius: 10px;
    font-weight: 700;
}
.map-title {
    text-align: center;
    margin-bottom: 6px;
}
.map-title h1 {
    font-size: 32px;
    font-weight: 900;
    color: #5a3e1b;
    text-shadow: 2px 2px 0 #d4b06a;
    display: inline-block;
    background: linear-gradient(180deg, #f5deb3 0%, #e8c87a 100%);
    border: 3px solid #8b6914;
    border-radius: 30px;
    padding: 8px 36px;
    box-shadow: 3px 3px 0 #a07828;
}
.map-subtitle {
    text-align: center;
    font-size: 15px;
    color: #7a5c30;
    margin-bottom: 24px;
    font-style: italic;
    font-family: 'Comic Neue', cursive;
}
.map-area {
    position: relative;
    width: 100%;
    min-height: 500px;
    margin: 0 auto 24px;
}
.location-marker {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: default;
}
.marker-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fff8e7 0%, #f0d68a 100%);
    border: 3px solid #8b6914;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 900;
    color: #5a3e1b;
    box-shadow: 2px 2px 0 #a07828, inset 0 0 8px rgba(255,255,255,0.5);
    font-family: 'Comic Neue', cursive;
}
.marker-label {
    margin-top: 4px;
    font-size: 11px;
    font-weight: 700;
    color: #5a3e1b;
    text-align: center;
    max-width: 90px;
    line-height: 1.2;
    background: rgba(245,230,200,0.85);
    padding: 2px 6px;
    border-radius: 6px;
    white-space: nowrap;
}
.marker-emoji {
    font-size: 20px;
    margin-bottom: 1px;
}
.building {
    position: absolute;
    background: rgba(139,105,20,0.12);
    border: 2px dashed #8b6914;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    color: #5a3e1b;
    z-index: 1;
}
.path-svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
}
.path-svg line, .path-svg path {
    stroke: #b8944a;
    stroke-width: 2;
    stroke-dasharray: 6 4;
    fill: none;
}
.legend {
    background: linear-gradient(135deg, #f5deb3 0%, #e8d5a0 100%);
    border: 3px solid #8b6914;
    border-radius: 14px;
    padding: 20px 28px;
    margin-top: 16px;
    box-shadow: 3px 3px 0 #a07828;
}
.legend h2 {
    font-size: 20px;
    color: #5a3e1b;
    margin-bottom: 14px;
    text-align: center;
    text-shadow: 1px 1px 0 #d4b06a;
}
.legend-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 24px;
}
.legend-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    line-height: 1.5;
    padding: 6px 10px;
    background: rgba(255,255,255,0.35);
    border-radius: 8px;
    border: 1px dashed #c4a265;
}
.legend-num {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #8b6914;
    color: #f5e6c8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 900;
    font-family: 'Comic Neue', cursive;
}
.legend-name { font-weight: 700; }
.legend-addr { color: #7a5c30; font-size: 12px; }
.legend-special { color: #8b4513; font-size: 12px; font-style: italic; }
.landmark {
    position: absolute;
    z-index: 1;
    text-align: center;
    transform: translate(-50%, -50%);
}
.landmark-icon {
    font-size: 28px;
}
.landmark-name {
    font-size: 11px;
    font-weight: 700;
    color: #5a3e1b;
    background: rgba(245,230,200,0.9);
    padding: 1px 6px;
    border-radius: 4px;
}
.zone {
    position: absolute;
    border-radius: 50%;
    opacity: 0.25;
    z-index: 0;
    border: 2px dashed;
}
.city-section {
    margin-bottom: 30px;
}
.city-section h2 {
    font-size: 22px;
    color: #5a3e1b;
    margin-bottom: 12px;
    padding-bottom: 6px;
    border-bottom: 2px dashed #b8944a;
}
.venue-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
}
.venue-card {
    background: rgba(255,255,255,0.4);
    border: 2px solid #c4a265;
    border-radius: 10px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.venue-card .vnum {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #8b6914;
    color: #f5e6c8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    flex-shrink: 0;
    font-family: 'Comic Neue', cursive;
}
.venue-card .vinfo { font-size: 13px; line-height: 1.4; }
.venue-card .vname { font-weight: 700; }
.venue-card .vaddr { color: #7a5c30; font-size: 11px; }
.category-label {
    font-size: 14px;
    font-weight: 700;
    color: #8b4513;
    margin: 12px 0 6px;
    display: flex;
    align-items: center;
    gap: 6px;
}
.hospital-card {
    background: rgba(255,255,255,0.4);
    border: 2px solid #c4a265;
    border-radius: 10px;
    padding: 12px 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
}
.hospital-card .hnum {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #8b6914;
    color: #f5e6c8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 900;
    flex-shrink: 0;
    font-family: 'Comic Neue', cursive;
}
.hospital-card .hinfo { font-size: 13px; line-height: 1.5; }
.hospital-card .hname { font-weight: 700; }
.hospital-card .haddr { color: #7a5c30; font-size: 12px; }
.hospital-card .htag { display: inline-block; font-size: 11px; padding: 1px 8px; border-radius: 8px; font-weight: 700; margin-top: 2px; }
.tag-public { background: rgba(66,133,244,0.15); color: #2563eb; border: 1px solid #93bbfd; }
.tag-private { background: rgba(239,68,68,0.15); color: #dc2626; border: 1px solid #fca5a5; }
.zone-card {
    background: rgba(255,255,255,0.4);
    border: 3px solid;
    border-radius: 14px;
    padding: 16px 20px;
    margin-bottom: 14px;
}
.zone-card .zname { font-size: 18px; font-weight: 900; }
.zone-card .zrent { font-size: 22px; font-weight: 900; margin: 4px 0; }
.zone-card .zdesc { font-size: 13px; color: #5a3e1b; }
@media print {
    body { background: #fff; padding: 0; }
    .map-page { box-shadow: none; border: 2px solid #888; }
    .download-hint { display: none; }
    @page { size: A4 landscape; margin: 10mm; }
}
@media (max-width: 768px) {
    .map-page { padding: 16px; }
    .map-title h1 { font-size: 22px; padding: 6px 20px; }
    .legend-grid { grid-template-columns: 1fr; }
    .venue-grid { grid-template-columns: 1fr; }
    .map-area { min-height: 400px; }
}
"""


def write_html(filename, content):
    path = os.path.join(OUTPUT_DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  Created: {filename}")


# ─── MAP 1: Beijing Breakfast ───────────────────────────────────────────────────

def gen_breakfast():
    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>北京传统早餐地图</title>
{FONT_LINK}
<style>{BASE_STYLE}
.map-area {{ height: 560px; }}
.building.palace {{
    left: 38%; top: 38%;
    width: 24%; height: 28%;
    background: rgba(180,50,50,0.12);
    border: 3px dashed #a03030;
    border-radius: 4px;
    font-size: 22px;
}}
</style>
</head>
<body>
<div class="map-page">
    <div class="download-hint"><span>⬇ Download as PDF — use Ctrl+P</span></div>
    <div class="map-title"><h1>🥣 北京传统早餐地图</h1></div>
    <div class="map-subtitle">Traditional Breakfast Near Forbidden City &amp; Wangfujing</div>

    <div class="map-area">
        <svg class="path-svg" viewBox="0 0 1000 560" preserveAspectRatio="none">
            <line x1="170" y1="100" x2="500" y2="230"/>
            <line x1="430" y1="60" x2="500" y2="230"/>
            <line x1="730" y1="100" x2="500" y2="230"/>
            <line x1="120" y1="430" x2="350" y2="320"/>
            <line x1="780" y1="220" x2="620" y2="280"/>
            <line x1="500" y1="480" x2="500" y2="350"/>
            <line x1="800" y1="380" x2="620" y2="320"/>
            <line x1="500" y1="480" x2="600" y2="480"/>
            <line x1="830" y1="480" x2="620" y2="350"/>
            <line x1="200" y1="250" x2="350" y2="280"/>
            <line x1="200" y1="250" x2="170" y2="100"/>
            <line x1="200" y1="250" x2="120" y2="430"/>
            <line x1="780" y1="380" x2="830" y2="480"/>
        </svg>

        <div class="building palace">🏯 故宫<br>Forbidden City</div>

        <div class="landmark" style="left:45%;top:8%">
            <div class="landmark-icon">🥁</div>
            <div class="landmark-name">鼓楼 Drum Tower</div>
        </div>
        <div class="landmark" style="left:70%;top:32%">
            <div class="landmark-icon">🛍️</div>
            <div class="landmark-name">王府井</div>
        </div>
        <div class="landmark" style="left:50%;top:70%">
            <div class="landmark-icon">⛩️</div>
            <div class="landmark-name">天安门</div>
        </div>

        <div class="location-marker" style="left:17%;top:18%"><div class="marker-circle">①</div><div class="marker-label">🥣 护国寺小吃</div></div>
        <div class="location-marker" style="left:43%;top:11%"><div class="marker-circle">②</div><div class="marker-label">🥩 增盛魁</div></div>
        <div class="location-marker" style="left:73%;top:18%"><div class="marker-circle">③</div><div class="marker-label">🐑 白魁老号</div></div>
        <div class="location-marker" style="left:12%;top:77%"><div class="marker-circle">④</div><div class="marker-label">🍲 南来顺</div></div>
        <div class="location-marker" style="left:78%;top:39%"><div class="marker-circle">⑤</div><div class="marker-label">🥞 东华门美食坊</div></div>
        <div class="location-marker" style="left:50%;top:86%"><div class="marker-circle">⑥</div><div class="marker-label">🍜 天兴居</div></div>
        <div class="location-marker" style="left:80%;top:68%"><div class="marker-circle">⑦</div><div class="marker-label">🥛 隆福寺小吃</div></div>
        <div class="location-marker" style="left:60%;top:86%"><div class="marker-circle">⑧</div><div class="marker-label">🥟 都一处</div></div>
        <div class="location-marker" style="left:83%;top:86%"><div class="marker-circle">⑨</div><div class="marker-label">🍡 锦芳元宵</div></div>
        <div class="location-marker" style="left:20%;top:45%"><div class="marker-circle">⑩</div><div class="marker-label">🥟 西四包子铺</div></div>
    </div>

    <div class="legend">
        <h2>🗺️ 图例 Legend</h2>
        <div class="legend-grid">
            <div class="legend-item"><div class="legend-num">①</div><div><div class="legend-name">护国寺小吃</div><div class="legend-addr">西城区护国寺街68号</div><div class="legend-special">🥣 豆汁+焦圈</div></div></div>
            <div class="legend-item"><div class="legend-num">②</div><div><div class="legend-name">增盛魁</div><div class="legend-addr">西城区鼓楼西大街</div><div class="legend-special">🥩 门钉肉饼</div></div></div>
            <div class="legend-item"><div class="legend-num">③</div><div><div class="legend-name">白魁老号饭庄</div><div class="legend-addr">东城区交道口南大街15号</div><div class="legend-special">🐑 烧羊肉</div></div></div>
            <div class="legend-item"><div class="legend-num">④</div><div><div class="legend-name">南来顺</div><div class="legend-addr">西城区南菜园街12号</div><div class="legend-special">🍲 羊杂汤</div></div></div>
            <div class="legend-item"><div class="legend-num">⑤</div><div><div class="legend-name">东华门美食坊</div><div class="legend-addr">东城区东华门大街</div><div class="legend-special">🥞 煎饼果子</div></div></div>
            <div class="legend-item"><div class="legend-num">⑥</div><div><div class="legend-name">天兴居</div><div class="legend-addr">东城区鲜鱼口街95号</div><div class="legend-special">🍜 炒肝</div></div></div>
            <div class="legend-item"><div class="legend-num">⑦</div><div><div class="legend-name">隆福寺小吃店</div><div class="legend-addr">东城区隆福寺街</div><div class="legend-special">🥛 豆汁焦圈</div></div></div>
            <div class="legend-item"><div class="legend-num">⑧</div><div><div class="legend-name">都一处</div><div class="legend-addr">东城区前门大街38号</div><div class="legend-special">🥟 烧麦</div></div></div>
            <div class="legend-item"><div class="legend-num">⑨</div><div><div class="legend-name">锦芳元宵</div><div class="legend-addr">东城区磁器口</div><div class="legend-special">🍡 驴打滚</div></div></div>
            <div class="legend-item"><div class="legend-num">⑩</div><div><div class="legend-name">西四包子铺</div><div class="legend-addr">西城区西四南大街18号</div><div class="legend-special">🥟 包子</div></div></div>
        </div>
    </div>
</div>
</body>
</html>"""
    write_html("map-breakfast.html", html)


# ─── MAP 2: China UNESCO Travel ─────────────────────────────────────────────────

def gen_travel():
    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>中国世界遗产旅行地图</title>
{FONT_LINK}
<style>{BASE_STYLE}
.china-outline {{
    position: relative;
    width: 100%;
    height: 520px;
    margin: 0 auto 24px;
}}
.china-shape {{
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    border: 3px solid #8b6914;
    border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%;
    background: rgba(139,105,20,0.05);
    overflow: hidden;
}}
.city-dot {{
    position: absolute;
    width: 10px;
    height: 10px;
    background: #8b6914;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
}}
.city-label {{
    position: absolute;
    font-size: 12px;
    font-weight: 700;
    color: #5a3e1b;
    transform: translate(-50%, -50%);
    z-index: 4;
    background: rgba(245,230,200,0.8);
    padding: 1px 6px;
    border-radius: 4px;
    white-space: nowrap;
}}
.hsr-line {{
    position: absolute;
    border-top: 2px dashed #c0392b;
    z-index: 1;
    transform-origin: left center;
}}
</style>
</head>
<body>
<div class="map-page">
    <div class="download-hint"><span>⬇ Download as PDF — use Ctrl+P</span></div>
    <div class="map-title"><h1>🏯 中国世界遗产旅行地图</h1></div>
    <div class="map-subtitle">China UNESCO Heritage Sites &amp; HSR Routes</div>

    <div class="china-outline">
        <svg class="path-svg" viewBox="0 0 1000 520" preserveAspectRatio="none">
            <line x1="810" y1="100" x2="800" y2="95" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="810" y1="100" x2="850" y2="250" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="850" y1="250" x2="750" y2="290" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="580" y1="190" x2="810" y2="100" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="850" y1="250" x2="880" y2="340" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="380" y1="310" x2="580" y2="190" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="300" y1="380" x2="380" y2="310" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="300" y1="380" x2="350" y2="420" stroke="#c0392b" stroke-dasharray="8 4"/>
            <line x1="380" y1="310" x2="530" y2="350" stroke="#c0392b" stroke-dasharray="8 4"/>
        </svg>

        <div class="china-shape"></div>

        <div class="location-marker" style="left:81%;top:15%"><div class="marker-circle">①</div><div class="marker-label">🧱 长城</div></div>
        <div class="location-marker" style="left:80%;top:22%"><div class="marker-circle">②</div><div class="marker-label">🏯 故宫</div></div>
        <div class="location-marker" style="left:55%;top:35%"><div class="marker-circle">③</div><div class="marker-label">⚔️ 兵马俑</div></div>
        <div class="location-marker" style="left:85%;top:55%"><div class="marker-circle">④</div><div class="marker-label">🌊 西湖</div></div>
        <div class="location-marker" style="left:72%;top:60%"><div class="marker-circle">⑤</div><div class="marker-label">🏔️ 张家界</div></div>
        <div class="location-marker" style="left:32%;top:50%"><div class="marker-circle">⑥</div><div class="marker-label">💧 九寨沟</div></div>
        <div class="location-marker" style="left:80%;top:45%"><div class="marker-circle">⑦</div><div class="marker-label">⛰️ 黄山</div></div>
        <div class="location-marker" style="left:18%;top:35%"><div class="marker-circle">⑧</div><div class="marker-label">🏛️ 布达拉宫</div></div>
        <div class="location-marker" style="left:28%;top:68%"><div class="marker-circle">⑨</div><div class="marker-label">🏘️ 丽江古城</div></div>
        <div class="location-marker" style="left:38%;top:52%"><div class="marker-circle">⑩</div><div class="marker-label">🐼 成都大熊猫</div></div>

        <div class="city-dot" style="left:81%;top:18%"></div>
        <div class="city-label" style="left:86%;top:15%">北京</div>
        <div class="city-dot" style="left:88%;top:50%"></div>
        <div class="city-label" style="left:93%;top:50%">上海</div>
        <div class="city-dot" style="left:55%;top:33%"></div>
        <div class="city-label" style="left:55%;top:29%">西安</div>
        <div class="city-dot" style="left:85%;top:55%"></div>
        <div class="city-label" style="left:90%;top:57%">杭州</div>
        <div class="city-dot" style="left:80%;top:80%"></div>
        <div class="city-label" style="left:85%;top:82%">广州</div>
        <div class="city-dot" style="left:38%;top:50%"></div>
        <div class="city-label" style="left:38%;top:46%">成都</div>
    </div>

    <div class="legend">
        <h2>🗺️ 图例 Legend</h2>
        <div class="legend-grid">
            <div class="legend-item"><div class="legend-num">①</div><div><div class="legend-name">长城 The Great Wall</div><div class="legend-addr">北京 · 万里长城</div></div></div>
            <div class="legend-item"><div class="legend-num">②</div><div><div class="legend-name">故宫 Forbidden City</div><div class="legend-addr">北京 · 世界最大宫殿群</div></div></div>
            <div class="legend-item"><div class="legend-num">③</div><div><div class="legend-name">兵马俑 Terracotta Army</div><div class="legend-addr">西安 · 秦始皇陵</div></div></div>
            <div class="legend-item"><div class="legend-num">④</div><div><div class="legend-name">西湖 West Lake</div><div class="legend-addr">杭州 · 人间天堂</div></div></div>
            <div class="legend-item"><div class="legend-num">⑤</div><div><div class="legend-name">张家界 Zhangjiajie</div><div class="legend-addr">湖南 · 阿凡达取景地</div></div></div>
            <div class="legend-item"><div class="legend-num">⑥</div><div><div class="legend-name">九寨沟 Jiuzhaigou</div><div class="legend-addr">四川 · 人间仙境</div></div></div>
            <div class="legend-item"><div class="legend-num">⑦</div><div><div class="legend-name">黄山 Mount Huangshan</div><div class="legend-addr">安徽 · 奇松怪石</div></div></div>
            <div class="legend-item"><div class="legend-num">⑧</div><div><div class="legend-name">布达拉宫 Potala Palace</div><div class="legend-addr">西藏 · 世界屋脊</div></div></div>
            <div class="legend-item"><div class="legend-num">⑨</div><div><div class="legend-name">丽江古城 Lijiang Old Town</div><div class="legend-addr">云南 · 纳西族古镇</div></div></div>
            <div class="legend-item"><div class="legend-num">⑩</div><div><div class="legend-name">成都大熊猫基地</div><div class="legend-addr">四川 · 国宝故乡</div></div></div>
        </div>
        <div style="margin-top:14px;text-align:center;font-size:12px;color:#7a5c30;">
            <span style="color:#c0392b;">┈┈┈</span> = 高铁线路 HSR Routes &nbsp;|&nbsp;
            🚄 北京—上海 · 上海—杭州 · 北京—西安 · 广州—深圳 · 成都—重庆
        </div>
    </div>
</div>
</body>
</html>"""
    write_html("map-travel.html", html)


# ─── MAP 3: Hospitals ────────────────────────────────────────────────────────────

def gen_hospital():
    cities = [
        ("🏙️ 北京 Beijing", [
            ("①", "北京协和医院", "Peking Union Medical College Hospital", "东城区帅府园1号", "中国顶级医院", "public"),
            ("②", "北京大学第一医院", "Peking University First Hospital", "西城区西什库大街8号", "综合三甲", "public"),
            ("③", "中日友好医院", "China-Japan Friendship Hospital", "朝阳区樱花园东街", "国际患者友好", "public"),
            ("④", "北京和睦家医院", "United Family Hospital", "朝阳区将台路2号", "私立国际医院", "private"),
            ("⑤", "北京国际医疗中心", "Beijing Intl Medical Center", "朝阳区亮马桥路50号", "使馆区首选", "private"),
        ]),
        ("🌆 上海 Shanghai", [
            ("⑥", "上海瑞金医院", "Ruijin Hospital", "黄浦区瑞金二路197号", "上海顶级医院", "public"),
            ("⑦", "上海华山医院", "Huashan Hospital", "静安区乌鲁木齐中路12号", "神经外科著名", "public"),
            ("⑧", "上海和睦家医院", "United Family Hospital Shanghai", "长宁区平塘路1138号", "私立国际医院", "private"),
            ("⑨", "上海东方医院", "Shanghai East Hospital", "浦东新区即墨路150号", "浦东综合三甲", "public"),
        ]),
        ("🌴 广州 Guangzhou", [
            ("⑩", "中山大学附属第一医院", "Sun Yat-sen Univ. Hospital", "越秀区中山二路58号", "华南顶级医院", "public"),
            ("⑪", "广东省人民医院", "Guangdong Provincial People's Hospital", "越秀区中山二路106号", "心血管著名", "public"),
            ("⑫", "广州和睦家医院", "United Family Hospital GZ", "海珠区新港东路2588号", "私立国际医院", "private"),
        ]),
    ]

    sections = ""
    for title, hospitals in cities:
        cards = ""
        for num, cn, en, addr, desc, typ in hospitals:
            tag_class = "tag-public" if typ == "public" else "tag-private"
            tag_text = "🔵 公立" if typ == "public" else "🔴 私立国际"
            cards += f"""<div class="hospital-card">
    <div class="hnum">{num}</div>
    <div class="hinfo"><div class="hname">{cn}</div>
    <div class="haddr" style="font-size:11px;color:#999;">{en}</div>
    <div class="haddr">{addr}</div>
    <span class="htag {tag_class}">{tag_text}</span>
    <div style="font-size:12px;color:#7a5c30;margin-top:4px;">{desc}</div></div>
</div>\n"""
        sections += f'<div class="city-section"><h2>{title}</h2>{cards}</div>\n'

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>外国人就医国际医院地图</title>
{FONT_LINK}
<style>{BASE_STYLE}
.legend-grid {{ grid-template-columns: 1fr 1fr 1fr; }}
</style>
</head>
<body>
<div class="map-page">
    <div class="download-hint"><span>⬇ Download as PDF — use Ctrl+P</span></div>
    <div class="map-title"><h1>🏥 外国人就医国际医院地图</h1></div>
    <div class="map-subtitle">International Hospital Guide for Expats — Beijing · Shanghai · Guangzhou</div>

    {sections}

    <div class="legend">
        <h2>🗺️ 图例 Legend</h2>
        <div style="display:flex;gap:30px;justify-content:center;font-size:14px;">
            <span>🔵 <strong>公立三甲</strong> Public Hospital — 高水平，排队久，价格低</span>
            <span>🔴 <strong>私立国际</strong> International — 英语服务，保险覆盖，价格高</span>
        </div>
        <div style="margin-top:12px;text-align:center;font-size:12px;color:#7a5c30;">
            💡 Tips: 公立医院建议早上7点前排队挂号 | 私立医院接受国际保险 | 协和国际部需预约
        </div>
    </div>
</div>
</body>
</html>"""
    write_html("map-hospital.html", html)


# ─── MAP 4: Entertainment / Nightlife ────────────────────────────────────────────

def gen_entertainment():
    bj_categories = [
        ("🍺 Craft Beer 精酿啤酒", [
            ("①", "大跃啤酒", "Great Leap Brewing", "西城区护国寺街"),
            ("②", "悠航鲜啤", "Slow Boat Brewery", "东城区东四北大街"),
            ("③", "京A", "Jing-A Brewing", "朝阳区幸福村中路"),
            ("④", "箭厂啤酒", "Arrow Factory Brewing", "东城区五道营胡同"),
            ("⑤", "熊猫精酿", "Panda Brew", "东城区东四北大街"),
        ]),
        ("🍸 Cocktails 鸡尾酒", [
            ("⑥", "首都烈酒", "Capital Spirits", "东城区五道营胡同"),
            ("⑦", "瑜舍", "The Opposite House", "朝阳区三里屯路"),
            ("⑧", "米家思", "Migas", "朝阳区三里屯路"),
            ("⑨", "Janes & Hooch", "Janes & Hooch", "朝阳区工体北路"),
        ]),
        ("🎵 Live Music 现场音乐", [
            ("⑩", "DDC", "Dusk Dawn Club", "东城区山老胡同"),
            ("⑪", "Temple Bar", "Temple Bar", "东城区雍和宫大街"),
            ("⑫", "The Den", "The Den", "朝阳区三里屯路"),
            ("⑬", "Paddy O'Shea's", "Paddy O'Shea's", "东城区东直门外大街"),
        ]),
    ]
    sh_categories = [
        ("🥂 Bund 外滩", [
            ("⑭", "Bar Rouge", "Bar Rouge", "黄浦区中山东一路"),
            ("⑮", "The Nest", "The Nest", "黄浦区中山东一路"),
            ("⑯", "Hakkasan", "Hakkasan", "黄浦区中山东一路"),
        ]),
        ("🍸 French Concession 法租界", [
            ("⑰", "The Public", "The Public", "徐汇区永嘉路"),
            ("⑱", "Senator Saloon", "Senator Saloon", "徐汇区复兴西路"),
            ("⑲", "Flask", "Flask", "徐汇区武康路"),
            ("⑳", "Epic", "Epic", "徐汇区建国西路"),
            ("㉑", "Sasha's", "Sasha's", "徐汇区复兴西路"),
        ]),
        ("🍺 Beer 精酿", [
            ("㉒", "Daga", "Daga Brewpub", "徐汇区安福路"),
            ("㉓", "Boxing Cat", "Boxing Cat Brewery", "黄浦区建国中路"),
            ("㉔", "Tap House", "The Tap House", "静安区巨鹿路"),
        ]),
        ("🎵 Music 音乐", [
            ("㉕", "JZ Club", "JZ Club", "徐汇区复兴西路"),
            ("㉖", "Heyday", "Heyday Jazz Bar", "徐汇区永嘉路"),
            ("㉗", "Revolucion", "Revolucion Cocktail", "黄浦区雁荡路"),
            ("㉘", "Windows Garage", "Windows Garage", "静安区昌平路"),
        ]),
    ]

    def make_venue_section(title, categories):
        out = f'<div class="city-section"><h2>{title}</h2>\n'
        for cat_name, venues in categories:
            out += f'<div class="category-label">{cat_name}</div>\n<div class="venue-grid">\n'
            for num, cn, en, addr in venues:
                out += f"""<div class="venue-card">
    <div class="vnum">{num}</div>
    <div class="vinfo"><div class="vname">{cn}</div><div class="vaddr">{en} · {addr}</div></div>
</div>\n"""
            out += "</div>\n"
        out += "</div>\n"
        return out

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>外国人酒吧夜生活地图</title>
{FONT_LINK}
<style>{BASE_STYLE}
.venue-card .vnum {{ background: #c0392b; }}
</style>
</head>
<body>
<div class="map-page">
    <div class="download-hint"><span>⬇ Download as PDF — use Ctrl+P</span></div>
    <div class="map-title"><h1>🍺 外国人酒吧夜生活地图</h1></div>
    <div class="map-subtitle">Expat Bars &amp; Nightlife Guide — Beijing &amp; Shanghai</div>

    {make_venue_section("🏙️ 北京 Beijing", bj_categories)}
    {make_venue_section("🌆 上海 Shanghai", sh_categories)}

    <div class="legend">
        <h2>🗺️ 图例 Legend</h2>
        <div style="display:flex;gap:24px;justify-content:center;font-size:14px;flex-wrap:wrap;">
            <span>🍺 <strong>精酿啤酒</strong> Craft Beer</span>
            <span>🍸 <strong>鸡尾酒</strong> Cocktails</span>
            <span>🎵 <strong>现场音乐</strong> Live Music</span>
            <span>🥂 <strong>高端酒吧</strong> Upscale/Lounge</span>
        </div>
        <div style="margin-top:12px;text-align:center;font-size:12px;color:#7a5c30;">
            💡 Tips: 周四至周六晚上最热闹 | 精酿吧通常11PM关门 | 鸡尾酒吧营业到2AM+ | 记得带护照/身份证
        </div>
    </div>
</div>
</body>
</html>"""
    write_html("map-entertainment.html", html)


# ─── MAP 5: Beijing Rent Neighborhoods ───────────────────────────────────────────

def gen_rent():
    neighborhoods = [
        ("①", "三里屯 Sanlitun", "¥6k-12k/月", "年轻人·夜生活·酒吧街", "#34d399", "green",
         "left:68%;top:48%;width:140px;height:110px;"),
        ("②", "国贸 CBD", "¥8k-20k/月", "金融白领·高端公寓", "#ff9a5c", "orange",
         "left:72%;top:28%;width:120px;height:90px;"),
        ("③", "亮马桥 Liangmaqiao", "¥7k-15k/月", "使馆区·家庭友好", "#fbbf24", "yellow",
         "left:65%;top:15%;width:130px;height:80px;"),
        ("④", "望京 Wangjing", "¥4.5k-9k/月", "科技公司·韩国城", "#34d399", "green",
         "left:72%;top:8%;width:130px;height:80px;"),
        ("⑤", "五道口 Wudaokou", "¥3.5k-7k/月", "学生·大学城·宇宙中心", "#34d399", "green",
         "left:42%;top:12%;width:130px;height:80px;"),
        ("⑥", "顺义 Shunyi", "¥10k-30k/月", "国际学校·别墅区", "#ff6b5b", "red",
         "left:80%;top:5%;width:140px;height:80px;"),
    ]

    zones = ""
    markers = ""
    for num, name, rent, desc, color, level, style in neighborhoods:
        zones += f'<div class="zone" style="{style}background:{color};border-color:{color};"></div>\n'
        # Extract left/top from style for marker positioning
        parts = style.split(";")
        left = parts[0].split(":")[1]
        top = parts[1].split(":")[1]
        markers += f"""<div class="location-marker" style="left:{left};top:{top};">
    <div class="marker-circle" style="background:linear-gradient(135deg,{color}44,{color}88);">{num}</div>
    <div class="marker-label">{name}<br><span style="font-size:10px;color:#8b4513;">{rent}</span></div>
</div>\n"""

    cards = ""
    for num, name, rent, desc, color, level, style in neighborhoods:
        cards += f"""<div class="zone-card" style="border-color:{color};">
    <div style="display:flex;align-items:center;gap:10px;">
        <div class="legend-num" style="background:{color};width:36px;height:36px;font-size:16px;">{num}</div>
        <div>
            <div class="zname" style="color:{color};">{name}</div>
            <div class="zrent">{rent}</div>
            <div class="zdesc">{desc}</div>
        </div>
    </div>
</div>\n"""

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>北京外国人租房地图</title>
{FONT_LINK}
<style>{BASE_STYLE}
.map-area {{ height: 420px; background: rgba(139,105,20,0.03); border: 2px dashed #c4a265; border-radius: 12px; }}
.rent-grid {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px; }}
</style>
</head>
<body>
<div class="map-page">
    <div class="download-hint"><span>⬇ Download as PDF — use Ctrl+P</span></div>
    <div class="map-title"><h1>🏠 北京外国人租房地图</h1></div>
    <div class="map-subtitle">Beijing Expat Rent Guide — Neighborhoods &amp; Price Ranges</div>

    <div class="map-area">
        {zones}
        <div class="landmark" style="left:52%;top:50%;">
            <div class="landmark-icon">🏯</div>
            <div class="landmark-name">故宫</div>
        </div>
        <div class="landmark" style="left:60%;top:55%;">
            <div class="landmark-icon">🛍️</div>
            <div class="landmark-name">王府井</div>
        </div>
        {markers}
        <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);font-size:11px;color:#8b6914;">
            🚇 = 地铁站 &nbsp;|&nbsp; 🏯 = 故宫 &nbsp;|&nbsp; 彩色区域 = 租房热门区域
        </div>
    </div>

    <div class="rent-grid">
        {cards}
    </div>

    <div class="legend">
        <h2>💰 租金等级 Rent Level Legend</h2>
        <div style="display:flex;gap:20px;justify-content:center;font-size:14px;flex-wrap:wrap;">
            <span style="color:#34d399;">🟢 <strong>&lt;¥5k</strong> 学生/预算友好</span>
            <span style="color:#fbbf24;">🟡 <strong>¥5-10k</strong> 中等/性价比</span>
            <span style="color:#ff9a5c;">🟠 <strong>¥10-20k</strong> 高端公寓</span>
            <span style="color:#ff6b5b;">🔴 <strong>¥20k+</strong> 别墅/顶级</span>
        </div>
        <div style="margin-top:12px;text-align:center;font-size:12px;color:#7a5c30;">
            💡 Tips: 合同通常1年起签 | 押一付三最常见 | 中介费通常1个月房租 | 58同城/链家/自如为主要平台
        </div>
    </div>
</div>
</body>
</html>"""
    write_html("map-rent.html", html)


# ─── Main ────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("Generating cartoon game-style maps...")
    gen_breakfast()
    gen_travel()
    gen_hospital()
    gen_entertainment()
    gen_rent()
    print("\nDone! 5 map HTML files generated.")
    print(f"Output directory: {OUTPUT_DIR}")
