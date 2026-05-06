[README.md](https://github.com/user-attachments/files/27443306/README.md)
# ChinaVoices

> 🇨🇳 一个连接在华外国人的社区平台，通过真实故事和共同经历建立联系。
>
> 🇬🇧 A community platform connecting foreigners across China through authentic stories and shared experiences.
>
> 🇫🇷 Une plateforme communautaire connectant les étrangers en Chine à travers des histoires authentiques.

---

## 中文

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

---

## English

### 🌟 Features

- **Share Stories** — Post experiences about life, work, travel, food, and more in China
- **Explore Cities** — Browse stories by 12 major Chinese cities (Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Hangzhou, Xi'an, Suzhou, Wuhan, Chongqing, Nanjing, Tianjin)
- **Community Interaction** — Like, comment, and share posts
- **User Profiles** — Customizable profiles with avatar upload, bio, and country info
- **Multi-language** — English and French support
- **Responsive Design** — Optimized for desktop and mobile with bottom navigation bar
- **Authentication** — Email/password registration and login via Supabase

### 📁 Project Structure

```
├── index.html          # HTML structure
├── style.css           # Styles (CSS custom properties, responsive design)
├── app.js              # Application logic (auth, posts, comments, likes)
├── supabase/
│   └── migrations/
│       ├── 001_init.sql      # Database schema
│       └── 002_seed_data.sql  # Sample data
├── docs/
└── mobile-preview.html
```

### 🛠️ Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Backend / Database:** Supabase (PostgreSQL + Auth + RLS)
- **Fonts:** Inter + Playfair Display (Google Fonts)
- **Icons:** Font Awesome 6

### 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Open `index.html` in a browser, or serve with any static file server:
   ```bash
   npx serve .
   ```

3. The app connects to Supabase out of the box. To use your own Supabase project:
   - Create a project at [supabase.com](https://supabase.com)
   - Run the SQL migrations in `supabase/migrations/`
   - Update `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `app.js`

### 📦 Database Schema

| Table | Description |
|-------|-------------|
| `profiles` | User profiles (name, avatar, country, identity) |
| `posts` | Stories/posts with category and city |
| `comments` | Comments on posts |
| `likes` | Post likes (unique per user per post) |

### 📄 License

MIT

---

## Français

### 🌟 Fonctionnalités

- **Partager des histoires** — Publiez vos expériences sur la vie, le travail, les voyages, la cuisine en Chine
- **Explorer les villes** — Parcourez les histoires de 12 grandes villes chinoises (Pékin, Shanghai, Guangzhou, Shenzhen, Chengdu, Hangzhou, Xi'an, Suzhou, Wuhan, Chongqing, Nanjing, Tianjin)
- **Interaction communautaire** — Aimez, commentez et partagez les publications
- **Profils utilisateurs** — Profils personnalisables avec upload d'avatar, bio et informations pays
- **Multilingue** — Support anglais et français
- **Design responsive** — Optimisé pour ordinateur et mobile avec barre de navigation inférieure
- **Authentification** — Inscription et connexion par email/mot de passe via Supabase

### 📁 Structure du projet

```
├── index.html          # Structure HTML
├── style.css           # Styles (variables CSS, design responsive)
├── app.js              # Logique applicative (auth, posts, commentaires, likes)
├── supabase/
│   └── migrations/
│       ├── 001_init.sql      # Schéma de la base de données
│       └── 002_seed_data.sql  # Données d'exemple
├── docs/
└── mobile-preview.html
```

### 🛠️ Stack technique

- **Frontend :** HTML, CSS, JavaScript natifs
- **Backend / Base de données :** Supabase (PostgreSQL + Auth + RLS)
- **Polices :** Inter + Playfair Display (Google Fonts)
- **Icônes :** Font Awesome 6

### 🚀 Démarrage rapide

1. Cloner le dépôt :
   ```bash
   git clone <your-repo-url>
   ```

2. Ouvrir `index.html` dans un navigateur, ou servir avec un serveur de fichiers statiques :
   ```bash
   npx serve .
   ```

3. L'application se connecte à Supabase par défaut. Pour utiliser votre propre projet Supabase :
   - Créez un projet sur [supabase.com](https://supabase.com)
   - Exécutez les migrations SQL dans `supabase/migrations/`
   - Mettez à jour `SUPABASE_URL` et `SUPABASE_ANON_KEY` dans `app.js`

### 📦 Schéma de la base de données

| Table | Description |
|-------|-------------|
| `profiles` | Profils utilisateurs (nom, avatar, pays, identité) |
| `posts` | Publications/histoires avec catégorie et ville |
| `comments` | Commentaires sur les publications |
| `likes` | Likes sur les publications (unique par utilisateur par publication) |

### 📄 Licence

MIT
