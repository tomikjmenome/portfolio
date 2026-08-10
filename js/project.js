// =========================================
// PROJECT PAGE — jen to, co samostatná stránka projektu potřebuje.
// Vědomě nepoužívá app.js: ten je psaný pro index a většina jeho
// init funkcí by tu jen hledala neexistující elementy.
// =========================================

document.addEventListener('DOMContentLoaded', function () {
    initCursor();
    initScrollProgress();
    initLightbox();
});

// =========================================
// CURSOR
// =========================================
function initCursor() {
    var cursor = document.querySelector('.custom-cursor');
    var aura   = document.querySelector('.cursor-aura');
    if (!cursor || !aura) return;

    // Dotykové zařízení nemá kurzor — nechat systémový a nic nekreslit
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        cursor.style.display = 'none';
        aura.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px';
        aura.style.left   = e.clientX + 'px'; aura.style.top   = e.clientY + 'px';
    });

    var HOVER = 'a, button, .pd-btn, .pd-next-btn, .lb-arrow';
    document.addEventListener('mouseover', function (e) {
        var zoomable = e.target.closest('.pd-image');
        cursor.classList.remove('cursor-zoom');
        aura.classList.remove('hovering');

        if (zoomable) {
            cursor.classList.add('cursor-zoom');
            aura.classList.add('hovering');
        } else if (e.target.closest(HOVER)) {
            aura.classList.add('hovering');
        }
    });
}

// =========================================
// SCROLL PROGRESS
// =========================================
function initScrollProgress() {
    var bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
        var scrolled = document.documentElement.scrollTop;
        var total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        bar.style.width = (total > 0 ? (scrolled / total * 100) : 0) + '%';
    }, { passive: true });
}

// =========================================
// LIGHTBOX
// =========================================
var _lbImages = [];
var _lbIndex = 0;

function initLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb) return;

    _lbImages = Array.prototype.slice.call(document.querySelectorAll('.pd-image'));

    document.addEventListener('click', function (e) {
        var img = e.target.closest('.pd-image');
        if (img) { e.preventDefault(); _openLightbox(img); }
    });

    var prev = document.getElementById('lbPrev');
    var next = document.getElementById('lbNext');
    if (prev) prev.addEventListener('click', function (e) { e.stopPropagation(); _changeImg(-1); });
    if (next) next.addEventListener('click', function (e) { e.stopPropagation(); _changeImg(1); });

    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });

    document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') _changeImg(1);
        if (e.key === 'ArrowLeft') _changeImg(-1);
    });

    // Swipe na mobilu
    var startX = 0;
    lb.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) _changeImg(diff > 0 ? 1 : -1);
    }, { passive: true });
}

function _openLightbox(img) {
    var lb = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightboxImg');
    if (!lb || !lbImg) return;

    _lbIndex = _lbImages.indexOf(img);
    if (_lbIndex < 0) _lbIndex = 0;

    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    _updateCounter();
}

function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

function _changeImg(step) {
    if (!_lbImages.length) return;
    _lbIndex = (_lbIndex + step + _lbImages.length) % _lbImages.length;
    var lbImg = document.getElementById('lightboxImg');
    if (lbImg) {
        lbImg.src = _lbImages[_lbIndex].src;
        lbImg.alt = _lbImages[_lbIndex].alt || '';
    }
    _updateCounter();
}

function _updateCounter() {
    var counter = document.getElementById('lbCounter');
    if (counter) counter.textContent = (_lbIndex + 1) + ' / ' + _lbImages.length;
}
