# ChinaVoices

> 🇬🇧 A community platform connecting foreigners across China through authentic stories and shared experiences.

**🌐 [中文](README_CN.md) | English | [Français](README_FR.md)**

---

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
