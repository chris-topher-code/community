# ChinaVoices

> 🇫🇷 Une plateforme communautaire connectant les étrangers en Chine à travers des histoires authentiques.

**🌐 [中文](README_CN.md) | [English](README.md) | Français**

---

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
