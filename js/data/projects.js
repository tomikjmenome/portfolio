// =========================================
// PROJECT DATABASE — single source of truth
// =========================================

export const projectsDatabase = {
    'branding-1': {
        title: 'Robokolo',
        category: 'Redesign',
        displayTag: 'Redesign',
        image: 'img/works/Robokolo/robokolo.png',
        gridClass: '',
        tags: ['Redesign', 'Branding', 'UI/UX'],
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
                    <a href="img/works/Fusion - Tower defense/Fusion Tower Defense - Prezentace.pdf" target="_blank" class="pd-btn" style="margin-bottom:2rem">Prohlédnout Prezentaci (PDF) ↓</a>
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
        description: 'Novoroční přání pro Policii Rajhrad.',
        modalImage: 'img/works/Posters/PolicieRajhrad-PF-2026.png'
    },

    'poster-2': {
        title: 'Matl Group',
        category: 'Posters',
        displayTag: 'Advertising',
        image: 'img/works/Posters/MatlGroup-Reklamniplakat-krytapřeprava.png',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Branding'],
        description: 'Reklamní plakát zaměřený na služby kryté přepravy.',
        modalImage: 'img/works/Posters/MatlGroup-Reklamniplakat-krytapřeprava.png'
    },

    'poster-3': {
        title: 'Jurský Park',
        category: 'Posters',
        displayTag: 'Redesign',
        image: 'img/works/Posters/JurskýPark-redesignFilmovehoPlakatu.png',
        gridClass: 'span-row-2',
        tags: ['Posters', 'Redesign', 'Art'],
        description: 'Alternativní redesign filmového plakátu pro kultovní snímek Jurský Park.',
        modalImage: 'img/works/Posters/JurskýPark-redesignFilmovehoPlakatu.png'
    },

    'digital-1': {
        title: 'Death Note',
        category: 'Digital Art',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/DeathNote.png',
        gridClass: 'span-row-2',
        tags: ['Digital Art', 'Illustration'],
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Digitální kresba/DeathNote.png" class="pd-image" alt="Death Note">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Digitální kresba</h3>
                    <p class="pd-text">Digitální ilustrace kreslená v aplikaci Procreate na iPadu.</p>
                </div>
            </div>`
    },

    'digital-2': {
        title: 'Dragon I',
        category: 'Digital Art',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/Dragon1.png',
        gridClass: 'span-row-2',
        tags: ['Digital Art', 'Illustration'],
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Digitální kresba/Dragon1.png" class="pd-image" alt="Dragon I">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Digitální kresba</h3>
                    <p class="pd-text">Digitální ilustrace kreslená v aplikaci Procreate na iPadu.</p>
                </div>
            </div>`
    },

    'digital-3': {
        title: 'Dragon II',
        category: 'Digital Art',
        displayTag: 'Digital Art',
        image: 'img/works/Digitální kresba/Dragon2.png',
        gridClass: 'span-row-2',
        tags: ['Digital Art', 'Illustration'],
        contentHTML: `
            <div class="project-detail-container">
                <div class="pd-section" style="margin-top:2rem">
                    <img src="img/works/Digitální kresba/Dragon2.png" class="pd-image" alt="Dragon II">
                </div>
                <div class="pd-section">
                    <h3 class="pd-title">Digitální kresba</h3>
                    <p class="pd-text">Digitální ilustrace kreslená v aplikaci Procreate na iPadu.</p>
                </div>
            </div>`
    }
};

export const filterCategories = [
    { value: 'all',          label: 'All Files'   },
    { value: 'Redesign',     label: 'Redesign'    },
    { value: 'Branding',     label: 'Branding'    },
    { value: 'Posters',      label: 'Posters'     },
    { value: 'Game Art',     label: 'Game Art'    },
    { value: 'Digital Art',  label: 'Digital Art' },
];

export const translations = {
    cs: {
        heroSubtitle:    'Designer & Digital Artist',
        contactCTA:      'Kontaktovat',
        downloadCV:      'Stáhnout CV',
        featuredTitle:   'Vybraná práce',
        archiveTitle:    'Index Projektů',
        typewriter:      'Dávám myšlenkám tvář.',
        typewriterWord:  'tvář',
        available:       'Dostupný',
        footerCTA:       'Máte projekt?',
        formName:        'Jméno',
        formEmail:       'E-mail',
        formMessage:     'Zpráva',
        formSend:        'Odeslat',
        formSuccess:     'Zpráva odeslána! Ozvu se brzy.',
        formError:       'Nepodařilo se odeslat. Použijte e-mail přímo.',
        mobileAbout:     'O mně',
        mobileWork:      'Práce',
        mobileContact:   'Kontakt',
        filterAll:       'All Files',
    },
    en: {
        heroSubtitle:    'Designer & Digital Artist',
        contactCTA:      'Contact Me',
        downloadCV:      'Download CV',
        featuredTitle:   'Featured Work',
        archiveTitle:    'Project Index',
        typewriter:      'Giving ideas a shape.',
        typewriterWord:  'shape',
        available:       'Available',
        footerCTA:       'Got a project?',
        formName:        'Name',
        formEmail:       'Email',
        formMessage:     'Message',
        formSend:        'Send',
        formSuccess:     'Message sent! I\'ll get back to you soon.',
        formError:       'Sending failed. Please use email directly.',
        mobileAbout:     'About',
        mobileWork:      'Work',
        mobileContact:   'Contact',
        filterAll:       'All Files',
    }
};
