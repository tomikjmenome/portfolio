// =========================================
// MAIN — orchestrator
// =========================================

import { initScroll, initSmoothScroll } from './modules/scroll.js';
import { initCursor } from './modules/cursor.js';
import { initCanvas } from './modules/canvas.js';
import { initHeroParallax } from './modules/hero.js';
import { initTypewriter } from './modules/typewriter.js';
import { initNav } from './modules/nav.js';
import { initLang } from './modules/lang.js';
import { renderArchive, filterByTag } from './modules/archive.js';
import { initModal } from './modules/modal.js';
import { initContactForm } from './modules/contact.js';
import { initCarousel } from './modules/carousel.js';
import { initClock } from './modules/clock.js';
import { translations } from './data/projects.js';

// Prevent scroll restoration artifacts
if (history.scrollRestoration) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    // Foundation
    initScroll();
    initSmoothScroll();
    initCursor();
    initClock();

    // Hero
    initCanvas();
    initHeroParallax();

    // About
    initTypewriter(translations.cs.typewriter, translations.cs.typewriterWord);

    // Navigation
    initNav();
    initLang();

    // Work
    renderArchive();
    initModal();
    initCarousel();

    // Contact
    initContactForm();

    // Featured work card click handlers
    document.querySelectorAll('.f-card').forEach(card => {
        const projectId = card.dataset.project;
        card.addEventListener('click', () => window.openModal(projectId));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.openModal(projectId);
            }
        });
    });

    // Expose filterByTag globally for featured work f-tag onclick
    window.filterByTag = (e, tag) => {
        if (e) e.stopPropagation();
        filterByTag(tag);
    };
});
