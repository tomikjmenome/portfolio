// =========================================
// PORTFOLIO V2 — bundled single file
// No ES modules required — works with file:// and GitHub Pages
// =========================================

// ---- DATA ----

const projectsDatabase = {
    'branding-1': {
        title: 'Robokolo',
        category: 'Redesign',
        displayTag: 'Redesign',
        image: 'img/works/Robokolo/robokolo.png',
        gridClass: '',
        tags: ['Redesign', 'Branding', 'UI/UX'],
        shortDesc: 'Kompletní redesign vizuální identity. Cílem bylo posunout značku od "garážového hobby" k moderní technologické firmě. Výstupem je nové logo, piktogram, tiskoviny a merch.',
        shortDescEn: 'Complete visual identity redesign. The goal was to move the brand from a "garage hobby" to a modern tech company. Output includes a new logo, pictogram, stationery and merch.',
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Robokolo/robokolo.png" class="pd-image" alt="Robokolo Hero">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Rebranding</h3>
                    <p class="pd-text">Cílem redesignu bylo posunout vizuální styl od "garážového projektu" k moderní technologické značce. Nové logo využívá čisté geometrické tvary a výraznější typografii.</p>
                    <div class="comparison-wrapper">
                        <div class="comp-box old"><span class="comp-label">Původní Logo</span><img src="img/works/Robokolo/original.svg" style="width:70%;opacity:0.8" alt="Staré Logo"></div>
                        <div class="comp-box new bg-white"><span class="comp-label">Nový Vizuál</span><img src="img/works/Robokolo/NEW-logo.svg" style="width:80%" alt="Nové Logo"></div>
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Piktogram</h3>
                    <div class="pd-grid-2">
                        <div class="comp-box new bg-white" style="min-height:300px"><img src="img/works/Robokolo/NEW-PIKTOGRAM.svg" style="width:40%" alt="Piktogram"></div>
                        <div><p class="pd-text">Piktogram je zjednodušenou verzí loga, určenou pro malé formáty, ikony aplikací a sociální sítě. Zachovává dynamiku a rozpoznatelnost značky i bez textové části.</p></div>
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Firemní Tiskoviny</h3>
                    <div class="pd-grid-3">
                        <div><img src="img/works/Robokolo/Robokolo_vizitka.png" class="pd-image" alt="Vizitka"><span class="pd-caption">Vizitky</span></div>
                        <div><img src="img/works/Robokolo/obalka-mockup.png" class="pd-image" alt="Obálka"><span class="pd-caption">DL Obálka</span></div>
                        <div><img src="img/works/Robokolo/Dopis-papir-mockup.png" class="pd-image" alt="Dopisní papír"><span class="pd-caption">Hlavičkový papír</span></div>
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Merch & Produkty</h3>
                    <p class="pd-text">Aplikace nové identity na fyzické produkty. Od plechovek po textil.</p>
                    <div class="pd-grid-2" style="margin-bottom:2rem">
                        <img src="img/works/Robokolo/Merch/Plechovka/can.png" class="pd-image" alt="Energy Drink">
                        <img src="img/works/Robokolo/Merch/Taška/Taška-barevne.png" class="pd-image" alt="Taška">
                    </div>
                    <div class="pd-grid-3">
                        <img src="img/works/Robokolo/Merch/Tričko/Barevné/Normální/Normální.png" class="pd-image" alt="Tričko Barevné">
                        <img src="img/works/Robokolo/Merch/Tričko/Černý potisk/Piktogram/Piktogram_black_wb.png" class="pd-image" alt="Tričko BW">
                        <img src="img/works/Robokolo/Merch/Placka/Robokoloplacka.png" class="pd-image" alt="Placka">
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Proces & Skici</h3>
                    <p class="pd-text">Pohled do zákulisí tvorby loga. Prvotní nápady na papíře.</p>
                    <div class="pd-grid-3">
                        <img src="img/works/Robokolo/Návrhy/20250415_201640.jpg" class="pd-image" style="opacity:0.8" alt="Sketch 1">
                        <img src="img/works/Robokolo/Návrhy/20250415_201727.jpg" class="pd-image rotate-left" style="opacity:0.8" alt="Sketch 2">
                        <img src="img/works/Robokolo/Návrhy/20250415_201755.jpg" class="pd-image rotate-left" style="opacity:0.8" alt="Sketch 3">
                    </div>
                </div>
                <div class="pd-section" style="border-top:1px solid rgba(255,255,255,0.1);padding-top:4rem;text-align:center">
                    <a href="img/works/Robokolo/Robokolo-Logomanuál-FINAL.pdf" target="_blank" class="pd-btn" style="margin-bottom:2rem">Stáhnout Logomanuál (PDF) ↓</a>
                    <a href="javascript:void(0)" onclick="openModal('web-1')" class="pd-next-btn">Next Project: Abbey Road →</a>
                </div>
            </div>`
    },
    'web-1': {
        title: 'Abbey Road',
        category: 'Redesign',
        displayTag: 'Cover Art',
        image: 'img/works/Beatles/Beatles-mockup-final.png',
        gridClass: 'span-col-2',
        tags: ['Redesign', 'Fan Art', 'Cover Art'],
        shortDesc: 'Redesign ikonického alba The Beatles z roku 1969. Moderní reinterpretace hudebního dědictví — nové LP, obal a série plakátů. Osobní projekt / fan art.',
        shortDescEn: 'Redesign of The Beatles\' iconic 1969 album. A modern reinterpretation of the musical legacy — new LP, cover and a series of posters. Personal project / fan art.',
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Beatles/Beatles-mockup-final.png" class="pd-image" alt="Abbey Road Hero">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Osobní Projekt / Fan Art</h3>
                    <p class="pd-text">Tento projekt vznikl jako vizuální studie a pocta legendární kapele Beatles. Nejedná se o oficiální ani komerční zakázku, nýbrž o "fan art" koncept, jehož cílem bylo procvičit práci s typografií, kompozicí a atmosférou. Chtěl jsem zachovat ikonický status původního alba, ale vtisknout mu moderní, minimalistickou tvář.</p>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Vinyl & Cover Design</h3>
                    <div class="pd-grid-2">
                        <div><img src="img/works/Beatles/lp-design.png" class="pd-image" alt="LP Design"></div>
                        <div class="pd-text">Detailní pohled na zpracování samotné desky a obalu. Důraz na čisté linie a výrazný kontrast, který nechává vyniknout podstatu díla.</div>
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Plakáty</h3>
                    <p class="pd-text">Série plakátů navržená jako doprovodný vizuál k tomuto fiktivnímu redesignu.</p>
                    <img src="img/works/Beatles/posters-mockup-final-Recovered.png" class="pd-image" style="margin-bottom:2rem" alt="Posters Mockup">
                    <div class="pd-grid-3">
                        <img src="img/works/Beatles/poster/poster-beatles-black-gradiant.png" class="pd-image" alt="Poster Black Gradient">
                        <img src="img/works/Beatles/poster/poster-beatles-white-gradiant.png" class="pd-image" alt="Poster White Gradient">
                        <img src="img/works/Beatles/poster/poster-beatles-black-white.png" class="pd-image" alt="Poster BW">
                    </div>
                </div>
                <div class="pd-section" style="border-top:1px solid rgba(255,255,255,0.1);padding-top:4rem;text-align:center">
                    <a href="javascript:void(0)" onclick="openModal('fusion-1')" class="pd-next-btn">Next Project: Fusion TD →</a>
                </div>
            </div>`
    },
    'fusion-1': {
        title: 'Fusion Tower Defense',
        category: 'Game Art',
        displayTag: 'Pixel Art',
        image: 'img/works/Fusion - Tower defense/main-titlescreen.png',
        gridClass: '',
        tags: ['Pixel Art', 'Game Design', 'UI/UX'],
        shortDesc: '2D strategická hra v pixel-art stylu kombinující Tower Defense s roguelike prvky a karetním systémem. Kompletní vizuální stránka — logo, věže, nepřátelé, UI a prostředí.',
        shortDescEn: '2D pixel-art strategy game combining Tower Defense with roguelike elements and a card deck system. Complete visuals — logo, towers, enemies, UI and environment.',
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Fusion - Tower defense/main-titlescreen.png" class="pd-image" alt="Fusion TD Title">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">O Projektu</h3>
                    <p class="pd-text">Fusion Tower Defense je školní herní projekt, na kterém jsem pracoval v týmu se třemi programátory. Mým úkolem byla kompletní vizuální stránka hry – od návrhu prostředí a postav až po uživatelské rozhraní (UI) a logo.</p>
                    <p class="pd-text">Hra kombinuje klasický žánr Tower Defense s prvky Roguelike a karetními mechanikami. Vše je stylizováno do fantasy pixel artu.</p>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Gameplay & Prostředí</h3>
                    <div class="pd-grid-2">
                        <img src="img/works/Fusion - Tower defense/game-screenshot.png" class="pd-image" alt="Gameplay">
                        <div class="pd-text"><p>Mapa je tvořena gridovým systémem 16×16 pixelů, což zajišťuje přehlednost a uspořádanost herního světa. Vytvořil jsem několik variant terénu, cest a dekorací, aby každá úroveň působila unikátně.</p></div>
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Design Věží (Towers)</h3>
                    <p class="pd-text">Pro hru jsem navrhl 4 základní typy věží, přičemž každá má 4 úrovně vylepšení (Tiers). S každou úrovní se mění vzhled věže, aby reflektoval její rostoucí sílu.</p>
                    <div class="pd-grid-2" style="margin-bottom:2rem">
                        <div><img src="img/works/Fusion - Tower defense/Towers/MageTiers.png" class="pd-image" alt="Mage Tower"><span class="pd-caption">Mage Tower</span></div>
                        <div><img src="img/works/Fusion - Tower defense/Towers/ArcherTiers.png" class="pd-image" alt="Archer Tower"><span class="pd-caption">Archer Tower</span></div>
                    </div>
                    <div class="pd-grid-2">
                        <div><img src="img/works/Fusion - Tower defense/Towers/BarracksTiers.png" class="pd-image" alt="Barracks"><span class="pd-caption">Barracks</span></div>
                        <div><img src="img/works/Fusion - Tower defense/Towers/TrapperTiers.png" class="pd-image" alt="Trap Tower"><span class="pd-caption">Trapper Tower</span></div>
                    </div>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Nástroje & Proces</h3>
                    <p class="pd-text">Při tvorbě jsem vyměnil původně zkoušený Blockbench za <strong>Aseprite</strong>, který se ukázal jako ideální nástroj pro 2D pixel art a animace. Logo hry prošlo procesem od prvotních konceptů generovaných AI až po finální ruční překreslení do pixel artu, aby ladilo se zbytkem hry.</p>
                </div>
                <div class="pd-section" style="border-top:1px solid rgba(255,255,255,0.1);padding-top:4rem;text-align:center">
                    <a href="img/works/Fusion - Tower defense/Fusion-TD-Dokumentace.pdf" target="_blank" class="pd-btn" style="margin-bottom:2rem">Stáhnout Dokumentaci (PDF) ↓</a>
                    <a href="javascript:void(0)" onclick="openModal('poster-1')" class="pd-next-btn">Next Project: PF 2026 →</a>
                </div>
            </div>`
    },
    'poster-1': {
        title: 'PF 2026',
        category: 'Posters',
        displayTag: 'Graphic Design',
        image: 'img/works/Posters/PolicieRajhrad-PF-2026.png',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Print'],
        shortDesc: 'Novoroční přání pro Obvodní oddělení Policie ČR Rajhrad.',
        shortDescEn: 'New Year greeting card for the Rajhrad Police department.',
        modalImage: 'img/works/Posters/PolicieRajhrad-PF-2026.png'
    },
    'poster-2': {
        title: 'Matl Group',
        category: 'Posters',
        displayTag: 'Advertising',
        image: 'img/works/Posters/MatlGroup-Reklamniplakat-krytapřeprava.png',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Branding'],
        shortDesc: 'Reklamní plakát pro společnost Matl Group zaměřený na kryté přepravy luxusních a nových vozidel.',
        shortDescEn: 'Advertising poster for Matl Group focusing on covered transport of luxury and new vehicles.',
        modalImage: 'img/works/Posters/MatlGroup-Reklamniplakat-krytapřeprava.png'
    },
    'poster-3': {
        title: 'Jurský Park',
        category: 'Posters',
        displayTag: 'Redesign',
        image: 'img/works/Posters/JurskýPark-redesignFilmovehoPlakatu.png',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Redesign', 'Art'],
        shortDesc: 'Alternativní redesign filmového plakátu pro kultovní sci-fi snímek Jurský Park (1993). Moderní reinterpretace ikonické vizuální identity.',
        shortDescEn: 'Alternative poster redesign for the iconic sci-fi film Jurassic Park (1993). A modern reinterpretation of the classic visual identity.',
        modalImage: 'img/works/Posters/JurskýPark-redesignFilmovehoPlakatu.png'
    },
    'apex-1': {
        title: 'Apex',
        category: 'UI/UX',
        displayTag: 'App Design',
        image: 'img/works/Apex/apex-home.png',
        gridClass: 'span-col-2',
        tags: ['UI/UX', 'App Design', 'Concept'],
        shortDesc: 'Konceptuální návrh UI pro streamovací aplikaci Apex. Důraz na přehlednost, typografii a tmavý vizuální styl inspirovaný prémiových streamovacími platformami.',
        shortDescEn: 'Conceptual UI design for Apex streaming app. Focus on clarity, typography and a dark visual style inspired by premium streaming platforms.',
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Apex/apex-home.png" class="pd-image" alt="Apex — Hlavní obrazovka">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">O Projektu</h3>
                    <p class="pd-text">Apex je konceptuální návrh UI pro fiktivní streamovací platformu. Cílem bylo vytvořit čistý, moderní a intuitivní interface s důrazem na obsah — filmy a seriály. Inspirací byly přední světové streamovací služby, ale s vlastním vizuálním jazykem.</p>
                    <p class="pd-text">Tmavé pozadí, výrazná typografie a dobře zvolená hierarchie prvků zajišťují, že uživatel okamžitě ví, co je důležité a jak se orientovat.</p>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Obrazovky</h3>
                    <div class="pd-grid-2">
                        <div><img src="img/works/Apex/apex-home.png" class="pd-image" alt="Apex — Domovská stránka"><span class="pd-caption">Domovská stránka</span></div>
                        <div><img src="img/works/Apex/apex-selected-movie.png" class="pd-image" alt="Apex — Detail filmu"><span class="pd-caption">Detail vybraného titulu</span></div>
                    </div>
                </div>
            </div>`
    },
    'digital-art-1': {
        title: 'Digitální Kresba',
        category: 'Illustration',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/Dragon1.png',
        gridClass: '',
        tags: ['Illustration', 'Digital Art', 'Fan Art'],
        shortDesc: 'Série digitálních kreseb vytvořených ve volném čase. Fantasy motivy a fan art — draci a postavy z oblíbených sérií. Kresleno v Photoshopu na grafickém tabletu.',
        shortDescEn: 'A series of digital drawings created in free time. Fantasy motifs and fan art — dragons and characters from favourite series. Drawn in Photoshop on a graphics tablet.',
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Digitální kresba/Dragon1.png" class="pd-image" alt="Drak — digitální kresba">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">O Pracích</h3>
                    <p class="pd-text">Digitální kresba je pro mě způsob, jak relaxovat a zároveň rozvíjet cit pro detail, světlo a stín mimo komerční zakázky. Pracuji v Adobe Photoshopu s grafickým tabletem Wacom.</p>
                    <p class="pd-text">Tato série zahrnuje fantasy motivy — draci s detailně zpracovanými šupinami a texturou, a fan art inspirovaný japonskou manga sérií Death Note.</p>
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Galerie</h3>
                    <div class="pd-grid-2" style="margin-bottom:2rem">
                        <div><img src="img/works/Digitální kresba/Dragon1.png" class="pd-image" alt="Drak 1"><span class="pd-caption">Drak — verze 1</span></div>
                        <div><img src="img/works/Digitální kresba/Dragon2.png" class="pd-image" alt="Drak 2"><span class="pd-caption">Drak — verze 2</span></div>
                    </div>
                    <div>
                        <img src="img/works/Digitální kresba/DeathNote.png" class="pd-image" alt="Death Note Fan Art"><span class="pd-caption">Death Note — Fan Art</span>
                    </div>
                </div>
            </div>`
    }
};

const filterCategories = [
    { value: 'all',          label: 'All Files'    },
    { value: 'Redesign',     label: 'Redesign'     },
    { value: 'Branding',     label: 'Branding'     },
    { value: 'Posters',      label: 'Posters'      },
    { value: 'Game Art',     label: 'Game Art'     },
    { value: 'UI/UX',        label: 'UI/UX'        },
    { value: 'Illustration', label: 'Illustration' },
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
        aboutBio3: 'Angličtina: B2 (upper-intermediate)',
        available: 'Dostupný', contactCTA: 'Kontaktovat', downloadCV: 'Stáhnout CV',
        // Career
        careerTitle: 'Vzdělání',
        xpDegree: 'Informační Technologie',
        xpDesc: 'Maturitní obor zakončený státní maturitní zkouškou. Průměr 1,47.',
        // Software
        softwareTitle: 'Můj Digitální Arzenál',
        // Featured work
        featuredTitle: 'Vybraná práce',
        featuredSubtitle: 'Výběr mých nejlepších prací',
        f1Cat: 'Redesign', f1Title: 'Robokolo', f1Desc: 'Kompletní redesign značky a vizuální identity.',
        f2Cat: 'Redesign', f2Title: 'Abbey Road — The Beatles', f2Desc: 'Kompletní redesign LP desky a souvisejících plakátů.',
        f3Cat: 'Game Art', f3Title: 'Fusion Tower Defense', f3Desc: 'Kompletní vizuální stránka hry — pixel art, UI, logo.',
        // Archive
        archiveTitle: 'Projekty',
        // Footer
        footerCTA: 'Máte projekt?',
        footerFormTitle: 'Nebo napište přímo',
        footerAbout: 'O mně', footerWork: 'Práce', footerArchive: 'Archiv',
        footerMenuTitle: 'Menu', footerSocialsTitle: 'Socials',
        footerLocationTitle: 'Lokace', footerLocation: 'Brno, Czech Republic\nAvailable for remote',
        footerBackTop: 'Zpět nahoru ↑',
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
        aboutBio3: 'English: B2 (upper-intermediate)',
        available: 'Available', contactCTA: 'Contact Me', downloadCV: 'Download CV',
        // Career
        careerTitle: 'Education',
        xpDegree: 'Information Technology',
        xpDesc: 'Secondary school diploma with state graduation exam. GPA 1.47.',
        // Software
        softwareTitle: 'My Digital Arsenal',
        // Featured work
        featuredTitle: 'Featured Work',
        featuredSubtitle: 'Curated selection of my finest pixels',
        f1Cat: 'Redesign', f1Title: 'Robokolo', f1Desc: 'Complete brand and visual identity redesign.',
        f2Cat: 'Redesign', f2Title: 'Abbey Road — The Beatles', f2Desc: 'Complete LP record and poster series redesign.',
        f3Cat: 'Game Art', f3Title: 'Fusion Tower Defense', f3Desc: 'Complete game visuals — pixel art, UI, logo.',
        // Archive
        archiveTitle: 'Projects',
        // Footer
        footerCTA: 'Got a project?',
        footerFormTitle: 'Or write directly',
        footerAbout: 'About', footerWork: 'Work', footerArchive: 'Archive',
        footerMenuTitle: 'Menu', footerSocialsTitle: 'Socials',
        footerLocationTitle: 'Location', footerLocation: 'Brno, Czech Republic\nAvailable for remote',
        footerBackTop: 'Back to Top ↑',
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

    // Featured slide click (skip intro slide — no data-project)
    document.querySelectorAll('.featured-slide').forEach(function(slide) {
        var projectId = slide.dataset.project;
        if (!projectId) return;
        slide.addEventListener('click', function() { openModal(projectId); });
        slide.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(projectId); }
        });
    });
});

// =========================================
// PRELOADER
// =========================================
function initPreloader() {
    var loader = document.getElementById('preloader');
    if (!loader) return;
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

        cursor.classList.remove('cursor-view', 'cursor-copy', 'cursor-zoom');
        aura.classList.remove('hovering');

        if (slide) {
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
        if (slide || email || imgModal) {
            cursor.classList.remove('cursor-view', 'cursor-copy', 'cursor-zoom');
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
        card.innerHTML = '<div class="a-image"><img src="' + item.image + '" alt="' + item.title + '" loading="lazy"><div class="a-overlay-tech" aria-hidden="true">VIEW PROJECT</div></div><div class="a-meta"><div class="a-id">PRJ-' + num + '</div><div class="a-info"><h4>' + item.title + '</h4><span class="a-tag">' + item.displayTag + '</span></div></div>';
        card.addEventListener('click', function() { openModal(key); });
        card.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(key); } });
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
                // ~1.2 s total, min 40 ms per step so large numbers don't fly by
                var stepDelay = Math.min(Math.max(40, Math.floor(1200 / target)), 600);
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

        var mailtoUrl = 'mailto:tomashajek07@gmail.com?subject=' + encodeURIComponent('Portfolio inquiry from ' + name) + '&body=' + encodeURIComponent(message) + '%0A%0AFrom: ' + encodeURIComponent(email);
        window.location.href = mailtoUrl;

        _showFormStatus('success', t.formSuccess);
        form.reset();
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = t.formSend; }
    });
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

    function goTo(idx) {
        idx = Math.max(0, Math.min(n - 1, idx));
        if (idx === _cur) return;
        _cur = idx;
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        slides.forEach(function(s, i) { s.classList.toggle('is-active', i === idx); });
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

    // Touch swipe to navigate slides
    var inner = document.getElementById('featuredInner');
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

