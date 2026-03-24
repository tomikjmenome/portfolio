// =========================================
// CUSTOM CURSOR
// =========================================

export function initCursor() {
    if (!window.matchMedia('(min-width: 769px)').matches) return;

    const cursor = document.querySelector('.custom-cursor');
    const aura = document.querySelector('.cursor-aura');
    if (!cursor || !aura) return;

    // Single mousemove listener for cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        aura.style.left = e.clientX + 'px';
        aura.style.top = e.clientY + 'px';
    });

    // Single delegated listener for hover state
    const HOVER_SELECTOR = 'a, button, .contact-cta, .f-btn, .random-glitch-btn, .f-card, .a-card, .modal-close, .lb-arrow, .gf-big-email, .software-icon-lg, .xp-card, .slider-dot, .slider-nav-btn, .lang-btn, .hamburger-menu, .scroll-indicator, .form-submit, .pd-btn, .pd-next-btn, .gf-back-top';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(HOVER_SELECTOR)) {
            cursor.classList.add('hovering');
            aura.classList.add('hovering');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(HOVER_SELECTOR)) {
            cursor.classList.remove('hovering');
            aura.classList.remove('hovering');
        }
    });
}
