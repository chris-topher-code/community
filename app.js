(function() {
    const i18n = {
        en: {
            home: 'Home', projects: 'Projects', myProjects: 'My Projects',
            profile: 'Profile', notifications: 'Notifications',
            login: 'Sign In', register: 'Sign Up', logout: 'Sign Out',
            search: 'Search...', createProject: 'New Project',
            singleProject: 'Single Person', teamProject: 'Team Project',
            open: 'Open', inProgress: 'In Progress', completed: 'Completed',
            apply: 'Apply', accept: 'Accept', reject: 'Reject',
            submit: 'Submit', cancel: 'Cancel', save: 'Save', delete: 'Delete',
            comment: 'Comment', leaveMessage: 'Leave a message',
            noProjects: 'No projects yet', noNotifications: 'No notifications',
            noComments: 'No comments yet', noQRCodes: 'No QR codes added yet',
            welcome: 'Welcome', createAccount: 'Create Account',
            email: 'Email', password: 'Password', username: 'Username',
            confirmPassword: 'Confirm Password',
            alreadyHaveAccount: 'Already have an account?',
            dontHaveAccount: "Don't have an account?",
            signIn: 'Sign In', signUp: 'Sign Up', signOut: 'Sign Out',
            requester: 'Requester', receiver: 'Receiver',
            postProject: 'Post a Project', findCollaborators: 'Find Collaborators', getItDone: 'Get It Done',
            loadingProjects: 'Loading projects', loadingYourProjects: 'Loading your projects',
            noProjectsYet: 'No projects yet', beFirstToPost: 'Be the first to post a project!',
            allProjects: 'All Projects', allStatus: 'All Status',
            myProjects: 'My Projects', inProgressTab: 'In Progress', completedTab: 'Completed',
            allProjectsFilter: 'All Projects', asRequester: 'As Requester', asReceiver: 'As Receiver',
            back: 'Back', createNewProject: 'Create New Project',
            postYourProject: 'Post your project needs, find the right collaborators',
            projectTitle: 'Project Title', projectDescription: 'Project Description',
            projectType: 'Project Type', budget: 'Budget', deadline: 'Deadline', contact: 'Contact',
            cancel: 'Cancel', publishProject: 'Publish Project',
            applyForProject: 'Apply for Project', yourMessage: 'Your Message',
            submitApplication: 'Submit Application',
            projectApplications: 'Project Applications',
            singlePersonProject: 'Single Person Project', simpleTaskOnePerson: 'Simple task, one person enough',
            teamProject: 'Team Project', complexTaskTeamwork: 'Complex task, requires teamwork',
            pending: 'Pending', accepted: 'Accepted', rejected: 'Rejected',
            markInProgress: 'Mark In Progress', markCompleted: 'Mark Completed',
            viewApplications: 'View Applications', deleteProject: 'Delete Project',
            comments: 'Comments', noCommentsYet: 'No comments yet. Be the first to comment!',
            leaveComment: 'Leave a comment...', postComment: 'Post Comment',
            signInToComment: 'Sign in to leave a comment.',
            actions: 'Actions', signInToTakeAction: 'Sign in to take action',
            postedBy: 'Posted by', budgetLabel: 'Budget', posted: 'Posted',
            backToProjects: 'Back to Projects',
            howItWorks: 'How It Works',
            joinCommunity: 'Join a community of creators and collaborators. Post projects, find talent, and build amazing things together.',
            getStarted: 'Get Started', browseProjects: 'Browse Projects',
            descriptionWhatNeed: 'Describe what you need and set your budget',
            connectWithPeople: 'Connect with talented people ready to help',
            collaborateComplete: 'Collaborate and complete your project',
            qrCodes: 'QR Codes', addPaymentQRCodes: 'Add your payment QR codes (WeChat, Alipay, etc.)',
            noQRCodesYet: 'No QR codes added yet.', addNewQRCode: 'Add New QR Code',
            qrCodeImage: 'QR Code Image', name: 'Name', type: 'Type',
            wechat: 'WeChat', alipay: 'Alipay', other: 'Other',
            delete: 'Delete', addQRCode: 'Add QR Code',
            messageWall: 'Message Wall', noMessagesYet: 'No messages yet. Leave a message!',
            leaveMessage: 'Leave a message...', postMessage: 'Post Message',
            thisIsYourProfile: 'This is your profile.',
            signInToLeaveMessage: 'Sign in to leave a message.',
            notifications: 'Notifications', noNotificationsYet: 'You\'re all caught up!',
            pleaseSignIn: 'Please Sign In', needToBeLoggedIn: 'You need to be logged in to view your projects.',
            error: 'Error', loading: 'Loading...',
            projectNotFound: 'Project Not Found', selectProjectFromList: 'Please select a project from the list.',
            newApplication: 'New Application',
            applicationAccepted: 'Application Accepted', applicationRejected: 'Application Rejected',
            applicationStatus: 'Your application for the project has been',
            pleaseSignInFirst: 'Please sign in first',
            fillAllRequired: 'Please fill all required fields',
            projectCreated: 'Project created successfully!',
            failedToCreateProject: 'Failed to create project',
            confirmDelete: 'Are you sure you want to delete this project?',
            projectDeleted: 'Project deleted',
            failedToDeleteProject: 'Failed to delete project',
            projectUpdated: 'Project updated!',
            failedToUpdateProject: 'Failed to update project',
            commentAdded: 'Comment added!',
            applicationSubmitted: 'Application submitted!',
            pleaseSelectImageAndName: 'Please select an image and enter a name',
            qrCodeAdded: 'QR Code added!',
            failedToSaveQRCode: 'Failed to save QR code',
            qrCodeDeleted: 'QR Code deleted',
            confirmDeleteQRCode: 'Delete this QR code?',
            messagePosted: 'Message posted!',
            switchedToRole: 'Switched to',
            mode: 'mode',
            accountCreatedCheckEmail: 'Account created! Please check your email to confirm your account.',
            accountCreatedSignIn: 'Account created! Please sign in.',
            signingIn: 'Signing in...',
            invalidCredentials: 'Invalid credentials',
            signInFailed: 'Sign in failed',
            passwordMismatch: 'Passwords do not match',
            passwordMinLength: 'Password must be at least 6 characters',
            creatingAccount: 'Creating account...',
            signUpFailed: 'Sign up failed',
            signedOutSuccessfully: 'Signed out successfully',
            openStatus: 'Open', inProgressStatus: 'In Progress', completedStatus: 'Completed',
            singlePerson: 'Single', multiplePeople: 'Multiple',
            unknown: 'Unknown', negotiable: 'Negotiable', noDeadline: 'No deadline',
            viewDetails: 'View Details',
            applications: 'Applications',
            userNotFound: 'User Not Found',
            loadingProjectDetails: 'Loading project details',
            loadingProfile: 'Loading profile',
            loadingNotifications: 'Loading notifications',
            loadingUserWall: 'Loading user wall',
            historyReceivedProjects: 'Projects Completed as Receiver',
            historyPostedProjects: 'Projects Posted as Requester',
            noHistoryProjects: 'No completed projects yet',
        },
        zh: {
            home: '首页', projects: '项目', myProjects: '我的项目',
            profile: '个人主页', notifications: '通知',
            login: '登录', register: '注册', logout: '退出',
            search: '搜索...', createProject: '创建项目',
            singleProject: '单人项目', teamProject: '多人项目',
            open: '开放', inProgress: '进行中', completed: '已完成',
            apply: '申请', accept: '接受', reject: '拒绝',
            submit: '提交', cancel: '取消', save: '保存', delete: '删除',
            comment: '留言', leaveMessage: '留言',
            noProjects: '暂无项目', noNotifications: '暂无通知',
            noComments: '暂无评论', noQRCodes: '暂无收款码',
            welcome: '欢迎', createAccount: '创建账号',
            email: '邮箱', password: '密码', username: '用户名',
            confirmPassword: '确认密码',
            alreadyHaveAccount: '已有账号？',
            dontHaveAccount: '没有账号？',
            signIn: '登录', signUp: '注册', signOut: '退出',
            requester: '发布者', receiver: '接收者',
            postProject: '发布项目', findCollaborators: '寻找协作者', getItDone: '完成项目',
            loadingProjects: '加载中...', loadingYourProjects: '加载中...',
            noProjectsYet: '暂无项目', beFirstToPost: '成为第一个发布项目的人！',
            allProjects: '所有项目', allStatus: '全部状态',
            myProjects: '我的项目', inProgressTab: '进行中', completedTab: '已完成',
            allProjectsFilter: '全部项目', asRequester: '作为发布者', asReceiver: '作为接收者',
            back: '返回', createNewProject: '创建新项目',
            postYourProject: '发布您的项目需求，找到合适的协作者',
            projectTitle: '项目标题', projectDescription: '项目描述',
            projectType: '项目类型', budget: '预算范围', deadline: '截止日期', contact: '联系方式',
            cancel: '取消', publishProject: '发布项目',
            applyForProject: '申请承接', yourMessage: '您的留言',
            submitApplication: '提交申请',
            projectApplications: '项目申请',
            singlePersonProject: '单人项目', simpleTaskOnePerson: '适合简单任务，单人即可完成',
            teamProject: '多人项目', complexTaskTeamwork: '适合复杂任务，需要团队协作',
            pending: '待处理', accepted: '已接受', rejected: '已拒绝',
            markInProgress: '标记进行中', markCompleted: '标记完成',
            viewApplications: '查看申请', deleteProject: '删除项目',
            comments: '留言', noCommentsYet: '暂无评论，成为第一个留言的人！',
            leaveComment: '留言...', postComment: '发布留言',
            signInToComment: '登录后留言',
            actions: '操作', signInToTakeAction: '登录后操作',
            postedBy: '发布者', budgetLabel: '预算', posted: '发布于',
            backToProjects: '返回项目列表',
            howItWorks: '使用方法',
            joinCommunity: '加入创作者和协作者社区。发布项目，发现人才，共同完成出色的作品。',
            getStarted: '开始使用', browseProjects: '浏览项目',
            descriptionWhatNeed: '描述您的需求并设定预算',
            connectWithPeople: '与准备好帮助您的人才联系',
            collaborateComplete: '协作完成您的项目',
            qrCodes: '收款码', addPaymentQRCodes: '添加您的收款码（微信、支付宝等）',
            noQRCodesYet: '暂无收款码', addNewQRCode: '添加新收款码',
            qrCodeImage: '收款码图片', name: '名称', type: '类型',
            wechat: '微信', alipay: '支付宝', other: '其他',
            delete: '删除', addQRCode: '添加收款码',
            messageWall: '留言墙', noMessagesYet: '暂无留言，留言吧！',
            leaveMessage: '留言...', postMessage: '发布留言',
            thisIsYourProfile: '这是您的个人主页',
            signInToLeaveMessage: '登录后留言',
            notifications: '通知', noNotificationsYet: '暂无通知',
            pleaseSignIn: '请先登录', needToBeLoggedIn: '您需要登录才能查看项目',
            error: '错误', loading: '加载中...',
            projectNotFound: '未找到项目', selectProjectFromList: '请从列表中选择一个项目',
            newApplication: '新申请',
            applicationAccepted: '申请已接受', applicationRejected: '申请被拒绝',
            applicationStatus: '您的项目申请已',
            pleaseSignInFirst: '请先登录',
            fillAllRequired: '请填写所有必填项',
            projectCreated: '项目创建成功！',
            failedToCreateProject: '创建项目失败',
            confirmDelete: '确定要删除此项目吗？',
            projectDeleted: '项目已删除',
            failedToDeleteProject: '删除项目失败',
            projectUpdated: '项目已更新！',
            failedToUpdateProject: '更新项目失败',
            commentAdded: '留言已添加！',
            applicationSubmitted: '申请已提交！',
            pleaseSelectImageAndName: '请选择图片并输入名称',
            qrCodeAdded: '收款码已添加！',
            failedToSaveQRCode: '保存收款码失败',
            qrCodeDeleted: '收款码已删除',
            confirmDeleteQRCode: '确定删除此收款码？',
            messagePosted: '留言已发布！',
            switchedToRole: '已切换为',
            mode: '模式',
            accountCreatedCheckEmail: '账号已创建！请查看邮件确认您的账号。',
            accountCreatedSignIn: '账号已创建！请登录。',
            signingIn: '登录中...',
            invalidCredentials: '用户名或密码错误',
            signInFailed: '登录失败',
            passwordMismatch: '两次密码输入不一致',
            passwordMinLength: '密码至少6位',
            creatingAccount: '创建账号中...',
            signUpFailed: '注册失败',
            signedOutSuccessfully: '已成功退出登录',
            openStatus: '开放', inProgressStatus: '进行中', completedStatus: '已完成',
            singlePerson: '单人', multiplePeople: '多人',
            unknown: '未知', negotiable: '待定', noDeadline: '不限',
            viewDetails: '查看详情',
            applications: '申请',
            userNotFound: '未找到用户',
            loadingProjectDetails: '加载项目详情', loadingProfile: '加载个人主页', loadingNotifications: '加载通知', loadingUserWall: '加载留言墙',
            historyReceivedProjects: '历史承接项目',
            historyPostedProjects: '历史发布项目',
            noHistoryProjects: '暂无历史项目',
        },
        fr: {
            home: 'Accueil', projects: 'Projets', myProjects: 'Mes Projets',
            profile: 'Profil', notifications: 'Notifications',
            login: 'Connexion', register: 'Inscription', logout: 'Déconnexion',
            search: 'Rechercher...', createProject: 'Nouveau Projet',
            singleProject: 'Une Personne', teamProject: 'Équipe',
            open: 'Ouvert', inProgress: 'En Cours', completed: 'Terminé',
            apply: 'Postuler', accept: 'Accepter', reject: 'Rejeter',
            submit: 'Soumettre', cancel: 'Annuler', save: 'Enregistrer', delete: 'Supprimer',
            comment: 'Commentaire', leaveMessage: 'Laisser un message',
            noProjects: 'Aucun projet', noNotifications: 'Aucune notification',
            noComments: 'Aucun commentaire', noQRCodes: 'Aucun code QR ajouté',
            welcome: 'Bienvenue', createAccount: 'Créer un Compte',
            email: 'E-mail', password: 'Mot de passe', username: 'Nom d\'utilisateur',
            confirmPassword: 'Confirmer le mot de passe',
            alreadyHaveAccount: 'Vous avez déjà un compte ?',
            dontHaveAccount: 'Vous n\'avez pas de compte ?',
            signIn: 'Connexion', signUp: 'Inscription', signOut: 'Déconnexion',
            requester: 'Demandeur', receiver: 'Récepteur',
            postProject: 'Publier un Projet', findCollaborators: 'Trouver des Collaborateurs', getItDone: 'Réaliser',
            loadingProjects: 'Chargement des projets...', loadingYourProjects: 'Chargement de vos projets...',
            noProjectsYet: 'Aucun projet', beFirstToPost: 'Soyez le premier à publier un projet !',
            allProjects: 'Tous les Projets', allStatus: 'Tous les Statuts',
            myProjects: 'Mes Projets', inProgressTab: 'En Cours', completedTab: 'Terminé',
            allProjectsFilter: 'Tous les Projets', asRequester: 'En tant que Demandeur', asReceiver: 'En tant que Récepteur',
            back: 'Retour', createNewProject: 'Créer un Nouveau Projet',
            postYourProject: 'Publiez vos besoins, trouvez les bons collaborateurs',
            projectTitle: 'Titre du Projet', projectDescription: 'Description du Projet',
            projectType: 'Type de Projet', budget: 'Budget', deadline: 'Date Limite', contact: 'Contact',
            cancel: 'Annuler', publishProject: 'Publier le Projet',
            applyForProject: 'Postuler pour le Projet', yourMessage: 'Votre Message',
            submitApplication: 'Soumettre la Candidature',
            projectApplications: 'Candidatures au Projet',
            singlePersonProject: 'Projet Solo', simpleTaskOnePerson: 'Tâche simple, une personne suffit',
            teamProject: 'Projet d\'Équipe', complexTaskTeamwork: 'Tâche complexe, nécessite une équipe',
            pending: 'En Attente', accepted: 'Accepté', rejected: 'Refusé',
            markInProgress: 'Marquer En Cours', markCompleted: 'Marquer Terminé',
            viewApplications: 'Voir les Candidatures', deleteProject: 'Supprimer le Projet',
            comments: 'Commentaires', noCommentsYet: 'Aucun commentaire. Soyez le premier !',
            leaveComment: 'Laisser un commentaire...', postComment: 'Publier',
            signInToComment: 'Connectez-vous pour laisser un commentaire.',
            actions: 'Actions', signInToTakeAction: 'Connectez-vous pour agir',
            postedBy: 'Publié par', budgetLabel: 'Budget', posted: 'Publié le',
            backToProjects: 'Retour aux Projets',
            howItWorks: 'Comment Ça Marche',
            joinCommunity: 'Rejoignez une communauté de créateurs et collaborateurs. Publiez des projets, trouvez des talents et construisez ensemble.',
            getStarted: 'Commencer', browseProjects: 'Parcourir les Projets',
            descriptionWhatNeed: 'Décrivez votre besoin et définissez votre budget',
            connectWithPeople: 'Connectez-vous avec des talents prêts à vous aider',
            collaborateComplete: 'Collaborez et réalisez votre projet',
            qrCodes: 'Codes QR', addPaymentQRCodes: 'Ajoutez vos codes QR de paiement (WeChat, Alipay, etc.)',
            noQRCodesYet: 'Aucun code QR ajouté.', addNewQRCode: 'Ajouter un Nouveau Code QR',
            qrCodeImage: 'Image du Code QR', name: 'Nom', type: 'Type',
            wechat: 'WeChat', alipay: 'Alipay', other: 'Autre',
            delete: 'Supprimer', addQRCode: 'Ajouter le Code QR',
            messageWall: 'Mur de Messages', noMessagesYet: 'Aucun message. Laissez un message !',
            leaveMessage: 'Laisser un message...', postMessage: 'Publier le Message',
            thisIsYourProfile: 'C\'est votre profil.',
            signInToLeaveMessage: 'Connectez-vous pour laisser un message.',
            notifications: 'Notifications', noNotificationsYet: 'Vous êtes à jour !',
            pleaseSignIn: 'Veuillez Vous Connecter', needToBeLoggedIn: 'Vous devez être connecté pour voir vos projets.',
            error: 'Erreur', loading: 'Chargement...',
            projectNotFound: 'Projet Non Trouvé', selectProjectFromList: 'Veuillez sélectionner un projet dans la liste.',
            newApplication: 'Nouvelle Candidature',
            applicationAccepted: 'Candidature Acceptée', applicationRejected: 'Candidature Refusée',
            applicationStatus: 'Votre candidature pour le projet a été',
            pleaseSignInFirst: 'Veuillez d\'abord vous connecter',
            fillAllRequired: 'Veuillez remplir tous les champs obligatoires',
            projectCreated: 'Projet créé avec succès !',
            failedToCreateProject: 'Échec de la création du projet',
            confirmDelete: 'Êtes-vous sûr de vouloir supprimer ce projet ?',
            projectDeleted: 'Projet supprimé',
            failedToDeleteProject: 'Échec de la suppression du projet',
            projectUpdated: 'Projet mis à jour !',
            failedToUpdateProject: 'Échec de la mise à jour du projet',
            commentAdded: 'Commentaire ajouté !',
            applicationSubmitted: 'Candidature soumise !',
            pleaseSelectImageAndName: 'Veuillez sélectionner une image et entrer un nom',
            qrCodeAdded: 'Code QR ajouté !',
            failedToSaveQRCode: 'Échec de l\'enregistrement du code QR',
            qrCodeDeleted: 'Code QR supprimé',
            confirmDeleteQRCode: 'Supprimer ce code QR ?',
            messagePosted: 'Message publié !',
            switchedToRole: 'Passé à',
            mode: 'mode',
            accountCreatedCheckEmail: 'Compte créé ! Veuillez vérifier votre e-mail pour confirmer.',
            accountCreatedSignIn: 'Compte créé ! Veuillez vous connecter.',
            signingIn: 'Connexion en cours...',
            invalidCredentials: 'Identifiants invalides',
            signInFailed: 'Échec de la connexion',
            passwordMismatch: 'Les mots de passe ne correspondent pas',
            passwordMinLength: 'Le mot de passe doit contenir au moins 6 caractères',
            creatingAccount: 'Création du compte...',
            signUpFailed: 'Échec de l\'inscription',
            signedOutSuccessfully: 'Déconnecté avec succès',
            openStatus: 'Ouvert', inProgressStatus: 'En Cours', completedStatus: 'Terminé',
            singlePerson: 'Solo', multiplePeople: 'Équipe',
            unknown: 'Inconnu', negotiable: 'À négocier', noDeadline: 'Pas de date limite',
            viewDetails: 'Voir les Détails',
            applications: 'Candidatures',
            userNotFound: 'Utilisateur Non Trouvé',
            loadingProjectDetails: 'Chargement des détails du projet',
            loadingProfile: 'Chargement du profil',
            loadingNotifications: 'Chargement des notifications',
            loadingUserWall: 'Chargement du mur de messages',
            historyReceivedProjects: 'Projets Terminés en Récepteur',
            historyPostedProjects: 'Projets Publiés en Demandeur',
            noHistoryProjects: 'Aucun projet terminé',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    window.t = function(key) { return i18n[currentLang]?.[key] || i18n.en[key] || key; };

    window.translatePage = function(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.getElementById('langBtnEn').classList.toggle('active', lang === 'en');
        document.getElementById('langBtnFr').classList.toggle('active', lang === 'fr');
        updateAllTranslations();
    };

    function updateAllTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = t(key);
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = t(key);
        });
        updateNavTranslations();
        updateRoleBadgeText();
    }

    function updateNavTranslations() {
        const navMap = {
            'nav-home': 'home', 'nav-projects': 'projects', 'nav-myprojects': 'myProjects',
            'nav-newproject': 'createProject', 'nav-login': 'login', 'nav-register': 'register'
        };
        Object.entries(navMap).forEach(([id, key]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = t(key);
        });
        const signOutBtn = document.querySelector('#userInfo button.btn-sm.btn-outline:last-of-type');
        if (signOutBtn && signOutBtn.textContent.includes('Out')) signOutBtn.textContent = t('signOut');
        const profileBtn = document.querySelector('#userInfo .btn-outline');
        if (profileBtn && profileBtn.textContent === 'Profile') profileBtn.textContent = t('profile');
    }

    function updateRoleBadgeText() {
        const badge = document.getElementById('roleBadge');
        const mobileBadge = document.getElementById('mobileRoleBadge');
        if (badge && currentProfile) {
            badge.textContent = currentProfile.role === 'requester' ? t('requester') : t('receiver');
        }
        if (mobileBadge && currentProfile) {
            mobileBadge.textContent = currentProfile.role === 'requester' ? t('requester') : t('receiver');
        }
    }

    function getRoleName(role) {
        return role === 'requester' ? t('requester') : t('receiver');
    }

    const SUPABASE_URL = 'https://byalvlknbqezukucyiul.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5YWx2bGtuYnFlenVrdWN5aXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MjgyMTksImV4cCI6MjA5MzMwNDIxOX0.tu5ZwTTykWy9yjkmqfYponmmAFNuxSTcGTIpqDQiocg';

    async function fetchApi(endpoint, options = {}) {
        const url = SUPABASE_URL + endpoint;
        const headers = {
            'apikey': SUPABASE_KEY,
            'Authorization': 'Bearer ' + (sessionStorage.getItem('sb_token') || SUPABASE_KEY),
            'Content-Type': 'application/json',
            ...options.headers
        };
        const response = await fetch(url, { ...options, headers });
        const text = await response.text();
        let data;
        try { data = JSON.parse(text); } catch { data = text; }
        if (!response.ok) {
            if (response.status === 401 && (data?.msg === 'JWT expired' || data?.error?.message === 'JWT expired')) {
                localStorage.removeItem('sb_session');
                currentUser = null;
                currentProfile = null;
                showToast('Session expired, please login again', 'error');
                updateNavForAuth();
            }
            throw { message: data?.error?.message || data?.msg || data?.message || data || 'Request failed', status: response.status };
        }
        return { data, response };
    }

    const supabase = {
        auth: {
            async signInWithPassword({ email, password }) {
                try {
                    const { data } = await fetchApi('/auth/v1/token?grant_type=password', {
                        method: 'POST',
                        body: JSON.stringify({ email, password })
                    });
                    const session = { access_token: data.access_token, user: data.user };
                    localStorage.setItem('sb_session', JSON.stringify(session));
                    return { data: { session, user: data.user }, error: null };
                } catch (err) {
                    return { data: { session: null, user: null }, error: { message: err.message || 'Invalid credentials' } };
                }
            },

            async signUp({ email, password, options }) {
                try {
                    const { data, response } = await fetchApi('/auth/v1/signup', {
                        method: 'POST',
                        body: JSON.stringify({ email, password, data: options?.data })
                    });
                    if (!response.ok) {
                        let errorMsg = 'Signup failed';
                        if (typeof data === 'string') errorMsg = data;
                        else if (data?.error?.message) errorMsg = data.error.message;
                        else if (data?.msg) errorMsg = data.msg;
                        else if (data?.message) errorMsg = data.message;
                        throw { message: errorMsg, status: response.status };
                    }
                    const user = data?.user || data;
                    return { data: { user, session: data?.session || null }, error: null };
                } catch (err) {
                    return { data: { user: null, session: null }, error: { message: err.message || 'Signup failed' } };
                }
            },

            async signOut() {
                try {
                    await fetchApi('/auth/v1/logout', { method: 'POST' });
                } catch {}
                localStorage.removeItem('sb_session');
                return { error: null };
            },

            async getSession() {
                const stored = localStorage.getItem('sb_session');
                if (stored) {
                    const session = JSON.parse(stored);
                    sessionStorage.setItem('sb_token', session.access_token);
                    return { data: { session }, error: null };
                }
                return { data: { session: null }, error: null };
            },

            onAuthStateChange(callback) {
                this._listener = callback;
            },

            _notifyChange(event, session) {
                if (this._listener) this._listener(event, session);
            }
        }
    };

    supabase.from = function(table) {
        return {
            _table: table,
            _select: '*',
            _eqField: null,
            _eqValue: null,

            select: function(columns = '*') {
                this._select = columns;
                return this;
            },

            insert: function(data) {
                return this._execute(async () => {
                    const { data: result } = await fetchApi('/rest/v1/' + table, {
                        method: 'POST',
                        body: JSON.stringify(data)
                    });
                    return { data: [result], error: null };
                });
            },

            update: function(data) {
                const self = this;
                return this._execute(async () => {
                    let url = '/rest/v1/' + table;
                    if (self._eqField && self._eqValue) {
                        url += '?' + self._eqField + '=eq.' + encodeURIComponent(self._eqValue);
                    }
                    const { data: result } = await fetchApi(url, {
                        method: 'PATCH',
                        body: JSON.stringify(data)
                    });
                    return { data: [result], error: null };
                });
            },

            delete: function() {
                const self = this;
                return this._execute(async () => {
                    let url = '/rest/v1/' + table;
                    if (self._eqField && self._eqValue) {
                        url += '?' + self._eqField + '=eq.' + encodeURIComponent(self._eqValue);
                    }
                    await fetchApi(url, { method: 'DELETE' });
                    return { error: null };
                });
            },

            eq: function(field, value) {
                this._eqField = field;
                this._eqValue = value;
                return this;
            },

            single: function() {
                const self = this;
                return this._execute(async () => {
                    let url = '/rest/v1/' + table + '?select=' + encodeURIComponent(self._select);
                    if (self._eqField && self._eqValue) {
                        url += '&' + self._eqField + '=eq.' + encodeURIComponent(self._eqValue);
                    }
                    url += '&limit=1&offset=0';
                    const { data } = await fetchApi(url);
                    return { data: data?.[0] || null, error: data ? null : { message: 'Not found' } };
                });
            },

            order: function(field, options) {
                this._orderField = field;
                this._orderDesc = options?.ascending === false;
                return this;
            },

            then: function(resolve, reject) {
                this._resolve = resolve;
                this._reject = reject;
                return this;
            },

            _execute: function(fn) {
                const self = this;
                return {
                    then: function(resolve, reject) {
                        fn().then(resolve).catch(reject);
                    },
                    catch: function(reject) { return this; }
                };
            },

            _buildUrl: function() {
                let url = '/rest/v1/' + this._table + '?select=' + encodeURIComponent(this._select);
                if (this._eqField && this._eqValue) {
                    url += '&' + this._eqField + '=eq.' + encodeURIComponent(this._eqValue);
                }
                return url;
            }
        };
    };

    let currentUser = null;
    let currentProfile = null;
    let currentProjectId = null;
    let currentViewingUserId = null;
    let projectsTab = 'active';

    // Navigation history for back button
    let navHistory = [];

    window.navigate = function(page, id, _isBack) {
        try {
            console.log('navigate called with', page, id);
            
            // Track navigation history (skip if navigating back, skip duplicate of current page)
            if (!_isBack) {
                const prevPage = sessionStorage.getItem('currentPage');
                const prevId = sessionStorage.getItem('view_project_id') || '';
                if (prevPage && prevPage !== page) {
                    navHistory.push({ page: prevPage, id: prevId });
                } else if (prevPage === page && id && id !== prevId) {
                    navHistory.push({ page: prevPage, id: prevId });
                }
            }
            
            // Update back button visibility
            updateBackButton();
            
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
            const pageEl = document.getElementById('page-' + page);
            if (pageEl) pageEl.classList.add('active');
            const navBtn = document.getElementById('nav-' + page);
            if (navBtn) navBtn.classList.add('active');
            sessionStorage.setItem('currentPage', page);

            if (page === 'project-detail') {
                if (id) sessionStorage.setItem('view_project_id', id);
                loadProjectDetail();
            } else if (page === 'projects') {
                console.log('projects-list element', document.getElementById('projects-list'));
                loadProjects();
            } else if (page === 'myprojects') {
                loadMyProjects();
            } else if (page === 'profile') {
                loadProfile();
            } else if (page === 'notifications') {
                loadNotifications();
            } else if (page === 'user-wall') {
                if (id) {
                    currentViewingUserId = id;
                    loadUserWall(id);
                }
            }
        } catch(e) {
            console.error('Navigate error:', e);
        }
    };

    window.goBack = function() {
        if (navHistory.length === 0) return;
        const prev = navHistory.pop();
        updateBackButton();
        navigate(prev.page, prev.id || undefined, true);
    };

    function updateBackButton() {
        const btn = document.getElementById('backBtn');
        if (!btn) return;
        if (navHistory.length > 0) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }

    window.toggleRole = function() {
        if (!currentProfile) return;
        const newRole = currentProfile.role === 'requester' ? 'receiver' : 'requester';
        const roleName = getRoleName(newRole);
        updateProfile({ role: newRole });
        currentProfile.role = newRole;
        document.getElementById('roleBadge').textContent = roleName;
        const currentPage = sessionStorage.getItem('currentPage');
        if (currentPage) navigate(currentPage);
    };

    async function updateProfile(data) {
        if (!currentUser) return;
        await supabase.from('profiles').eq('id', currentUser.id).update(data);
        currentProfile.role = data.role || currentProfile.role;
        document.getElementById('roleBadge').textContent = getRoleName(currentProfile.role);
    }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    async function loadCurrentUser() {
        try {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                currentUser = data.session.user;
                const { data: profile } = await supabase.from('profiles').select('*').eq('id', currentUser.id).single();
                currentProfile = profile;
                updateNavForAuth();
                updateNotificationBadge();
            }
        } catch (e) {
            console.log('Session check failed:', e);
        }
    }

    function updateNavForAuth() {
        const userInfo = document.getElementById('userInfo');
        const navLogin = document.getElementById('nav-login');
        const navRegister = document.getElementById('nav-register');
        const mobileUserBar = document.getElementById('mobileUserBar');

        if (currentUser) {
            if (userInfo) userInfo.classList.add('visible');
            if (navLogin) navLogin.style.display = 'none';
            if (navRegister) navRegister.style.display = 'none';
            if (mobileUserBar) {
                mobileUserBar.style.display = 'flex';
                const mobileUserEmail = document.getElementById('mobileUserEmail');
                if (mobileUserEmail) mobileUserEmail.textContent = currentUser.email;
            }
            const userEmail = document.getElementById('userEmail');
            if (userEmail) userEmail.textContent = currentUser.email;
            if (currentProfile) {
                const roleBadge = document.getElementById('roleBadge');
                const mobileRoleBadge = document.getElementById('mobileRoleBadge');
                if (roleBadge) roleBadge.textContent = getRoleName(currentProfile.role);
                if (mobileRoleBadge) mobileRoleBadge.textContent = getRoleName(currentProfile.role);
                if (!currentProfile.qrCodes) currentProfile.qrCodes = [];
            }
        } else {
            if (userInfo) userInfo.classList.remove('visible');
            if (navLogin) navLogin.style.display = 'block';
            if (navRegister) navRegister.style.display = 'block';
            if (mobileUserBar) mobileUserBar.style.display = 'none';
        }
        updateNavTranslations();
    }

    window.toggleMobileNav = function() {
        const nav = document.querySelector('nav');
        if (nav) nav.classList.toggle('mobile-open');
    };

    window.handleSignIn = async function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        showToast('Signing in...', 'info');

        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                showToast(error.message, 'error');
                return;
            }

            currentUser = data.user;
            const { data: profile } = await supabase.from('profiles').select('*').eq('id', currentUser.id).single();
            currentProfile = profile;

            supabase.auth._notifyChange('SIGNED_IN', data.session);
            updateNavForAuth();
            showToast('Welcome back!', 'success');
            navigate('projects');
        } catch (e) {
            showToast(e.message || 'Sign in failed', 'error');
        }
    };

    window.handleSignUp = async function() {
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirm = document.getElementById('reg-password-confirm').value;

        if (password !== confirm) {
            showToast('Passwords do not match', 'error');
            return;
        }

        if (password.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return;
        }

        showToast('Creating account...', 'info');

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: { username } }
            });

            if (error) {
                showToast(error.message, 'error');
                return;
            }

            if (data.user?.id) {
                const { error: profileError } = await supabase.from('profiles').insert({
                    id: data.user.id,
                    username,
                    email,
                    role: 'requester',
                    qrCodes: []
                });
                if (profileError) {
                    console.error('Profile creation warning:', profileError);
                }
            }

            if (data.session === null && data.user) {
                showToast('Account created! Please check your email to confirm your account.', 'success');
                navigate('login');
            } else {
                showToast('Account created! Please sign in.', 'success');
                navigate('login');
            }
        } catch (e) {
            showToast(e.message || 'Sign up failed', 'error');
        }
    };

    window.handleSignOut = async function() {
        await supabase.auth.signOut();
        currentUser = null;
        currentProfile = null;
        supabase.auth._notifyChange('SIGNED_OUT', null);
        updateNavForAuth();
        showToast('Signed out successfully', 'success');
        navigate('home');
    };

    window.loadProjects = function() {
        console.log('loadProjects called, container:', document.getElementById('projects-list'));
        const container = document.getElementById('projects-list');
        let statusFilter = document.getElementById('filter-status')?.value || '';
        statusFilter = statusFilter.replace('in-progress', 'in_progress');

        container.innerHTML = '<div class="loading visible">' + t('loadingProjects') + '</div>';

        let projects = JSON.parse(localStorage.getItem('projects') || '[]');
        console.log('projects loaded', projects.length);

        const renderAndReturn = () => {
            if (projects.length > 0) {
                renderProjects(projects, statusFilter, container);
            } else {
                renderProjects(projects, statusFilter, container);
            }
        };

        const session = localStorage.getItem('sb_session');
        if (session) {
            fetchApi('/rest/v1/projects?select=*&order=created_at.desc')
                .then(({ data }) => {
                    if (data && data.length > 0) {
                        const localIds = projects.map(p => p.id);
                        const newProjects = data.filter(p => !localIds.includes(p.id));
                        projects = [...projects, ...newProjects];
                    }
                    renderProjects(projects, statusFilter, container);
                })
                .catch(() => {
                    renderProjects(projects, statusFilter, container);
                });
        } else {
            renderProjects(projects, statusFilter, container);
        }
    };

    function renderProjects(projects, statusFilter, container) {
        console.log('renderProjects called, projects:', projects.length);
        if (statusFilter) {
            projects = projects.filter(p => p.status === statusFilter);
        }

        if (!projects || projects.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>' + t('noProjectsYet') + '</h3><p>' + t('beFirstToPost') + '</p></div>';
            return;
        }

        const statusMap = {
            'open': t('openStatus'),
            'in_progress': t('inProgressStatus'),
            'completed': t('completedStatus')
        };

        const typeMap = {
            'single': t('singlePerson'),
            'team': t('multiplePeople'),
            '单人项目': t('singlePerson'),
            '多人项目': t('multiplePeople')
        };

        container.innerHTML = '<div class="projects-grid">' + projects.map(p => `
            <div class="project-card" onclick="viewProject('${p.id}')">
                <div class="project-card-header">
                    <h3>${escapeHtml(p.title)}</h3>
                    ${p.project_type ? `<span class="badge badge-team">${typeMap[p.project_type] || p.project_type}</span>` : ''}
                </div>
                <p class="project-desc">${escapeHtml(p.description.substring(0, 80))}${p.description.length > 80 ? '...' : ''}</p>
                <div class="project-card-footer">
                    <span class="badge badge-${p.status === 'open' ? 'open' : p.status === 'in_progress' ? 'progress' : 'done'}">${statusMap[p.status] || p.status}</span>
                    <span class="budget">💰 ${escapeHtml(p.budget || '待定')}</span>
                </div>
                <div class="project-meta">
                    <span>👤 <span style="color: var(--accent); cursor: pointer;" onclick="event.stopPropagation(); navigate('user-wall', '${p.requester_id}')">${escapeHtml(p.requester_name || '未知')}</span></span>
                    <span>📅 ${escapeHtml(p.deadline || '不限')}</span>
                </div>
            </div>
        `).join('') + '</div>';
    }

    window.loadMyProjects = async function() {
        const container = document.getElementById('myprojects-list');
        const roleFilter = document.getElementById('myfilter-role')?.value || 'all';

        if (!currentUser) {
            container.innerHTML = '<div class="empty-state"><h3>' + t('noProjects') + '</h3><p>' + t('beFirstToPost') + '</p></div>';
            return;
        }

        container.innerHTML = '<div class="loading visible">Loading your projects</div>';

        try {
            const { data: allProjects } = await fetchApi('/rest/v1/projects?select=*&order=created_at.desc');

            let filtered = [];
            if (roleFilter === 'created' || roleFilter === 'all') {
                filtered = filtered.concat(allProjects.filter(p => p.requester_id === currentUser.id));
            }
            if (roleFilter === 'applied' || roleFilter === 'all') {
                filtered = filtered.concat(allProjects.filter(p => p.receiver_id === currentUser.id));
            }

            filtered = [...new Map(filtered.map(p => [p.id, p])).values()];

            if (projectsTab === 'active') {
                filtered = filtered.filter(p => p.status !== 'completed');
            } else {
                filtered = filtered.filter(p => p.status === 'completed');
            }

            if (filtered.length === 0) {
                container.innerHTML = '<div class="empty-state"><h3>' + t('noProjects') + '</h3><p>' + (projectsTab === 'active' ? t('noProjectsYet') : t('noProjects')) + '</p></div>';
                return;
            }

            container.innerHTML = '<div class="project-grid">' + filtered.map(p => `
                <div class="project-card">
                    <h3>${escapeHtml(p.title)}</h3>
                    <p>${escapeHtml(p.description.substring(0, 100))}${p.description.length > 100 ? '...' : ''}</p>
                    <span class="status-badge status-${p.status}">${p.status.replace('-', ' ')}</span>
                    ${p.project_type ? `<span class="status-badge" style="background: rgba(139, 92, 246, 0.2); color: var(--accent-hover); margin-left: 0.5rem;">${escapeHtml(p.project_type)}</span>` : ''}
                    <div class="meta" style="margin-top: 1rem;">
                        <button class="btn btn-sm btn-secondary" onclick="viewProject('${p.id}')">View Details</button>
                        ${p.requester_id === currentUser.id ? `<button class="btn btn-sm btn-outline" onclick="showApplications('${p.id}')">Applications (${getApplicationCount(p.id)})</button>` : ''}
                        ${p.requester_id === currentUser.id ? `<button class="btn btn-sm btn-danger" onclick="deleteProject('${p.id}')">Delete</button>` : ''}
                    </div>
                </div>
            `).join('') + '</div>';
        } catch (e) {
            container.innerHTML = '<div class="empty-state"><h3>Error</h3><p>' + escapeHtml(e.message) + '</p></div>';
        }
    };

    function getApplicationCount(projectId) {
        const apps = JSON.parse(localStorage.getItem('applications') || '[]');
        return apps.filter(a => a.project_id === projectId).length;
    }

    window.switchProjectsTab = function(tab) {
        projectsTab = tab;
        document.getElementById('tab-active').classList.toggle('active', tab === 'active');
        document.getElementById('tab-completed').classList.toggle('active', tab === 'completed');
        loadMyProjects();
    };

    window.viewProject = function(id) {
        console.log('viewProject called with id:', id);
        sessionStorage.setItem('view_project_id', id);
        navigate('project-detail');
    };

    window.loadProjectDetail = async function() {
        const id = sessionStorage.getItem('view_project_id');
        const container = document.getElementById('project-detail-content');

        console.log('loadProjectDetail called - id:', id, 'container:', container);

        if (!id) {
            console.log('No project id found in sessionStorage');
            container.innerHTML = '<div class="empty-state"><h3>Project Not Found</h3><p>Please select a project from the list.</p></div>';
            return;
        }

        container.innerHTML = '<div class="loading visible">Loading project</div>';

        const getLocalProject = () => {
            const localProjects = JSON.parse(localStorage.getItem('projects') || '[]');
            console.log('getLocalProject - localStorage projects count:', localProjects.length, 'looking for id:', id);
            const found = localProjects.find(p => p.id === id);
            console.log('getLocalProject - found project:', found ? found.title : 'NOT FOUND');
            return found;
        };

        const renderProjectDetail = (project, requester) => {
            console.log('renderProjectDetail called with project:', project?.title);
            const isOwner = currentUser && project.requester_id === currentUser.id;
            const canApply = currentUser && !isOwner && project.status === 'open';
            const comments = JSON.parse(localStorage.getItem('comments') || '[]').filter(c => c.project_id === id);

            container.innerHTML = `
                <div class="detail-grid">
                    <div class="card">
                        <button class="btn btn-outline btn-sm" onclick="navigate('projects')" style="margin-bottom: 1rem;">← Back to Projects</button>
                        <h1>${escapeHtml(project.title)}</h1>
                        <span class="status-badge status-${project.status}">${project.status.replace('-', ' ')}</span>
                        ${project.project_type ? `<span class="status-badge" style="background: rgba(139, 92, 246, 0.2); color: var(--accent-hover); margin-left: 0.5rem;">${escapeHtml(project.project_type)}</span>` : ''}
                        <p style="margin-top: 1rem;">Posted by: <span style="color: var(--accent); cursor: pointer;" onclick="navigate('user-wall', '${project.requester_id}')">${escapeHtml(requester?.username || 'Unknown')}</span></p>
                        <p style="margin-top: 1.5rem;">${escapeHtml(project.description)}</p>
                        <div class="meta" style="margin-top: 2rem;">
                            <span>Budget: $${project.budget || 0}</span>
                            <span>Posted: ${new Date(project.created_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div class="detail-sidebar">
                        <h2>Actions</h2>
                        ${isOwner ? `
                            <button class="btn btn-secondary" style="width: 100%; margin-bottom: 0.5rem;" onclick="updateProjectStatus('${project.id}', 'in_progress')">Mark In Progress</button>
                            <button class="btn btn-secondary" style="width: 100%; margin-bottom: 0.5rem;" onclick="updateProjectStatus('${project.id}', 'completed')">Mark Completed</button>
                            <button class="btn btn-outline" style="width: 100%; margin-bottom: 0.5rem;" onclick="showApplications('${project.id}')">View Applications</button>
                            <button class="btn btn-danger" style="width: 100%;" onclick="deleteProject('${project.id}')">Delete Project</button>
                        ` : ''}
                        ${canApply ? `
                            <button class="btn" style="width: 100%;" onclick="openApplyModal('${project.id}')">申请承接 (Apply)</button>
                        ` : ''}
                        ${!currentUser ? '<p style="color: var(--text-muted); text-align: center;">Sign in to take action</p>' : ''}
                    </div>
                </div>
                <div class="card" style="margin-top: 1.5rem;">
                    <h2>Comments / 留言</h2>
                    <div id="comments-list">
                        ${comments.length === 0 ? '<p style="color: var(--text-muted); padding: 1.25rem; background: rgba(139, 92, 246, 0.08); border-radius: 12px; border-left: 3px solid var(--accent); text-align: center;">No comments yet. Be the first to comment!</p>' : comments.map(c => `
                            <div class="comment-item">
                                <div class="header">
                                    <span class="author" style="cursor: pointer;" onclick="navigate('user-wall', '${c.user_id}')">${escapeHtml(c.username)}</span>
                                    <span class="time">${new Date(c.created_at).toLocaleString()}</span>
                                </div>
                                <div class="content">${escapeHtml(c.content)}</div>
                            </div>
                        `).join('')}
                    </div>
                    ${currentUser ? `
                        <form onsubmit="event.preventDefault(); addComment('${id}');" style="margin-top: 1rem;">
                            <textarea id="comment-input" class="form-textarea" rows="3" placeholder="Leave a comment..." required></textarea>
                            <button type="submit" class="btn btn-sm">Post Comment</button>
                        </form>
                    ` : '<p style="color: var(--text-muted); margin-top: 1rem;">Sign in to leave a comment.</p>'}
                </div>
            `;
        };

        if (id.startsWith('demo-')) {
            const localProject = getLocalProject();
            if (localProject) {
                const localProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
                const requester = localProfiles.find(p => p.id === localProject.requester_id) || null;
                renderProjectDetail(localProject, requester);
                return;
            }
        }

        try {
            const { data: projects } = await fetchApi('/rest/v1/projects?select=*&id=eq.' + encodeURIComponent(id) + '&limit=1');
            const project = projects?.[0];

            if (!project) {
                const localProject = getLocalProject();
                if (localProject) {
                    renderProjectDetail(localProject, null);
                    return;
                }
                container.innerHTML = '<div class="empty-state"><h3>Project Not Found</h3></div>';
                return;
            }

            let requester = null;
            try {
                const { data: profiles } = await fetchApi('/rest/v1/profiles?select=*&id=eq.' + encodeURIComponent(project.requester_id) + '&limit=1');
                requester = profiles?.[0];
            } catch (e) {
                console.warn('Failed to fetch requester profile, using local data');
            }

            renderProjectDetail(project, requester);
        } catch (e) {
            const localProject = getLocalProject();
            if (localProject) {
                renderProjectDetail(localProject, null);
                return;
            }
            container.innerHTML = '<div class="empty-state"><h3>Error loading project</h3><p>Unable to connect to server. Please check your connection and try again.</p><p style="color: var(--text-muted); margin-top: 0.5rem;">Details: ' + escapeHtml(e.message) + '</p></div>';
        }
    };

    window.addComment = function(projectId) {
        const input = document.getElementById('comment-input');
        const content = input.value.trim();
        if (!content || !currentUser) return;

        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        comments.push({
            id: Date.now().toString(),
            project_id: projectId,
            user_id: currentUser.id,
            username: currentProfile?.username || currentUser.email,
            content: content,
            created_at: new Date().toISOString()
        });
        localStorage.setItem('comments', JSON.stringify(comments));
        showToast('Comment added!', 'success');
        loadProjectDetail();
    };

    window.updateProjectStatus = async function(id, status) {
        try {
            await fetchApi('/rest/v1/projects?id=eq.' + encodeURIComponent(id), {
                method: 'PATCH',
                body: JSON.stringify({ status })
            });
            const projects = JSON.parse(localStorage.getItem('projects') || '[]');
            const idx = projects.findIndex(p => p.id === id);
            if (idx !== -1) {
                projects[idx].status = status;
                localStorage.setItem('projects', JSON.stringify(projects));
            }
            showToast('Project updated!', 'success');
            loadProjectDetail();
        } catch (err) {
            showToast('Failed to update project', 'error');
        }
    };

    window.openApplyModal = function(projectId) {
        currentProjectId = projectId;
        document.getElementById('applyModal').classList.add('active');
    };

    window.closeApplyModal = function() {
        document.getElementById('applyModal').classList.remove('active');
        document.getElementById('apply-message').value = '';
        currentProjectId = null;
    };

    window.submitApplication = async function() {
        if (!currentUser || !currentProjectId) return;
        const message = document.getElementById('apply-message').value.trim();
        if (!message) return;

        const applications = JSON.parse(localStorage.getItem('applications') || '[]');
        const newApp = {
            id: Date.now().toString(),
            project_id: currentProjectId,
            user_id: currentUser.id,
            username: currentProfile?.username || currentUser.email,
            message: message,
            status: 'pending',
            created_at: new Date().toISOString()
        };
        applications.push(newApp);
        localStorage.setItem('applications', JSON.stringify(applications));

        const { data: projects } = await fetchApi('/rest/v1/projects?select=*&id=eq.' + encodeURIComponent(currentProjectId) + '&limit=1');
        const project = projects?.[0];
        if (project) {
            const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
            notifications.push({
                id: Date.now().toString(),
                user_id: project.requester_id,
                type: 'application',
                title: 'New Application / 新申请',
                content: `${currentProfile?.username || currentUser.email} applied for "${project.title}"`,
                read: false,
                link: currentProjectId,
                created_at: new Date().toISOString()
            });
            localStorage.setItem('notifications', JSON.stringify(notifications));
        }

        closeApplyModal();
        showToast('Application submitted!', 'success');
        navigate('myprojects');
    };

    window.showApplications = function(projectId) {
        const applications = JSON.parse(localStorage.getItem('applications') || '[]').filter(a => a.project_id === projectId);
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        const project = projects.find(p => p.id === projectId);
        const container = document.getElementById('applications-list');

        if (applications.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted);">No applications yet.</p>';
        } else {
            container.innerHTML = applications.map(a => `
                <div class="application-item">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="applicant">${escapeHtml(a.username)}</span>
                        <span class="status ${a.status}">${a.status}</span>
                    </div>
                    <p class="message">${escapeHtml(a.message)}</p>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">${new Date(a.created_at).toLocaleString()}</p>
                    ${a.status === 'pending' && currentUser?.id === project?.requester_id ? `
                        <div class="btn-group" style="margin-top: 0.5rem;">
                            <button class="btn btn-sm btn-secondary" onclick="handleApplication('${a.id}', 'accepted')">Accept</button>
                            <button class="btn btn-sm btn-danger" onclick="handleApplication('${a.id}', 'rejected')">Reject</button>
                        </div>
                    ` : ''}
                </div>
            `).join('');
        }

        document.getElementById('applicationsModal').classList.add('active');
    };

    window.closeApplicationsModal = function() {
        document.getElementById('applicationsModal').classList.remove('active');
    };

    window.handleApplication = async function(applicationId, status) {
        const applications = JSON.parse(localStorage.getItem('applications') || '[]');
        const app = applications.find(a => a.id === applicationId);
        if (!app) return;

        app.status = status;
        localStorage.setItem('applications', JSON.stringify(applications));

        try {
            const { data: projects } = await fetchApi('/rest/v1/projects?select=*&id=eq.' + encodeURIComponent(app.project_id) + '&limit=1');
            if (status === 'accepted') {
                await fetchApi('/rest/v1/projects?id=eq.' + encodeURIComponent(app.project_id), {
                    method: 'PATCH',
                    body: JSON.stringify({ status: 'in_progress', receiver_id: app.user_id })
                });
            }
        } catch (err) {
            console.error('API error:', err);
        }

        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        notifications.push({
            id: Date.now().toString(),
            user_id: app.user_id,
            type: status === 'accepted' ? 'accepted' : 'rejected',
            title: status === 'accepted' ? 'Application Accepted / 申请已接受' : 'Application Rejected / 申请被拒绝',
            content: `Your application for the project has been ${status}`,
            read: false,
            link: app.project_id,
            created_at: new Date().toISOString()
        });
        localStorage.setItem('notifications', JSON.stringify(notifications));

        showToast('Application ' + status, 'success');
        closeApplicationsModal();
        loadProjectDetail();
    };

    window.deleteProject = async function(id) {
        if (!confirm('Are you sure you want to delete this project?')) return;
        try {
            await fetchApi('/rest/v1/projects?id=eq.' + encodeURIComponent(id), { method: 'DELETE' });
            let projects = JSON.parse(localStorage.getItem('projects') || '[]');
            projects = projects.filter(p => p.id !== id);
            localStorage.setItem('projects', JSON.stringify(projects));
            showToast('Project deleted', 'success');
            navigate('myprojects');
        } catch (err) {
            showToast('Failed to delete project', 'error');
        }
    };

    window.handleCreateProject = async function() {
        if (!currentUser) {
            showToast(t('pleaseSignInFirst'), 'error');
            navigate('login');
            return;
        }

        const title = document.getElementById('new-title').value;
        const description = document.getElementById('new-description').value;
        const budget = document.getElementById('new-budget').value;
        const deadline = document.getElementById('new-deadline').value;
        const contact = document.getElementById('new-contact').value;
        const projectTypeEl = document.querySelector('input[name="project_type"]:checked');
        const projectType = projectTypeEl ? (projectTypeEl.value === 'single' ? t('singlePersonProject') : t('teamProject')) : t('singlePersonProject');

        if (!title || !description) {
            showToast(t('fillAllRequired'), 'error');
            return;
        }

        try {
            const { data, error } = await supabase.from('projects').insert({
                title,
                description,
                budget,
                deadline,
                contact,
                status: 'open',
                requester_id: currentUser.id,
                requester_name: currentProfile?.username || currentUser.email,
                project_type: projectType
            });

            if (!error && data?.id) {
                const projects = JSON.parse(localStorage.getItem('projects') || '[]');
                projects.unshift({
                    id: data.id,
                    title,
                    description,
                    budget,
                    deadline,
                    contact,
                    status: 'open',
                    requester_id: currentUser.id,
                    requester_name: currentProfile?.username || currentUser.email,
                    project_type: projectType,
                    created_at: new Date().toISOString()
                });
                localStorage.setItem('projects', JSON.stringify(projects));
            }
            showToast(t('projectCreated'), 'success');
            navigate('myprojects');
        } catch (err) {
            showToast(t('failedToCreateProject'), 'error');
        }

        document.getElementById('new-title').value = '';
        document.getElementById('new-description').value = '';
        document.getElementById('new-budget').value = '';
        document.getElementById('new-deadline').value = '';
        document.getElementById('new-contact').value = '';
    };

    window.loadProfile = async function() {
        const container = document.getElementById('profile-content');

        if (!currentUser) {
            container.innerHTML = '<div class="empty-state"><h3>Please Sign In</h3><p>You need to be logged in to view your profile.</p></div>';
            return;
        }

        if (!currentProfile) {
            currentProfile = { qrCodes: [] };
        }
        if (!currentProfile.qrCodes) currentProfile.qrCodes = [];

        let receivedProjects = [];
        let postedProjects = [];

        try {
            const { data: received } = await fetchApi(`/rest/v1/projects?select=*&receiver_id=eq.${encodeURIComponent(currentProfile.id)}&status=eq.completed&order=created_at.desc`);
            receivedProjects = received || [];
        } catch (e) { console.error('Error fetching received projects:', e); }

        try {
            const { data: posted } = await fetchApi(`/rest/v1/projects?select=*&requester_id=eq.${encodeURIComponent(currentProfile.id)}&status=eq.completed&order=created_at.desc`);
            postedProjects = posted || [];
        } catch (e) { console.error('Error fetching posted projects:', e); }

        const renderHistoryProject = (p) => `
            <div class="project-card" onclick="viewProject('${p.id}')">
                <div class="project-card-header">
                    <h3>${escapeHtml(p.title)}</h3>
                </div>
                <p class="project-desc">${escapeHtml(p.description.substring(0, 80))}${p.description.length > 80 ? '...' : ''}</p>
                <div class="project-card-footer">
                    <span class="badge badge-done">${t('completed')}</span>
                    <span class="budget">💰 ${escapeHtml(p.budget || '待定')}</span>
                </div>
                <div class="project-meta">
                    <span>📅 ${escapeHtml(p.deadline || '不限')}</span>
                </div>
            </div>
        `;

        container.innerHTML = `
            <div class="card">
                <div class="profile-header">
                    <div class="profile-avatar">${(currentProfile?.username || currentUser.email || 'U').charAt(0).toUpperCase()}</div>
                    <h1>${escapeHtml(currentProfile?.username || 'User')}</h1>
                    <p>${escapeHtml(currentUser.email)}</p>
                    <span class="status-badge status-in-progress" style="margin-top: 0.5rem;">${(currentProfile?.role || 'requester').charAt(0).toUpperCase() + (currentProfile?.role || 'requester').slice(1)}</span>
                </div>
            </div>

            <div class="card">
                <h2>QR Codes / 收款码</h2>
                <p>Add your payment QR codes (WeChat, Alipay, etc.)</p>
                <div id="qr-codes-list">
                    ${currentProfile.qrCodes.length === 0 ? '<p style="color: var(--text-muted);">No QR codes added yet.</p>' : currentProfile.qrCodes.map((qr, i) => `
                        <div class="qr-code-item">
                            <img src="${qr.url}" alt="${escapeHtml(qr.name)}">
                            <div class="info">
                                <div class="name">${escapeHtml(qr.name)}</div>
                                <div class="type">${escapeHtml(qr.type)}</div>
                            </div>
                            <button class="btn btn-sm btn-danger" onclick="deleteQRCode(${i})">Delete</button>
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(139, 92, 246, 0.2);">
                    <h3 style="margin-bottom: 1rem;">Add New QR Code</h3>
                    <form onsubmit="event.preventDefault(); addQRCode();">
                        <div class="form-group">
                            <label>QR Code Image</label>
                            <input type="file" id="qr-file" accept="image/*" onchange="previewQRCode(this)">
                            <img id="qr-preview" style="max-width: 150px; margin-top: 0.5rem; display: none;">
                        </div>
                        <div class="form-group">
                            <label>Name / 名称</label>
                            <input type="text" id="qr-name" placeholder="e.g., 微信/支付宝/其他" required>
                        </div>
                        <div class="form-group">
                            <label>Type / 类型</label>
                            <select id="qr-type" class="form-control">
                                <option value="微信">微信 (WeChat)</option>
                                <option value="支付宝">支付宝 (Alipay)</option>
                                <option value="其他">其他 (Other)</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-sm btn-secondary">Add QR Code</button>
                    </form>
                </div>
            </div>

            <div class="card">
                <h2>${t('historyReceivedProjects')}</h2>
                <div class="projects-grid">
                    ${receivedProjects.length === 0 ? `<p style="color: var(--text-muted);">${t('noHistoryProjects')}</p>` : receivedProjects.map(renderHistoryProject).join('')}
                </div>
            </div>

            <div class="card">
                <h2>${t('historyPostedProjects')}</h2>
                <div class="projects-grid">
                    ${postedProjects.length === 0 ? `<p style="color: var(--text-muted);">${t('noHistoryProjects')}</p>` : postedProjects.map(renderHistoryProject).join('')}
                </div>
            </div>
        `;
    };

    window.previewQRCode = function(input) {
        const preview = document.getElementById('qr-preview');
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    window.addQRCode = function() {
        const fileInput = document.getElementById('qr-file');
        const name = document.getElementById('qr-name').value.trim();
        const type = document.getElementById('qr-type').value;

        if (!fileInput.files[0] || !name) {
            showToast('Please select an image and enter a name', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = async function(e) {
            if (!currentProfile.qrCodes) currentProfile.qrCodes = [];
            currentProfile.qrCodes.push({
                name: name,
                url: e.target.result,
                type: type
            });

            try {
                await fetchApi('/rest/v1/profiles?id=eq.' + currentUser.id, {
                    method: 'PATCH',
                    body: JSON.stringify({ qrCodes: currentProfile.qrCodes })
                });
                showToast('QR Code added!', 'success');
            } catch (err) {
                showToast('Failed to save QR code', 'error');
            }
            loadProfile();
        };
        reader.readAsDataURL(fileInput.files[0]);
    };

    window.deleteQRCode = async function(index) {
        if (!confirm('Delete this QR code?')) return;
        currentProfile.qrCodes.splice(index, 1);
        try {
            await fetchApi('/rest/v1/profiles?id=eq.' + currentUser.id, {
                method: 'PATCH',
                body: JSON.stringify({ qrCodes: currentProfile.qrCodes })
            });
            showToast('QR Code deleted', 'success');
        } catch (err) {
            showToast('Failed to delete QR code', 'error');
        }
        loadProfile();
    };

    window.loadNotifications = function() {
        const container = document.getElementById('notifications-list');

        if (!currentUser) {
            container.innerHTML = '<div class="empty-state"><h3>Please Sign In</h3><p>You need to be logged in to view notifications.</p></div>';
            return;
        }

        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]').filter(n => n.user_id === currentUser.id);

        if (notifications.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No Notifications</h3><p>You\'re all caught up!</p></div>';
            return;
        }

        container.innerHTML = notifications.map(n => `
            <div class="notification-item ${n.read ? '' : 'unread'}" onclick="handleNotificationClick('${n.id}', '${n.link}')">
                <div class="title">${escapeHtml(n.title)}</div>
                <div class="content">${escapeHtml(n.content)}</div>
                <div class="time">${new Date(n.created_at).toLocaleString()}</div>
            </div>
        `).join('');
    };

    window.handleNotificationClick = function(notifId, projectLink) {
        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        const notif = notifications.find(n => n.id === notifId);
        if (notif) {
            notif.read = true;
            localStorage.setItem('notifications', JSON.stringify(notifications));
        }
        updateNotificationBadge();
        navigate('project-detail', projectLink);
    };

    window.updateNotificationBadge = function() {
        const badge = document.getElementById('notificationBadge');
        if (!badge) return;
        if (!currentUser) {
            badge.style.display = 'none';
            return;
        }

        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        const unread = notifications.filter(n => n.user_id === currentUser.id && !n.read).length;

        if (unread > 0) {
            badge.textContent = unread > 99 ? '99+' : unread;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    };

    window.loadUserWall = function(userId) {
        const container = document.getElementById('user-wall-content');
        container.innerHTML = '<div class="loading visible">Loading...</div>';

        const getProfile = async () => {
            try {
                const { data } = await fetchApi('/rest/v1/profiles?select=*&id=eq.' + encodeURIComponent(userId) + '&limit=1');
                if (data && data.length > 0) return data[0];
            } catch(e) {}
            const localProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
            return localProfiles.find(p => p.id === userId) || null;
        };

        getProfile().then(profile => {
            if (!profile) {
                container.innerHTML = '<div class="empty-state"><h3>User Not Found</h3></div>';
                return;
            }

            const wallMessages = JSON.parse(localStorage.getItem('wallMessages') || '[]').filter(m => m.to_user_id === userId);
            const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            const receivedReviews = reviews.filter(r => r.target_id === userId);
            const givenReviews = reviews.filter(r => r.reviewer_id === userId);
            const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
            const postedProjects = allProjects.filter(p => p.requester_id === userId);
            const completedAsRequester = postedProjects.filter(p => p.status === 'completed');
            const completedAsReceiver = allProjects.filter(p => (p.receiver_ids || []).includes(userId) && p.status === 'completed');
            const avgRating = receivedReviews.length > 0 ? (receivedReviews.reduce((s, r) => s + r.rating, 0) / receivedReviews.length).toFixed(1) : 'N/A';
            const isOwnProfile = currentUser && currentUser.id === userId;

            const roleLabel = profile.role === 'receiver' ? '接单者 / Receiver' : '发单者 / Requester';
            const roleColor = profile.role === 'receiver' ? 'var(--success)' : 'var(--accent-secondary)';

            const renderStars = (rating) => {
                return '★'.repeat(rating) + '☆'.repeat(5 - rating);
            };

            container.innerHTML = `
                <div class="card">
                    <button class="back-btn" onclick="goBack()" style="margin-bottom: 1rem;">← 返回</button>
                    <div class="profile-header">
                        <div class="profile-avatar">${(profile.username || 'U').charAt(0).toUpperCase()}</div>
                        <h1>${escapeHtml(profile.username || 'User')}</h1>
                        <p style="color: var(--text-muted);">${escapeHtml(profile.email || '')}</p>
                        <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 0.75rem; flex-wrap: wrap;">
                            <span class="status-badge" style="background: ${roleColor}22; color: ${roleColor};">${roleLabel}</span>
                            <span class="status-badge" style="background: rgba(234, 179, 8, 0.15); color: #eab308;">⭐ ${avgRating} · ${receivedReviews.length} 条评价</span>
                        </div>
                        <div style="display: flex; gap: 1.5rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap;">
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">${postedProjects.length}</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">发布项目</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--success);">${completedAsRequester.length + completedAsReceiver.length}</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">已完成</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-secondary);">${givenReviews.length}</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">发出评价</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project History -->
                <div class="card">
                    <h2>📋 项目历史 / Project History</h2>
                    ${postedProjects.length === 0 ? '<p style="color: var(--text-muted);">暂无项目记录</p>' : `
                        <div class="projects-grid">
                            ${postedProjects.map(p => `
                                <div class="project-card" onclick="viewProject('${p.id}')">
                                    <div class="project-card-header">
                                        <h3>${escapeHtml(p.title)}</h3>
                                    </div>
                                    <p class="project-desc">${escapeHtml((p.description || '').substring(0, 80))}${(p.description || '').length > 80 ? '...' : ''}</p>
                                    <div class="project-card-footer">
                                        <span class="badge badge-${p.status === 'open' ? 'open' : p.status === 'in_progress' ? 'progress' : 'done'}">${p.status === 'open' ? '进行中' : p.status === 'in_progress' ? '进行中' : '已完成'}</span>
                                        <span class="budget">💰 ${escapeHtml(p.budget || '待定')}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>

                <!-- Reviews / Received -->
                <div class="card">
                    <h2>⭐ 收到的评价 / Reviews Received</h2>
                    ${receivedReviews.length === 0 ? '<p style="color: var(--text-muted);">暂无评价</p>' : receivedReviews.map(r => `
                        <div class="comment-item">
                            <div class="header">
                                <span class="author" style="cursor: pointer;" onclick="navigate('user-wall', '${r.reviewer_id}')">${escapeHtml(r.reviewer_name)}</span>
                                <span class="time">${new Date(r.created_at).toLocaleDateString()}</span>
                            </div>
                            <div style="color: #eab308; margin-bottom: 0.5rem;">${renderStars(r.rating)}</div>
                            <div class="content">${escapeHtml(r.content)}</div>
                        </div>
                    `).join('')}
                </div>

                <!-- Reviews / Given -->
                <div class="card">
                    <h2>✍️ 发出的评价 / Reviews Given</h2>
                    ${givenReviews.length === 0 ? '<p style="color: var(--text-muted);">暂无评价</p>' : givenReviews.map(r => `
                        <div class="comment-item">
                            <div class="header">
                                <span class="author" style="cursor: pointer;" onclick="navigate('user-wall', '${r.target_id}')">→ ${escapeHtml(r.target_name)}</span>
                                <span class="time">${new Date(r.created_at).toLocaleDateString()}</span>
                            </div>
                            <div style="color: #eab308; margin-bottom: 0.5rem;">${renderStars(r.rating)}</div>
                            <div class="content">${escapeHtml(r.content)}</div>
                        </div>
                    `).join('')}
                </div>

                <!-- Message Wall -->
                <div class="card">
                    <h2>💬 留言墙 / Message Wall</h2>
                    <div id="wall-messages-list">
                        ${wallMessages.length === 0 ? '<p style="color: var(--text-muted);">暂无留言，来留个言吧！</p>' : wallMessages.map(m => `
                            <div class="wall-message">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="color: var(--accent); font-weight: 600; cursor: pointer;" onclick="navigate('user-wall', '${m.from_user_id}')">${escapeHtml(m.from_username)}</span>
                                    <span style="color: var(--text-muted); font-size: 0.8rem;">${new Date(m.created_at).toLocaleString()}</span>
                                </div>
                                <div style="color: var(--text-primary);">${escapeHtml(m.content)}</div>
                            </div>
                        `).join('')}
                    </div>
                    ${!isOwnProfile ? `
                        <form onsubmit="event.preventDefault(); addWallMessage('${userId}');" style="margin-top: 1rem;">
                            <textarea id="wall-message-input" rows="3" placeholder="Leave a message..." class="form-control" required></textarea>
                            <button type="submit" class="btn btn-sm" style="margin-top: 0.5rem;">Post Message</button>
                        </form>
                    ` : '<p style="color: var(--text-muted); margin-top: 1rem;">这是你的个人主页。</p>'}
                </div>
            `;
        }).catch(e => {
            container.innerHTML = '<div class="empty-state"><h3>Error</h3><p>' + escapeHtml(e.message) + '</p></div>';
        });
    };

    window.addWallMessage = function(toUserId) {
        const input = document.getElementById('wall-message-input');
        const content = input.value.trim();
        if (!content || !currentUser) return;

        const wallMessages = JSON.parse(localStorage.getItem('wallMessages') || '[]');
        wallMessages.push({
            id: Date.now().toString(),
            from_user_id: currentUser.id,
            from_username: currentProfile?.username || currentUser.email,
            to_user_id: toUserId,
            content: content,
            created_at: new Date().toISOString()
        });
        localStorage.setItem('wallMessages', JSON.stringify(wallMessages));
        showToast('Message posted!', 'success');
        loadUserWall(toUserId);
    };

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Type card selection handler
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.type-card').forEach(function(card) {
            card.addEventListener('click', function(e) {
                if (e.target.tagName === 'INPUT') return;
                const radio = this.querySelector('input[type="radio"]');
                if (radio) {
                    document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
                    this.classList.add('selected');
                    radio.checked = true;
                }
            });
        });
    });

    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
            currentUser = session.user;
            loadCurrentUser();
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            currentProfile = null;
            updateNavForAuth();
        }
    });

    loadCurrentUser();

    // Initialize demo profiles (always overwrite for demo)
    {
        const demoProfiles = [
            { id: 'demo-requester-1', username: '张经理', role: 'requester', email: 'zhang@example.com' },
            { id: 'demo-requester-2', username: '李设计师', role: 'requester', email: 'li@example.com' },
            { id: 'demo-requester-3', username: '王总', role: 'requester', email: 'wang@example.com' },
            { id: 'demo-requester-4', username: '陈营销', role: 'requester', email: 'chen@example.com' },
            { id: 'demo-requester-5', username: '刘数据', role: 'requester', email: 'liu@example.com' },
            { id: 'demo-requester-6', username: '赵老板', role: 'requester', email: 'zhao@example.com' },
            { id: 'demo-requester-7', username: '孙创意', role: 'requester', email: 'sun@example.com' },
            { id: 'demo-requester-8', username: '周运营', role: 'requester', email: 'zhou@example.com' },
            { id: 'demo-receiver-1', username: '开发者小王', role: 'receiver', email: 'dev@example.com' },
            { id: 'demo-receiver-2', username: '剪辑师小李', role: 'receiver', email: 'editor@example.com' },
            { id: 'demo-receiver-3', username: '设计师小张', role: 'receiver', email: 'designer@example.com' }
        ];
        localStorage.setItem('profiles', JSON.stringify(demoProfiles));
    }

    // Always reset demo projects for fresh start
    const demoProjects = [
        {
            id: 'demo-1',
            title: '企业官网前端开发',
            description: '需要开发一个响应式企业官网，使用React+TailwindCSS，包含首页、关于我们、产品服务、联系我们等页面。要求设计现代简洁，符合企业形象。需要响应式布局，兼容手机和平板。',
            budget: '¥8,000-12,000',
            deadline: '2026年6月30日',
            contact: '微信：corp_web',
            status: 'open',
            project_type: '单人项目',
            requester_id: 'demo-requester-1',
            requester_name: '张经理',
            created_at: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
            id: 'demo-2',
            title: '移动端App UI设计',
            description: '设计一款健身记录App的UI原型，包含首页、运动记录、社区、我的 四个主要Tab。需要提供Figma高保真原型和完整设计源文件，要求现代简约风格。',
            budget: '¥5,000-8,000',
            deadline: '2026年6月15日',
            contact: '邮箱：design@fitapp.com',
            status: 'open',
            project_type: '单人项目',
            requester_id: 'demo-requester-2',
            requester_name: '李设计师',
            created_at: new Date(Date.now() - 86400000).toISOString()
        },
        {
            id: 'demo-3',
            title: '电商后台管理系统开发',
            description: '开发一个电商后台管理系统，包含商品管理、订单管理、用户管理、数据统计等功能。需要Node.js后端+React前端，数据库使用PostgreSQL。需要API文档和单元测试。',
            budget: '¥15,000-25,000',
            deadline: '2026年7月15日',
            contact: '微信：ecom_admin',
            status: 'in_progress',
            project_type: '多人项目',
            requester_id: 'demo-requester-3',
            requester_name: '王总',
            receiver_ids: ['demo-receiver-1'],
            created_at: new Date(Date.now() - 86400000 * 5).toISOString()
        },
        {
            id: 'demo-4',
            title: '产品宣传视频剪辑',
            description: '需要将一段20分钟的产品宣传视频剪辑成3分钟的精华版，配合字幕、配乐和转场效果。要求专业剪辑，节奏感强，符合品牌调性。',
            budget: '¥2,000-3,500',
            deadline: '2026年5月20日',
            contact: '邮箱：video@brand.com',
            status: 'completed',
            project_type: '单人项目',
            requester_id: 'demo-requester-4',
            requester_name: '陈营销',
            receiver_ids: ['demo-receiver-2'],
            created_at: new Date(Date.now() - 86400000 * 10).toISOString()
        },
        {
            id: 'demo-5',
            title: 'Python数据爬虫开发',
            description: '需要爬取多个电商平台的商品价格数据，支持定时任务、数据导出Excel功能。需要处理反爬机制，数据存储到MySQL数据库。',
            budget: '¥3,000-5,000',
            deadline: '2026年6月10日',
            contact: '微信：data_spider',
            status: 'open',
            project_type: '单人项目',
            requester_id: 'demo-requester-5',
            requester_name: '刘数据',
            created_at: new Date(Date.now() - 86400000 * 3).toISOString()
        },
        {
            id: 'demo-6',
            title: '小程序商城开发',
            description: '开发一个微信小程序商城，包含商品展示、购物车、订单管理、支付功能。需要uni-app开发，适配微信和支付宝小程序。',
            budget: '¥10,000-15,000',
            deadline: '2026年7月1日',
            contact: '邮箱：minipro@shop.com',
            status: 'open',
            project_type: '多人项目',
            requester_id: 'demo-requester-6',
            requester_name: '赵老板',
            created_at: new Date(Date.now() - 86400000 * 4).toISOString()
        },
        {
            id: 'demo-7',
            title: 'Logo和品牌视觉设计',
            description: '为一家新创立的咖啡品牌设计Logo和全套VI系统，包含名片、信封、工牌、包装等。要求简约现代，有品牌特色。',
            budget: '¥4,000-6,000',
            deadline: '2026年6月25日',
            contact: '微信：cafe_brand',
            status: 'in_progress',
            project_type: '单人项目',
            requester_id: 'demo-requester-7',
            requester_name: '孙创意',
            receiver_ids: ['demo-receiver-3'],
            created_at: new Date(Date.now() - 86400000 * 7).toISOString()
        },
        {
            id: 'demo-8',
            title: 'SEO优化与推广方案',
            description: '为一个资讯类网站提供SEO优化方案，包括关键词分析、内容优化、外链建设、技术SEO等。需要提供详细执行计划和预期效果。',
            budget: '¥5,000-8,000',
            deadline: '2026年6月5日',
            contact: '邮箱：seo@news.com',
            status: 'open',
            project_type: '单人项目',
            requester_id: 'demo-requester-8',
            requester_name: '周运营',
            created_at: new Date(Date.now() - 86400000 * 1).toISOString()
        }
    ];
    // Always overwrite projects for demo
    {
        localStorage.setItem('projects', JSON.stringify(demoProjects));
    }

    // Seed demo wall messages (always overwrite for demo)
    {
        const demoWallMessages = [
            { id: 'wm-1', from_user_id: 'demo-receiver-1', from_username: '开发者小王', to_user_id: 'demo-requester-1', content: '张经理，上次的官网项目合作非常愉快！代码质量您还满意吗？', created_at: new Date(Date.now() - 86400000 * 15).toISOString() },
            { id: 'wm-2', from_user_id: 'demo-requester-1', from_username: '张经理', to_user_id: 'demo-receiver-1', content: '非常满意！代码规范、文档齐全，下次有项目还找你！👍', created_at: new Date(Date.now() - 86400000 * 14).toISOString() },
            { id: 'wm-3', from_user_id: 'demo-requester-3', from_username: '王总', to_user_id: 'demo-receiver-1', content: '小王，后台管理系统开发进度如何？有什么问题随时沟通。', created_at: new Date(Date.now() - 86400000 * 3).toISOString() },
            { id: 'wm-4', from_user_id: 'demo-receiver-1', from_username: '开发者小王', to_user_id: 'demo-requester-3', content: '王总放心，已完成70%，预计下周可以交付测试版。', created_at: new Date(Date.now() - 86400000 * 2).toISOString() },
            { id: 'wm-5', from_user_id: 'demo-requester-4', from_username: '陈营销', to_user_id: 'demo-receiver-2', content: '小李，视频剪辑得太棒了！效果超出预期，已经发给老板看了。', created_at: new Date(Date.now() - 86400000 * 8).toISOString() },
            { id: 'wm-6', from_user_id: 'demo-receiver-2', from_username: '剪辑师小李', to_user_id: 'demo-requester-4', content: '谢谢陈姐认可！如果需要修改随时说，免费调整三次。😊', created_at: new Date(Date.now() - 86400000 * 7).toISOString() },
            { id: 'wm-7', from_user_id: 'demo-requester-7', from_username: '孙创意', to_user_id: 'demo-receiver-3', content: '小张，Logo初稿看了，配色方案很好，但字体能不能再现代一些？', created_at: new Date(Date.now() - 86400000 * 5).toISOString() },
            { id: 'wm-8', from_user_id: 'demo-receiver-3', from_username: '设计师小张', to_user_id: 'demo-requester-7', content: '好的孙总，我重新调整字体风格，明天给您更新版本。', created_at: new Date(Date.now() - 86400000 * 4).toISOString() },
            { id: 'wm-9', from_user_id: 'demo-requester-2', from_username: '李设计师', to_user_id: 'demo-receiver-3', content: '小张，看到你给孙总做的Logo了，设计水平很高！我们有个App UI项目想找你合作。', created_at: new Date(Date.now() - 86400000 * 6).toISOString() },
            { id: 'wm-10', from_user_id: 'demo-receiver-3', from_username: '设计师小张', to_user_id: 'demo-requester-2', content: '李老师过奖了！很感兴趣，方便发一下需求文档吗？', created_at: new Date(Date.now() - 86400000 * 5).toISOString() }
        ];
        localStorage.setItem('wallMessages', JSON.stringify(demoWallMessages));
    }

    // Seed demo reviews/ratings (always overwrite for demo)
    {
        const demoReviews = [
            { id: 'rv-1', project_id: 'demo-4', reviewer_id: 'demo-requester-4', reviewer_name: '陈营销', target_id: 'demo-receiver-2', target_name: '剪辑师小李', rating: 5, content: '剪辑技术一流，节奏把控非常好，交稿准时，沟通顺畅。强烈推荐！', created_at: new Date(Date.now() - 86400000 * 9).toISOString() },
            { id: 'rv-2', project_id: 'demo-7', reviewer_id: 'demo-requester-7', reviewer_name: '孙创意', target_id: 'demo-receiver-3', target_name: '设计师小张', rating: 4, content: '设计水平很高，配色方案很满意。字体风格需要再调整，但整体不错。', created_at: new Date(Date.now() - 86400000 * 4).toISOString() },
            { id: 'rv-3', project_id: 'demo-3', reviewer_id: 'demo-requester-3', reviewer_name: '王总', target_id: 'demo-receiver-1', target_name: '开发者小王', rating: 5, content: '代码质量非常高，架构设计合理，文档详细。合作体验极佳，五星好评！', created_at: new Date(Date.now() - 86400000 * 1).toISOString() },
            { id: 'rv-4', project_id: 'demo-4', reviewer_id: 'demo-receiver-2', reviewer_name: '剪辑师小李', target_id: 'demo-requester-4', target_name: '陈营销', rating: 5, content: '需求描述清晰，沟通高效，付款及时。非常好的合作方！', created_at: new Date(Date.now() - 86400000 * 8).toISOString() },
            { id: 'rv-5', project_id: 'demo-7', reviewer_id: 'demo-receiver-3', reviewer_name: '设计师小张', target_id: 'demo-requester-7', target_name: '孙创意', rating: 4, content: '需求有想法，反馈及时，审美在线。虽然修改意见多但都是有建设性的。', created_at: new Date(Date.now() - 86400000 * 3).toISOString() },
            { id: 'rv-6', project_id: 'demo-3', reviewer_id: 'demo-receiver-1', reviewer_name: '开发者小王', target_id: 'demo-requester-3', target_name: '王总', rating: 5, content: '需求明确，沟通顺畅，付款爽快。非常愉快的合作经历！', created_at: new Date(Date.now() - 86400000 * 1).toISOString() }
        ];
        localStorage.setItem('reviews', JSON.stringify(demoReviews));
    }

    // Seed demo comments (always overwrite for demo)
    {
        const demoComments = [
            { id: 'c-1', project_id: 'demo-1', user_id: 'demo-receiver-1', username: '开发者小王', content: '张经理您好，我有5年React开发经验，之前做过类似的企业官网项目。可以私信详聊吗？', created_at: new Date(Date.now() - 86400000 * 1.5).toISOString() },
            { id: 'c-2', project_id: 'demo-1', user_id: 'demo-receiver-3', username: '设计师小张', content: '如果需要UI设计配合，我也可以参与，我可以负责前端设计部分。', created_at: new Date(Date.now() - 86400000 * 1.2).toISOString() },
            { id: 'c-3', project_id: 'demo-2', user_id: 'demo-receiver-3', username: '设计师小张', content: '李老师，这个健身App我很感兴趣！我之前做过类似项目的UI设计，可以看看我的作品集。', created_at: new Date(Date.now() - 86400000 * 0.8).toISOString() },
            { id: 'c-4', project_id: 'demo-5', user_id: 'demo-receiver-1', username: '开发者小王', content: '刘总，Python爬虫我做过不少，反爬机制处理有经验。预算方面可以再商量。', created_at: new Date(Date.now() - 86400000 * 2.5).toISOString() },
            { id: 'c-5', project_id: 'demo-6', user_id: 'demo-receiver-1', username: '开发者小王', content: '赵老板好，uni-app小程序商城我之前做过两个，可以提供案例参考。这个预算能接受的话我可以接。', created_at: new Date(Date.now() - 86400000 * 3.5).toISOString() },
            { id: 'c-6', project_id: 'demo-8', user_id: 'demo-receiver-2', username: '剪辑师小李', content: '虽然我主要做视频剪辑，但SEO方面也有些了解。如果需要视频内容配合SEO策略，可以聊聊。', created_at: new Date(Date.now() - 86400000 * 0.5).toISOString() }
        ];
        localStorage.setItem('comments', JSON.stringify(demoComments));
    }

    navigate('home');
    translatePage(currentLang);
})();
