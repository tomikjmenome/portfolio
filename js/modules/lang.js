// =========================================
// LANGUAGE SWITCHER
// =========================================

import { translations } from '../data/projects.js';
import { resetTypewriter } from './typewriter.js';

let currentLang = 'cs';

export function initLang() {
    // Set initial state — show EN button, hide CS (we start in Czech)
    setLangButtonVisibility('cs');

    // Desktop buttons
    document.getElementById('btn-en')?.addEventListener('click', () => switchLanguage('en'));
    document.getElementById('btn-cs')?.addEventListener('click', () => switchLanguage('cs'));

    // Mobile buttons
    document.querySelectorAll('.m-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
}

export function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    const t = translations[lang];

    // Hero
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) subtitle.textContent = t.heroSubtitle;

    // About
    document.querySelectorAll('.contact-cta').forEach(el => el.textContent = t.contactCTA);
    const cvLink = document.querySelector('.download-cv');
    if (cvLink) cvLink.textContent = t.downloadCV;

    const statusText = document.querySelector('.status-badge span');
    if (statusText) statusText.textContent = t.available;

    // Featured
    const featuredH2 = document.querySelector('.featured-work h2');
    if (featuredH2) featuredH2.textContent = t.featuredTitle;

    // Archive
    const archiveH2 = document.querySelector('.archive-header h2');
    if (archiveH2) archiveH2.textContent = t.archiveTitle;

    // Filter All button
    const allBtn = document.getElementById('filterAllBtn');
    if (allBtn) {
        const count = allBtn.querySelector('.filter-count')?.textContent || '';
        allBtn.innerHTML = `${t.filterAll} <span class="filter-count">${count}</span>`;
    }

    // Footer
    const footerLabel = document.querySelector('.gf-label');
    if (footerLabel) footerLabel.textContent = t.footerCTA;

    // Contact form labels
    const nameLabel = document.querySelector('label[for="contact-name"]');
    const emailLabel = document.querySelector('label[for="contact-email"]');
    const msgLabel = document.querySelector('label[for="contact-message"]');
    const submitBtn = document.querySelector('.form-submit');
    if (nameLabel) nameLabel.textContent = t.formName;
    if (emailLabel) emailLabel.textContent = t.formEmail;
    if (msgLabel) msgLabel.textContent = t.formMessage;
    if (submitBtn) submitBtn.textContent = t.formSend;

    // Mobile nav
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileLabels = [t.mobileAbout, t.mobileWork, t.mobileContact];
    mobileLinks.forEach((link, i) => { if (mobileLabels[i]) link.textContent = mobileLabels[i]; });

    // Lang buttons
    setLangButtonVisibility(lang);

    // Typewriter — reset so it fires again
    resetTypewriter(t.typewriter, t.typewriterWord);
}

function setLangButtonVisibility(activeLang) {
    const btnEn = document.getElementById('btn-en');
    const btnCs = document.getElementById('btn-cs');
    if (btnEn) {
        btnEn.style.display = activeLang === 'en' ? 'none' : 'flex';
        btnEn.setAttribute('aria-current', activeLang === 'en' ? 'true' : 'false');
    }
    if (btnCs) {
        btnCs.style.display = activeLang === 'cs' ? 'none' : 'flex';
        btnCs.setAttribute('aria-current', activeLang === 'cs' ? 'true' : 'false');
    }
}

export function getCurrentLang() {
    return currentLang;
}
