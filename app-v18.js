/* ===== i18n System ===== */
const i18n = {
    en: {
        home: 'Home', stories: 'Stories', explore: 'Explore', newPost: 'New Post', shareStory: 'Share Story',
        topics: 'Topics', about: 'About', profile: 'Profile',
        signIn: 'Sign In', joinNow: 'Join Now',
        welcomeBack: 'Welcome back', readyToShare: 'Ready to start your next story?',
        shareAStory: 'Share a Story', exploreCities: 'Explore Cities', browseTopics: 'Browse Topics',
        communityStories: 'Community Stories', showComments: 'Show Comments', hideComments: 'Hide Comments',
        translate: 'Translate', translated: 'Translated', copyLink: 'Copy Link',
        writeComment: 'Write a comment...', send: 'Send', noStories: 'No stories found',
        tryDifferent: 'Try a different search term', noPostsCategory: 'No posts in this category yet',
        postShared: 'Post shared successfully!', commentPosted: 'Comment posted!',
        linkCopied: 'Link copied to clipboard!', wechatShare: 'WeChat share: long press to copy link',
        translating: 'Translating to French...', searching: 'Searching for',
        trendingTopics: 'Trending Topics', communityStats: 'Community Stats',
        quickLinks: 'Quick Links', members: 'Members', comments: 'Comments',
        shares: 'Shares', countries: 'Countries', exploreCitiesTitle: 'Explore Cities',
        discoverStories: 'Discover authentic stories from every corner of China',
        posts: 'posts', backToCities: 'Back to Cities', storiesLabel: 'Stories',
        topicsTitle: 'Topics', topicsSubtitle: 'Explore conversations organized by what matters to you',
        aboutTitle: 'About Cdiscovery', aboutSubtitle: 'Connecting foreigners across China through authentic stories and shared experiences',
        ourMission: 'Our Mission', whatWeOffer: 'What We Offer', communityGuidelines: 'Community Guidelines',
        getInvolved: 'Get Involved', shareExperience: 'Share your China experiences and stories',
        connectForeigners: 'Connect with foreigners in your city', discoverTips: 'Discover local tips and hidden gems',
        getAnswers: 'Get answers to your China questions', joinDiscussions: 'Join topic-based discussions',
        accessResources: 'Access curated resources and guides', respectful: 'Be respectful and inclusive',
        authentic: 'Share authentic experiences', protectPrivacy: 'Protect privacy and personal info',
        noSpam: 'No spam or self-promotion', reportContent: 'Report inappropriate content',
        helpNewcomers: 'Help newcomers feel welcome',
        myPosts: 'My Posts', editProfile: 'Edit Profile', settings: 'Settings', edit: 'Edit',
        noPostsYet: 'No posts yet', startSharing: 'Start sharing your story!', postUpdated: 'Post updated!',
        displayName: 'Display Name', countryOrigin: 'Country of Origin', bio: 'Bio',
        saveChanges: 'Save Changes', accountSettings: 'Account Settings',
        changePassword: 'Change Password', logOut: 'Log Out', deleteAccount: 'Delete Account',
        passwordChanged: 'Password change is not available in demo mode',
        accountDeleted: 'Account deletion is not available in demo mode',
        joinedRecently: 'Joined recently', likesReceived: 'Likes Received', commentsMade: 'Comments',
        welcomeGuest: 'Welcome back', postCategory: 'Category',
        shareYourStory: 'Start Your Story', tellCommunity: 'Tell the community about your experience in China',
        postPlaceholder: 'Start your story...', postBtn: 'Post',
        welcomeBackTitle: 'Welcome Back', loginSubtitle: 'Log in to continue your China journey',
        logIn: 'Log In', joinCommunity: 'Join Our Community',
        registerSubtitle: 'Create an account to start sharing your story',
        createAccount: 'Create Account', emailAddress: 'Email Address',
        password: 'Password', confirmPassword: 'Confirm Password',
        selectCountry: 'Select your country...', whatDescribes: 'What best describes you?',
        student: 'Student', worker: 'Worker', tourist: 'Tourist',
        business: 'Business', researcher: 'Researcher', other: 'Other',
        identity: 'Identity',
        newcomerGuide: 'Newcomer Guide', essentialTips: 'Essential tips for China',
        allTopics: 'All topic categories', browseTopicsLink: 'Browse Topics',
        aboutUs: 'About Us', contact: 'Contact', privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service', community: 'Community', resources: 'Resources',
        company: 'Company', storiesLink: 'Stories', exploreCitiesLink: 'Explore Cities',
        topicsLink: 'Topics', newPostLink: 'New Post', visaInfo: 'Visa Information',
        healthcare: 'Healthcare', languageTips: 'Language Tips',
        allCategory: 'All', travelCat: '🧳 Travel', studyCat: '🎓 Study', schoolCat: '🏫 School',
        workCat: '👷 Work', visaCat: '📋 Visa', entertainmentCat: '🎭 Entertainment',
        foodCat: '🍜 Food', lifeCat: '🏙️ Life', businessCat: '💼 Business',
        rentCat: '🏠 Rent',
        simCat: '📱 SIM Card',
        hospitalCat: '🏥 Hospital',
        culturalCat: '🎎 Culture',
        postsIn: 'Posts in', searchPlaceholder: 'Search stories, topics, or people...',
        topicsSearchPlaceholder: '🔍 Search topics, guides, articles...',
        topicsSearchHint: 'Type to search across all topics, guides, and articles',
        topicsSearchNoResults: 'No matches found',
        topicsSearchNoResultsHint: 'Try keywords like "rent", "WeChat", "visa", "metro"...',
        topicsSearchResults: (n, q) => `Found ${n} result${n !== 1 ? 's' : ''} for "${q}"`,
        featuredTopics: 'Featured Topics',
        viewAllTopics: 'View all →',
        addPhoto: 'Add Photo', selectCity: 'Select city...', back: 'Back',
        changeBackground: 'Change Background', resetBackground: 'Reset to Default', bgUpdated: 'Background image updated!', bgReset: 'Background reset to default',
        backgroundSettings: 'Background Image', uploadBackground: 'Upload Background', opacity: 'Opacity',
        sendMessage: 'Send Message', userPosts: 'Posts', directMessage: 'Direct Message',
        noMessages: 'No messages yet. Say hello!', typeMessage: 'Type a message...',
        groupChat: 'Group Chat', noGroupMessages: 'No messages yet. Be the first to say hello!', searchGroups: 'Search groups...', selectGroup: 'Select a group chat',
        chineseAppsGuide: 'Chinese Apps Guide', chineseAppsGuideDesc: 'Essential guide to Chinese apps',
    },
    fr: {
        home: 'Accueil', stories: 'Récits', explore: 'Explorer', newPost: 'Nouveau Post', shareStory: 'Partager une histoire',
        topics: 'Sujets', about: 'À propos', profile: 'Profil',
        signIn: 'Se connecter', joinNow: "S'inscrire",
        welcomeBack: 'Bienvenue', readyToShare: 'Prêt à partager votre prochaine histoire ?',
        shareAStory: 'Partager une histoire', exploreCities: 'Explorer les villes', browseTopics: 'Parcourir les sujets',
        communityStories: 'Récits de la communauté', showComments: 'Afficher les commentaires', hideComments: 'Masquer les commentaires',
        translate: 'Traduire', translated: 'Traduit', copyLink: 'Copier le lien',
        writeComment: 'Écrire un commentaire...', send: 'Envoyer', noStories: 'Aucun récit trouvé',
        tryDifferent: 'Essayez un autre terme de recherche', noPostsCategory: 'Aucun post dans cette catégorie',
        postShared: 'Post partagé avec succès !', commentPosted: 'Commentaire publié !',
        linkCopied: 'Lien copié dans le presse-papiers !', wechatShare: 'Partage WeChat : appuyez longuement pour copier le lien',
        translating: 'Traduction en cours...', searching: 'Recherche de',
        trendingTopics: 'Sujets tendance', communityStats: 'Statistiques de la communauté',
        quickLinks: 'Liens rapides', members: 'Membres', comments: 'Commentaires',
        shares: 'Partages', countries: 'Pays', exploreCitiesTitle: 'Explorer les villes',
        discoverStories: 'Découvrez des récits authentiques de chaque coin de Chine',
        posts: 'publications', backToCities: 'Retour aux villes', storiesLabel: 'Récits',
        topicsTitle: 'Sujets', topicsSubtitle: 'Explorez les conversations organisées par ce qui vous intéresse',
        aboutTitle: 'À propos de Cdiscovery', aboutSubtitle: 'Connecter les étrangers à travers la Chine grâce à des récits authentiques',
        ourMission: 'Notre mission', whatWeOffer: 'Ce que nous offrons', communityGuidelines: 'Règles de la communauté',
        getInvolved: 'Participez', shareExperience: 'Partagez vos expériences en Chine',
        connectForeigners: 'Connectez-vous avec des étrangers dans votre ville', discoverTips: 'Découvrez des conseils locaux et des trésors cachés',
        getAnswers: 'Obtenez des réponses à vos questions sur la Chine', joinDiscussions: 'Rejoignez des discussions par sujet',
        accessResources: 'Accédez à des ressources et guides sélectionnés', respectful: 'Soyez respectueux et inclusif',
        authentic: 'Partagez des expériences authentiques', protectPrivacy: 'Protégez la vie privée et les informations personnelles',
        noSpam: 'Pas de spam ni d\'autopromotion', reportContent: 'Signalez le contenu inapproprié',
        helpNewcomers: 'Aidez les nouveaux arrivants à se sentir les bienvenus',
        myPosts: 'Mes posts', editProfile: 'Modifier le profil', settings: 'Paramètres', edit: 'Modifier',
        noPostsYet: 'Pas encore de posts', startSharing: 'Commencez à partager votre histoire !', postUpdated: 'Post mis à jour !',
        displayName: 'Nom d\'affichage', countryOrigin: 'Pays d\'origine', bio: 'Bio',
        saveChanges: 'Enregistrer les modifications', accountSettings: 'Paramètres du compte',
        changePassword: 'Changer le mot de passe', logOut: 'Se déconnecter', deleteAccount: 'Supprimer le compte',
        passwordChanged: 'Le changement de mot de passe n\'est pas disponible en mode démo',
        accountDeleted: 'La suppression de compte n\'est pas disponible en mode démo',
        joinedRecently: 'Inscrit récemment', likesReceived: 'J\'aime reçus', commentsMade: 'Commentaires',
        welcomeGuest: 'Bienvenue', postCategory: 'Catégorie',
        shareYourStory: 'Commencez votre histoire', tellCommunity: 'Racontez votre expérience en Chine',
        postPlaceholder: 'Partagez votre histoire...', postBtn: 'Publier',
        welcomeBackTitle: 'Bon retour', loginSubtitle: 'Connectez-vous pour continuer votre aventure en Chine',
        logIn: 'Se connecter', joinCommunity: 'Rejoignez notre communauté',
        registerSubtitle: 'Créez un compte pour commencer à partager',
        createAccount: 'Créer un compte', emailAddress: 'Adresse e-mail',
        password: 'Mot de passe', confirmPassword: 'Confirmer le mot de passe',
        selectCountry: 'Sélectionnez votre pays...', whatDescribes: 'Qui êtes-vous ?',
        student: 'Étudiant', worker: 'Travailleur', tourist: 'Touriste',
        business: 'Entrepreneur', researcher: 'Chercheur', other: 'Autre',
        identity: 'Identité',
        newcomerGuide: 'Guide du nouveau venu', essentialTips: 'Conseils essentiels pour la Chine',
        allTopics: 'Toutes les catégories de sujets', browseTopicsLink: 'Parcourir les sujets',
        aboutUs: 'À propos', contact: 'Contact', privacyPolicy: 'Politique de confidentialité',
        termsOfService: 'Conditions d\'utilisation', community: 'Communauté', resources: 'Ressources',
        company: 'Entreprise', storiesLink: 'Récits', exploreCitiesLink: 'Explorer les villes',
        topicsLink: 'Sujets', newPostLink: 'Nouveau post', visaInfo: 'Informations visa',
        healthcare: 'Santé', languageTips: 'Conseils linguistiques',
        allCategory: 'Tout', travelCat: '🧳 Voyage', studyCat: '🎓 Études', schoolCat: '🏫 École',
        workCat: '👷 Travail', visaCat: '📋 Visa', entertainmentCat: '🎭 Divertissement',
        foodCat: '🍜 Nourriture', lifeCat: '🏙️ Vie', businessCat: '💼 Affaires',
        rentCat: '🏠 Location',
        simCat: '📱 Carte SIM',
        hospitalCat: '🏥 Hôpital',
        culturalCat: '🎎 Culture',
        postsIn: 'Posts à', searchPlaceholder: 'Rechercher des récits, sujets ou personnes...',
        topicsSearchPlaceholder: '🔍 Rechercher dans les sujets, guides, articles...',
        topicsSearchHint: 'Tapez pour rechercher dans tous les sujets, guides et articles',
        topicsSearchNoResults: 'Aucun résultat trouvé',
        topicsSearchNoResultsHint: 'Essayez des mots-clés comme "loyer", "WeChat", "visa", "métro"...',
        topicsSearchResults: (n, q) => `${n} résultat${n !== 1 ? 's' : ''} pour « ${q} »`,
        featuredTopics: 'Sujets en vedette',
        viewAllTopics: 'Voir tout →',
        addPhoto: 'Ajouter une photo', selectCity: 'Choisir une ville...', back: 'Retour',
        changeBackground: 'Changer l\'arrière-plan', resetBackground: 'Réinitialiser par défaut', bgUpdated: 'Image d\'arrière-plan mise à jour !', bgReset: 'Arrière-plan réinitialisé',
        backgroundSettings: 'Image d\'arrière-plan', uploadBackground: 'Télécharger une image', opacity: 'Opacité',
        sendMessage: 'Envoyer un message', userPosts: 'Publications', directMessage: 'Message privé',
        noMessages: 'Pas encore de messages. Dites bonjour !', typeMessage: 'Écrivez un message...',
        groupChat: 'Chat de groupe', noGroupMessages: 'Pas encore de messages. Soyez le premier !', searchGroups: 'Rechercher un groupe...', selectGroup: 'Sélectionnez un chat de groupe',
        chineseAppsGuide: 'Guide des apps chinoises', chineseAppsGuideDesc: 'Guide essentiel des applications chinoises',
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
    return i18n[currentLang][key] || i18n['en'][key] || key;
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.classList.contains('welcome-greeting')) return;
        const key = el.dataset.i18n;
        const translated = t(key);
        if (translated) el.textContent = translated;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    // Translate home page category pills
    const catAll = document.querySelector('.category-filter .category-pill[data-category="all"]');
    if (catAll) catAll.textContent = t('allCategory');
    const catPills = document.querySelectorAll('.category-filter .category-pill[data-category]');
    catPills.forEach(pill => {
        const cat = pill.dataset.category;
        const key = cat + 'Cat';
        if (i18n[currentLang][key]) pill.textContent = i18n[currentLang][key];
    });
    // Translate stories page category pills
    const storiesCatAll = document.querySelector('.stories-cat-pill[data-category="all"]');
    if (storiesCatAll) {
        const icon = storiesCatAll.querySelector('.cat-icon');
        const iconText = icon ? icon.textContent : '✨';
        storiesCatAll.innerHTML = `<span class="cat-icon">${iconText}</span> ${t('allCategory') || 'All'}`;
    }
    const storiesCatPills = document.querySelectorAll('.stories-cat-pill[data-category]');
    storiesCatPills.forEach(pill => {
        const cat = pill.dataset.category;
        const key = cat + 'Cat';
        if (i18n[currentLang][key]) {
            const icon = pill.querySelector('.cat-icon');
            const iconText = icon ? icon.textContent : '';
            pill.innerHTML = `<span class="cat-icon">${iconText}</span> ${i18n[currentLang][key]}`;
        }
    });
    document.querySelectorAll('#postsGrid .post-category, #cityPostsGrid .post-category, .my-post-mini-cat.post-category').forEach(el => {
        const categoryClass = el.classList[1];
        if (categoryClass && categoryClass !== 'post-category') {
            el.textContent = t(categoryClass + 'Cat');
        }
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
}

/* ===== User State ===== */

async function handleLogout() {
    await supabaseClient.auth.signOut();
    isLoggedIn = false;
    currentUser = null;
    userLikes.clear();
    document.body.classList.remove('logged-in');
    document.getElementById('mobileProfileLink').style.display = 'none';
    document.getElementById('mobileSignOutLink').style.display = 'none';
    navigateTo('home');
    // showToast(currentLang === 'fr' ? 'Déconnecté avec succès' : 'Logged out successfully');
    await loadPosts();
}

/* ===== Profile Page ===== */
function switchProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => t.classList.toggle('active', t.dataset.ptab === tab));
    document.querySelectorAll('.profile-tab-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });
    const target = document.getElementById('profileTab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }
}

function loadUserGroups() {
    const listEl = document.getElementById('myGroupsList');
    if (!listEl || !currentUser) return;

    const userCC = currentUser.country_code || 'UN';
    const userIdentity = (currentUser.identity || 'other').toLowerCase();

    const groups = [];

    const countryName = getCountryName(userCC);
    const countryFlag = getFlagEmoji(userCC);
    groups.push({
        type: 'country',
        value: userCC,
        name: countryName,
        icon: countryFlag,
        label: currentLang === 'fr' ? 'Pays' : 'Country'
    });

    const identityName = getIdentityName(userIdentity);
    const identityIcon = getIdentityEmoji(userIdentity);
    groups.push({
        type: 'identity',
        value: userIdentity,
        name: identityName,
        icon: identityIcon,
        label: currentLang === 'fr' ? 'Identité' : 'Identity'
    });

    listEl.innerHTML = groups.map(g => `
        <div class="my-group-item" onclick="navigateTo('groupchat'); setTimeout(() => selectGroupChat('${g.type}', '${g.value}'), 100);">
            <div class="my-group-icon">${g.icon}</div>
            <div class="my-group-info">
                <div class="my-group-name">${g.name} ⭐</div>
                <div class="my-group-meta">${g.label}</div>
            </div>
            <div class="my-group-badge">${currentLang === 'fr' ? 'Rejoindre' : 'Join'}</div>
        </div>
    `).join('');
}

function renderMyPosts() {
    const list = document.getElementById('myPostsList');
    if (!list) return;
    const myPosts = currentUser ? postsData.filter(p => p.user_id === currentUser.id) : [];
    if (myPosts.length === 0) {
        list.innerHTML = `<div class="empty-profile"><i class="fas fa-pen-nib"></i><h3>${t('noPostsYet')}</h3><p>${t('startSharing')}</p></div>`;
        return;
    }
    list.innerHTML = myPosts.map(post => {
        const cat = categories[post.category];
        return `
        <div class="my-post-mini" onclick="navigateTo('home'); setTimeout(() => togglePostExpand(${post.id}), 200);">
            <span class="my-post-mini-cat post-category ${cat.class}">${t(post.category + 'Cat')}</span>
            <span class="my-post-mini-content">${post.content.substring(0, 80)}...</span>
            <span class="my-post-mini-time">${post.time}</span>
            <div class="my-post-mini-actions">
                <button onclick="event.stopPropagation(); openEditModal(${post.id})" title="${t('edit')}"><i class="fas fa-edit"></i></button>
                <button onclick="event.stopPropagation(); deletePost(${post.id})" title="Delete"><i class="fas fa-trash"></i></button>
            </div>
        </div>`;
    }).join('');
}

function updateHeaderProfile() {
    // Removed - header no longer shows country/identity badges
    // if (!currentUser) return;
    // const avatarEl = document.getElementById('headerAvatar');
    // if (avatarEl) avatarEl.src = currentUser.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
    // const countryEl = document.getElementById('headerCountry');
    // if (countryEl) {
    //     const flag = getFlagEmoji(currentUser.country_code || 'UN');
    //     countryEl.textContent = flag || '';
    // }
    // const identityEl = document.getElementById('headerIdentity');
    // if (identityEl) identityEl.textContent = currentUser.identity || 'Member';
}

function updateProfileStats() {
    if (!currentUser) return;
    const myPosts = postsData.filter(p => p.user_id === currentUser.id);
    const totalLikes = myPosts.reduce((sum, p) => sum + p.likes, 0);
    const totalComments = myPosts.reduce((sum, p) => sum + p.comments, 0);
    document.getElementById('profilePostsCount').textContent = myPosts.length;
    document.getElementById('profileLikesCount').textContent = totalLikes;
    document.getElementById('profileCommentsCount').textContent = totalComments;
}

function loadProfile() {
    if (!currentUser) return;
    document.getElementById('profileDisplayName').textContent = currentUser.name || 'Guest User';
    document.getElementById('profileCountry').textContent = getFlagEmoji(currentUser.country_code || 'UN');
    document.getElementById('profileIdentity').textContent = currentUser.identity || 'Member';
    document.getElementById('profileAvatar').src = currentUser.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
    document.getElementById('editName').value = currentUser.name || '';
    document.getElementById('editCountry').value = currentUser.country_code || '';
    document.getElementById('editBio').value = currentUser.bio || '';
    // Load background settings
    const bgPreview = document.getElementById('bgPreviewImg');
    const bgResetBtnEl = document.getElementById('bgResetBtn');
    const opacitySlider = document.getElementById('bgOpacitySlider');
    const opacityVal = document.getElementById('opacityValue');
    if (currentUser.background_url) {
        bgPreview.src = currentUser.background_url;
        bgResetBtnEl.style.display = 'flex';
    } else {
        bgPreview.src = '222222.png';
        bgResetBtnEl.style.display = 'none';
    }
    const savedOpacity = currentUser.background_opacity != null ? currentUser.background_opacity : 30;
    opacitySlider.value = savedOpacity;
    opacityVal.textContent = savedOpacity;
    applyGlobalBg();
    updateProfileStats();
    renderMyPosts();
}

function triggerAvatarUpload() {
    if (!currentUser) {
        // showToast(currentLang === 'fr' ? 'Veuillez vous connecter' : 'Please sign in first');
        return;
    }
    document.getElementById('avatarUploadInput').click();
}

async function handleAvatarUpload(input) {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
        // showToast(currentLang === 'fr' ? 'Veuillez sélectionner une image' : 'Please select an image file');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        // showToast(currentLang === 'fr' ? 'Image trop grande (max 5MB)' : 'Image too large (max 5MB)');
        return;
    }

    // showToast(currentLang === 'fr' ? 'Téléchargement...' : 'Uploading...');

    // Read file, resize to 200x200, convert to base64
    const avatarUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const size = 200;
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext('2d');
                const min = Math.min(img.width, img.height);
                const sx = (img.width - min) / 2;
                const sy = (img.height - min) / 2;
                ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    // Save directly to database (no Storage needed)
    const { error } = await supabaseClient.from('profiles').update({ avatar_url: avatarUrl }).eq('id', currentUser.id);

    if (error) {
        console.error('Avatar save error:', error);
        // showToast(currentLang === 'fr' ? 'Échec de la sauvegarde' : 'Save failed');
        return;
    }

    currentUser.avatar_url = avatarUrl;

    document.getElementById('profileAvatar').src = avatarUrl;
    document.getElementById('profileBtn').querySelector('img').src = avatarUrl;
    document.getElementById('newPostAvatar').src = avatarUrl;

    // showToast(currentLang === 'fr' ? 'Photo de profil mise à jour !' : 'Profile photo updated!');
}

function triggerBgUpload() {
    if (!currentUser) {
        // showToast(currentLang === 'fr' ? 'Veuillez vous connecter' : 'Please sign in first');
        return;
    }
    document.getElementById('bgUploadInput').click();
}

async function handleBgUpload(input) {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
        // showToast(currentLang === 'fr' ? 'Veuillez sélectionner une image' : 'Please select an image file');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        // showToast(currentLang === 'fr' ? 'Image trop grande (max 5MB)' : 'Image too large (max 5MB)');
        return;
    }

    // showToast(currentLang === 'fr' ? 'Téléchargement...' : 'Uploading...');

    const bgUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxW = 1200;
                const ratio = Math.min(maxW / img.width, maxW / img.height, 1);
                canvas.width = img.width * ratio;
                canvas.height = img.height * ratio;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    const { error } = await supabaseClient.from('profiles').update({ background_url: bgUrl }).eq('id', currentUser.id);

    if (error) {
        console.error('Background save error:', error);
        // showToast(currentLang === 'fr' ? 'Échec de la sauvegarde' : 'Save failed');
        return;
    }

    currentUser.background_url = bgUrl;
    const bgPreview = document.getElementById('bgPreviewImg');
    bgPreview.src = bgUrl;
    document.getElementById('bgResetBtn').style.display = 'flex';
    applyGlobalBg();
    // showToast(t('bgUpdated') || 'Background updated!');
}

async function resetBgImage() {
    if (!currentUser) return;
    const { error } = await supabaseClient.from('profiles').update({ background_url: null }).eq('id', currentUser.id);
    if (error) {
        console.error('Background reset error:', error);
        // showToast('Reset failed');
        return;
    }
    currentUser.background_url = null;
    document.getElementById('bgPreviewImg').src = '222222.png';
    document.getElementById('bgResetBtn').style.display = 'none';
    applyGlobalBg();
    showToast(t('bgReset') || 'Background reset to default');
}

function applyGlobalBg() {
    const globalBgImg = document.getElementById('globalBgImg');
    if (currentUser && currentUser.background_url) {
        globalBgImg.src = currentUser.background_url;
    } else {
        globalBgImg.src = '222222.png';
    }
    const opacity = (currentUser && currentUser.background_opacity != null) ? currentUser.background_opacity : 30;
    globalBgImg.style.opacity = opacity / 100;
}

const debouncedSaveOpacity = debounce(async (val) => {
    if (currentUser) {
        const { error } = await supabaseClient.from('profiles').update({ background_opacity: val }).eq('id', currentUser.id);
        if (error) console.error('Opacity save error:', error);
    }
}, 300);

async function updateBgOpacity(value) {
    const val = parseInt(value);
    document.getElementById('opacityValue').textContent = val;
    const globalBgImg = document.getElementById('globalBgImg');
    globalBgImg.style.opacity = val / 100;
    if (currentUser) {
        currentUser.background_opacity = val;
        debouncedSaveOpacity(val);
    }
}

async function deletePost(postId) {
    try {
        const msg = currentLang === 'fr' ? 'Supprimer ce post ?' : 'Delete this post?';
        if (!confirm(msg)) return;
        const { error } = await supabaseClient.from('posts').delete().eq('id', postId);
        if (error) { showToast('Error deleting'); return; }
        await loadPosts();
        renderMyPosts();
        updateProfileStats();
        showToast(currentLang === 'fr' ? 'Post supprimé' : 'Post deleted');
    } catch (error) {
        console.error('deletePost error:', error);
        showToast('Failed to delete post');
    }
}

function openEditModal(postId) {
    const post = postsData.find(p => p.id === postId);
    if (!post) return;
    
    document.getElementById('postContent').value = post.content;
    document.getElementById('postCategory').value = post.category || 'life';
    document.getElementById('postCity').value = post.city || 'unknown';
    
    navigateTo('newpost');
    
    const form = document.getElementById('newPostForm');
    const originalHandler = form.onsubmit;
    
    form.onsubmit = async (e) => {
        e.preventDefault();
        const content = document.getElementById('postContent').value.trim();
        const category = document.getElementById('postCategory').value;
        const city = document.getElementById('postCity').value;
        
        if (!content) return;
        
        const { error } = await supabaseClient.from('posts').update({
            content, category, city
        }).eq('id', postId);
        
        if (error) { /* showToast('Error updating post'); */ return; }
        
        form.onsubmit = originalHandler;
        
        document.getElementById('postContent').value = '';
        removeImage();
        updateCharCount(document.getElementById('postContent'));
        
        await loadPosts();
        renderMyPosts();
        updateProfileStats();
        navigateTo('profile');
        // showToast(currentLang === 'fr' ? t('postUpdated') : 'Post updated!');
    };
}


document.getElementById('editProfileForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    const name = document.getElementById('editName').value || currentUser.name;
    const country = document.getElementById('editCountry').value || currentUser.country_code;
    const identity = document.getElementById('editIdentity').value || currentUser.identity;
    const bio = document.getElementById('editBio').value;
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
    const { error } = await supabaseClient.from('profiles').update({
        name, country_code: country, country, bio, avatar_url: avatarUrl, identity
    }).eq('id', currentUser.id);
    if (error) { console.error('Error updating profile'); return; }
    currentUser.name = name;
    currentUser.country = country;
    currentUser.identity = identity;
    currentUser.bio = bio;
    currentUser.avatar_url = avatarUrl;
    loadProfile();
    // showToast(currentLang === 'fr' ? 'Profil mis à jour !' : 'Profile updated!');
});

const categories = {
    travel: { label: '🧳 Travel', class: 'travel' },
    study: { label: '🎓 Study', class: 'study' },
    school: { label: '🏫 School', class: 'school' },
    work: { label: '👷 Work', class: 'work' },
    visa: { label: '📋 Visa', class: 'visa' },
    entertainment: { label: '🎭 Entertainment', class: 'entertainment' },
    food: { label: '🍜 Food', class: 'food' },
    life: { label: '🏙️ Life', class: 'life' },
    business: { label: '💼 Business', class: 'business' },
    language: { label: '🗣️ Language', class: 'language' },
    rent: { label: '🏠 Rent', class: 'rent' },
    sim: { label: '📱 SIM Card', class: 'sim' },
    hospital: { label: '🏥 Hospital', class: 'hospital' },
    cultural: { label: '🎎 Culture', class: 'cultural' }
};

const cities = [
    { id: 'beijing', name: '北京', english: 'Beijing', icon: '🏯' },
    { id: 'shanghai', name: '上海', english: 'Shanghai', icon: '🌆' },
    { id: 'guangzhou', name: '广州', english: 'Guangzhou', icon: '🏙️' },
    { id: 'shenzhen', name: '深圳', english: 'Shenzhen', icon: '🚀' },
    { id: 'chengdu', name: '成都', english: 'Chengdu', icon: '🐼' },
    { id: 'hangzhou', name: '杭州', english: 'Hangzhou', icon: '🏝️' },
    { id: 'xian', name: '西安', english: "Xi'an", icon: '🏺' },
    { id: 'suzhou', name: '苏州', english: 'Suzhou', icon: '🌸' },
    { id: 'wuhan', name: '武汉', english: 'Wuhan', icon: '🌉' },
    { id: 'chongqing', name: '重庆', english: 'Chongqing', icon: '🌶️' },
    { id: 'nanjing', name: '南京', english: 'Nanjing', icon: '🦚' },
    { id: 'tianjin', name: '天津', english: 'Tianjin', icon: '⚓' }
];

const cityGuides = {
    beijing: [
        { topicKey: 'cityGuide_beijing', articleIndex: 0 },
        { topicKey: 'cityGuide_beijing', articleIndex: 1 },
        { topicKey: 'cityGuide_beijing', articleIndex: 2 }
    ]
};

const cityRoutes = [
    {
        id: 'beijing-shanghai',
        title: 'Beijing → Shanghai',
        titleZh: '京沪线',
        subtitle: 'The Classic Corridor',
        days: '4-5 days',
        cities: ['🏯 Beijing', '🌆 Shanghai'],
        icon: '🚄',
        accent: '#e74c3c',
        topicKey: 'cityRoutes',
        articleIndex: 0
    },
    {
        id: 'chengdu-chongqing',
        title: 'Chengdu → Chongqing',
        titleZh: '川渝线',
        subtitle: 'Pandas, Hotpot & Mountains',
        days: '3-4 days',
        cities: ['🐼 Chengdu', '🌶️ Chongqing'],
        icon: '🚄',
        accent: '#e67e22',
        topicKey: 'cityRoutes',
        articleIndex: 1
    },
    {
        id: 'shanghai-yunnan',
        title: 'Shanghai → Yunnan',
        titleZh: '滇沪线',
        subtitle: 'From Skyscrapers to Shangri-La',
        days: '7-8 days',
        cities: ['🌆 Shanghai', '🌸 Kunming', '🏔️ Dali', '🏯 Lijiang'],
        icon: '✈️',
        accent: '#1abc9c',
        topicKey: 'cityRoutes',
        articleIndex: 2
    },
    {
        id: 'beijing-xian-shanghai',
        title: 'Beijing → Xi\'an → Shanghai',
        titleZh: '京西沪线',
        subtitle: '5,000 Years in One Trip',
        days: '7-8 days',
        cities: ['🏯 Beijing', '🏺 Xi\'an', '🌆 Shanghai'],
        icon: '🚄',
        accent: '#9b59b6',
        topicKey: 'cityRoutes',
        articleIndex: 3
    },
    {
        id: 'chengdu-chongqing-zhangjiajie',
        title: 'Chengdu → Chongqing → Zhangjiajie',
        titleZh: '川渝湘线',
        subtitle: 'Pandas, Hotpot & Avatar Mountains',
        days: '6-7 days',
        cities: ['🐼 Chengdu', '🌶️ Chongqing', '🏔️ Zhangjiajie'],
        icon: '🚄',
        accent: '#e67e22',
        topicKey: 'cityRoutes',
        articleIndex: 4
    },
    {
        id: 'shanghai-suzhou-hangzhou',
        title: 'Shanghai → Suzhou → Hangzhou',
        titleZh: '沪苏杭线',
        subtitle: 'Poetic Cities & Water Towns',
        days: '5-6 days',
        cities: ['🌆 Shanghai', '🌸 Suzhou', '🏝️ Hangzhou'],
        icon: '🚄',
        accent: '#3498db',
        topicKey: 'cityRoutes',
        articleIndex: 5
    },
    {
        id: 'zhangjiajie-fenghuang-changsha',
        title: 'Zhangjiajie → Fenghuang → Changsha',
        titleZh: '湘黔线',
        subtitle: 'Fantasy Mountains, Ancient Town & Spicy Food',
        days: '5-6 days',
        cities: ['🏔️ Zhangjiajie', '🏮 Fenghuang', '🌶️ Changsha'],
        icon: '🚄',
        accent: '#e74c3c',
        topicKey: 'cityRoutes',
        articleIndex: 6
    },
    {
        id: 'kunming-dali-lijiang',
        title: 'Kunming → Dali → Lijiang',
        titleZh: '滇西北线',
        subtitle: 'Wind, Flower, Snow & Moon',
        days: '6-7 days',
        cities: ['🌸 Kunming', '🏔️ Dali', '🏯 Lijiang'],
        icon: '✈️',
        accent: '#1abc9c',
        topicKey: 'cityRoutes',
        articleIndex: 7
    }
];

/* ===== Supabase Connection ===== */
const SUPABASE_URL = 'https://ewepgcoayckdznpxwdfq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QMiUjV4HukLdaKGmlbyXXg_BCv4qNhk';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentCategory = 'all';
let currentSortMode = 'latest';
let isLoggedIn = false;
let exploreActive = false;
let currentCityFilter = null;
let searchQuery = '';
let currentUser = null;
let postsData = [];
let userLikes = new Set();
let notificationInterval = null;

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

/* ===== Data Loading ===== */
async function loadPosts() {
    try {
        console.log('loadPosts called');
        const { data, error } = await supabaseClient
            .from('posts')
            .select('*, profiles(name, avatar_url, country, country_code, identity)')
            .order('created_at', { ascending: false });
        console.log('Supabase response:', { error, data });
        if (error) console.error('Load posts error:', error);
        if (!error && data && data.length > 0) {
            postsData = data.map(p => ({
                id: p.id,
                author: p.profiles?.name || 'Guest',
                avatar: p.profiles?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest',
                country: p.profiles?.country || 'Unknown',
                countryCode: p.profiles?.country_code || 'UN',
                identity: p.profiles?.identity || null,
                time: getTimeAgo(p.created_at),
                createdAt: new Date(p.created_at).getTime(),
                content: p.content,
                image_url: p.image_url || null,
                tags: [],
                category: p.category || 'life',
                city: p.city || 'unknown',
                likes: 0,
                comments: 0,
                shares: 0,
                liked: false,
                user_id: p.user_id,
                post_type: p.post_type || 'story',
                title: p.title || null
            }));
        }
        console.log('postsData after mapping:', postsData);
        await loadLikes();
        await loadCommentCounts();
        console.log('renderPosts called, postsData length:', postsData.length);
        renderPosts();
        if (window.location.hash.startsWith('#post-')) {
            handleHashChange();
        }
    } catch (error) {
        console.error('loadPosts error:', error);
        showToast('Failed to load posts');
    }
}

async function loadLikes() {
    try {
        const { data } = await supabaseClient.from('likes').select('post_id, user_id');
        if (!data) return;
        const likeCountMap = {};
        data.forEach(l => {
            likeCountMap[l.post_id] = (likeCountMap[l.post_id] || 0) + 1;
            if (currentUser && l.user_id === currentUser.id) userLikes.add(l.post_id);
        });
        postsData.forEach(p => {
            p.likes = likeCountMap[p.id] || 0;
            p.liked = userLikes.has(p.id);
        });
    } catch (error) {
        console.error('loadLikes error:', error);
    }
}

async function loadCommentCounts() {
    try {
        const { data } = await supabaseClient.from('comments').select('post_id');
        if (!data) return;
        const countMap = {};
        data.forEach(c => { countMap[c.post_id] = (countMap[c.post_id] || 0) + 1; });
        postsData.forEach(p => { p.comments = countMap[p.id] || 0; });
    } catch (error) {
        console.error('loadCommentCounts error:', error);
    }
}

async function loadCommunityStats() {
    try {
        const [{ count: membersCount }, { count: postsCount }, { count: commentsCount }, { data: profilesData }] = await Promise.all([
            supabaseClient.from('profiles').select('*', { count: 'exact', head: true }),
            supabaseClient.from('posts').select('*', { count: 'exact', head: true }),
            supabaseClient.from('comments').select('*', { count: 'exact', head: true }),
            supabaseClient.from('profiles').select('country_code')
        ]);
    
        const countries = new Set(profilesData?.map(p => p.country_code).filter(Boolean) || []);
        const citiesWithPosts = new Set(postsData.map(p => p.city).filter(c => c && c !== 'unknown'));
    
        const members = membersCount || 0;
        const stories = postsCount || 0;
        const comments = commentsCount || 0;
        const countryNum = countries.size || 0;
        const cities = citiesWithPosts.size || 0;
    
        const heroMembers = document.getElementById('heroMembersCount');
        const heroStories = document.getElementById('heroStoriesCount');
        const heroCities = document.getElementById('heroCitiesCount');
        if (heroMembers) heroMembers.textContent = formatStatNumber(members);
        if (heroStories) heroStories.textContent = formatStatNumber(stories);
        if (heroCities) heroCities.textContent = formatStatNumber(cities);
    
        const heroMembersBadge = document.getElementById('heroMembersBadge');
        const heroCountriesBadge = document.getElementById('heroCountriesBadge');
        if (heroMembersBadge) heroMembersBadge.textContent = formatStatNumber(members);
        if (heroCountriesBadge) heroCountriesBadge.textContent = countryNum;
    
        const sidebarStats = [
            ['sidebarMembersCount', 'sidebarMembersCount2', members],
            ['sidebarCommentsCount', 'sidebarCommentsCount2', comments],
            ['sidebarStoriesCount', 'sidebarStoriesCount2', stories],
            ['sidebarCountriesCount', 'sidebarCountriesCount2', countryNum]
        ];
        sidebarStats.forEach(([id1, id2, value]) => {
            const el1 = document.getElementById(id1);
            const el2 = document.getElementById(id2);
            if (el1) el1.textContent = formatStatNumber(value);
            if (el2) el2.textContent = formatStatNumber(value);
        });
    } catch (error) {
        console.error('loadCommunityStats error:', error);
    }
}

function formatStatNumber(num) {
    if (num >= 10000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
}

function calculateTrendingTopics() {
    const categoryCounts = {};
    const cityCounts = {};
    postsData.forEach(post => {
        if (post.category) categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
        if (post.city && post.city !== 'unknown') cityCounts[post.city] = (cityCounts[post.city] || 0) + 1;
    });

    const categoryLabels = {
        travel: 'Travel in China',
        study: 'Studying in China',
        work: 'Working in China',
        visa: 'Visa & Work Permits',
        life: 'Daily Life in China',
        food: 'Chinese Food',
        entertainment: 'Entertainment',
        business: 'Business in China'
    };

    const cityLabels = {
        beijing: 'Beijing Life',
        shanghai: 'Shanghai Life',
        guangzhou: 'Guangzhou Life',
        shenzhen: 'Shenzhen Life',
        chengdu: 'Chengdu Life',
        hangzhou: 'Hangzhou Life',
        xian: "Xi'an Life"
    };

    const trending = [];

    Object.entries(categoryCounts).forEach(([cat, count]) => {
        if (categoryLabels[cat]) {
            trending.push({ title: categoryLabels[cat], count, type: cat });
        }
    });

    Object.entries(cityCounts).forEach(([city, count]) => {
        if (cityLabels[city] && count >= 1) {
            trending.push({ title: cityLabels[city], count, type: city });
        }
    });

    trending.sort((a, b) => b.count - a.count);
    return trending.slice(0, 5);
}

function renderTrendingTopics() {
    const trending = calculateTrendingTopics();
    const html = trending.length > 0
        ? trending.map((item, i) => `
            <li class="trending-item" onclick="filterByTopic('${item.type}')">
                <span class="trending-number">${i + 1}</span>
                <div class="trending-info">
                    <div class="trending-title">${item.title}</div>
                    <div class="trending-posts">${item.count} ${item.count === 1 ? 'story' : 'stories'}</div>
                </div>
            </li>
        `).join('')
        : '<li class="trending-item"><div class="trending-info"><div class="trending-title">No trending topics yet</div></div></li>';

    const list1 = document.getElementById('trendingList1');
    const list2 = document.getElementById('trendingList2');
    if (list1) list1.innerHTML = html;
    if (list2) list2.innerHTML = html;
}

let notifications = [];
let lastNotificationCheck = Date.now();

async function checkForNotifications() {
    if (!currentUser) return;

    try {
        const myPostIds = postsData.filter(p => p.user_id === currentUser.id).map(p => p.id);
        if (myPostIds.length === 0) return;

        const [{ data: newLikes }, { data: newComments }] = await Promise.all([
            supabaseClient.from('likes').select('*, profiles(name)').in('post_id', myPostIds).gt('created_at', new Date(lastNotificationCheck).toISOString()),
            supabaseClient.from('comments').select('*, profiles(name)').in('post_id', myPostIds).gt('created_at', new Date(lastNotificationCheck).toISOString())
        ]);

        const newNotifications = [];
        (newLikes || []).forEach(like => {
            if (like.user_id !== currentUser.id) {
                newNotifications.push({
                    type: 'like',
                    user: like.profiles?.name || 'Someone',
                    time: getTimeAgo(like.created_at),
                    postId: like.post_id
                });
            }
        });
        (newComments || []).forEach(comment => {
            if (comment.user_id !== currentUser.id) {
                newNotifications.push({
                    type: 'comment',
                    user: comment.profiles?.name || 'Someone',
                    time: getTimeAgo(comment.created_at),
                    postId: comment.post_id,
                    content: comment.content.substring(0, 50)
                });
            }
        });

        if (newNotifications.length > 0) {
            notifications = [...newNotifications, ...notifications].slice(0, 20);
            updateNotificationBadge(newNotifications.length);
            renderNotifications();

            if (newNotifications.length === 1) {
                const n = newNotifications[0];
                // showToast(n.type === 'like'
                //     ? `${n.user} liked your post! ❤️`
                //     : `${n.user} commented: "${n.content}..."`);
            } else {
                // showToast(`${newNotifications.length} new notifications! 🔔`);
            }
        }

        lastNotificationCheck = Date.now();
    } catch (error) {
        console.log('Notification check failed:', error);
    }
}

function updateNotificationBadge(count) {
    const badge = document.getElementById('notificationBadge');
    const btn = document.getElementById('notificationBtn');
    if (badge && btn) {
        if (count > 0) {
            badge.textContent = count > 9 ? '9+' : count;
            badge.style.display = 'flex';
            btn.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }
}

function renderNotifications() {
    const list = document.getElementById('notificationList');
    if (!list) return;

    if (notifications.length === 0) {
        list.innerHTML = '<div class="notification-empty">No new notifications</div>';
        return;
    }

    list.innerHTML = notifications.map(n => `
        <div class="notification-item ${n.read ? '' : 'unread'}" onclick="navigateToNotification(${n.postId})">
            <div class="notification-item-content">
                ${n.type === 'like'
                    ? `<strong>${n.user}</strong> liked your post`
                    : `<strong>${n.user}</strong> commented: "${n.content}..."`
                }
            </div>
            <div class="notification-item-time">${n.time}</div>
        </div>
    `).join('');
}

function navigateToNotification(postId) {
    toggleNotificationPanel();
    navigateTo('home');
    setTimeout(() => {
        togglePostExpand(postId);
        const postEl = document.querySelector(`.post-card[data-post-id="${postId}"]`);
        if (postEl) postEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    if (!panel) return;

    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        notifications.forEach(n => n.read = true);
        updateNotificationBadge(0);
        renderNotifications();
    } else {
        panel.style.display = 'none';
    }
}

function getTimeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return currentLang === 'fr' ? "À l'instant" : "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) { alert(message); return; }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

async function toggleLike(postId) {
    if (!currentUser) { showToast(currentLang === 'fr' ? 'Connectez-vous pour aimer' : 'Please sign in to like'); return; }
    try {
        const liked = userLikes.has(postId);
        if (liked) {
            await supabaseClient.from('likes').delete().eq('post_id', postId).eq('user_id', currentUser.id);
            userLikes.delete(postId);
        } else {
            await supabaseClient.from('likes').insert({ post_id: postId, user_id: currentUser.id });
            userLikes.add(postId);
        }
        const post = postsData.find(p => p.id === postId);
        if (post) { post.liked = !liked; post.likes += liked ? -1 : 1; }
        if (currentCityFilter) renderCityPosts(currentCityFilter);
        else renderPosts();
    } catch (error) {
        console.error('toggleLike error:', error);
        showToast('Failed to update like');
    }
}

function translatePost(postId, lang) {
    showToast(currentLang === 'fr' ? 'Traduction bientôt disponible' : 'Translation coming soon');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getPostHTML(post, idx) {
    const cat = categories[post.category];
    const isExpanded = expandedPostId === post.id;
    const delay = idx !== undefined ? `animation-delay: ${idx * 0.08}s` : '';
    return `
    <article class="post-card spotlight-card ${isExpanded ? 'expanded' : ''}" data-post-id="${post.id}" style="${delay}">
        <div class="post-header">
            <img src="${post.avatar}" alt="${post.author}" class="post-avatar" loading="lazy" onclick="openUserProfile('${post.user_id}')" title="${post.author}">
            <div class="post-author-info">
                <div class="post-author-name">
                    ${post.author}
                    ${post.identity ? `<span class="post-author-identity">${post.identity}</span>` : ''}
                    <span class="post-author-country">
                        <span class="flag-icon">${getFlagEmoji(post.countryCode)}</span>
                    </span>
                </div>
                <div class="post-time">${post.time}</div>
            </div>
            <span class="post-category ${cat.class}">${t(post.category + 'Cat')}</span>
        </div>
        <p class="post-content">${escapeHtml(post.content).replace(/\n/g, '<br>')}</p>
        ${post.image_url ? `<div class="post-image-wrap"><img src="${post.image_url}" alt="Post image" class="post-image" loading="lazy" onclick="window.open('${post.image_url}', '_blank')"></div>` : ''}
        <div class="post-tags">
            ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
        </div>
        <div class="post-actions">
            <button class="action-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})">
                <i class="${post.liked ? 'fas' : 'far'} fa-heart"></i>
                <span>${post.likes}</span>
            </button>
            <button class="action-btn" onclick="togglePostExpand(${post.id}); setTimeout(() => { const inp = document.querySelector('.post-card[data-post-id=&quot;${post.id}&quot;] .comment-input-row input'); if(inp) inp.focus(); }, 100);">
                <i class="far fa-comment"></i>
                <span>${post.comments}</span>
            </button>
            <div class="share-dropdown">
                <button class="action-btn" onclick="toggleShareMenu(${post.id})">
                    <i class="far fa-share-square"></i>
                    <span>${post.shares}</span>
                </button>
                <div class="share-menu" id="shareMenu${post.id}">
                    <button class="share-menu-item" onclick="copyPostLink(${post.id})">
                        <i class="fas fa-link"></i> ${t('copyLink')}
                    </button>
                    <button class="share-menu-item" onclick="shareToTwitter(${post.id})">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button class="share-menu-item" onclick="shareToLinkedIn(${post.id})">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </button>
                    <button class="share-menu-item" onclick="shareToWeChat(${post.id})">
                        <i class="fab fa-weixin"></i> WeChat
                    </button>
                </div>
            </div>
            <button class="action-btn pdf-btn" onclick="generateExplorePostPDF(postsData.find(p=>p.id===${post.id}))" title="Download PDF">
                <i class="fas fa-file-pdf"></i>
            </button>
            <button class="action-btn translate-btn" onclick="translatePost(${post.id})">
                <i class="fas fa-language"></i>
                <span>${t('translate')}</span>
            </button>
        </div>
        <button class="expand-toggle" onclick="togglePostExpand(${post.id})">
            <i class="fas fa-chevron-down"></i>
            <span>${isExpanded ? t('hideComments') : t('showComments')}</span>
        </button>
        <div class="comment-section">
            <div class="comments-list" id="comments-${post.id}">
                ${isExpanded ? '<div style="text-align:center;padding:10px;color:var(--text-muted)">Loading comments...</div>' : ''}
            </div>
        </div>
    </article>
    `;
}

function renderPosts() {
    const postsGrid = document.getElementById('postsGrid');
    const storiesGrid = document.getElementById('storiesGrid');
    if (!postsGrid) return;

    const isStoriesPage = document.getElementById('storiesPage')?.classList.contains('active');
    const targetGrid = isStoriesPage ? storiesGrid : postsGrid;
    const gridToUse = targetGrid || postsGrid;

    if (postsData.length === 0) {
        gridToUse.innerHTML = getSkeletonHTML();
        return;
    }

    let filteredPosts = currentCategory === 'all'
        ? [...postsData]
        : postsData.filter(post => post.category === currentCategory);

    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        filteredPosts = filteredPosts.filter(post =>
            post.content.toLowerCase().includes(q) ||
            post.author.toLowerCase().includes(q) ||
            post.tags.some(tag => tag.toLowerCase().includes(q)) ||
            post.city.toLowerCase().includes(q) ||
            post.country.toLowerCase().includes(q)
        );
    }

    // On stories page, only show story-type posts (not topic articles)
    if (isStoriesPage) {
        filteredPosts = filteredPosts.filter(post => !post.post_type || post.post_type === 'story');
    }

    if (currentSortMode === 'popular') {
        filteredPosts.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else {
        filteredPosts.sort((a, b) => b.createdAt - a.createdAt);
    }

    if (filteredPosts.length === 0) {
        const ctaButton = currentUser
            ? `<button class="empty-cta" onclick="openNewPostModal()"><i class="fas fa-pen"></i> Share the first story</button>`
            : `<button class="empty-cta" onclick="openModal('register')"><i class="fas fa-user-plus"></i> Join to share</button>`;
        gridToUse.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>${t('noStories')}</h3>
                <p>${searchQuery.trim() ? t('tryDifferent') : t('noPostsCategory')}</p>
                ${ctaButton}
            </div>`;
        return;
    }

    gridToUse.innerHTML = filteredPosts.map((post, i) => getPostHTML(post, i)).join('');
    const storiesEmpty = document.getElementById("storiesEmpty");
    if (storiesEmpty) storiesEmpty.style.display = storiesGrid?.children.length === 0 ? "block" : "none";
    const postsEmpty = document.getElementById("postsEmpty");
    if (postsEmpty) postsEmpty.style.display = postsGrid.children.length === 0 ? "block" : "none";
}

function renderTopicsArticles() {
    const container = document.getElementById('topicsArticlesList');
    if (!container) return;
    
    // Filter posts that are topic-type articles
    const topicPosts = postsData.filter(post => post.post_type === 'topics');
    
    if (topicPosts.length === 0) {
        container.innerHTML = `
            <div class="topics-empty">
                <i class="fas fa-pen-fancy"></i>
                <p>No community articles yet. Be the first to write one!</p>
            </div>
        `;
        return;
    }
    
    // Sort by newest first
    topicPosts.sort((a, b) => b.createdAt - a.createdAt);
    
    container.innerHTML = topicPosts.map(post => {
        const cat = categories[post.category];
        const title = post.title || post.content.substring(0, 60) + (post.content.length > 60 ? '...' : '');
        return `
        <div class="topics-article-item" onclick="openUserArticle(${post.id})">
            <img src="${post.avatar}" alt="${post.author}" class="topics-article-avatar" loading="lazy">
            <div class="topics-article-info">
                <div class="topics-article-title">${escapeHtml(title)}</div>
                <div class="topics-article-meta">
                    <span>${post.author}</span>
                    <span>·</span>
                    <span>${post.time}</span>
                    <span class="topics-article-category">${t(post.category + 'Cat')}</span>
                </div>
            </div>
            <i class="fas fa-chevron-right topics-article-arrow"></i>
        </div>
        `;
    }).join('');
}

function openUserArticle(postId) {
    const post = postsData.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('articleReaderModal');
    const titleEl = document.getElementById('articleReaderTitle');
    const bodyEl = document.getElementById('articleReaderBody');
    if (!modal || !bodyEl) return;

    const displayTitle = post.title || post.content.substring(0, 80);
    titleEl.textContent = displayTitle;

    bodyEl.innerHTML = `
        <h2>${escapeHtml(displayTitle)}</h2>
        <div class="ar-subtitle">${post.author} · ${post.time}</div>
        <div class="article-detail-author">
            <img src="${post.avatar}" alt="${post.author}">
            <div class="article-detail-author-info">
                <div class="article-detail-author-name">${post.author} <span class="flag-icon">${getFlagEmoji(post.countryCode)}</span></div>
                <div class="article-detail-author-time">${post.time}</div>
            </div>
        </div>
        <div class="article-detail-content">
            ${escapeHtml(post.content).replace(/\n/g, '<br>')}
        </div>
        ${post.image_url ? `<div style="margin-top:16px;"><img src="${post.image_url}" style="width:100%;border-radius:12px;" loading="lazy"></div>` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function getSkeletonHTML() {
    return `
        <div class="skeleton-grid">
            ${[1,2,3,4].map(() => `
                <div class="skeleton-card">
                    <div class="skeleton-header">
                        <div class="skeleton-avatar"></div>
                        <div class="skeleton-info">
                            <div class="skeleton-name"></div>
                            <div class="skeleton-time"></div>
                        </div>
                    </div>
                    <div class="skeleton-content">
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line"></div>
                    </div>
                    <div class="skeleton-actions">
                        <div class="skeleton-btn"></div>
                        <div class="skeleton-btn"></div>
                        <div class="skeleton-btn"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function getCityPostCount(cityId) {
    return postsData.filter(post => post.city === cityId).length;
}

function renderCitiesGrid() {
    const citiesGrid = document.getElementById('citiesGrid');
    if (!citiesGrid) return;

    const pairs = [];
    for (let i = 0; i < cities.length; i += 2) {
        pairs.push(cities.slice(i, i + 2));
    }

    citiesGrid.innerHTML = pairs.map(pair => `
        <div class="city-pair">
            ${pair.map(city => {
                const count = getCityPostCount(city.id);
                return `
                <div class="city-card spotlight-card" data-city="${city.id}" onclick="selectCity('${city.id}')">
                    <div class="city-card-icon">${city.icon}</div>
                    <div class="city-card-name">${city.name}</div>
                    <div class="city-card-english">${city.english}</div>
                    <div class="city-card-count">
                        <i class="fas fa-comment"></i>
                        ${count} posts
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    `).join('');
    const citiesEmpty = document.getElementById("citiesEmpty");
    if (citiesEmpty) citiesEmpty.style.display = citiesGrid.children.length === 0 ? "block" : "none";
}

function renderCityRoutes() {
    const grid = document.getElementById('cityRoutesGrid');
    if (!grid) return;

    grid.innerHTML = cityRoutes.map(route => `
        <div class="route-card" onclick="openArticleReader('${route.topicKey}', ${route.articleIndex})">
            <div class="route-chain">
                ${route.cities.map((c, i) => {
                    const parts = c.split(' ');
                    const icon = parts[0];
                    const name = parts.slice(1).join(' ');
                    return `<span class="route-city">${icon}<span>${name}</span></span>` +
                        (i < route.cities.length - 1 ? '<span class="route-arrow">→</span>' : '');
                }).join('')}
            </div>
            <div class="route-meta">
                <span class="route-name">${route.titleZh}</span>
                <span class="route-days">${route.days}</span>
            </div>
            <span class="route-pdf-icon" onclick="event.stopPropagation(); downloadArticlePDF('${route.topicKey}', ${route.articleIndex})" title="Download PDF"><i class="fas fa-file-pdf"></i></span>
        </div>
    `).join('');
}

function selectCity(cityId) {
    const city = cities.find(c => c.id === cityId);
    if (!city) return;

    currentCityFilter = cityId;

    document.getElementById('citiesView').style.display = 'none';
    document.getElementById('cityPostsView').style.display = 'block';
    document.getElementById('cityPostsTitle').innerHTML = `Posts in <span>${city.name} (${city.english})</span>`;

    document.getElementById('cityHeroBanner').innerHTML = `
        <div class="city-icon">${city.icon}</div>
        <h2>${city.name}</h2>
        <div class="city-english">${city.english}</div>
        <div class="city-stats">
            <div class="city-stat">
                <div class="city-stat-number">${postsData.filter(p => p.city === cityId).length}</div>
                <div class="city-stat-label">Stories</div>
            </div>
            <div class="city-stat">
                <div class="city-stat-number">${Math.floor(Math.random() * 50 + 10)}</div>
                <div class="city-stat-label">Topics</div>
            </div>
        </div>
    `;

    renderCityGuides(cityId);
    renderCityPosts(cityId);
}

function renderCityPosts(cityId) {
    const cityPostsGrid = document.getElementById('cityPostsGrid');
    if (!cityPostsGrid) return;

    const filteredPosts = postsData.filter(post => post.city === cityId);
    cityPostsGrid.innerHTML = filteredPosts.map((post, i) => getPostHTML(post, i)).join('');
}

function renderCityGuides(cityId) {
    const container = document.getElementById('cityGuidesContainer');
    if (!container) return;

    const guides = cityGuides[cityId];
    if (!guides || guides.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <div class="city-guides-section">
            <h3 class="city-guides-title"><i class="fas fa-compass"></i> Featured Guides</h3>
            <div class="city-guides-grid">
                ${guides.map((guide) => {
                    const articles = topicArticles[guide.topicKey] || [];
                    const article = articles[guide.articleIndex];
                    if (!article) return '';
                    return `
                    <div class="city-guide-card spotlight-card" onclick="openArticleReader('${guide.topicKey}', ${guide.articleIndex})">
                        <div class="city-guide-icon">🗺️</div>
                        <div class="city-guide-info">
                            <div class="city-guide-title">${article.title}</div>
                            <div class="city-guide-meta">Tap to read full guide →</div>
                        </div>
                        <span class="guide-pdf-icon" onclick="event.stopPropagation(); downloadArticlePDF('${guide.topicKey}', ${guide.articleIndex})" title="Download PDF"><i class="fas fa-file-pdf"></i></span>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;
}

function backToCities() {
    currentCityFilter = null;
    const guidesContainer = document.getElementById('cityGuidesContainer');
    if (guidesContainer) guidesContainer.innerHTML = '';
    document.getElementById('citiesView').style.display = 'block';
    document.getElementById('cityPostsView').style.display = 'none';
}

function toggleExplore(show) {
    const exploreSection = document.getElementById('exploreSection');
    const mainContainer = document.getElementById('mainContainer');
    const categoryFilter = document.querySelector('.category-filter');
    const hero = document.querySelector('.hero');

    document.getElementById('topicsPage').classList.remove('active');
    document.getElementById('aboutPage').classList.remove('active');

    if (show) {
        exploreSection.classList.add('active', 'page-transition');
        mainContainer.style.display = 'none';
        categoryFilter.style.display = 'none';
        hero.style.display = 'none';
        document.getElementById('welcomeBanner').style.display = 'none';
        renderCitiesGrid();
        renderCityRoutes();
    } else {
        exploreSection.classList.remove('active');
        mainContainer.style.display = 'grid';
        categoryFilter.style.display = 'flex';
        if (!isLoggedIn) hero.style.display = 'block';
        else hero.style.display = 'none';
        backToCities();
    }
    exploreActive = show;
}

let expandedPostId = null;

function togglePostExpand(postId) {
    const postCard = document.querySelector(`.post-card[data-post-id="${postId}"]`);
    if (!postCard) return;

    const wasExpanded = postCard.classList.contains('expanded');

    document.querySelectorAll('.post-card.expanded').forEach(card => {
        card.classList.remove('expanded');
    });

    if (wasExpanded) {
        expandedPostId = null;
    } else {
        postCard.classList.add('expanded');
        expandedPostId = postId;
        setTimeout(() => loadCommentsIntoPost(postId), 50);
    }
}

async function loadCommentsIntoPost(postId) {
    const container = document.getElementById(`comments-${postId}`);
    if (!container) return;
    const comments = await loadCommentsForPost(postId);
    if (comments.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:12px;color:var(--text-muted);font-size:0.85rem">${currentLang === 'fr' ? 'Pas encore de commentaires' : 'No comments yet'}</div>`;
    } else {
        container.innerHTML = comments.map(c => `
            <div class="comment">
                <div class="comment-avatar"><img src="${c.profiles?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'}" class="comment-avatar-img" style="width:36px;height:36px;border-radius:50%;object-fit:cover" loading="lazy" alt="User avatar" onclick="openUserProfile('${c.user_id}')" title="${c.profiles?.name || 'Guest'}"></div>
                <div class="comment-content">
                    <div class="comment-author">${c.profiles?.name || 'Guest'} <span>${getFlagEmoji(c.profiles?.country_code || 'UN')}</span></div>
                    <div class="comment-text">${c.content}</div>
                </div>
            </div>
        `).join('');
    }
    container.innerHTML += `
        <div class="comment-input-row">
            <input type="text" placeholder="${t('writeComment')}" onkeydown="if(event.key==='Enter') addComment(${postId}, this)">
            <button onclick="addComment(${postId}, this.previousElementSibling)">${t('send')}</button>
        </div>`;
}

function toggleShareMenu(postId) {
    const menu = document.getElementById(`shareMenu${postId}`);
    document.querySelectorAll('.share-menu').forEach(m => {
        if (m !== menu) m.classList.remove('active');
    });
    menu.classList.toggle('active');
}


function selectCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.stories-cat-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });

    document.querySelectorAll('.category-filter .category-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });

    renderPosts();
}

function copyPostLink(postId) {
    const baseUrl = 'https://chris-topher-code.github.io/community/';
    const url = baseUrl + '#post-' + postId;
    navigator.clipboard.writeText(url).then(() => {
    }).catch(() => {
    });
    document.querySelectorAll('.share-menu').forEach(m => m.classList.remove('active'));
}

function copyReferralLink() {
    if (!currentUser) {
        // showToast(currentLang === 'fr' ? 'Veuillez vous connecter' : 'Please sign in first');
        return;
    }
    const baseUrl = 'https://chris-topher-code.github.io/community/';
    const referralCode = btoa(currentUser.id).substring(0, 8);
    const url = baseUrl + '?ref=' + referralCode;
    navigator.clipboard.writeText(url).then(() => {
        // showToast(currentLang === 'fr' ? 'Lien d\'invitation copié ! 🎉' : 'Invite link copied! 🎉');
    }).catch(() => {
        // showToast('Invite link copied! 🎉');
    });
}

function shareToTwitter(postId) {
    const post = postsData.find(p => p.id === postId);
    if (post) {
        const text = encodeURIComponent(post.content.substring(0, 100) + '...');
        const baseUrl = 'https://chris-topher-code.github.io/community/';
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(baseUrl + '#post-' + postId)}`, '_blank');
    }
    document.querySelectorAll('.share-menu').forEach(m => m.classList.remove('active'));
}

function shareToLinkedIn(postId) {
    const post = postsData.find(p => p.id === postId);
    if (post) {
        const baseUrl = 'https://chris-topher-code.github.io/community/';
        const url = encodeURIComponent(baseUrl + '#post-' + postId);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
    document.querySelectorAll('.share-menu').forEach(m => m.classList.remove('active'));
}

function shareToWeChat(postId) {
    // showToast(t('wechatShare') + ' 📱');
    copyPostLink(postId);
}

function shareWebsite() {
    const baseUrl = 'https://chris-topher-code.github.io/community/';
    const referralCode = currentUser ? btoa(currentUser.id).substring(0, 8) : '';
    const url = referralCode ? baseUrl + '?ref=' + referralCode : baseUrl;
    const text = encodeURIComponent('Check out Cdiscovery - a community for foreigners in China!');
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
}

async function addComment(postId, inputEl) {
    const text = inputEl.value.trim();
    if (!text) return;
    if (!currentUser) { /* showToast(currentLang === 'fr' ? 'Connectez-vous pour commenter' : 'Please sign in to comment'); */ return; }
    const { error } = await supabaseClient.from('comments').insert({ post_id: postId, user_id: currentUser.id, content: text });
    if (error) { /* showToast('Error posting comment'); */ return; }
    inputEl.value = '';
    // showToast(t('commentPosted') + ' 💬');
    await loadPosts();
}

async function loadCommentsForPost(postId) {
    const { data } = await supabaseClient
        .from('comments')
        .select('*, profiles(name, avatar_url, country_code)')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });
    return data || [];
}

function highlightNavLink(pageName) {
    const allLinks = document.querySelectorAll('.nav-links a[data-nav], #mobileNav a[data-nav], .mobile-bottom-nav a[data-nav]');
    allLinks.forEach(l => l.classList.remove('active'));
    allLinks.forEach(l => {
        if (pageName === 'home' && (l.dataset.nav === 'home')) l.classList.add('active');
        else if (l.dataset.nav === pageName) l.classList.add('active');
    });
}
let currentPage = 'home';

function navigateTo(page) {
    if (page === currentPage && !["home", "newpost", "profile", "userprofile", "groupchat"].includes(page)) {
        // Already on this page — just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        highlightNavLink(page);
        return;
    }
    currentPage = page;
    // Hide all page sections
    ['topicsPage', 'aboutPage', 'profilePage', 'newPostPage', 'storiesPage', 'userProfilePage', 'groupChatPage'].forEach(p => {
        const el = document.getElementById(p);
        if (el) el.classList.remove('active');
    });

    const exploreSection = document.getElementById('exploreSection');
    if (exploreSection) exploreSection.classList.remove('active');

    const mainContainer = document.getElementById('mainContainer');
    const categoryFilter = document.querySelector('.category-filter');
    const hero = document.querySelector('.hero');
    const footer = document.querySelector('.footer');
    const welcomeBanner = document.getElementById('welcomeBanner');

    // Reset body state
    document.body.classList.remove('groupchat-active');
    document.body.style.overflow = '';

    // Always hide these by default for non-home pages
    const hideChrome = () => {
        if (mainContainer) mainContainer.style.display = 'none';
        if (categoryFilter) categoryFilter.style.display = 'none';
        if (hero) hero.style.display = 'none';
        if (welcomeBanner) welcomeBanner.style.display = 'none';
        if (footer) footer.style.display = 'none';
    };

    if (page === 'explore') {
        hideChrome();
        toggleExplore(true);
        highlightNavLink('explore');
        closeMobileNav();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (page === 'groupchat') {
        hideChrome();
        const gcEl = document.getElementById('groupChatPage');
        gcEl.classList.add('active', 'page-transition');
        document.body.classList.add('groupchat-active');
        highlightNavLink('groupchat');
        closeMobileNav();
        loadGroupList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    toggleExplore(false);

    if (page === 'topics') {
        hideChrome();
        const topicsEl = document.getElementById('topicsPage');
        topicsEl.classList.add('active', 'page-transition');
    }
    else if (page === 'stories') {
        hideChrome();
        const storiesEl = document.getElementById('storiesPage');
        if (storiesEl) {
            storiesEl.classList.add('active', 'page-transition');
            renderPosts();
        }
    } else if (page === 'about') {
        hideChrome();
        const aboutEl = document.getElementById('aboutPage');
        aboutEl.classList.add('active', 'page-transition');
    } else if (page === 'profile') {
        hideChrome();
        const profileEl = document.getElementById('profilePage');
        profileEl.classList.add('active', 'page-transition');
        loadProfile();
        switchProfileTab('myposts');
    } else if (page === 'userprofile') {
        hideChrome();
        const userProfileEl = document.getElementById('userProfilePage');
        userProfileEl.classList.add('active', 'page-transition');
    } else if (page === 'newpost') {
        hideChrome();
        const newPostEl = document.getElementById('newPostPage');
        newPostEl.classList.add('active', 'page-transition');
        if (currentUser) {
            document.getElementById('newPostAvatar').src = currentUser.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
        }
        setTimeout(() => document.getElementById('postContent').focus(), 100);
    } else {
        // home page
        if (groupMessagePollingInterval) { clearInterval(groupMessagePollingInterval); groupMessagePollingInterval = null; }
        if (exploreSection) exploreSection.style.display = '';
        if (footer) footer.style.display = 'block';
        if (isLoggedIn) {
            if (hero) hero.style.display = 'none';
            if (mainContainer) mainContainer.style.display = 'grid';
            if (categoryFilter) categoryFilter.style.display = 'flex';
            if (welcomeBanner) welcomeBanner.style.display = 'block';
        } else {
            if (hero) hero.style.display = 'block';
            if (mainContainer) mainContainer.style.display = 'none';
            if (categoryFilter) categoryFilter.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
        }
    }

    highlightNavLink(page);
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleInfoSection(section) {
    const contentId = section + 'Content';
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.toggle('open');
        const header = content.previousElementSibling;
        if (header && header.classList.contains('info-header')) {
            const toggle = header.querySelector('.info-toggle');
            if (toggle) {
                toggle.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : '';
            }
        }
        const fullContent = content.querySelector('.topic-full-content');
        if (fullContent) {
            fullContent.classList.toggle('open', content.classList.contains('open'));
        }
    }
}

const topicGuidesData = {
    study: {
        icon: '📚', title: 'Study in China', subtitle: 'University experiences, study tips, and academic resources',
        tag: 'Education', accentRgb: '26, 115, 232',
        content: `<p>China has emerged as one of the world's most attractive study destinations, with over 200,000 international students enrolled annually across more than 700 universities. The Chinese Government Scholarship (CSC) program offers full tuition coverage, accommodation allowances, and living stipends to qualified international students.</p>
        <p>The application process typically opens in November for the following academic year. For English-taught programs, undergraduate programs typically require IELTS 6.0 or TOEFL 80+. Chinese language programs require HSK 4 for admission to degree programs.</p>
        <p><strong>Key Resources:</strong></p>
        <ul><li><a href="https://www.csc.edu.cn" target="_blank">CSC Scholarship Portal</a></li>
        <li><a href="http://www.moe.gov.cn" target="_blank">Ministry of Education</a></li></ul>
        <p>Living costs: Beijing/Shanghai ¥2,000-3,500/month shared housing. Smaller cities ¥1,200-2,000/month. University dorms ¥600-1,500/month.</p>`
    },
    school: {
        icon: '🎒', title: 'School Life in China', subtitle: 'Campus life, K-12 education, and student experiences',
        tag: 'Education', accentRgb: '156, 39, 176',
        content: `<p>Campus life in China offers a unique blend of traditional Chinese values and modern academic excellence. Universities typically operate on a semester system with 16-18 weeks of instruction per term.</p>
        <p>Student life extends beyond academics, with 100+ student organizations. Campus canteens offer subsidized meals averaging ¥15-30 per day. Dormitories cost ¥800-2,500 per year.</p>
        <p>For K-12 education, international families can choose between public schools, private international schools (¥80,000-300,000/year), or bilingual schools.</p>`
    },
    work: {
        icon: '⚡', title: 'Working in China', subtitle: 'Career opportunities, work culture, and professional development',
        tag: 'Career', accentRgb: '76, 175, 80',
        content: `<p>China's job market for foreigners has evolved significantly. Average expat salary ranges from ¥20,000 to 80,000/month depending on industry and experience. Tech and finance roles command the highest compensation.</p>
        <p>To work legally, foreign nationals require a Z-visa. The Foreign Expert Permit system categorizes workers into Category A (high-end talent), Category B (professional), and Category C (temporary).</p>
        <p><strong>Key Resources:</strong></p>
        <ul><li><a href="http://www.mohrss.gov.cn" target="_blank">Ministry of Human Resources</a></li></ul>`
    },
    visa: {
        icon: '✈️', title: 'Visa & Work Permits', subtitle: 'Visa processes, requirements, and legal information',
        tag: 'Travel', accentRgb: '255, 152, 0',
        content: `<p>China offers multiple visa categories: L-visa (Tourist, 30-60 days), M-visa (Business, 90 days), X-visa (Student), Z-visa (Work), and R-visa (Talent).</p>
        <p>Key documents: valid passport (6+ months), completed application form, passport photos, invitation letter, and proof of financial means. Processing: 4 days standard to same-day express.</p>
        <p><strong>Key Resources:</strong></p>
        <ul><li><a href="http://www.visa.gov.cn" target="_blank">China Visa Online</a></li>
        <li><a href="https://www.mfa.gov.cn" target="_blank">Ministry of Foreign Affairs</a></li></ul>`
    },
    travel: {
        icon: '🗺️', title: 'Travel & Adventure', subtitle: 'Hidden gems, travel tips, and must-visit destinations',
        tag: 'Travel', accentRgb: '0, 188, 212',
        content: `<p>China's high-speed rail network spans over 42,000 kilometers — the world's longest. Top UNESCO sites include the Great Wall, the Terracotta Army, the Imperial Palace, and Lijiang.</p>
        <p>The 144-hour visa-free transit policy is available at major airports in Beijing, Shanghai, Guangzhou, Chengdu, and 20+ other cities for travelers from 54 countries.</p>`
    },
    food: {
        icon: '🥢', title: 'Food & Dining', subtitle: 'Chinese cuisine, restaurant recommendations, cooking tips',
        tag: 'Food', accentRgb: '244, 67, 54',
        content: `<p>Chinese cuisine spans eight major regional traditions: Cantonese (dim sum), Sichuan (mala spicy), Beijing (Peking duck), Shanghai (soup dumplings), and more.</p>
        <p>Budget: street food ¥10-30, casual restaurants ¥40-80/person, mid-range ¥100-200, high-end ¥300-1000+. Look for the green A/B food safety grading stickers.</p>`
    },
    life: {
        icon: '🌆', title: 'Daily Life in China', subtitle: 'Housing, healthcare, transportation, and practical tips',
        tag: 'Lifestyle', accentRgb: '33, 150, 243',
        content: `<p>WeChat (1.3B users) is the essential super-app for messaging, payments, transportation, and more. Housing: Shanghai/Beijing ¥3,500-12,000/month, smaller cities ¥1,800-4,500/month.</p>
        <p>Healthcare: public hospitals ¥50-200 consultation, international clinics ¥300-800. Urban Employee Insurance covers ~70-85% for registered employees.</p>`
    },
    entertainment: {
        icon: '🎬', title: 'Entertainment & Fun', subtitle: 'Movies, nightlife, festivals, and activities',
        tag: 'Entertainment', accentRgb: '233, 30, 99',
        content: `<p>Major festivals: Chinese New Year (late Jan-Feb), Mid-Autumn Festival (Sep-Oct), National Day (Oct 1-7). China's nightlife scene is huge — from rooftop cocktail bars on the Bund to hidden hutong speakeasies in Beijing.</p>
        <p><strong>Beijing — Where Expats Hang Out:</strong></p>
        <ul>
            <li>🏯 <strong>Great Leap Brewing #12</strong> — 东城区豆角胡同6号. Original craft beer in a hutong courtyard.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=大跃啤酒 豆角胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">北新桥站</span></div></div></li>
            <li>🍺 <strong>Slow Boat Brewery</strong> — 东城区东四十条56号. Award-winning IPAs.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=悠航鲜啤 东四十条" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">东四十条站</span></div></div></li>
            <li>🍸 <strong>Jing-A Brewing Taproom</strong> — 朝阳区幸福村中路19号楼. Best outdoor terrace in town.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=京A啤酒 幸福村中路" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">东大桥站</span></div></div></li>
            <li>🥃 <strong>Capital Spirits</strong> — 东城区钱粮胡同3号. China's first baijiu cocktail bar.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=首都烈酒 钱粮胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div></li>
            <li>🎵 <strong>DDC (Dusk Dawn Club)</strong> — 东城区山老胡同14号. Live jazz & indie music.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=黄昏黎明俱乐部 山老胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div></li>
        </ul>
        <p><strong>Shanghai — Where Expats Hang Out:</strong></p>
        <ul>
            <li>🥂 <strong>Bar Rouge</strong> — 黄浦区中山东一路18号7楼. Iconic rooftop with Pudong views.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Bar%20Rouge%20外滩18号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div></li>
            <li>🍸 <strong>The Public</strong> — 静安区茂名南路101号. Legendary expat cocktail bar.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=The%20Public%20茂名南路101号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">陕西南路站</span></div></div></li>
            <li>🥃 <strong>Senator Saloon</strong> — 徐汇区建国西路98号. American whiskey bar, always packed.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Senator%20Saloon%20建国西路98号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line9">🚇 9号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">嘉善路站</span></div></div></li>
            <li>🍺 <strong>Daga Brewpub</strong> — 静安区愚园路57号. 30+ craft beers on tap.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Daga%20Brewpub%20愚园路57号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line11">🚇 11号线</span><span class="station-name">江苏路站</span></div></div></li>
            <li>🎷 <strong>JZ Club</strong> — 徐汇区复兴西路46号. Shanghai's best live jazz since 2004.<div class="venue-location"><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=JZ%20Club%20复兴西路46号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line11">🚇 11号线</span><span class="station-name">交通大学站</span></div></div></li>
        </ul>
        <p>KTV (karaoke) rooms ¥30-80/hour. Escape rooms, 剧本杀 (murder mystery), and indoor skydiving are popular.</p>`
    },
    business: {
        icon: '🚀', title: 'Business & Entrepreneurship', subtitle: 'Startups, networking, and business culture',
        tag: 'Business', accentRgb: '255, 193, 7',
        content: `<p>China ranks #2 globally for VC investment. Startup hubs: Shenzhen (hardware), Beijing (AI), Shanghai (fintech), Hangzhou (e-commerce). Free trade zones offer 15% corporate tax.</p>
        <p>Business culture emphasizes guanxi (relationships), mianzi (face), and hierarchical respect. Company registration: 3-5 working days for most private limited companies.</p>`
    },
    language: {
        icon: '💬', title: 'Language Learning', subtitle: 'Mandarin tips, resources, and language exchange',
        tag: 'Language', accentRgb: '0, 188, 212',
        content: `<p>HSK exam has 6 levels: HSK 1-2 (basic, 300-600 characters), HSK 3-4 (intermediate, 1,200-2,500 characters), HSK 5-6 (advanced, 5,000+ characters).</p>
        <p>Resources: HelloChinese, Du Chinese, Pleco apps. Language exchange via italki (¥60-200/hour tutors), Tandem, HelloTalk. Confucius Institutes worldwide offer official certification.</p>`
    },
    rent: {
        icon: '🏠', title: 'Rent an Apartment', subtitle: 'Housing market, rental platforms, and tenant rights for expats',
        tag: 'Housing', accentRgb: '156, 39, 176',
        content: `<p>Finding the right apartment in China can be one of the biggest challenges for foreigners. The rental market in major cities like Beijing and Shanghai is fast-paced, with quality apartments often being snapped up within hours of listing. Understanding the local rental ecosystem — from popular platforms to lease negotiation — is essential.</p>
        <p>Most foreigners rent through online platforms. The most popular apps include <a href="https://www.ziroom.com" target="_blank">Ziroom (自如)</a> for furnished apartments with standardized service, <a href="https://www.lianjia.com" target="_blank">Lianjia (链家)</a> for a wide range of listings, and <a href="https://www.ke.com" target="_blank">Beike (贝壳找房)</a> which aggregates listings from multiple agencies. .</p>
        <p><strong>Typical Rent Ranges (Monthly):</strong></p>
        <ul><li>Beijing Chaoyang (1BR): ¥5,000-10,000</li>
        <li>Beijing Haidian (1BR): ¥4,500-8,000</li>
        <li>Shanghai Jing'an (1BR): ¥5,500-12,000</li>
        <li>Shared apartment (any Tier 1 city): ¥2,500-5,000/room</li></ul>
        <p><strong>Key Resources:</strong></p>
        <ul><li><a href="https://www.ziroom.com" target="_blank">Ziroom (自如) — Furnished Apartments</a></li>
        <li><a href="https://www.lianjia.com" target="_blank">Lianjia (链家) — Real Estate Platform</a></li>
        <li><a href="https://www.ke.com" target="_blank">Beike (贝壳找房) — Housing Aggregator</a></li>
</ul>`
    },
    sim: {
        icon: '📱', title: 'SIM Card & Mobile Service', subtitle: 'Getting a phone number, carrier plans, and registration rules',
        tag: 'Telecom', accentRgb: '0, 150, 136',
        content: `<p>Getting a Chinese SIM card is one of the first things you need to do when arriving in China. Your phone number is your identity — it's linked to WeChat, Alipay, bank accounts, and almost every app you'll use daily.</p>
        <p><strong>The Big Three Carriers:</strong></p>
        <ul>
            <li>📶 <strong>China Mobile (中国移动)</strong> — Largest network, best coverage. Plans from ¥58/month.</li>
            <li>📶 <strong>China Unicom (中国联通)</strong> — Best for iPhones, fastest 4G/5G in cities. Plans from ¥56/month.</li>
            <li>📶 <strong>China Telecom (中国电信)</strong> — Good value, strong in southern China. Plans from ¥49/month.</li>
        </ul>
        <p><strong>⚠️ Critical Rule for Foreigners:</strong> Each foreign passport can only register <strong>one SIM card per carrier</strong> at a time. If you previously registered a SIM in another city, you may need to return to the original business hall to cancel it before registering a new one.</p>
        <p>Legal basis: <a href="https://baike.baidu.com/item/%E7%94%B5%E8%AF%9D%E7%94%A8%E6%88%B7%E7%9C%9F%E5%AE%9E%E8%BA%AB%E4%BB%BD%E4%BF%A1%E6%81%AF%E7%99%BB%E8%AE%B0%E8%A7%84%E5%AE%9A" target="_blank">《电话用户真实身份信息登记规定》(工信部令第25号)</a></p>
        <p><strong>Key Resources:</strong></p>
        <ul><li><a href="https://www.10086.cn" target="_blank">China Mobile</a></li>
        <li><a href="https://www.10010.com" target="_blank">China Unicom</a></li>
        <li><a href="https://www.189.cn" target="_blank">China Telecom</a></li></ul>`
    },
    hospital: {
        icon: '🏥', title: 'Hospital & Healthcare', subtitle: 'Seeing a doctor, prescriptions, and insurance',
        tag: 'Healthcare', accentRgb: '0, 150, 136',
        content: `<p>China's public hospital system is efficient but very different from Western clinics. No family doctor system — you go directly to specialists. Registration, lab work, and medication are all paid upfront; insurance reimbursement comes later.</p>
        <p>Large hospitals in Beijing, Shanghai, and Guangzhou often have international clinics with English-speaking staff. In smaller cities, bring a Chinese-speaking friend or use a translation app.</p>
        <p><strong>Emergency numbers:</strong></p>
        <ul>
            <li>🚑 <strong>120</strong> — Ambulance</li>
            <li>🏥 <strong>110</strong> — Police (can help direct you)</li>
        </ul>`
    },
    cultural: {
        icon: '🌏', title: 'Cultural Differences', subtitle: 'Understanding Chinese culture, customs, and social norms for foreigners',
        tag: 'Culture', accentRgb: '255, 87, 34',
        content: `<p>Living in China means encountering cultural differences every day — from how people greet you, to shopping habits, to food etiquette. Understanding these differences will make your experience richer and help you avoid misunderstandings. This guide covers the most common cultural surprises foreigners face in China.</p>
        <p>Chinese culture places enormous value on hospitality (好客 hàokè). When Chinese people see foreigners wearing hanfu (traditional clothing), speaking Chinese, or eating with chopsticks, the reaction is almost always one of delight and pride — not mockery. Understanding this context helps decode many "surprising" reactions you may encounter.</p>
        <p><strong>Key Cultural Concepts:</strong></p>
        <ul>
            <li>🏮 <strong>面子 (miànzi) — "Face"</strong>: Social reputation and dignity. Avoid publicly embarrassing anyone.</li>
            <li>🤝 <strong>关系 (guānxi) — "Relationships"</strong>: Personal connections drive business and daily life.</li>
            <li>🍵 <strong>客气 (kèqi) — "Politeness"</strong>: Modesty and courtesy. Chinese people may refuse a gift 2-3 times before accepting.</li>
            <li>👥 <strong>老 + surname</strong>: An affectionate, informal way to address someone (老王 = "Old Wang"). Not rude at all.</li>
        </ul>`
    }
};

// ===== Topic Articles Data =====
const topicArticles = {
    study: [
        {
            title: 'How to Apply for the CSC Scholarship in 2026',
            content: `<p>The Chinese Government Scholarship (CSC) remains one of the most prestigious fully-funded scholarship programs for international students. In 2025, over 20,000 scholarships were awarded to students from 180+ countries. Here's a comprehensive guide to help you navigate the application process.</p>
            <p><strong>Step 1: Choose Your Program</strong></p>
            <p>Visit the CSC portal at <a href="https://www.csc.edu.cn" target="_blank">csc.edu.cn</a> and browse available programs. You can apply to up to 3 universities. Popular choices include Peking University, Tsinghua University, and Fudan University. Most programs accept applications between December and March.</p>
            <p><strong>Step 2: Prepare Documents</strong></p>
            <ul>
                <li>Notarized highest diploma (bachelor's, master's, or equivalent)</li>
                <li>Academic transcripts (notarized copies)</li>
                <li>A study plan or research proposal (800+ words for master's, 1500+ for PhD)</li>
                <li>Two recommendation letters from professors</li>
                <li>Physical examination record (within 6 months)</li>
                <li>Passport copy (valid for 6+ months beyond enrollment)</li>
                <li>HSK certificate (Level 4+ for Chinese-taught programs)</li>
                <li>IELTS 6.0+ or TOEFL 80+ for English-taught programs</li>
            </ul>
            <p><strong>Step 3: Submit Online Application</strong></p>
            <p>Complete the online application on the CSC portal. Upload all required documents and select your preferred universities. The system allows you to track your application status in real-time.</p>
            <p><strong>Step 4: University Review</strong></p>
            <p>Universities review applications from April to May. Shortlisted candidates may be invited for online interviews. Results are typically announced by July.</p>
            <p><strong>What's Covered:</strong></p>
            <ul>
                <li>Full tuition waiver for the entire program duration</li>
                <li>Free on-campus accommodation (or accommodation allowance of ¥1,000-1,500/month)</li>
                <li>Monthly living stipend: ¥2,500 for undergraduates, ¥3,000 for master's, ¥3,500 for PhD students</li>
                <li>Comprehensive medical insurance</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.csc.edu.cn" target="_blank">China Scholarship Council</a> · <a href="http://www.moe.gov.cn" target="_blank">Ministry of Education of China</a></div>`
        },
        {
            title: 'Top 10 Universities for International Students in China',
            content: `<p>China is home to some of Asia's highest-ranked universities. Based on QS World University Rankings 2025 and international student enrollment data, here are the top 10 institutions for international students.</p>
            <p><strong>1. Peking University (北京大学)</strong> — Beijing</p>
            <p>Ranked #14 globally, PKU hosts 4,000+ international students from 120+ countries. Known for humanities, social sciences, and medicine. The campus features stunning traditional Chinese architecture alongside modern facilities.</p>
            <p><strong>2. Tsinghua University (清华大学)</strong> — Beijing</p>
            <p>Ranked #20 globally, Tsinghua is China's top engineering university with 3,500+ international students. Strong programs: engineering, computer science, architecture, and business.</p>
            <p><strong>3. Fudan University (复旦大学)</strong> — Shanghai</p>
            <p>Ranked #39 globally, Fudan hosts 4,500+ international students. Located in Shanghai, it excels in journalism, medicine, economics, and management.</p>
            <p><strong>4. Shanghai Jiao Tong University (上海交通大学)</strong></p>
            <p>Ranked #45 globally, SJTU has 3,000+ international students. Known for engineering, AI, biomedical sciences, and the prestigious Antai College of Economics.</p>
            <p><strong>5. Zhejiang University (浙江大学)</strong> — Hangzhou</p>
            <p>Ranked #44 globally, located in the scenic city of Hangzhou. 6,000+ international students. Strong in engineering, agriculture, and computer science.</p>
            <p><strong>6. Nanjing University (南京大学)</strong></p>
            <p>Ranked #120 globally. Known for astronomy, physics, chemistry, and earth sciences. Beautiful Gulou campus with historic buildings.</p>
            <p><strong>7. University of Science and Technology of China (中国科学技术大学)</strong> — Hefei</p>
            <p>Ranked #137 globally. China's top research university for physics, mathematics, and quantum computing.</p>
            <p><strong>8. Wuhan University (武汉大学)</strong></p>
            <p>Ranked #194 globally. Famous for its cherry blossom campus. Strong in law, remote sensing, and library science.</p>
            <p><strong>9. Tongji University (同济大学)</strong> — Shanghai</p>
            <p>Ranked #216 globally. Leading university for architecture, civil engineering, urban planning, and automotive engineering.</p>
            <p><strong>10. Beijing Normal University (北京师范大学)</strong></p>
            <p>Ranked #262 globally. China's top education university with 2,800+ international students. Strong in education, Chinese language, and psychology.</p>
            <div class="ar-source">Sources: <a href="https://www.topuniversities.com" target="_blank">QS World Rankings 2025</a> · <a href="https://www.jsj.edu.cn" target="_blank">Chinese Education Exchange Center</a></div>`
        },
        {
            title: 'Cost of Living Guide for Students in China (2026)',
            content: `<p>Understanding the cost of living is essential for planning your studies in China. Here's a detailed breakdown by city tier.</p>
            <p><strong>Tier 1 Cities (Beijing, Shanghai, Guangzhou, Shenzhen)</strong></p>
            <ul>
                <li>University dormitory: ¥600-1,500/month</li>
                <li>Shared apartment: ¥2,000-4,000/month per room</li>
                <li>Meals (campus canteen): ¥15-30/day</li>
                <li>Meals (off-campus): ¥40-80/day</li>
                <li>Metro/Bus: ¥200-400/month</li>
                <li>Mobile phone plan: ¥50-100/month</li>
                <li><strong>Total monthly budget: ¥3,000-6,000</strong></li>
            </ul>
            <p><strong>Tier 2 Cities (Chengdu, Hangzhou, Wuhan, Xi'an, Nanjing)</strong></p>
            <ul>
                <li>University dormitory: ¥500-1,200/month</li>
                <li>Shared apartment: ¥1,200-2,500/month per room</li>
                <li>Meals (campus canteen): ¥10-25/day</li>
                <li>Meals (off-campus): ¥30-60/day</li>
                <li>Metro/Bus: ¥100-300/month</li>
                <li>Mobile phone plan: ¥30-80/month</li>
                <li><strong>Total monthly budget: ¥2,000-4,500</strong></li>
            </ul>
            <p><strong>Money-Saving Tips:</strong></p>
            <ul>
                <li>Always eat at campus canteens — subsidized and nutritious</li>
                <li>Use student discounts on metro cards (50% off in many cities)</li>
                <li>Shop at local wet markets for groceries (30-50% cheaper than supermarkets)</li>
                <li>Use Taobao/Pinduoduo for online shopping deals</li>
                <li>Apply for university merit scholarships (¥3,000-10,000/year)</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.numbeo.com" target="_blank">Numbeo Cost of Living Index</a> · <a href="http://www.moe.gov.cn" target="_blank">Ministry of Education</a></div>`
        }
    ],
    work: [
        {
            title: 'Complete Guide to Getting a Work Visa (Z-Visa) in China',
            content: `<p>The Z-visa is the official work visa for foreign nationals employed in China. Here's the complete process from job offer to residence permit.</p>
            <p><strong>Eligibility Requirements:</strong></p>
            <ul>
                <li>Bachelor's degree or higher (notarized and authenticated)</li>
                <li>2+ years of relevant work experience</li>
                <li>Clean criminal record (authenticated by your country's authorities)</li>
                <li>Age: typically 18-60 (exceptions for Category A talent)</li>
                <li>Job offer from a licensed Chinese employer</li>
            </ul>
            <p><strong>Step-by-Step Process:</strong></p>
            <p><strong>1. Employer applies for Work Permit Notification</strong> — The employer submits your documents to the local Bureau of Human Resources and Social Security. Processing: 5-10 working days.</p>
            <p><strong>2. Apply for Z-Visa at Chinese Embassy</strong> — With the Work Permit Notification letter, apply at your nearest Chinese embassy/consulate. Required: passport, application form, photo, notification letter. Processing: 4-5 working days.</p>
            <p><strong>3. Enter China and convert to Residence Permit</strong> — Within 30 days of arrival, your employer helps you apply for a Foreigner's Work Permit and Residence Permit at the local Public Security Bureau.</p>
            <p><strong>Work Permit Categories:</strong></p>
            <ul>
                <li><strong>Category A</strong> (Score 85+): High-end talent. 5-year residence permit, simplified process.</li>
                <li><strong>Category B</strong> (Score 60-84): Professional talent. 1-2 year permit, standard process.</li>
                <li><strong>Category C</strong> (Score below 60): Temporary/specialized. Short-term permits, restricted.</li>
            </ul>
            <p><strong>Salary Benchmarks (2025-2026):</strong></p>
            <ul>
                <li>Tech/IT: ¥25,000-60,000/month</li>
                <li>Finance: ¥30,000-80,000/month</li>
                <li>Education (TEFL): ¥15,000-30,000/month</li>
                <li>Management: ¥35,000-100,000/month</li>
            </ul>
            <div class="ar-source">Sources: <a href="http://www.mohrss.gov.cn" target="_blank">Ministry of Human Resources</a> · <a href="https://fuwu.most.gov.cn/" target="_blank">Ministry of Science and Technology Service Portal</a></div>`
        },
        {
            title: 'How to Start a Business in China as a Foreigner',
            content: `<p>China's startup ecosystem is booming. Here's how to legally establish and run a business as a foreign national.</p>
            <p><strong>Business Structures Available:</strong></p>
            <ul>
                <li><strong>Wholly Foreign-Owned Enterprise (WFOE)</strong> — 100% foreign ownership, most common choice</li>
                <li><strong>Joint Venture (JV)</strong> — Partnership with Chinese company, required in some sectors</li>
                <li><strong>Representative Office</strong> — Limited activities, cannot generate revenue directly</li>
            </ul>
            <p><strong>WFOE Registration Process:</strong></p>
            <p><strong>1. Name Pre-approval</strong> — Reserve your company name at the local Administration for Market Registration. Takes 1-3 days.</p>
            <p><strong>2. Submit Registration Documents</strong> — Articles of association, investor identification, registered capital declaration, office lease agreement. Processing: 3-5 working days via the e-registration platform.</p>
            <p><strong>3. Obtain Business License</strong> — Once approved, receive your unified social credit code and business license.</p>
            <p><strong>4. Post-Registration</strong> — Open bank account, register for tax, set up company chops (seals), register with customs if importing/exporting.</p>
            <p><strong>Tax Benefits in Free Trade Zones:</strong></p>
            <ul>
                <li>Corporate income tax: 15% (vs. standard 25%) in qualifying zones</li>
                <li>Simplified customs procedures</li>
                <li>Relaxed foreign investment restrictions in many sectors</li>
                <li>Available in Shanghai, Shenzhen, Hainan, and 21+ other locations</li>
            </ul>
            <p><strong>Government Support for Startups:</strong></p>
            <ul>
                <li>Innovation grants up to ¥500,000 for qualifying tech startups</li>
                <li>Rent subsidies for incubator/accelerator spaces</li>
                <li>High-tech enterprise tax rate: 15% (vs. 25%)</li>
                <li>Talent attraction programs with housing subsidies</li>
            </ul>
            <div class="ar-source">Sources: <a href="http://www.mofcom.gov.cn" target="_blank">Ministry of Commerce</a> · <a href="http://www.chinatax.gov.cn" target="_blank">State Taxation Administration</a></div>`
        },
        {
            title: 'Where to Find Jobs in China: Full-Time & Part-Time Guide (2026)',
            content: `            <p>以下是全职和兼职求职平台汇总。</p>
            <p><strong>🌐 Chinese Job Platforms</strong></p>
            <ul>
                <li>🔗 <a href="https://www.zhipin.com" target="_blank">Boss直聘 (BOSS Zhipin)</a></li>
                <li>🔗 <a href="https://www.lagou.com" target="_blank">拉勾 (Lagou)</a></li>
                <li>🔗 <a href="https://www.zhaopin.com" target="_blank">智联招聘 (Zhaopin)</a></li>
                <li>🔗 <a href="https://www.51job.com" target="_blank">前程无忧 (51Job)</a></li>
                <li>🔗 <a href="https://www.liepin.com" target="_blank">猎聘 (Liepin)</a></li>
            </ul>
            <p><strong>🌏 International & English-Friendly Platforms</strong></p>
            <ul>
                <li>🔗 <a href="https://www.indeed.com/worldwide" target="_blank">Indeed (China)</a></li>
                <li>🔗 <a href="https://www.glassdoor.com" target="_blank">Glassdoor</a> — ⚠️ 需要VPN</li>
                <li>🔗 <a href="https://www.echinacities.com" target="_blank">eChinaCities</a></li>
                <li>🔗 <a href="https://www.hiredchina.com" target="_blank">HiredChina</a></li>
                <li>🔗 <a href="https://www.thebeijinger.com/jobs" target="_blank">The Beijinger Jobs</a> / <a href="https://www.smartshanghai.com/jobs" target="_blank">SmartShanghai</a></li>
                <li>🔗 <a href="https://jobs.echinacities.com" target="_blank">ChinaJob (SAFEEA)</a></li>
                <li>🔗 <a href="https://www.robertwalters.cn" target="_blank">Robert Walters China</a></li>
                <li>🔗 <a href="https://www.hays.cn" target="_blank">Hays China</a></li>
            </ul>
            <p><strong>⏰ Part-Time & Freelance</strong></p>
            <ul>
                <li>📚 <a href="https://www.italki.com" target="_blank">italki</a> / <a href="https://www.preply.com" target="_blank">Preply</a> — 英语教学</li>
                <li>🎤 WeChat搜 "foreign models [城市]" — 活动主持/模特</li>
                <li>🌐 <a href="https://www.gengo.com" target="_blank">Gengo</a> — 翻译/口译</li>
                <li>📱 抖音 / 小红书 / B站 — 内容创作</li>
                <li>🏢 企业咨询 — 技术/金融/营销</li>
            </ul>
            <p><strong>⚠️ Part-Time Legal Warning:</strong> Working part-time on a student visa or tourist visa is <strong>illegal</strong>. You need at minimum a work permit or a "part-time work approval" (兼职批准) from your university (for students) or employer. Penalties include fines ¥5,000-20,000, detention, and deportation.</p>
            <p><strong>💡 Job Search Tips</strong></p>
            <ul>
                <li>📱 Boss直聘 — 中国最火求职App</li>
                <li>💬 微信搜 "[城市] jobs" 或 "[行业] 招聘"</li>
                <li>🤝 Meetup.com / Eventbrite — 线下社交活动</li>
                <li>📄 准备中文简历 (Chinese Resume)</li>
                <li>🌐 VPN访问 LinkedIn — 外企仍用</li>
                <li>🏢 优先投外企 — 工签支持率高</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.echinacities.com" target="_blank">eChinaCities</a> · <a href="https://www.zhipin.com" target="_blank">Boss直聘</a> · <a href="http://www.mohrss.gov.cn" target="_blank">Ministry of Human Resources</a> · <a href="https://www.hiredchina.com" target="_blank">HiredChina</a></div>`
        }
    ],
    visa: [
        {
            title: 'China Visa Types Explained: Which One Do You Need?',
            content: `<p>China offers multiple visa categories. Choosing the right one depends on your purpose of visit. Here's a comprehensive breakdown.</p>
            <p><strong>L-Visa (Tourist)</strong></p>
            <p>For sightseeing, visiting friends/family. Duration: 30-90 days per entry. Single, double, or multiple entry options. Requirements: passport, application form, round-trip tickets, hotel booking or invitation letter.</p>
            <p><strong>M-Visa (Business/Trade)</strong></p>
            <p>For commercial activities, trade fairs, business meetings. Duration: 30-90 days. Multiple entry options available for frequent travelers. Requires invitation from Chinese trade partner or company.</p>
            <p><strong>X-Visa (Student)</strong></p>
            <p><strong>X1:</strong> For programs longer than 180 days. Must convert to residence permit within 30 days of arrival.</p>
            <p><strong>X2:</strong> For programs shorter than 180 days. Valid for the enrollment period only.</p>
            <p><strong>Z-Visa (Work)</strong></p>
            <p>For employment in China. Requires Work Permit Notification from employer. Must convert to residence permit within 30 days. See our detailed Z-visa guide for the full process.</p>
            <p><strong>R-Visa (Talent)</strong></p>
            <p>For high-level foreign talent. Streamlined processing, longer validity (up to 10 years for some nationalities). Requires confirmation of high-level talent status.</p>
            <p><strong>Q-Visa (Family Reunion)</strong></p>
            <p><strong>Q1:</strong> Long-term (180+ days) for family of Chinese citizens/foreign residents.</p>
            <p><strong>Q2:</strong> Short-term (up to 120 days) for visiting family.</p>
            <p><strong>S-Visa (Family of Foreign Workers)</strong></p>
            <p>For spouses, parents, and children of Z-visa holders working in China.</p>
            <p><strong>144-Hour Visa-Free Transit</strong></p>
            <p>Available at major airports in Beijing, Shanghai, Guangzhou, Chengdu, and 20+ cities. For citizens of 54 countries transiting through China. No visa needed if you have a confirmed onward ticket to a third country.</p>
            <div class="ar-source">Sources: <a href="http://www.visa.gov.cn" target="_blank">China Visa Online</a> · <a href="https://www.mfa.gov.cn" target="_blank">Ministry of Foreign Affairs</a></div>`
        },
        {
            title: 'How to Extend or Change Your Visa in China',
            content: `<p>If you need to stay longer or change your visa type while in China, here's what you need to know.</p>
            <p><strong>Visa Extension:</strong></p>
            <p>Apply at the local Public Security Bureau (Exit-Entry Administration) at least 7 days before your visa expires. Required documents:</p>
            <ul>
                <li>Valid passport with current visa</li>
                <li>Registration form of temporary residence</li>
                <li>Passport-sized photos (48x33mm, white background)</li>
                <li>Supporting documents (invitation letter, hotel booking, etc.)</li>
                <li>Application fee: ¥160 (single entry), varies by type</li>
            </ul>
            <p><strong>Visa Type Change:</strong></p>
            <p>Changing visa type (e.g., L to Z) typically requires leaving China and re-entering with the new visa. However, some changes can be made within China:</p>
            <ul>
                <li>Tourist (L) to Student (X): Possible with university enrollment documents</li>
                <li>Tourist (L) to Work (Z): Usually requires exit and re-entry</li>
                <li>Student (X) to Work (Z): Possible with job offer and Work Permit</li>
            </ul>
            <p><strong>Overstay Penalties:</strong></p>
            <ul>
                <li>Fine: ¥500-1,000 per day of overstay</li>
                <li>Potential detention and deportation</li>
                <li>Entry ban: 1-10 years depending on severity</li>
                <li><strong>Always apply for extension before your visa expires!</strong></li>
            </ul>
            <div class="ar-source">Sources: <a href="http://cs.mfa.gov.cn" target="_blank">Chinese Consular Affairs</a> · <a href="https://www.mfa.gov.cn" target="_blank">Ministry of Foreign Affairs</a></div>`
        },
        {
            title: "A Foreigner's Complete Guide to Work Permits & Visas for China (2025–2026)",
            content: `<p>Foreigners who wish to work in China must obtain a Foreigner's Work Permit and a work-type residence permit before they can legally begin working. This guide explains the complete process — from who qualifies, to how to apply, what documents you need, and what to do after you arrive.</p>

            <div class="important-update"><strong>🔔 Important Update (2025–2026):</strong> The physical Foreigner's Work Permit card has been discontinued. Work permit information is now integrated into the <strong>Social Security Card (电子社保卡)</strong> for foreign employees.</div>

            <p><strong>1. Who Needs a Work Permit?</strong></p>
            <blockquote>"Foreigners working in China must obtain a work permit and a work-type residence permit in accordance with regulations. No employer may hire a foreigner who has not obtained a work permit and a work-type residence permit." — Exit and Entry Administration Law of the PRC, Article 41</blockquote>
            <p>The work permit is required for <strong>any foreign national working in China</strong> (including teaching, business management, technical roles, research, etc.), regardless of the duration or type of employment.</p>
            <ul>
                <li>Work permits are handled by the <strong>employer</strong> (the hiring company/institution), not by the foreigner personally. However, you will need to provide all required documents and cooperate throughout the process.</li>
                <li>The permit is granted to the employer for a specific position — <strong>not to you as an individual</strong>. If you change employers or job roles, you must reapply.</li>
            </ul>

            <p><strong>2. Three Categories of Foreign Workers (A / B / C)</strong></p>
            <p>China classifies foreign workers into three categories based on skills, experience, and national needs.</p>
            <table class="guide-table">
                <thead><tr><th>Category</th><th>Who it applies to</th><th>Key features</th></tr></thead>
                <tbody>
                    <tr><td><strong>A类 – Foreign High-End Talent</strong></td><td>Scientists, tech leaders, top executives, special experts, etc.</td><td>No age/education limits; "green channel" processing; 2–5 years validity; fewer document requirements; no numeric limits.</td></tr>
                    <tr><td><strong>B类 – Foreign Professionals</strong></td><td>Bachelor's degree + ≥2 years relevant work experience; age ≤60; roles needed for economic development</td><td>Numeric limits based on market demand; standard documentation; some flexibility for startup talent and outstanding foreign graduates.</td></tr>
                    <tr><td><strong>C类 – Other Foreign Personnel</strong></td><td>Seasonal workers, interns, and other roles defined by policy</td><td>Strict numeric limits; subject to government quota.</td></tr>
                </tbody>
            </table>
            <p><strong>Points-based system:</strong> B-class applicants are assessed via a points system (minimum 60 points) based on factors like salary, Chinese language ability, and work experience.</p>

            <p><strong>3. Basic Eligibility Requirements (All Categories)</strong></p>
            <ul>
                <li>Age ≥18 years</li>
                <li>Good health (no serious infectious diseases)</li>
                <li>No criminal record</li>
                <li>A confirmed employer in China</li>
                <li>Possess the necessary professional skills or qualifications for the job</li>
                <li>The job must align with China's economic development needs</li>
            </ul>

            <p><strong>4. Step-by-Step Application Process (for Work Periods >90 Days)</strong></p>

            <p><strong>Step 1 — Employer registers an account online</strong></p>
            <p>Your employer must first register on the <a href="https://fuwu.most.gov.cn/" target="_blank">Foreigners' Work Management Service System (外国人来华工作管理服务系统)</a> — now hosted under the Ministry of Science and Technology. The employer needs to provide their business license, Unified Social Credit Code certificate, and legal representative details. If your employer does not know how to do this, they can engage a licensed agency to handle it on their behalf.</p>

            <p><strong>Step 2 — Online application for the Work Permit Notification</strong></p>
            <p>Your employer submits the application and all required documents online to the local Foreign Experts Bureau or relevant government department. Processing time: about <strong>5 working days</strong>. If documents are incomplete, the agency will notify the employer to make corrections.</p>

            <p><strong>Step 3 — Obtain the Work Permit Notification</strong></p>
            <p>If approved, the system generates a "Notification Letter of Foreigner's Work Permit" (外国人工作许可通知). This document is <strong>valid for 3 months</strong> from the date of issue. ⚠️ The Notification Letter is <em>not</em> a visa and cannot be used in place of one.</p>

            <p><strong>Step 4 — Apply for a Z-visa at a Chinese embassy/consulate</strong></p>
            <p>Present the following at the nearest Chinese embassy or consulate in your home country:</p>
            <ul>
                <li>Notification Letter of Foreigner's Work Permit</li>
                <li>Valid passport (at least 6 months validity remaining)</li>
                <li>Passport photo</li>
                <li>Visa application form</li>
            </ul>
            <p>The embassy/consulate will issue a <strong>Z-visa</strong> (for foreign employees). In special cases, <strong>R-visas</strong> (for high-end talent) or <strong>F-visas</strong> may be issued.</p>

            <p><strong>Step 5 — Enter China and apply for the physical Work Permit</strong></p>
            <p>Within <strong>15 days</strong> of entering China, you (via your employer) must apply to obtain the Foreigner's Work Permit (now integrated into the Social Security Card system). Submit all original documents for verification (original degree certificates, no criminal record certificate, health check report, employment contract). Processing time: about <strong>10 working days</strong> (A-class may be processed faster).</p>

            <p><strong>Step 6 — Apply for a work-type residence permit</strong></p>
            <p>Within <strong>30 days</strong> of entry, you must go to the local Public Security Bureau's (PSB) Exit-Entry Administration Department to apply for a work-type residence permit.</p>
            <p>Required documents:</p>
            <ul>
                <li>Passport with Z-visa</li>
                <li>Foreigner's Work Permit</li>
                <li>Employment contract</li>
                <li>Completed residence permit application form</li>
                <li>Passport photo</li>
            </ul>
            <p>Processing time: Typically <strong>15 working days</strong> (can be processed together with the work permit at "single window" service counters in many cities).</p>
            <p>⚠️ <strong>You cannot begin working until you have both the Work Permit and the work-type residence permit in hand.</strong></p>

            <p><strong>5. Required Documents — Complete List</strong></p>
            <table class="guide-table">
                <thead><tr><th>Document</th><th>Notes</th></tr></thead>
                <tbody>
                    <tr><td>Foreigner's Work Permit Application Form</td><td>Completed online, printed, signed, and stamped with employer's seal. Submitted electronically.</td></tr>
                    <tr><td>Work Experience Certificate</td><td>Issued by previous employer(s); includes position, dates of employment, and contact details. Must bear the employer's seal or signature.</td></tr>
                    <tr><td>Highest Academic Degree/Diploma</td><td>Must be notarized and authenticated by Chinese embassy/consulate in the country of issue, or by apostille certification if the issuing country is a party to the Apostille Convention. A-class applicants may submit via letter of commitment.</td></tr>
                    <tr><td>No Criminal Record Certificate</td><td>Issued by police or judicial authorities of your home country. Must be authenticated by Chinese embassy/consulate and dated within the last 6 months. A-class applicants may submit a letter of commitment.</td></tr>
                    <tr><td>Health Check Certificate</td><td>Issued by a Chinese quarantine authority or an overseas medical institution recognized by Chinese authorities. Must be dated within 6 months.</td></tr>
                    <tr><td>Employment Contract</td><td>Must be in Chinese, signed by both parties, and bear the employer's official seal. Must include: job location, job description, salary, start date, and term of employment.</td></tr>
                    <tr><td>Passport</td><td>Must be valid for at least 6 months.</td></tr>
                    <tr><td>Passport Photo</td><td>White background, taken within last 6 months; JPG format, 40–120KB.</td></tr>
                    <tr><td>Chinese Translation of Non-Chinese Documents</td><td>All documents not originally in Chinese must be accompanied by a Chinese translation, stamped with the employer's official seal (except for the passport).</td></tr>
                </tbody>
            </table>
            <p>A-class applicants enjoy reduced documentation requirements (e.g., no criminal record certificate may be submitted via a letter of commitment, no need for physical document verification on arrival).</p>

            <p><strong>6. Special Case — Applying While Already in China (A-class Applicants)</strong></p>
            <p>If you are already in China legally (e.g., on a business, tourist, or family visa), <strong>A-class applicants</strong> may apply for the work permit directly from inside China without leaving to obtain a Z-visa overseas. This is <strong>not allowed</strong> for B-class or C-class applicants unless you fall under other narrow exceptions (e.g., transferring between employers without changing job duties, family members of Chinese citizens or permanent residents, etc.).</p>
            <p>⚠️ Even for A-class applicants, the work-type residence permit must still be obtained after the work permit is approved. <strong>You cannot work on a tourist or business visa.</strong></p>

            <p><strong>7. How Long Does It Take?</strong></p>
            <table class="guide-table">
                <thead><tr><th>Stage</th><th>Approximate processing time</th></tr></thead>
                <tbody>
                    <tr><td>Online pre-approval (Notification Letter)</td><td>5 working days</td></tr>
                    <tr><td>Decision on work permit application</td><td>20 working days (can be extended by 10 days)</td></tr>
                    <tr><td>Work permit (after arrival in China)</td><td>10 working days</td></tr>
                    <tr><td>Work-type residence permit</td><td>15 working days</td></tr>
                </tbody>
            </table>
            <p><strong>Total estimated time</strong> (overseas application to full approval): Approximately <strong>2–3 months</strong>, depending on document preparation and embassy/consulate visa processing times.</p>

            <p><strong>8. Visa Types Explained</strong></p>
            <table class="guide-table">
                <thead><tr><th>Visa Code</th><th>Name</th><th>Who it applies to</th><th>When to use</th></tr></thead>
                <tbody>
                    <tr><td><strong>Z</strong></td><td>Work visa</td><td>Standard work permit holders</td><td>Most foreign employees</td></tr>
                    <tr><td><strong>R</strong></td><td>Talent visa</td><td>A-class high-end talent with special skills</td><td>High-end talent; faster processing</td></tr>
                    <tr><td><strong>F</strong></td><td>Non-commercial visit visa</td><td>Short-term work permits (≤90 days)</td><td>Short-term work/project visits</td></tr>
                </tbody>
            </table>

            <p><strong>9. Important Legal Notes</strong></p>
            <ul>
                <li>The work permit <strong>cannot be transferred</strong> to another employer. If you change companies, you must cancel the existing work permit and apply for a new one.</li>
                <li>The work permit is <strong>not a visa</strong>. You must still obtain the appropriate visa (Z/R/F) from a Chinese embassy or consulate before traveling to China.</li>
                <li>You <strong>cannot work</strong> until both the Work Permit and the work-type residence permit have been approved.</li>
                <li>Failure to obtain both permits before starting work constitutes <strong>illegal employment</strong> and can result in fines, deportation, and a ban on re-entry.</li>
                <li>Your employer must apply for work permit extension <strong>at least 30 days before</strong> it expires.</li>
                <li>Changes to personal information (name, passport number, job position, etc.) must be reported and the work permit amended <strong>within 10 working days</strong> of the change.</li>
                <li>If your employment contract is terminated early, your employer must cancel your work permit <strong>within 10 working days</strong> of termination.</li>
            </ul>

            <p><strong>10. Official Systems and Contact Points</strong></p>
            <ul>
                <li>🌐 <strong>Main online system:</strong> <a href="https://fuwu.most.gov.cn/" target="_blank">Foreigners' Work Management Service System</a> (now under the Ministry of Science and Technology)</li>
                <li>📞 <strong>Customer service hotline:</strong> 12333 (National Human Resources and Social Security hotline)</li>
                <li>🏢 <strong>Local PSB Exit-Entry Administration:</strong> For work-type residence permit inquiries</li>
                <li>🏛️ <strong>Chinese embassy/consulate:</strong> For Z/R/F visa applications in your home country</li>
                <li>📄 <strong>Document authentication:</strong> <a href="http://www.cs.mfa.gov.cn" target="_blank">China Consular Service website</a></li>
            </ul>

            <p><strong>11. Summary Checklist — Quick Reference</strong></p>
            <ol>
                <li>☐ Secure a job offer from a legally established Chinese employer.</li>
                <li>☐ Employer registers on the <a href="https://fuwu.most.gov.cn/" target="_blank">Foreigners' Work Management Service System</a>.</li>
                <li>☐ Employer submits online application with all documents (work experience certificate, diploma, no criminal record certificate, health check, contract, etc.).</li>
                <li>☐ Receive Notification Letter (valid for 3 months).</li>
                <li>☐ Apply for Z-visa (or R/F) at Chinese embassy/consulate in your home country.</li>
                <li>☐ Enter China (within the visa validity period).</li>
                <li>☐ Within 15 days of entry, employer submits original documents for verification to obtain Work Permit.</li>
                <li>☐ Within 30 days of entry, apply at local PSB for work-type residence permit.</li>
                <li>☐ Begin work legally — only after both permits are approved.</li>
                <li>☐ Ensure permits are extended or amended as required during your stay.</li>
            </ol>

            <p><strong>12. Frequently Asked Questions (FAQ)</strong></p>
            <p><strong>Q: Can I apply for a work permit without an employer?</strong></p>
            <p>A: No. The work permit is tied to a specific employer and position. You must have a confirmed job offer before applying.</p>
            <p><strong>Q: Can I start working once I receive my Z-visa?</strong></p>
            <p>A: No. You must also obtain the Foreigner's Work Permit (upon arrival in China) and the work-type residence permit before you can legally work.</p>
            <p><strong>Q: Do I need a work permit if I am teaching English for just three months?</strong></p>
            <p>A: Yes. Any work in China — paid or unpaid — requires a work permit and work-type residence permit. Short-term work (≤90 days) can be done under an F-visa with a shorter work permit, but this still requires formal approval.</p>
            <p><strong>Q: Can I bring my family?</strong></p>
            <p>A: Yes. Spouses and children may apply for S-visas or dependent residence permits. They are not automatically included in your work permit — separate applications are required.</p>
            <p><strong>Q: Do I need a Chinese bank account to apply?</strong></p>
            <p>A: Not directly, but your employer will need to provide proof of your salary (for the points system) and may need a bank account for 社保 contributions.</p>
            <p><strong>Q: What if I already have a work permit but change jobs?</strong></p>
            <p>A: Your current work permit must be cancelled, and you (or your new employer) must reapply from scratch — even if you are staying in the same field.</p>

            <div class="ar-source">Sources: <a href="https://fuwu.most.gov.cn/" target="_blank">Ministry of Science and Technology Service Portal</a> · <a href="http://www.cs.mfa.gov.cn" target="_blank">China Consular Service</a> · <a href="http://www.mohrss.gov.cn" target="_blank">Ministry of Human Resources</a> · Exit and Entry Administration Law of the PRC, Article 41</div>`
        }
    ],
    travel: [
        {
            title: '10 Must-Visit UNESCO World Heritage Sites in China',
            content: `<p>China has 57 UNESCO World Heritage Sites — the most in the world alongside Italy. Here are the top 10 that every traveler should experience.</p>
            <p><strong>1. The Great Wall (长城)</strong> — Beijing area</p>
            <p>Over 21,000 km of ancient fortifications. Best sections: Mutianyu (restored, less crowded), Jinshanling (photography), Badaling (most accessible). Entry: ¥40-65. Open 7:30 AM - 5:30 PM.</p>
            <p><strong>2. Terracotta Army (兵马俑)</strong> — Xi'an</p>
            <p>Over 8,000 life-size warrior sculptures from 210 BC, guarding Emperor Qin Shi Huang's mausoleum. Three excavation pits open to visitors. Entry: ¥120. Allow 3-4 hours.</p>
            <p><strong>3. Forbidden City (故宫)</strong> — Beijing</p>
            <p>600-year-old imperial palace with 9,999 rooms across 72 hectares. The world's largest palace complex. Entry: ¥60 (Apr-Oct), ¥40 (Nov-Mar). Book tickets online in advance.</p>
            <p><strong>4. West Lake (西湖)</strong> — Hangzhou</p>
            <p>Inspired countless poems and paintings. Cycle around the lake, visit Leifeng Pagoda, take a boat to Three Pools Mirroring the Moon. Free entry to the lake area.</p>
            <p><strong>5. Zhangjiajie National Forest Park</strong> — Hunan</p>
            <p>The inspiration for Avatar's floating mountains. Glass bridge, cable cars, and stunning sandstone pillars. Entry: ¥225 (4-day pass).</p>
            <p><strong>6. Jiuzhaigou Valley</strong> — Sichuan</p>
            <p>Crystal-clear turquoise lakes, multi-tiered waterfalls, and snow-capped peaks. Best in autumn (Oct-Nov) for spectacular foliage. Entry: ¥169-250.</p>
            <p><strong>7. Mount Huangshan (黄山)</strong> — Anhui</p>
            <p>Famous for granite peaks, hot springs, and sea-of-clouds formations. Sunrise at Bright Summit Peak is legendary. Cable car: ¥80-90. Entry: ¥190.</p>
            <p><strong>8. Potala Palace</strong> — Lhasa, Tibet</p>
            <p>Iconic 7th-century palace at 3,700m altitude. Former residence of the Dalai Lama. Entry: ¥200 (May-Oct), ¥100 (Nov-Apr). Requires Tibet Travel Permit.</p>
            <p><strong>9. Lijiang Old Town</strong> — Yunnan</p>
            <p>800-year-old town of the Naxi minority with cobblestone streets, canals, and traditional wooden architecture. Entry: ¥50 (ancient city maintenance fee).</p>
            <p><strong>10. Chengdu Research Base of Giant Panda Breeding</strong> — Sichuan</p>
            <p>See giant pandas and red pandas in a natural habitat setting. Best visited early morning (8-10 AM) when pandas are most active. Entry: ¥55.</p>
            <div class="ar-source">Sources: <a href="http://www.cnta.gov.cn" target="_blank">China National Tourism Administration</a> · <a href="https://whc.unesco.org" target="_blank">UNESCO World Heritage Centre</a></div>`
        },
        {
            title: 'China High-Speed Rail Guide: Routes, Tickets, and Tips',
            content: `<p>China's high-speed rail (HSR) network is the world's largest at 45,000+ km. It's the most convenient way to travel between major cities.</p>
            <p><strong>Train Types:</strong></p>
            <ul>
                <li><strong>G-trains</strong> (高铁): Fastest, up to 350 km/h. Beijing-Shanghai in 4.5 hours.</li>
                <li><strong>D-trains</strong> (动车): Up to 250 km/h. More stops, slightly cheaper.</li>
                <li><strong>C-trains</strong> (城际): Intercity services, 200-300 km/h.</li>
            </ul>
            <p><strong>How to Buy Tickets:</strong></p>
            <ul>
                <li><strong>12306 App</strong> (铁路12306): Official app, accepts international credit cards. Book up to 15 days in advance.</li>
                <li><strong>Trip.com</strong>: English-friendly interface, small booking fee.</li>
                <li><strong>Train station counters</strong>: Bring passport. Available at all stations.</li>
            </ul>
            <p><strong>Popular Routes & Prices (Second Class):</strong></p>
            <ul>
                <li>Beijing → Shanghai: ¥553, 4.5 hours</li>
                <li>Shanghai → Hangzhou: ¥73, 1 hour</li>
                <li>Beijing → Xi'an: ¥515, 4.5 hours</li>
                <li>Guangzhou → Shenzhen: ¥75, 30 minutes</li>
                <li>Chengdu → Chongqing: ¥154, 1.5 hours</li>
            </ul>
            <p><strong>Tips for HSR Travel:</strong></p>
            <ul>
                <li>Arrive 30-45 minutes early for security check and ticket verification</li>
                <li>Passport required for ticket purchase AND boarding</li>
                <li>Free luggage: 20kg adult, 10kg child</li>
                <li>Food carts on board, or bring your own (instant noodles are popular!)</li>
                <li>Power outlets available at every seat on G-trains</li>
                <li>Seat classes: Business (商务座), First (一等座), Second (二等座)</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a> · <a href="http://www.cnta.gov.cn" target="_blank">China National Tourism Administration</a></div>`
        },
        {
            title: 'Before You Fly to China: The Ultimate Pre-Trip Checklist',
            content: `<p>I recently asked people what they were most worried about before traveling to China, and the answers were surprisingly consistent. Here are the most common concerns — and practical solutions for each.</p>

            <p><strong>🔥 Top Concerns First-Time Visitors Have:</strong></p>
            <ul>
                <li><strong>Payment:</strong> How to use Alipay / WeChat Pay / international bank cards</li>
                <li><strong>Apps:</strong> Chinese apps work differently than overseas versions</li>
                <li><strong>Language barrier:</strong> What to do when things go wrong</li>
                <li><strong>Booking:</strong> How to book train tickets and attraction tickets</li>
                <li><strong>Preparation:</strong> What to set up before landing</li>
            </ul>

            <p><strong>✈️ Before You Fly — Essential Setup:</strong></p>
            <ul>
                <li>📱 <strong>Set up Alipay and WeChat Pay</strong> — These are absolutely essential. Cash is rarely accepted in most places. Link your international credit card to both apps before you leave home.</li>
                <li>💳 <strong>Add your international credit card</strong> to both Alipay and WeChat Pay if possible. Visa, Mastercard, and JCB are now supported.</li>
                <li>🔤 <strong>Download an offline translation app</strong> — Google Translate doesn't work well in China. Use Apple Translate, Microsoft Translator, or Pleco (best for Chinese).</li>
                <li>🏨 <strong>Save your hotel address in Chinese</strong> — You'll need to show it to taxi drivers. Screenshot the Chinese address from your booking confirmation.</li>
                <li>💰 <strong>Prepare a backup payment method</strong> — Bring some cash (¥500-1000) just in case. ATMs at airports accept international cards.</li>
                <li>📶 <strong>Check if your eSIM/roaming works in China</strong> — Many international SIM cards don't work behind the Great Firewall. Get a China eSIM (Airalo, Holafly) or buy a local SIM at the airport.</li>
                <li>🚫 <strong>Know what doesn't work in China:</strong> Google, WhatsApp, Instagram, Facebook, YouTube, Twitter/X, Gmail — all blocked. Download a VPN before arrival, or use Chinese alternatives (Baidu, WeChat, Douyin).</li>
            </ul>

            <p><strong>🛬 After You Land — First Steps:</strong></p>
            <ul>
                <li>🧪 <strong>Test payments with a small purchase first</strong> — Buy a drink or snack to make sure Alipay/WeChat Pay works before you rely on it.</li>
                <li>🚗 <strong>Set up DiDi (滴滴出行) through Alipay or WeChat</strong> — This is China's Uber. It's integrated into both apps, so no separate download needed.</li>
                <li>🛂 <strong>Always carry your passport</strong> — Required for train travel, hotel check-in, and sometimes SIM card purchase. Keep a photo on your phone as backup.</li>
                <li>🗺️ <strong>Don't rely only on Google Maps</strong> — It's inaccurate in China. Use Amap (高德地图) or Baidu Maps (百度地图) instead. Apple Maps works okay.</li>
                <li>🎫 <strong>Book popular attractions earlier than you think</strong> — The Forbidden City, Terracotta Army, and other top sites often sell out days in advance. Book via the official WeChat mini-program or Trip.com.</li>
                <li>🚄 <strong>Train tickets:</strong> Book via 12306 app or Trip.com. Passport required for purchase AND boarding. Arrive 30-45 min early.</li>
            </ul>

            <p><strong>💡 Pro Tips From Experienced Travelers:</strong></p>
            <ul>
                <li>🔋 Carry a power bank — you'll use your phone for everything (payments, maps, translation)</li>
                <li>🧻 Carry tissues — many public restrooms don't provide toilet paper</li>
                <li>🗣️ Learn basic phrases: 你好 (nǐ hǎo = hello), 谢谢 (xièxie = thank you), 多少钱 (duōshao qián = how much), 厕所在哪里 (cèsuǒ zài nǎlǐ = where's the bathroom)</li>
                <li>💧 Tap water is NOT drinkable — buy bottled water or boil it</li>
                <li>🕐 China uses one time zone (UTC+8) for the entire country — this means sunrise in western China can be as late as 10 AM</li>
                <li>🔌 Bring a universal adapter — China uses Type A, C, and I outlets</li>
            </ul>

            <p>China is one of the safest and most convenient countries to travel in — once you have the right apps set up. The learning curve is steep for the first 24 hours, but after that, everything becomes incredibly smooth.</p>
            <div class="ar-source">Sources: Community experiences · <a href="https://www.chinahighlights.com" target="_blank">China Highlights</a> · <a href="https://www.trip.com" target="_blank">Trip.com</a></div>`
        },
        {
            title: '3 Days in Beijing: The Perfect Couple\'s Itinerary',
            content: `<p>Beijing is one of the most romantic and exciting cities in China for couples. From ancient palaces to hidden hutong bars, this 3-day itinerary covers the best of Beijing — with real addresses, metro stops, and prices.</p>

            <p><strong>📅 Day 1: Imperial Beijing — History & Romance</strong></p>

            <p><strong>🌅 8:30 AM — Forbidden City (故宫)</strong></p>
            <p>Arrive right at opening to beat the crowds. Enter through the south gate (Meridian Gate 午门), walk through the golden halls, and exit through the north gate (Gate of Divine Prowess 神武门). Don't miss the Imperial Garden (御花园) at the back — ancient cypresses and rockeries make it the most romantic corner.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区景山前街4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=故宫博物院" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站A口</span></div></div>
            <p>🕐 8:30–17:00 (Apr-Oct) / 8:30–16:30 (Nov-Mar) | 💰 ¥60 (Apr-Oct) / ¥40 (Nov-Mar) | ⚠️ Must book online 7 days ahead via WeChat mini-program "故宫博物院"</p>

            <p><strong>🏔️ 11:00 AM — Jingshan Park (景山公园)</strong></p>
            <p>Walk out the north gate of the Forbidden City and cross the street. Climb the hill (10 minutes) for the best panoramic view of the entire palace complex. The top pavilion is THE photo spot — the golden roofs stretching out below you is unforgettable.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区景山西街44号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=景山公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">中国美术馆站</span></div></div>
            <p>🕐 6:30–21:00 | 💰 ¥2</p>

            <p><strong>🍜 12:30 PM — Lunch at Guijie Ghost Street (簋街)</strong></p>
            <p>Take a DiDi 10 minutes east. Guijie is Beijing's most famous food street — 1km of restaurants lit up with red lanterns. The signature dish is spicy crayfish (麻辣小龙虾) — messy, fun, and perfect for couples to share. Recommended: Hu Da (胡大饭馆), the most famous crayfish spot on the street.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东直门内大街（簋街全线）/ 胡大饭馆：东直门内大街233号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=胡大饭馆 簋街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">北新桥站/东直门站</span></div></div>
            <p>🕐 11:00–次日6:00（簋街很多店24小时营业）| 💰 ¥100-150/两人</p>

            <p><strong>🛍️ 2:30 PM — Nanluoguxiang (南锣鼓巷)</strong></p>
            <p>A 800-year-old hutong alley turned into Beijing's most charming pedestrian street. Browse quirky shops, grab bubble tea, and explore the side hutongs — Yuer Hutong (雨儿胡同) and Mao'er Hutong (帽儿胡同) are quieter and more authentic. Try the famous 文宇奶店 (Wenyu Dairy) for traditional Beijing yogurt.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区南锣鼓巷</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=南锣鼓巷" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">南锣鼓巷站</span></div></div>
            <p>🕐 全天开放，店铺约10:00-22:00 | 💰 免费入场</p>

            <p><strong>🌙 5:30 PM — Houhai Lake (后海) Sunset & Evening</strong></p>
            <p>Walk west from Nanluoguxiang (15 minutes) to Houhai Lake. Rent a paddle boat (脚踏船) and watch the sunset over the lake — the willow trees, traditional houses, and golden light make it incredibly romantic. After returning the boat, stroll along the bar street (后海酒吧街). Recommended: 望海楼 (Wanghai Lou) for a quiet lakeside drink, or 烤肉季 (Rouji) for famous Beijing lamb BBQ since 1848.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区后海（什刹海西侧）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=后海" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">什刹海站</span></div></div>
            <p>🕐 全天开放 | 🚣 脚踏船 ¥60-80/小时 | 🍺 酒吧 18:00-次日2:00</p>

            <p><strong>📅 Day 2: Great Wall & Date Night</strong></p>

            <p><strong>🧱 8:00 AM — Mutianyu Great Wall (慕田峪长城)</strong></p>
            <p>The most couple-friendly section of the Great Wall. Less crowded than Badaling, beautifully restored, and has a fun toboggan slide down. Take the cable car up to Tower 14, walk east to Tower 20 (best views, fewer people), then walk back and take the toboggan slide down from Tower 6. Allow 3-4 hours total.</p>
            <p>🚗 <strong>Getting there:</strong> Book a private car via DiDi (¥200-300 round trip, 1.5 hours) or take bus 916 Express from Dongzhimen Bus Station (东直门公交站) to Huairou, then transfer to bus H23 (total ¥15, 2 hours).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 怀柔区渤海镇慕田峪村</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=慕田峪长城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 7:30–18:00 (Apr-Oct) / 8:00–17:00 (Nov-Mar) | 💰 ¥40 entry + ¥120 往返缆车 / ¥100 滑道下山</p>

            <p><strong>🍽️ 6:30 PM — Date Night Dinner</strong></p>
            <p>Back in the city, dress up for a special dinner. Choose one:</p>
            <ul>
                <li>🏯 <strong>Dali Courtyard (大理院子)</strong> — Hidden in a hutong near Nanluoguxiang. Yunnan cuisine in a candlelit courtyard with fairy lights. The grilled fish and wild mushroom hotpot are incredible. Intimate, romantic, and very "Beijing." Reserve 2 days ahead.</li>
            </ul>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区南锣鼓巷小经厂胡同67号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=大理院子 南锣鼓巷" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">南锣鼓巷站</span></div></div>
            <p>🕐 11:30–14:00, 17:30–22:00 | 💰 ¥150-200/两人 | 📞 建议提前2天预约</p>
            <ul>
                <li>🍷 <strong>Capital M</strong> — Fine dining at Qianmen with direct Tiananmen views through floor-to-ceiling windows. Western cuisine, excellent wine list. Perfect for anniversaries or proposals.</li>
            </ul>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区前门大街2号3层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Capital M 前门" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 11:30–14:30, 18:00–22:30 | 💰 ¥400-600/两人 | 📞 建议提前预约</p>

            <p><strong>🍸 9:30 PM — Cocktails at Migas (米家思)</strong></p>
            <p>End the night at Beijing's best rooftop bar. On the 6th floor of Nali Patio in Sanlitun, Migas has an open-air terrace with views over the neon-lit Taikoo Li complex. The sangria and gin cocktails are excellent. On weekends, there's a DJ after 10 PM.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区三里屯路81号那里花园6层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=米家思 三里屯那里花园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">团结湖站</span></div></div>
            <p>🕐 18:00–次日2:00 | 💰 ¥70-100/人/杯</p>

            <p><strong>📅 Day 3: Culture, Food & Hidden Gems</strong></p>

            <p><strong>🏛️ 8:00 AM — Temple of Heaven (天坛)</strong></p>
            <p>More beautiful and less crowded than the Forbidden City. The Circular Mound Altar (圜丘坛) is designed so sound echoes perfectly — stand in the center and whisper to each other, the acoustics are magical. Watch locals doing tai chi, dancing, and playing cards in the long corridors.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区天坛东里甲1号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天坛公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">天坛东门站</span></div></div>
            <p>🕐 6:00–21:00 | 💰 ¥15 (联票¥34含祈年殿/回音壁/圜丘)</p>

            <p><strong>🥟 11:30 AM — Xiaolongbao at Din Tai Fung (鼎泰丰)</strong></p>
            <p>World-famous Taiwanese soup dumplings. Order the pork xiaolongbao (鲜肉小笼) and watch the chefs fold each one with 18 folds through the glass kitchen. The trick: bite a small hole, sip the soup, then dip in vinegar-ginger sauce. It's a fun shared experience.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区建国路87号北京SKP购物中心B1层（多家分店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=鼎泰丰 SKP" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="metro-badge metro-bj-line14">🚇 14号线</span><span class="station-name">大望路站</span></div></div>
            <p>🕐 11:00–21:30 | 💰 ¥100-150/两人</p>

            <p><strong>🎨 2:00 PM — 798 Art District (798艺术区)</strong></p>
            <p>A massive former electronics factory complex turned into Beijing's coolest art zone. Wander through contemporary galleries, street art installations, and hipster cafes. Best spots for couples: UCCA Center for Contemporary Art (尤伦斯当代艺术中心), the graffiti walls, and the rooftop cafe at At Cafe. Great for Instagram photos.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区酒仙桥路4号798艺术区</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=798艺术区" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line14">🚇 14号线</span><span class="station-name">望京南站 + 步行15分钟</span></div></div>
            <p>🕐 10:00–17:00（各画廊时间不同）| 💰 免费入场，个别展馆 ¥10-30</p>

            <p><strong>🍵 4:30 PM — Traditional Tea at Wufu Tea House (五福茶艺馆)</strong></p>
            <p>After walking around 798, sit down for a proper Chinese tea ceremony. The staff will guide you through brewing oolong or pu'er tea in a gaiwan (盖碗). It's a calm, intimate experience — perfect for slowing down together. Learn the "Gongfu" brewing method and taste 3-4 different teas.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区马连道路11号（马连道茶城附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=五福茶艺馆 马连道" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line7">🚇 7号线</span><span class="station-name">湾子站</span></div></div>
            <p>🕐 9:30–21:00 | 💰 ¥80-150/两人（含茶位费和茶点）</p>

            <p><strong>🌆 7:00 PM — Sunset Cocktails at China World Summit Wing (国贸大酒店80层)</strong></p>
            <p>End the trip on the 80th floor of Beijing's tallest building. The Atmosphere Bar has floor-to-ceiling windows with a 360° view of the entire city — the CBD skyline, the mountains in the west, and on clear days, the Great Wall in the distance. Arrive before sunset (around 6:30 PM in summer) to watch the city light up.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区建国门外大街1号国贸三期80层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=国贸大酒店 Atmosphere Bar" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">国贸站</span></div></div>
            <p>🕐 17:00–次日1:00 | 💰 ¥100-150/杯 | 👔 建议穿Smart Casual</p>

            <p><strong>💑 Couple's Tips:</strong></p>
            <ul>
                <li>📸 Best photo spots: Jingshan Park (Forbidden City view), Temple of Heaven echo wall, Great Wall Tower 20, Houhai Lake sunset, 798 graffiti walls, 80th floor skyline</li>
                <li>🌹 Most romantic moments: Paddle boat on Houhai at sunset, whispering at the Temple of Heaven echo wall, rooftop cocktails at Migas</li>
                <li>💰 Budget: ¥600-800/天/两人 (经济) | ¥1500+/天/两人 (享受)</li>
                <li>🚇 交通: 地铁 + 滴滴出行 | 办一张一卡通交通卡（地铁站可买）</li>
                <li>📱 必备App: 大众点评（找餐厅）、小红书（找小众景点）、高德地图（导航）</li>
                <li>🌸 最佳季节: 春天4-5月 / 秋天9-10月 | 避开暑假（7-8月太热）和冬天（12-2月太冷）</li>
            </ul>

            <div class="ar-source">Sources: Community experiences · <a href="https://www.thebeijinger.com" target="_blank">The Beijinger</a> · <a href="https://www.trip.com" target="_blank">Trip.com</a> · <a href="https://www.amap.com" target="_blank">高德地图</a></div>`
        }
    ],
    food: [
        {
            title: 'The 8 Great Cuisines of China: A Complete Guide',
            content: `<p>Chinese cuisine is not monolithic — it encompasses 8 major regional traditions, each with distinct flavors, techniques, and ingredients.</p>
            <p><strong>1. Cantonese (粤菜) — Guangdong</strong></p>
            <p>Known for: Fresh ingredients, dim sum, subtle flavors. Signature dishes: Char siu (BBQ pork), har gow (shrimp dumplings), siu mai, roast goose. Best in: Guangzhou, Hong Kong.</p>
            <p><strong>2. Sichuan (川菜) — Sichuan</strong></p>
            <p>Known for: Mala (numbing-spicy) flavor from Sichuan peppercorns. Signature dishes: Mapo tofu, kung pao chicken, hot pot, dan dan noodles. Best in: Chengdu.</p>
            <p><strong>3. Shandong (鲁菜) — Shandong</strong></p>
            <p>Known for: Seafood, braised dishes, clear broths. Signature dishes: Sweet and sour carp, braised sea cucumber, dezhou braised chicken. Best in: Jinan, Qingdao.</p>
            <p><strong>4. Jiangsu (苏菜) — Jiangsu</strong></p>
            <p>Known for: Delicate presentation, slightly sweet flavors. Signature dishes: Squirrel-shaped mandarin fish, lion's head meatballs, Nanjing salted duck. Best in: Nanjing, Suzhou.</p>
            <p><strong>5. Zhejiang (浙菜) — Zhejiang</strong></p>
            <p>Known for: Fresh, mellow flavors, seafood. Signature dishes: Dongpo pork, West Lake vinegar fish, Longjing shrimp. Best in: Hangzhou.</p>
            <p><strong>6. Fujian (闽菜) — Fujian</strong></p>
            <p>Known for: Umami-rich broths, seafood soups. Signature dishes: Buddha jumps over the wall, oyster omelette, lychee pork. Best in: Fuzhou, Xiamen.</p>
            <p><strong>7. Hunan (湘菜) — Hunan</strong></p>
            <p>Known for: Pure hot spiciness (without numbing), smoked meats. Signature dishes: Chairman Mao's red-braised pork, steamed fish head with chili, stir-fried smoked pork. Best in: Changsha.</p>
            <p><strong>8. Anhui (徽菜) — Anhui</strong></p>
            <p>Known for: Wild herbs, braised dishes, mountain ingredients. Signature dishes: Li Hongzhang hodgepodge, hairy tofu, bamboo shoots with cured meat. Best in: Huangshan.</p>
            <div class="ar-source">Sources: <a href="http://www.mofcom.gov.cn" target="_blank">Ministry of Commerce</a> · <a href="http://www.chinadaily.com.cn" target="_blank">China Daily Food & Culture</a></div>`
        },
        {
            title: 'Beijing Traditional Breakfast: 10 Must-Visit Spots Near the Forbidden City & Wangfujing',
            content: `<p>Beijing's traditional breakfast culture (老北京早点 lǎo Běijīng zǎodiǎn) is one of the city's most authentic culinary experiences. While tourists flock to the Forbidden City and Wangfujing, the real magic happens at dawn in the surrounding hutongs, where locals queue up for steaming bowls of douzhī, crispy jiaoquan, and golden youbings. Here are 10 legendary breakfast spots within walking distance of Beijing's top tourist landmarks.</p>

            <p><strong>🥢 What to Expect: A Beijing Breakfast Primer</strong></p>
            <p>A traditional Beijing breakfast is hearty, savory, and unlike anything you'll find in southern China. The "holy trinity" of Beijing breakfast is:</p>
            <ul>
                <li>🥣 <strong>Douzhī (豆汁)</strong> — Fermented mung bean drink. Sour, slightly funky, and absolutely polarizing. Locals love it; most foreigners need 2-3 tries. It's Beijing's ultimate litmus test.</li>
                <li>🫓 <strong>Jiaoquan (焦圈)</strong> — Deep-fried dough rings, crispy like a savory donut. Always paired with douzhī.</li>
                <li>🥞 <strong>Yóutiáo (油条)</strong> — Fried dough sticks. Dip in soy milk or wrap in a jianbing (煎饼). Universal crowd-pleaser.</li>
            </ul>
            <p>Other essentials: miàn chá (面茶, millet paste with sesame), zhū gāo (猪糕, steamed pork cake), luóbo sī bǐng (萝卜丝饼, radish cake), and mén dīng ròu bǐng (门钉肉饼, door-knocker meat pies).</p>

            <p><strong>1. Húguósi Xiǎochī (护国寺小吃) — Huguo Temple Snacks</strong></p>
            <p>The undisputed king of Beijing traditional snacks. Founded in 1956, this state-owned chain preserves recipes that date back centuries. The Huguo Si main branch is the most atmospheric, but the Dianmen branch near the Drum Tower is more convenient for tourists. Order the dòuzhī + jiāoquān combo, àndào cháng (鞍道肠, donkey intestine sausage — better than it sounds), and the táng huǒshāo (糖火烧, sweet sesame flatbread).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区护国寺街68号（护国寺总店）/ 西城区地安门外大街180号（地安门店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=护国寺小吃 护国寺街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=护国寺小吃" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">平安里站</span></div></div>
            <p>🕐 06:00–21:00 | 💰 ¥15–30/person | ⭐ Must-try: 豆汁+焦圈, 糖火烧, 驴打滚</p>

            <p><strong>2. Zēng Shèng Kuí (增盛魁)</strong></p>
            <p>A tiny, no-frills family-run stall near the Drum Tower that's been serving the same menu for 40+ years. No sign, no menu board — just regulars who know exactly what to order. The mén dīng ròu bǐng (门钉肉饼) here are the best in Beijing: thin, crispy shell bursting with juicy beef and scallion. The táng huǒshāo (糖火烧) is also exceptional. Cash only, no seats — you eat standing on the sidewalk like a true Beijinger.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区鼓楼西大街（鼓楼西侧路北）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=增盛魁 鼓楼" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=增盛魁" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">鼓楼大街站</span></div></div>
            <p>🕐 06:00–10:00 (早餐时段) | 💰 ¥10–20/person | ⭐ Must-try: 门钉肉饼, 糖火烧</p>

            <p><strong>3. Bái Kuí Lǎo Hào (白魁老号饭庄)</strong></p>
            <p>Established in 1780 during the Qing Dynasty, Bai Kui is one of Beijing's oldest restaurants. Famous for its shāo yángròu (烧羊肉, roasted lamb) and miàn chá (面茶, millet paste topped with sesame sauce). The Jiaodaokou branch is the most convenient for tourists. The lamb here is slow-roasted for hours until the exterior is caramelized and the interior melts. Their miàn chá is the gold standard — creamy, fragrant, with perfect sesame-to-millet ratio.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区交道口南大街15号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=白魁老号饭庄 交道口" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=白魁老号" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div>
            <p>🕐 06:00–21:00 | 💰 ¥25–50/person | ⭐ Must-try: 烧羊肉, 面茶, 羊杂汤</p>

            <p><strong>4. Nán Lái Shùn (南来顺)</strong></p>
            <p>Nan Laishun is Beijing's Hui Muslim breakfast institution. Located near Niujie (Ox Street) Mosque, it specializes in halal Beijing snacks. The zhà sāng dài (炸桑袋) and dòu miàn huáng (豆面黄) are unique to this shop. Their yáng zá tāng (羊杂汤, lamb offal soup) is the best hangover cure in Beijing — rich, peppery, loaded with tender lamb bits. The atmosphere is authentically old Beijing: communal tables, loud conversations, and zero English.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区南菜园街12号（大观园附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=南来顺饭庄" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=南来顺" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="station-name">陶然亭站</span></div></div>
            <p>🕐 06:00–14:00 | 💰 ¥20–40/person | ⭐ Must-try: 羊杂汤, 豆面黄, 炸桑袋</p>

            <p><strong>5. Dōnghuāmén Yè Shì (东华门美食坊) — Donghuamen Breakfast Street</strong></p>
            <p>Right outside the Forbidden City's east gate (Donghuamen), this cluster of food stalls is the most tourist-friendly traditional breakfast spot. While it's more commercialized than hutong shops, the convenience is unbeatable — grab breakfast before entering the Palace Museum at 8:30 AM. Look for the jiānbing guǒzi (煎饼果子) stalls, shuǐjiǎo (水饺) vendors, and fresh dòujiāng (豆浆, soy milk) stands. Prices are slightly higher (¥15–25/person) but the location is prime.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东华门大街（故宫东门/东华门外）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=东华门美食" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=东华门美食坊" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站</span></div></div>
            <p>🕐 06:00–10:00 (早餐) | 💰 ¥15–25/person | ⭐ Must-try: 煎饼果子, 豆浆, 水饺</p>

            <p><strong>6. Tiānxīngjū (天兴居) — Tianxing Ju</strong></p>
            <p>Tianxing Ju is famous for one thing: chǎo gān (炒肝, stir-fried liver) — a thick, garlicky stew of pork liver and intestines in starch-thickened broth. It's the most iconic Beijing breakfast dish that tourists rarely try. Founded in 1862, this Qianmen institution serves chǎo gān the traditional way: in a small bowl, eaten by "drinking" it from the edge (never with a spoon — that's the rule). Pair it with bāo zi (包子, steamed buns) for the full experience.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区鲜鱼口街95号（前门大街附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天兴居 鲜鱼口" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=天兴居" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 06:30–14:00 | 💰 ¥15–25/person | ⭐ Must-try: 炒肝, 包子, 卤煮火烧</p>

            <p><strong>7. Lóngfǔ Sì Xiǎochī (隆福寺小吃店)</strong></p>
            <p>Once the heart of old Beijing's snack culture, Longfu Si was devastated by fire in 1993 and never fully recovered its former glory. But the surviving breakfast stalls still serve excellent traditional fare. The dòuzhī (豆汁) here is particularly well-fermented, and the jiāo quān (焦圈) are always fresh. The area around Longfu Si is being redeveloped, so go soon — this piece of old Beijing may not last forever.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区隆福寺街（东四附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=隆福寺小吃" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=隆福寺小吃" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div>
            <p>🕐 06:00–10:00 | 💰 ¥10–20/person | ⭐ Must-try: 豆汁, 焦圈, 艾窝窝</p>

            <p><strong>8. Dūyī Chù (都一处) — Du Yi Chu</strong></p>
            <p>Du Yi Chu holds a special place in Beijing history: Emperor Qianlong reportedly visited in 1752 and bestowed the restaurant's name, meaning "The Only One." Famous for its shāomài (烧麦, open-top dumplings), the Qianmen flagship is a must-visit. While known for dinner, their breakfast service offers excellent jiaozi (饺子) and porridge. The building itself is a beautifully restored Qing Dynasty structure — eating here feels like stepping into a period drama.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区前门大街38号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=都一处 前门大街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=都一处" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 06:30–21:00 | 💰 ¥30–60/person | ⭐ Must-try: 烧麦, 饺子, 小米粥</p>

            <p><strong>9. Jǐnfāng Yuánxiāo (锦芳元宵) — Jinfang Tangyuan</strong></p>
            <p>Jinfang is the undisputed champion of yuánxiāo (元宵, sweet glutinous rice balls) — especially during Lantern Festival when the queue stretches for blocks. But their year-round breakfast menu is equally impressive. The lǘ dǎ gǔn (驴打滚, donkey rolling in the mud — actually a sweet bean-powder-coated rice cake) and ài wō wō (艾窝窝, steamed rice balls with sweet filling) are handmade daily. Their jiāngmí pái (江米排, sticky rice strips) are addictive.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区磁器口大都市街南1楼（磁器口地铁站附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=锦芳元宵 磁器口" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=锦芳元宵" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line7">🚇 7号线</span><span class="station-name">磁器口站</span></div></div>
            <p>🕐 06:00–20:00 | 💰 ¥15–30/person | ⭐ Must-try: 驴打滚, 艾窝窝, 元宵(季节性)</p>

            <p><strong>10. Xīsì Bāozi Pù (西四包子铺)</strong></p>
            <p>Don't let the humble name fool you — Xisi Baozi Pu is a Beijing institution. Their zhūròu dà cōng bāozi (猪肉大葱包子, pork and scallion buns) are legendary: fluffy, juicy, and perfectly seasoned. A plate of 10 buns + a bowl of zhōu (粥, congee) is the quintessential Beijing working-class breakfast, and it'll cost you under ¥15. The Xisi location is a short walk from the Forbidden City's northwest corner. Go before 8 AM or face a 30-minute queue.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区西四南大街18号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=西四包子铺" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=西四包子铺" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="station-name">西四站</span></div></div>
            <p>🕐 06:00–13:00 | 💰 ¥10–18/person | ⭐ Must-try: 猪肉大葱包子, 小米粥, 炒肝</p>

            <p><strong>🗺️ Pro Tips for Breakfast Explorers</strong></p>
            <ul>
                <li>⏰ <strong>Go early:</strong> Most traditional spots are best before 8:30 AM. Many items sell out by 9 AM. The real regulars eat at 6:30.</li>
                <li>💵 <strong>Cash helps:</strong> While most places accept WeChat Pay and Alipay, some older stalls (like Zeng Shengkui) are cash-only. Bring small bills.</li>
                <li>🗣️ <strong>Point and smile:</strong> English menus are rare outside Donghuamen. Learn these phrases: "这个" (zhège — "this one"), "多少钱" (duōshǎo qián — "how much"), "好吃" (hǎo chī — "delicious").</li>
                <li>🚫 <strong>Skip the Starbucks:</strong> Seriously. You're in Beijing. Drink dòujiāng (豆浆, soy milk) or miàn chá (面茶) like the locals.</li>
                <li>📱 <strong>Use Dianping:</strong> Download 大众点评 (Dianping) — it's China's Yelp. Search "早点" (zǎodiǎn) or "早餐" (zǎocān) near your hotel for hidden gems.</li>
            </ul>

            <p><strong>🧭 Walking Routes from Tourist Landmarks</strong></p>
            <ul>
                <li>🏯 <strong>From the Forbidden City (故宫):</strong> Exit via Donghuamen → walk to Donghuamen breakfast stalls (5 min) or continue to Longfu Si (15 min walk east).</li>
                <li>🛍️ <strong>From Wangfujing (王府井):</strong> Walk north to Jiaodaokou for Bai Kui (20 min) or take Line 5 one stop to Dongsi for Longfu Si.</li>
                <li>⛩️ <strong>From Qianmen (前门):</strong> Walk into Xianyukou hutong for Tianxing Ju (5 min) or stay on Qianmen Dajie for Du Yi Chu (3 min).</li>
                <li>🥁 <strong>From the Drum Tower (鼓楼):</strong> Walk west for Zeng Shengkui (3 min) or south for Huguo Si Dianmen branch (10 min).</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.dianping.com" target="_blank">大众点评 Dianping</a> · <a href="https://www.thebeijinger.com" target="_blank">The Beijinger</a> · <a href="https://www.timeoutbeijing.com" target="_blank">Time Out Beijing</a> · <a href="https://www.mafengwo.cn" target="_blank">马蜂窝 Mafengwo</a></div>`
        }
    ],
    life: [
        {
            title: 'Essential Apps Every Foreigner Needs in China (2026)',
            content: `<p>Living in China requires specific apps that most foreigners aren't familiar with. Here's your essential app guide.</p>
            <p><strong>Communication & Social:</strong></p>
            <ul>
                <li><strong>WeChat (微信)</strong> — The #1 essential app. Messaging, payments, mini-programs, social media, government services. 1.3 billion users. Set up immediately upon arrival.</li>
                <li><strong>Weibo (微博)</strong> — China's Twitter. Follow news, celebrities, trending topics.</li>
            </ul>
            <p><strong>Payments:</strong></p>
            <ul>
                <li><strong>Alipay (支付宝)</strong> — Second major payment platform. Also used for utility bills, insurance, investments.</li>
                <li>Note: International credit cards can now be linked to WeChat Pay and Alipay for tourists.</li>
            </ul>
            <p><strong>Transportation:</strong></p>
            <ul>
                <li><strong>Didi (滴滴)</strong> — China's Uber. Ride-hailing, taxi, and carpooling.</li>
                <li><strong>Amap/Gaode (高德地图)</strong> — Best navigation app in China (Google Maps doesn't work well).</li>
                <li><strong>12306</strong> — Official train ticket booking app.</li>
                <li><strong>Trip.com (携程)</strong> — Hotels, flights, trains, attractions. English support.</li>
            </ul>
            <p><strong>Food & Delivery:</strong></p>
            <ul>
                <li><strong>Meituan (美团)</strong> — Food delivery, hotel booking, movie tickets, local services.</li>
                <li><strong>Ele.me (饿了么)</strong> — Food delivery competitor. Often has different restaurant options.</li>
                <li><strong>Dianping (大众点评)</strong> — Restaurant reviews and ratings (like Yelp).</li>
            </ul>
            <p><strong>Shopping:</strong></p>
            <ul>
                <li><strong>Taobao (淘宝)</strong> — China's Amazon. Everything imaginable, often at very low prices.</li>
                <li><strong>JD.com (京东)</strong> — Quality-focused e-commerce with fast delivery.</li>
                <li><strong>Pinduoduo (拼多多)</strong> — Group-buying deals, very affordable.</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.gov.cn" target="_blank">Government Services Portal</a> · <a href="http://www.nhc.gov.cn" target="_blank">National Health Commission</a></div>`
        },
        {
            title: 'Opening a Bank Card in China: Complete Guide (2026)',
            content: `<p>A Chinese bank card is essential for daily life in China. Without one, you cannot fully use WeChat Pay or Alipay, receive salary payments, or pay rent. Here is everything you need to know about opening a bank account as a foreigner.</p>
            <p><strong>Why You Need a Chinese Bank Card:</strong></p>
            <ul>
                <li>Link to <strong>WeChat Pay (微信支付)</strong> and <strong>Alipay (支付宝)</strong> for seamless mobile payments</li>
                <li>Receive salary payments from your employer</li>
                <li>Pay rent, utilities, and online shopping</li>
                <li>Transfer money domestically within China</li>
            </ul>
            <h3>For Students (学生)</h3>
            <p><strong>Required Documents:</strong></p>
            <ul>
                <li><strong>Passport</strong> — with valid student visa (X1/X2)</li>
                <li><strong>Student ID (学生证)</strong> or Enrollment Certificate (在读证明) from your university</li>
                <li><strong>Temporary Residence Registration (临时住宿登记表)</strong> — obtained from the local police station within 24 hours of arrival</li>
                <li><strong>Admission Letter (录取通知书)</strong> — required by some banks for new students</li>
            </ul>
            <p><strong>Recommended Banks for Students:</strong></p>
            <ul>
                <li><strong>Bank of China (中国银行)</strong> — Best for international transfers, widely used by international students</li>
                <li><strong>ICBC (工商银行)</strong> — Largest ATM network in China, convenient for withdrawals anywhere</li>
                <li><strong>China Construction Bank (建设银行)</strong> — Good campus branch coverage at major universities</li>
            </ul>
            <p><strong>Process:</strong></p>
            <ul>
                <li>Go to a bank branch near your campus — look for the foreigner service counter (外币业务窗口)</li>
                <li>Fill out the account application form (开户申请表) — staff can assist in English at major branches</li>
                <li>Get a queue number (排队号码) and wait for your turn</li>
                <li>Open a basic savings account (储蓄卡/借记卡) with an initial deposit — usually ¥10–50</li>
                <li>Set up online banking (网上银行) and mobile banking (手机银行) during the same visit</li>
                <li>Receive your UnionPay (银联) debit card on the spot in most cases</li>
            </ul>
            <p><strong>💡 Tips for Students:</strong></p>
            <ul>
                <li>Bring a Chinese friend or classmate for translation — not all branches have English-speaking staff</li>
                <li>Many universities organize <strong>group bank card opening sessions</strong> during orientation week — take advantage of this</li>
                <li>Your card can be linked to WeChat Pay and Alipay immediately after activation</li>
                <li>Keep your bank card number (卡号) and online banking credentials in a safe place</li>
            </ul>
            <h3>For Working Professionals (工作人士)</h3>
            <p><strong>Required Documents:</strong></p>
            <ul>
                <li><strong>Passport</strong> — with valid work visa (Z visa)</li>
                <li><strong>Work Permit (工作许可证)</strong> or Employment Contract (劳动合同)</li>
                <li><strong>Residence Permit (居留许可)</strong> — issued by the local Public Security Bureau</li>
                <li><strong>Company Introduction Letter (单位证明)</strong> — a letter from your employer confirming your employment, stamped with the company seal (公章)</li>
                <li><strong>Temporary Residence Registration (临时住宿登记表)</strong></li>
            </ul>
            <p><strong>Additional Requirements:</strong></p>
            <ul>
                <li>Some banks require a <strong>Chinese phone number registered to your passport</strong> — make sure your SIM card is under your own name</li>
                <li>You may need to provide a <strong>Tax ID (纳税人识别号)</strong> — ask your HR department for this</li>
            </ul>
            <p><strong>Recommended Banks for Professionals:</strong></p>
            <ul>
                <li><strong>Bank of China (中国银行)</strong> — Best for international transfers and receiving money from abroad</li>
                <li><strong>ICBC (工商银行)</strong> — Widest ATM network across China, good for frequent travelers within the country</li>
                <li><strong>China Merchants Bank (招商银行)</strong> — Best mobile banking app experience, excellent customer service</li>
            </ul>
            <p><strong>Process:</strong></p>
            <ul>
                <li>Your employer may help arrange the bank account opening — check with HR first</li>
                <li>Alternatively, go to a bank branch yourself with all required documents</li>
                <li>Fill out the account application and KYC (Know Your Customer) forms</li>
                <li>Open a <strong>salary account (工资账户)</strong> if your employer requires a specific bank for payroll</li>
                <li>Set up automatic salary deposit (代发工资) through your employer's payroll system</li>
                <li>You may qualify for a <strong>credit card (信用卡)</strong> after 6+ months of account history</li>
            </ul>
            <p><strong>International Transfers:</strong></p>
            <ul>
                <li>Use your bank's <strong>SWIFT code</strong> to receive money from abroad — Bank of China: BKCHCNBJ, ICBC: ICBKCNBJ, CMB: CMBCCNBS</li>
                <li>The annual foreign exchange limit is <mark>$50,000 USD equivalent per person</mark></li>
                <li>Receiving money from abroad typically takes 1–3 business days</li>
                <li>You will need to visit the bank counter to convert foreign currency to RMB in some cases</li>
            </ul>
            <h3>Common Tips for Everyone</h3>
            <ul>
                <li><mark>Always bring your passport — you cannot open a bank account without it</mark></li>
                <li>Bank hours: <strong>Monday–Friday 9:00–17:00</strong>, some branches open Saturday morning (9:00–12:00)</li>
                <li>Download your bank's <strong>mobile banking app (手机银行)</strong> for convenient transfers and balance checks</li>
                <li>A <strong>UnionPay (银联)</strong> card works at most ATMs and POS terminals across China</li>
                <li>Keep your bank card and password safe — <mark>never share your OTP (one-time password) with anyone</mark></li>
                <li>If your card is lost or stolen, call your bank's customer service hotline immediately to freeze the account</li>
            </ul>
            <ul>
                <li><strong>Bank of China (中国银行)</strong> — SWIFT: BKCHCNBJ — Best for: International transfers</li>
                <li><strong>ICBC (工商银行)</strong> — SWIFT: ICBKCNBJ — Best for: Widest ATM network</li>
                <li><strong>China Construction Bank (建设银行)</strong> — SWIFT: PCBCCNBJ — Best for: Campus branch coverage</li>
                <li><strong>China Merchants Bank (招商银行)</strong> — SWIFT: CMBCCNBS — Best for: Best app experience</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.boc.cn" target="_blank">Bank of China</a> · <a href="https://www.icbc.com.cn" target="_blank">ICBC</a> · <a href="https://www.ccb.com" target="_blank">China Construction Bank</a> · <a href="https://www.cmbchina.com" target="_blank">China Merchants Bank</a> · <a href="https://www.safe.gov.cn" target="_blank">State Administration of Foreign Exchange</a></div>`
        },
        {
            title: 'How to Borrow a Shared Power Bank in China (2026)',
            content: `<p>Shared power banks (共享充电宝) are everywhere in China — at restaurants, malls, bars, airports, and train stations. If your phone is dying and you forgot your charger, these rental stations are a lifesaver. Here is how the system works.</p>
            <h3>What Are Shared Power Banks?</h3>
            <p>Shared power banks are portable battery packs housed in rental stations. You scan a QR code, pay a small fee, take a power bank with built-in cables, use it while you're out, and return it to any station of the same brand. It's as simple as renting a shared bicycle.</p>
            <h3>Major Brands</h3>
            <ul>
                <li><strong>怪兽充电 (Energy Monster)</strong> — Largest market share, found in most restaurants and shopping malls</li>
                <li><strong>街电 (Jiedian)</strong> — Second largest, strong presence in convenience stores and cafés</li>
                <li><strong>小电 (Xiaodian)</strong> — Popular in smaller shops and tea houses</li>
                <li><strong>来电 (Laidian)</strong> — Often found in bars, KTV, and nightlife venues</li>
                <li><strong>美团充电宝 (Meituan Power Bank)</strong> — Integrated with the Meituan app, convenient for Meituan users</li>
            </ul>
            <h3>How to Borrow</h3>
            <p><strong>Method 1: WeChat or Alipay Scan</strong></p>
            <ul>
                <li>Open <strong>WeChat</strong> or <strong>Alipay</strong> and scan the QR code on the rental station</li>
                <li>Authorize a security deposit — usually <strong>¥99–199</strong> (refunded when you return the power bank)</li>
                <li>A power bank pops out of the station — take it and go</li>
            </ul>
            <p><strong>Method 2: Meituan App</strong></p>
            <ul>
                <li>Open the <strong>Meituan (美团)</strong> app and search for "充电宝" (power bank)</li>
                <li>Find nearby power bank stations on the map</li>
                <li>Scan the QR code at the station to borrow</li>
            </ul>
            <p><strong>What You Get:</strong></p>
            <ul>
                <li>Each power bank comes with <strong>built-in cables</strong> — Lightning (iPhone), USB-C (Android/modern devices), and Micro-USB (older devices)</li>
                <li>Capacity is typically <strong>5000mAh</strong> — enough for roughly one full phone charge</li>
                <li>LED indicators show remaining battery level</li>
            </ul>
            <h3>Pricing</h3>
            <ul>
                <li>First hour is often <strong>free</strong> or <strong>¥1–2/hour</strong></li>
                <li>After that, <strong>¥2–4/hour</strong></li>
                <li>Daily cap usually <strong>¥20–30</strong> — you won't pay more than this per day</li>
                <li>If you never return it, the deposit is charged and the power bank is yours to keep</li>
            </ul>
            <h3>How to Return</h3>
            <ul>
                <li>Find any station of the <strong>same brand</strong> — it does not have to be the same location where you borrowed</li>
                <li>Insert the power bank into an empty slot — the rental ends automatically</li>
                <li>Your deposit is refunded and the final charge is calculated</li>
                <li>Use the app to find nearby return stations if you're in an unfamiliar area</li>
            </ul>
            <p><strong>💡 Tips:</strong></p>
            <ul>
                <li><strong>Check battery level before borrowing</strong> — most stations show LED indicators on each slot; avoid half-dead power banks</li>
                <li><strong>Set a reminder to return</strong> — charges add up over hours, especially overnight</li>
                <li>If you <strong>can't find a return station</strong>, contact customer service through the app — they can help locate the nearest one</li>
                <li><mark>NEVER return a power bank to a different brand's station — a Jiedian power bank will NOT fit in an Energy Monster station. Always check the brand name on the power bank before walking to a return station.</mark></li>
                <li>You can check the nearest return location for your brand through the brand's WeChat mini-program (小程序) — search for the brand name in WeChat and open the mini-program to find nearby stations on a map.</li>
                <li>These stations are most common at: <strong>restaurants, KTV, shopping malls, airports, train stations, and bars</strong></li>
                <li>If the power bank is <mark>damaged or not working</mark>, report it immediately through the app to avoid being charged</li>
            </ul>
            <ul>
                <li><strong>Energy Monster (怪兽充电)</strong> — ¥1–3/hour, daily cap ¥20 — Found at: Restaurants, malls</li>
                <li><strong>Jiedian (街电)</strong> — ¥1–3/hour, daily cap ¥20 — Found at: Convenience stores, cafés</li>
                <li><strong>Xiaodian (小电)</strong> — ¥2–4/hour, daily cap ¥30 — Found at: Small shops, tea houses</li>
                <li><strong>Laidian (来电)</strong> — ¥2–4/hour, daily cap ¥30 — Found at: Bars, KTV, nightlife</li>
                <li><strong>Meituan Power Bank (美团充电宝)</strong> — ¥1–3/hour, daily cap ¥20 — Found at: Meituan partner venues</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.zhuanshouchong.com" target="_blank">怪兽充电 Energy Monster</a> · <a href="https://www.jiedian.com" target="_blank">街电 Jiedian</a> · <a href="https://www.xiaodian.com" target="_blank">小电 Xiaodian</a> · <a href="https://www.laidian.com" target="_blank">来电 Laidian</a></div>`,
            pdfImages: [
                { src: 'images/power-bank-01-hero.png', label: 'Meituan (美团充电宝)' },
                { src: 'images/power-bank-02-brands.png', label: 'Jiedian (街电)' },
                { src: 'images/power-bank-03-rental-process.jpg', label: 'Energy Monster (怪兽充电)' }
            ]
        },
        {
            title: 'How to Use Shared Bikes in China (2026)',
            content: `<p>Shared bikes (共享单车) are one of the most convenient and affordable ways to get around Chinese cities. Millions of people use them daily for short commutes, errands, and exploring neighborhoods. Here is a complete guide for foreigners on how to register, unlock, ride, and return shared bikes in China.</p>
            <h3>Major Shared Bike Brands</h3>
            <ul>
                <li><strong>美团单车 (Meituan Bike)</strong> — Formerly Mobike. Yellow bikes. Largest network, found in every major city. Integrated with the Meituan app.</li>
                <li><strong>哈啰出行 (Hello Bike / Hellobike)</strong> — Blue bikes. Very popular in smaller cities and university areas. Uses Alipay for payment.</li>
                <li><strong>青桔单车 (Didi Bike / Qingju)</strong> — Green bikes. Owned by Didi (China's Uber). Integrated with the Didi app.</li>
            </ul>
            <h3>How to Register</h3>
            <p><strong>Method 1: Meituan Bike (美团单车)</strong></p>
            <ul>
                <li>Download the <strong>Meituan (美团)</strong> app from the App Store or Google Play</li>
                <li>Register with your <strong>Chinese phone number</strong> (required for all shared bike services)</li>
                <li>Complete <strong>real-name verification (实名认证)</strong> — enter your passport name and number</li>
                <li>Link a payment method: <strong>WeChat Pay</strong>, <strong>Alipay</strong>, or <strong>bank card</strong></li>
                <li>No deposit required for Meituan Bike — just scan and ride</li>
            </ul>
            <p><strong>Method 2: Hello Bike (哈啰出行)</strong></p>
            <ul>
                <li>Open <strong>Alipay (支付宝)</strong> and search for "哈啰出行" (Hello Bike) in the mini-programs</li>
                <li>Or download the standalone <strong>Hello Bike (哈啰出行)</strong> app</li>
                <li>Register with your Chinese phone number and complete real-name verification</li>
                <li>Bind your Alipay account for automatic payment</li>
                <li>No deposit required for basic bikes</li>
            </ul>
            <p><strong>Method 3: Didi Bike (青桔单车)</strong></p>
            <ul>
                <li>Download the <strong>Didi (滴滴出行)</strong> app</li>
                <li>Register and complete identity verification</li>
                <li>Go to the "Bike" section in the app</li>
                <li>Bind WeChat Pay or Alipay for payment</li>
            </ul>
            <h3>How to Unlock and Ride</h3>
            <ul>
                <li>Find a bike parked on the street — look for the brand's color (yellow/blue/green)</li>
                <li>Open the corresponding app and tap <strong>"Scan QR Code" (扫码用车)</strong></li>
                <li>Scan the <strong>QR code on the bike's handlebars or rear fender</strong></li>
                <li>The lock will <strong>automatically unlock</strong> — you'll hear a click</li>
                <li>Ride to your destination</li>
            </ul>
            <h3>How to End Your Ride</h3>
            <ul>
                <li>Park the bike in a <strong>designated parking area (停车点)</strong> — the app shows nearby spots on the map</li>
                <li><strong>Manually close the lock</strong> on the rear wheel, or press "End Ride" (结束骑行) in the app</li>
                <li>The app will <strong>automatically calculate and charge</strong> the fee</li>
                <li>⚠️ <mark>Always park in a designated area — improper parking may result in a ¥5–20 fine</mark></li>
            </ul>
            <h3>Pricing</h3>
            <ul>
                <li>Meituan Bike: <strong>¥1.5 per 30 minutes</strong></li>
                <li>Hello Bike: <strong>¥1.5 per 30 minutes</strong> (some cities ¥2)</li>
                <li>Didi Bike: <strong>¥1.5 per 30 minutes</strong></li>
                <li><strong>Monthly passes (月卡)</strong> are available: ¥10–20/month for unlimited rides (each ride limited to 2 hours)</li>
                <li>Free rides are often available for new users or during promotions</li>
            </ul>
            <h3>💡 Tips for Foreigners</h3>
            <ul>
                <li><mark>You MUST have a Chinese phone number</mark> — international numbers cannot register</li>
                <li><strong>Always check the bike before scanning</strong> — make sure the tires are inflated, brakes work, and the seat is adjustable</li>
                <li><strong>Buy a monthly pass</strong> if you ride daily — it saves a lot of money (¥10–20/month vs ¥1.5 per ride)</li>
                <li><strong>Download an offline map</strong> in case you lose signal — Amap (高德地图) works offline</li>
                <li><strong>Park responsibly</strong> — blocking sidewalks, doorways, or accessible paths may result in fines</li>
                <li>If the <strong>QR code is scratched or unreadable</strong>, enter the bike's ID number manually (printed on the frame)</li>
                <li><strong>Wear a helmet</strong> — some cities now require helmets for bike riders; shared helmet dispensers are available at some bike stations</li>
                <li>During <strong>rainy weather</strong>, bike availability may be limited and locks may be harder to open — plan accordingly</li>
            </ul>
            <ul>
                <li><strong>Meituan Bike (美团单车)</strong> — ¥1.5/30min — Yellow bikes — App: Meituan</li>
                <li><strong>Hello Bike (哈啰出行)</strong> — ¥1.5/30min — Blue bikes — App: Alipay mini-program or Hello Bike app</li>
                <li><strong>Didi Bike (青桔单车)</strong> — ¥1.5/30min — Green bikes — App: Didi</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.meituan.com" target="_blank">Meituan</a> · <a href="https://www.hellobike.com" target="_blank">Hello Bike</a> · <a href="https://www.didiglobal.com" target="_blank">Didi Global</a></div>`,
            pdfImagesBefore: [
                { src: 'images/shared-bike-01-hero.jpg', label: '美团单车 Meituan Bike' },
                { src: 'images/shared-bike-02-brands.jpg', label: '哈啰单车 Hello Bike' },
                { src: 'images/shared-bike-03-register.jpg', label: '青桔单车 Didi Bike' },
                { src: 'images/shared-bike-04-ride-flow.png', label: '美团单车扫码 Meituan Bike Scan', maxHeight: 150 }
            ]
        }
    ],
    entertainment: [
        {
            title: 'Beijing Expat Bars: Where Foreigners Actually Hang Out (2026)',
            content: `<p>Tired of tourist traps? Here are the real bars where Beijing's expat community gathers — with actual addresses you can put into your map app. These are the spots locals and long-term foreigners actually go to, not the places listed in generic travel guides.</p>
            <p><strong>🍺 Craft Beer & Breweries</strong></p>
            <ul>
                <li><strong>Great Leap Brewing #12 (大跃啤酒)</strong><br>📍 Doujiao Hutong #6, Dongcheng District (东城区豆角胡同6号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区豆角胡同6号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=大跃啤酒 豆角胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">北新桥站</span></div></div><br>🕐 12:00-24:00 | 💰 ¥40-60/pint<br>Beijing's original craft brewery in a hutong courtyard. The Honey Ma Gold and Pale Ale #6 are legendary. Gets packed on weekends. Outdoor seating in summer is the best vibe in Beijing. <a href="https://www.greatleapbrewing.com" target="_blank">Website</a></li>
                <li><strong>Slow Boat Brewery (悠航鲜啤)</strong><br>📍 56 Dongsi Shitiao, Dongcheng District (东城区东四十条56号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东四十条56号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=悠航鲜啤 东四十条" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">东四十条站</span></div></div><br>🕐 16:00-00:00 | 💰 ¥45-65/pint<br>Award-winning IPAs and the best burger in Beijing (seriously). The Monkey Fist IPA won multiple international awards. Cozy interior with exposed brick. <a href="https://www.slowboatbrewing.com" target="_blank">Website</a></li>
                <li><strong>Jing-A Brewing Taproom (京A)</strong><br>📍 Xingfucun Zhonglu, Building 19, Chaoyang District (朝阳区幸福村中路19号楼)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区幸福村中路19号楼</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=京A啤酒 幸福村中路" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">东大桥站</span></div></div><br>🕐 11:00-00:00 | 💰 ¥45-65/pint<br>Best outdoor terrace in Beijing. Try the Flying Fist IPA and Airpocalypse Double IPA. Great food menu too — the pulled pork sandwich is solid. Multiple locations but this is the OG. <a href="https://www.jingabrewing.com" target="_blank">Website</a></li>
                <li><strong>Arrow Factory Brewing (箭厂啤酒)</strong><br>📍 9 Jianchang Hutong, Dongcheng District (东城区箭厂胡同9号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区箭厂胡同9号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=箭厂啤酒 箭厂胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">鼓楼大街站</span></div></div><br>🕐 16:00-23:00 | 💰 ¥40-55/pint<br>Hidden gem in a quiet hutong near the Drum Tower. Small but quality-focused. The Stout and Belgian Wit are excellent. Feels like a neighborhood secret. <a href="https://www.arrowfactorybrewing.com" target="_blank">Website</a></li>
                <li><strong>Panda Brew (熊猫精酿)</strong><br>📍 62 Dongsibei Dajie, Dongcheng District (东城区东四北大街62号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东四北大街62号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=熊猫精酿 东四北大街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">东四站</span></div></div><br>🕐 14:00-00:00 | 💰 ¥35-50/pint<br>Chinese-owned craft brewery with nationwide distribution. The taproom has 20+ beers on rotation. Try the Honey Ale and Tangerine Wheat. Good for groups. <a href="https://www.pandabrew.com" target="_blank">Website</a></li>
            </ul>
            <p><strong>🍸 Cocktail Bars & Speakeasies</strong></p>
            <ul>
                <li><strong>Capital Spirits (首都烈酒)</strong><br>📍 3 Qianliang Hutong, Dongcheng District (东城区钱粮胡同3号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区钱粮胡同3号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=首都烈酒 钱粮胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div><br>🕐 19:00-02:00 | 💰 ¥60-90/cocktail<br>China's first baijiu cocktail bar. Don't be scared — the bartenders transform baijiu into incredible cocktails. The "Baijiu Sour" converts skeptics. Tiny space, always buzzing. Reservations recommended. <a href="https://www.capitalspirits.com" target="_blank">Website</a></li>
                <li><strong>The Bar at The Opposite House (瑜舍)</strong><br>📍 Building 1, Taikoo Li Sanlitun, Chaoyang District (朝阳区三里屯太古里1号楼)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区三里屯太古里1号楼</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=瑜舍 三里屯太古里" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">团结湖站</span></div></div><br>🕐 17:00-01:00 | 💰 ¥80-120/cocktail<br>Luxury hotel bar with stunning minimalist design. The cocktails are pricey but exceptional. Great for dates or impressing clients. The lobby bar has live DJ on weekends. <a href="https://www.theoppositehouse.com" target="_blank">Website</a></li>
                <li><strong>Migas (米家思)</strong><br>📍 6/F, Nali Patio, 81 Sanlitun Road, Chaoyang District (朝阳区三里屯路81号那里花园6层)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区三里屯路81号那里花园6层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=米家思 三里屯那里花园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">团结湖站</span></div></div><br>🕐 18:00-02:00 | 💰 ¥70-100/cocktail<br>Rooftop bar with incredible views of Sanlitun. Spanish-inspired cocktails and tapas. The Sunday brunch is legendary among expats. Summer rooftop parties are unmissable. <a href="https://www.migasrestaurant.com" target="_blank">Website</a></li>
                <li><strong>Janes & Hooch</strong><br>📍 4 Gongti Beilu, Chaoyang District (朝阳区工体北路4号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区工体北路4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Janes%20%26%20Hooch%20工体北路" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">东大桥站/团结湖站</span></div></div><br>🕐 19:00-02:00 | 💰 ¥65-95/cocktail<br>Industrial-chic cocktail bar near Workers' Stadium. Excellent Old Fashioned and Negroni. The bartenders are serious about their craft. Gets lively after 11 PM on weekends. <a href="https://www.amap.com/search?query=Janes%20%26%20Hooch%20%E5%B7%A5%E4%BD%93%E5%8C%97%E8%B7%AF4%E5%8F%B7" target="_blank">Amap</a></li>
            </ul>
            <p><strong>🎵 Live Music & Dive Bars</strong></p>
            <ul>
                <li><strong>DDC (Dusk Dawn Club 黄昏黎明俱乐部)</strong><br>📍 14 Shanlao Hutong, Dongcheng District (东城区山老胡同14号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区山老胡同14号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=黄昏黎明俱乐部 山老胡同" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div><br>🕐 20:00-02:00 | 💰 ¥50-80 (cover varies)<br>Beijing's best live jazz and indie music venue in a renovated hutong. Acts range from local jazz trios to touring international bands. The sound system is excellent for the intimate space. <a href="https://duskdawnclub.com" target="_blank">Website</a></li>
                <li><strong>Temple Bar (寺庙酒吧)</strong><br>📍 206 Gulou Dong Dajie, Dongcheng District (东城区鼓楼东大街206号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区鼓楼东大街206号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Temple%20Bar%20鼓楼东大街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">鼓楼大街站</span></div></div><br>🕐 19:00-02:00 | 💰 ¥30-50/beer<br>Dive bar with character near the Drum Tower. Cheap drinks, loud music, and a crowd of regulars who've been coming for years. The rooftop has a great view of the Drum Tower at night. <a href="https://www.thebeijinger.com/directory/temple-bar" target="_blank">The Beijinger</a></li>
                <li><strong>The Den</strong><br>📍 4 Gongti Xilu, Chaoyang District (朝阳区工体西路4号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区工体西路4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=The%20Den%20工体西路" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东大桥站</span></div></div><br>🕐 18:00-02:00 | 💰 ¥40-60/beer<br>Irish pub that's been an expat institution for 20+ years. Sports on multiple screens, decent pub grub, and a reliable crowd. Wednesday quiz night is competitive. <a href="https://www.thebeijinger.com/directory/the-den" target="_blank">The Beijinger</a></li>
                <li><strong>Paddy O'Shea's</strong><br>📍 28 Dongsi Shitiao, Dongcheng District (东城区东四十条28号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东四十条28号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Paddy%20O%27Shea%27s%20东四十条" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">东四十条站</span></div></div><br>🕐 16:00-02:00 | 💰 ¥40-60/beer<br>The quintessential Irish pub in Beijing. Live sports, Guinness on tap, and a warm atmosphere. The go-to spot for watching Premier League matches with fellow expats. <a href="https://www.paddyosheas.com" target="_blank">Website</a></li>
            </ul>
            <p><strong>💡 Insider Tips:</strong></p>
            <ul>
                <li>Hutong bars are best found by walking around — many have no sign, just a red door</li>
                <li>Sanlitun gets touristy after midnight — locals move to Gulou or Wudaokou</li>
                <li>Happy hour (5-8 PM) at most bars: 2-for-1 cocktails or ¥30 beers</li>
                <li>Use <a href="https://www.amap.com" target="_blank">Amap (高德地图)</a> to find hidden bars — search "酒吧" + your area</li>
                <li>WeChat groups: search "Beijing expats" or "Beijing nightlife" for curated event listings</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.thebeijinger.com/blog" target="_blank">The Beijinger</a> · <a href="https://www.greatleapbrewing.com" target="_blank">Great Leap Brewing</a> · <a href="https://www.slowboatbrewing.com" target="_blank">Slow Boat</a> · <a href="https://www.jingabrewing.com" target="_blank">Jing-A</a></div>`
        },
        {
            title: 'Shanghai Expat Bars: Where Foreigners Actually Hang Out (2026)',
            content: `<p>Shanghai has the best nightlife in mainland China, and the expat bar scene is legendary. Here are the actual bars where Shanghai's foreign community gathers — with real addresses you can Didi or metro to.</p>
            <p><strong>🥂 Bund & Riverside Bars</strong></p>
            <ul>
                <li><strong>Bar Rouge</strong><br>📍 Bund 18, 7F, 18 Zhongshan Dong Yi Road, Huangpu District (黄浦区中山东一路18号7楼)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区中山东一路18号7楼</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Bar%20Rouge%20外滩18号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div><br>🕐 18:00-04:00 | 💰 ¥80-120/cocktail, ¥200+ cover on weekends<br>The most iconic rooftop bar in Shanghai. Unobstructed views of Pudong skyline. Dress to impress. Gets packed after 11 PM. The terrace is magical at sunset. This is THE expat party spot. <a href="https://www.barrouge-shanghai.com" target="_blank">Website</a></li>
                <li><strong>The Nest</strong><br>📍 Bund 18, 6F, 18 Zhongshan Dong Yi Road, Huangpu District (黄浦区中山东一路18号6楼)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区中山东一路18号6楼</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=The%20Nest%20外滩18号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div><br>🕐 18:00-02:00 | 💰 ¥90-130/cocktail<br>More upscale than Bar Rouge, same building. Nordic-inspired cocktails and food. The crowd is older, more sophisticated. Great for business entertaining. Reservations essential on weekends. <a href="https://www.thenestshanghai.com" target="_blank">Website</a></li>
                <li><strong>Hakkasan</strong><br>📍 Bund 18, 5F, 18 Zhongshan Dong Yi Road, Huangpu District (黄浦区中山东一路18号5楼)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区中山东一路18号5楼</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Hakkasan%20外滩18号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div><br>🕐 18:00-01:00 | 💰 ¥100-150/cocktail<br>World-renowned Cantonese restaurant with an incredible bar. The cocktails are Asian-fusion masterpieces. Expensive but worth it for special occasions. Dress smart. <a href="https://www.hakkasan.com/shanghai" target="_blank">Website</a></li>
            </ul>
            <p><strong>🍸 Former French Concession (法租界)</strong></p>
            <ul>
                <li><strong>The Public</strong><br>📍 101 Maoming Nan Road, Jing'an District (静安区茂名南路101号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 静安区茂名南路101号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=The%20Public%20茂名南路101号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">陕西南路站</span></div></div><br>🕐 18:00-02:00 | 💰 ¥60-90/cocktail<br>Legendary expat cocktail bar that's been around forever. The bartenders know everyone's name. Classic cocktails done right — the Martini is perfect. Feels like a neighborhood living room. The crowd is 80% foreign. <a href="https://www.smartshanghai.com/venue/the-public" target="_blank">SmartShanghai</a></li>
                <li><strong>Senator Saloon</strong><br>📍 98 Jianguo West Road, Xuhui District (徐汇区建国西路98号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区建国西路98号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Senator%20Saloon%20建国西路98号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line9">🚇 9号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">嘉善路站</span></div></div><br>🕐 17:00-02:00 | 💰 ¥60-90/cocktail<br>American whiskey bar with the best bourbon selection in Shanghai. Dark wood, leather booths, and country music. The Old Fashioned is legendary. Always packed with Americans and Brits. No reservations — first come, first served. <a href="https://www.smartshanghai.com/venue/senator-saloon" target="_blank">SmartShanghai</a></li>
                <li><strong>Flask</strong><br>📍 458 Shaanxi South Road, Xuhui District (徐汇区陕西南路458号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区陕西南路458号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Flask%20陕西南路458号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">陕西南路站</span></div></div><br>🕐 19:00-02:00 | 💰 ¥70-100/cocktail<br>Hidden speakeasy behind a Coca-Cola vending machine door. The cocktails are experimental and Instagram-worthy. Intimate space, max 30 people. Go early or wait in line. The "Tiki Flask" is their signature. <a href="https://www.smartshanghai.com/venue/flask" target="_blank">SmartShanghai</a></li>
                <li><strong>Epic Cocktail Bar</strong><br>📍 Found 158, 158 Julu Road, Jing'an District (静安区巨鹿路158号Found 158)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 静安区巨鹿路158号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Epic%20Cocktail%20Bar%20巨鹿路158号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">陕西南路站</span></div></div><br>🕐 19:00-02:00 | 💰 ¥65-90/cocktail<br>Located in the Found 158 complex (a former underground bomb shelter turned bar street). Creative cocktails with Chinese ingredients. The bartenders are award-winning. Try the "Sichuan Negroni." <a href="https://www.smartshanghai.com/venue/epic" target="_blank">SmartShanghai</a></li>
                <li><strong>Sasha's</strong><br>📍 11 Hengshan Road, Xuhui District (徐汇区衡山路11号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区衡山路11号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Sasha%27s%20衡山路11号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="station-name">衡山路站</span></div></div><br>🕐 11:00-02:00 | 💰 ¥50-70/beer, ¥70-90/cocktail<br>Set in a gorgeous 1920s heritage villa. The garden terrace is perfect for Sunday brunch. Western food is solid. The crowd is a mix of expats and Chinese yuppies. Live music on weekends. <a href="https://www.sashasrestaurant.com" target="_blank">Website</a></li>
            </ul>
            <p><strong>🍺 Craft Beer & Brewpubs</strong></p>
            <ul>
                <li><strong>Daga Brewpub</strong><br>📍 57 Yuyuan Road, Jing'an District (静安区愚园路57号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 静安区愚园路57号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Daga%20Brewpub%20愚园路57号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line11">🚇 11号线</span><span class="station-name">江苏路站</span></div></div><br>🕐 11:00-00:00 | 💰 ¥40-60/pint<br>30+ craft beers on tap, mostly Chinese craft breweries. The outdoor seating on Yuyuan Road is great for people-watching. The IPA flight (4 x 150ml for ¥80) is the best way to explore. Food is solid pub grub. <a href="https://www.amap.com/search?query=Daga%20Brewpub%20%E6%84%9A%E5%9B%AD%E8%B7%AF57%E5%8F%B7" target="_blank">Amap</a></li>
                <li><strong>Boxing Cat Brewery (拳击猫)</strong><br>📍 519 Fuxing Middle Road, Xuhui District (徐汇区复兴中路519号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区复兴中路519号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Boxing%20Cat%20Brewery%20复兴中路519号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">上海图书馆站</span></div></div><br>🕐 11:00-00:00 | 💰 ¥45-65/pint<br>Shanghai's OG craft brewery. The TKO IPA and Sucker Punch Pale Ale are classics. Great American-style food. Multiple locations but this one has the best atmosphere. <a href="https://www.boxingcatbrewery.com" target="_blank">Website</a></li>
                <li><strong>Tap House</strong><br>📍 398 Jiangsu Road, Changning District (长宁区江苏路398号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 长宁区江苏路398号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Tap%20House%20江苏路398号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line11">🚇 11号线</span><span class="station-name">江苏路站</span></div></div><br>🕐 16:00-00:00 | 💰 ¥40-55/pint<br>Neighborhood craft beer bar with a rotating tap list. The owner is a beer nerd who sources unique brews. Chill vibe, good music, and a friendly crowd. Perfect for a weeknight drink. <a href="https://www.smartshanghai.com/venue/tap-house" target="_blank">SmartShanghai</a></li>
            </ul>
            <p><strong>🎷 Live Music & Late Night</strong></p>
            <ul>
                <li><strong>JZ Club</strong><br>📍 46 Fuxing West Road, Xuhui District (徐汇区复兴西路46号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区复兴西路46号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=JZ%20Club%20复兴西路46号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line11">🚇 11号线</span><span class="station-name">交通大学站</span></div></div><br>🕐 20:00-02:00 | 💰 ¥50-100 (cover varies)<br>Shanghai's premier jazz club since 2004. World-class musicians play nightly. The basement venue has incredible acoustics. Reservations recommended for weekends. <a href="https://www.jzclub.cn" target="_blank">Website</a></li>
                <li><strong>Heyday Jazz Bar</strong><br>📍 Ferguson Lane, 376 Wukang Road, Xuhui District (徐汇区武康路376号武康亭)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区武康路376号武康亭</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Heyday%20Jazz%20Bar%20武康路376号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line11">🚇 11号线</span><span class="station-name">交通大学站</span></div></div><br>🕐 19:00-01:00 | 💰 ¥60-80/cocktail<br>Intimate jazz bar in the beautiful Ferguson Lane complex. More upscale than JZ Club. Great cocktails and a sophisticated crowd. Perfect for a date night. <a href="https://www.smartshanghai.com/venue/heyday" target="_blank">SmartShanghai</a></li>
                <li><strong>Revolucion Cocktail</strong><br>📍 101 Maoming Nan Road, Jing'an District (静安区茂名南路101号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 静安区茂名南路101号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Revolucion%20Cocktail%20茂名南路101号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">陕西南路站</span></div></div><br>🕐 20:00-04:00 | 💰 ¥60-90/cocktail<br>Cuban-themed cocktail bar with live salsa music. The mojitos are legit. Gets wild after midnight — dancing on tables is not uncommon. Multiple locations but Maoming Road is the original. <a href="https://www.revolucion.com.cn" target="_blank">Website</a></li>
                <li><strong>Windows Garage</strong><br>📍 101 Maoming Nan Road, Jing'an District (静安区茂名南路101号)<br><div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 静安区茂名南路101号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Windows%20Garage%20茂名南路101号" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="metro-badge metro-sh-line12">🚇 12号线</span><span class="station-name">陕西南路站</span></div></div><br>🕐 20:00-02:00 | 💰 ¥40-60/beer<br>Dive bar with live rock and indie bands. Sticky floors, cheap beer, and loud music — exactly what you want at 1 AM. The crowd is a mix of expats, musicians, and night owls. <a href="https://www.smartshanghai.com/venue/windows-garage" target="_blank">SmartShanghai</a></li>
            </ul>
            <p><strong>💡 Insider Tips:</strong></p>
            <ul>
                <li>Former French Concession (Xuhui/Jing'an) has the highest density of expat bars — walk between them</li>
                <li>Found 158 (巨鹿路158号) is a bar complex in a former bomb shelter — multiple bars in one underground space</li>
                <li>Bund bars are expensive but worth it for the view — go at sunset, leave before the cover charge kicks in</li>
                <li>Use <a href="https://www.smartshanghai.com/venue/bars" target="_blank">SmartShanghai</a> for weekly bar events and specials</li>
                <li>Didi is your friend after midnight — metro closes at 11 PM</li>
                <li>WeChat: search "Shanghai expats" or "上海外国人" for party invites and event listings</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.smartshanghai.com/venue/bars" target="_blank">SmartShanghai</a> · <a href="https://www.barrouge-shanghai.com" target="_blank">Bar Rouge</a> · <a href="https://www.boxingcatbrewery.com" target="_blank">Boxing Cat</a> · <a href="https://www.jzclub.cn" target="_blank">JZ Club</a></div>`
        }
    ],
    school: [
        {
            title: 'Campus Life in China: What to Expect as an International Student',
            content: `<p>Starting university in China is a unique experience. Here's what daily campus life looks like for international students.</p>
            <p><strong>Orientation Week</strong></p>
            <p>Most universities hold a dedicated orientation for international students, typically 1-2 weeks before classes begin. You'll receive your student ID, campus tour, library card, and bank account setup assistance. Many universities assign a Chinese "buddy" student to help you settle in.</p>
            <p><strong>Daily Schedule</strong></p>
            <p>Classes typically run from 8:00 AM to 5:00 PM, with a 2-hour lunch break. Morning classes start at 8:00 AM (早八) — this is earlier than most Western universities! Most students eat breakfast at the campus canteen around 7:00-7:30 AM.</p>
            <p><strong>Campus Canteens (食堂)</strong></p>
            <p>The heart of campus life. Meals cost ¥8-20 per dish. Most canteens have multiple floors with different cuisine options. Payment via WeChat/Alipay or campus card. International student dining halls in major cities offer more diverse food options.</p>
            <p><strong>Dormitory Life</strong></p>
            <p>On-campus dorms cost ¥800-2,500/year. Most rooms are shared (2-4 students). Facilities typically include: shared bathrooms, laundry room, common study area, hot water (often limited hours), and internet access. Some universities offer single rooms for international students at higher rates.</p>
            <p><strong>Student Organizations</strong></p>
            <p>Over 100 student clubs at most universities, covering: sports (basketball, football, badminton), arts (calligraphy, traditional music, dance), technology (robotics, AI, coding), language exchange, and cultural activities. Joining clubs is the best way to make Chinese friends.</p>
            <p><strong>Useful Campus Resources:</strong></p>
            <ul>
                <li>International Student Office — visa issues, academic advising, cultural activities</li>
                <li>Library — extensive digital resources, study rooms, free printing (limited)</li>
                <li>Career Center — resume workshops, job fairs, internship connections</li>
                <li>Health Center — basic medical care, ¥5-15 consultation fee</li>
                <li>Sports facilities — gym, pool, tennis courts (often free or ¥5-20/session)</li>
            </ul>
            <div class="ar-source">Sources: <a href="http://www.moe.gov.cn" target="_blank">Ministry of Education</a> · <a href="http://www.ecnu.edu.cn" target="_blank">East China Normal University</a></div>`
        }
    ],
    business: [
        {
            title: 'China Startup Hubs: Where to Launch Your Business',
            content: `<p>China has several world-class startup ecosystems. Here's a breakdown of the major hubs and what each offers.</p>
            <p><strong>Shenzhen — Hardware Capital of the World</strong></p>
            <p>Home to Huawei, Tencent, and DJI. Shenzhen is the world's #1 city for hardware prototyping and manufacturing. Huaqiangbei electronics market has every component imaginable. Key sectors: IoT, consumer electronics, drones, EV components. Average startup costs are lower than Beijing/Shanghai.</p>
            <p><strong>Beijing — AI & Internet Hub</strong></p>
            <p>Zhongguancun (中关村) is China's Silicon Valley. Home to Baidu, ByteDance, Xiaomi, and Meituan. Strongest VC ecosystem in China. Key sectors: AI, big data, autonomous vehicles, enterprise SaaS. Highest concentration of top universities (PKU, Tsinghua) provides talent pipeline.</p>
            <p><strong>Shanghai — Fintech & International Business</strong></p>
            <p>China's financial capital with the most international business environment. Key sectors: fintech, e-commerce, biotech, luxury brands. Free Trade Zone offers preferential policies. Best city for foreign entrepreneurs due to English-friendly infrastructure.</p>
            <p><strong>Hangzhou — E-commerce & Cloud Computing</strong></p>
            <p>Alibaba's headquarters city. Thriving e-commerce and cloud computing ecosystem. Lower cost of living than Tier 1 cities. Beautiful environment (West Lake). Key sectors: cross-border e-commerce, live-streaming commerce, cloud services.</p>
            <p><strong>Chengdu — Rising Tech Star</strong></p>
            <p>Western China's tech capital with lower costs and high quality of life. Growing gaming and animation industry. Key sectors: gaming, animation, AI, digital entertainment. Known for relaxed work culture compared to east coast cities.</p>
            <p><strong>Government Support by City:</strong></p>
            <ul>
                <li>Shenzhen: Up to ¥1M grants for qualifying tech startups</li>
                <li>Beijing: Zhongguancun offers 3-year rent subsidies and talent housing</li>
                <li>Shanghai: FTZ simplified registration, 15% corporate tax</li>
                <li>Hangzhou: ¥500K grants for overseas returnees starting businesses</li>
                <li>Chengdu: Free 2-year incubator space for early-stage startups</li>
            </ul>
            <div class="ar-source">Sources: <a href="http://www.mofcom.gov.cn" target="_blank">Ministry of Commerce</a> · <a href="http://www.most.gov.cn" target="_blank">Ministry of Science & Technology</a></div>`
        }
    ],
    language: [
        {
            title: 'HSK Exam Guide 2026: Levels, Registration, and Study Tips',
            content: `<p>The HSK (Hanyu Shuiping Kaoshi) is the standardized test for Chinese language proficiency. Here's everything you need to know.</p>
            <p><strong>HSK Levels:</strong></p>
            <ul>
                <li><strong>HSK 1</strong> — 150 characters, basic phrases. Listening + Reading. ~1 hour.</li>
                <li><strong>HSK 2</strong> — 300 characters, simple conversations. Listening + Reading. ~1.5 hours.</li>
                <li><strong>HSK 3</strong> — 600 characters, daily communication. Listening + Reading + Writing. ~2 hours.</li>
                <li><strong>HSK 4</strong> — 1,200 characters, fluent on familiar topics. Required for most university programs.</li>
                <li><strong>HSK 5</strong> — 2,500 characters, read Chinese newspapers, watch movies. Required for CSC scholarships.</li>
                <li><strong>HSK 6</strong> — 5,000+ characters, near-native comprehension. Required for advanced programs.</li>
            </ul>
            <p><strong>How to Register:</strong></p>
            <ul>
                <li>Visit <a href="http://www.chinesetests.cn" target="_blank">chinesetests.cn</a></li>
                <li>Create account, select test center and date</li>
                <li>Fee: ¥150-950 depending on level</li>
                <li>Test dates: monthly at most centers</li>
                <li>Results available online within 3 weeks</li>
            </ul>
            <p><strong>Best Study Resources:</strong></p>
            <ul>
                <li><strong>Pleco</strong> — Essential dictionary app with flashcards and OCR</li>
                <li><strong>HelloChinese</strong> — Best app for beginners (HSK 1-3)</li>
                <li><strong>Du Chinese</strong> — Graded reading app with pinyin toggle</li>
                <li><strong>ChinesePod</strong> — Audio lessons for all levels</li>
                <li><strong>YoyoChinese</strong> — YouTube channel with clear grammar explanations</li>
                <li><strong>Anki</strong> — Spaced repetition flashcards (use HSK decks)</li>
            </ul>
            <p><strong>Study Tips:</strong></p>
            <ul>
                <li>Practice writing characters by hand — helps with memory retention</li>
                <li>Learn radicals first — they help you guess meanings of unfamiliar characters</li>
                <li>Watch Chinese shows with Chinese subtitles (not English!)</li>
                <li>Find a language partner on Tandem or HelloTalk</li>
                <li>Study 30 minutes daily rather than 3 hours once a week</li>
            </ul>
            <div class="ar-source">Sources: <a href="http://www.hanban.org" target="_blank">Confucius Institute Headquarters</a> · <a href="http://www.chinesetests.cn" target="_blank">HSK Official Registration</a></div>`
        }
    ],
    rent: [
        {
            title: 'Complete Guide to Renting an Apartment in Beijing as a Foreigner (2026)',
            content: `<p>Moving to Beijing and finding the right apartment can feel overwhelming, especially when you don't speak Chinese fluently. This comprehensive guide covers everything you need to know about renting in Beijing as a foreign tenant — from choosing the right platform to signing your lease.</p>
            <p><strong>Step 1: Choose the Right Rental Platform</strong></p>
            <p>The Beijing rental market is dominated by several major platforms. Here are the best options for foreigners:</p>
            <ul>
                <li><a href="https://www.ziroom.com" target="_blank"><strong>Ziroom (自如)</strong></a> — China's largest managed apartment platform. Offers fully furnished, standardized apartments with Wi-Fi, cleaning service, and maintenance included. The app has an English interface option. Best for: young professionals who want a hassle-free experience. Price range: ¥3,000-15,000/month.</li>
                <li><a href="https://www.lianjia.com" target="_blank"><strong>Lianjia (链家)</strong></a> — The most trusted real estate platform in China with verified listings and professional agents. The app is in Chinese, but agents in expat areas often speak English. Best for: families and long-term renters. Commission: typically one month's rent.</li>
                <li><a href="https://www.ke.com" target="_blank"><strong>Beike (贝壳找房)</strong></a> — A housing aggregator that pulls listings from multiple agencies including Lianjia. Has the largest database of verified properties. Best for: comparing options across agencies.</li>
                <li><a href="https://housinganywhere.com/s/Beijing--China" target="_blank"><strong>HousingAnywhere</strong></a> — International platform popular for medium-term rentals (1-12 months). Verified landlords, secure payments, and flexible lease terms. Best for: students and short-term stays.</li>
            </ul>
            <p><strong>Step 2: Understand Beijing's Rental Neighborhoods</strong></p>
            <p>Beijing is massive — choosing the right neighborhood is crucial. Here are the most popular areas for foreigners:</p>
            <ul>
                <li><strong>Chaoyang District (朝阳区)</strong> — The expat hub. Sanlitun, CBD, and Liangmaqiao are popular with young professionals. Rent: ¥5,000-15,000/month for 1BR.</li>
                <li><strong>Haidian District (海淀区)</strong> — Near major universities (Peking, Tsinghua). Wudaokou is the student hub. Rent: ¥4,000-8,000/month for 1BR.</li>
                <li><strong>Wangjing (望京)</strong> — Known as "Koreatown" but increasingly popular with all expats. Modern apartments, great food scene. Rent: ¥4,500-9,000/month for 1BR.</li>
                <li><strong>Shunyi District (顺义)</strong> — Where most international schools are located. Villa communities with gardens. Popular with expat families. Rent: ¥8,000-25,000/month for a villa.</li>
            </ul>
            <p><strong>Step 3: Documents You'll Need</strong></p>
            <ul>
                <li>Valid passport with current visa</li>
                <li>Residence permit (临时住宿登记表) — register at your local police station within 24 hours of moving in</li>
                <li>Proof of income or employment contract (some landlords require this)</li>
                <li>Security deposit: typically 1-2 months' rent (押一付三 = 1 month deposit, 3 months upfront is standard)</li>
            </ul>
            <p><strong>Step 4: The Rental Process</strong></p>
            <ol>
                <li>Browse listings on your preferred platform and schedule viewings (看房 kàn fáng)</li>
                <li>Visit apartments in person — never sign without seeing the place first</li>
                <li>Negotiate the rent — in Beijing, it's common to negotiate 5-10% off the listed price</li>
                <li>Review the lease contract carefully. Ask for an English translation if needed</li>
                <li>Pay the deposit and first month's rent. Get official receipts (收据 shōu jù)</li>
                <li>Register at the local police station (派出所 pài chū suǒ) within 24 hours</li>
            </ol>
            <p><strong>Step 5: Essential Tips for Foreign Renters</strong></p>
            <ul>
                <li>Always use a <a href="https://www.ziroom.com" target="_blank">reputable platform</a> — avoid WeChat-only deals without verification</li>
                <li>Check water pressure, heating system, and internet speed during viewing</li>
                <li>In Beijing, central heating (暖气 nuǎn qì) is included in rent from Nov 15 - Mar 15</li>
                <li>Negotiate who pays for utilities (水电费 shuǐ diàn fèi) — usually the tenant</li>
                <li>Get renter's insurance — available on <a href="https://www.zhongmin.cn" target="_blank">Zhongmin</a> or through your agent</li>
                <li>Join expat WeChat groups for your neighborhood for real-time advice</li>
            </ul>
            <p><strong>Common Scams to Avoid:</strong></p>
            <ul>
                <li>Agent asks for deposit before viewing — SCAM. Never pay before seeing the apartment</li>
                <li>Price is significantly below market rate — likely bait-and-switch</li>
                <li>Landlord refuses to provide 房产证 (property ownership certificate) — verify ownership</li>
                <li>No written contract — always insist on a formal lease agreement</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.ziroom.com" target="_blank">Ziroom</a> · <a href="https://www.lianjia.com" target="_blank">Lianjia</a> · <a href="https://www.ke.com" target="_blank">Beike</a></div>`
        },
        {
            title: 'Beijing Neighborhood Guide: Where Expats Live in 2026',
            content: `<p>Choosing the right neighborhood in Beijing can make or break your experience as an expat. This guide breaks down the most popular areas where foreigners live, with real rent prices, transport links, and lifestyle tips for each area.</p>
            <p><strong>1. Sanlitun (三里屯) — Chaoyang District</strong></p>
            <p>The beating heart of Beijing's expat scene. Sanlitun offers a cosmopolitan lifestyle with international restaurants, bars, shopping malls (Taikoo Li), and the embassy district nearby. Most young professionals and single expats choose this area for its vibrant nightlife and walkability.</p>
            <ul>
                <li>Rent: ¥6,000-12,000/month (1BR apartment)</li>
                <li>Nearest metro: Tuanjiehu (Line 10), Dongsi Shitiao (Line 2)</li>
                <li>Best for: Young professionals, nightlife lovers</li>
                <li>Nearby: Taikoo Li, Nali Patio, The Opposite House, Element Fresh, Great Leap Brewing</li>
            </ul>
            <p><strong>2. CBD / Guomao (国贸) — Chaoyang District</strong></p>
            <p>Beijing's Central Business District is where many multinational companies are headquartered. Modern high-rise apartments with stunning city views, premium shopping at China World Mall, and easy access to Line 1 and Line 10. Popular with corporate expats and finance professionals.</p>
            <ul>
                <li>Rent: ¥8,000-20,000/month (1BR luxury apartment)</li>
                <li>Nearest metro: Guomao (Line 1/10), Jintaixizhao (Line 10)</li>
                <li>Best for: Corporate expats, finance professionals</li>
                <li>Nearby: China World Mall, CCTV Headquarters, Kerry Centre</li>
            </ul>
            <p><strong>3. Liangmaqiao (亮马桥) — Chaoyang District</strong></p>
            <p>Known as the "embassy area," Liangmaqiao is home to many foreign embassies, international hotels, and upscale restaurants. The area has a more relaxed, residential feel compared to Sanlitun while still being centrally located. Many expat families choose this area for its safety and international community.</p>
            <ul>
                <li>Rent: ¥7,000-15,000/month (1BR apartment)</li>
                <li>Nearest metro: Liangmaqiao (Line 10)</li>
                <li>Best for: Embassy staff, expat families</li>
                <li>Nearby: Lufthansa Center, Kempinski Hotel, Japanese and Korean restaurants</li>
            </ul>
            <p><strong>4. Wangjing (望京) — Chaoyang District</strong></p>
            <p>Wangjing has transformed from a quiet residential area into a bustling expat neighborhood, often called Beijing's "Koreatown." It's home to many tech companies (Alibaba, Meituan offices) and offers excellent Korean and international dining. Modern apartment complexes with good amenities at more affordable prices than central Chaoyang.</p>
            <ul>
                <li>Rent: ¥4,500-9,000/month (1BR apartment)</li>
                <li>Nearest metro: Wangjing (Line 14/15), Wangjing South (Line 14)</li>
                <li>Best for: Tech workers, Korean food lovers, budget-conscious expats</li>
                <li>Nearby: Wangjing SOHO, Korean restaurants, Wanda Plaza</li>
            </ul>
            <p><strong>5. Wudaokou (五道口) — Haidian District</strong></p>
            <p>Known as "宇宙中心" (Center of the Universe) among Chinese students, Wudaokou is the student hub of Beijing. Surrounded by Peking University, Tsinghua University, and Beijing Language and Culture University, it's the most affordable expat-friendly area. Great for students and young professionals on a budget.</p>
            <ul>
                <li>Rent: ¥3,500-7,000/month (1BR apartment)</li>
                <li>Nearest metro: Wudaokou (Line 13)</li>
                <li>Best for: Students, budget-conscious young professionals</li>
                <li>Nearby: University campuses, Korean and Japanese restaurants, bars, bookstores</li>
            </ul>
            <p><strong>6. Shunyi (顺义) — International School Belt</strong></p>
            <p>Shunyi is where most expat families with school-age children live. Home to major international schools (ISB, WAB, Dulwich), it offers villa communities with gardens, space, and a suburban lifestyle. The trade-off is a longer commute to central Beijing (40-60 minutes).</p>
            <ul>
                <li>Rent: ¥10,000-30,000/month (villa with garden)</li>
                <li>Nearest metro: Shunyi (Line 15), but most residents drive</li>
                <li>Best for: Expat families with children</li>
                <li>Nearby: International schools, Europlaza, Pinnacle Plaza, River Garden</li>
            </ul>
            <p><strong>How to Choose Your Neighborhood:</strong></p>
            <ul>
                <li><strong>Budget under ¥5,000/month:</strong> Wudaokou, Wangjing, or shared apartment in Chaoyang</li>
                <li><strong>Budget ¥5,000-10,000/month:</strong> Sanlitun, Liangmaqiao, Wangjing (1BR)</li>
                <li><strong>Budget ¥10,000+/month:</strong> CBD luxury apartments, Shunyi villas</li>
                <li><strong>With kids:</strong> Shunyi (international schools) or Liangmaqiao (central, safe)</li>
                <li><strong>Near work:</strong> Use <a href="https://map.baidu.com" target="_blank">Baidu Maps</a> to check commute times</li>
            </ul>
            <p><strong>Pro Tip:</strong> Before signing a lease, visit the neighborhood at different times — morning rush hour, evening, and weekend. Check the nearest metro station distance, grocery stores (look for <a href="https://www.womai.com" target="_blank">Womai</a> or <a href="https://www.hema.com" target="_blank">Hema/盒马</a> for delivery), and the general vibe. Join the neighborhood's WeChat group to connect with other expats.</p>
            <div class="ar-source">Sources: <a href="https://www.ziroom.com" target="_blank">Ziroom</a> · <a href="https://www.lianjia.com" target="_blank">Lianjia</a> · <a href="https://www.ke.com" target="_blank">Beike</a> · <a href="https://www.beijing-kids.com" target="_blank">Beijing Kids</a></div>`
        },
        {
            title: 'How to Find an Apartment in China Using Major Rental Platforms (Step-by-Step)',
            content: `<p>If you're a foreigner moving to China, the smartest approach is to use established rental platforms rather than dealing with individual landlords directly. Major platforms offer verified listings, standardized contracts, English support, and dispute resolution — things you won't get from a random landlord on WeChat. Here's a detailed walkthrough of how to find your apartment using China's biggest rental platforms.</p>
            <p><strong>Why Use Big Platforms Instead of Individual Landlords?</strong></p>
            <ul>
                <li><strong>Verified listings</strong> — Platforms like <a href="https://www.ziroom.com" target="_blank">Ziroom</a> and <a href="https://www.lianjia.com" target="_blank">Lianjia</a> send agents to photograph and verify every apartment. What you see online is what you get.</li>
                <li><strong>Standardized contracts</strong> — No surprise clauses. Platform contracts are reviewed by legal teams and follow local regulations.</li>
                <li><strong>Maintenance support</strong> — Something breaks? Submit a repair ticket in the app. With an individual landlord, you're calling someone who may not answer.</li>
                <li><strong>Dispute resolution</strong> — If there's a problem with your deposit or lease, the platform mediates. With a private landlord, you're on your own.</li>
                <li><strong>English support</strong> — Some platforms (especially <a href="https://www.ziroom.com" target="_blank">Ziroom</a>) have English interfaces. Others have English-speaking agents in expat areas.</li>
            </ul>
            <p><strong>Platform 1: Ziroom (自如) — Best for Furnished Apartments</strong></p>
            <p><a href="https://www.ziroom.com" target="_blank">Ziroom</a> is China's largest managed apartment platform. Think of it as the "WeWork of apartments" — everything is standardized, furnished, and move-in ready.</p>
            <ul>
                <li><strong>Website:</strong> <a href="https://www.ziroom.com" target="_blank">ziroom.com</a> (app available on iOS/Android)</li>
                <li><strong>What you get:</strong> Fully furnished apartment with Wi-Fi, washing machine, refrigerator, air conditioning, and basic kitchen. Bi-weekly cleaning service included.</li>
                <li><strong>Price range:</strong> ¥3,000-15,000/month depending on city and room type</li>
                <li><strong>Lease terms:</strong> 1 year minimum. "Ziroom Free" option allows shorter stays at higher rates.</li>
                <li><strong>How to use:</strong> Download the app → select your city → browse listings → schedule viewing → sign contract online → move in</li>
                <li><strong>Payment:</strong> Monthly via app (WeChat Pay/Alipay/bank card). No cash.</li>
                <li><strong>Pros:</strong> No agent fees, everything is standardized, 24/7 maintenance hotline</li>
                <li><strong>Cons:</strong> Slightly more expensive than raw market rate, less personal touch</li>
            </ul>
            <p><strong>Platform 2: Lianjia (链家) — Best for Long-Term Rentals</strong></p>
            <p><a href="https://www.lianjia.com" target="_blank">Lianjia</a> is China's most trusted real estate platform with 200,000+ agents nationwide.</p>
            <ul>
                <li><strong>Website:</strong> <a href="https://www.lianjia.com" target="_blank">lianjia.com</a></li>
                <li><strong>Price range:</strong> ¥2,500-20,000/month — wider range than Ziroom</li>
                <li><strong>Agent fee:</strong> Typically one month's rent</li>
                <li><strong>Pros:</strong> Huge inventory, professional agents, verified ownership certificates (房产证)</li>
                <li><strong>Cons:</strong> Agent fee, app is Chinese-only</li>
            </ul>
            <p><strong>Platform 3: Beike (贝壳找房) — Best for Comparing Options</strong></p>
            <p><a href="https://www.ke.com" target="_blank">Beike</a> is the parent company of Lianjia and acts as a housing aggregator. It pulls listings from Lianjia and dozens of other agencies.</p>
            <ul>
                <li><strong>Website:</strong> <a href="https://www.ke.com" target="_blank">ke.com</a></li>
                <li><strong>Key feature:</strong> "VR看房" (VR house viewing) — tour apartments in 3D from your phone</li>
                <li><strong>Pros:</strong> Largest database, VR tours, transparent pricing history</li>
            </ul>
            <p><strong>Red Flags — Avoid These:</strong></p>
            <ul>
                <li>❌ Landlord asks for deposit before viewing — SCAM</li>
                <li>❌ Price is 30%+ below market rate — bait-and-switch</li>
                <li>❌ No written contract — always insist on one</li>
                <li>❌ Landlord refuses to show 房产证 — may not be the real owner</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.ziroom.com" target="_blank">Ziroom</a> · <a href="https://www.lianjia.com" target="_blank">Lianjia</a> · <a href="https://www.ke.com" target="_blank">Beike</a></div>`
        },
        {
            title: 'How to Set Up Home WiFi in China: Step-by-Step Guide (2026)',
            content: `<p>Unlike some countries where internet is included in the rent, in China you usually need to set up your own home broadband and WiFi. Here's a complete step-by-step guide.</p>
            <p><strong>First: Check if your apartment already has internet</strong></p>
            <p>Ask your landlord or rental agent — is there already an active broadband line from a previous tenant? If yes, you may only need a router. If the service is cancelled, start fresh below.</p>
            <p><strong>Step 1 — Choose an ISP</strong></p>
            <ul>
                <li>📶 <strong>China Mobile (中国移动)</strong> — <a href="tel:10086">10086</a> — Largest mobile network, broadband quality varies by building.</li>
                <li>📶 <strong>China Unicom (中国联通)</strong> — <a href="tel:10010">10010</a> — Good for gaming and international connections.</li>
                <li>📶 <strong>China Telecom (中国电信)</strong> — <a href="tel:10000">10000</a> — Traditionally strongest for landline broadband, stable.</li>
            </ul>
            <p><strong>Step 2 — Check availability</strong></p>
            <p>Call the hotline and ask: "I want to set up home WiFi. Is your service available in my building? What plans do you have?" If one ISP says no, try another — a building may only work with one or two.</p>
            <p><strong>Step 3 — Choose a plan and schedule installation</strong></p>
            <ul>
                <li>Tell the hotline your address and choose a plan: 100 Mbps (streaming/work), 200-500 Mbps (gaming/multiple devices).</li>
                <li>Price: approx. ¥600-¥1500/year. Yearly payment is cheaper.</li>
                <li>The hotline will schedule a time for a technician to visit your apartment.</li>
            </ul>
            <p><strong>Step 4 — Installation day: pay on the spot</strong></p>
            <p>The technician comes to your apartment. They bring the modem/router (光猫), set up everything, and you pay them directly on the spot — no need to visit a service hall (营业厅). Payment: WeChat, Alipay, or cash. Have your passport ready (they may need to take a photo of it for registration).</p>
            <p><strong>Step 5 — Setup complete</strong></p>
            <p>The technician connects the fibre optic port, sets up WiFi, and gives you the SSID and password. You don't need a separate router — but you can add one later for better range.</p>
            <p><strong>Step 6 — Test and keep info</strong></p>
            <p>Make sure all devices connect. Save your broadband account number and technician's contact. Ask for an invoice (发票) if needed.</p>
            <p><strong>⚠️ Tips for foreigners:</strong></p>
            <ul>
                <li>Hotline and technician rarely speak English — have a Chinese friend or translation app ready.</li>
                <li>Registration linked to your passport number.</li>
                <li>Most plans are 12 months. Early cancellation may forfeit remaining months.</li>
                <li>Moving? Call ISP to apply for "移机" (moving service) — small fee may apply.</li>
            </ul>
            <p><strong>Useful phrases:</strong></p>
            <ul>
                <li>我要装宽带 — Wǒ yào zhuān kuāndài — I want to install broadband</li>
                <li>有WiFi吗？ — Yǒu WiFi ma? — Is there WiFi?</li>
                <li>我要开发票 — Wǒ yào kāi fāpiào — I need an invoice</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.10086.cn" target="_blank">China Mobile</a> · <a href="https://www.10010.com" target="_blank">China Unicom</a> · <a href="https://www.189.cn" target="_blank">China Telecom</a></div>`
        }
    ]
,
    sim: [
        {
            title: 'SIM Card Rules for Foreigners in China: One Passport, One Card, and the Cancellation Trap (2026)',
            content: `<p>Getting a SIM card in China seems simple — walk into a carrier store, show your passport, get a card. But there's a critical rule that catches many foreigners off guard: <strong>each foreign passport can only register one SIM card per carrier at a time</strong>. And if you registered a card in a different city and want to cancel it, you may have to travel back to that city in person. This article explains the rules, the sources, and how to avoid getting stuck.</p>
            <p><strong>The Legal Basis: 工信部令第25号</strong></p>
            <p>The foundation of China's SIM card registration system is the <strong>《电话用户真实身份信息登记规定》</strong> (Provisions on Registration of Real Identity Information of Telephone Users), issued by the <a href="https://www.miit.gov.cn" target="_blank">Ministry of Industry and Information Technology (MIIT/工信部)</a> as <strong>Order No. 25</strong>, effective September 1, 2013.</p>
            <p>Key provisions:</p>
            <ul>
                <li><strong>Article 6:</strong> Telecom operators must require users to present valid ID and provide real identity information when registering.</li>
                <li><strong>Article 7(4):</strong> <strong>Foreign citizen passports (外国公民护照)</strong> are listed as valid identification documents for SIM card registration.</li>
                <li><strong>Article 9:</strong> Operators must verify and record the ID type, name, number, and address from the document.</li>
            </ul>
            <p>Full text: <a href="https://baike.baidu.com/item/%E7%94%B5%E8%AF%9D%E7%94%A8%E6%88%B7%E7%9C%9F%E5%AE%9E%E8%BA%AB%E4%BB%BD%E4%BF%A1%E6%81%AF%E7%99%BB%E8%AE%B0%E8%A7%84%E5%AE%9A" target="_blank">百度百科 — 电话用户真实身份信息登记规定</a></p>
            <p><strong>The "One SIM Per Passport" Rule</strong></p>
            <p>While Order No. 25 establishes real-name registration, the <strong>one-SIM-per-passport-per-carrier</strong> limit comes from additional anti-fraud regulations. In 2016, MIIT issued <strong>工信部网安〔2016〕182号</strong>, which requires carriers to limit the number of SIM cards per identity document to prevent fraud.</p>
            <p>In practice:</p>
            <ul>
                <li><strong>Chinese citizens (身份证):</strong> Can register up to 5 SIM cards per carrier (15 total across all three carriers)</li>
                <li><strong>Foreigners (护照/Passport):</strong> Typically limited to <strong>1 SIM card per carrier</strong>. Some carriers allow 2-3, but this varies by province and store policy.</li>
                <li><strong>Why stricter for foreigners?</strong> Anti-fraud measures. Foreign passports are harder to verify in real-time, and the system limits exposure to potential fraud.</li>
            </ul>
            <p><strong>The Cancellation Trap: "Must Return to Original Store"</strong></p>
            <p>This is the policy that frustrates foreigners the most. When you want to cancel (注销) a SIM card, the carrier may tell you that you <strong>must go back to the original business hall (营业厅) where you registered the card</strong> to cancel it in person.</p>
            <p>Why does this exist?</p>
            <ul>
                <li>Each province's carrier system operates semi-independently. Your account data is stored in the provincial system where you registered.</li>
                <li>Cross-region cancellation requires data transfer between provincial systems, which historically wasn't supported.</li>
                <li>The policy prevents fraud — someone can't cancel your SIM card at a random store without your original registration data.</li>
            </ul>
            <p><strong>Has this been fixed?</strong> Partially. In November 2018, MIIT issued a notice requiring all three carriers to implement <strong>cross-region SIM cancellation (异地销户)</strong> by January 1, 2019. However, implementation has been inconsistent:</p>
            <ul>
                <li><strong>China Mobile:</strong> Supports cross-region cancellation at most flagship stores in Tier 1 cities. Call 10086 first to confirm.</li>
                <li><strong>China Unicom:</strong> Supports cross-region cancellation at designated stores. Call 10010 to find the nearest store that handles it.</li>
                <li><strong>China Telecom:</strong> Most limited — still often requires return to original city. Call 10000 for guidance.</li>
            </ul>
            <p>Reality check: Even with the policy change, many frontline staff still don't know how to process cross-region cancellation. You may need to escalate to a manager or call the carrier's customer service hotline to get it done.</p>
            <p><strong>How to Avoid the Cancellation Trap:</strong></p>
            <ul>
                <li><strong>Register your SIM in the city where you'll stay long-term.</strong> Don't get a SIM in a transit city just because it's convenient at the airport.</li>
                <li><strong>Keep your SIM active.</strong> If you stop paying, the carrier will eventually reclaim the number, but this takes 3-6 months and may affect your credit record with that carrier.</li>
                <li><strong>Before leaving a city,</strong> go to the carrier's flagship store and cancel in person. Bring your passport and SIM card.</li>
                <li><strong>If you're already stuck,</strong> call the carrier's hotline (10086/10010/10000) and ask for cross-region cancellation (异地销户). Be persistent — ask for a supervisor if the frontline agent says it's impossible.</li>
            </ul>
            <p><strong>How to Get a SIM Card: Step-by-Step</strong></p>
            <ol>
                <li><strong>Choose a carrier.</strong> China Mobile has the best coverage. China Unicom is best for iPhones. China Telecom is cheapest.</li>
                <li><strong>Find a flagship store (旗舰店).</strong> Don't go to small authorized resellers — they may not handle foreign passports. Use the carrier's website or app to find the nearest flagship store.</li>
                <li><strong>Bring:</strong> Your passport (original, not copy), and your phone (they'll test the SIM).</li>
                <li><strong>Choose a plan.</strong> Minimum plans start at ¥49-58/month with 20-30GB data. Ask for a "new user promotion" (新用户优惠) — you'll often get extra data or a discount for the first 6-12 months.</li>
                <li><strong>Pay.</strong> Monthly plans are auto-deducted via bank card or Alipay/WeChat Pay. You can also prepay at the store.</li>
                <li><strong>Activate.</strong> The SIM is usually active within 1-2 hours. Some plans activate instantly.</li>
            </ol>
            <p><strong>Essential Phone Numbers:</strong></p>
            <ul>
                <li>📞 <strong>10086</strong> — China Mobile customer service</li>
                <li>📞 <strong>10010</strong> — China Unicom customer service</li>
                <li>📞 <strong>10000</strong> — China Telecom customer service</li>
                <li>📞 <strong>110</strong> — Police emergency</li>
                <li>📞 <strong>120</strong> — Ambulance</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.miit.gov.cn" target="_blank">MIIT (工信部)</a> · <a href="https://baike.baidu.com/item/%E7%94%B5%E8%AF%9D%E7%94%A8%E6%88%B7%E7%9C%9F%E5%AE%9E%E8%BA%AB%E4%BB%BD%E4%BF%A1%E6%81%AF%E7%99%BB%E8%AE%B0%E8%A7%84%E5%AE%9A" target="_blank">工信部令第25号 全文</a> · <a href="https://www.10086.cn" target="_blank">China Mobile</a> · <a href="https://www.10010.com" target="_blank">China Unicom</a> · <a href="https://www.189.cn" target="_blank">China Telecom</a></div>`
        }
    ],
    hospital: [
        {
            title: "A Foreigner's Guide to Seeing a Doctor in Beijing (2026)",
            content: `<p>This guide walks you through the complete process of seeing a doctor at a Beijing hospital — from booking your appointment to collecting your medication and insurance documents.</p>
            <h3>Step 1 — Register and Choose a Hospital</h3>
            <ul>
                <li>Open the <strong>Jingtong (京通)</strong> Mini Program in WeChat.</li>
                <li>Select <strong>Passport</strong> as your login method.</li>
                <li>Enter your passport information and log in.</li>
                <li>Tap <strong>Medical Services / Appointment Registration</strong>.</li>
                <li>Search for and select the hospital you want to visit.</li>
                <li>Choose: <strong>Department</strong>, <strong>Doctor</strong>, <strong>Date and Time</strong>.</li>
                <li>Confirm and submit your appointment.</li>
            </ul>
            <h3>Step 2 — Get a Queue Number at the Hospital</h3>
            <ul>
                <li>Arrive at the hospital before your appointment time.</li>
                <li>Use a self-service kiosk to:
                    <ul>
                        <li>Scan your passport or appointment QR code.</li>
                        <li>Print your registration slip / queue ticket.</li>
                    </ul>
                </li>
                <li>Go to the department or floor shown on your slip.</li>
                <li>Check in at the front desk or scan the department QR code.</li>
                <li>Wait for your queue number to appear on the screen.</li>
            </ul>
            <h3>Step 3 — See the Doctor</h3>
            <ul>
                <li>Enter the consultation room when your number is called.</li>
                <li>Explain your symptoms to the doctor.</li>
                <li>The doctor may diagnose immediately, or order laboratory tests, imaging, or other examinations.</li>
            </ul>
            <h3>Step 4 — Complete Lab Work (If Required)</h3>
            <p><strong>Pay First</strong></p>
            <ul>
                <li>Take the test order to a payment counter or self-service kiosk.</li>
                <li><mark>Complete payment before testing.</mark></li>
            </ul>
            <p><strong>Specimen Collection</strong></p>
            <ul>
                <li>Go to the designated Specimen Collection Room.</li>
                <li>Present your payment receipt or QR code.</li>
                <li>Complete the required test (blood test, urine test, etc.).</li>
            </ul>
            <p><strong>Get Results</strong></p>
            <ul>
                <li>Results are usually available within 30 minutes to a few hours.</li>
                <li>Print your report at a self-service kiosk using your QR code.</li>
            </ul>
            <h3>Step 5 — Return to the Doctor</h3>
            <ul>
                <li>Bring your test results back to the doctor.</li>
                <li>The doctor will review the results, confirm the diagnosis, and prescribe medication if needed.</li>
                <li>This is a good time to ask about dosage, side effects, and medication instructions.</li>
            </ul>
            <h3>Step 6 — Get Medicine at the Pharmacy</h3>
            <p>Most hospital pharmacies are located on the 1st or 2nd floor.</p>
            <p><strong>Pay for Medication</strong></p>
            <ul>
                <li>Use a self-service kiosk or pharmacy counter.</li>
                <li>Scan your prescription, confirm the medication cost, and complete payment.</li>
            </ul>
            <p><strong>Pick Up Medication</strong></p>
            <ul>
                <li>Wait for your number to be called.</li>
                <li>Collect your medication at the pharmacy window.</li>
                <li>Verify: <strong>medication name</strong>, <strong>quantity</strong>, and <strong>instructions</strong>.</li>
            </ul>
            <h3>Step 7 — Collect Documents for Insurance Claims</h3>
            <p>Before leaving the hospital, print and keep:</p>
            <ul>
                <li>Official receipts (发票)</li>
                <li>Payment records</li>
                <li>Laboratory reports</li>
                <li>Examination reports</li>
                <li>Prescription records</li>
            </ul>
            <p><mark>Many international insurance providers require original receipts, medical reports, and proof of payment for reimbursement.</mark></p>
            <h3>Important Notes</h3>
            <ul>
                <li>Large hospitals in Beijing often have <strong>International Medical Departments</strong> or English-speaking staff.</li>
                <li>China does not use a family doctor referral system. You can usually <strong>book specialists directly</strong>.</li>
                <li><mark>Most services require payment before treatment, testing, or medication.</mark></li>
                <li>International insurance is often reimbursed afterward, so <mark>keep all documents</mark>.</li>
                <li><mark>Always carry your original passport when visiting a hospital.</mark></li>
            </ul>
            <h3>Simple Flow</h3>
            <p>Jingtong Login → Choose Hospital → Make Appointment → Get Queue Number → See Doctor → Lab Work (if needed) → Return to Doctor → Pay and Collect Medicine → Print Receipts and Reports</p>
            <div class="ar-source">Sources: <a href="http://www.nhc.gov.cn" target="_blank">National Health Commission</a> · <a href="https://www.beijing.gov.cn" target="_blank">Beijing Municipal Government</a></div>`,
            pdfImagesBefore: [
                { src: 'images/doctor-beijing-01-registration-flow.jpg', label: 'Registration Process (挂号流程)' },
                { src: 'images/doctor-beijing-02-medical-visit-flow.jpg', label: 'Medical Visit Process (就医流程)' }
            ],
            pdfImages: []
        }
    ],
    cultural: [
        {
            title: 'Why China Loves When Foreigners Wear Hanfu and Ethnic Clothing',
            content: `<p>If you've ever walked through a Chinese city wearing a hanfu (汉服, traditional Chinese clothing) or other ethnic minority garments, you've probably experienced something unexpected: huge smiles, requests for photos, and people telling you "好看!" (hǎokàn — beautiful!). This reaction isn't random — it reflects deep cultural values about hospitality, cultural pride, and the Chinese concept of "天下" (tiānxià — "all under heaven").</p>
            <p><strong>The Cultural Context: Why Chinese People Are Thrilled</strong></p>
            <p>In Chinese culture, when a foreigner voluntarily embraces Chinese traditions — wearing hanfu, learning Chinese calligraphy, eating with chopsticks, or celebrating Spring Festival — it's seen as the highest form of cultural respect. The Chinese concept of "有朋自远方来，不亦乐乎" (yǒu péng zì yuǎnfāng lái, bù yì lè hū — "Is it not a joy to have friends come from afar?", from Confucius) is deeply ingrained in the national psyche.</p>
            <p>Unlike some cultures where wearing traditional clothing of another culture might be viewed as appropriation, Chinese culture generally views it as appreciation. The key difference is the concept of "文化自信" (wénhuà zìxìn — "cultural confidence") — China's growing pride in its 5,000-year heritage. When foreigners participate, it validates that pride.</p>
            <p><strong>Hanfu: A Living Tradition</strong></p>
            <p>Hanfu (汉服) has experienced a massive revival in China, especially among Gen Z. The hanfu market exceeded ¥10 billion in 2023. Major cities have hanfu rental shops near tourist areas where you can rent a complete outfit for ¥50-200 for a day. Popular locations include:</p>
            <ul>
                <li>🏯 <strong>Xi'an</strong> — The hanfu capital. Near the Terracotta Army and Muslim Quarter, dozens of rental shops offer Tang Dynasty-style outfits. Walking in the Ancient City Wall area in hanfu is a quintessential experience.</li>
                <li>🏛️ <strong>Beijing</strong> — Near the Forbidden City and Nanluoguxiang. Many visitors rent Ming Dynasty-style hanfu for photos against the palace backdrop.</li>
                <li>🌸 <strong>Hangzhou</strong> — West Lake area. Song Dynasty-style hanfu in the gardens is incredibly photogenic.</li>
                <li>🎭 <strong>Luohe / Kaifeng</strong> — Song Dynasty theme parks where hanfu rental is included with entry.</li>
            </ul>
            <p><strong>Ethnic Minority Clothing</strong></p>
            <p>China has 55 officially recognized ethnic minorities, each with distinctive clothing. Popular among tourists:</p>
            <ul>
                <li>🌺 <strong>Miao (苗族)</strong> — Elaborate silver headdresses and embroidered garments. Common in Guizhou and Yunnan.</li>
                <li>🧣 <strong>Tibetan (藏族)</strong> — Chuba robes with colorful sashes. Popular in Lhasa and western China.</li>
                <li>👗 <strong>Dai (傣族)</strong> — Flowing, Southeast Asian-style garments. Common in Yunnan's Xishuangbanna.</li>
                <li>🎀 <strong>Korean-Chinese (朝鲜族)</strong> — Chima jeogi dresses. Popular in Yanbian, Jilin province.</li>
            </ul>
            <p><strong>What to Expect When Wearing Traditional Clothing</strong></p>
            <ul>
                <li>📸 <strong>Photo requests</strong> — Strangers will ask to take photos with you. This is normal and friendly, not creepy.</li>
                <li>💬 <strong>Compliments</strong> — People will say "好看!" (beautiful), "漂亮!" (pretty), or "你好厉害!" (you're amazing).</li>
                <li>🛍️ <strong>Discounts</strong> — Some tourist attractions offer free entry or discounts if you're wearing hanfu.</li>
                <li>📱 <strong>Social media moments</strong> — Don't be surprised if someone films a short video with you for Douyin (TikTok).</li>
            </ul>
            <p><strong>Tips for Wearing Hanfu Respectfully</strong></p>
            <ul>
                <li>Don't wear it as a joke or costume — treat it with respect</li>
                <li>Learn the basic wearing method (the lapel wraps left over right for living people, right over left for the deceased)</li>
                <li>If unsure, ask the rental shop to help you dress</li>
                <li>Avoid mixing incompatible dynasty styles</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.thepaper.cn/newsDetail_forward_25376489" target="_blank">澎湃新闻 — 汉服产业报告</a> · <a href="http://www.gov.cn" target="_blank">中国政府网 — 民族文化</a></div>`
        },
        {
            title: '"老外" Is Not Rude: Understanding Chinese Nicknames and Terms for Foreigners',
            content: `<p>One of the first things foreigners in China notice is being called "老外" (lǎowài). Some newcomers feel offended, thinking it means "old foreigner" or is somehow disrespectful. In reality, it's one of the most common and generally neutral-to-friendly terms Chinese people use for foreigners. To understand why, you need to understand how the Chinese prefix "老" (lǎo — "old") works in names.</p>
            <p><strong>The "老 + Surname" Convention: A Sign of Familiarity</strong></p>
            <p>In Chinese, adding "老" (lǎo) before someone's surname is a common, affectionate way to address friends, colleagues, and acquaintances. It signals familiarity and warmth — NOT that the person is old:</p>
            <ul>
                <li>老王 (Lǎo Wáng) — "Old Wang" = a friendly way to refer to someone named Wang</li>
                <li>老李 (Lǎo Lǐ) — "Old Li" = same, for someone named Li</li>
                <li>老张 (Lǎo Zhāng) — "Old Zhang" = same, for someone named Zhang</li>
                <li>老刘 (Lǎo Liú) — "Old Liu" = same, for someone named Liu</li>
            </ul>
            <p>This is used for people of ALL ages — a 25-year-old named Wang can be called 老王 by friends and colleagues. It's equivalent to saying "mate" in British English or "dude" in American English. Nobody is commenting on age.</p>
            <p><strong>So What Does "老外" Actually Mean?</strong></p>
            <p>"老外" follows the same pattern — "老" (lǎo) + "外" (wài, short for 外国人 wàiguórén, "foreigner"). It literally means something like "the foreigner" in a casual, familiar way. It's the same linguistic pattern as 老王, 老李, etc.</p>
            <p>The term became popular in the 1980s-90s as China opened up and more foreigners visited. It's roughly equivalent to:</p>
            <ul>
                <li>"Expat" in English (neutral descriptor)</li>
                <li>"Gaijin" (外人) in Japanese (though gaijin can carry more nuance)</li>
                <li>"Gringo" in Latin American Spanish (can be neutral or slightly teasing, depending on context)</li>
            </ul>
            <p><strong>Tone Matters: When Is It Friendly vs. Slightly Rude?</strong></p>
            <ul>
                <li>✅ <strong>Friendly/Neutral:</strong> "那个老外中文说得真好！" (That foreigner's Chinese is really good!) — This is a compliment.</li>
                <li>✅ <strong>Friendly/Neutral:</strong> "你是老外吧？" (You're a foreigner, right?) — Just a casual observation.</li>
                <li>⚠️ <strong>Possibly dismissive:</strong> "老外不懂的" (Foreigners don't understand this) — Can be slightly condescending, but usually not hostile.</li>
                <li>❌ <strong>Rarely rude:</strong> Shouted at someone aggressively — but this is extremely uncommon.</li>
            </ul>
            <p><strong>Other Terms for Foreigners You Might Hear</strong></p>
            <ul>
                <li>外国人 (wàiguórén) — "Foreign person." Formal, neutral, used in official contexts.</li>
                <li>外籍人士 (wàijí rénshì) — "Foreign national." Very formal, used in legal/official documents.</li>
                <li>洋人 (yángrén) — "Ocean person." Older term from the colonial era. Rarely used today, can sound old-fashioned.</li>
                <li>歪果仁 (wāiguǒrén) — Internet slang/meme pronunciation of 外国人. Playful, not offensive.</li>
                <li>国际友人 (guójì yǒurén) — "International friend." Used in formal/political contexts. Very polite.</li>
            </ul>
            <p><strong>The Flip Side: Chinese Nicknames for Each Other</strong></p>
            <p>Chinese people use nickname prefixes for everyone, not just foreigners:</p>
            <ul>
                <li>小 + surname (xiǎo — "little"): 小王, 小李 — for younger people or juniors</li>
                <li>老 + surname (lǎo — "old"): 老王, 老李 — for peers or slightly older people</li>
                <li>大 + surname (dà — "big"): 大刘, 大张 — for someone who's tall or older</li>
                <li>阿 + surname (ā): 阿明, 阿花 — common in southern China, very affectionate</li>
            </ul>
            <p><strong>Bottom Line</strong></p>
            <p>If someone calls you "老外," smile — they're treating you like a familiar presence in their community, not insulting you. If it bothers you, you can gently say "叫我[你的名字]就好" (jiào wǒ [name] jiù hǎo — "Just call me [name]") and most people will happily switch.</p>
            <div class="ar-source">Sources: <a href="https://baike.baidu.com/item/%E8%80%81%E5%A4%96" target="_blank">百度百科 — 老外</a> · <a href="http://www.moe.gov.cn" target="_blank">教育部语言文字应用研究所</a></div>`
        },
        {
            title: 'Shopping Culture Shock: Bargaining, Staff Following You, and Why They Seem "Pushy"',
            content: `<p>If you've just arrived in China and went shopping, you might have experienced some things that felt uncomfortable or confusing: a shop assistant following you around the store, a market vendor physically trying to pull you into their stall, or being expected to haggle over prices. These behaviors are deeply rooted in Chinese shopping culture and understanding them will transform your shopping experience from stressful to fun.</p>
            <p><strong>Why Staff Follow You Around the Store</strong></p>
            <p>In Western retail, having an employee follow you often signals suspicion (are you shoplifting?). In China, it's the opposite — it's a form of customer service called "跟客" (gēn kè, "following the customer"). Here's why:</p>
            <ul>
                <li>🎯 <strong>Proactive service</strong> — Staff are trained to be immediately available when you need help. In Chinese retail culture, waiting for a customer to ask is considered lazy service.</li>
                <li>💰 <strong>Commission-based pay</strong> — Many store employees earn commission (提成 tíchéng). Their income depends on making sales, so they want to be near you to answer questions and close deals.</li>
                <li>🏪 <strong>Cultural expectation</strong> — Chinese customers often expect attentive service. A store where nobody approaches you might be seen as having poor service.</li>
                <li>📱 <strong>Loss prevention</strong> — Yes, some of it is also anti-theft, especially in cosmetics, electronics, and luxury stores. This is more practical than accusatory.</li>
            </ul>
            <p><strong>How to Handle It:</strong></p>
            <ul>
                <li>"我随便看看" (wǒ suíbiàn kànkan — "I'm just browsing") — This is the magic phrase. Staff will usually give you some space.</li>
                <li>"不用了，谢谢" (bú yòng le, xièxiè — "No need, thanks") — Polite but firm.</li>
                <li>A simple smile and nod acknowledges their presence without engaging further.</li>
                <li>Don't take it personally — they do this to every customer, not just foreigners.</li>
            </ul>
            <p><strong>The Art of Bargaining (砍价 kǎnjià)</strong></p>
            <p>Bargaining is expected (and fun!) at many types of shops in China, but NOT everywhere:</p>
            <p><strong>✅ Always bargain:</strong></p>
            <ul>
                <li>🛍️ Markets (市场 shìchǎng) — Silk Market (Beijing), Yuyuan Market (Shanghai), Shun Kang Market (various cities)</li>
                <li>🏪 Small electronics shops</li>
                <li>👕 Clothing stores in non-mall settings</li>
                <li>🎨 Souvenir and gift shops near tourist attractions</li>
                <li>🚗 Car repair shops (non-chain)</li>
            </ul>
            <p><strong>❌ Never bargain:</strong></p>
            <ul>
                <li>🏬 Shopping malls (商场 shāngchǎng) — Fixed prices, no negotiation</li>
                <li>🏪 Chain stores (优衣库, H&M, etc.) — Standard retail</li>
                <li>🍽️ Most restaurants — Fixed menu prices</li>
                <li>💊 Pharmacies — Government-regulated prices</li>
                <li>🛒 Supermarkets — Fixed prices</li>
            </ul>
            <p><strong>Bargaining Tips:</strong></p>
            <ul>
                <li>Start at 30-50% of the asking price at tourist markets. The vendor expects this.</li>
                <li>Walk away — the most powerful bargaining tool. If the vendor calls you back, you're close to their real price.</li>
                <li>Buy multiple items from the same vendor for better discounts ("打包价" dǎbāo jià — "bundle price").</li>
                <li>Use a calculator or phone to show numbers — avoids language barriers.</li>
                <li>Be friendly and smile — aggressive bargaining makes everyone uncomfortable.</li>
                <li>"太贵了!" (tài guì le! — "Too expensive!") is the standard opener.</li>
                <li>"便宜一点" (piányi yīdiǎn — "Make it cheaper") works well as a follow-up.</li>
            </ul>
            <p><strong>Street Vendor "Hard Sell" — What's Really Happening</strong></p>
            <p>In tourist areas (especially in cities like Beijing, Xi'an, Guilin), you may encounter street vendors who are very persistent — grabbing your arm, blocking your path, or following you. This can feel aggressive, but understanding the context helps:</p>
            <ul>
                <li>Their livelihood depends on tourist sales. They have seconds to get your attention.</li>
                <li>In Chinese business culture, persistence is seen as dedication, not rudeness.</li>
                <li>"不要" (bú yào — "Don't want") with a hand wave is the standard rejection. Repeat if needed.</li>
                <li>Don't make eye contact or slow down if you're not interested — any engagement is seen as potential interest.</li>
                <li>If someone puts something in your hand (a bracelet, a fan), just put it down and walk away. You have no obligation to buy.</li>
            </ul>
            <p><strong>The "Tea Scam" and Tourist Traps</strong></p>
            <p>Be aware of a common scam in tourist areas: friendly "students" invite you to a "traditional tea ceremony" or "art exhibition," then present a bill for hundreds or thousands of yuan. Other common scams:</p>
            <ul>
                <li>☕ Tea ceremony scam — "Let me show you a traditional tea house!" → ¥500+ bill</li>
                <li>🎨 Art student scam — "Come see my school's exhibition!" → Pressure to buy paintings</li>
                <li>📸 Photo scam — Someone in costume takes a photo with you, then demands ¥50-100</li>
            </ul>
            <p><strong>Rule of thumb:</strong> If a stranger approaches YOU in a tourist area with an unsolicited invitation, politely decline.</p>
            <p><strong>Where to Shop for the Best Experience</strong></p>
            <ul>
                <li>🏬 <strong>Malls</strong> — Fixed prices, clean, air-conditioned. Mix of Chinese and international brands.</li>
                <li>🛒 <strong>Taobao/JD.com</strong> — Online shopping paradise. Everything is cheaper than in stores.</li>
                <li>🏪 <strong>Wet markets (菜市场)</strong> — For fresh produce. Bargaining expected. Authentic local experience.</li>
                <li>🪡 <strong>Fabric markets</strong> — Get custom-tailored clothes at a fraction of Western prices. Bargaining essential.</li>
            </ul>
            <div class="ar-source">Sources: <a href="https://www.amap.com" target="_blank">高德地图</a> · <a href="https://www.taobao.com" target="_blank">淘宝</a> · <a href="https://www.thebeijinger.com/blog" target="_blank">The Beijinger</a></div>`
        },
        {
            title: 'Food Culture in China: Etiquette, Dietary Restrictions, and Navigating Halal & Religious Food',
            content: `<p>Food is the centerpiece of Chinese social life. Meals are where friendships are forged, business deals are made, and families bond. But for foreigners — especially those with dietary restrictions due to religion, allergies, or personal preference — navigating Chinese food culture can be challenging. This guide covers dining etiquette, how to communicate dietary needs, and the surprisingly robust halal food ecosystem in China.</p>
            <p><strong>Chinese Dining Etiquette: The Essentials</strong></p>
            <p>Dining in China follows unwritten rules that foreigners are not expected to know but will earn huge respect for following:</p>
            <ul>
                <li>🥢 <strong>Chopstick rules:</strong> Never stick chopsticks upright in rice (resembles incense for the dead). Don't point with chopsticks. Don't tap your bowl with them (associated with beggars).</li>
                <li>🍵 <strong>Tea pouring etiquette:</strong> When someone pours you tea, tap two fingers on the table as a "thank you" (叩指礼 kòuzhǐ lǐ). This comes from an old legend about an emperor who poured tea for his servant.</li>
                <li>🪑 <strong>Seating:</strong> The guest of honor sits facing the door. The host sits with their back to the door. Don't sit in the wrong seat — wait for the host to direct you.</li>
                <li>🍽️ <strong>Lazy Susan:</strong> At round tables, dishes rotate counterclockwise. Take food from the dish closest to you. Don't reach across the table.</li>
                <li>🍺 <strong>Drinking culture:</strong> At business meals, the host may toast (敬酒 jìngjiǔ) multiple times. "干杯" (gānbēi — "dry glass") means drain your glass. You can substitute tea or juice — just say "我以茶代酒" (wǒ yǐ chá dài jiǔ — "I'll use tea instead of alcohol").</li>
                <li>🐟 <strong>Fish etiquette:</strong> At formal dinners, the fish head points toward the guest of honor. Don't flip the fish over (superstition: flipping = capsizing a boat, bad luck for fishermen).</li>
                <li>💰 <strong>Paying the bill:</strong> In China, the inviter always pays. "Going Dutch" (AA制 zhì) is becoming more common among young friends but is still rare in formal contexts. Fighting over the bill is a cultural ritual — offer once, then let the host pay.</li>
            </ul>
            <p><strong>Communicating Dietary Restrictions</strong></p>
            <p>The biggest challenge for foreigners with dietary needs is communication. Here are essential phrases:</p>
            <ul>
                <li><strong>Vegetarian:</strong> 我吃素 (wǒ chī sù) — "I eat vegetarian." Note: Chinese vegetarian (素食 sùshí) may still include eggs and dairy. For strict vegan: 我吃纯素 (chún sù).</li>
                <li><strong>No pork:</strong> 我不吃猪肉 (wǒ bù chī zhūròu) — Critical for Muslim, Jewish, and Hindu visitors.</li>
                <li><strong>No alcohol:</strong> 我不喝酒 (wǒ bù hē jiǔ).</li>
                <li><strong>Allergies:</strong> 我对___过敏 (wǒ duì___guòmǐn) — "I'm allergic to ___." Learn the specific allergen in Chinese.</li>
                <li><strong>Halal:</strong> 这是清真的吗？(zhè shì qīngzhēn de ma?) — "Is this halal?"</li>
            </ul>
            <p><strong>⚠️ Important Warning for Religious Dietary Needs</strong></p>
            <p>Many international students from Muslim, Jewish, Hindu, or other religious backgrounds arrive in China unsure about what they can eat. Here's what you need to know:</p>
            <p><strong>🕌 Halal (清真 qīngzhēn) Food in China — A Complete Ecosystem</strong></p>
            <p>China has approximately 20-25 million Muslims (Hui, Uyghur, Kazakh, and other ethnic groups), and the halal food infrastructure is extensive — far more than most foreigners expect:</p>
            <ul>
                <li>🏪 <strong>清真餐厅 (qīngzhēn cāntīng)</strong> — Halal restaurants are found in EVERY Chinese city, not just in the northwest. Look for the green "清真" sign, often with Arabic script.</li>
                <li>🥩 <strong>What's halal:</strong> All beef, lamb, chicken, and fish dishes at certified halal restaurants. These restaurants never use pork or pork-derived products (lard, etc.).</li>
                <li>🕌 <strong>Hui Muslim restaurants</strong> — The most common type of halal restaurant in China. Hui (回族) people are ethnically Chinese Muslims. Their food is essentially Chinese cuisine made halal — beef noodle soup (牛肉面), lamb skewers (羊肉串), hand-pulled noodles (拉面). The food is delicious and widely loved by non-Muslims too.</li>
                <li>🥘 <strong>Uyghur restaurants</strong> — Serve Central Asian-influenced cuisine: big plate chicken (大盘鸡), polo (抓饭 pilaf), naan bread (馕), and lamb kebabs. Common in all major cities.</li>
                <li>📱 <strong>How to find halal restaurants:</strong> Search "清真餐厅" on Dianping (大众点评), Meituan (美团), or Amap (高德地图). You'll find dozens in any city.</li>
            </ul>
            <p><strong>What Foreign Muslims Need to Know:</strong></p>
            <ul>
                <li>✅ Halal food is widely available in China. You will NOT starve.</li>
                <li>✅ Many university campuses have halal canteens (清真食堂) specifically for Muslim students.</li>
                <li>✅ Convenience store snacks are generally safe (packaged foods with ingredient lists). Avoid anything with 猪肉 (pork), 猪油 (lard), or 明胶 (gelatin, which may be pork-derived).</li>
                <li>⚠️ <strong>Chinese "清真" may differ from your country's halal standards.</strong> Some Hui restaurants follow a more relaxed interpretation. If you require strictly certified halal, look for restaurants with Arabic signage and ask about their certification.</li>
                <li>⚠️ <strong>Hot pot (火锅) caution:</strong> Even at non-pork restaurants, hot pot broth may contain pork bones. Always ask: 汤底是清真的吗？(tāngdǐ shì qīngzhēn de ma? — "Is the broth halal?")</li>
                <li>⚠️ <strong>Street food:</strong> Lamb skewers (羊肉串) from Uyghur vendors are almost always halal. Other street food may be cooked in the same oil as pork products.</li>
            </ul>
            <p><strong>Other Religious Dietary Notes:</strong></p>
            <ul>
                <li>✡️ <strong>Kosher:</strong> Extremely limited in China. No kosher certification system exists nationally. Some Jewish communities in Beijing and Shanghai organize kosher food through import. Best option: cook at home or eat vegetarian at halal restaurants.</li>
                <li>🕉️ <strong>Hindu vegetarian:</strong> Chinese vegetarian restaurants (素食餐厅) are Buddhist-influenced and may use garlic and onion (which strict Hindu vegetarians avoid). Specify: 不要蒜不要葱 (bú yào suàn, bú yào cōng — "No garlic, no onion").</li>
                <li>🙏 <strong>Buddhist vegetarian:</strong> Excellent availability. 素食餐厅 (sùshí cāntīng) are found near temples and in most cities. Fully plant-based, often using mock meats (素鸡, 素鸭). Some even mimic seafood textures.</li>
            </ul>
            <p><strong>Common Misconceptions About Chinese Food</strong></p>
            <ul>
                <li>❌ "All Chinese food is spicy" — Only Sichuan and Hunan cuisine are spicy. Cantonese, Jiangsu, and Fujian food are mild.</li>
                <li>❌ "Chinese people eat dogs everywhere" — Dog meat consumption is extremely rare, declining rapidly, and illegal in many cities. You will never encounter it unless you specifically seek it out.</li>
                <li>❌ "You can't find Western food" — Every major city has McDonald's, KFC, Pizza Hut, Starbucks, and many independent Western restaurants.</li>
                <li>❌ "Street food is unsafe" — China's food safety has improved dramatically. Street food at busy stalls is generally safe (high turnover = fresh ingredients). Look for queues — locals know which stalls are good.</li>
            </ul>
            <p><strong>Essential Food Phrases:</strong></p>
            <ul>
                <li>菜单 (càidān) — Menu</li>
                <li>买单 (mǎidān) — "Check, please"</li>
                <li>打包 (dǎbāo) — "To-go box, please"</li>
                <li>不要辣 (bú yào là) — "Not spicy"</li>
                <li>少盐 (shǎo yán) — "Less salt"</li>
                <li>好吃 (hǎochī) — "Delicious" (the most useful Chinese food word!)</li>
            </ul>
            <div class="ar-source">Sources: <a href="http://www.saraa.gov.cn" target="_blank">国家宗教事务局</a> · <a href="https://www.dianping.com" target="_blank">大众点评</a> · <a href="http://www.chinadaily.com.cn" target="_blank">China Daily Food & Culture</a></div>`
        }
    ],
    apps: [
        {
            title: 'Essential China Apps: The Complete Guide by Category',
            content: `<p>Your phone is your everything in China — payments, transport, food delivery, communication, and more. Here's every app you need, organized by category, with setup tips.</p>

            <p><strong>📱 Download Priority (What to Install First):</strong></p>
            <ol>
                <li>🥇 Alipay + WeChat (with payment setup) — BEFORE you fly</li>
                <li>🥈 Amap (高德地图) — Navigation</li>
                <li>🥉 DiDi — Transportation</li>
                <li>4️⃣ Pleco — Dictionary/Translation</li>
                <li>5️⃣ Meituan — Food delivery</li>
                <li>6️⃣ Dianping — Restaurant discovery</li>
                <li>7️⃣ 12306 / Trip.com — Train tickets</li>
                <li>8️⃣ Xiaohongshu — Local tips and hidden gems</li>
            </ol>

            <p><strong>💰 Payment Apps (Most Important!)</strong></p>
            <ul>
                <li>🟢 <strong>Alipay (支付宝)</strong> — The #1 payment app in China. Used everywhere: restaurants, shops, taxis, vending machines, even street food stalls. International credit cards (Visa/Mastercard) now supported. Download before arrival and link your card.</li>
                <li>🟢 <strong>WeChat (微信)</strong> — China's "super app" for messaging, payments, mini-programs, and social media. WeChat Pay is the second most popular payment method. You'll need it to pay, chat, and access services. Download and set up WeChat Pay with your international card.</li>
            </ul>
            <p><strong>Setup tip:</strong> Both Alipay and WeChat now allow international credit card binding. Do this BEFORE you fly to China. Test with a small payment after landing.</p>

            <p><strong>🗺️ Navigation & Maps</strong></p>
            <ul>
                <li>📍 <strong>Amap / Gaode (高德地图)</strong> — The best navigation app in China. Accurate maps, real-time traffic, public transit routes, and walking directions. Google Maps does NOT work well in China. This is essential.</li>
                <li>📍 <strong>Baidu Maps (百度地图)</strong> — Alternative to Amap. Good for searching restaurants and businesses. Some prefer its interface.</li>
                <li>📍 <strong>Apple Maps</strong> — Works okay in China if you're an iPhone user. Uses Amap data underneath. Good enough for basic navigation.</li>
            </ul>

            <p><strong>🚗 Transport & Travel</strong></p>
            <ul>
                <li>🚕 <strong>DiDi (滴滴出行)</strong> — China's Uber. Book taxis, private cars, and shared rides. Integrated into Alipay and WeChat (no separate app needed). Supports English interface.</li>
                <li>🚄 <strong>12306 (铁路12306)</strong> — Official train ticket app. Book high-speed rail and regular train tickets. Accepts international credit cards. Book up to 15 days in advance.</li>
                <li>✈️ <strong>Trip.com (携程)</strong> — Best English-friendly app for booking flights, trains, hotels, and attraction tickets. Small booking fee but excellent English support.</li>
                <li>🚲 <strong>Meituan (美团)</strong> — Scan and rent shared bikes (Meituan Bike / Mobike). Also for food delivery and local deals.</li>
            </ul>

            <p><strong>🍜 Food & Delivery</strong></p>
            <ul>
                <li>🥡 <strong>Meituan (美团)</strong> — #1 food delivery app. Order from any restaurant. Also for grocery delivery, hotel booking, and attraction tickets. Chinese only — use camera translation.</li>
                <li>🥡 <strong>Ele.me (饿了么)</strong> — Second biggest food delivery app. Backed by Alibaba. Similar to Meituan.</li>
                <li>⭐ <strong>Dianping (大众点评)</strong> — China's Yelp. Restaurant reviews, ratings, photos, and deals. Essential for finding good restaurants. Search by location, cuisine, or price range.</li>
                <li>☕ <strong>Luckin Coffee (瑞幸咖啡)</strong> — China's biggest coffee chain. Order ahead and skip the line. Cheaper than Starbucks. ¥9.9-15 per cup.</li>
            </ul>

            <p><strong>💬 Communication & Social</strong></p>
            <ul>
                <li>💚 <strong>WeChat (微信)</strong> — Already listed under payments, but it's also THE messaging app. Everyone uses it. Groups, voice messages, video calls, moments (like Facebook). You cannot survive in China without WeChat.</li>
                <li>📕 <strong>Xiaohongshu / RED (小红书)</strong> — China's Instagram + Pinterest. Discover restaurants, travel tips, hidden gems, and lifestyle content. Very popular with young Chinese. Great for finding trendy spots.</li>
                <li>🎵 <strong>Douyin (抖音)</strong> — Chinese TikTok. Different from international TikTok — more Chinese content, local trends, and useful life hacks.</li>
                <li>🐦 <strong>Weibo (微博)</strong> — China's Twitter. Follow news, celebrities, and trending topics.</li>
            </ul>

            <p><strong>🔤 Translation & Language</strong></p>
            <ul>
                <li>📖 <strong>Pleco</strong> — The BEST Chinese dictionary app. Camera translation, handwriting input, and offline dictionary. Free with premium add-ons. Every foreigner in China uses this.</li>
                <li>📖 <strong>Apple Translate / Microsoft Translator</strong> — Good for offline translation. Download the Chinese language pack before arrival.</li>
                <li>📖 <strong>DeepL</strong> — Best quality translation for longer texts. Works in China without VPN.</li>
            </ul>

            <p><strong>🛒 Shopping & Services</strong></p>
            <ul>
                <li>🛍️ <strong>Taobao (淘宝)</strong> — China's Amazon. Buy anything from clothes to electronics to furniture. Cheap prices, fast delivery. Use Alipay to pay.</li>
                <li>🛍️ <strong>JD.com (京东)</strong> — Premium shopping platform. Better quality control than Taobao. Fast same-day/next-day delivery. Great for electronics and branded goods.</li>
                <li>📦 <strong>Pinduoduo (拼多多)</strong> — Budget shopping. Group-buy deals for ultra-low prices. Quality varies but great for everyday items.</li>
            </ul>

            <p><strong>🎬 Entertainment</strong></p>
            <ul>
                <li>📺 <strong>Bilibili (B站)</strong> — China's YouTube. Anime, gaming, tech reviews, and educational content. Many videos have Chinese subtitles.</li>
                <li>📺 <strong>iQiyi (爱奇艺)</strong> — China's Netflix. Movies, TV shows, and original content. Some English content available.</li>
                <li>🎶 <strong>NetEase Music (网易云音乐)</strong> — Best music app in China. Huge library of Chinese and international music. Great music community and playlists.</li>
                <li>🎮 <strong>Honor of Kings (王者荣耀)</strong> — China's most popular mobile game. Great way to make Chinese friends.</li>
            </ul>

            <div class="ar-source">Sources: Community experiences · <a href="https://www.chinahighlights.com" target="_blank">China Highlights</a> · <a href="https://www.thebeijinger.com" target="_blank">The Beijinger</a></div>`
        }
    ],
    cityGuide_beijing: [
        {
            title: '3 Days in Beijing: The Perfect Couple\'s Itinerary',
            content: `<p>Beijing is one of the most romantic and exciting cities in China for couples. From ancient palaces to hidden hutong bars, this 3-day itinerary covers the best of Beijing — with real addresses, metro stops, and prices.</p>

            <p><strong>📅 Day 1: Imperial Beijing — History & Romance</strong></p>

            <p><strong>🌅 8:30 AM — Forbidden City (故宫)</strong></p>
            <p>Arrive right at opening to beat the crowds. Enter through the south gate (Meridian Gate 午门), walk through the golden halls, and exit through the north gate (Gate of Divine Prowess 神武门). Don't miss the Imperial Garden (御花园) at the back — ancient cypresses and rockeries make it the most romantic corner.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区景山前街4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=故宫博物院" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站A口</span></div></div>
            <p>🕐 8:30–17:00 (Apr-Oct) / 8:30–16:30 (Nov-Mar) | 💰 ¥60 (Apr-Oct) / ¥40 (Nov-Mar) | ⚠️ Must book online 7 days ahead via WeChat mini-program "故宫博物院"</p>

            <p><strong>🏔️ 11:00 AM — Jingshan Park (景山公园)</strong></p>
            <p>Walk out the north gate of the Forbidden City and cross the street. Climb the hill (10 minutes) for the best panoramic view of the entire palace complex. The top pavilion is THE photo spot — the golden roofs stretching out below you is unforgettable.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区景山西街44号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=景山公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">中国美术馆站</span></div></div>
            <p>🕐 6:30–21:00 | 💰 ¥2</p>

            <p><strong>🍜 12:30 PM — Lunch at Guijie Ghost Street (簋街)</strong></p>
            <p>Take a DiDi 10 minutes east. Guijie is Beijing's most famous food street — 1km of restaurants lit up with red lanterns. The signature dish is spicy crayfish (麻辣小龙虾) — messy, fun, and perfect for couples to share. Recommended: Hu Da (胡大饭馆), the most famous crayfish spot on the street.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东直门内大街（簋街全线）/ 胡大饭馆：东直门内大街233号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=胡大饭馆 簋街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">北新桥站/东直门站</span></div></div>
            <p>🕐 11:00–次日6:00（簋街很多店24小时营业）| 💰 ¥100-150/两人</p>

            <p><strong>🛍️ 2:30 PM — Nanluoguxiang (南锣鼓巷)</strong></p>
            <p>A 800-year-old hutong alley turned into Beijing's most charming pedestrian street. Browse quirky shops, grab bubble tea, and explore the side hutongs — Yuer Hutong (雨儿胡同) and Mao'er Hutong (帽儿胡同) are quieter and more authentic. Try the famous 文宇奶店 (Wenyu Dairy) for traditional Beijing yogurt.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区南锣鼓巷</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=南锣鼓巷" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">南锣鼓巷站</span></div></div>
            <p>🕐 全天开放，店铺约10:00-22:00 | 💰 免费入场</p>

            <p><strong>🌙 5:30 PM — Houhai Lake (后海) Sunset & Evening</strong></p>
            <p>Walk west from Nanluoguxiang (15 minutes) to Houhai Lake. Rent a paddle boat (脚踏船) and watch the sunset over the lake — the willow trees, traditional houses, and golden light make it incredibly romantic. After returning the boat, stroll along the bar street (后海酒吧街). Recommended: 望海楼 (Wanghai Lou) for a quiet lakeside drink, or 烤肉季 (Rouji) for famous Beijing lamb BBQ since 1848.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区后海（什刹海西侧）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=后海" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">什刹海站</span></div></div>
            <p>🕐 全天开放 | 🚣 脚踏船 ¥60-80/小时 | 🍺 酒吧 18:00-次日2:00</p>

            <p><strong>📅 Day 2: Great Wall & Date Night</strong></p>

            <p><strong>🧱 8:00 AM — Mutianyu Great Wall (慕田峪长城)</strong></p>
            <p>The most couple-friendly section of the Great Wall. Less crowded than Badaling, beautifully restored, and has a fun toboggan slide down. Take the cable car up to Tower 14, walk east to Tower 20 (best views, fewer people), then walk back and take the toboggan slide down from Tower 6. Allow 3-4 hours total.</p>
            <p>🚗 <strong>Getting there:</strong> Book a private car via DiDi (¥200-300 round trip, 1.5 hours) or take bus 916 Express from Dongzhimen Bus Station (东直门公交站) to Huairou, then transfer to bus H23 (total ¥15, 2 hours).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 怀柔区渤海镇慕田峪村</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=慕田峪长城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 7:30–18:00 (Apr-Oct) / 8:00–17:00 (Nov-Mar) | 💰 ¥40 entry + ¥120 往返缆车 / ¥100 滑道下山</p>

            <p><strong>🍽️ 6:30 PM — Date Night Dinner</strong></p>
            <p>Back in the city, dress up for a special dinner. Choose one:</p>
            <ul>
                <li>🏯 <strong>Dali Courtyard (大理院子)</strong> — Hidden in a hutong near Nanluoguxiang. Yunnan cuisine in a candlelit courtyard with fairy lights. The grilled fish and wild mushroom hotpot are incredible. Intimate, romantic, and very "Beijing." Reserve 2 days ahead.</li>
            </ul>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区南锣鼓巷小经厂胡同67号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=大理院子 南锣鼓巷" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">南锣鼓巷站</span></div></div>
            <p>🕐 11:30–14:00, 17:30–22:00 | 💰 ¥150-200/两人 | 📞 建议提前2天预约</p>
            <ul>
                <li>🍷 <strong>Capital M</strong> — Fine dining at Qianmen with direct Tiananmen views through floor-to-ceiling windows. Western cuisine, excellent wine list. Perfect for anniversaries or proposals.</li>
            </ul>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区前门大街2号3层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=Capital M 前门" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 11:30–14:30, 18:00–22:30 | 💰 ¥400-600/两人 | 📞 建议提前预约</p>

            <p><strong>🍸 9:30 PM — Cocktails at Migas (米家思)</strong></p>
            <p>End the night at Beijing's best rooftop bar. On the 6th floor of Nali Patio in Sanlitun, Migas has an open-air terrace with views over the neon-lit Taikoo Li complex. The sangria and gin cocktails are excellent. On weekends, there's a DJ after 10 PM.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区三里屯路81号那里花园6层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=米家思 三里屯那里花园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">团结湖站</span></div></div>
            <p>🕐 18:00–次日2:00 | 💰 ¥70-100/人/杯</p>

            <p><strong>📅 Day 3: Culture, Food & Hidden Gems</strong></p>

            <p><strong>🏛️ 8:00 AM — Temple of Heaven (天坛)</strong></p>
            <p>More beautiful and less crowded than the Forbidden City. The Circular Mound Altar (圜丘坛) is designed so sound echoes perfectly — stand in the center and whisper to each other, the acoustics are magical. Watch locals doing tai chi, dancing, and playing cards in the long corridors.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区天坛东里甲1号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天坛公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">天坛东门站</span></div></div>
            <p>🕐 6:00–21:00 | 💰 ¥15 (联票¥34含祈年殿/回音壁/圜丘)</p>

            <p><strong>🥟 11:30 AM — Xiaolongbao at Din Tai Fung (鼎泰丰)</strong></p>
            <p>World-famous Taiwanese soup dumplings. Order the pork xiaolongbao (鲜肉小笼) and watch the chefs fold each one with 18 folds through the glass kitchen. The trick: bite a small hole, sip the soup, then dip in vinegar-ginger sauce. It's a fun shared experience.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区建国路87号北京SKP购物中心B1层（多家分店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=鼎泰丰 SKP" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="metro-badge metro-bj-line14">🚇 14号线</span><span class="station-name">大望路站</span></div></div>
            <p>🕐 11:00–21:30 | 💰 ¥100-150/两人</p>

            <p><strong>🎨 2:00 PM — 798 Art District (798艺术区)</strong></p>
            <p>A massive former electronics factory complex turned into Beijing's coolest art zone. Wander through contemporary galleries, street art installations, and hipster cafes. Best spots for couples: UCCA Center for Contemporary Art (尤伦斯当代艺术中心), the graffiti walls, and the rooftop cafe at At Cafe. Great for Instagram photos.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区酒仙桥路4号798艺术区</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=798艺术区" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line14">🚇 14号线</span><span class="station-name">望京南站 + 步行15分钟</span></div></div>
            <p>🕐 10:00–17:00（各画廊时间不同）| 💰 免费入场，个别展馆 ¥10-30</p>

            <p><strong>🍵 4:30 PM — Traditional Tea at Wufu Tea House (五福茶艺馆)</strong></p>
            <p>After walking around 798, sit down for a proper Chinese tea ceremony. The staff will guide you through brewing oolong or pu'er tea in a gaiwan (盖碗). It's a calm, intimate experience — perfect for slowing down together. Learn the "Gongfu" brewing method and taste 3-4 different teas.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区马连道路11号（马连道茶城附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=五福茶艺馆 马连道" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line7">🚇 7号线</span><span class="station-name">湾子站</span></div></div>
            <p>🕐 9:30–21:00 | 💰 ¥80-150/两人（含茶位费和茶点）</p>

            <p><strong>🌆 7:00 PM — Sunset Cocktails at China World Summit Wing (国贸大酒店80层)</strong></p>
            <p>End the trip on the 80th floor of Beijing's tallest building. The Atmosphere Bar has floor-to-ceiling windows with a 360° view of the entire city — the CBD skyline, the mountains in the west, and on clear days, the Great Wall in the distance. Arrive before sunset (around 6:30 PM in summer) to watch the city light up.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 朝阳区建国门外大街1号国贸三期80层</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=国贸大酒店 Atmosphere Bar" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">国贸站</span></div></div>
            <p>🕐 17:00–次日1:00 | 💰 ¥100-150/杯 | 👔 建议穿Smart Casual</p>

            <p><strong>💑 Couple's Tips:</strong></p>
            <ul>
                <li>📸 Best photo spots: Jingshan Park (Forbidden City view), Temple of Heaven echo wall, Great Wall Tower 20, Houhai Lake sunset, 798 graffiti walls, 80th floor skyline</li>
                <li>🌹 Most romantic moments: Paddle boat on Houhai at sunset, whispering at the Temple of Heaven echo wall, rooftop cocktails at Migas</li>
                <li>💰 Budget: ¥600-800/天/两人 (经济) | ¥1500+/天/两人 (享受)</li>
                <li>🚇 交通: 地铁 + 滴滴出行 | 办一张一卡通交通卡（地铁站可买）</li>
                <li>📱 必备App: 大众点评（找餐厅）、小红书（找小众景点）、高德地图（导航）</li>
                <li>🌸 最佳季节: 春天4-5月 / 秋天9-10月 | 避开暑假（7-8月太热）和冬天（12-2月太冷）</li>
            </ul>

            <div class="ar-source">Sources: Community experiences · <a href="https://www.thebeijinger.com" target="_blank">The Beijinger</a> · <a href="https://www.trip.com" target="_blank">Trip.com</a> · <a href="https://www.amap.com" target="_blank">高德地图</a></div>`
        },
        {
            title: '2 Days in Beijing: The Perfect Family Trip with Parents',
            content: `<p>Bringing your parents to Beijing is one of the most meaningful trips you can take. The capital is full of iconic landmarks, incredible food, and moments that will make your parents beam with pride. This 2-day itinerary is designed for a relaxed pace — shorter walks, more rest stops, and all the must-see highlights without the exhaustion.</p>

            <p><strong>📅 Day 1: Classic Beijing — Show Parents the Highlights</strong></p>

            <p><strong>🌅 8:00 AM — Tiananmen Square (天安门广场)</strong></p>
            <p>Start at the heart of China. Tiananmen Square is the world's largest public square and a place every Chinese parent dreams of seeing. Walk across the vast square, take photos with the Monument to the People's Heroes, and soak in the grandeur. If your parents are early risers, come at sunrise (around 5:30 AM in summer) to watch the flag-raising ceremony (升旗仪式) — it's a deeply moving experience for Chinese elders.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区天安门广场</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天安门广场" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站/天安门西站</span></div></div>
            <p>🕐 全天开放 | 💰 免费 | ⚠️ 需刷身份证过安检，外国人需带护照</p>

            <p><strong>🏯 9:00 AM — Forbidden City (故宫)</strong></p>
            <p>Walk through the Tiananmen Gate tower into the Forbidden City — 600 years of imperial history in 72 hectares. <strong>Pace tip for parents:</strong> Don't try to see everything. Walk the central axis from Meridian Gate (午门) to Gate of Divine Prowess (神武门) — this covers all the major halls (太和殿, 中和殿, 保和殿) in about 2 hours. There are benches and rest areas throughout. <strong>Elderly-friendly:</strong> Electric carts (电瓶车) are available at the west gate for ¥10/person — perfect if parents get tired. The Imperial Garden (御花园) at the north end has beautiful ancient trees and is a great rest spot.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区景山前街4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=故宫博物院" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站A口</span></div></div>
            <p>🕐 8:30–17:00 (Apr-Oct) / 8:30–16:30 (Nov-Mar) | 💰 ¥60 (Apr-Oct) / ¥40 (Nov-Mar) | ⚠️ Must book online 7 days ahead via WeChat mini-program "故宫博物院" | 🛒 电瓶车 ¥10/人（西门入口处）</p>

            <p><strong>🦆 12:00 PM — Lunch at Quanjude Roast Duck (全聚德)</strong></p>
            <p>No trip to Beijing with parents is complete without Peking duck, and Quanjude is THE name parents know. Founded in 1864, this is the most famous roast duck restaurant in China — your parents will love telling their friends they ate here. The duck is carved tableside with crispy skin, thin pancakes, scallions, and sweet bean sauce. Order the whole duck (整只烤鸭) for the full experience. The Qianmen main branch has the most history and atmosphere.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区前门大街30号（前门总店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=全聚德 前门大街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 11:00–14:00, 16:30–20:30 | 💰 ¥200-300/桌（整只鸭约¥238）| 📞 建议提前1天预约</p>

            <p><strong>🌿 2:30 PM — Temple of Heaven (天坛)</strong></p>
            <p>The Temple of Heaven is more beautiful and less physically demanding than the Forbidden City — the paths are flat and wide, perfect for parents. The Hall of Prayer for Good Harvests (祈年殿) is an architectural masterpiece with its triple-gable blue roof. Walk through the Long Corridor (长廊) where locals gather to play cards, practice calligraphy, and perform tai chi — parents love watching (and joining!) these activities. The Echo Wall (回音壁) is fun: stand at opposite ends and whisper to each other.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区天坛东里甲1号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天坛公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">天坛东门站</span></div></div>
            <p>🕐 6:00–21:00 | 💰 ¥15 (联票¥34含祈年殿/回音壁/圜丘) | ♿ 全程平坦，适合老人步行</p>

            <p><strong>🛍️ 5:30 PM — Wangfujing Street (王府井大街)</strong></p>
            <p>End Day 1 at Beijing's most famous shopping street. Wangfujing is a pedestrian boulevard with department stores, souvenir shops, and the iconic Wangfujing Snack Street (王府井小吃街) — a night market with dozens of stalls selling everything from lamb skewers to scorpions on sticks (parents will love the photo ops!). Visit the Wangfujing Catholic Church (王府井天主堂) at the north end — a beautiful Gothic church that's a surprising oasis in the middle of the city.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区王府井大街</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=王府井大街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">王府井站</span></div></div>
            <p>🕐 全天开放，店铺约10:00-22:00 | 💰 免费逛街 | 🍡 小吃街 17:00-23:00</p>

            <p><strong>📅 Day 2: Great Wall & Cultural Experience</strong></p>

            <p><strong>🧱 7:30 AM — Mutianyu Great Wall (慕田峪长城)</strong></p>
            <p>The Great Wall is THE reason most parents want to visit Beijing, and Mutianyu is the best section for families. It's less crowded than Badaling, beautifully restored, and most importantly — has a <strong>cable car both up AND down</strong>. This is essential for parents who can't climb steep stairs. Take the cable car up to Tower 14, enjoy the breathtaking views, walk a few towers east (the path is wide and well-maintained), then cable car back down. The toboggan slide (滑道) is also an option for the more adventurous parents!</p>
            <p>🚗 <strong>Getting there:</strong> Book a private car via DiDi (¥200-300 round trip, 1.5 hours each way). This is the most comfortable option for parents. Alternatively, take bus 916 Express from Dongzhimen Bus Station (东直门公交站) to Huairou, then transfer to bus H23 (total ¥15, 2 hours — not recommended for elderly).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 怀柔区渤海镇慕田峪村</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=慕田峪长城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 7:30–18:00 (Apr-Oct) / 8:00–17:00 (Nov-Mar) | 💰 ¥40 entry + ¥120 往返缆车 | ⚠️ 提前在微信小程序购票</p>

            <p><strong>🦆 1:00 PM — Lunch at Siji Minfu (四季民福)</strong></p>
            <p>After the Great Wall, treat parents to another duck experience — this time at Siji Minfu, the locals' favorite. The duck here is slightly different from Quanjude: more crispy, with a fruit-wood aroma. The Dongsi branch (东四十条店) has a beautiful courtyard setting. Order the duck, plus their excellent 芥末鸭掌 (mustard duck feet) and 宫保鸡丁 (kung pao chicken). Parents will appreciate comparing the two duck styles!</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东四十条甲22号（东四十条店）/ 多家分店</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=四季民福 东四十条" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">东四十条站</span></div></div>
            <p>🕐 11:00–14:00, 17:00–21:30 | 💰 ¥150-250/桌 | ⭐ 本地人最爱的烤鸭店</p>

            <p><strong>⛵ 3:30 PM — Summer Palace (颐和园)</strong></p>
            <p>The Summer Palace is the perfect afternoon activity — it's essentially a giant imperial garden with a lake. Take a boat ride on Kunming Lake (昆明湖) — the dragon boat (龙舟) cruises are relaxing and scenic, with views of the Longevity Hill (万寿山) and the famous Seventeen Arch Bridge (十七孔桥). Walk along the Long Corridor (长廊), a 728-meter covered walkway with over 14,000 hand-painted scenes from Chinese mythology. <strong>Parent-friendly:</strong> The boat ride means less walking, and there are plenty of benches along the corridor.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 海淀区新建宫门路19号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=颐和园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="station-name">北宫门站</span></div></div>
            <p>🕐 6:30–18:00 (Apr-Oct) / 7:00–17:00 (Nov-Mar) | 💰 ¥30 (联票¥60含苏州街/佛香阁/德和园) | 🚢 龙舟 ¥10-15/人</p>

            <p><strong>🏮 6:30 PM — Evening Stroll: Liangma River (亮马河) or Nanluoguxiang (南锣鼓巷)</strong></p>
            <p>End the trip with a gentle evening walk. Choose based on your parents' energy level:</p>
            <ul>
                <li>🌊 <strong>Liangma River (亮马河)</strong> — Beijing's newest waterfront promenade in Chaoyang District. Beautifully lit at night with bridges, cafes, and a "Little Venice" vibe. Flat, wide paths perfect for a relaxed stroll. Great for parents who enjoy a modern, upscale atmosphere.</li>
                <li>🏮 <strong>Nanluoguxiang (南锣鼓巷)</strong> — A 800-year-old hutong alley with quirky shops and traditional Beijing snacks. More cultural and traditional. Try the famous 文宇奶店 (Wenyu Dairy) for Beijing yogurt. Parents love the old-world hutong atmosphere.</li>
            </ul>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 亮马河：朝阳区亮马河国际风情水岸 / 南锣鼓巷：东城区南锣鼓巷</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=亮马河国际风情水岸" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line10">🚇 10号线</span><span class="station-name">亮马桥站</span></div></div>
            <p>🕐 亮马河全天开放，灯光18:00-22:00 | 南锣鼓巷店铺约10:00-22:00 | 💰 免费</p>

            <p><strong>👨‍👩‍👧 Family Tips:</strong></p>
            <ul>
                <li>🪑 <strong>Pace is everything:</strong> Don't rush. Plan 2-3 major sights per day max, with long lunch breaks. Parents appreciate quality over quantity.</li>
                <li>♿ <strong>Accessibility:</strong> Forbidden City has electric carts; Temple of Heaven is flat; Mutianyu has cable cars. Avoid Jingshan Park if parents have knee issues (stairs).</li>
                <li>🧻 <strong>Rest stops:</strong> Every major attraction has benches and shaded areas. The Forbidden City and Temple of Heaven both have tea houses inside.</li>
                <li>💳 <strong>Payment:</strong> Set up Alipay/WeChat Pay for parents before the trip. Cash is rarely accepted. ATMs at airports accept international cards.</li>
                <li>🌡️ <strong>Weather:</strong> Beijing is dry and hot in summer (35°C+), cold in winter (-10°C). Spring (April-May) and autumn (Sept-Oct) are ideal. Bring sunscreen, hats, and water bottles.</li>
                <li>🚇 <strong>Transport:</strong> Use DiDi (滴滴出行) for comfort — it's China's Uber. The metro is efficient but can be crowded during rush hour (7-9 AM, 5-7 PM). Get a Yikatong (一卡通) transit card at any metro station.</li>
                <li>📱 <strong>Essential apps:</strong> 高德地图 (navigation), 大众点评 (restaurant reviews), DiDi (ride-hailing), 翻译 (translation)</li>
                <li>🏥 <strong>Medical:</strong> Carry basic medicines (painkillers, stomach meds). International hospitals: 北京协和医院, 北京和睦家医院 (United Family Hospital).</li>
                <li>💰 <strong>Budget:</strong> ¥800-1200/天/家庭 (经济) | ¥2000+/天/家庭 (享受)</li>
                <li>🌸 <strong>Best seasons:</strong> Spring 4-5月 / Autumn 9-10月 | Avoid summer heat (7-8月) and winter cold (12-2月)</li>
            </ul>

            <div class="ar-source">Sources: Community experiences · <a href="https://www.chinahighlights.com" target="_blank">China Highlights</a> · <a href="https://www.trip.com" target="_blank">Trip.com</a> · <a href="https://www.amap.com" target="_blank">高德地图</a></div>`
        },
        {
            title: 'Beijing Traditional Breakfast: 10 Must-Visit Spots Near the Forbidden City & Wangfujing',
            content: `<p>Beijing's traditional breakfast culture (老北京早点 lǎo Běijīng zǎodiǎn) is one of the city's most authentic culinary experiences. While tourists flock to the Forbidden City and Wangfujing, the real magic happens at dawn in the surrounding hutongs, where locals queue up for steaming bowls of douzhī, crispy jiaoquan, and golden youbings. Here are 10 legendary breakfast spots within walking distance of Beijing's top tourist landmarks.</p>

            <p><strong>🥢 What to Expect: A Beijing Breakfast Primer</strong></p>
            <p>A traditional Beijing breakfast is hearty, savory, and unlike anything you'll find in southern China. The "holy trinity" of Beijing breakfast is:</p>
            <ul>
                <li>🥣 <strong>Douzhī (豆汁)</strong> — Fermented mung bean drink. Sour, slightly funky, and absolutely polarizing. Locals love it; most foreigners need 2-3 tries. It's Beijing's ultimate litmus test.</li>
                <li>🫓 <strong>Jiaoquan (焦圈)</strong> — Deep-fried dough rings, crispy like a savory donut. Always paired with douzhī.</li>
                <li>🥞 <strong>Yóutiáo (油条)</strong> — Fried dough sticks. Dip in soy milk or wrap in a jianbing (煎饼). Universal crowd-pleaser.</li>
            </ul>
            <p>Other essentials: miàn chá (面茶, millet paste with sesame), zhū gāo (猪糕, steamed pork cake), luóbo sī bǐng (萝卜丝饼, radish cake), and mén dīng ròu bǐng (门钉肉饼, door-knocker meat pies).</p>

            <p><strong>1. Húguósi Xiǎochī (护国寺小吃) — Huguo Temple Snacks</strong></p>
            <p>The undisputed king of Beijing traditional snacks. Founded in 1956, this state-owned chain preserves recipes that date back centuries. The Huguo Si main branch is the most atmospheric, but the Dianmen branch near the Drum Tower is more convenient for tourists. Order the dòuzhī + jiāoquān combo, àndào cháng (鞍道肠, donkey intestine sausage — better than it sounds), and the táng huǒshāo (糖火烧, sweet sesame flatbread).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区护国寺街68号（护国寺总店）/ 西城区地安门外大街180号（地安门店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=护国寺小吃 护国寺街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=护国寺小吃" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">平安里站</span></div></div>
            <p>🕐 06:00–21:00 | 💰 ¥15–30/person | ⭐ Must-try: 豆汁+焦圈, 糖火烧, 驴打滚</p>

            <p><strong>2. Zēng Shèng Kuí (增盛魁)</strong></p>
            <p>A tiny, no-frills family-run stall near the Drum Tower that's been serving the same menu for 40+ years. No sign, no menu board — just regulars who know exactly what to order. The mén dīng ròu bǐng (门钉肉饼) here are the best in Beijing: thin, crispy shell bursting with juicy beef and scallion. The táng huǒshāo (糖火烧) is also exceptional. Cash only, no seats — you eat standing on the sidewalk like a true Beijinger.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区鼓楼西大街（鼓楼西侧路北）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=增盛魁 鼓楼" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=增盛魁" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">鼓楼大街站</span></div></div>
            <p>🕐 06:00–10:00 (早餐时段) | 💰 ¥10–20/person | ⭐ Must-try: 门钉肉饼, 糖火烧</p>

            <p><strong>3. Bái Kuí Lǎo Hào (白魁老号饭庄)</strong></p>
            <p>Established in 1780 during the Qing Dynasty, Bai Kui is one of Beijing's oldest restaurants. Famous for its shāo yángròu (烧羊肉, roasted lamb) and miàn chá (面茶, millet paste topped with sesame sauce). The Jiaodaokou branch is the most convenient for tourists. The lamb here is slow-roasted for hours until the exterior is caramelized and the interior melts. Their miàn chá is the gold standard — creamy, fragrant, with perfect sesame-to-millet ratio.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区交道口南大街15号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=白魁老号饭庄 交道口" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=白魁老号" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div>
            <p>🕐 06:00–21:00 | 💰 ¥25–50/person | ⭐ Must-try: 烧羊肉, 面茶, 羊杂汤</p>

            <p><strong>4. Nán Lái Shùn (南来顺)</strong></p>
            <p>Nan Laishun is Beijing's Hui Muslim breakfast institution. Located near Niujie (Ox Street) Mosque, it specializes in halal Beijing snacks. The zhà sāng dài (炸桑袋) and dòu miàn huáng (豆面黄) are unique to this shop. Their yáng zá tāng (羊杂汤, lamb offal soup) is the best hangover cure in Beijing — rich, peppery, loaded with tender lamb bits. The atmosphere is authentically old Beijing: communal tables, loud conversations, and zero English.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区南菜园街12号（大观园附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=南来顺饭庄" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=南来顺" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="station-name">陶然亭站</span></div></div>
            <p>🕐 06:00–14:00 | 💰 ¥20–40/person | ⭐ Must-try: 羊杂汤, 豆面黄, 炸桑袋</p>

            <p><strong>5. Dōnghuāmén Yè Shì (东华门美食坊) — Donghuamen Breakfast Street</strong></p>
            <p>Right outside the Forbidden City's east gate (Donghuamen), this cluster of food stalls is the most tourist-friendly traditional breakfast spot. While it's more commercialized than hutong shops, the convenience is unbeatable — grab breakfast before entering the Palace Museum at 8:30 AM. Look for the jiānbing guǒzi (煎饼果子) stalls, shuǐjiǎo (水饺) vendors, and fresh dòujiāng (豆浆, soy milk) stands. Prices are slightly higher (¥15–25/person) but the location is prime.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区东华门大街（故宫东门/东华门外）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=东华门美食" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=东华门美食坊" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站</span></div></div>
            <p>🕐 06:00–10:00 (早餐) | 💰 ¥15–25/person | ⭐ Must-try: 煎饼果子, 豆浆, 水饺</p>

            <p><strong>6. Tiānxīngjū (天兴居) — Tianxing Ju</strong></p>
            <p>Tianxing Ju is famous for one thing: chǎo gān (炒肝, stir-fried liver) — a thick, garlicky stew of pork liver and intestines in starch-thickened broth. It's the most iconic Beijing breakfast dish that tourists rarely try. Founded in 1862, this Qianmen institution serves chǎo gān the traditional way: in a small bowl, eaten by "drinking" it from the edge (never with a spoon — that's the rule). Pair it with bāo zi (包子, steamed buns) for the full experience.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区鲜鱼口街95号（前门大街附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天兴居 鲜鱼口" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=天兴居" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 06:30–14:00 | 💰 ¥15–25/person | ⭐ Must-try: 炒肝, 包子, 卤煮火烧</p>

            <p><strong>7. Lóngfǔ Sì Xiǎochī (隆福寺小吃店)</strong></p>
            <p>Once the heart of old Beijing's snack culture, Longfu Si was devastated by fire in 1993 and never fully recovered its former glory. But the surviving breakfast stalls still serve excellent traditional fare. The dòuzhī (豆汁) here is particularly well-fermented, and the jiāo quān (焦圈) are always fresh. The area around Longfu Si is being redeveloped, so go soon — this piece of old Beijing may not last forever.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区隆福寺街（东四附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=隆福寺小吃" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=隆福寺小吃" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line6">🚇 6号线</span><span class="station-name">东四站</span></div></div>
            <p>🕐 06:00–10:00 | 💰 ¥10–20/person | ⭐ Must-try: 豆汁, 焦圈, 艾窝窝</p>

            <p><strong>8. Dūyī Chù (都一处) — Du Yi Chu</strong></p>
            <p>Du Yi Chu holds a special place in Beijing history: Emperor Qianlong reportedly visited in 1752 and bestowed the restaurant's name, meaning "The Only One." Famous for its shāomài (烧麦, open-top dumplings), the Qianmen flagship is a must-visit. While known for dinner, their breakfast service offers excellent jiaozi (饺子) and porridge. The building itself is a beautifully restored Qing Dynasty structure — eating here feels like stepping into a period drama.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区前门大街38号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=都一处 前门大街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=都一处" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line2">🚇 2号线</span><span class="station-name">前门站</span></div></div>
            <p>🕐 06:30–21:00 | 💰 ¥30–60/person | ⭐ Must-try: 烧麦, 饺子, 小米粥</p>

            <p><strong>9. Jǐnfāng Yuánxiāo (锦芳元宵) — Jinfang Tangyuan</strong></p>
            <p>Jinfang is the undisputed champion of yuánxiāo (元宵, sweet glutinous rice balls) — especially during Lantern Festival when the queue stretches for blocks. But their year-round breakfast menu is equally impressive. The lǘ dǎ gǔn (驴打滚, donkey rolling in the mud — actually a sweet bean-powder-coated rice cake) and ài wō wō (艾窝窝, steamed rice balls with sweet filling) are handmade daily. Their jiāngmí pái (江米排, sticky rice strips) are addictive.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区磁器口大都市街南1楼（磁器口地铁站附近）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=锦芳元宵 磁器口" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=锦芳元宵" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="metro-badge metro-bj-line7">🚇 7号线</span><span class="station-name">磁器口站</span></div></div>
            <p>🕐 06:00–20:00 | 💰 ¥15–30/person | ⭐ Must-try: 驴打滚, 艾窝窝, 元宵(季节性)</p>

            <p><strong>10. Xīsì Bāozi Pù (西四包子铺)</strong></p>
            <p>Don't let the humble name fool you — Xisi Baozi Pu is a Beijing institution. Their zhūròu dà cōng bāozi (猪肉大葱包子, pork and scallion buns) are legendary: fluffy, juicy, and perfectly seasoned. A plate of 10 buns + a bowl of zhōu (粥, congee) is the quintessential Beijing working-class breakfast, and it'll cost you under ¥15. The Xisi location is a short walk from the Forbidden City's northwest corner. Go before 8 AM or face a 30-minute queue.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区西四南大街18号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=西四包子铺" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=西四包子铺" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="station-name">西四站</span></div></div>
            <p>🕐 06:00–13:00 | 💰 ¥10–18/person | ⭐ Must-try: 猪肉大葱包子, 小米粥, 炒肝</p>

            <p><strong>🗺️ Pro Tips for Breakfast Explorers</strong></p>
            <ul>
                <li>⏰ <strong>Go early:</strong> Most traditional spots are best before 8:30 AM. Many items sell out by 9 AM. The real regulars eat at 6:30.</li>
                <li>💵 <strong>Cash helps:</strong> While most places accept WeChat Pay and Alipay, some older stalls (like Zeng Shengkui) are cash-only. Bring small bills.</li>
                <li>🗣️ <strong>Point and smile:</strong> English menus are rare outside Donghuamen. Learn these phrases: "这个" (zhège — "this one"), "多少钱" (duōshǎo qián — "how much"), "好吃" (hǎo chī — "delicious").</li>
                <li>🚫 <strong>Skip the Starbucks:</strong> Seriously. You're in Beijing. Drink dòujiāng (豆浆, soy milk) or miàn chá (面茶) like the locals.</li>
                <li>📱 <strong>Use Dianping:</strong> Download 大众点评 (Dianping) — it's China's Yelp. Search "早点" (zǎodiǎn) or "早餐" (zǎocān) near your hotel for hidden gems.</li>
            </ul>

            <p><strong>🧭 Walking Routes from Tourist Landmarks</strong></p>
            <ul>
                <li>🏯 <strong>From the Forbidden City (故宫):</strong> Exit via Donghuamen → walk to Donghuamen breakfast stalls (5 min) or continue to Longfu Si (15 min walk east).</li>
                <li>🛍️ <strong>From Wangfujing (王府井):</strong> Walk north to Jiaodaokou for Bai Kui (20 min) or take Line 5 one stop to Dongsi for Longfu Si.</li>
                <li>⛩️ <strong>From Qianmen (前门):</strong> Walk into Xianyukou hutong for Tianxing Ju (5 min) or stay on Qianmen Dajie for Du Yi Chu (3 min).</li>
                <li>🥁 <strong>From the Drum Tower (鼓楼):</strong> Walk west for Zeng Shengkui (3 min) or south for Huguo Si Dianmen branch (10 min).</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.dianping.com" target="_blank">大众点评 Dianping</a> · <a href="https://www.thebeijinger.com" target="_blank">The Beijinger</a> · <a href="https://www.timeoutbeijing.com" target="_blank">Time Out Beijing</a> · <a href="https://www.mafengwo.cn" target="_blank">马蜂窝 Mafengwo</a></div>`
        }
    ],
    cityRoutes: [
        {
            title: 'Beijing → Shanghai: The Classic Corridor (4-5 Days)',
            content: `<p>The Beijing–Shanghai corridor is China's most iconic high-speed rail journey, connecting the nation's political capital with its financial hub. This 4-5 day itinerary covers the best of both cities plus the thrilling HSR experience that makes Chinese rail travel legendary.</p>

            <h3>🏯 Day 1-2: Beijing — Imperial Grandeur</h3>

            <p><strong>Morning: The Forbidden City (故宫)</strong></p>
            <p>Start early at the Palace Museum — the world's largest palace complex with 9,999 rooms. Book tickets online at least 3 days in advance via the official WeChat mini-program "故宫博物院" (they sell out fast, especially weekends). Enter through the Meridian Gate (午门, Wǔmén) and exit via the Gate of Divine Prowess (神武门, Shénwǔmén). Budget 3-4 hours minimum. Don't miss the Clock Gallery (钟表馆) and the Treasure Gallery (珍宝馆) — separate ¥10 tickets each.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区景山前街4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=故宫博物院" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><a class="loc-map-link" href="https://map.baidu.com/search?query=故宫博物院" target="_blank"><i class="fas fa-map-marker-alt"></i> 百度地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站</span></div></div>
            <p>🕐 08:30–17:00 (Apr–Oct) / 08:30–16:30 (Nov–Mar) | 💰 ¥60 (Apr–Oct) / ¥40 (Nov–Mar) | ⚠️ Closed Mondays</p>

            <p><strong>Afternoon: Temple of Heaven (天坛)</strong></p>
            <p>Take Metro Line 5 south to Tiantan Dongmen station. The Hall of Prayer for Good Harvests (祈年殿) is the iconic triple-gabled circular building you've seen in every China documentary. The echo wall and circular mound altar are acoustics marvels. The surrounding park is where locals practice tai chi, play jianzi (毽子), and sing opera — the real cultural experience.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区天坛内东里7号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天坛公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">天坛东门站</span></div></div>
            <p>🕐 06:00–21:00 (park) / 08:00–17:00 (buildings) | 💰 ¥15 (park) / ¥34 (through ticket)</p>

            <p><strong>Day 2: The Great Wall at Mutianyu (慕田峪长城)</strong></p>
            <p>Mutianyu is less crowded than Badaling and more restored than Jinshanling — perfect for first-timers. Take bus 916 Express from Dongzhimen hub to Huairou, then transfer to bus H23 or take a taxi (¥50-80). Alternatively, book a private car via Didi for ¥200-300 round trip. The cable car (缆车) saves 45 minutes of steep climbing. Walk from Tower 14 to Tower 23 for the most scenic stretch with fewer crowds.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 怀柔区渤海镇慕田峪村</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=慕田峪长城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:30–18:00 (Apr–Oct) / 08:00–17:00 (Nov–Mar) | 💰 ¥40 (entry) + ¥120 (cable car round trip)</p>

            <p><strong>Evening: Houhai Lake (后海)</strong></p>
            <p>Back in Beijing, unwind at Houhai Lake — a scenic area of hutong alleys, lakeside bars, and live music. Stroll along the lakeshore, grab dinner at a rooftop restaurant, or rent a paddle boat at sunset. The area comes alive after 8 PM with street performers and neon-lit bars reflecting off the water.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区什刹海后海</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=后海" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">什刹海站</span></div></div>

            <h3>🚄 Day 3: High-Speed Rail to Shanghai</h3>

            <p><strong>The Journey: Beijing South → Shanghai Hongqiao</strong></p>
            <p>This is the crown jewel of China's HSR network. The G-train covers 1,318 km in just 4 hours 18 minutes at a top speed of 350 km/h. Book via the <strong>12306 app</strong> (铁路12306) — it's the official railway booking platform, available in English. Book 15 days in advance for guaranteed seats.</p>
            <p><strong>Ticket prices (2026):</strong></p>
            <ul>
                <li>Second Class (二等座): ¥553 — comfortable 3+2 seating, power outlets at every seat</li>
                <li>First Class (一等座): ¥933 — wider 2+2 seating, more legroom, complimentary snacks</li>
                <li>Business Class (商务座): ¥1,748 — lie-flat seats, meals included, VIP lounge access</li>
            </ul>
            <p><strong>Boarding tips:</strong> Arrive at Beijing South Station (北京南站) 45 minutes early. The station is massive — follow signs to your gate (检票口). Security is airport-style. Once on board, the dining car (餐车) is in car 8 or 5 depending on train number. The Wi-Fi works but is slow; download entertainment beforehand. The countryside views are stunning — watch the landscape shift from northern plains to Yangtze delta rice paddies.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 北京南站: 丰台区永外大街车站路12号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=北京南站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line4">🚇 4号线</span><span class="metro-badge metro-bj-line14">🚇 14号线</span><span class="station-name">北京南站</span></div></div>

            <h3>🌆 Day 4-5: Shanghai — Future Meets Past</h3>

            <p><strong>Day 4 Morning: The Bund (外滩)</strong></p>
            <p>Arrive at Shanghai Hongqiao Station (上海虹桥站), take Metro Line 2 directly to East Nanjing Road (南京东路). Walk 5 minutes to the Bund waterfront. The 1.5 km promenade faces Pudong's jaw-dropping skyline — Oriental Pearl Tower, Shanghai Tower (632m, world's 3rd tallest), and the bottle-opener-shaped World Financial Center. Best visited at sunrise (6 AM, no crowds) or after dark when the skyline is illuminated.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区中山东一路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=外滩" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div>
            <p>🕐 24/7 (outdoor) | 💰 Free</p>

            <p><strong>Day 4 Afternoon: Yu Garden (豫园) & Old City</strong></p>
            <p>Walk south from the Bund (15 min) to Yu Garden — a 400-year-old classical Chinese garden with rockeries, koi ponds, and pavilions. The surrounding bazaar (豫园商城) is touristy but atmospheric, with traditional tea houses and the famous Nanxiang steamed buns (南翔馒头店) — expect 30+ minute queues for their xiaolongbao.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区安仁街137号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=豫园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">豫园站</span></div></div>
            <p>🕐 09:00–16:45 | 💰 ¥40</p>

            <p><strong>Day 5 Morning: French Concession & Tianzifang</strong></p>
            <p>The Former French Concession (法租界) is Shanghai's most charming neighborhood — tree-lined streets, Art Deco architecture, independent cafes, and boutiques. Walk along Wukang Road (武康路) for Instagram-worthy shots of the iconic Flatiron-style Wukang Mansion (武康大楼). Then head to Tianzifang (田子坊) — a labyrinth of art galleries, craft shops, and tiny bars squeezed into renovated shikumen (石库门) lane houses.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 徐汇区武康路 / 黄浦区泰康路210弄</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=田子坊" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line9">🚇 9号线</span><span class="station-name">打浦桥站</span></div></div>
            <p>🕐 10:00–22:00 (Tianzifang) | 💰 Free (entry)</p>

            <p><strong>Day 5 Afternoon: Pudong & Lujiazui Skyline</strong></p>
            <p>Cross the Huangpu River via the Bund Sightseeing Tunnel (¥55, kitschy but fun) or Metro Line 2. Visit the Shanghai Tower observation deck on the 118th floor — the world's highest indoor observation deck at 546m. On clear days, you can see the Yangtze estuary. End with dinner at one of Lujiazui's rooftop restaurants overlooking the Bund.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 浦东新区银城中路501号（上海中心大厦）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=上海中心大厦观光厅" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="station-name">陆家嘴站</span></div></div>
            <p>🕐 08:30–22:00 | 💰 ¥180 (observation deck)</p>

            <h3>🗺️ Route Tips</h3>
            <ul>
                <li>🚄 <strong>HSR Booking:</strong> Use the 12306 app (铁路12306). Register with your passport number. Tickets open 15 days before departure at 8:00 AM Beijing time. Popular routes sell out in minutes — set an alarm!</li>
                <li>🌸 <strong>Best Seasons:</strong> Spring (April–May) and Autumn (September–October). Avoid Golden Week (Oct 1-7) and Chinese New Year — trains are packed.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥4,000–6,000 per person for 5 days (mid-range accommodation, HSR tickets, meals, attractions). Budget travelers can do it for ¥2,500.</li>
                <li>📱 <strong>Essential Apps:</strong> 12306 (train booking), 高德地图 (navigation), Didi (ride-hailing), 美团 (food delivery & deals), WeChat Pay / Alipay (payments).</li>
                <li>🏨 <strong>Where to Stay:</strong> Beijing — Dongcheng district near Wangfujing or Gulou for hutong vibes. Shanghai — Jing'an or Huangpu for central location.</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a> · <a href="https://www.dpm.org.cn" target="_blank">The Palace Museum</a> · <a href="https://www.shanghaitower.com" target="_blank">Shanghai Tower</a></div>`
        },
        {
            title: 'Chengdu → Chongqing: Pandas, Hotpot & Mountains (3-4 Days)',
            content: `<p>The Sichuan Basin duo — Chengdu and Chongqing — are separated by just 1.5 hours on China's newest high-speed rail line. Together they offer an irresistible combination: Chengdu's laid-back teahouse culture and giant pandas, paired with Chongqing's cyberpunk skyline and the world's spiciest hotpot. This 3-4 day route is perfect for food lovers and adventure seekers.</p>

            <h3>🐼 Day 1-2: Chengdu — Slow Living Capital</h3>

            <p><strong>Day 1 Morning: Chengdu Research Base of Giant Panda Breeding (成都大熊猫繁育研究基地)</strong></p>
            <p>Arrive early — gates open at 7:30 AM and the pandas are most active before 10 AM (after that, they're napping). The base houses 200+ pandas across different ages. The star attraction is the nursery where you can watch baby pandas tumbling over each other. Take the internal shuttle bus (¥10) to save 30 minutes of walking. The new "Panda Tower" viewing area offers elevated views of the enclosures. Book tickets online at least 2 days in advance via WeChat — walk-in tickets are extremely limited.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 成都外北熊猫大道1375号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=成都大熊猫繁育研究基地" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line3">🚇 3号线</span><span class="station-name">熊猫大道站</span></div></div>
            <p>🕐 07:30–18:00 | 💰 ¥55 | ⚠️ Book online in advance</p>

            <p><strong>Day 1 Afternoon: Jinli Ancient Street (锦里古街) & Wuhou Shrine (武侯祠)</strong></p>
            <p>Adjacent to each other, these two sites make a perfect afternoon pairing. Wuhou Shrine is a tranquil temple complex dedicated to Zhuge Liang (the legendary strategist from Romance of the Three Kingdoms). The red bamboo-lined paths and ancient cypress trees are hauntingly beautiful. Step outside into Jinli Ancient Street — a 550m pedestrian lane packed with Sichuan snack stalls, teahouses, and handicraft shops. Try the three-shot tea (盖碗茶) performance and the Sichuan face-changing opera (变脸) performers.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武侯区武侯祠大街231号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=武侯祠" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line3">🚇 3号线</span><span class="metro-badge metro-cd-line5">🚇 5号线</span><span class="station-name">高升桥站</span></div></div>
            <p>🕐 08:00–20:00 (Wuhou Shrine) / All day (Jinli) | 💰 ¥50 (Wuhou Shrine) / Free (Jinli)</p>

            <p><strong>Day 2 Morning: Kuanzhai Alley (宽窄巷子)</strong></p>
            <p>Three parallel alleys — Wide Alley (宽巷子), Narrow Alley (窄巷子), and Well Alley (井巷子) — showcasing Qing Dynasty architecture with modern cafes, galleries, and teahouses. This is the best place to try a traditional Sichuan ear-cleaning service (掏耳朵, ¥30-50) from the ear-cleaning masters who've practiced for decades. Don't miss the Sichuan Opera teahouse for a quick face-changing performance.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 青羊区长顺街附近</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=宽窄巷子" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line4">🚇 4号线</span><span class="station-name">宽窄巷子站</span></div></div>
            <p>🕐 24/7 (outdoor area) | 💰 Free (entry)</p>

            <p><strong>Day 2 Afternoon: Sichuan Hotpot Experience</strong></p>
            <p>Chengdu is the birthplace of hotpot — you can't leave without trying it. <strong>Chen Mapo Tofu (陈麻婆豆腐)</strong> on Xiyulong Street is the origin of the world-famous dish (est. 1862). For the full hotpot experience, head to <strong>Shujiuxiang Hotpot (蜀九香)</strong> or <strong>Dalongyi Hotpot (大龙燚)</strong> — both are local institutions. Order the yuānyāng guō (鸳鸯锅, half spicy / half mild) if you can't handle full málà (麻辣, numbing-spicy). Dip beef tripe (毛肚, máodǔ) for exactly 15 seconds — that's the rule.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 陈麻婆豆腐: 青羊区西玉龙街197号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=陈麻婆豆腐 西玉龙街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line1">🚇 1号线</span><span class="metro-badge metro-cd-line4">🚇 4号线</span><span class="station-name">骡马市站</span></div></div>
            <p>🕐 11:00–21:30 | 💰 ¥40–70/person | ⭐ Must-try: 麻婆豆腐, 宫保鸡丁, 回锅肉</p>

            <h3>🌶️ Day 3-4: Chongqing — Mountain City Madness</h3>

            <p><strong>Getting There: HSR from Chengdu East to Chongqing North</strong></p>
            <p>The Chengdu–Chongqing HSR (成渝高铁) takes just 1 hour 15 minutes on the newest CR400AF trains. Second class tickets are ¥154. Trains depart every 15-20 minutes from Chengdu East Station (成都东站) — no need to book far in advance. Arrive at Chongqing North Station (重庆北站), which connects to Metro Lines 3, 10, and the Ring Line.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 成都东站: 成华区邛崃山路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=成都东站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line2">🚇 2号线</span><span class="metro-badge metro-cd-line7">🚇 7号线</span><span class="station-name">成都东客站</span></div></div>

            <p><strong>Day 3: Hongya Cave (洪崖洞) & Jiefangbei (解放碑)</strong></p>
            <p>Hongya Cave is Chongqing's most iconic sight — an 11-story stilted building complex clinging to a cliff face above the Jialing River, looking like a scene from Spirited Away. Visit at sunset for the best photos as the golden hour light hits the traditional architecture. At night, the entire structure is illuminated in warm amber, reflecting off the river. The interior is a maze of restaurants, bars, and souvenir shops across multiple levels. Enter from the top (11th floor) and work your way down — confusingly, you'll exit at ground level on a completely different street. That's Chongqing for you.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 渝中区嘉陵江滨江路88号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=洪崖洞" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cq-line1">🚇 1号线</span><span class="metro-badge metro-cq-line6">🚇 6号线</span><span class="station-name">小什字站</span></div></div>
            <p>🕐 All day (best at sunset/night) | 💰 Free</p>

            <p><strong>Day 4 Morning: Ciqikou Ancient Town (磁器口古镇)</strong></p>
            <p>A 1,000-year-old town on the banks of the Jialing River, Ciqikou is famous for its stilted houses (吊脚楼), mahjong parlors, and the best chén huā shēng (陈花生, spicy peanuts) in China. The main street gets packed on weekends — explore the side alleys for hidden temples, teahouses, and the excellent Zhāng Fēi Niú Ròu (张飞牛肉, Zhang Fei Beef Jerky) shops. Don't leave without trying the má là xiǎo miàn (麻辣小面, spicy noodles) from the street stalls — ¥8 for a bowl that will change your understanding of "spicy."</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 沙坪坝区磁器口古镇</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=磁器口古镇" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cq-line1">🚇 1号线</span><span class="station-name">磁器口站</span></div></div>
            <p>🕐 24/7 (outdoor area) | 💰 Free (entry)</p>

            <p><strong>Chongqing Hotpot: The Real Deal</strong></p>
            <p>Chongqing hotpot is different from Chengdu's — it's more intense, more oily, and uses the jiǔgōng gé (九宫格, nine-grid pot) that divides the broth into nine sections, each with different heat levels. The tradition is to cook different ingredients in specific grids. Try <strong>Pipa Yuan Hotpot (枇杷园火锅)</strong> on Nanshan (South Mountain) — the open-air mountain-top setting with city views is unforgettable. For city-center convenience, <strong>Zhou Junma Hotpot (周师兄火锅)</strong> near Jiefangbei is excellent.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 枇杷园火锅: 南岸区南山街道火锅一条街</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=枇杷园火锅 南山" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 11:00–02:00 | 💰 ¥80–120/person | ⭐ Must-try: 九宫格锅底, 毛肚, 鸭肠, 酸梅汤</p>

            <h3>🗺️ Route Tips</h3>
            <ul>
                <li>🌶️ <strong>Spice Survival:</strong> Sichuan food is legitimately numbing-spicy (麻辣). Order wēi là (微辣, mild spicy) or yuānyāng (鸳鸯, half and half) to start. Keep sour plum drink (酸梅汤) and yogurt handy — they neutralize the burn better than water.</li>
                <li>🚄 <strong>HSR Booking:</strong> Both cities have multiple stations. Use Chengdu East (成都东站) and Chongqing North (重庆北站) for the main HSR line. The newer Chengdu–Chongqing Middle Line (成渝中线) via the CR450 trains is even faster at 62 minutes.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥2,000–3,500 per person for 4 days. Chengdu is slightly cheaper than Chongqing. Street food meals cost ¥15-30; restaurant dinners ¥60-120.</li>
                <li>🌧️ <strong>Weather:</strong> Both cities are famously cloudy/foggy. Chongqing is called the "Fog Capital" — embrace it. Summers are brutally hot (40°C+). Best seasons: Spring (March–May) and Autumn (September–November).</li>
                <li>🚇 <strong>Getting Around:</strong> Both cities have excellent metro systems. In Chongqing, the metro literally goes through buildings — Line 2 at Liziba station passes through a residential block. It's a tourist attraction in itself.</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.panda.org.cn" target="_blank">China Conservation and Research Center for Giant Panda</a> · <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a> · <a href="https://www.cqtpb.com" target="_blank">Chongqing Tourism</a></div>`
        },
        {
            title: 'Shanghai → Yunnan: From Skyscrapers to Shangri-La (7-8 Days)',
            content: `<p>This 7-8 day journey takes you from China's ultra-modern financial capital to the mystical highlands of Yunnan province — a region that feels like a different country entirely. Yunnan's mild climate, diverse ethnic minorities, and jaw-dropping landscapes have long made it a favorite among French travelers. <em>Cette itinéraire est particulièrement adapté aux voyageurs français.</em></p>

            <h3>🌆 Day 1: Shanghai Departure</h3>

            <p><strong>Flight: Shanghai → Kunming</strong></p>
            <p>Multiple daily flights from Shanghai Pudong (PVG) or Hongqiao (SHA) to Kunming Changshui Airport (KMG). Flight time: 3.5 hours. Budget airlines (Spring Airlines, Lucky Air) offer tickets from ¥400-600 if booked 2+ weeks ahead. Full-service carriers (China Eastern, China Southern) charge ¥800-1,200. From Kunming airport, take Metro Line 6 to the city center (40 min, ¥5).</p>

            <p><em>Pour les voyageurs français: La Chine offre un transit sans visa de 144 heures (6 jours) pour les détenteurs de passeports français arrivant par vol international. Si vous entrez par Shanghai et sortez par Kunming (ou vice versa), vous êtes couverts par cette politique. Vérifiez les conditions actuelles avant votre voyage.</em></p>

            <h3>🌸 Day 2-3: Kunming — Spring City</h3>

            <p><strong>Day 2: Stone Forest (石林) — UNESCO World Heritage</strong></p>
            <p>A day trip from Kunming (90 km southeast). The Stone Forest is a surreal landscape of towering limestone pillars formed 270 million years ago — it looks like a petrified forest from another planet. The Sani people (分支 of the Yi ethnic minority) are the local custodians, and their guides share fascinating legends about each formation. The "Greater Stone Forest" (大石林) is the main area with the iconic Ashima rock formation; the "Lesser Stone Forest" (小石林) is quieter and more photogenic.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 昆明市石林彝族自治县</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=石林风景区" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥130 | 🚌 Bus from Kunming East Bus Station (¥34, 1.5 hours) or high-speed rail to Shilin West Station (¥30, 20 min)</p>

            <p><strong>Day 2 Evening: Kunming Old Town & Dianchi Lake</strong></p>
            <p>Stroll through Nanping Walking Street (南屏步行街) and the Green Lake Park (翠湖公园) area. In winter (November–March), thousands of black-headed gulls from Siberia flock to Green Lake — a magical sight. Walk along Dianchi Lake (滇池), the "Pearl of the Plateau" — China's 6th largest lake at 1,886m elevation.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 翠湖公园: 五华区翠湖南路67号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=翠湖公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-km-line1">🚇 1号线</span><span class="station-name">翠湖站</span></div></div>
            <p>🕐 24/7 (park) | 💰 Free</p>

            <p><strong>Day 3: Crossing Bridge Noodles (过桥米线) & Departure</strong></p>
            <p>Before leaving Kunming, you MUST try guòqiáo mǐxiàn (过桥米线, Crossing Bridge Noodles) — Yunnan's most famous dish. The story goes that a scholar's wife invented a system of keeping soup hot with a layer of oil so she could carry it across a bridge to her studying husband. The dish arrives as a tray of raw ingredients (sliced chicken, quail eggs, chrysanthemum petals, rice noodles) that you add to a boiling-hot stone pot of broth. The oil layer keeps it hot enough to cook everything instantly. Try <strong>Jianxin Garden (建新园)</strong> — Kunming's most beloved chain since 1906.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 建新园总店: 五华区宝善街195号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=建新园 宝善街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-km-line1">🚇 1号线</span><span class="station-name">东风广场站</span></div></div>
            <p>🕐 07:00–21:00 | 💰 ¥25–60/person | ⭐ Must-try: 过桥米线 (状元过桥米线 for the full experience)</p>

            <h3>🏔️ Day 4-5: Dali — Wind, Flowers, Snow & Moon</h3>

            <p><strong>Getting There: HSR Kunming → Dali</strong></p>
            <p>The Kunming–Dali high-speed rail line (昆广大铁路) covers 350 km in just 2 hours. Second class: ¥145. The route passes through stunning mountain scenery — keep your camera ready as you cross the Lancang River (澜沧江, upper Mekong) gorge. Arrive at Dali Station (大理站), 20 km south of the Old Town. Take bus 8 or a taxi (¥50) to Dali Old Town.</p>

            <p><strong>Day 4: Erhai Lake Bike Ride (环洱海骑行)</strong></p>
            <p>Erhai Lake (洱海, literally "Ear Sea" for its shape) is Dali's crown jewel — a 250 km² alpine lake at 1,972m elevation, framed by the 4,122m Cangshan mountains. Rent an e-bike (电动车, ¥60-80/day) from your guesthouse and ride the eastern shore. The route from Caicun (才村) through Xizhou (喜洲) to Shuanglang (双廊) is the most scenic stretch — 60 km of lakeside roads, rice paddies, and Bai minority villages. Stop at Xizhou for the famous Xizhou Baba (喜洲粑粑, a crispy stuffed flatbread — sweet or savory, both delicious).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 洱海环湖公路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=洱海" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>

            <p><strong>Day 4 Evening: Dali Old Town (大理古城)</strong></p>
            <p>The Old Town is a walled city dating to the 8th century Nanzhao Kingdom. Unlike many "ancient towns" in China that are fully reconstructed, Dali retains genuine historical character — cobblestone streets, traditional Bai-style whitewashed buildings with painted eaves, and the iconic "Foreigner Street" (洋人街) with cafes and bookshops. The night market on Renmin Lu (人民路) is excellent for street food and handmade crafts. Look for Bai tie-dye (扎染) textiles — the indigo-dyed fabrics are UNESCO-recognized intangible cultural heritage.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 大理古城: 大理市复兴路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=大理古城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>

            <p><strong>Day 5: Three Pagodas (崇圣寺三塔)</strong></p>
            <p>The Three Pagodas are Dali's most recognizable landmarks — the central Qianxun Pagoda (千寻塔) stands 69m tall and dates to the 9th century, making it one of the oldest standing structures in southern China. The reflections in the adjacent pool create iconic photo opportunities, especially at sunrise. The behind-the-pagoda Chongsheng Temple complex is the largest Buddhist temple in Yunnan.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 大理古城北1.5公里</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=崇圣寺三塔" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 08:00–18:00 | 💰 ¥75</p>

            <h3>🏯 Day 6-8: Lijiang — Naxi Heritage</h3>

            <p><strong>Getting There: Train Dali → Lijiang</strong></p>
            <p>The Dali–Lijiang railway takes approximately 2 hours. Second class: ¥80. Arrive at Lijiang Station (丽江站), 15 km south of the Old Town. Bus 18 or taxi (¥30-40) to the Old Town.</p>

            <p><strong>Day 6: Lijiang Old Town (丽江古城)</strong></p>
            <p>A UNESCO World Heritage Site since 1997, Lijiang Old Town is a maze of cobblestone streets, canals, and wooden buildings of the Naxi people (纳西族). The town was founded 800+ years ago and is unique for its system of waterways — clear spring water flows through every street in stone channels. Climb to the top of Lion Hill (狮子山) or Wangu Tower (万古楼) for panoramic views of the Old Town with Jade Dragon Snow Mountain (玉龙雪山) as backdrop. The town is famous for its nightlife — Bar Street (酒吧街) has everything from traditional Naxi music to live rock. Daytime is for exploring the quieter backstreets — try to find the "Big Water Wheel" (大水车) at the town's north entrance.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 丽江古城: 古城区大研古城</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=丽江古城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 24/7 | 💰 ¥50 (古城维护费, ancient town maintenance fee — sometimes checked randomly)</p>

            <p><strong>Day 7: Jade Dragon Snow Mountain (玉龙雪山)</strong></p>
            <p>At 5,596m, Jade Dragon Snow Mountain is the southernmost glacier in the Northern Hemisphere. Take the large cable car (大索道) to the glacier park at 4,506m — the highest accessible point. From the top station, climb the wooden boardwalk to 4,680m for jaw-dropping views. <strong>Altitude warning:</strong> Even fit visitors may feel dizzy at this elevation. Rent an oxygen bottle (氧气瓶, ¥50-100) at the base. The Blue Moon Valley (蓝月谷) at the mountain's foot is a turquoise-water valley that looks like a Chinese painting come to life — don't miss it.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 玉龙雪山: 玉龙纳西族自治县</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=玉龙雪山" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥100 (entry) + ¥120 (large cable car) | ⚠️ Book cable car tickets online 1-2 days ahead — they sell out!</p>

            <p><strong>Day 8: Shuhe Ancient Town (束河古镇) & Naxi Culture</strong></p>
            <p>Shuhe is the quieter, more authentic alternative to Lijiang Old Town — just 4 km northwest. Once a major stop on the Ancient Tea Horse Road (茶马古道), it retains a village atmosphere with fewer tourists. Visit the Tea Horse Road Museum (茶马古道博物馆) to understand how tea from Yunnan's mountains was traded to Tibet and beyond on horseback for over 1,000 years. The Naxi people's Dongba script (东巴文) — the world's only living pictographic writing system — is displayed throughout town. Book a Naxi cooking class (¥150-200) to learn dishes like Naxi Baba (纳西粑粑) and baba chicken (粑粑鸡).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 束河古镇: 古城区束河路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=束河古镇" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 24/7 | 💰 Free (no entry fee since 2018)</p>

            <h3>🗺️ Tips for French Travelers</h3>
            <ul>
                <li>🛂 <strong>Visa-Free Transit:</strong> French passport holders can use the 144-hour (6-day) visa-free transit policy when entering and exiting via different ports. If flying into Shanghai and out of Kunming (or vice versa), you qualify. You must have a confirmed onward ticket to a third country/region. <em>Attention: vérifiez les conditions actuelles sur le site de l'ambassade de Chine avant votre voyage.</em></li>
                <li>🗣️ <strong>French-Speaking Guides:</strong> Yunnan has a surprising number of French-speaking guides due to the province's historical connections with French Indochina. Book through agencies like Yunnan Exploration (yunnanexploration.com) or China Highlights (chinahighlights.com) and request a francophone guide. In Dali and Lijiang, some guesthouse owners speak French.</li>
                <li>🍷 <strong>Wine in Yunnan:</strong> Yunnan has a growing wine industry! The region around Mile (弥勒) produces award-winning Cabernet Sauvignon and rosé at high altitude (1,400m). Try Ao Yun (敖云), China's most prestigious wine (LVMH-owned, ¥2,000+ per bottle), or the excellent local brand Yunnan Red (云南红, ¥50-100). Several wineries near Dali offer tastings — ask your guesthouse.</li>
                <li>🏔️ <strong>Compared to France:</strong> Yunnan's diversity is like compressing all of France into one province — the altitude range (76m to 6,740m at Meili Snow Mountain) creates climates from tropical to arctic. Dali's lakeside setting is often compared to Annecy; Lijiang's Old Town has a Carcassonne-like medieval charm; Shangri-La (中甸) at 3,200m feels like the French Alps with Tibetan monasteries.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥6,000–10,000 per person for 8 days (mid-range). Flights Shanghai–Kunming: ¥400-1,200. HSR tickets total: ¥370. Hotels: ¥200-500/night in boutique guesthouses. Meals: ¥40-100/day. Yunnan is significantly cheaper than Shanghai.</li>
                <li>📱 <strong>Essential Apps:</strong> 高德地图 (navigation — works offline for downloaded regions), 美团 (restaurants & deals), 翻译 (Google Translate with downloaded Chinese pack), 铁路12306 (train booking). Download offline maps for Yunnan — mobile signal can be patchy in mountainous areas.</li>
                <li>🌡️ <strong>Best Seasons:</strong> March–May (spring flowers, clear skies) and September–November (autumn colors, harvest festivals). June–August is rainy season but lush. December–February is cold but sunny — perfect for snow mountain views.</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.travelchinaguide.com" target="_blank">Travel China Guide</a> · <a href="https://www.yunnanexploration.com" target="_blank">Yunnan Exploration</a> · <a href="https://whc.unesco.org/en/list/811" target="_blank">UNESCO: Old Town of Lijiang</a> · <a href="https://whc.unesco.org/en/list/1111" target="_blank">UNESCO: South China Karst</a></div>`
        },
        {
            title: 'Beijing → Xi\'an → Shanghai: 5,000 Years in One Trip (7-8 Days)',
            content: `<p>This 7-8 day route connects three of China's most historically significant cities, spanning from ancient imperial capitals to the nation's ultra-modern financial hub. You'll witness 5,000 years of civilization — from the Forbidden City to the Terracotta Warriors to Shanghai's futuristic skyline — all connected by China's world-class high-speed rail network.</p>

            <h3>🏯 Day 1-2: Beijing — Imperial Grandeur</h3>

            <p><strong>Day 1 Morning: The Forbidden City (故宫)</strong></p>
            <p>Begin your 5,000-year journey at the Palace Museum — 72 hectares of imperial magnificence with 9,999 rooms. Book tickets online at least 7 days in advance via the WeChat mini-program "故宫博物院" (they sell out fast). Enter through the Meridian Gate (午门) and walk the central axis to the Gate of Divine Prowess (神武门). Don't miss the Clock Gallery (钟表馆, ¥10 extra) and the Treasure Gallery (珍宝馆, ¥10 extra). Budget 3-4 hours minimum.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区景山前街4号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=故宫博物院" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line1">🚇 1号线</span><span class="station-name">天安门东站A口</span></div></div>
            <p>🕐 08:30–17:00 (Apr–Oct) / 08:30–16:30 (Nov–Mar) | 💰 ¥60 (Apr–Oct) / ¥40 (Nov–Mar) | ⚠️ Closed Mondays</p>

            <p><strong>Day 1 Afternoon: Temple of Heaven (天坛)</strong></p>
            <p>Take Metro Line 5 to Tiantan Dongmen station. The Hall of Prayer for Good Harvests (祈年殿) is the iconic triple-gabled circular building. The echo wall (回音壁) and circular mound altar (圜丘坛) are acoustic marvels — whisper at one end and your partner can hear you 65 meters away. The surrounding park is alive with locals practicing tai chi and playing jianzi (毽子).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 东城区天坛东里甲1号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天坛公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line5">🚇 5号线</span><span class="station-name">天坛东门站</span></div></div>
            <p>🕐 06:00–21:00 (park) / 08:00–17:00 (buildings) | 💰 ¥15 (park) / ¥34 (through ticket)</p>

            <p><strong>Day 2: The Great Wall at Mutianyu (慕田峪长城)</strong></p>
            <p>Mutianyu is the best section for first-timers — less crowded than Badaling, beautifully restored, with cable car and toboggan. Book a private car via DiDi (¥200-300 round trip, 1.5 hours) or take bus 916 Express from Dongzhimen hub to Huairou, then transfer to bus H23 (¥15 total, 2 hours). The cable car saves 45 minutes of steep climbing. Walk from Tower 14 eastward to Tower 23 for the most scenic stretch.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 怀柔区渤海镇慕田峪村</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=慕田峪长城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:30–18:00 (Apr–Oct) / 08:00–17:00 (Nov–Mar) | 💰 ¥40 (entry) + ¥120 (cable car round trip)</p>

            <p><strong>Day 2 Evening: Houhai Lake (后海)</strong></p>
            <p>Back in Beijing, unwind at Houhai Lake — stroll the lakeside, grab dinner at a rooftop restaurant, or rent a paddle boat at sunset. The area comes alive after 8 PM with street performers and neon-lit bars reflecting off the water. Try 烤肉季 (Rouji) for famous Beijing lamb BBQ since 1848.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西城区什刹海后海</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=后海" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line8">🚇 8号线</span><span class="station-name">什刹海站</span></div></div>
            <p>🕐 24/7 | 🍺 酒吧 18:00-次日2:00</p>

            <h3>🚄 Day 3: High-Speed Rail Beijing → Xi'an</h3>

            <p><strong>The Journey: Beijing West → Xi'an North</strong></p>
            <p>The G-train covers 1,200 km in approximately 4 hours 30 minutes at 350 km/h. Book via the <strong>12306 app</strong> (铁路12306) — the official railway booking platform with English support. Tickets open 15 days before departure at 8:00 AM Beijing time.</p>
            <p><strong>Ticket prices (2026):</strong></p>
            <ul>
                <li>Second Class (二等座): ¥515.5 — comfortable 3+2 seating, power outlets at every seat</li>
                <li>First Class (一等座): ¥824.5 — wider 2+2 seating, more legroom</li>
                <li>Business Class (商务座): ¥1,624 — lie-flat seats, meals included</li>
            </ul>
            <p><strong>Boarding tips:</strong> Arrive at Beijing West Station (北京西站) 45 minutes early. The station is massive — follow signs to your gate (检票口). The dining car (餐车) is in car 5 or 8 depending on train number. Watch the landscape shift from northern plains to the loess plateau of Shaanxi as you approach Xi'an.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 北京西站: 丰台区莲花池东路118号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=北京西站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-bj-line7">🚇 7号线</span><span class="metro-badge metro-bj-line9">🚇 9号线</span><span class="station-name">北京西站</span></div></div>

            <h3>🏺 Day 4-5: Xi'an — Ancient Capital of 13 Dynasties</h3>

            <p><strong>Day 4: Terracotta Warriors (秦始皇兵马俑)</strong></p>
            <p>One of the greatest archaeological discoveries of the 20th century — 8,000 life-size clay soldiers, horses, and chariots guarding Emperor Qin Shi Huang's tomb since 210 BC. No photo prepares you for the scale: Pit 1 alone contains 6,000 warriors in battle formation. Each face is unique. Budget 3-4 hours. Take tourist bus 306 (游5路) from Xi'an Train Station (¥7, 1 hour) or hire a DiDi (¥120-150 one way). <strong>Tip:</strong> Hire an official guide at the entrance (¥150 for 2 hours) — the stories behind each warrior make the visit 10x more meaningful.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 临潼区秦陵北路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=秦始皇兵马俑博物馆" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 08:30–18:00 (Mar–Nov) / 08:30–17:30 (Dec–Feb) | 💰 ¥120 | ⚠️ Book online via WeChat mini-program "秦始皇帝陵博物院"</p>

            <p><strong>Day 4 Evening: Muslim Quarter (回民街)</strong></p>
            <p>Xi'an's most famous food street — a bustling labyrinth of Muslim-Chinese culture dating back 1,300 years to the Silk Road era. The narrow lanes around Huimin Jie (回民街) and Beiyuanmen (北院门) are packed with hundreds of stalls. Must-try: 肉夹馍 (ròu jiā mó, "Chinese hamburger" — braised pork in a crispy flatbread, ¥15), 羊肉泡馍 (yáng ròu pào mó, torn bread soaked in lamb soup, ¥35), 甑糕 (zèng gāo, sticky rice cake with dates, ¥10), and 红柳烤肉 (hóng liǔ kǎo ròu, lamb skewers on red willow sticks, ¥10 each).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 莲湖区北院门（钟鼓楼广场西侧）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=回民街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-xa-line2">🚇 2号线</span><span class="station-name">钟楼站</span></div></div>
            <p>🕐 24/7 (outdoor area) | 💰 Free (entry) | 🍜 Budget ¥50-80/person for a food crawl</p>

            <p><strong>Day 5 Morning: Xi'an City Wall Bike Ride (西安城墙骑行)</strong></p>
            <p>The best-preserved ancient city wall in China — 13.7 km of massive Ming Dynasty fortifications (1370 AD) circling the old city, 12 meters high and 15 meters wide at the top. Rent a bicycle (¥45/3 hours for single, ¥90/3 hours for tandem) and ride the entire loop — it takes 1.5-2 hours at a leisurely pace. The south gate (南门, Yongning Gate) is the most photogenic with its drawbridge and moat. Sunset from the wall is spectacular.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 碑林区南大街（永宁门/南门入口）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=西安城墙永宁门" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-xa-line2">🚇 2号线</span><span class="station-name">永宁门站</span></div></div>
            <p>🕐 08:00–22:00 (Apr–Oct) / 08:00–19:00 (Nov–Mar) | 💰 ¥54 (entry) + ¥45 (bike rental 3h)</p>

            <p><strong>Day 5 Afternoon: Bell Tower (钟楼) & Big Wild Goose Pagoda (大雁塔)</strong></p>
            <p>The Bell Tower (钟楼) sits at the exact center of Xi'an — the geographic heart of the ancient capital. Built in 1384, it houses a massive 6-ton bronze bell. Cross the underground passage to the nearby Drum Tower (鼓楼, ¥30 combined ticket). Then take Metro Line 3 south to the Big Wild Goose Pagoda (大雁塔) — a 64m-tall Buddhist pagoda built in 652 AD to house scriptures brought from India by the monk Xuanzang. The surrounding Da Ci'en Temple (大慈恩寺) complex is serene. At night, the North Square fountain show (音乐喷泉, free) is Asia's largest musical fountain.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 钟楼: 莲湖区东西南北大街交汇处 / 大雁塔: 雁塔区慈恩路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=西安钟楼" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-xa-line2">🚇 2号线</span><span class="metro-badge metro-xa-line3">🚇 3号线</span><span class="station-name">钟楼站 / 大雁塔站</span></div></div>
            <p>🕐 钟楼 08:30–21:30 / 大雁塔 08:00–18:30 | 💰 钟楼+鼓楼 ¥50 / 大慈恩寺 ¥40 / 大雁塔登塔 ¥30</p>

            <h3>🚄 Day 6: High-Speed Rail Xi'an → Shanghai</h3>

            <p><strong>The Journey: Xi'an North → Shanghai Hongqiao</strong></p>
            <p>The G-train covers approximately 1,500 km in 6 hours. An alternative is a 2-hour flight (¥600-1,200) if you prefer to save time. For the HSR, second class costs ¥615 and the route passes through Zhengzhou, Nanjing, and Suzhou — you'll watch the landscape transform from the dry loess plateau to the lush Yangtze delta.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西安北站: 未央区元朔路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=西安北站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-xa-line2">🚇 2号线</span><span class="metro-badge metro-xa-line4">🚇 4号线</span><span class="station-name">西安北客站</span></div></div>
            <p>💰 Second class ¥615 / First class ¥984 / Business class ¥1,919</p>

            <h3>🌆 Day 7-8: Shanghai — Where Future Meets Past</h3>

            <p><strong>Day 7 Morning: The Bund (外滩)</strong></p>
            <p>Arrive at Shanghai Hongqiao Station, take Metro Line 2 to East Nanjing Road (南京东路). Walk 5 minutes to the Bund waterfront. The 1.5 km promenade faces Pudong's jaw-dropping skyline — Oriental Pearl Tower, Shanghai Tower (632m, world's 3rd tallest), and the bottle-opener-shaped World Financial Center. Best visited at sunrise (6 AM, no crowds) or after dark when the skyline is illuminated.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区中山东一路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=外滩" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div>
            <p>🕐 24/7 (outdoor) | 💰 Free</p>

            <p><strong>Day 7 Afternoon: Yu Garden (豫园) & Old City</strong></p>
            <p>Walk south from the Bund (15 min) to Yu Garden — a 400-year-old classical Chinese garden with rockeries, koi ponds, and pavilions. The surrounding bazaar (豫园商城) has traditional tea houses and the famous Nanxiang steamed buns (南翔馒头店) — expect 30+ minute queues for their xiaolongbao.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区安仁街137号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=豫园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">豫园站</span></div></div>
            <p>🕐 09:00–16:45 | 💰 ¥40</p>

            <p><strong>Day 8 Morning: French Concession & Nanjing Road</strong></p>
            <p>The Former French Concession (法租界) is Shanghai's most charming neighborhood — tree-lined streets, Art Deco architecture, independent cafes, and boutiques. Walk along Wukang Road (武康路) for Instagram-worthy shots of the iconic Wukang Mansion (武康大楼). Then head to Nanjing Road (南京路步行街), China's most famous shopping boulevard — 1.2 km of neon-lit stores stretching from the Bund to People's Square.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武康路: 徐汇区武康路 / 南京路: 黄浦区南京东路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=武康大楼" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line1">🚇 1号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">陕西南路站 / 南京东路站</span></div></div>
            <p>🕐 10:00–22:00 | 💰 Free (entry)</p>

            <p><strong>Day 8 Afternoon: Pudong & Lujiazui Skyline</strong></p>
            <p>Cross the Huangpu River via Metro Line 2 to Lujiazui. Visit the Shanghai Tower observation deck on the 118th floor — the world's highest indoor observation deck at 546m. On clear days, you can see the Yangtze estuary. End with dinner at one of Lujiazui's rooftop restaurants overlooking the Bund.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 浦东新区银城中路501号（上海中心大厦）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=上海中心大厦观光厅" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="station-name">陆家嘴站</span></div></div>
            <p>🕐 08:30–22:00 | 💰 ¥180 (observation deck)</p>

            <h3>🗺️ Route Tips</h3>
            <ul>
                <li>🚄 <strong>HSR Booking:</strong> Use the 12306 app (铁路12306). Register with your passport number. Tickets open 15 days before departure at 8:00 AM Beijing time. Popular routes sell out fast — set an alarm! Book all segments as early as possible.</li>
                <li>🌸 <strong>Best Seasons:</strong> Spring (April–May) and Autumn (September–October). Avoid Golden Week (Oct 1-7) and Chinese New Year — trains are packed and attractions are overcrowded.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥7,000–12,000 per person for 8 days (mid-range). HSR tickets total: ~¥1,700. Hotels: ¥300-600/night. Meals: ¥80-150/day. Attractions: ¥800 total.</li>
                <li>📱 <strong>Essential Apps:</strong> 12306 (train booking), 高德地图 (navigation), DiDi (ride-hailing), 美团 (food delivery & deals), WeChat Pay / Alipay (payments).</li>
                <li>🏨 <strong>Where to Stay:</strong> Beijing — Dongcheng district near Wangfujing or Gulou. Xi'an — inside the city wall near the Bell Tower. Shanghai — Jing'an or Huangpu for central location.</li>
                <li>⚠️ <strong>Booking Warning:</strong> The Forbidden City and Terracotta Warriors both require advance online booking — they do NOT sell walk-in tickets. Book at least 3-7 days ahead via their respective WeChat mini-programs.</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a> · <a href="https://www.dpm.org.cn" target="_blank">The Palace Museum</a> · <a href="https://www.bmy.com.cn" target="_blank">Emperor Qinshihuang's Mausoleum Site Museum</a> · <a href="https://www.shanghaitower.com" target="_blank">Shanghai Tower</a></div>`
        },
        {
            title: 'Chengdu → Chongqing → Zhangjiajie: Pandas, Hotpot & Avatar Mountains (6-7 Days)',
            content: `<p>This 6-7 day route combines three of China's most exciting destinations: Chengdu's laid-back panda paradise, Chongqing's cyberpunk mountain city, and Zhangjiajie's otherworldly pillar mountains that inspired Avatar's floating Hallelujah Mountain. It's a journey from Sichuan's numbing-spicy cuisine through Chongqing's fiery hotpot to Hunan's aromatic peppers — with some of the most dramatic natural scenery on Earth.</p>

            <h3>🐼 Day 1-2: Chengdu — Slow Living Capital</h3>

            <p><strong>Day 1 Morning: Chengdu Research Base of Giant Panda Breeding (成都大熊猫繁育研究基地)</strong></p>
            <p>Arrive early — gates open at 7:30 AM and the pandas are most active before 10 AM (after that, they're napping). The base houses 200+ pandas across different ages. The star attraction is the nursery where you can watch baby pandas tumbling over each other. Take the internal shuttle bus (¥10) to save 30 minutes of walking. Book tickets online at least 2 days in advance via WeChat — walk-in tickets are extremely limited.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 成华区外北熊猫大道1375号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=成都大熊猫繁育研究基地" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line3">🚇 3号线</span><span class="station-name">熊猫大道站</span></div></div>
            <p>🕐 07:30–18:00 | 💰 ¥55 | ⚠️ Book online in advance</p>

            <p><strong>Day 1 Afternoon: Jinli Ancient Street (锦里古街) & Wuhou Shrine (武侯祠)</strong></p>
            <p>Adjacent to each other, these two sites make a perfect afternoon pairing. Wuhou Shrine is a tranquil temple complex dedicated to Zhuge Liang (the legendary strategist from Romance of the Three Kingdoms). Step outside into Jinli Ancient Street — a 550m pedestrian lane packed with Sichuan snack stalls, teahouses, and handicraft shops. Try the three-shot tea (盖碗茶) performance and watch Sichuan face-changing opera (变脸) performers.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武侯区武侯祠大街231号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=武侯祠" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line3">🚇 3号线</span><span class="metro-badge metro-cd-line5">🚇 5号线</span><span class="station-name">高升桥站</span></div></div>
            <p>🕐 08:00–20:00 (Wuhou Shrine) / All day (Jinli) | 💰 ¥50 (Wuhou Shrine) / Free (Jinli)</p>

            <p><strong>Day 2 Morning: Kuanzhai Alley (宽窄巷子)</strong></p>
            <p>Three parallel alleys — Wide Alley (宽巷子), Narrow Alley (窄巷子), and Well Alley (井巷子) — showcasing Qing Dynasty architecture with modern cafes, galleries, and teahouses. Try a traditional Sichuan ear-cleaning service (掏耳朵, ¥30-50) from masters who've practiced for decades. Don't miss the Sichuan Opera teahouse for a quick face-changing performance.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 青羊区长顺街附近</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=宽窄巷子" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line4">🚇 4号线</span><span class="station-name">宽窄巷子站</span></div></div>
            <p>🕐 24/7 (outdoor area) | 💰 Free (entry)</p>

            <p><strong>Day 2 Afternoon: Sichuan Hotpot Experience</strong></p>
            <p>Chengdu is the birthplace of hotpot — you can't leave without trying it. Head to <strong>Shujiuxiang Hotpot (蜀九香)</strong> or <strong>Dalongyi Hotpot (大龙燚)</strong> — both are local institutions. Order the yuānyāng guō (鸳鸯锅, half spicy / half mild) if you can't handle full málà (麻辣, numbing-spicy). Dip beef tripe (毛肚, máodǔ) for exactly 15 seconds — that's the rule. Keep sour plum drink (酸梅汤) handy to neutralize the burn.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 蜀九香: 武侯区紫荆北路3号（紫荆店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=蜀九香火锅 紫荆" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line5">🚇 5号线</span><span class="station-name">神仙树站</span></div></div>
            <p>🕐 11:00–02:00 | 💰 ¥80–120/person | ⭐ Must-try: 九宫格锅底, 毛肚, 鸭肠, 黄喉</p>

            <h3>🌶️ Day 3-4: Chongqing — Mountain City Madness</h3>

            <p><strong>Getting There: HSR Chengdu → Chongqing</strong></p>
            <p>The Chengdu–Chongqing HSR (成渝高铁) takes just 1.5 hours on the newest CR400AF trains. Second class tickets are ¥154. Trains depart every 15-20 minutes from Chengdu East Station (成都东站). Arrive at Chongqing North Station (重庆北站), which connects to Metro Lines 3, 10, and the Ring Line.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 成都东站: 成华区邛崃山路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=成都东站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cd-line2">🚇 2号线</span><span class="metro-badge metro-cd-line7">🚇 7号线</span><span class="station-name">成都东客站</span></div></div>

            <p><strong>Day 3: Hongya Cave (洪崖洞) & Jiefangbei (解放碑)</strong></p>
            <p>Hongya Cave is Chongqing's most iconic sight — an 11-story stilted building complex clinging to a cliff face above the Jialing River, looking like a scene from Spirited Away. Visit at sunset for the best photos. At night, the entire structure is illuminated in warm amber, reflecting off the river. Enter from the top (11th floor) and work your way down — confusingly, you'll exit at ground level on a completely different street. That's Chongqing for you. Then walk to nearby Jiefangbei (解放碑), Chongqing's Times Square — a massive monument surrounded by shopping malls and neon lights.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 渝中区嘉陵江滨江路88号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=洪崖洞" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cq-line1">🚇 1号线</span><span class="metro-badge metro-cq-line6">🚇 6号线</span><span class="station-name">小什字站</span></div></div>
            <p>🕐 All day (best at sunset/night) | 💰 Free</p>

            <p><strong>Day 4 Morning: Ciqikou Ancient Town (磁器口古镇)</strong></p>
            <p>A 1,000-year-old town on the banks of the Jialing River, famous for its stilted houses (吊脚楼), mahjong parlors, and the best chén huā shēng (陈花生, spicy peanuts) in China. The main street gets packed on weekends — explore the side alleys for hidden temples and teahouses. Don't leave without trying má là xiǎo miàn (麻辣小面, spicy noodles) from the street stalls — ¥8 for a bowl that will change your understanding of "spicy."</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 沙坪坝区磁器口古镇</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=磁器口古镇" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cq-line1">🚇 1号线</span><span class="station-name">磁器口站</span></div></div>
            <p>🕐 24/7 (outdoor area) | 💰 Free (entry)</p>

            <p><strong>Day 4 Afternoon: Chongqing Hotpot — The Real Deal</strong></p>
            <p>Chongqing hotpot is different from Chengdu's — more intense, more oily, and uses the jiǔgōng gé (九宫格, nine-grid pot). Try <strong>Zhou Junma Hotpot (周师兄火锅)</strong> near Jiefangbei or <strong>Pipa Yuan Hotpot (枇杷园火锅)</strong> on Nanshan — the open-air mountain-top setting with city views is unforgettable. Order the signature dishes: 毛肚 (beef tripe), 鸭肠 (duck intestine), and 鲜鸭血 (duck blood tofu).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 周师兄火锅: 渝中区民族路188号（解放碑店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=周师兄火锅 解放碑" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cq-line1">🚇 1号线</span><span class="metro-badge metro-cq-line2">🚇 2号线</span><span class="station-name">临江门站</span></div></div>
            <p>🕐 11:00–02:00 | 💰 ¥80–120/person | ⭐ Must-try: 九宫格锅底, 毛肚, 鸭肠, 酸梅汤</p>

            <h3>🏔️ Day 5-6: Zhangjiajie — Avatar Mountains</h3>

            <p><strong>Getting There: Flight or HSR to Zhangjiajie</strong></p>
            <p>From Chongqing, the fastest option is a 1.5-hour flight to Zhangjiajie Hehua Airport (张家界荷花机场, DYG) — tickets from ¥400-800. Alternatively, take a train via Huaihua (怀化) — about 6-7 hours total. From the airport, it's 30 minutes by taxi (¥50) to the Wulingyuan scenic area entrance.</p>

            <p><strong>Day 5: Zhangjiajie National Forest Park (张家界国家森林公园)</strong></p>
            <p>This is the place that inspired James Cameron's Avatar — towering sandstone pillars rising 200+ meters through misty clouds, draped with vegetation. The park is massive (4,810 hectares) — you need 2 full days minimum. Day 5 focuses on the <strong>Yuanjiajie (袁家界)</strong> area — the "Avatar Hallelujah Mountain" (哈利路亚山, officially called the "South Sky Pillar" 南天一柱) is here. Take the Bailong Elevator (百龙天梯, the world's tallest outdoor elevator at 326m, ¥72 one way) up to the plateau. Walk the Yuanjiajie loop trail (2-3 hours) for views of the First Bridge Under Heaven (天下第一桥) — a natural stone bridge connecting two pillars. Also visit the Enchanting Platform (迷魂台) for the most dramatic pillar panoramas.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武陵源区张家界国家森林公园</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=张家界国家森林公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥225 (4-day pass) + ¥72 (Bailong Elevator one way) | ⚠️ Buy the 4-day pass — you'll need it</p>

            <p><strong>Day 6 Morning: Golden Whip Stream (金鞭溪) & Tianzi Mountain (天子山)</strong></p>
            <p>Start early at Golden Whip Stream — a 7.5 km valley trail along a crystal-clear stream running between towering sandstone pillars. The morning mist makes the pillars look like they're floating. The hike is flat and easy (2-3 hours). Then take the cable car up Tianzi Mountain (天子山, ¥72 one way) for the "Imperial Writing Brush" peaks (御笔峰) — the most photographed view in the park. The "Sea of Clouds" (云海) phenomenon on rainy mornings is otherworldly.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武陵源区金鞭溪 / 天子山</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=金鞭溪" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 Included in 4-day pass | 🚡 天子山索道 ¥72 one way</p>

            <p><strong>Day 6 Afternoon: Zhangjiajie Glass Bridge (张家界大峡谷玻璃桥)</strong></p>
            <p>The world's longest and highest glass-bottomed bridge — 430 meters long, 300 meters above the canyon floor. Walk across and look down through the transparent glass panels at the forest canopy below. If that's not enough adrenaline, try the bungee jump (¥2,998) or the "walk of faith" zipline. The bridge is in a separate scenic area from the national park — about 1 hour drive from Wulingyuan. Book tickets online 2-3 days ahead — they limit daily visitors to 8,000.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 慈利县三官寺乡张家界大峡谷</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=张家界大峡谷玻璃桥" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:30–17:00 | 💰 ¥228 (bridge + canyon) | ⚠️ Book 2-3 days in advance online</p>

            <p><strong>Day 6 Option: Tianmen Mountain (天门山)</strong></p>
            <p>If you prefer to skip the Glass Bridge, Tianmen Mountain offers equally spectacular thrills. Take the world's longest cable car (7,455m, 30 minutes) from Zhangjiajie city center to the summit at 1,518m. Walk the glass skywalk (玻璃栈道) clinging to the cliff face, then descend through the Tianmen Cave (天门洞) — a massive natural archway in the mountain, reached by 999 steep steps. The 99 Bends road (通天大道) with its hairpin turns is visible from the cable car.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 永定区天门山国家森林公园</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天门山国家森林公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 08:00–17:00 | 💰 ¥278 (entry + cable car round trip)</p>

            <p><strong>Day 7: Return</strong></p>
            <p>Depart from Zhangjiajie Hehua Airport (flights to major cities) or take the train via Changsha or Huaihua. If time allows, stop at Changsha for a few hours of Hunan cuisine (see the Zhangjiajie → Fenghuang → Changsha route for details).</p>

            <h3>🗺️ Route Tips</h3>
            <ul>
                <li>🌶️ <strong>Spice Survival:</strong> You'll encounter three levels of spicy — Sichuan's málà (numbing-spicy), Chongqing's oily-hot, and Hunan's xiāng là (fragrant-spicy). Order wēi là (微辣, mild) until you're sure. Keep yogurt and sour plum drink handy.</li>
                <li>🚄 <strong>Transport:</strong> Chengdu–Chongqing HSR is frequent and cheap. Chongqing–Zhangjiajie is best by flight (1.5h). Within Zhangjiajie, hire a local driver (¥300-500/day) — the park entrances are far apart.</li>
                <li>🌧️ <strong>Weather:</strong> Zhangjiajie is famous for mist and rain — this actually makes it MORE beautiful (the floating mountain effect). Bring a rain jacket. Summer (June–August) is hot and humid but lush. Spring and autumn are ideal.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥5,000–8,000 per person for 7 days (mid-range). Zhangjiajie park tickets + cable cars + elevators can total ¥600+. Flights Chongqing–Zhangjiajie: ¥400-800.</li>
                <li>📱 <strong>Essential Apps:</strong> 高德地图 (navigation), 12306 (train booking), 美团 (food delivery & deals), WeChat Pay / Alipay (payments).</li>
                <li>🏨 <strong>Where to Stay:</strong> In Zhangjiajie, stay near Wulingyuan (武陵源) entrance rather than the city center — it's closer to the park and has more guesthouse options.</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.panda.org.cn" target="_blank">China Conservation and Research Center for Giant Panda</a> · <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a> · <a href="https://www.cqtpb.com" target="_blank">Chongqing Tourism</a> · <a href="https://www.zjjtravel.net" target="_blank">Zhangjiajie Tourism</a></div>`
        },
        {
            title: 'Shanghai → Suzhou → Hangzhou: Poetic Cities & Water Towns (5-6 Days)',
            content: `<p>This 5-6 day route traces the most culturally refined corridor in China — the Jiangnan (江南, "south of the Yangtze") region that has inspired poets, painters, and emperors for 2,000 years. From Shanghai's futuristic skyline to Suzhou's classical gardens and Hangzhou's West Lake, this is China at its most elegant. All three cities are connected by HSR in under 1.5 hours.</p>

            <h3>🌆 Day 1-2: Shanghai — Where East Meets West</h3>

            <p><strong>Day 1 Morning: The Bund (外滩)</strong></p>
            <p>Start at Shanghai's most iconic waterfront — a 1.5 km promenade of 52 heritage buildings representing Art Deco, Baroque, and Neoclassical architecture, facing Pudong's futuristic skyline across the Huangpu River. Best visited at sunrise (6 AM, no crowds) or after dark when the skyline is illuminated. Walk south from the old HSBC building to the Former French Concession for a journey through 150 years of Shanghai history.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 黄浦区中山东一路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=外滩" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">南京东路站</span></div></div>
            <p>🕐 24/7 (outdoor) | 💰 Free</p>

            <p><strong>Day 1 Afternoon: Yu Garden (豫园) & French Concession</strong></p>
            <p>Walk south from the Bund (15 min) to Yu Garden — a 400-year-old classical Chinese garden with rockeries, koi ponds, and pavilions. The surrounding bazaar (豫园商城) has traditional tea houses and the famous Nanxiang steamed buns (南翔馒头店). Then take Metro Line 10 to the Former French Concession (法租界) — walk along Wukang Road (武康路) for Instagram-worthy shots of the iconic Wukang Mansion (武康大楼, 1924), tree-lined streets, Art Deco architecture, and independent cafes.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 豫园: 黄浦区安仁街137号 / 武康大楼: 徐汇区淮海中路1842-1858号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=豫园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">豫园站</span></div></div>
            <p>🕐 豫园 09:00–16:45 | 💰 ¥40</p>

            <p><strong>Day 2: Tianzifang (田子坊) & Nanjing Road (南京路步行街)</strong></p>
            <p>Tianzifang is a labyrinth of art galleries, craft shops, and tiny bars squeezed into renovated shikumen (石库门) lane houses — Shanghai's unique architectural fusion of Western and Chinese styles. Then head to Nanjing Road (南京路步行街), China's most famous shopping boulevard — 1.2 km of neon-lit stores stretching from People's Square to the Bund. Take the little tourist train (¥5) for a fun ride down the pedestrian street.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 田子坊: 黄浦区泰康路210弄 / 南京路: 黄浦区南京东路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=田子坊" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line9">🚇 9号线</span><span class="station-name">打浦桥站</span></div></div>
            <p>🕐 10:00–22:00 (Tianzifang) | 💰 Free (entry)</p>

            <h3>🌸 Day 3: HSR to Suzhou — Gardens & Silk</h3>

            <p><strong>Getting There: HSR Shanghai → Suzhou</strong></p>
            <p>The Shanghai–Suzhou HSR takes just 25-30 minutes. Second class: ¥39.5. Trains depart every 10-15 minutes from Shanghai Hongqiao Station (上海虹桥站) or Shanghai Station (上海站). This is one of the most frequent HSR services in the world — you can literally show up and buy a ticket for the next train.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 上海虹桥站: 闵行区申贵路1500号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=上海虹桥站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sh-line2">🚇 2号线</span><span class="metro-badge metro-sh-line10">🚇 10号线</span><span class="station-name">虹桥火车站</span></div></div>

            <p><strong>Day 3 Morning: Humble Administrator's Garden (拙政园)</strong></p>
            <p>The largest and most famous of Suzhou's 69 classical gardens — a UNESCO World Heritage Site since 1997. Built in 1509, the garden covers 5.2 hectares of ponds, pavilions, bamboo groves, and covered walkways designed to frame views like living Chinese landscape paintings. The "36 Mandarin Duck Hall" (三十六鸳鸯馆) with its blue glass windows is particularly stunning. Allow 2-3 hours. <strong>Tip:</strong> Arrive at opening (7:30 AM) to beat the tour groups.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 姑苏区东北街178号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=拙政园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sz-line4">🚇 4号线</span><span class="station-name">北寺塔站</span></div></div>
            <p>🕐 07:30–17:30 (Mar–Nov) / 07:30–17:00 (Dec–Feb) | 💰 ¥70 (Apr–Oct) / ¥50 (Nov–Mar) | ⚠️ Book online in advance</p>

            <p><strong>Day 3 Afternoon: Pingjiang Road (平江路) & Tiger Hill (虎丘)</strong></p>
            <p>Pingjiang Road is Suzhou's best-preserved historic canal street — an 800m cobblestone lane running alongside a narrow canal, lined with whitewashed houses, teahouses, and silk shops. Take a traditional boat ride (¥50/person, 30 min) along the canal. Then take a taxi (¥15) to Tiger Hill (虎丘) — the "leaning tower of Suzhou" (云岩寺塔), a 47m pagoda that has been leaning for over 1,000 years, predating Pisa's tower by 400 years. Su Shi, the Song Dynasty poet, said: "It is a lifelong pity if having been to Suzhou you did not visit Tiger Hill."</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 平江路: 姑苏区平江路 / 虎丘: 姑苏区虎丘山门内8号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=平江路" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sz-line1">🚇 1号线</span><span class="station-name">相门站</span></div></div>
            <p>🕐 平江路全天 / 虎丘 07:30–18:00 | 💰 平江路免费 / 虎丘 ¥60</p>

            <p><strong>Suzhou Silk (苏州丝绸)</strong></p>
            <p>Suzhou has been China's silk capital for 2,000 years. Visit the Suzhou Silk Museum (苏州丝绸博物馆) near the North Temple Pagoda to see the entire silk-making process — from silkworm cocoons to shimmering fabrics. The gift shop has excellent silk scarves (¥100-500) and quilts (¥800-3,000) that make perfect souvenirs.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 姑苏区人民路2001号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=苏州丝绸博物馆" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-sz-line4">🚇 4号线</span><span class="station-name">北寺塔站</span></div></div>
            <p>🕐 09:00–17:00 (Tue–Sun) | 💰 Free</p>

            <h3>🏘️ Day 4: Water Town Day Trip — Tongli (同里) or Zhouzhuang (周庄)</h3>

            <p><strong>Tongli Water Town (同里古镇)</strong></p>
            <p>A 1,000-year-old water town 18 km southeast of Suzhou — less commercialized than Zhouzhuang and more intimate. The town is built on a network of canals connected by 49 stone bridges. Highlights include the Retreat & Reflection Garden (退思园, a UNESCO World Heritage Site), the Three Bridges loop (三桥 — locals believe walking across all three brings good luck), and the evening lantern-lit canal reflections. Take bus 725 from Suzhou's South Bus Station (苏州汽车南站, 40 min, ¥5) or taxi (¥60-80).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 吴江区同里古镇</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=同里古镇" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:30–21:00 | 💰 ¥100 (联票含退思园等景点) | 🚣 摇橹船 ¥120/船（可坐6人）</p>

            <p><strong>Alternative: Zhouzhuang Water Town (周庄古镇)</strong></p>
            <p>China's most famous water town — more touristy but undeniably beautiful, especially at dawn before the crowds arrive. The twin bridges (双桥) are the most photographed scene in Chinese water town culture. Take a bus from Suzhou's North Bus Station (苏州汽车北站, 1.5 hours, ¥15). Zhouzhuang is best visited on weekdays to avoid massive weekend crowds.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 昆山市周庄古镇</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=周庄古镇" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:30–21:00 | 💰 ¥100 | ⚠️ Weekends extremely crowded — go on a weekday</p>

            <h3>🏝️ Day 5-6: Hangzhou — Paradise on Earth</h3>

            <p><strong>Getting There: HSR Suzhou → Hangzhou</strong></p>
            <p>The HSR takes approximately 1.5 hours. Second class: ¥75. Trains depart frequently from Suzhou Station or Suzhou North Station. Arrive at Hangzhou East Station (杭州东站), which connects to Metro Lines 1 and 4.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 杭州东站: 江干区天城路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=杭州东站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-hz-line1">🚇 1号线</span><span class="metro-badge metro-hz-line4">🚇 4号线</span><span class="station-name">火车东站</span></div></div>

            <p><strong>Day 5: West Lake Boat Ride (西湖游船)</strong></p>
            <p>West Lake (西湖) is China's most celebrated lake — a UNESCO World Heritage Site that has inspired Chinese art for over 1,000 years. Rent a rowing boat (手划船, ¥150/hour for the whole boat, fits 4-6 people) or take the painted pleasure boat (画舫, ¥55/person) to the island with the famous Three Pools Mirroring the Moon (三潭印月) — the scene on the back of the ¥1 bill. Walk the Su Causeway (苏堤) and Bai Causeway (白堤), both lined with willow trees and peach blossoms (spectacular in spring). The "Broken Bridge" (断桥) at the north end is where the Legend of the White Snake begins.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西湖区西湖风景区</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=西湖" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-hz-line1">🚇 1号线</span><span class="station-name">龙翔桥站</span></div></div>
            <p>🕐 24/7 (outdoor) | 💰 Free (lake) | 🚣 手划船 ¥150/h / 画舫 ¥55/人</p>

            <p><strong>Day 5 Afternoon: Lingyin Temple (灵隐寺)</strong></p>
            <p>One of China's largest and most revered Buddhist temples, founded in 328 AD, nestled in forested hills west of West Lake. The Feilai Feng (飞来峰) grottoes outside the temple entrance contain 470 stone Buddhist carvings dating from the 10th to 14th centuries — the most impressive collection in southeastern China. The main hall's 24.8m-tall camphor wood Buddha statue is awe-inspiring. Allow 2-3 hours.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西湖区灵隐路法云弄1号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=灵隐寺" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥75 (飞来峰) + ¥30 (灵隐寺) = ¥105 total</p>

            <p><strong>Day 6 Morning: Longjing Tea Village (龙井村)</strong></p>
            <p>Hangzhou is the birthplace of Longjing (Dragon Well) green tea — China's most famous and expensive green tea. Visit Longjing Village (龙井村), just 15 minutes southwest of West Lake, where terraced tea plantations cover the hillsides. Walk through the fields, visit a tea farmer's house, and participate in a tea-picking experience (¥50-100, seasonal). The best tea (明前龙井, pre-Qingming Dragon Well, harvested in early April) sells for ¥2,000-10,000/kg. Even a small tin (100g, ¥200-500) makes an unforgettable souvenir. Try <strong>Longjing No. 29 Restaurant (龙井草堂)</strong> for a tea-infused meal in a farmhouse setting.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 西湖区龙井村</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=龙井村" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 全天 | 💰 茶园免费 / 品茶 ¥30-100 / 采茶体验 ¥50-100</p>

            <p><strong>Day 6 Afternoon: Hefang Street (河坊街)</strong></p>
            <p>Hangzhou's most famous pedestrian street — a restored Qing Dynasty commercial street with traditional medicine shops, tea houses, and snack stalls. Watch craftspeople making traditional fans (王星记扇子), scissors (张小泉剪刀), and silk. Try Hangzhou specialties: 西湖醋鱼 (West Lake vinegar fish, ¥68-98), 东坡肉 (Dongpo braised pork, ¥48-68), and 龙井虾仁 (Longjing tea shrimp, ¥88-128) — all served at nearby Zhiweiguan (知味观), Hangzhou's most famous traditional restaurant.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 上城区河坊街 / 知味观: 上城区河坊街83号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=河坊街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-hz-line1">🚇 1号线</span><span class="station-name">定安路站</span></div></div>
            <p>🕐 全天 / 店铺 10:00-22:00 | 💰 ¥50-100/人 小吃</p>

            <h3>🗺️ Route Tips</h3>
            <ul>
                <li>🚄 <strong>HSR Booking:</strong> All three cities are connected by ultra-frequent HSR services. Shanghai–Suzhou runs every 10-15 minutes — no advance booking needed. Suzhou–Hangzhou every 20-30 minutes. Use the 12306 app.</li>
                <li>🌸 <strong>Best Seasons:</strong> Spring (March–May) for peach blossoms at West Lake and garden flowers. Autumn (September–November) for golden ginkgo and clear skies. Summer is hot and humid (35°C+). Avoid Golden Week (Oct 1-7).</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥4,000–7,000 per person for 6 days (mid-range). HSR tickets total: ~¥165. Gardens & attractions: ¥500-800. Hotels: ¥300-600/night. Meals: ¥80-150/day.</li>
                <li>🚂 <strong>Water Towns:</strong> Tongli is more authentic, Zhouzhuang is more famous. Visit on weekdays if possible — weekends bring massive crowds. Both are within 1.5 hours of Suzhou by bus.</li>
                <li>🍵 <strong>Tea Season:</strong> The best Longjing tea is picked in early April (明前茶). If visiting in spring, the tea-picking experience is magical. Buy tea directly from farmers for the best quality and price.</li>
                <li>📱 <strong>Essential Apps:</strong> 12306 (train booking), 高德地图 (navigation), DiDi (ride-hailing), 美团 (food delivery & deals), WeChat Pay / Alipay (payments).</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a> · <a href="https://whc.unesco.org/en/list/813" target="_blank">UNESCO: Classical Gardens of Suzhou</a> · <a href="https://whc.unesco.org/en/list/1334" target="_blank">UNESCO: West Lake Cultural Landscape</a> · <a href="https://www.travelchinaguide.com" target="_blank">Travel China Guide</a></div>`
        },
        {
            title: 'Zhangjiajie → Fenghuang → Changsha: Fantasy Mountains, Ancient Town & Spicy Food (5-6 Days)',
            content: `<p>This 5-6 day route through Hunan province (湖南) takes you from the otherworldly pillar mountains of Zhangjiajie through the dreamy riverside town of Fenghuang to the fiery food capital of Changsha. It's a journey through landscapes that inspired Avatar, a 300-year-old Miao minority town frozen in time, and a city where food is life and everything is spicy.</p>

            <h3>🏔️ Day 1-2: Zhangjiajie — Avatar Mountains</h3>

            <p><strong>Day 1: Zhangjiajie National Forest Park — Yuanjiajie (袁家界) & Golden Whip Stream (金鞭溪)</strong></p>
            <p>Start early at the Zhangjiajie National Forest Park (张家界国家森林公园) — 4,810 hectares of towering sandstone pillars rising through misty clouds. Take the Bailong Elevator (百龙天梯, the world's tallest outdoor elevator at 326m, ¥72 one way) up to Yuanjiajie — the "Avatar Hallelujah Mountain" (哈利路亚山, officially "South Sky Pillar" 南天一柱) is here. Walk the loop trail (2-3 hours) for views of the First Bridge Under Heaven (天下第一桥) — a natural stone bridge connecting two pillars, 350m above the valley floor. In the afternoon, hike Golden Whip Stream (金鞭溪) — a 7.5 km flat valley trail along a crystal-clear stream between towering pillars. The morning mist and afternoon sunlight create completely different moods.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武陵源区张家界国家森林公园</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=张家界国家森林公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥225 (4-day pass) + ¥72 (Bailong Elevator one way) | ⚠️ Buy the 4-day pass — you'll need it</p>

            <p><strong>Day 2: Tianzi Mountain (天子山) & Yangjiajie (杨家界)</strong></p>
            <p>Take the cable car up Tianzi Mountain (天子山, ¥72 one way) for the most spectacular panoramic views. The "Imperial Writing Brush" peaks (御笔峰) and the "Sea of Clouds" (云海) phenomenon on misty mornings are Zhangjiajie's most iconic images. In the afternoon, hike the Yangjiajie section for the "Natural Great Wall" (天然长城) — a ridge of rock formations that genuinely resembles the Great Wall of China from a distance. This section has fewer tourists than Yuanjiajie.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 武陵源区天子山 / 杨家界</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=天子山" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 Included in 4-day pass | 🚡 天子山索道 ¥72 one way</p>

            <h3>🏮 Day 3-4: Fenghuang Ancient Town — Miao Minority Heritage</h3>

            <p><strong>Getting There: Bus from Zhangjiajie to Fenghuang (凤凰古城)</strong></p>
            <p>The bus from Zhangjiajie Central Bus Station (张家界中心汽车站) to Fenghuang takes approximately 4 hours (¥80-100). The route winds through stunning mountain scenery — keep your camera ready. Alternatively, take a train to Jishou (吉首) station (2.5 hours, ¥50) then bus to Fenghuang (1 hour, ¥25). Arrive in the late afternoon for the best experience — Fenghuang transforms at sunset.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 张家界中心汽车站: 永定区官黎坪</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=张家界中心汽车站" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>

            <p><strong>Day 3 Evening: Tuojiang River Night View (沱江夜景)</strong></p>
            <p>Fenghuang Ancient Town (凤凰古城) is a 300-year-old town built along the banks of the Tuojiang River (沱江), home to the Miao (苗族) and Tujia (土家族) ethnic minorities. The town's magic happens at sunset when thousands of red lanterns illuminate the stilted houses (吊脚楼) built on wooden stilts over the river. Walk along the riverside promenade, cross the stone bridges, and watch the reflections of illuminated buildings shimmering on the water. Rent a small boat (乌篷船, ¥30/person) for a river cruise through the illuminated town — the reflections are mesmerizing. This is the most photographed scene in Fenghuang.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 湘西土家族苗族自治州凤凰县沱江镇</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=凤凰古城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 24/7 | 💰 免费（古城自2016年起免费开放）| 🚣 乌篷船 ¥30/人</p>

            <p><strong>Day 4: Exploring Fenghuang — Miao Culture & Stilted Houses</strong></p>
            <p>Spend the day exploring the town's cultural depth. Visit the Former Residence of Shen Congwen (沈从文故居) — the legendary author whose novel "Border Town" (边城) put Fenghuang on the literary map. Walk through the Miao ethnic minority neighborhoods, where women still wear traditional silver headdresses weighing up to 3 kg. Try Miao specialties: 血粑鸭 (blood cake duck, a savory-sweet delicacy), 社饭 (she fan, herb rice wrapped in leaves), and 酸汤鱼 (sour soup fish). Visit the Hong Bridge (虹桥) — a covered stone bridge with shops and a tea house offering panoramic river views from the second floor.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 沈从文故居: 凤凰县沱江镇中营街</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=沈从文故居" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 08:00–17:30 | 💰 免费（故居免费开放）</p>

            <h3>🌶️ Day 5-6: Changsha — Hunan's Spicy Capital</h3>

            <p><strong>Getting There: HSR Fenghuang → Changsha</strong></p>
            <p>Take a bus from Fenghuang to Jishou West Station (吉首西站, 1 hour, ¥25), then HSR to Changsha South Station (长沙南站) — approximately 2.5 hours, ¥165 second class. The train passes through dramatic Hunan mountain scenery and tunnels.</p>

            <p><strong>Day 5 Afternoon: Orange Island (橘子洲) & Yuelu Mountain (岳麓山)</strong></p>
            <p>Orange Island (橘子洲) is a long, narrow island in the Xiang River (湘江) — famous for the massive 32-meter-tall young Mao Zedong sculpture (青年毛泽东雕塑) at its southern tip, depicting the revolutionary leader at age 32. Take the free electric shuttle (观光车, ¥20 round trip) along the island's 5 km length. Then cross to the west bank for Yuelu Mountain (岳麓山) — a scenic hill dotted with ancient temples and the thousand-year-old Yuelu Academy (岳麓书院, one of China's four great ancient academies, founded 976 AD). The Aiwan Pavilion (爱晚亭) at the mountain's foot is one of China's four famous pavilions — especially beautiful when surrounded by red maple leaves in autumn.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 橘子洲: 岳麓区橘子洲头 / 岳麓书院: 岳麓区麓山路273号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=橘子洲" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cs-line2">🚇 2号线</span><span class="station-name">橘子洲站</span></div></div>
            <p>🕐 橘子洲 07:00–22:00 / 岳麓山 07:00–22:00 / 岳麓书院 08:00–17:30 | 💰 橘子洲免费 / 岳麓书院 ¥50</p>

            <p><strong>Day 5 Evening: Hunan Cuisine (湘菜) — Stinky Tofu & Beyond</strong></p>
            <p>Changsha is the spiritual home of Chinese street food culture. The signature dish is 臭豆腐 (chòu dòufu, "stinky tofu") — deep-fried fermented tofu with a crispy exterior and soft, spicy interior. The smell is terrible; the taste is addictive. Try it at the most famous stall on Taiping Street (太平街). Also must-try: 剁椒鱼头 (duòjiāo yútóu, steamed fish head with chopped chili peppers, ¥68-98) — Hunan's most iconic dish. And 口味虾 (kǒuwèi xiā, Changsha-style spicy crayfish, ¥88-128/份) — the city's obsession every summer. For the best 剁椒鱼头, try <strong>Yu's Family Kitchen (炊烟时代)</strong> or <strong>Xiao Chuan (小炒黄牛肉)</strong>.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 炊烟时代: 天心区坡子街138号（多家分店）</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=炊烟时代 坡子街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cs-line1">🚇 1号线</span><span class="metro-badge metro-cs-line2">🚇 2号线</span><span class="station-name">五一广场站</span></div></div>
            <p>🕐 11:00–21:30 | 💰 ¥60-100/person | ⭐ Must-try: 剁椒鱼头, 小炒黄牛肉, 口味虾</p>

            <p><strong>Day 6: Taiping Street (太平街) & Departure</strong></p>
            <p>Taiping Street is Changsha's most atmospheric historic street — a 375m Qing Dynasty lane lined with traditional buildings, snack stalls, teahouses, and cultural shops. It's the epicenter of Changsha's street food scene. Try 茶颜悦色 (Chayan Yuese) — Changsha's cult-status tea brand that doesn't exist outside Hunan (people queue 30+ minutes for their "You Sheng" series). The street also has the Jia Yi Memorial Hall (贾谊故居, free), the former residence of a famous Han Dynasty scholar. For a modern Changsha experience, visit the IFS Tower observation area — the rooftop has the iconic Kaws sculpture and panoramic city views.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 天心区太平街</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=太平街 长沙" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-cs-line1">🚇 1号线</span><span class="metro-badge metro-cs-line2">🚇 2号线</span><span class="station-name">五一广场站</span></div></div>
            <p>🕐 全天 / 店铺 10:00-22:00 | 💰 茶颜悦色 ¥15-20/杯</p>

            <h3>🗺️ Route Tips</h3>
            <ul>
                <li>🌶️ <strong>Spice Level:</strong> Hunan cuisine (湘菜) is among the spiciest in China — it's "fragrant-spicy" (香辣) without Sichuan's numbing sensation. Stinky tofu and fish head are less spicy than they look. Ask for wēi là (微辣) at restaurants if needed.</li>
                <li>🚌 <strong>Zhangjiajie → Fenghuang:</strong> The 4-hour bus ride is scenic but can be nauseating on mountain roads. Take motion sickness medicine if prone. The bus station is in central Zhangjiajie city.</li>
                <li>🌧️ <strong>Weather:</strong> Hunan is hot and humid in summer (35°C+). Zhangjiajie is famous for mist — it makes the pillars MORE beautiful. Spring (April–May) and autumn (September–November) are ideal. Winter can be cold but uncrowded.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥3,500–6,000 per person for 6 days (mid-range). Zhangjiajie park: ¥225 + ¥200 in cable cars/elevator. Bus to Fenghuang: ¥80-100. Fenghuang to Changsha: ¥190. Hotels: ¥150-400/night.</li>
                <li>🏮 <strong>Fenghuang at Night:</strong> The town is magical after dark — arrive by late afternoon and stay at least one night. The riverside hostels with balcony views of the illuminated town are unforgettable (¥200-500/night). Book ahead in peak season.</li>
                <li>📱 <strong>Essential Apps:</strong> 高德地图 (navigation), 12306 (train booking), 美团 (food delivery & deals), WeChat Pay / Alipay (payments).</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.zjjtravel.net" target="_blank">Zhangjiajie Tourism</a> · <a href="https://www.fenghuangtravel.com" target="_blank">Fenghuang Ancient Town</a> · <a href="https://www.changsha.gov.cn" target="_blank">Changsha Government</a> · <a href="https://www.travelchinaguide.com" target="_blank">Travel China Guide</a></div>`
        },
        {
            title: 'Kunming → Dali → Lijiang: Wind, Flower, Snow & Moon (6-7 Days)',
            content: `<p>Yunnan (云南, "South of the Clouds") is China's most diverse and scenic province — a land of snow-capped mountains, tropical jungles, alpine lakes, and 25 ethnic minority groups. This 6-7 day route follows the classic "Dali-Lijiang" trail through northwestern Yunnan, connecting three cities that feel like different countries. The journey is especially popular with French travelers — Yunnan has historical ties to French Indochina, and many local guides speak French. <em>Cette itinéraire est particulièrement adapté aux voyageurs français.</em></p>

            <h3>🌸 Day 1-2: Kunming — Spring City</h3>

            <p><strong>Day 1: Stone Forest (石林) — UNESCO World Heritage</strong></p>
            <p>A day trip from Kunming (90 km southeast). The Stone Forest is a surreal landscape of towering limestone pillars formed 270 million years ago — it looks like a petrified forest from another planet. The Sani people (分支 of the Yi ethnic minority) are the local custodians, and their guides share fascinating legends about each formation. The "Greater Stone Forest" (大石林) is the main area with the iconic Ashima rock formation; the "Lesser Stone Forest" (小石林) is quieter and more photogenic. The site is massive — allow 4-5 hours.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 昆明市石林彝族自治县</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=石林风景区" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥130 | 🚌 Bus from Kunming East Bus Station (¥34, 1.5 hours) or high-speed rail to Shilin West Station (¥30, 20 min)</p>

            <p><strong>Day 1 Evening: Green Lake Park (翠湖公园) & Dianchi Lake (滇池)</strong></p>
            <p>Stroll through Green Lake Park — in winter (November–March), thousands of black-headed gulls from Siberia flock here, creating a magical scene. Then head to Dianchi Lake (滇池), the "Pearl of the Plateau" — China's 6th largest lake at 1,886m elevation. Walk along the Haigeng Park (海埂公园) lakeshore for sunset views across the water to the Western Hills (西山).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 翠湖公园: 五华区翠湖南路67号 / 滇池: 西山区海埂公园</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=翠湖公园" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-km-line1">🚇 1号线</span><span class="station-name">翠湖站</span></div></div>
            <p>🕐 24/7 (park) | 💰 Free</p>

            <p><strong>Day 2: Crossing Bridge Noodles (过桥米线) & Departure</strong></p>
            <p>Before leaving Kunming, try guòqiáo mǐxiàn (过桥米线, Crossing Bridge Noodles) — Yunnan's most famous dish. The story goes that a scholar's wife invented a system of keeping soup hot with a layer of oil so she could carry it across a bridge to her studying husband. The dish arrives as a tray of raw ingredients (sliced chicken, quail eggs, chrysanthemum petals, rice noodles) that you add to a boiling-hot stone pot of broth. The oil layer keeps it hot enough to cook everything instantly. Try <strong>Jianxin Garden (建新园)</strong> — Kunming's most beloved chain since 1906.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 建新园总店: 五华区宝善街195号</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=建新园 宝善街" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a><span class="metro-badge metro-km-line1">🚇 1号线</span><span class="station-name">东风广场站</span></div></div>
            <p>🕐 07:00–21:00 | 💰 ¥25–60/person | ⭐ Must-try: 过桥米线 (状元过桥米线 for the full experience)</p>

            <h3>🏔️ Day 3-4: Dali — Wind, Flowers, Snow & Moon</h3>

            <p><strong>Getting There: HSR Kunming → Dali</strong></p>
            <p>The Kunming–Dali high-speed rail line covers 350 km in just 2 hours. Second class: ¥145. The route passes through stunning mountain scenery — keep your camera ready as you cross the Lancang River (澜沧江, upper Mekong) gorge. Arrive at Dali Station (大理站), 20 km south of the Old Town. Take bus 8 or a taxi (¥50) to Dali Old Town.</p>

            <p><strong>Day 3: Erhai Lake Bike Ride (环洱海骑行)</strong></p>
            <p>Erhai Lake (洱海, "Ear Sea" for its shape) is Dali's crown jewel — a 250 km² alpine lake at 1,972m elevation, framed by the 4,122m Cangshan mountains. Rent an e-bike (电动车, ¥60-80/day) from your guesthouse and ride the eastern shore. The route from Caicun (才村) through Xizhou (喜洲) to Shuanglang (双廊) is the most scenic stretch — 60 km of lakeside roads, rice paddies, and Bai minority villages. Stop at Xizhou for the famous Xizhou Baba (喜洲粑粑, a crispy stuffed flatbread — sweet or savory, both delicious). The lakeside scenery shifts constantly — fishermen casting nets, women washing clothes at the water's edge, cormorant fishing boats, and snow-capped Cangshan reflected in the still water.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 洱海环湖公路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=洱海" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 全天 | 🚲 电动车 ¥60-80/天 / 💰 喜洲粑粑 ¥10-15</p>

            <p><strong>Day 3 Evening: Dali Old Town (大理古城)</strong></p>
            <p>The Old Town is a walled city dating to the 8th century Nanzhao Kingdom. Unlike many "ancient towns" in China that are fully reconstructed, Dali retains genuine historical character — cobblestone streets, traditional Bai-style whitewashed buildings with painted eaves, and the iconic "Foreigner Street" (洋人街) with cafes and bookshops. The night market on Renmin Lu (人民路) is excellent for street food and handmade crafts. Look for Bai tie-dye (扎染) textiles — the indigo-dyed fabrics are UNESCO-recognized intangible cultural heritage. Dali is known for its relaxed, bohemian atmosphere — many artists and writers have moved here from Beijing and Shanghai.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 大理古城: 大理市复兴路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=大理古城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>

            <p><strong>Day 4: Three Pagodas (崇圣寺三塔) & Xizhou Old Town (喜洲古镇)</strong></p>
            <p>The Three Pagodas are Dali's most recognizable landmarks — the central Qianxun Pagoda (千寻塔) stands 69m tall and dates to the 9th century, making it one of the oldest standing structures in southern China. The reflections in the adjacent pool create iconic photo opportunities, especially at sunrise. In the afternoon, visit Xizhou Old Town (喜洲古镇) — a beautifully preserved Bai minority village 18 km north of Dali Old Town, famous for its traditional architecture and Xizhou Baba flatbread. The Linden Centre (喜林苑), a restored Bai mansion-turned-boutique-hotel, offers afternoon tea with stunning rice paddy views (¥168/person).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 崇圣寺三塔: 大理古城北1.5公里 / 喜洲古镇: 大理市喜洲镇</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=崇圣寺三塔" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 三塔 08:00–18:00 | 💰 ¥75</p>

            <h3>🏯 Day 5-7: Lijiang — Naxi Heritage & Snow Mountain</h3>

            <p><strong>Getting There: HSR Dali → Lijiang</strong></p>
            <p>The Dali–Lijiang railway takes approximately 2 hours. Second class: ¥80. Arrive at Lijiang Station (丽江站), 15 km south of the Old Town. Bus 18 or taxi (¥30-40) to the Old Town.</p>

            <p><strong>Day 5: Lijiang Old Town (丽江古城)</strong></p>
            <p>A UNESCO World Heritage Site since 1997, Lijiang Old Town is a maze of cobblestone streets, canals, and wooden buildings of the Naxi people (纳西族). The town was founded 800+ years ago and is unique for its system of waterways — clear spring water flows through every street in stone channels. Climb to the top of Lion Hill (狮子山) or Wangu Tower (万古楼) for panoramic views of the Old Town with Jade Dragon Snow Mountain (玉龙雪山) as backdrop. The town is famous for its nightlife — Bar Street (酒吧街) has everything from traditional Naxi music to live rock. Daytime is for exploring the quieter backstreets — find the "Big Water Wheel" (大水车) at the town's north entrance. At night, listen for the Naxi Ancient Music (纳西古乐) performance — a 500-year-old orchestral tradition unique to the Naxi people.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 丽江古城: 古城区大研古城</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=丽江古城" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 24/7 | 💰 ¥50 (古城维护费, ancient town maintenance fee — sometimes checked randomly)</p>

            <p><strong>Day 6: Jade Dragon Snow Mountain (玉龙雪山)</strong></p>
            <p>At 5,596m, Jade Dragon Snow Mountain is the southernmost glacier in the Northern Hemisphere. Take the large cable car (大索道) to the glacier park at 4,506m — the highest accessible point. From the top station, climb the wooden boardwalk to 4,680m for jaw-dropping views. <strong>Altitude warning:</strong> Even fit visitors may feel dizzy at this elevation. Rent an oxygen bottle (氧气瓶, ¥50-100) at the base. The Blue Moon Valley (蓝月谷) at the mountain's foot is a turquoise-water valley that looks like a Chinese painting come to life — don't miss it. Book cable car tickets online 1-2 days ahead — they sell out!</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 玉龙雪山: 玉龙纳西族自治县</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=玉龙雪山" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 07:00–18:00 | 💰 ¥100 (entry) + ¥120 (large cable car) | ⚠️ Book cable car tickets online 1-2 days ahead — they sell out!</p>

            <p><strong>Day 7: Shuhe Ancient Town (束河古镇) & Departure</strong></p>
            <p>Shuhe is the quieter, more authentic alternative to Lijiang Old Town — just 4 km northwest. Once a major stop on the Ancient Tea Horse Road (茶马古道), it retains a village atmosphere with fewer tourists. Visit the Tea Horse Road Museum (茶马古道博物馆) to understand how tea from Yunnan's mountains was traded to Tibet and beyond on horseback for over 1,000 years. The Naxi people's Dongba script (东巴文) — the world's only living pictographic writing system — is displayed throughout town. Book a Naxi cooking class (¥150-200) to learn dishes like Naxi Baba (纳西粑粑) and baba chicken (粑粑鸡).</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 束河古镇: 古城区束河路</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=束河古镇" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 24/7 | 💰 Free (no entry fee since 2018)</p>

            <p><strong>Optional Day Trip: Lugu Lake (泸沽湖)</strong></p>
            <p>If you have an extra day, Lugu Lake (泸沽湖) is a stunning alpine lake on the Yunnan-Sichuan border, 200 km from Lijiang (4-5 hours by bus, ¥100). Known as the "Kingdom of Women" (女儿国), it's home to the Mosuo people (摩梭族), one of the last matrilineal societies in the world. The crystal-clear lake at 2,685m elevation is surrounded by mountains and small villages. Take a traditional dugout canoe (猪槽船) ride to the islands. The bonfire party (篝火晚会, ¥30) with Mosuo singing and dancing is a highlight. <strong>Note:</strong> The road is winding — take motion sickness medicine.</p>
            <div class="venue-location"><div class="loc-address"><span class="loc-icon">📍</span> 泸沽湖: 宁蒗彝族自治县与盐源县交界处</div><div class="loc-row"><a class="loc-map-link" href="https://www.amap.com/search?query=泸沽湖" target="_blank"><i class="fas fa-map-marker-alt"></i> 高德地图</a></div></div>
            <p>🕐 全天 | 💰 ¥70 (entry) | 🚌 Bus from Lijiang Bus Station (4-5h, ¥100)</p>

            <h3>🗺️ Tips for French Travelers</h3>
            <ul>
                <li>🛂 <strong>Visa-Free Transit:</strong> French passport holders can use the 144-hour (6-day) visa-free transit policy when entering and exiting via different ports. If flying into Kunming and out of Shanghai (or vice versa), you qualify. You must have a confirmed onward ticket to a third country/region. <em>Attention: vérifiez les conditions actuelles sur le site de l'ambassade de Chine avant votre voyage.</em></li>
                <li>🗣️ <strong>French-Speaking Guides:</strong> Yunnan has a surprising number of French-speaking guides due to the province's historical connections with French Indochina. Book through agencies like Yunnan Exploration (yunnanexploration.com) or China Highlights (chinahighlights.com) and request a francophone guide. In Dali and Lijiang, some guesthouse owners speak French.</li>
                <li>🍷 <strong>Wine in Yunnan:</strong> Yunnan has a growing wine industry! The region around Mile (弥勒) produces award-winning Cabernet Sauvignon and rosé at high altitude (1,400m). Try Ao Yun (敖云), China's most prestigious wine (LVMH-owned, ¥2,000+ per bottle), or the excellent local brand Yunnan Red (云南红, ¥50-100). Several wineries near Dali offer tastings — ask your guesthouse.</li>
                <li>🏔️ <strong>Compared to France:</strong> Yunnan's diversity is like compressing all of France into one province — the altitude range (76m to 6,740m at Meili Snow Mountain) creates climates from tropical to arctic. Dali's lakeside setting is often compared to Annecy; Lijiang's Old Town has a Carcassonne-like medieval charm; Shangri-La (中甸) at 3,200m feels like the French Alps with Tibetan monasteries.</li>
                <li>💰 <strong>Budget Estimate:</strong> ¥4,000–7,000 per person for 7 days (mid-range). HSR tickets total: ¥305 (Kunming–Dali ¥145 + Dali–Lijiang ¥80 + local transport ¥80). Hotels: ¥200-500/night in boutique guesthouses. Meals: ¥40-100/day. Yunnan is significantly cheaper than Shanghai.</li>
                <li>📱 <strong>Essential Apps:</strong> 高德地图 (navigation — works offline for downloaded regions), 美团 (restaurants & deals), 翻译 (Google Translate with downloaded Chinese pack), 铁路12306 (train booking). Download offline maps for Yunnan — mobile signal can be patchy in mountainous areas.</li>
                <li>🌡️ <strong>Best Seasons:</strong> March–May (spring flowers, clear skies) and September–November (autumn colors, harvest festivals). June–August is rainy season but lush. December–February is cold but sunny — perfect for snow mountain views. Lugu Lake is most beautiful in spring when the lakeside flowers bloom.</li>
                <li>🏔️ <strong>Altitude Warning:</strong> Kunming (1,892m), Dali (1,972m), Lijiang (2,416m), and Jade Dragon Snow Mountain (4,506m+). Take it easy the first day at each new altitude. Drink plenty of water. If you feel headaches or dizziness at Jade Dragon Snow Mountain, descend immediately and use the oxygen bottles.</li>
            </ul>

            <div class="ar-source">Sources: <a href="https://www.travelchinaguide.com" target="_blank">Travel China Guide</a> · <a href="https://www.yunnanexploration.com" target="_blank">Yunnan Exploration</a> · <a href="https://whc.unesco.org/en/list/811" target="_blank">UNESCO: Old Town of Lijiang</a> · <a href="https://whc.unesco.org/en/list/1111" target="_blank">UNESCO: South China Karst</a> · <a href="https://www.12306.cn" target="_blank">12306 Official Railway</a></div>`
        }
    ]
};
function openTopicDetailPage(topicName) {
    const modal = document.getElementById('topicArticlesModal');
    const titleEl = document.getElementById('topicArticlesModalTitle');
    const bodyEl = document.getElementById('topicArticlesModalBody');
    if (!modal || !bodyEl) return;

    const articles = topicArticles[topicName] || [];
    const guideData = topicGuidesData[topicName];
    const categoryNames = {
        study: '📚 Study in China', school: '🎒 School Life', work: '⚡ Working in China',
        visa: '✈️ Visa & Permits', travel: '🗺️ Travel & Adventure', apps: '📱 Essential China Apps', food: '🥢 Food & Dining',
        life: '🌆 Daily Life', entertainment: '🎬 Entertainment', business: '🚀 Business', language: '💬 Language', rent: '🏠 Rent an Apartment',
        sim: '📱 SIM Card',
        hospital: '🏥 Hospital',
        cultural: '🌏 Cultural Differences'
    };

    titleEl.textContent = categoryNames[topicName] || topicName;

    let html = '';

    // Short guide summary
    if (guideData) {
        html += `<div class="ta-guide-section">
            <h3>${guideData.icon} ${guideData.title}</h3>
            <p>${guideData.subtitle}</p>
        </div>`;
    }


    // Map link
    const mapFiles = {
        food: 'beijing-breakfast-map.html',
        travel: 'travel-map.html',
        hospital: 'hospital-map.html',
        entertainment: 'entertainment-map.html',
        rent: 'rent-map.html'
    };
    if (mapFiles[topicName]) {
        html += `<div class="ta-map-section">
            <a href="${mapFiles[topicName]}" target="_blank" class="ta-map-btn">
                <i class="fas fa-map-marked-alt"></i> View Interactive Map
            </a>
        </div>`;
    }

    // Article list
    if (articles.length > 0) {
        html += '<div class="ta-list">';
        articles.forEach((article, i) => {
            html += `<div class="ta-item" onclick="openArticleReader('${topicName}', ${i})">
                <div class="ta-item-num">${String(i + 1).padStart(2, '0')}</div>
                <div class="ta-item-info">
                    <div class="ta-item-title">${article.title}</div>
                    <div class="ta-item-meta">Tap to read full article</div>
                </div>
                <span class="ta-item-pdf" onclick="event.stopPropagation(); downloadArticlePDF('${topicName}', ${i})" title="Download PDF"><i class="fas fa-file-pdf"></i></span>
                <i class="fas fa-chevron-right ta-item-arrow"></i>
            </div>`;
        });
        html += '</div>';
    } else {
        html += '<div class="topics-empty" style="padding:40px 0;text-align:center;color:rgba(255,255,255,0.4);"><i class="fas fa-book-open" style="font-size:2rem;display:block;margin-bottom:10px;"></i><p>Articles coming soon...</p></div>';
    }

    bodyEl.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTopicArticlesModal() {
    const modal = document.getElementById('topicArticlesModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ===== Topics Search ===== */
function tFormat(key, ...args) {
    const val = t(key);
    if (typeof val === 'function') return val(...args);
    if (args.length && typeof args[0] === 'object') {
        return Object.entries(args[0]).reduce(
            (acc, [k, v]) => acc.replace(new RegExp(`{${k}}`, 'g'), v),
            val
        );
    }
    return val;
}

function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}

function buildTopicsSearchIndex() {
    if (buildTopicsSearchIndex._cache) return buildTopicsSearchIndex._cache;
    const items = [];
    document.querySelectorAll('#topicsPage .topic-card').forEach(card => {
        const topic = card.dataset.topic;
        const guide = (typeof topicGuidesData !== 'undefined') ? topicGuidesData[topic] : null;
        const title = card.querySelector('.topic-cover h2')?.textContent.trim() || '';
        const subtitle = card.querySelector('.topic-subtitle')?.textContent.trim() || '';
        const teaser = card.querySelector('.topic-teaser')?.textContent.trim() || '';
        const tag = card.querySelector('.topic-tag')?.textContent.trim() || '';
        const guideText = guide ? stripHtml(guide.content) : '';
        const articles = (typeof topicArticles !== 'undefined') ? (topicArticles[topic] || []) : [];
        items.push({
            topic, title, subtitle, teaser, tag, guideText,
            icon: guide?.icon || card.querySelector('.topic-icon')?.textContent.trim() || '📘',
            articles: articles.map((a, idx) => ({ idx, title: a.title, text: stripHtml(a.content) })),
            card
        });
    });
    buildTopicsSearchIndex._cache = items;
    return items;
}

function itemMatchesQuery(item, tokens) {
    if (!tokens.length) return { cardHit: true, articleHits: [] };
    const cardFields = [item.title, item.subtitle, item.teaser, item.tag, item.guideText];
    const cardHit = tokens.every(tok => cardFields.some(f => f && f.toLowerCase().includes(tok)));
    const articleHitIdx = [];
    item.articles.forEach((a, i) => {
        const allMatch = tokens.every(tok =>
            a.title.toLowerCase().includes(tok) || a.text.toLowerCase().includes(tok)
        );
        if (allMatch) articleHitIdx.push(i);
    });
    return { cardHit, articleHits: articleHitIdx };
}

function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${escaped})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
}

function makeSnippet(text, query, len = 220) {
    if (!text) return '';
    const lower = text.toLowerCase();
    const q = query.toLowerCase();
    const pos = lower.indexOf(q);
    if (pos === -1) return text.slice(0, len) + (text.length > len ? '…' : '');
    const start = Math.max(0, pos - 60);
    const end = Math.min(text.length, pos + q.length + 160);
    let snippet = text.slice(start, end);
    if (start > 0) snippet = '…' + snippet;
    if (end < text.length) snippet = snippet + '…';
    return snippet;
}

let topicsSearchDebounce;
function filterTopics(query) {
    const input = document.getElementById('topicsSearchInput');
    const meta = document.getElementById('topicsSearchMeta');
    const results = document.getElementById('topicsSearchResults');
    const wrap = document.querySelector('.topics-search-wrap');
    if (!input || !results || !meta || !wrap) return;

    const q = (query || '').trim();
    wrap.classList.toggle('has-query', q.length > 0);

    const index = buildTopicsSearchIndex();
    index.forEach(it => it.card.classList.remove('search-hidden', 'search-match-highlight'));

    if (!q) {
        meta.textContent = t('topicsSearchHint') || '';
        results.classList.remove('active');
        results.innerHTML = '';
        return;
    }

    const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    let totalMatches = 0;
    const matchedItems = [];

    index.forEach(item => {
        const { cardHit, articleHits } = itemMatchesQuery(item, tokens);
        if (!cardHit && articleHits.length === 0) {
            item.card.classList.add('search-hidden');
            return;
        }
        matchedItems.push({ item, articleHitIdx: articleHits });
        item.card.classList.add('search-match-highlight');
        totalMatches += (cardHit ? 1 : 0) + articleHits.length;
    });

    meta.replaceChildren();
    const countEl = document.createElement('b');
    countEl.textContent = String(totalMatches);
    const labelText = (typeof t('topicsSearchResults') === 'function')
        ? tFormat('topicsSearchResults', totalMatches, q)
        : `${totalMatches} result${totalMatches !== 1 ? 's' : ''} for "${q}"`;
    meta.append(countEl, document.createTextNode(' ' + labelText));

    if (matchedItems.length === 0) {
        const emptyHint = t('topicsSearchNoResultsHint') || '';
        const emptyTitle = t('topicsSearchNoResults') || 'No matches found';
        results.innerHTML = `<div class="tsr-empty">
            <i class="fas fa-search"></i>
            <h4>${emptyTitle}</h4>
            <p>${emptyHint}</p>
        </div>`;
        results.classList.add('active');
        return;
    }

    let html = '';
    matchedItems.forEach(({ item, articleHitIdx }) => {
        const guideSnippet = item.guideText ? makeSnippet(item.guideText, q) : '';
        const articleHits = articleHitIdx.map(i => item.articles[i]);
        html += `<div class="tsr-section" data-topic="${item.topic}">
            <div class="tsr-section-head" onclick="this.parentElement.classList.toggle('open')">
                <span class="tsr-section-icon">${item.icon}</span>
                <span class="tsr-section-title">${highlightMatch(item.title, q)}</span>
                <span class="tsr-section-tag">${item.tag}</span>
                <i class="fas fa-chevron-right tsr-section-arrow"></i>
            </div>
            <div class="tsr-section-body">
                ${item.subtitle ? `<div class="tsr-snippet"><em>${highlightMatch(item.subtitle, q)}</em></div>` : ''}
                ${item.teaser ? `<div class="tsr-snippet">${highlightMatch(makeSnippet(item.teaser, q, 200), q)}</div>` : ''}
                ${guideSnippet ? `<div class="tsr-snippet">${highlightMatch(guideSnippet, q)}</div>` : ''}
                ${articleHits.map(a => `
                    <div class="tsr-snippet">
                        <span class="tsr-snippet-title" onclick="openTopicDetailPage('${item.topic}'); setTimeout(() => openArticleReader('${item.topic}', ${a.idx}), 80);">
                            ${highlightMatch(a.title, q)} →
                        </span>
                        ${a.text ? `<div>${highlightMatch(makeSnippet(a.text, q, 180), q)}</div>` : ''}
                    </div>
                `).join('')}
                <div class="tsr-snippet" style="margin-top:8px;">
                    <span class="tsr-snippet-title" onclick="openTopicDetailPage('${item.topic}')">📂 Open topic guide →</span>
                </div>
            </div>
        </div>`;
    });

    results.innerHTML = html;
    results.classList.add('active');
}

function handleTopicsSearchInput(value) {
    clearTimeout(topicsSearchDebounce);
    topicsSearchDebounce = setTimeout(() => filterTopics(value), 120);
}

function clearTopicsSearch() {
    const input = document.getElementById('topicsSearchInput');
    if (input) {
        input.value = '';
        input.focus();
        filterTopics('');
    }
}

/* ===== Featured Topics (home) ===== */
const FEATURED_TOPIC_KEYS = [
    'apps', 'life', 'rent', 'work', 'food', 'travel', 'language', 'hospital'
];

function renderFeaturedTopics() {
    const grid = document.getElementById('featuredTopicsGrid');
    if (!grid) return;
    const index = buildTopicsSearchIndex();
    if (!index.length) return;
    const byKey = Object.fromEntries(index.map(it => [it.topic, it]));
    const picks = FEATURED_TOPIC_KEYS.map(k => byKey[k]).filter(Boolean);
    if (!picks.length) return;
    grid.innerHTML = picks.map((it, i) => {
        const accentRgb = getComputedStyle(it.card).getPropertyValue('--accent-rgb').trim() || '255,107,91';
        return `<div class="ft-card" role="link" tabindex="0"
                    style="--ft-accent: ${accentRgb}; --ft-index: ${i};"
                    onclick="openTopicDetailPage('${it.topic}')"
                    onkeydown="if(event.key==='Enter'){openTopicDetailPage('${it.topic}')}">
            <div class="ft-icon">${it.icon}</div>
            <div class="ft-title">${it.title}</div>
            <div class="ft-subtitle">${it.subtitle || it.teaser}</div>
            <span class="ft-tag">${it.tag}</span>
        </div>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('topicsSearchInput');
    if (input) {
        input.addEventListener('input', e => handleTopicsSearchInput(e.target.value));
        input.addEventListener('keydown', e => {
            if (e.key === 'Escape') clearTopicsSearch();
        });
    }
    filterTopics('');

    renderFeaturedTopics();

    document.querySelectorAll('#topicsPage .topic-card').forEach((c, i) => {
        c.style.setProperty('--card-index', i);
    });

    const arModal = document.getElementById('articleReaderModal');
    const arProgress = document.getElementById('articleReaderProgress');
    if (arModal) {
        arModal.addEventListener('scroll', () => {
            const max = arModal.scrollHeight - arModal.clientHeight;
            const pct = max > 0 ? (arModal.scrollTop / max) * 100 : 0;
            if (arProgress) arProgress.style.setProperty('--ar-progress', pct + '%');
            const header = arModal.querySelector('.article-reader-header');
            if (header) header.classList.toggle('scrolled', arModal.scrollTop > 8);
        });
    }
    const taModal = document.getElementById('topicArticlesModal');
    if (taModal) {
        taModal.addEventListener('scroll', () => {
            const header = taModal.querySelector('.topic-articles-modal-header');
            if (header) header.classList.toggle('scrolled', taModal.scrollTop > 8);
        });
    }
});

/* ===== Article HTML colorizer (text nodes only, safe) ===== */
function colorizeArticleText(text) {
    if (!text) return text;
    let out = text;
    out = out.replace(/(¥[\d,]+(?:[-–~][\d,]+)?(?:\/\w+)?)/g,
        '\u0001<span class="ar-chip">$1</span>\u0002');
    out = out.replace(/([A-Za-z][A-Za-z\s'’\-]{2,30}?)([\u4e00-\u9fff]{1,8})(?=[\s,;.)\]<]|$)/g,
        '$1\u0001<span class="ar-cn">$2</span>\u0002');
    return out;
}

function colorizeArticleHtml(rootEl) {
    if (!rootEl) return;
    const SKIP = new Set(['SCRIPT', 'STYLE', 'A']);
    const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            let p = node.parentNode;
            while (p && p !== rootEl) {
                if (SKIP.has(p.nodeName)) return NodeFilter.FILTER_REJECT;
                p = p.parentNode;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    const targets = [];
    let n;
    while ((n = walker.nextNode())) targets.push(n);
    targets.forEach(node => {
        const colored = colorizeArticleText(node.nodeValue);
        if (colored === node.nodeValue) return;
        const frag = document.createDocumentFragment();
        const parts = colored.split(/\u0001([\s\S]*?)\u0002/g);
        for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
                if (parts[i]) frag.appendChild(document.createTextNode(parts[i]));
            } else if (parts[i]) {
                const tmp = document.createElement('div');
                tmp.innerHTML = parts[i];
                while (tmp.firstChild) frag.appendChild(tmp.firstChild);
            }
        }
        node.parentNode.replaceChild(frag, node);
    });
}

/* ===== Apply topic-card stagger + article enrichment ===== */
const _origOpenTopicDetailPage = openTopicDetailPage;
openTopicDetailPage = function(topicName) {
    _origOpenTopicDetailPage(topicName);
    const body = document.getElementById('topicArticlesModalBody');
    if (body) {
        body.querySelectorAll('.ta-item').forEach((el, i) => {
            el.style.setProperty('--ta-index', i);
        });
    }
};

const _origOpenArticleReader = openArticleReader;
openArticleReader = function(topicName, articleIndex) {
    _origOpenArticleReader(topicName, articleIndex);
    const body = document.getElementById('articleReaderBody');
    if (body) {
        requestAnimationFrame(() => colorizeArticleHtml(body));
    }
};

const _origFilterTopics = filterTopics;
filterTopics = function(query) {
    _origFilterTopics(query);
    const results = document.getElementById('topicsSearchResults');
    if (results) {
        results.querySelectorAll('.tsr-section').forEach((el, i) => {
            el.style.setProperty('--section-index', i);
        });
    }
};


function openArticleReader(topicName, articleIndex) {
    const articles = topicArticles[topicName] || [];
    const article = articles[articleIndex];
    if (!article) return;

    const modal = document.getElementById('articleReaderModal');
    const titleEl = document.getElementById('articleReaderTitle');
    const bodyEl = document.getElementById('articleReaderBody');
    if (!modal || !bodyEl) return;

    titleEl.textContent = article.title;
    bodyEl.innerHTML = `<h2>${article.title}</h2>` + article.content;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Store current topic context and load discussion
    window._currentTopicContext = { topicName, articleIndex };
    loadTopicComments(topicName, articleIndex);
}

// ===== Topic Discussion / Comments =====
async function loadTopicComments(topicName, articleIndex) {
    const listEl = document.getElementById('topicDiscussionList');
    const countEl = document.getElementById('topicDiscussionCount');
    const inputEl = document.getElementById('topicDiscussionInput');
    if (!listEl) return;

    if (inputEl) {
        inputEl.style.display = currentUser ? 'flex' : 'none';
    }

    try {
        const { data, error } = await supabaseClient
            .from('topic_comments')
            .select('*, profiles(name, avatar_url, country_code)')
            .eq('topic_name', topicName)
            .eq('article_index', articleIndex)
            .order('created_at', { ascending: true });

        if (error) throw error;

        const comments = data || [];
        const topLevel = comments.filter(c => !c.parent_id);
        const replies = comments.filter(c => c.parent_id);
        if (countEl) countEl.textContent = comments.length;

        if (comments.length === 0) {
            listEl.innerHTML = '<div class="topic-discussion-empty">No comments yet. Be the first!</div>';
        } else {
            listEl.innerHTML = topLevel.map(c => {
                const cReplies = replies.filter(r => r.parent_id === c.id);
                return `
                <div class="topic-discussion-item">
                    <img src="${c.profiles?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'}" class="topic-discussion-avatar" loading="lazy" alt="avatar" onclick="openUserProfile('${c.user_id}')">
                    <div class="topic-discussion-body">
                        <div class="topic-discussion-meta">
                            <span class="topic-discussion-name">${c.profiles?.name || 'Guest'} ${getFlagEmoji(c.profiles?.country_code || 'UN')}</span>
                            <span class="topic-discussion-time">${formatTimeAgo(c.created_at)}</span>
                        </div>
                        <div class="topic-discussion-text">${escapeHtml(c.content)}</div>
                        <button class="topic-reply-btn" onclick="toggleReplyInput(${c.id})"><i class="fas fa-reply"></i> Reply</button>
                        <div class="topic-reply-input-wrap" id="replyInput-${c.id}" style="display:none">
                            <input type="text" placeholder="Write a reply..." onkeydown="if(event.key==='Enter') submitReply(${c.id}, this)">
                            <button onclick="submitReply(${c.id}, this.previousElementSibling)"><i class="fas fa-paper-plane"></i></button>
                        </div>
                        ${cReplies.length > 0 ? `<div class="topic-replies">${cReplies.map(r => `
                            <div class="topic-reply-item">
                                <img src="${r.profiles?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'}" class="topic-reply-avatar" loading="lazy" alt="avatar">
                                <div class="topic-reply-body">
                                    <span class="topic-reply-name">${r.profiles?.name || 'Guest'} ${getFlagEmoji(r.profiles?.country_code || 'UN')}</span>
                                    <span class="topic-reply-time">${formatTimeAgo(r.created_at)}</span>
                                    <div class="topic-reply-text">${escapeHtml(r.content)}</div>
                                </div>
                            </div>
                        `).join('')}</div>` : ''}
                    </div>
                </div>`;
            }).join('');
            listEl.scrollTop = listEl.scrollHeight;
        }
    } catch (err) {
        console.error('Failed to load topic comments:', err);
        listEl.innerHTML = '<div class="topic-discussion-empty">Failed to load comments</div>';
    }
}

async function submitTopicComment() {
    const inputEl = document.getElementById('topicCommentInput');
    if (!inputEl) return;
    const text = inputEl.value.trim();
    if (!text || !currentUser || !window._currentTopicContext) return;

    const { topicName, articleIndex } = window._currentTopicContext;

    try {
        const { error } = await supabaseClient.from('topic_comments').insert({
            topic_name: topicName,
            article_index: articleIndex,
            user_id: currentUser.id,
            content: text,
            parent_id: null
        });
        if (error) throw error;
        inputEl.value = '';
        await loadTopicComments(topicName, articleIndex);
    } catch (err) {
        console.error('Failed to submit comment:', err);
    }
}

function toggleReplyInput(commentId) {
    const wrap = document.getElementById(`replyInput-${commentId}`);
    if (!wrap) return;
    const isVisible = wrap.style.display !== 'none';
    document.querySelectorAll('.topic-reply-input-wrap').forEach(el => el.style.display = 'none');
    if (!isVisible) {
        wrap.style.display = 'flex';
        wrap.querySelector('input')?.focus();
    }
}

async function submitReply(parentId, inputEl) {
    const text = inputEl.value.trim();
    if (!text || !currentUser || !window._currentTopicContext) return;

    const { topicName, articleIndex } = window._currentTopicContext;

    try {
        const { error } = await supabaseClient.from('topic_comments').insert({
            topic_name: topicName,
            article_index: articleIndex,
            user_id: currentUser.id,
            content: text,
            parent_id: parentId
        });
        if (error) throw error;
        inputEl.value = '';
        await loadTopicComments(topicName, articleIndex);
    } catch (err) {
        console.error('Failed to submit reply:', err);
    }
}

function formatTimeAgo(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    if (diff < 2592000) return Math.floor(diff / 86400) + 'd ago';
    return date.toLocaleDateString();
}

function closeArticleReader() {
    const modal = document.getElementById('articleReaderModal');
    if (modal) {
        modal.classList.remove('active');
        if (!document.getElementById('topicArticlesModal').classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }
}

function filterByTopic(category) {
    navigateTo('stories');
    currentCategory = category;

    // Update stories page category pills
    document.querySelectorAll('.stories-cat-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });

    // Update home page category pills (legacy)
    document.querySelectorAll('.category-filter .category-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });

    renderPosts();
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

function toggleMobileNav() {
    mobileNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function closeMobileNav() {
    mobileNav.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

mobileMenuBtn.addEventListener('click', toggleMobileNav);

document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileNav();
    }
    if (!e.target.closest('.share-dropdown')) {
        document.querySelectorAll('.share-menu').forEach(m => m.classList.remove('active'));
    }

    const notifPanel = document.getElementById('notificationPanel');
    const notifBtn = document.getElementById('notificationBtn');
    if (notifPanel && notifPanel.style.display === 'block') {
        if (!notifPanel.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPanel.style.display = 'none';
        }
    }
});

const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const authModal = document.getElementById('authModal');
const modalClose = document.getElementById('modalClose');
const modalTabs = document.querySelectorAll('.modal-tab');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const submitBtn = document.getElementById('submitBtn');
const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
const countryGroup = document.getElementById('countryGroup');
const identityGroup = document.getElementById('identityGroup');
const identityCards = document.querySelectorAll('.identity-card');

let currentTab = 'login';

function openModal(tab) {
    currentTab = tab;
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    if (tab === 'login') {
        modalTitle.textContent = t('welcomeBackTitle');
        modalSubtitle.textContent = t('loginSubtitle');
        submitBtn.textContent = t('logIn');
        confirmPasswordGroup.style.display = 'none';
        countryGroup.style.display = 'none';
        identityGroup.style.display = 'none';
    } else {
        modalTitle.textContent = t('joinCommunity');
        modalSubtitle.textContent = t('registerSubtitle');
        submitBtn.textContent = t('createAccount');
        confirmPasswordGroup.style.display = 'block';
        countryGroup.style.display = 'block';
        identityGroup.style.display = 'block';
    }
}

function closeModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('passwordInput').value = '';
}

let currentPostType = 'story'; // 'story' or 'topics'

function openNewPostModal() {
    if (!currentUser) { showToast(t('pleaseLogin') || 'Please sign in to share', 'warning'); return; }
    currentPostType = 'story';
    // Reset to type selector view
    document.getElementById('postTypeSelector').style.display = 'block';
    document.getElementById('postFormCard').style.display = 'none';
    navigateTo('newpost');
}

function selectPostType(type) {
    currentPostType = type;
    document.getElementById('postTypeSelector').style.display = 'none';
    document.getElementById('postFormCard').style.display = 'block';
    
    const titleInput = document.getElementById('postTitle');
    const topicSelect = document.getElementById('postTopic');
    const textarea = document.getElementById('postContent');
    const formTitle = document.getElementById('postFormTitle');
    const formSubtitle = document.getElementById('postFormSubtitle');
    const charCount = document.getElementById('charCount');
    
    if (type === 'topics') {
        titleInput.style.display = 'block';
        titleInput.required = true;
        topicSelect.style.display = 'block';
        textarea.maxLength = 20000;
        textarea.placeholder = 'Write your detailed article...';
        formTitle.textContent = 'Write an Article';
        formSubtitle.textContent = 'Start your in-depth knowledge or experience';
        charCount.textContent = textarea.value.length + ' / 20000';
    } else {
        titleInput.style.display = 'none';
        titleInput.required = false;
        titleInput.value = '';
        topicSelect.style.display = 'none';
        topicSelect.value = '';
        textarea.maxLength = 5000;
        textarea.placeholder = 'Start your story...';
        formTitle.textContent = 'Start Your Story';
        formSubtitle.textContent = 'Tell the community about your experience in China';
        charCount.textContent = textarea.value.length + ' / 5000';
    }
    
    // Focus textarea
    setTimeout(() => textarea.focus(), 100);
}

function backToTypeSelector() {
    document.getElementById('postTypeSelector').style.display = 'block';
    document.getElementById('postFormCard').style.display = 'none';
    // Clear form
    document.getElementById('postContent').value = '';
    document.getElementById('postTitle').value = '';
    removeImage();
}

function closeNewPostModal() {
    navigateTo('home');
    document.getElementById('postContent').value = '';
    document.getElementById('postTitle').value = '';
    document.getElementById('postTypeSelector').style.display = 'block';
    document.getElementById('postFormCard').style.display = 'none';
    removeImage();
    updateCharCount(document.getElementById('postContent'));
}

function updateCharCount(textarea) {
    const count = textarea.value.length;
    const max = textarea.maxLength;
    const el = document.getElementById('charCount');
    el.textContent = count + ' / ' + max;
    el.className = 'char-count' + (count > max * 0.9 ? ' danger' : count > max * 0.75 ? ' warning' : '');
}

let selectedImageFile = null;

function previewImage(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { /* showToast('Image too large (max 5MB)'); */ return; }
    selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        const preview = document.getElementById('imagePreview');
        document.getElementById('previewImg').src = e.target.result;
        preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function removeImage() {
    selectedImageFile = null;
    const preview = document.getElementById('imagePreview');
    if (preview) { preview.style.display = 'none'; document.getElementById('previewImg').src = ''; }
    const upload = document.getElementById('imageUpload');
    if (upload) upload.value = '';
}

loginBtn.addEventListener('click', () => openModal('login'));
registerBtn.addEventListener('click', () => openModal('register'));
modalClose.addEventListener('click', closeModal);

authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeModal();
});

modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        openModal(tab.dataset.tab);
    });
});

identityCards.forEach(card => {
    card.addEventListener('click', () => {
        identityCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (!email || !password) return;

    if (currentTab === 'register') {
        const countrySelect = document.getElementById('countrySelect');
        const selectedIdentity = document.querySelector('.identity-card.selected');
        const name = email.split('@')[0];
        const { data, error } = await supabaseClient.auth.signUp({
            email, password,
            options: { data: { name, country: countrySelect?.value || 'UN', identity: selectedIdentity?.querySelector('span')?.textContent || 'Member' } }
        });
        if (error) { console.error(error.message); return; }
        showToast(t('welcomeGuest') + ' 🎉');
    } else {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) { console.error(error.message); return; }
        showToast(t('welcomeGuest') + ' 🎉');
    }
    closeModal();
    await checkSession();
});

async function checkSession(resetPage = true) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        isLoggedIn = true;
        const { data: { user } } = await supabaseClient.auth.getUser();
        const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', user.id).single();
        currentUser = profile || { id: user.id, name: user.user_metadata?.name || user.email.split('@')[0], avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest', country: 'Unknown', country_code: 'UN', identity: 'Member' };

        const isNewUser = !localStorage.getItem('chinadoors_logged_in');
        if (isNewUser) {
            localStorage.setItem('chinadoors_logged_in', 'true');
        }

        const welcomeEl = document.querySelector('.welcome-greeting');
        if (welcomeEl && currentUser) {
            const userName = currentUser.name || currentUser.email?.split('@')[0] || 'User';
            if (isNewUser) {
                welcomeEl.textContent = `Welcome to Cdiscovery, ${userName}! 🎉`;
                setTimeout(() => {
                    // showToast(currentLang === 'fr'
                    //     ? 'Astuce: Ajoutez votre photo de profil et remplissez votre bio!'
                    //     : 'Tip: Add a profile photo and fill in your bio to connect better!');
                }, 1500);
            } else {
                welcomeEl.textContent = `Welcome back, ${userName}! 👋`;
            }
        }
        document.body.classList.add('logged-in');
        if (resetPage) {
            const hero = document.querySelector('.hero');
            if (hero) hero.style.display = 'none';
            const mainContainer = document.getElementById('mainContainer');
            if (mainContainer) mainContainer.style.display = 'grid';
            const categoryFilter = document.querySelector('.category-filter');
            if (categoryFilter) categoryFilter.style.display = 'flex';
            const welcomeBanner = document.getElementById('welcomeBanner');
            if (welcomeBanner) welcomeBanner.style.display = 'block';
            const footer = document.querySelector('.footer');
            if (footer) footer.style.display = 'block';
        }
        window.scrollTo({ top: 0 });
        document.getElementById('mobileProfileLink').style.display = 'block';
        const mobileSignOutLink = document.getElementById('mobileSignOutLink');
        if (mobileSignOutLink) mobileSignOutLink.style.display = 'block';
        const notifBtn = document.getElementById('notificationBtn');
        if (notifBtn) notifBtn.style.display = 'block';
        lastNotificationCheck = Date.now();
        checkForNotifications();
        if (notificationInterval) clearInterval(notificationInterval);
        notificationInterval = setInterval(checkForNotifications, 60000);
        applyGlobalBg();
    } else {
        isLoggedIn = false;
        currentUser = null;
        document.body.classList.remove('logged-in');
        const hero = document.querySelector('.hero');
        if (hero) hero.style.display = 'block';
        document.getElementById('mobileProfileLink').style.display = 'none';
        document.getElementById('mobileSignOutLink').style.display = 'none';
        const notifBtn = document.getElementById('notificationBtn');
        if (notifBtn) notifBtn.style.display = 'none';
        applyGlobalBg();
    }
    await loadPosts();
    await loadCommunityStats();
    renderTrendingTopics();
    if (window.location.hash.startsWith('#post-')) {
        handleHashChange();
    }
    applyTranslations();
    // Hide loading screen smoothly
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
        loadingScreen.classList.add("hidden");
        setTimeout(() => loadingScreen.remove(), 500);
    }
    document.body.classList.remove('loading');
    if (resetPage) {
        highlightNavLink('home');
    }
}

checkSession();

// Failsafe: remove loading class after 1 second even if checkSession hangs
setTimeout(() => {
    document.body.classList.remove("loading");
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
        loadingScreen.classList.add("hidden");
        setTimeout(() => loadingScreen.remove(), 500);
    }
}, 1000);

supabaseClient.auth.onAuthStateChange((event, session) => {
    checkSession(false);
});

// Handle deep linking: #post-123
window.addEventListener('hashchange', handleHashChange);
function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#post-')) {
        const postId = parseInt(hash.replace('#post-', ''));
        if (!isNaN(postId)) {
            const postEl = document.querySelector(`.post-card[data-post-id="${postId}"]`);
            if (postEl) {
                navigateTo('home');
                setTimeout(() => {
                    togglePostExpand(postId);
                    postEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }
    }
}

// Initial hash check handled in loadPosts() after posts are ready

document.getElementById('newPostForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('postContent').value.trim();
    let category = document.getElementById('postTopic').value || document.getElementById('postCategory').value;
    const city = document.getElementById('postCity')?.value || 'unknown';
    if (!content) return;
    if (!currentUser) { showToast(currentLang === 'fr' ? 'Connectez-vous pour publier' : 'Please sign in to post'); return; }

    let imageUrl = null;
    if (selectedImageFile) {
        imageUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxW = 800;
                    const ratio = Math.min(maxW / img.width, maxW / img.height, 1);
                    canvas.width = img.width * ratio;
                    canvas.height = img.height * ratio;
                    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL('image/jpeg', 0.7));
                };
                img.onerror = () => resolve(null);
                img.src = ev.target.result;
            };
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(selectedImageFile);
        });
    }

    const title = document.getElementById('postTitle')?.value.trim() || null;
    const insertData = { user_id: currentUser.id, content, category, city, post_type: currentPostType };
    if (title && currentPostType === 'topics') insertData.title = title;
    if (imageUrl) insertData.image_url = imageUrl;

    const { error } = await supabaseClient.from('posts').insert(insertData);
    if (error) { console.error('Error posting'); return; }
    document.getElementById('postContent').value = '';
    removeImage();
    navigateTo('home');
    await loadPosts();
    showToast(t('postShared') + ' 🎉');
});

function handleNavClick(navTarget) {
    if (navTarget === 'home') {
        currentCategory = 'all';
        categoryPills.forEach(p => p.classList.remove('active'));
        const allPill = document.querySelector('.category-filter .category-pill[data-category="all"]');
        if (allPill) allPill.classList.add('active');
        document.querySelectorAll('.stories-cat-pill').forEach(p => p.classList.remove('active'));
        const storiesAllPill = document.querySelector('.stories-cat-pill[data-category="all"]');
        if (storiesAllPill) storiesAllPill.classList.add('active');
        navigateTo('home');
        renderPosts();
    } else if (navTarget === 'stories') {
        currentCategory = 'all';
        categoryPills.forEach(p => p.classList.remove('active'));
        const allPill = document.querySelector('.category-filter .category-pill[data-category="all"]');
        if (allPill) allPill.classList.add('active');
        document.querySelectorAll('.stories-cat-pill').forEach(p => p.classList.remove('active'));
        const storiesAllPill = document.querySelector('.stories-cat-pill[data-category="all"]');
        if (storiesAllPill) storiesAllPill.classList.add('active');
        navigateTo('stories');
        renderPosts();
    } else if (navTarget === 'explore') {
        navigateTo('explore');
    } else if (navTarget === 'newpost') {
        currentCategory = 'all';
        categoryPills.forEach(p => p.classList.remove('active'));
        const allPill = document.querySelector('.category-filter .category-pill[data-category="all"]');
        if (allPill) allPill.classList.add('active');
        document.querySelectorAll('.stories-cat-pill').forEach(p => p.classList.remove('active'));
        const storiesAllPill = document.querySelector('.stories-cat-pill[data-category="all"]');
        if (storiesAllPill) storiesAllPill.classList.add('active');
        navigateTo('newpost');
        renderPosts();
    } else if (navTarget === 'topics') {
        navigateTo('topics');
    } else if (navTarget === 'about') {
        navigateTo('about');
    } else if (navTarget === 'profile') {
        navigateTo('profile');
    }
}

const allNavLinks = document.querySelectorAll('.nav-links a[data-nav], #mobileNav a[data-nav], .mobile-bottom-nav a[data-nav]');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleNavClick(link.dataset.nav);
    });
});

const categoryPills = document.querySelectorAll('.category-filter .category-pill');
categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.dataset.category;
        // Sync stories page pills
        document.querySelectorAll('.stories-cat-pill').forEach(p => {
            p.classList.toggle('active', p.dataset.category === currentCategory);
        });
        renderPosts();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (authModal.classList.contains('active')) closeModal();
        const npPage = document.getElementById('newPostPage');
        if (npPage && npPage.classList.contains('active')) closeNewPostModal();
    }
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let navScrollTicking = false;

window.addEventListener('scroll', () => {
    if (navScrollTicking) return;
    navScrollTicking = true;
    requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
        lastScrollTop = scrollTop;
        navScrollTicking = false;
    });
});

const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'scale(1.02)';
});
searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'scale(1)';
});
const debouncedSearch = debounce(() => { searchQuery = searchInput.value; renderPosts(); }, 250);
searchInput.addEventListener('input', debouncedSearch);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchQuery = searchInput.value;
        navigateTo('home');
        renderPosts();
        if (searchQuery.trim()) {
            // showToast(`Searching for "${searchQuery}" 🔍`);
        }
    }
});

const categoryMapping = {
    'Best districts in Shanghai': 'travel',
    'Visa policy updates 2026': 'work',
    'Chinese learning resources': 'study',
    'Affordable healthcare tips': 'life',
    'Remote work in China': 'work'
};

const trendingListItems = document.querySelectorAll('.trending-list .trending-item');
trendingListItems.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.querySelector('.trending-number');
        if (!number) return;
        const title = item.querySelector('.trending-title').textContent;
        const category = categoryMapping[title];
        if (category) {
            navigateTo('stories');
            // showToast(`Showing: ${title} 🔍`);
            currentCategory = category;
            // Update home page pills
            categoryPills.forEach(p => p.classList.remove('active'));
            const matchingPill = document.querySelector(`.category-filter .category-pill[data-category="${category}"]`);
            if (matchingPill) matchingPill.classList.add('active');
            // Update stories page pills
            document.querySelectorAll('.stories-cat-pill').forEach(p => p.classList.remove('active'));
            const storiesMatchingPill = document.querySelector(`.stories-cat-pill[data-category="${category}"]`);
            if (storiesMatchingPill) storiesMatchingPill.classList.add('active');
            renderPosts();
        }
    });
});

/* ===== Micro-interactions ===== */



// 2. Nav sliding indicator
function updateNavIndicator() {
    const activeLink = document.querySelector('.nav-links a.active');
    const indicator = document.getElementById('navIndicator');
    if (activeLink && indicator) {
        indicator.style.left = activeLink.parentElement.offsetLeft + 'px';
        indicator.style.width = activeLink.offsetWidth + 'px';
    }
}
setTimeout(updateNavIndicator, 100);
const origHighlightNavLink = highlightNavLink;
highlightNavLink = function(page) {
    origHighlightNavLink(page);
    setTimeout(updateNavIndicator, 50);
};

// 3. Hero parallax blobs follow mouse
const heroEl = document.querySelector('.hero');
if (heroEl) {
    heroEl.addEventListener('mousemove', (e) => {
        const rect = heroEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const blobs = heroEl.querySelectorAll('.blob');
        blobs.forEach((blob, i) => {
            const speed = (i + 1) * 15;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// 4. Cursor spotlight glow on cards
let spotlightRAF = null;
document.addEventListener('mousemove', (e) => {
    if (spotlightRAF) return;
    spotlightRAF = requestAnimationFrame(() => {
        document.querySelectorAll('.spotlight-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mx', x + 'px');
            card.style.setProperty('--my', y + 'px');
        });
        spotlightRAF = null;
    });
});
// Inject CSS for spotlight custom property
const spotlightStyle = document.createElement('style');
spotlightStyle.textContent = `.spotlight-card::after { left: var(--mx, 50%); top: var(--my, 50%); }`;
document.head.appendChild(spotlightStyle);

// 5. Stat counter animation (removed - now using real data from Supabase)

// 7. Scroll reveal for sidebar elements
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

function observeReveals() {
    document.querySelectorAll('.sidebar-card, .footer-content > *').forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
            revealObserver.observe(el);
        }
    });
}
observeReveals();

// 8. Re-observe after dynamic renders
const origRenderPosts = renderPosts;
renderPosts = function() {
    origRenderPosts();
    setTimeout(observeReveals, 100);
};

// 9. Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed; bottom: 30px; right: 30px; width: 48px; height: 48px;
    border-radius: 50%; background: var(--accent-gradient); border: none; color: white;
    font-size: 1.1rem; cursor: pointer; z-index: 900; opacity: 0; pointer-events: none;
    transform: translateY(20px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(255, 107, 91, 0.3); display: flex; align-items: center;
    justify-content: center;
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
        scrollTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
        scrollTopBtn.style.transform = 'translateY(20px)';
    }
}, { passive: true });

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        const bottomNav = document.getElementById('mobileBottomNav');
        if (bottomNav && bottomNav.classList.contains('active')) {
            const viewportHeight = window.visualViewport.height;
            const windowHeight = window.innerHeight;
            if (viewportHeight < windowHeight * 0.8) {
                bottomNav.style.display = 'none';
            } else {
                bottomNav.style.display = 'flex';
            }
        }
    });
}

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-3px)';
    scrollTopBtn.style.boxShadow = '0 8px 30px rgba(255, 107, 91, 0.5)';
});
scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 20px rgba(255, 107, 91, 0.3)';
});

// 10. Particle explosion on like
function createParticles(x, y, container) {
    const colors = ['#ff6b5b', '#ff9a5c', '#ffcc5c', '#ff6b6b', '#ffa07a'];
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const angle = (Math.PI * 2 * i) / 12;
        const velocity = Math.random() * 40 + 30;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;
        particle.style.cssText = `
            position: absolute; left: ${x}px; top: ${y}px;
            width: ${size}px; height: ${size}px; border-radius: 50%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            pointer-events: none; z-index: 100;
            animation: particleBurst 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            --dx: ${dx}px; --dy: ${dy}px;
        `;
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 700);
    }
}

const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleBurst {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Override toggleLike to add particles
const origToggleLike = toggleLike;
toggleLike = function(postId) {
    const btn = document.querySelector(`.post-card[data-post-id="${postId}"] .action-btn`);
    if (btn && !btn.classList.contains('liked')) {
        const rect = btn.getBoundingClientRect();
        createParticles(rect.width / 2, rect.height / 2, btn);
    }
    origToggleLike(postId);
};

// 11. Typing animation for hero title
function animateHeroTitle() {
    const heroH1 = document.querySelector('.hero h1');
    if (!heroH1) return;
    const textBefore = 'Start Your ';
    const textHighlight = 'Story';
    const fullText = textBefore + textHighlight;
    heroH1.innerHTML = '<span id="typingSpan"></span><span class="typing-cursor">|</span>';

    const typingStyle = document.createElement('style');
    typingStyle.textContent = `
        .typing-cursor {
            color: var(--accent-coral);
            animation: cursorBlink 0.8s step-end infinite;
            font-weight: 300;
        }
        @keyframes cursorBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(typingStyle);

    const span = document.getElementById('typingSpan');

    let i = 0;
    let highlightSpan = null;
    function typeNext() {
        if (i < fullText.length) {
            const ch = fullText[i];
            if (i < textBefore.length) {
                if (span) span.textContent += ch;
            } else {
                if (i === textBefore.length) {
                    highlightSpan = document.createElement('span');
                    highlightSpan.style.background = 'var(--accent-gradient)';
                    highlightSpan.style.webkitBackgroundClip = 'text';
                    highlightSpan.style.webkitTextFillColor = 'transparent';
                    highlightSpan.style.backgroundClip = 'text';
                    highlightSpan.id = 'highlightSpan';
                    if (span) span.appendChild(highlightSpan);
                }
                if (highlightSpan) highlightSpan.textContent += ch;
            }
            i++;
            setTimeout(typeNext, 80 + Math.random() * 60);
        } else {
            setTimeout(() => {
                heroH1.innerHTML = 'Start Your <span class="hero-highlight">Story</span><span class="hero-cursor">|</span>';
            }, 1500);
        }
    }
    setTimeout(typeNext, 800);
}
animateHeroTitle();

// 12. Magnetic hover on primary buttons
document.querySelectorAll('.btn-primary, .welcome-action-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// 13. Glowing border on post card hover
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.post-card:hover').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--glow-x', x + 'px');
        card.style.setProperty('--glow-y', y + 'px');
    });
});

const glowStyle = document.createElement('style');
glowStyle.textContent = `
    .post-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: 20px;
        padding: 1px;
        background: radial-gradient(200px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(255, 107, 91, 0.3) 0%, transparent 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .post-card { position: relative; }
    .post-card:hover::before { opacity: 1; }
`;
document.head.appendChild(glowStyle);

function sortByLatest() {
    currentSortMode = 'latest';
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sort-btn[data-sort="latest"]').forEach(b => b.classList.add('active'));
    renderPosts();
    // showToast(currentLang === 'fr' ? 'Affichage des derniers messages' : 'Showing latest posts');
}

function sortByPopular() {
    currentSortMode = 'popular';
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sort-btn[data-sort="popular"]').forEach(b => b.classList.add('active'));
    renderPosts();
    // showToast(currentLang === 'fr' ? 'Affichage des plus populaires' : 'Showing popular posts');
}

/* ===== User Profile Page ===== */
let viewingUserId = null;
let viewingUserData = null;
let previousPage = 'home';
let messageTargetUserId = null;
let messagePollingInterval = null;

async function openUserProfile(userId) {
    if (!userId) return;
    
    const pageSections = ['topicsPage', 'aboutPage', 'profilePage', 'newPostPage', 'storiesPage'];
    for (const p of pageSections) {
        const el = document.getElementById(p);
        if (el && el.classList.contains('active')) {
            previousPage = p.replace('Page', '').toLowerCase();
            break;
        }
    }
    const mainContainer = document.getElementById('mainContainer');
    if (mainContainer && mainContainer.style.display !== 'none') {
        previousPage = 'home';
    }
    
    viewingUserId = userId;
    
    if (currentUser && userId === currentUser.id) {
        navigateTo('profile');
        return;
    }
    
    const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
    
    if (error || !profile) {
        // showToast(currentLang === 'fr' ? 'Utilisateur introuvable' : 'User not found');
        return;
    }
    
    viewingUserData = profile;
    
    document.getElementById('userProfileAvatar').src = profile.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
    document.getElementById('userProfileName').textContent = profile.name || 'Guest User';
    document.getElementById('userProfileCountry').textContent = getFlagEmoji(profile.country_code || 'UN');
    document.getElementById('userProfileIdentity').textContent = profile.identity || 'Member';
    document.getElementById('userProfileBio').textContent = profile.bio || '';
    document.getElementById('userProfileBio').style.display = profile.bio ? 'block' : 'none';
    
    const userPosts = postsData.filter(p => p.user_id === userId);
    document.getElementById('userProfilePostsCount').textContent = userPosts.length;
    
    const { count: likesCount } = await supabaseClient
        .from('likes')
        .select('*', { count: 'exact', head: true })
        .in('post_id', userPosts.map(p => p.id));
    document.getElementById('userProfileLikesCount').textContent = likesCount || 0;
    
    const grid = document.getElementById('userPostsGrid');
    if (userPosts.length === 0) {
        grid.innerHTML = `<div class="empty-profile"><i class="fas fa-pen-nib"></i><h3>${currentLang === 'fr' ? 'Aucun post' : 'No posts yet'}</h3></div>`;
    } else {
        grid.innerHTML = userPosts.map((post, i) => getPostHTML(post, i)).join('');
    }
    
    const msgBtn = document.getElementById('btnSendMessage');
    if (currentUser) {
        msgBtn.style.display = 'flex';
    } else {
        msgBtn.style.display = 'none';
    }
    
    navigateTo('userprofile');
}

function navigateBackFromUser() {
    if (previousPage === 'home') {
        navigateTo('home');
    } else if (previousPage === 'stories') {
        navigateTo('stories');
    } else if (previousPage === 'topics') {
        navigateTo('topics');
    } else if (previousPage === 'about') {
        navigateTo('about');
    } else {
        navigateTo('home');
    }
}

/* ===== Message / DM Functions ===== */
function openMessageModal() {
    if (!currentUser) {
        // showToast(currentLang === 'fr' ? 'Connectez-vous pour envoyer un message' : 'Please sign in to send messages');
        return;
    }
    if (!viewingUserId || !viewingUserData) return;
    
    messageTargetUserId = viewingUserId;
    
    document.getElementById('msgModalAvatar').src = viewingUserData.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
    document.getElementById('msgModalName').textContent = viewingUserData.name || 'Guest User';
    document.getElementById('msgInput').value = '';
    
    const overlay = document.getElementById('msgModalOverlay');
    overlay.classList.add('active');
    
    loadMessages();
    
    if (messagePollingInterval) clearInterval(messagePollingInterval);
    messagePollingInterval = setInterval(loadMessages, 3000);
    
    setTimeout(() => document.getElementById('msgInput').focus(), 100);
}

function closeMessageModal() {
    const overlay = document.getElementById('msgModalOverlay');
    overlay.classList.remove('active');
    if (messagePollingInterval) {
        clearInterval(messagePollingInterval);
        messagePollingInterval = null;
    }
    messageTargetUserId = null;
}

async function loadMessages() {
    try {
        if (!currentUser || !messageTargetUserId) return;
        
        const { data: messages, error } = await supabaseClient
            .from('messages')
            .select('*')
            .or(`and(sender_id.eq.${currentUser.id},receiver_id.eq.${messageTargetUserId}),and(sender_id.eq.${messageTargetUserId},receiver_id.eq.${currentUser.id})`)
            .order('created_at', { ascending: true });
        
        if (error) {
            console.error('Error loading messages:', error);
            return;
        }
        
        const msgBody = document.getElementById('msgBody');
        const msgEmpty = document.getElementById('msgEmpty');
        
        if (!messages || messages.length === 0) {
            msgBody.innerHTML = '';
            msgBody.appendChild(msgEmpty);
            msgEmpty.style.display = 'flex';
            return;
        }
        
        msgEmpty.style.display = 'none';
        
        // Always re-render to show new messages
        
        msgBody.innerHTML = messages.map(m => {
            const isSent = m.sender_id === currentUser.id;
            const time = formatMessageTime(m.created_at);
            let contentHtml = '';
            if (m.image_url) {
                contentHtml = `<img src="${m.image_url}" class="msg-image" onclick="window.open('${m.image_url}','_blank')">`;
            }
            if (m.content) {
                contentHtml += `<div class="msg-text">${escapeHtml(m.content)}</div>`;
            }
            return `<div class="msg-bubble ${isSent ? 'sent' : 'received'}">
                ${contentHtml}
                <div class="msg-bubble-time">${time}</div>
            </div>`;
        }).join('');
        
        msgBody.scrollTop = msgBody.scrollHeight;
        
        const unreadIds = messages.filter(m => m.receiver_id === currentUser.id && !m.is_read).map(m => m.id);
        if (unreadIds.length > 0) {
            await supabaseClient
                .from('messages')
                .update({ is_read: true })
                .in('id', unreadIds);
        }
    } catch (error) {
        console.error('loadMessages error:', error);
    }
}

async function sendMessage() {
    const input = document.getElementById('msgInput');
    const content = input.value.trim();
    if (!content || !currentUser || !messageTargetUserId) return;
    
    const sendBtn = document.getElementById('msgSendBtn');
    sendBtn.disabled = true;
    
    const { error } = await supabaseClient
        .from('messages')
        .insert({
            sender_id: currentUser.id,
            receiver_id: messageTargetUserId,
            content: content,
            image_url: null
        });
    
    sendBtn.disabled = false;
    
    if (error) {
        console.error('Error sending message:', error);
        // showToast(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Failed to send message');
        return;
    }
    
    input.value = '';
    loadMessages();
}

let selectedMsgImage = null;

function handleMsgImageSelect(input) {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
        // showToast(currentLang === 'fr' ? 'Veuillez sélectionner une image' : 'Please select an image file');
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        // showToast(currentLang === 'fr' ? 'Image trop volumineuse (max 5 Mo)' : 'Image too large (max 5MB)');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        selectedMsgImage = e.target.result;
        sendImageMessage();
    };
    reader.readAsDataURL(file);
    input.value = '';
}

async function sendImageMessage() {
    if (!selectedMsgImage || !currentUser || !messageTargetUserId) return;
    
    const sendBtn = document.getElementById('msgSendBtn');
    sendBtn.disabled = true;
    // showToast(currentLang === 'fr' ? 'Envoi de l\'image...' : 'Sending image...');
    
    const { error } = await supabaseClient
        .from('messages')
        .insert({
            sender_id: currentUser.id,
            receiver_id: messageTargetUserId,
            content: '',
            image_url: selectedMsgImage
        });
    
    sendBtn.disabled = false;
    selectedMsgImage = null;
    
    if (error) {
        console.error('Error sending image:', error);
        // showToast(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Failed to send image');
        return;
    }
    
    loadMessages();
}

function formatMessageTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return currentLang === 'fr' ? 'À l\'instant' : 'Just now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString();
}

function escapeHtml2(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

document.getElementById('msgModalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeMessageModal();
});

/* ===== Group Chat ===== */
let groupChatPollingInterval = null;
let activeGroupKey = null;

const identityEmojis = {
    'student': '🎓',
    'worker': '👷',
    'tourist': '📸',
    'business': '💼',
    'researcher': '🔬',
    'other': '🏷️'
};

const identityLabels = {
    en: {
        'student': 'Student', 'worker': 'Worker', 'tourist': 'Tourist',
        'business': 'Business', 'researcher': 'Researcher', 'other': 'Other'
    },
    fr: {
        'student': 'Étudiant', 'worker': 'Travailleur', 'tourist': 'Touriste',
        'business': 'Entrepreneur', 'researcher': 'Chercheur', 'other': 'Autre'
    }
};

function getIdentityEmoji(identity) {
    return identityEmojis[(identity || 'other').toLowerCase()] || '👤';
}

function getIdentityName(identity) {
    const key = (identity || 'other').toLowerCase();
    return (identityLabels[currentLang] && identityLabels[currentLang][key]) || identityLabels.en[key] || identity;
}

function getCountryName(code) {
    const names = {
        'US': 'United States', 'UK': 'United Kingdom', 'CA': 'Canada', 'AU': 'Australia',
        'DE': 'Germany', 'FR': 'France', 'ES': 'Spain', 'IT': 'Italy',
        'NL': 'Netherlands', 'BE': 'Belgium', 'CH': 'Switzerland', 'AT': 'Austria',
        'SE': 'Sweden', 'NO': 'Norway', 'DK': 'Denmark', 'FI': 'Finland',
        'PL': 'Poland', 'CZ': 'Czech Republic', 'HU': 'Hungary', 'RO': 'Romania',
        'RU': 'Russia', 'UA': 'Ukraine', 'TR': 'Turkey', 'JP': 'Japan',
        'KR': 'South Korea', 'IN': 'India', 'SG': 'Singapore', 'MY': 'Malaysia',
        'TH': 'Thailand', 'VN': 'Vietnam', 'PH': 'Philippines', 'ID': 'Indonesia',
        'BR': 'Brazil', 'MX': 'Mexico', 'AR': 'Argentina', 'CL': 'Chile',
        'CO': 'Colombia', 'ZA': 'South Africa', 'NG': 'Nigeria'
    };
    return names[code] || code || 'Unknown';
}

let groupMessagePollingInterval = null;

async function loadGroupList() {
    if (!currentUser) return;

    const listEl = document.getElementById('gcGroupList');
    listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)"><i class="fas fa-spinner fa-spin"></i></div>';

    const { data: profiles, error } = await supabaseClient
        .from('profiles')
        .select('country_code, identity');

    if (error) {
        console.error('Error loading group list:', error);
        listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)">Failed to load groups</div>';
        return;
    }

    // Count members per country group
    const countryMap = {};
    // Count members per identity group
    const identityMap = {};

    (profiles || []).forEach(p => {
        const cc = p.country_code || 'UN';
        const id = (p.identity || 'other').toLowerCase();
        if (!countryMap[cc]) countryMap[cc] = { type: 'country', value: cc, count: 0 };
        countryMap[cc].count++;
        if (!identityMap[id]) identityMap[id] = { type: 'identity', value: id, count: 0 };
        identityMap[id].count++;
    });

    const userCC = currentUser.country_code || 'UN';
    const userIdentity = (currentUser.identity || 'other').toLowerCase();

    // Build group list: country groups first, then identity groups
    const countryGroups = Object.values(countryMap).sort((a, b) => {
        if (a.value === userCC) return -1;
        if (b.value === userCC) return 1;
        return b.count - a.count;
    });
    const identityGroups = Object.values(identityMap).sort((a, b) => {
        if (a.value === userIdentity) return -1;
        if (b.value === userIdentity) return 1;
        return b.count - a.count;
    });

    const allGroups = [...countryGroups, ...identityGroups];

    function renderGroupItem(g) {
        const key = `${g.type}|${g.value}`;
        const isOwn = (g.type === 'country' && g.value === userCC) || (g.type === 'identity' && g.value === userIdentity);
        let icon, name;
        if (g.type === 'country') {
            icon = getFlagEmoji(g.value);
            name = getCountryName(g.value);
        } else {
            icon = getIdentityEmoji(g.value);
            name = getIdentityName(g.value);
        }
        const label = g.type === 'country'
            ? (currentLang === 'fr' ? 'Pays' : 'Country')
            : (currentLang === 'fr' ? 'Identité' : 'Identity');
        return `<div class="gc-group-item ${key === activeGroupKey ? 'active' : ''}" data-group-key="${key}" onclick="selectGroupChat('${g.type}', '${g.value}')">
            <div class="gc-group-icon">${icon}</div>
            <div class="gc-group-info">
                <div class="gc-group-name">${name}${isOwn ? ' ⭐' : ''}</div>
                <div class="gc-group-desc"><span style="opacity:0.5;font-size:0.7em;">${label}</span> · ${g.count} ${currentLang === 'fr' ? 'membres' : 'members'}</div>
            </div>
        </div>`;
    }

    // Render with section headers
    let html = `<div class="gc-section-header">${currentLang === 'fr' ? '🌍 Groupes par pays' : '🌍 Country Groups'}</div>`;
    html += countryGroups.map(renderGroupItem).join('');
    html += `<div class="gc-section-header" style="margin-top:12px;">${currentLang === 'fr' ? '🏷️ Groupes par identité' : '🏷️ Identity Groups'}</div>`;
    html += identityGroups.map(renderGroupItem).join('');
    listEl.innerHTML = html;

    if (!activeGroupKey || !allGroups.find(g => `${g.type}|${g.value}` === activeGroupKey)) {
        selectGroupChat('country', userCC);
    } else {
        const parts = activeGroupKey.split('|');
        selectGroupChat(parts[0], parts[1]);
    }
}

function toggleGcSidebar() {
    const sidebar = document.getElementById('gcSidebar');
    const overlay = document.getElementById('gcSidebarOverlay');
    const btn = document.getElementById('gcToggleBtn');
    const isOpen = sidebar.classList.contains('visible');
    if (isOpen) {
        sidebar.classList.remove('visible');
        overlay.classList.remove('visible');
        if (btn) btn.classList.remove('active');
    } else {
        sidebar.classList.add('visible');
        overlay.classList.add('visible');
        if (btn) btn.classList.add('active');
    }
}

async function openGroupMembers() {
    if (!activeGroupKey) return;
    const overlay = document.getElementById('gmOverlay');
    const list = document.getElementById('gmList');
    const title = document.getElementById('gmTitle');
    
    const parts = activeGroupKey.split('|');
    const groupType = parts[0];
    const groupValue = parts[1];
    
    let icon, name;
    if (groupType === 'country') {
        icon = getFlagEmoji(groupValue);
        name = getCountryName(groupValue);
    } else {
        icon = getIdentityEmoji(groupValue);
        name = getIdentityName(groupValue);
    }
    title.textContent = `${icon} ${name}`;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    list.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-muted)"><i class="fas fa-spinner fa-spin"></i></div>';
    
    let query = supabaseClient.from('profiles').select('id, name, avatar_url, country_code, identity, country');
    if (groupType === 'country') {
        query = query.eq('country_code', groupValue);
    } else {
        query = query.ilike('identity', groupValue);
    }
    const { data: profiles, error } = await query;
    
    if (error || !profiles || profiles.length === 0) {
        list.innerHTML = `<div class="gm-empty"><i class="fas fa-users"></i><p>${currentLang === 'fr' ? 'Aucun membre trouvé' : 'No members found'}</p></div>`;
        return;
    }
    
    list.innerHTML = profiles.map(p => {
        const avatar = p.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
        const name = p.name || 'User';
        const pCountry = getCountryName(p.country_code || 'UN');
        const pFlag = getFlagEmoji(p.country_code || 'UN');
        const isMe = currentUser && p.id === currentUser.id;
        return `<div class="gm-item" onclick="closeGroupMembers(); ${isMe ? "navigateTo('profile')" : "openUserProfile('" + p.id + "')"}">
            <img src="${avatar}" alt="${name}" class="gm-item-avatar" loading="lazy">
            <div class="gm-item-info">
                <div class="gm-item-name">${name}</div>
                <div class="gm-item-country">${pFlag}</div>
            </div>
            ${isMe ? '<span class="gm-item-badge">You</span>' : ''}
        </div>`;
    }).join('');
}

function closeGroupMembers() {
    const overlay = document.getElementById('gmOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

async function selectGroupChat(groupType, groupValue) {
    activeGroupKey = `${groupType}|${groupValue}`;

    document.querySelectorAll('.gc-group-item').forEach(el => {
        el.classList.toggle('active', el.dataset.groupKey === activeGroupKey);
    });

    // Close sidebar on mobile after selecting a group
    const sidebar = document.getElementById('gcSidebar');
    if (sidebar && sidebar.classList.contains('visible')) {
        toggleGcSidebar();
    }

    let icon, name;
    if (groupType === 'country') {
        icon = getFlagEmoji(groupValue);
        name = getCountryName(groupValue);
    } else {
        icon = getIdentityEmoji(groupValue);
        name = getIdentityName(groupValue);
    }
    const label = groupType === 'country'
        ? (currentLang === 'fr' ? 'Pays' : 'Country')
        : (currentLang === 'fr' ? 'Identité' : 'Identity');
    document.getElementById('gcChatTitle').innerHTML = `<span onclick="openGroupMembers()" style="cursor:pointer;">${icon} ${name} <span style="opacity:0.4;font-size:0.75em;">(${label})</span> <i class="fas fa-users" style="font-size:0.75em;opacity:0.6;margin-left:4px;"></i></span>`;

    document.getElementById('gcPlaceholder').style.display = 'none';
    document.getElementById('gcInputArea').style.display = 'flex';
    document.getElementById('gcChatBody').innerHTML = '';

    // Clear old polling and start new one
    if (groupMessagePollingInterval) clearInterval(groupMessagePollingInterval);
    loadGroupMessages();
    groupMessagePollingInterval = setInterval(loadGroupMessages, 3000);
}

async function loadGroupMessages() {
    try {
        if (!currentUser || !activeGroupKey) return;
    
        const parts = activeGroupKey.split('|');
        const groupType = parts[0];
        const groupValue = parts[1];
    
        const { data: messages, error } = await supabaseClient
            .from('group_messages')
            .select('*, profiles(name, avatar_url, country_code)')
            .eq('country_code', groupType)
            .eq('identity', groupValue)
            .order('created_at', { ascending: true })
            .limit(200);
    
        if (error) {
            console.error('Error loading group messages:', error);
            return;
        }
    
        const body = document.getElementById('gcChatBody');
    
        if (!messages || messages.length === 0) {
            body.innerHTML = `<div class="gc-placeholder"><i class="fas fa-comments"></i><p>${currentLang === 'fr' ? 'Pas encore de messages. Soyez le premier !' : 'No messages yet. Be the first to say hello!'}</p></div>`;
            return;
        }
    
        // Always re-render to show new messages from others
    
        body.innerHTML = messages.map(m => {
            const isOwn = m.user_id === currentUser.id;
            const avatar = m.profiles?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest';
            const name = m.profiles?.name || 'Guest';
            const flag = getFlagEmoji(m.profiles?.country_code || 'UN');
            const time = formatMessageTime(m.created_at);
    
            let contentHtml = '';
            if (m.image_url) {
                contentHtml = `<img src="${m.image_url}" class="msg-image" onclick="window.open('${m.image_url}','_blank')">`;
            }
            if (m.content) {
                contentHtml += `<span>${escapeHtml(m.content)}</span>`;
            }
    
            return `<div class="gc-msg ${isOwn ? 'own' : ''}">
                <img src="${avatar}" class="gc-msg-avatar" onclick="openUserProfile('${m.user_id}')" title="${name}">
                <div class="gc-msg-body">
                    <div class="gc-msg-header">
                        <span class="gc-msg-name">${flag} ${name}</span>
                        <span class="gc-msg-time">${time}</span>
                    </div>
                    <div class="gc-msg-content">${contentHtml}</div>
                </div>
            </div>`;
        }).join('');
    
        body.scrollTop = body.scrollHeight;
    } catch (error) {
        console.error('loadGroupMessages error:', error);
    }
}

async function sendGroupMessage() {
    const input = document.getElementById('groupChatInput');
    const content = input.value.trim();
    if (!content || !currentUser || !activeGroupKey) return;

    const parts = activeGroupKey.split('|');
    const groupType = parts[0];
    const groupValue = parts[1];

    const { error } = await supabaseClient
        .from('group_messages')
        .insert({
            user_id: currentUser.id,
            country_code: groupType,
            identity: groupValue,
            content: content,
            image_url: null
        });

    if (error) {
        console.error('Error sending group message:', error);
        // showToast(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Failed to send message');
        return;
    }

    input.value = '';
    loadGroupMessages();
}

let selectedGroupImage = null;

function handleGroupImageSelect(input) {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
        // showToast(currentLang === 'fr' ? 'Veuillez sélectionner une image' : 'Please select an image file');
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        // showToast(currentLang === 'fr' ? 'Image trop volumineuse (max 5 Mo)' : 'Image too large (max 5MB)');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        selectedGroupImage = e.target.result;
        sendGroupImageMessage();
    };
    reader.readAsDataURL(file);
    input.value = '';
}

async function sendGroupImageMessage() {
    if (!selectedGroupImage || !currentUser || !activeGroupKey) return;

    const parts = activeGroupKey.split('|');
    const cc = parts[0];
    const identity = parts[1];

    // showToast(currentLang === 'fr' ? 'Envoi de l\'image...' : 'Sending image...');

    const { error } = await supabaseClient
        .from('group_messages')
        .insert({
            user_id: currentUser.id,
            country_code: cc,
            identity: identity,
            content: '',
            image_url: selectedGroupImage
        });

    selectedGroupImage = null;

    if (error) {
        console.error('Error sending group image:', error);
        // showToast(currentLang === 'fr' ? 'Erreur lors de l\'envoi' : 'Failed to send image');
        return;
    }

    const body = document.getElementById('gcChatBody');
    body.querySelectorAll('.gc-msg').length && (body.innerHTML = '');
    loadGroupMessages();
}

function filterGroupList(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('.gc-group-item').forEach(el => {
        const name = el.querySelector('.gc-group-name').textContent.toLowerCase();
        el.style.display = (!q || name.includes(q)) ? 'flex' : 'none';
    });
}

/* ===== Topic Detail Modal ===== */
function openTopicDetail(topicName, topicKey) {
    const modal = document.getElementById('topicDetailModal');
    const header = document.getElementById('topicModalHeader');
    const guide = document.getElementById('topicModalGuide');
    
    header.innerHTML = `<h2>${topicName}</h2>`;
    
    guide.innerHTML = '';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    renderTopicStories(topicKey);
}

function closeTopicModal() {
    const modal = document.getElementById('topicDetailModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderTopicStories(category) {
    const storiesList = document.getElementById('topicStoriesList');
    const filteredPosts = postsData.filter(post => post.category === category);
    
    if (filteredPosts.length === 0) {
        storiesList.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i class="fas fa-comments"></i>
                <h3>No stories yet</h3>
                <p>Be the first to share about this topic!</p>
            </div>
        `;
        return;
    }
    
    storiesList.innerHTML = filteredPosts.slice(0, 6).map((post, i) => getPostHTML(post, i)).join('');
}

function openTopicStories(category) {
    const modal = document.getElementById('topicDetailModal');
    const header = document.getElementById('topicModalHeader');
    const guide = document.getElementById('topicModalGuide');
    const categoryNames = {
        study: 'Study in China',
        school: 'School Life in China',
        work: 'Working in China',
        visa: 'Visa & Work Permits',
        travel: 'Travel & Adventure',
        food: 'Food & Dining',
        life: 'Daily Life in China',
        entertainment: 'Entertainment & Fun',
        business: 'Business & Entrepreneurship',
        language: 'Language Learning',
        rent: 'Rent an Apartment',
        sim: 'SIM Card & Mobile Service',
        hospital: 'Hospital & Healthcare'
    };
    
    header.innerHTML = `<h2>💬 ${categoryNames[category] || category} Community</h2><p style="color:var(--text-secondary);margin-top:5px;">Join the conversation about this topic</p>`;
    guide.style.display = 'none';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderTopicStories(category);
}
