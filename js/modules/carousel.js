// =========================================
// FEATURED WORK CAROUSEL (mobile)
// =========================================

export function initCarousel() {
    const track = document.getElementById('featuredTrack');
    const cards = document.querySelectorAll('.f-card');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const dotsContainer = document.getElementById('sliderDots');

    if (!track || cards.length === 0) return;
    if (window.innerWidth > 1024) return;

    // Build dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(i));
            dotsContainer.appendChild(dot);
        });
    }

    function scrollToCard(index) {
        const cardWidth = cards[0].offsetWidth + 32; // card + gap
        track.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 32;
            track.scrollTo({ left: track.scrollLeft - cardWidth, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 32;
            let newPos = track.scrollLeft + cardWidth;
            if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 50) newPos = 0;
            track.scrollTo({ left: newPos, behavior: 'smooth' });
        });
    }

    // Update active dot on scroll
    track.addEventListener('scroll', () => {
        const cardWidth = cards[0].offsetWidth + 32;
        const active = Math.round(track.scrollLeft / cardWidth);
        dotsContainer?.querySelectorAll('.slider-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === active);
        });
    }, { passive: true });

    // Swipe support
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            const cardWidth = cards[0].offsetWidth + 32;
            const dir = diff > 0 ? 1 : -1;
            track.scrollTo({ left: track.scrollLeft + dir * cardWidth, behavior: 'smooth' });
        }
    }, { passive: true });
}
