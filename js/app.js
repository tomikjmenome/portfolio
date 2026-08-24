// =========================================
// PORTFOLIO V2 — bundled single file
// No ES modules required — works with file:// and GitHub Pages
// =========================================

// ---- DATA ----

const projectsDatabase = {
    'litera-1': {
        title: 'Litera',
        category: 'Branding',
        displayTag: 'Identita & UI',
        image: 'img/works/Litera/card.webp',
        url: 'projects/litera.html',
        vtName: 'project-litera',
        gridClass: 'span-col-2',
        tags: ['Branding', 'UI/UX', 'App Design', 'Illustration'],
        shortDesc: 'Značka a rozhraní aplikace, která z maturitní četby dělá cestu s postupem, questy a testy. Logo a podznačky, logomanuál, devět obrazovek a vlastní sada ilustrovaných autorů.',
        shortDescEn: 'Brand and interface for an app that turns the required school reading list into a path with progress, quests and quizzes. Logo and sub-brands, brand manual, nine screens and a custom set of illustrated authors.',
    },
    'branding-1': {
        title: 'Robokolo',
        category: 'Redesign',
        displayTag: 'Redesign',
        image: 'img/works/Robokolo/robokolo.webp',
        // Velká case study má vlastní stránku — `url` přepne kartu z modálu na navigaci.
        url: 'projects/robokolo.html',
        vtName: 'project-robokolo',
        gridClass: '',
        tags: ['Redesign', 'Branding', 'UI/UX'],
        shortDesc: 'Kompletní redesign vizuální identity. Cílem bylo posunout značku od "garážového hobby" k moderní technologické firmě. Výstupem je nové logo, piktogram, tiskoviny a merch.',
        shortDescEn: 'Complete visual identity redesign. The goal was to move the brand from a "garage hobby" to a modern tech company. Output includes a new logo, pictogram, stationery and merch.',
    },
    'web-1': {
        title: 'Abbey Road',
        category: 'Redesign',
        displayTag: 'Cover Art',
        image: 'img/works/Beatles/Beatles-mockup-final.webp',
        url: 'projects/abbey-road.html',
        vtName: 'project-abbey-road',
        gridClass: 'span-col-2',
        tags: ['Redesign', 'Fan Art', 'Cover Art'],
        shortDesc: 'Redesign ikonického alba The Beatles z roku 1969. Moderní reinterpretace hudebního dědictví — nové LP, obal a série plakátů. Osobní projekt / fan art.',
        shortDescEn: 'Redesign of The Beatles\' iconic 1969 album. A modern reinterpretation of the musical legacy — new LP, cover and a series of posters. Personal project / fan art.',
    },
    'fusion-1': {
        title: 'Fusion Tower Defense',
        category: 'Game Art',
        displayTag: 'Pixel Art',
        image: 'img/works/Fusion - Tower defense/main-titlescreen.png',
        gridClass: '',
        url: 'projects/fusion-tower-defense.html',
        vtName: 'project-fusion',
        tags: ['Pixel Art', 'Game Design', 'UI/UX'],
        shortDesc: '2D strategická hra v pixel-art stylu kombinující Tower Defense s roguelike prvky a karetním systémem. Kompletní vizuální stránka — logo, věže, nepřátelé, UI a prostředí.',
        shortDescEn: '2D pixel-art strategy game combining Tower Defense with roguelike elements and a card deck system. Complete visuals — logo, towers, enemies, UI and environment.',
    },
    'poster-1': {
        title: 'PF 2026',
        category: 'Posters',
        displayTag: 'Graphic Design',
        image: 'img/works/Posters/PolicieRajhrad-PF-2026.webp',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Print'],
        shortDesc: 'Novoroční přání pro Obvodní oddělení Policie ČR Rajhrad.',
        shortDescEn: 'New Year greeting card for the Rajhrad Police department.',
        modalImage: 'img/works/Posters/PolicieRajhrad-PF-2026.webp'
    },
    'poster-2': {
        title: 'Matl Group',
        category: 'Posters',
        displayTag: 'Advertising',
        image: 'img/works/Posters/MatlGroup-Reklamniplakat-krytapřeprava.webp',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Branding'],
        shortDesc: 'Reklamní plakát pro společnost Matl Group zaměřený na kryté přepravy luxusních a nových vozidel.',
        shortDescEn: 'Advertising poster for Matl Group focusing on covered transport of luxury and new vehicles.',
        modalImage: 'img/works/Posters/MatlGroup-Reklamniplakat-krytapřeprava.webp'
    },
    'poster-3': {
        title: 'Jurský Park',
        category: 'Posters',
        displayTag: 'Redesign',
        image: 'img/works/Posters/JurskýPark-redesignFilmovehoPlakatu.webp',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Redesign', 'Art'],
        shortDesc: 'Alternativní redesign filmového plakátu pro kultovní sci-fi snímek Jurský Park (1993). Moderní reinterpretace ikonické vizuální identity.',
        shortDescEn: 'Alternative poster redesign for the iconic sci-fi film Jurassic Park (1993). A modern reinterpretation of the classic visual identity.',
        modalImage: 'img/works/Posters/JurskýPark-redesignFilmovehoPlakatu.webp'
    },
    'apex-1': {
        title: 'Apex',
        category: 'UI/UX',
        displayTag: 'App Design',
        image: 'img/works/Apex/apex-home.webp',
        url: 'projects/apex.html',
        vtName: 'project-apex',
        gridClass: 'span-col-2',
        tags: ['UI/UX', 'App Design', 'Concept'],
        shortDesc: 'Konceptuální návrh UI pro streamovací aplikaci Apex. Důraz na přehlednost, typografii a tmavý vizuální styl inspirovaný prémiových streamovacími platformami.',
        shortDescEn: 'Conceptual UI design for Apex streaming app. Focus on clarity, typography and a dark visual style inspired by premium streaming platforms.',
    },
    'digital-1': {
        title: 'Death Note',
        category: 'Digital Art',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/DeathNote.png',
        modalImage: 'img/works/Digitální kresba/DeathNote.png',
        gridClass: 'span-row-2',
        tags: ['Digital Art', 'Fan Art'],
        shortDesc: 'Fan art inspirovaný japonskou manga sérií Death Note. Kresleno v Procreate na iPadu.',
        shortDescEn: 'Fan art inspired by the Japanese manga series Death Note. Drawn in Procreate on iPad.',
    },

    'digital-2': {
        title: 'Dragon I',
        category: 'Digital Art',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/Dragon1.png',
        modalImage: 'img/works/Digitální kresba/Dragon1.png',
        gridClass: 'span-row-2',
        tags: ['Digital Art', 'Fantasy'],
        shortDesc: 'Fantasy drak s detailně zpracovanými šupinami a texturou. Kresleno v Procreate na iPadu.',
        shortDescEn: 'Fantasy dragon with detailed scales and texture. Drawn in Procreate on iPad.',
    },

    'digital-3': {
        title: 'Dragon II',
        category: 'Digital Art',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/Dragon2.png',
        modalImage: 'img/works/Digitální kresba/Dragon2.png',
        gridClass: 'span-row-2',
        tags: ['Digital Art', 'Fantasy'],
        shortDesc: 'Druhá varianta fantasy draka — odlišná kompozice a barevnost. Kresleno v Procreate na iPadu.',
        shortDescEn: 'Second variant of the fantasy dragon — different composition and colour palette. Drawn in Procreate on iPad.',
    }
};

const filterCategories = [
    { value: 'all',          label: 'All Files'    },
    { value: 'Redesign',     label: 'Redesign'     },
    { value: 'Branding',     label: 'Branding'     },
    { value: 'Posters',      label: 'Posters'      },
    { value: 'Game Art',     label: 'Game Art'     },
    { value: 'UI/UX',        label: 'UI/UX'        },
    { value: 'Digital Art',  label: 'Digital Art'  },
];

const translations = {
    cs: {
        // Hero
        heroSubtitle: 'Designer & Digital Artist',
        // Typewriter
        typewriter: 'Dávám myšlenkám tvář.', typewriterWord: 'tvář',
        // About
        aboutBio1: 'Jmenuji se Tomáš a jsem grafický designér. Kromě vizuální tvorby se aktivně zajímám o 3D tisk, moderní technologie a historii. Mou velkou inspirací je hudba – konkrétně skladby plné skrytých odkazů, historických narážek a detailů, které člověk docení až při opakovaném poslechu.',
        aboutBio2: 'Tento princip objevování hlubších vrstev se snažím přenášet i do své práce. Baví mě tvořit design s přesahem a mám radost, když se mi podaří do grafiky zakomponovat jemný detail či "easter egg", který pozorný divák časem odhalí.',
        available: 'Dostupný', contactCTA: 'Kontaktovat', downloadCV: 'Stáhnout CV',
        // Career
        careerTitle: 'Vzdělání',
        xpDegree: 'Informační Technologie',
        xpDesc: 'Zakončeno státní maturitní zkouškou s vyznamenáním. Průměr za studium 1,47.',
        // Software
        softwareTitle: 'Můj Digitální Arzenál',
        // Featured work
        featuredTitle: 'Vybraná práce',
        featuredSubtitle: 'Výběr mých nejlepších prací',
        f1Cat: 'Branding & Identity', f1Title: 'Robokolo', f1Desc: 'Kompletní redesign značky — nové logo, piktogram, tiskoviny a merch. Cílem bylo posunout projekt od garážového hobby k moderní technologické identitě.',
        f2Cat: 'Cover Art & Fan Art', f2Title: 'Abbey Road', f2Desc: 'Moderní reinterpretace ikonického alba The Beatles z roku 1969. Nový vinyl, obal a série plakátů s minimalistickým přístupem.',
        f3Cat: 'Identita & UI/UX', f3Title: 'Litera', f3Desc: 'Značka a rozhraní aplikace, která z maturitní četby dělá cestu. Logo a jeho podznačky, logomanuál, devět obrazovek a vlastní ilustrace autorů.',
        // Archive
        archiveTitle: 'Projekty',
        // Partners
        partnersEyebrow: '// SPOLUPRACUJI S',
        partnersTitle: 'Značky, pro které tvořím',
        partnerRoleAuto: 'Automotive', partnerRoleAuto2: 'Automotive',
        partnerRoleDetail: 'Detailing', partnerRolePolitics: 'Vizuální identita',
        mobilePartners: 'Spolupráce', footerPartners: 'Spolupráce',
        // Work in progress
        wipEyebrow: '// ROZDĚLANÉ PROJEKTY',
        wipTitle: 'Na čem se právě pracuje',
        wipIntro: 'Projekty, které ještě nejsou hotové. Postupně sem přibudou jako plné case studies.',
        wipStatusDev: 'Ve vývoji', wipStatusDev2: 'Ve vývoji',
        wipStatusClient: 'Klientská zakázka', wipStatusConcept: 'Koncept',
        wipMaki: 'Lokální AI asistent, který běží celý na vlastním počítači. Desktopová aplikace nad modelem v Ollamě — hledání na webu, čtení stránek, obrázky i videa přímo v odpovědi.',
        wipLitera: 'Třetí verze Litery. Na hotovou značku a rozhraní navazuje cesta úkolů, XP, streaky a truhly nad rozbory děl — finální verze poběží na backendu s účty.',
        wipMatl: 'Web pro klienta z oboru automotive. Přestavba na Next.js nad hotovým design systémem — registr služeb, galerie a podstránky jednotlivých přeprav.',
        wipOdin: 'Příběhová hra o cestování časem. Hráč se pohybuje mezi současným Londýnem, renesanční Florencií roku 1488 a rudolfínskou Prahou. Zatím scénář a skici na papíře.',
        mobileWip: 'Rozdělané', footerWip: 'Rozdělané',
        // Footer
        footerCTA: 'Máte projekt?',
        footerFormTitle: 'Nebo napište přímo',
        footerAbout: 'O mně', footerWork: 'Práce', footerArchive: 'Archiv',
        footerMenuTitle: 'Menu', footerSocialsTitle: 'Socials',
        footerLocationTitle: 'Lokace', footerLocation: 'Brno, Czech Republic\nAvailable for remote',
        footerBackTop: 'Zpět nahoru ↑',
        saveContact: 'Uložit kontakt',
        // Form
        formName: 'Jméno', formEmail: 'E-mail', formMessage: 'Zpráva', formSend: 'Odeslat',
        formSuccess: 'Zpráva odeslána! Ozvu se brzy.', formError: 'Nepodařilo se odeslat. Použijte e-mail přímo.',
        // Mobile nav
        mobileAbout: 'O mně', mobileWork: 'Práce', mobileContact: 'Kontakt',
        filterAll: 'All Files',
    },
    en: {
        // Hero
        heroSubtitle: 'Designer & Digital Artist',
        // Typewriter
        typewriter: 'Giving ideas a shape.', typewriterWord: 'shape',
        // About
        aboutBio1: 'My name is Tomáš and I am a graphic designer. Beyond visual creation, I am actively interested in 3D printing, modern technology, and history. My greatest inspiration is music — specifically compositions full of hidden references, historical allusions, and details that one only appreciates upon repeated listening.',
        aboutBio2: 'I try to transfer this principle of discovering deeper layers into my own work. I enjoy creating design with broader meaning, and I take pride when I manage to incorporate a subtle detail or "easter egg" into a graphic that an attentive viewer will eventually discover.',
        available: 'Available', contactCTA: 'Contact Me', downloadCV: 'Download CV',
        // Career
        careerTitle: 'Education',
        xpDegree: 'Information Technology',
        xpDesc: 'Graduated with honours in the state final examination. Overall GPA 1.47.',
        // Software
        softwareTitle: 'My Digital Arsenal',
        // Featured work
        featuredTitle: 'Featured Work',
        featuredSubtitle: 'Curated selection of my finest pixels',
        f1Cat: 'Branding & Identity', f1Title: 'Robokolo', f1Desc: 'A complete brand redesign — new logo, pictogram, print materials and merch. The goal was to move the project from a garage hobby to a modern technology identity.',
        f2Cat: 'Cover Art & Fan Art', f2Title: 'Abbey Road', f2Desc: 'A modern reinterpretation of the iconic 1969 Beatles album. New vinyl, sleeve and a poster series with a minimalist approach.',
        f3Cat: 'Identity & UI/UX', f3Title: 'Litera', f3Desc: 'Brand and interface for an app that turns required school reading into a path. Logo and sub-brands, brand manual, nine screens and custom author illustrations.',
        // Archive
        archiveTitle: 'Projects',
        // Partners
        partnersEyebrow: '// WORKING WITH',
        partnersTitle: 'Brands I create for',
        partnerRoleAuto: 'Automotive', partnerRoleAuto2: 'Automotive',
        partnerRoleDetail: 'Detailing', partnerRolePolitics: 'Visual identity',
        mobilePartners: 'Partners', footerPartners: 'Partners',
        // Work in progress
        wipEyebrow: '// WORK IN PROGRESS',
        wipTitle: 'What I am building now',
        wipIntro: 'Projects that are not finished yet. They will land here as full case studies as they mature.',
        wipStatusDev: 'In development', wipStatusDev2: 'In development',
        wipStatusClient: 'Client work', wipStatusConcept: 'Concept',
        wipMaki: 'A local AI assistant that runs entirely on your own machine. Desktop app on top of a model in Ollama — web search, page reading, images and video right in the answer.',
        wipLitera: 'The third version of Litera. On top of the finished brand and interface come a path of tasks, XP, streaks and chests built over literary analysis — the final version will run on a backend with accounts.',
        wipMatl: 'A website for an automotive client. Rebuilt on Next.js over a finished design system — a service registry, gallery and per-service subpages.',
        wipOdin: 'A narrative time-travel game. The player moves between present-day London, Renaissance Florence of 1488 and Rudolfine Prague. Currently a script and sketches on paper.',
        mobileWip: 'In progress', footerWip: 'In progress',
        // Footer
        footerCTA: 'Got a project?',
        footerFormTitle: 'Or write directly',
        footerAbout: 'About', footerWork: 'Work', footerArchive: 'Archive',
        footerMenuTitle: 'Menu', footerSocialsTitle: 'Socials',
        footerLocationTitle: 'Location', footerLocation: 'Brno, Czech Republic\nAvailable for remote',
        footerBackTop: 'Back to Top ↑',
        saveContact: 'Save contact',
        // Form
        formName: 'Name', formEmail: 'Email', formMessage: 'Message', formSend: 'Send',
        formSuccess: "Message sent! I'll get back to you soon.", formError: 'Sending failed. Please use email directly.',
        // Mobile nav
        mobileAbout: 'About', mobileWork: 'Work', mobileContact: 'Contact',
        filterAll: 'All Files',
    }
};

// =========================================
// INIT
// =========================================
if (history.scrollRestoration) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', function () {
    initPreloader();
    initScroll();
    initSmoothScroll();
    initCursor();
    initClock();
    initCanvas();
    initHeroParallax();
    initTypewriter(translations.cs.typewriter, translations.cs.typewriterWord);
    initNav();
    initLang();
    renderArchive();
    initModal();
    initCarousel();
    initContactForm();
    initEmailCopy();
    initKonami();
    initScrollReveal();
    initFeaturedScroll();
    initScrollProgress();

    // Featured slide click (skip intro slide — no data-project)
    document.querySelectorAll('.featured-slide').forEach(function(slide) {
        var projectId = slide.dataset.project;
        if (!projectId) return;
        var open = function() { _openProject(projectId, slide); };
        slide.addEventListener('click', open);
        slide.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
    });
});

// =========================================
// PRELOADER
// =========================================
function initPreloader() {
    var loader = document.getElementById('preloader');
    if (!loader) return;
    // Přeskočeno inline skriptem v <head> — preloader je schovaný, není co odkrývat.
    if (document.documentElement.classList.contains('no-preloader')) return;
    setTimeout(function() { loader.classList.add('done'); }, 1100);
}

// =========================================
// SCROLL REVEAL
// =========================================
function initScrollReveal() {
    var targets = document.querySelectorAll('.archive-header h2, .career-title, .software-title');
    targets.forEach(function(el) {
        var original = el.textContent.trim();
        var words = original.split(/\s+/);
        el.innerHTML = words.map(function(w) {
            return '<span class="sr-word"><span>' + w + '</span></span>';
        }).join(' ');
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                el.querySelectorAll('.sr-word span').forEach(function(span, i) {
                    setTimeout(function() { span.classList.add('sr-visible'); }, i * 80);
                });
                observer.unobserve(el);
            });
        }, { threshold: 0.4 });
        observer.observe(el);
    });
}

// =========================================
// SCROLL
// =========================================
function initScroll() {
    var bar = document.getElementById('progressBar');
    if (bar) {
        window.addEventListener('scroll', function() {
            var scrolled = document.documentElement.scrollTop;
            var total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            bar.style.width = (scrolled / total * 100) + '%';
        }, { passive: true });
    }
    // Mobilní hlavička je průhledná a blenduje se s obsahem pod sebou. Nad
    // herem je to záměr, po odscrollování z ní ale musí být pruh, jinak se
    // logo mísí s textem, který jede pod ním.
    var mobileHeader = document.querySelector('.mobile-header');
    if (mobileHeader) {
        var syncHeader = function() {
            mobileHeader.classList.toggle('is-solid', window.scrollY > 40);
        };
        window.addEventListener('scroll', syncHeader, { passive: true });
        syncHeader();
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(function(s) { observer.observe(s); });
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('visible');
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
    var backTop = document.querySelector('.gf-back-top');
    if (backTop) {
        backTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    var scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            var about = document.querySelector('.editorial-about');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// =========================================
// CURSOR
// =========================================
function initCursor() {
    if (!window.matchMedia('(min-width: 769px)').matches) return;
    var cursor = document.querySelector('.custom-cursor');
    var aura   = document.querySelector('.cursor-aura');
    var label  = cursor ? cursor.querySelector('.cursor-label') : null;
    if (!cursor || !aura) return;

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px';
        aura.style.left   = e.clientX + 'px'; aura.style.top   = e.clientY + 'px';
    });

    var HOVER = 'a, button, .contact-cta, .f-btn, .random-glitch-btn, .f-card, .a-card, .modal-close, .lb-arrow, .software-icon-lg, .xp-card, .slider-dot, .slider-nav-btn, .lang-btn, .scroll-indicator, .form-submit, .pd-btn, .pd-next-btn, .gf-back-top';
    document.addEventListener('mouseover', function(e) {
        var slide    = e.target.closest('.featured-slide[data-project]');
        var email    = e.target.closest('.gf-big-email');
        var imgModal = e.target.closest('#modalGallery img, .modal-image img');
        var textIn   = e.target.closest('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea');

        cursor.classList.remove('cursor-view', 'cursor-copy', 'cursor-zoom', 'cursor-text');
        aura.classList.remove('hovering');

        if (textIn) {
            cursor.classList.add('cursor-text');
            if (label) label.textContent = '';
        } else if (slide) {
            cursor.classList.add('cursor-view');
            if (label) label.textContent = _currentLang === 'cs' ? 'ZOBRAZIT' : 'VIEW';
        } else if (email) {
            cursor.classList.add('cursor-copy');
            if (label) label.textContent = _currentLang === 'cs' ? 'KOPÍROVAT' : 'COPY';
        } else if (imgModal) {
            cursor.classList.add('cursor-zoom');
            if (label) label.textContent = _currentLang === 'cs' ? 'ZVĚTŠIT' : 'ZOOM';
        } else if (e.target.closest(HOVER)) {
            cursor.classList.add('hovering');
            aura.classList.add('hovering');
            if (label) label.textContent = '';
        } else {
            if (label) label.textContent = '';
        }
    });

    document.addEventListener('mouseout', function(e) {
        var slide    = e.target.closest('.featured-slide[data-project]');
        var email    = e.target.closest('.gf-big-email');
        var imgModal = e.target.closest('#modalGallery img, .modal-image img');
        var textIn   = e.target.closest('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea');
        if (slide || email || imgModal || textIn) {
            cursor.classList.remove('cursor-view', 'cursor-copy', 'cursor-zoom', 'cursor-text');
            if (label) label.textContent = '';
        } else if (e.target.closest(HOVER)) {
            cursor.classList.remove('hovering');
            aura.classList.remove('hovering');
        }
    });
}

// =========================================
// CLOCK
// =========================================
function initClock() {
    var dateEl = document.getElementById('brnoDate');
    var timeEl = document.getElementById('brnoTime');
    if (!dateEl && !timeEl) return;
    function update() {
        var now = new Date();
        if (dateEl) dateEl.textContent = now.toLocaleDateString('cs-CZ', { timeZone: 'Europe/Prague' });
        if (timeEl) timeEl.textContent = now.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });
    }
    update(); setInterval(update, 1000);
}

// =========================================
// CANVAS — spatial grid optimized
// =========================================
function initCanvas() {
    var canvas = document.getElementById('dotCanvas');
    var heroSection = document.getElementById('hero');
    if (!canvas || !heroSection) return;

    var ctx = canvas.getContext('2d');
    var CONNECT_DIST = 160, REPEL_DIST = 150, CELL_SIZE = 160;
    var dots = [], mouse = { x: -9999, y: -9999 };
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isMobile = window.innerWidth < 768;

    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
        initDots();
    }

    function initDots() {
        dots = [];
        var spacing = isMobile ? 140 : 80;
        var rows = Math.ceil(canvas.height / spacing) + 2;
        var cols = Math.ceil(canvas.width / spacing) + 2;
        var id = 0;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var baseX = j * spacing, baseY = i * spacing;
                dots.push({ id: id++, x: baseX + Math.random()*20, y: baseY + Math.random()*20, baseX: baseX, baseY: baseY, vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5 });
            }
        }
    }

    function buildGrid() {
        var grid = {};
        for (var k = 0; k < dots.length; k++) {
            var d = dots[k];
            var cx = Math.floor(d.x / CELL_SIZE), cy = Math.floor(d.y / CELL_SIZE);
            var key = cx + ',' + cy;
            if (!grid[key]) grid[key] = [];
            grid[key].push(d);
        }
        return grid;
    }

    function getNeighbors(grid, dot) {
        var cx = Math.floor(dot.x / CELL_SIZE), cy = Math.floor(dot.y / CELL_SIZE);
        var result = [];
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                var cell = grid[(cx+dx) + ',' + (cy+dy)];
                if (cell) {
                    for (var k = 0; k < cell.length; k++) {
                        if (cell[k] !== dot) result.push(cell[k]);
                    }
                }
            }
        }
        return result;
    }

    function drawDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var k = 0; k < dots.length; k++) {
            var dot = dots[k];
            dot.x += dot.vx + (dot.baseX - dot.x) * 0.05;
            dot.y += dot.vy + (dot.baseY - dot.y) * 0.05;
            var dx = mouse.x - dot.x, dy = mouse.y - dot.y, dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < REPEL_DIST) { var force = (REPEL_DIST-dist)/REPEL_DIST; dot.x -= dx*force*0.03; dot.y -= dy*force*0.03; }
            ctx.fillStyle = 'rgba(255,51,102,0.5)';
            ctx.beginPath(); ctx.arc(dot.x, dot.y, 2, 0, Math.PI*2); ctx.fill();
        }
        var grid = buildGrid();
        ctx.strokeStyle = 'rgba(255,51,102,0.15)'; ctx.lineWidth = 1;
        var drawn = {};
        for (var k = 0; k < dots.length; k++) {
            var dot = dots[k];
            var neighbors = getNeighbors(grid, dot);
            for (var n = 0; n < neighbors.length; n++) {
                var nb = neighbors[n];
                var a = dot.id < nb.id ? dot.id : nb.id;
                var b = dot.id < nb.id ? nb.id : dot.id;
                var pairKey = a + '-' + b;
                if (drawn[pairKey]) continue;
                drawn[pairKey] = true;
                var ddx = dot.x - nb.x, ddy = dot.y - nb.y;
                if (Math.sqrt(ddx*ddx + ddy*ddy) < CONNECT_DIST) {
                    ctx.beginPath(); ctx.moveTo(dot.x, dot.y); ctx.lineTo(nb.x, nb.y); ctx.stroke();
                }
            }
        }
        requestAnimationFrame(drawDots);
    }

    canvas.addEventListener('mousemove', function(e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    });
    heroSection.addEventListener('mouseleave', function() { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    if (!prefersReduced) drawDots();
    else {
        ctx.fillStyle = 'rgba(255,51,102,0.5)';
        dots.forEach(function(d) { ctx.beginPath(); ctx.arc(d.x, d.y, 2, 0, Math.PI*2); ctx.fill(); });
    }
}

// =========================================
// HERO PARALLAX
// =========================================
function initHeroParallax() {
    var hero = document.getElementById('hero');
    var nameTop = document.querySelector('.hero-name-top');
    var nameBottom = document.querySelector('.hero-name-bottom');
    if (!hero || !nameTop || !nameBottom || window.innerWidth < 768) return;

    hero.addEventListener('mousemove', function(e) {
        var x = (window.innerWidth/2 - e.clientX)/50;
        var y = (window.innerHeight/2 - e.clientY)/50;
        nameTop.style.transform = 'translateX(-5vw) translate(' + x + 'px,' + y + 'px)';
        nameBottom.style.transform = 'translateX(5vw) translate(' + (-x) + 'px,' + (-y) + 'px)';
    });
    hero.addEventListener('mouseleave', function() {
        nameTop.style.transform = 'translateX(-5vw)';
        nameBottom.style.transform = 'translateX(5vw)';
    });
}

// =========================================
// TYPEWRITER
// =========================================
var _hasTyped = false;
var _typeObserver = null;

function initTypewriter(text, coloredWord) {
    _hasTyped = false;
    var target = document.getElementById('typewriter-target');
    if (!target) return;
    if (_typeObserver) _typeObserver.disconnect();
    _typeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !_hasTyped) { _hasTyped = true; _runTypewriter(text, coloredWord); }
        });
    });
    _typeObserver.observe(target);
}

function resetTypewriter(text, coloredWord) {
    _hasTyped = false;
    initTypewriter(text, coloredWord);
    var target = document.getElementById('typewriter-target');
    if (target) {
        var rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) { _hasTyped = true; _runTypewriter(text, coloredWord); }
    }
}

function _runTypewriter(text, coloredWord) {
    var el = document.getElementById('typewriterText');
    if (!el) return;
    el.innerHTML = ''; var i = 0;
    function type() {
        if (i < text.length) { el.textContent += text.charAt(i); i++; setTimeout(type, 80); }
        else if (coloredWord) { el.innerHTML = text.replace(coloredWord, '<span class="accent-word">' + coloredWord + '</span>'); }
    }
    type();
}

// =========================================
// NAV — hamburger + mobile overlay
// =========================================
function initNav() {
    var hamburger = document.getElementById('hamburgerBtn');
    var mobileNav = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;

    function openNav() {
        hamburger.classList.add('active'); hamburger.setAttribute('aria-expanded', 'true');
        mobileNav.classList.add('active'); mobileNav.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active'); mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', function() { mobileNav.classList.contains('active') ? closeNav() : openNav(); });
    mobileNav.querySelectorAll('.mobile-link').forEach(function(link) { link.addEventListener('click', closeNav); });
    mobileNav.addEventListener('click', function(e) { if (e.target === mobileNav) closeNav(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && mobileNav.classList.contains('active')) closeNav(); });
}

// =========================================
// LANGUAGE SWITCHER
// =========================================
var _currentLang = 'cs';

function initLang() {
    _setLangBtns('cs');
    document.getElementById('btn-en') && document.getElementById('btn-en').addEventListener('click', function() { switchLanguage('en'); });
    document.getElementById('btn-cs') && document.getElementById('btn-cs').addEventListener('click', function() { switchLanguage('cs'); });
    document.querySelectorAll('.m-lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() { switchLanguage(btn.dataset.lang); });
    });
}

function switchLanguage(lang) {
    if (lang === _currentLang) return;
    _currentLang = lang;
    var t = translations[lang];

    // Update all elements marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.documentElement.lang = lang;
    _setLangBtns(lang);
    resetTypewriter(t.typewriter, t.typewriterWord);
}

function _setLangBtns(lang) {
    var en = document.getElementById('btn-en'), cs = document.getElementById('btn-cs');
    if (en) { en.style.display = lang === 'en' ? 'none' : 'flex'; en.setAttribute('aria-current', lang === 'en' ? 'true' : 'false'); }
    if (cs) { cs.style.display = lang === 'cs' ? 'none' : 'flex'; cs.setAttribute('aria-current', lang === 'cs' ? 'true' : 'false'); }
    document.querySelectorAll('.m-lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// =========================================
// ARCHIVE
// =========================================
function renderArchive() {
    var grid = document.getElementById('archiveGrid');
    if (!grid) return;
    var fragment = document.createDocumentFragment();
    var keys = Object.keys(projectsDatabase);

    keys.forEach(function(key, index) {
        var item = projectsDatabase[key];
        var num = String(index + 1).padStart(2, '0');
        var card = document.createElement('article');
        card.className = ('a-card ' + (item.gridClass || '')).trim();
        card.dataset.category = item.category;
        card.dataset.project = key;
        card.style.animationDelay = (index * 0.05) + 's';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', 'View project: ' + item.title);
        card.innerHTML = '<div class="a-image"><img src="' + item.image + '" alt="' + item.title + '" loading="lazy"><div class="a-overlay-tech" aria-hidden="true">VIEW PROJECT</div></div><div class="a-meta"><div class="a-id">PRJ-' + num + '</div><div class="a-info"><h4>' + item.title + '</h4></div></div>';

        if (item.url) {
            // Projekt s vlastní stránkou dostane skutečný odkaz — kvůli
            // procházení vyhledávači a otevření v novém panelu.
            card.removeAttribute('role');
            card.removeAttribute('tabindex');
            card.removeAttribute('aria-label');
            var link = document.createElement('a');
            link.className = 'a-card-link';
            link.href = item.url;
            link.setAttribute('aria-label', 'Otevřít projekt: ' + item.title);
            link.addEventListener('click', function() { _tagViewTransition(card, item.vtName); });
            card.appendChild(link);
        } else {
            card.addEventListener('click', function() { openModal(key); });
            card.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(key); } });
        }
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);

    // 3D tilt on cards
    document.querySelectorAll('.a-card').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width  - 0.5;
            var y = (e.clientY - rect.top)  / rect.height - 0.5;
            card.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
            card.style.transform  = 'perspective(700px) rotateY(' + (x * 14) + 'deg) rotateX(' + (-y * 10) + 'deg) translateY(-6px) translateZ(8px)';
            card.style.boxShadow  = (x * 10) + 'px ' + (y * 10 + 20) + 'px 40px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.5s cubic-bezier(0.25,1,0.5,1), box-shadow 0.5s ease';
            card.style.transform  = '';
            card.style.boxShadow  = '';
        });
    });

    _updateStats(keys.length);
    _renderFilterBtns();
    _initFilters();
    _initStatsCounter();
    _initRandomBtn();
}

function _updateStats(total) {
    var el = document.getElementById('totalFilesCount');
    if (el) el.textContent = total;
}

function _renderFilterBtns() {
    var filterList = document.querySelector('.filter-list');
    if (!filterList) return;
    var counts = {};
    Object.keys(projectsDatabase).forEach(function(key) {
        var cat = projectsDatabase[key].category;
        counts[cat] = (counts[cat] || 0) + 1;
    });
    var total = Object.keys(projectsDatabase).length;
    filterList.innerHTML = '';
    filterCategories.forEach(function(cat) {
        var count = cat.value === 'all' ? total : (counts[cat.value] || 0);
        var btn = document.createElement('button');
        btn.className = 'f-btn' + (cat.value === 'all' ? ' active' : '');
        btn.dataset.filter = cat.value;
        if (cat.value === 'all') btn.id = 'filterAllBtn';
        btn.innerHTML = cat.label + ' <span class="filter-count">[' + count + ']</span>';
        filterList.appendChild(btn);
    });
}

function _initFilters() {
    var filterList = document.querySelector('.filter-list');
    if (!filterList) return;
    filterList.addEventListener('click', function(e) {
        var btn = e.target.closest('.f-btn');
        if (!btn) return;
        var filter = btn.dataset.filter;
        document.querySelectorAll('.f-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.a-card').forEach(function(card) {
            card.classList.remove('span-col-2', 'span-row-2');
            var match = filter === 'all' || card.dataset.category === filter;
            if (match) {
                card.classList.remove('hidden');
                if (filter === 'all') { var orig = projectsDatabase[card.dataset.project] && projectsDatabase[card.dataset.project].gridClass; if (orig) card.classList.add(orig); }
                card.style.animation = 'none'; card.offsetHeight; card.style.animation = 'fadeIn 0.4s ease forwards';
            } else { card.classList.add('hidden'); }
        });
    });
}

function filterByTag(e, tag) {
    if (e) e.stopPropagation();
    var section = document.getElementById('work-grid');
    var btn = document.querySelector('.f-btn[data-filter="' + tag + '"]');
    if (section && btn) { section.scrollIntoView({ behavior: 'smooth' }); setTimeout(function() { btn.click(); }, 600); }
}

function _initStatsCounter() {
    var dashboard = document.querySelector('.archive-dashboard');
    if (!dashboard) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            entry.target.querySelectorAll('.stat-number').forEach(function(counter) {
                var target = parseInt(counter.dataset.target) || Object.keys(projectsDatabase).length;
                var suffix = counter.dataset.target ? '+' : '';
                var current = 0;
                // ~600 ms total regardless of target size
                var stepDelay = Math.max(30, Math.floor(600 / target));
                var timer = setInterval(function() {
                    current++;
                    counter.textContent = current >= target ? target + suffix : current;
                    if (current >= target) clearInterval(timer);
                }, stepDelay);
            });
        });
    }, { threshold: 0.5 });
    observer.observe(dashboard);
}

function _initRandomBtn() {
    var btn = document.getElementById('randomProjectBtn');
    if (!btn) return;
    btn.addEventListener('click', function() {
        var visible = Array.from(document.querySelectorAll('.a-card:not(.hidden)'));
        if (!visible.length) return;
        btn.style.transform = 'scale(0.95)';
        setTimeout(function() { btn.style.transform = ''; visible[Math.floor(Math.random() * visible.length)].click(); }, 200);
    });
}

// =========================================
// MODAL + LIGHTBOX
// =========================================
var _lightboxImages = [], _currentLbIndex = 0;

function initModal() {
    var modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
    var closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        var lb = document.getElementById('lightbox');
        var lbActive = lb && lb.classList.contains('active');
        var modalActive = modal.classList.contains('active');
        if (lbActive) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') _changeImg(1);
            if (e.key === 'ArrowLeft') _changeImg(-1);
        } else if (modalActive && e.key === 'Escape') closeModal();
    });

    document.addEventListener('click', function(e) {
        var img = e.target.closest('.pd-image');
        if (img && modal.classList.contains('active')) { e.stopPropagation(); _openLightbox(img); }
    });

    var lbPrev = document.getElementById('lbPrev'), lbNext = document.getElementById('lbNext');
    if (lbPrev) lbPrev.addEventListener('click', function(e) { e.stopPropagation(); _changeImg(-1); });
    if (lbNext) lbNext.addEventListener('click', function(e) { e.stopPropagation(); _changeImg(1); });

    var lb = document.getElementById('lightbox');
    if (lb) lb.addEventListener('click', function(e) { if (e.target === lb) closeLightbox(); });

    // Touch swipe for lightbox
    var swipeStartX = 0;
    if (lb) {
        lb.addEventListener('touchstart', function(e) { swipeStartX = e.touches[0].clientX; }, { passive: true });
        lb.addEventListener('touchend', function(e) {
            var diff = swipeStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) _changeImg(diff > 0 ? 1 : -1);
        }, { passive: true });
    }
}

// Projekt buď otevře v modálu, nebo přejde na vlastní stránku.
function _openProject(projectId, sourceEl) {
    var data = projectsDatabase[projectId];
    if (!data) return;
    if (!data.url) { openModal(projectId); return; }
    _tagViewTransition(sourceEl, data.vtName);
    window.location.href = data.url;
}

// Pojmenuje obrázek pro cross-document View Transition. Název se přiděluje
// až při kliknutí schválně: stejný snímek je na indexu ve dvou místech
// (karta v archivu i featured slide) a duplicitní název by přechod zrušil.
function _tagViewTransition(sourceEl, name) {
    if (!name || !sourceEl || !document.startViewTransition) return;
    var img = sourceEl.querySelector('img');
    if (img) img.style.viewTransitionName = name;
}

function openModal(projectId) {
    var modal = document.getElementById('projectModal');
    var data = projectsDatabase[projectId];
    if (!data || !modal) return;

    var mc = modal.querySelector('.modal-main-col');
    if (mc) mc.scrollTop = 0;

    var titleEl = document.getElementById('modalTitle'); if (titleEl) titleEl.textContent = data.title;
    var catEl = document.getElementById('modalCategory'); if (catEl) catEl.textContent = data.category;
    var tagsEl = document.getElementById('modalTags');
    if (tagsEl) tagsEl.innerHTML = data.tags.map(function(t) { return '<span class="modal-tag">' + t + '</span>'; }).join('');

    var descEl = document.getElementById('modalDescription');
    var galleryEl = document.getElementById('modalGallery');
    var mainImg = document.getElementById('modalImage');

    var sideDescEl = document.getElementById('modalSideDesc');
    var shortDesc = (_currentLang === 'en' && data.shortDescEn) ? data.shortDescEn : (data.shortDesc || data.description || '');
    if (sideDescEl) sideDescEl.textContent = shortDesc;

    // Show skeleton, hide content
    var loadingEl = document.getElementById('modalLoading');
    if (loadingEl) loadingEl.classList.remove('hidden');
    if (descEl) { descEl.style.opacity = '0'; descEl.style.transition = 'none'; }

    if (data.contentHTML) {
        var modalImageWrapper = document.querySelector('.modal-image');
        if (modalImageWrapper) modalImageWrapper.style.display = 'none';
        if (mc) mc.classList.remove('no-scroll');
        if (galleryEl) galleryEl.innerHTML = '';
        if (descEl) descEl.innerHTML = data.contentHTML;
    } else {
        var modalImageWrapper = document.querySelector('.modal-image');
        if (modalImageWrapper) modalImageWrapper.style.display = 'flex';
        if (mc) mc.classList.add('no-scroll');
        if (mainImg) mainImg.src = data.modalImage || data.image;
        if (descEl) descEl.innerHTML = '';
        if (galleryEl) galleryEl.innerHTML = '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hide skeleton, reveal content
    setTimeout(function() {
        if (loadingEl) loadingEl.classList.add('hidden');
        if (descEl) {
            descEl.style.transition = 'opacity 0.4s ease';
            descEl.style.opacity = '1';
        }
    }, 480);
}

function closeModal() {
    var modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        var mc = modal.querySelector('.modal-main-col');
        if (mc) mc.classList.remove('no-scroll');
    }
    document.body.style.overflow = '';
}

function _openLightbox(imgEl) {
    var modal = document.getElementById('projectModal');
    var targetSrc = imgEl.tagName === 'IMG' ? imgEl.src : (imgEl.querySelector('img') && imgEl.querySelector('img').src);
    if (!targetSrc) return;
    var modalImgs = modal.querySelectorAll('.pd-image');
    var srcs = [];
    modalImgs.forEach(function(i) { if (i.src) srcs.push(i.src); });
    _lightboxImages = srcs.filter(function(v, i, a) { return a.indexOf(v) === i; });
    _currentLbIndex = _lightboxImages.indexOf(targetSrc);
    if (_currentLbIndex === -1) { _currentLbIndex = 0; _lightboxImages.unshift(targetSrc); }
    _updateLbImg();
    var lb = document.getElementById('lightbox'); if (lb) lb.classList.add('active');
}

function closeLightbox() {
    var lb = document.getElementById('lightbox'); if (lb) lb.classList.remove('active');
}

function _changeImg(dir) {
    _currentLbIndex = (_currentLbIndex + dir + _lightboxImages.length) % _lightboxImages.length;
    _updateLbImg();
}

function _updateLbImg() {
    var img = document.getElementById('lightboxImg'), counter = document.getElementById('lbCounter');
    if (!img) return;
    img.classList.add('fade-change');
    setTimeout(function() {
        img.src = _lightboxImages[_currentLbIndex];
        if (counter) counter.textContent = (_currentLbIndex + 1) + ' / ' + _lightboxImages.length;
        img.onload = function() { img.classList.remove('fade-change'); };
    }, 200);
}

// =========================================
// CONTACT FORM
// =========================================
function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    // Real-time email validation
    var emailInput = form.querySelector('#contact-email');
    if (emailInput) {
        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailInput.addEventListener('blur', function() {
            var val = this.value.trim();
            if (!val) { this.classList.remove('input-error', 'input-ok'); return; }
            this.classList.toggle('input-error', !emailRe.test(val));
            this.classList.toggle('input-ok',    emailRe.test(val));
        });
        emailInput.addEventListener('input', function() {
            if (emailRe.test(this.value.trim())) {
                this.classList.remove('input-error');
                this.classList.add('input-ok');
            }
        });
    }

    // Name — mark ok on blur if non-empty
    var nameInput = form.querySelector('#contact-name');
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            this.classList.toggle('input-ok', this.value.trim().length > 0);
            this.classList.toggle('input-error', this.value.trim().length === 0 && document.activeElement !== this);
        });
    }

    // Message char counter
    var textarea = form.querySelector('#contact-message');
    if (textarea) {
        var counter = document.createElement('span');
        counter.className = 'char-counter';
        counter.textContent = '0 / min. 20 znaků';
        textarea.parentNode.appendChild(counter);
        textarea.addEventListener('input', function() {
            var len = this.value.length;
            counter.textContent = len < 20 ? len + ' / min. 20 znaků' : len + ' znaků ✓';
            counter.classList.toggle('counter-ok', len >= 20);
            this.classList.toggle('input-ok', len >= 20);
            this.classList.toggle('input-error', len > 0 && len < 20);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var t = translations[_currentLang];
        var honeypot = form.querySelector('input[name="_hp"]');
        if (honeypot && honeypot.value) { _showFormStatus('success', t.formSuccess); form.reset(); return; }

        var name = (form.querySelector('#contact-name') || {}).value && form.querySelector('#contact-name').value.trim();
        var email = form.querySelector('#contact-email') && form.querySelector('#contact-email').value.trim();
        var message = form.querySelector('#contact-message') && form.querySelector('#contact-message').value.trim();
        var submitBtn = form.querySelector('.form-submit');

        if (!name || !email || !message) return;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { _showFormStatus('error', 'Neplatný e-mail'); return; }
        if (message.length < 20) { _showFormStatus('error', 'Zpráva je příliš krátká'); return; }

        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '...'; }

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function(res) {
            if (res.ok) {
                _showFormStatus('success', t.formSuccess);
                form.reset();
            } else {
                res.json().then(function(data) {
                    var msg = data.errors ? data.errors.map(function(e) { return e.message; }).join(', ') : t.formError;
                    _showFormStatus('error', msg);
                }).catch(function() { _showFormStatus('error', t.formError); });
            }
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = t.formSend; }
        }).catch(function() {
            _showFormStatus('error', t.formError);
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = t.formSend; }
        });
    });
}

// =========================================
// SCROLL PROGRESS BAR
// =========================================
function initScrollProgress() {
    var bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', function() {
        var total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
    }, { passive: true });
}

function _showFormStatus(type, message) {
    var status = document.getElementById('formStatus');
    if (!status) return;
    status.textContent = message; status.className = 'form-status ' + type;
    setTimeout(function() { status.textContent = ''; status.className = 'form-status'; }, 5000);
}

// =========================================
// CAROUSEL (mobile featured work)
// =========================================
function initCarousel() {
    var track = document.getElementById('featuredTrack');
    var cards = document.querySelectorAll('.f-card');
    var prevBtn = document.getElementById('prevSlideBtn');
    var nextBtn = document.getElementById('nextSlideBtn');
    var dotsContainer = document.getElementById('sliderDots');
    if (!track || cards.length === 0 || window.innerWidth > 1024) return;

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach(function(_, i) {
            var dot = document.createElement('button');
            dot.classList.add('slider-dot');
            dot.setAttribute('aria-label', 'Slide ' + (i+1));
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() { track.scrollTo({ left: i * (cards[0].offsetWidth + 32), behavior: 'smooth' }); });
            dotsContainer.appendChild(dot);
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', function() { track.scrollTo({ left: track.scrollLeft - (cards[0].offsetWidth + 32), behavior: 'smooth' }); });
    if (nextBtn) nextBtn.addEventListener('click', function() {
        var cw = cards[0].offsetWidth + 32;
        var newPos = track.scrollLeft + cw;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 50) newPos = 0;
        track.scrollTo({ left: newPos, behavior: 'smooth' });
    });

    track.addEventListener('scroll', function() {
        var active = Math.round(track.scrollLeft / (cards[0].offsetWidth + 32));
        if (dotsContainer) dotsContainer.querySelectorAll('.slider-dot').forEach(function(dot, i) { dot.classList.toggle('active', i === active); });
    }, { passive: true });

    // Touch swipe
    var swX = 0;
    track.addEventListener('touchstart', function(e) { swX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function(e) {
        var diff = swX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { var cw = cards[0].offsetWidth + 32; track.scrollTo({ left: track.scrollLeft + (diff > 0 ? cw : -cw), behavior: 'smooth' }); }
    }, { passive: true });
}

// =========================================
// EXTRAS — Featured scroll, Copy
// =========================================

function initFeaturedScroll() {
    var outer    = document.getElementById('featuredOuter');
    var track    = document.getElementById('featuredSlidesTrack');
    var progress = document.getElementById('fsProgress');
    if (!outer || !track) return;

    var slides = document.querySelectorAll('.featured-slide');
    var dots   = document.querySelectorAll('.fs-dot');
    var n = slides.length;   // includes intro slide at index 0
    if (!n) return;

    var _cur = 0;
    var inner = document.getElementById('featuredInner');

    /* Posun tracku se počítá z naměřené šířky dlaždice, ne z pevných 100 %.
       Dlaždice je na desktopu užší než viewport (vykukují sousedi), na mobilu
       ji responsive.css roztáhne na plnou šířku — tahle matematika zvládne
       obojí bez větvení. */
    function applyTransform(idx) {
        if (!slides.length || !inner) return;
        var w  = slides[0].offsetWidth;          // offsetWidth, ne getBoundingClientRect:
                                                 // rect by vracel rozměr už otočený rotateY
        var cs = window.getComputedStyle(track);
        var gap = parseFloat(cs.columnGap);
        if (isNaN(gap)) gap = parseFloat(cs.gap) || 0;
        var centering = (inner.clientWidth - w) / 2;
        track.style.transform = 'translateX(' + (centering - idx * (w + gap)) + 'px)';
    }

    function goTo(idx) {
        idx = Math.max(0, Math.min(n - 1, idx));
        if (idx === _cur) return;
        _cur = idx;
        applyTransform(idx);
        slides.forEach(function(s, i) {
            s.classList.toggle('is-active', i === idx);
            s.classList.toggle('is-before', i < idx);
            s.classList.toggle('is-after',  i > idx);
            // Zbytkový náklon po myši by jinak zůstal na dlaždici, která
            // právě odjela do pozadí.
            if (i !== idx) {
                s.style.removeProperty('--fs-mx');
                s.style.removeProperty('--fs-my');
            }
        });
        dots.forEach(function(d, i) { d.classList.toggle('is-active', i === idx - 1); });
        if (progress) progress.classList.toggle('hidden', idx === 0);
        // Counter
        var counterEl = document.getElementById('fsCounter');
        if (counterEl) {
            if (idx === 0) {
                counterEl.classList.add('hidden');
            } else {
                counterEl.classList.remove('hidden');
                counterEl.textContent = String(idx).padStart(2, '0') + ' / ' + String(n - 1).padStart(2, '0');
            }
        }
    }

    // Dot clicks — dot i navigates to project slide (i+1)
    dots.forEach(function(dot, i) {
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            var targetSlide = i + 1;
            var scrollRange = outer.offsetHeight - window.innerHeight;
            var target = outer.offsetTop + (scrollRange / n) * (targetSlide + 0.01);
            window.scrollTo({ top: target, behavior: 'smooth' });
        });
    });

    function update() {
        var outerTop    = outer.getBoundingClientRect().top;
        var scrollRange = outer.offsetHeight - window.innerHeight;
        if (scrollRange <= 0) return;
        var progress = Math.max(0, Math.min(1, -outerTop / scrollRange));
        var idx = Math.min(Math.floor(progress * n), n - 1);
        goTo(idx);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();

    /* Výchozí vycentrování — goTo(0) se na startu ukončí hned (idx === _cur),
       takže transform i stavové třídy je nutné nasadit zvlášť. Stejná funkce
       slouží k přepočtu po změně velikosti okna, protože dlaždice měří ve vw. */
    function syncLayout() {
        applyTransform(_cur);
        slides.forEach(function(s, i) {
            s.classList.toggle('is-active', i === _cur);
            s.classList.toggle('is-before', i < _cur);
            s.classList.toggle('is-after',  i > _cur);
        });
    }
    syncLayout();

    var _rsTimer = null;
    window.addEventListener('resize', function() {
        clearTimeout(_rsTimer);
        _rsTimer = setTimeout(syncLayout, 120);
    });

    /* Náklon aktivní dlaždice podle myši. Jen na desktopu a jen když
       uživatel nemá vypnuté animace. */
    var _tiltOK = window.matchMedia('(min-width: 769px)').matches &&
                  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (_tiltOK) {
        if (inner) {
            inner.addEventListener('mousemove', function(e) {
                var act = slides[_cur];
                if (!act) return;
                var r = act.getBoundingClientRect();
                // -1..1 od středu dlaždice
                var mx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
                var my = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
                act.style.setProperty('--fs-mx', Math.max(-1, Math.min(1, mx)).toFixed(3));
                act.style.setProperty('--fs-my', Math.max(-1, Math.min(1, my)).toFixed(3));
            }, { passive: true });

            inner.addEventListener('mouseleave', function() {
                slides.forEach(function(s) {
                    s.style.removeProperty('--fs-mx');
                    s.style.removeProperty('--fs-my');
                });
            });
        }
    }

    // Touch swipe to navigate slides
    if (inner) {
        var _touchX = 0, _touchY = 0;
        inner.addEventListener('touchstart', function(e) {
            _touchX = e.touches[0].clientX;
            _touchY = e.touches[0].clientY;
        }, { passive: true });
        inner.addEventListener('touchend', function(e) {
            var dx = _touchX - e.changedTouches[0].clientX;
            var dy = _touchY - e.changedTouches[0].clientY;
            if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
            var scrollRange = outer.offsetHeight - window.innerHeight;
            var targetIdx   = dx > 0 ? Math.min(_cur + 1, n - 1) : Math.max(_cur - 1, 0);
            var targetScroll = outer.offsetTop + (scrollRange / n) * (targetIdx + 0.5);
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }, { passive: true });
    }

    // Parallax on image panel — moves image subtly with mouse
    document.querySelectorAll('.fs-image-wrap').forEach(function(wrap) {
        var img = wrap.querySelector('.fs-img');
        if (!img) return;
        wrap.addEventListener('mousemove', function(e) {
            var rect = wrap.getBoundingClientRect();
            var x = ((e.clientX - rect.left) / rect.width  - 0.5);
            var y = ((e.clientY - rect.top)  / rect.height - 0.5);
            img.style.transition = 'transform 0.2s ease';
            img.style.transform  = 'scale(1.08) translate(' + (-x * 28) + 'px, ' + (-y * 18) + 'px)';
        });
        wrap.addEventListener('mouseleave', function() {
            img.style.transition = 'transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94)';
            img.style.transform  = 'scale(1)';
        });
    });
}

function showToast(msg, type) {
    var toast = document.createElement('div');
    toast.className = 'toast' + (type ? ' ' + type : '');
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.classList.add('removing');
        setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 350);
    }, 3000);
}

// =========================================
// EASTER EGG — Konami code
// =========================================
function initKonami() {
    var code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    var pos = 0;
    var triggered = false;

    document.addEventListener('keydown', function(e) {
        if (e.key === code[pos]) {
            pos++;
            if (pos === code.length) {
                pos = 0;
                if (triggered) return;
                triggered = true;
                _fireKonami();
                setTimeout(function() { triggered = false; }, 4000);
            }
        } else {
            pos = 0;
        }
    });
}

function _fireKonami() {
    var msg = _currentLang === 'cs'
        ? '// TAJNÝ KÓD AKTIVOVÁN 🎮'
        : '// SECRET CODE ACTIVATED 🎮';

    // Glitch the page
    document.body.classList.add('konami-active');
    setTimeout(function() { document.body.classList.remove('konami-active'); }, 1400);

    // Show overlay message
    var overlay = document.createElement('div');
    overlay.id = 'konami-overlay';
    overlay.innerHTML = '<div class="konami-msg">' + msg + '</div>';
    document.body.appendChild(overlay);
    requestAnimationFrame(function() {
        requestAnimationFrame(function() { overlay.classList.add('visible'); });
    });
    setTimeout(function() {
        overlay.classList.remove('visible');
        setTimeout(function() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 350);
    }, 2200);
}

function initEmailCopy() {
    var el = document.querySelector('.gf-big-email');
    if (!el) return;
    el.addEventListener('click', function(e) {
        e.preventDefault();
        var email = 'tomashajek07@gmail.com';
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(function() {
                showToast('Email zkopírován do schránky', 'success');
            });
        } else {
            var t = document.createElement('textarea');
            t.value = email; t.style.cssText = 'position:fixed;opacity:0';
            document.body.appendChild(t); t.focus(); t.select();
            try { document.execCommand('copy'); showToast('Email zkopírován do schránky', 'success'); } catch(err) {}
            document.body.removeChild(t);
        }
    });
}

