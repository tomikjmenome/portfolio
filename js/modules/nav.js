// =========================================
// NAVIGATION — hamburger + mobile overlay
// =========================================

export function initNav() {
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;

    function openNav() {
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileNav.classList.add('active');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        mobileNav.classList.contains('active') ? closeNav() : openNav();
    });

    // Close on link click
    mobileNav.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Close on click outside (tap outside overlay content)
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) closeNav();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeNav();
        }
    });
}
