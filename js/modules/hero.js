// =========================================
// HERO PARALLAX
// =========================================

export function initHeroParallax() {
    const hero = document.getElementById('hero');
    const nameTop = document.querySelector('.hero-name-top');
    const nameBottom = document.querySelector('.hero-name-bottom');
    if (!hero || !nameTop || !nameBottom) return;

    // Skip on mobile
    if (window.innerWidth < 768) return;

    hero.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        nameTop.style.transform = `translateX(-5vw) translate(${x}px, ${y}px)`;
        nameBottom.style.transform = `translateX(5vw) translate(${-x}px, ${-y}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        nameTop.style.transform = 'translateX(-5vw)';
        nameBottom.style.transform = 'translateX(5vw)';
    });
}
