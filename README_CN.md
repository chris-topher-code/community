# ChinaVoices

> 🇨🇳 一个连接在华外国人的社区平台，通过真实故事和共同经历建立联系。

**🌐 中文 | [English](README.md) | [Français](README_FR.md)**

---

### 🌟 功能

- **分享故事** — 发布关于中国生活、工作、旅行、美食等方面的经历
- **探索城市** — 按 12 座主要中国城市浏览故事（北京、上海、广州、深圳、成都、杭州、西安、苏州、武汉、重庆、南京、天津）
- **社区互动** — 点赞、评论、分享帖子
- **个人主页** — 可自定义头像、简介、国籍信息
- **多语言** — 支持英文和法文
- **响应式设计** — 针对桌面端和移动端优化，移动端有底部导航栏
- **用户认证** — 通过 Supabase 实现邮箱密码注册和登录

### 📁 项目结构

```
├── index.html          # 页面结构
├── style.css           # 样式（CSS 变量、响应式设计）
├── app.js              # 应用逻辑（认证、帖子、评论、点赞）
├── supabase/
│   └── migrations/
│       ├── 001_init.sql      # 数据库表结构
│       └── 002_seed_data.sql  # 示例数据
├── docs/
└── mobile-preview.html
```

### 🛠️ 技术栈

- **前端：** 原生 HTML、CSS、JavaScript
- **后端/数据库：** Supabase（PostgreSQL + 认证 + 行级安全）
- **字体：** Inter + Playfair Display（Google Fonts）
- **图标：** Font Awesome 6

### 🚀 快速开始

1. 克隆仓库：
   ```bash
   git clone <your-repo-url>
   ```

2. 在浏览器中打开 `index.html`，或使用静态文件服务器：
   ```bash
   npx serve .
   ```

3. 应用默认连接 Supabase。如需使用自己的 Supabase 项目：
   - 在 [supabase.com](https://supabase.com) 创建项目
   - 运行 `supabase/migrations/` 中的 SQL 迁移文件
   - 在 `app.js` 中更新 `SUPABASE_URL` 和 `SUPABASE_ANON_KEY`

### 📦 数据库结构

| 表名 | 说明 |
|------|------|
| `profiles` | 用户资料（头像、国籍、身份） |
| `posts` | 帖子/故事（含分类和城市） |
| `comments` | 帖子评论 |
| `likes` | 帖子点赞（每用户每帖唯一） |

### 📄 许可证

MIT
