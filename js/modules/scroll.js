// =========================================
// SCROLL — progress bar + section observer
// =========================================

export function initScroll() {
    const bar = document.getElementById('progressBar');

    if (bar) {
        window.addEventListener('scroll', () => {
            const scrolled = document.documentElement.scrollTop;
            const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            bar.style.width = (scrolled / total * 100) + '%';
        }, { passive: true });
    }

    // Section reveal observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(s => observer.observe(s));

    // Hero is always visible
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('visible');
}

export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to top button — smooth scroll JS
    const backTop = document.querySelector('.gf-back-top');
    if (backTop) {
        backTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const about = document.querySelector('.editorial-about');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
        });
    }
}
