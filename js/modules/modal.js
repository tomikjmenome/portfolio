// =========================================
// MODAL + LIGHTBOX
// =========================================

import { projectsDatabase } from '../data/projects.js';

// ---- Lightbox state ----
let lightboxImages = [];
let currentIndex = 0;

// ---- Modal ----
export function initModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close button
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        const lb = document.getElementById('lightbox');
        const lbActive = lb?.classList.contains('active');
        const modalActive = modal.classList.contains('active');

        if (lbActive) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') changeImage(1);
            if (e.key === 'ArrowLeft') changeImage(-1);
        } else if (modalActive && e.key === 'Escape') {
            closeModal();
        }
    });

    // Image click → lightbox (delegated)
    document.addEventListener('click', (e) => {
        const img = e.target.closest('.pd-image, .modal-image img');
        if (img && modal.classList.contains('active')) {
            e.stopPropagation();
            openLightbox(img);
        }
    });

    // Lightbox arrow buttons
    document.getElementById('lbPrev')?.addEventListener('click', (e) => {
        e.stopPropagation();
        changeImage(-1);
    });
    document.getElementById('lbNext')?.addEventListener('click', (e) => {
        e.stopPropagation();
        changeImage(1);
    });

    // Close lightbox on backdrop click
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('lightbox')) closeLightbox();
    });

    // Touch swipe for lightbox
    initLightboxSwipe();

    // Expose globally for onclick handlers inside contentHTML
    window.openModal = openModal;
    window.closeModal = closeModal;
}

export function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const data = projectsDatabase[projectId];
    if (!data || !modal) return;

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalCategory').textContent = data.category;

    const tagsEl = document.getElementById('modalTags');
    if (tagsEl) tagsEl.innerHTML = data.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

    const descEl = document.getElementById('modalDescription');
    const galleryEl = document.getElementById('modalGallery');
    const mainImg = document.getElementById('modalImage');

    if (data.contentHTML) {
        if (mainImg) mainImg.style.display = 'none';
        if (galleryEl) galleryEl.innerHTML = '';
        if (descEl) descEl.innerHTML = data.contentHTML;
    } else {
        if (mainImg) {
            mainImg.style.display = 'block';
            mainImg.querySelector('img').src = data.modalImage || data.image;
        }
        if (descEl) descEl.innerHTML = `<p>${data.description}</p>`;
        if (galleryEl) galleryEl.innerHTML = '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    trapFocus(modal);
}

export function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    releaseFocus();
}

// ---- Focus trap ----
let savedFocus = null;
let focusTrapHandler = null;

function trapFocus(container) {
    savedFocus = document.activeElement;
    const focusable = container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    focusTrapHandler = (e) => {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
            if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    };
    container.addEventListener('keydown', focusTrapHandler);
}

function releaseFocus() {
    const modal = document.getElementById('projectModal');
    if (focusTrapHandler && modal) modal.removeEventListener('keydown', focusTrapHandler);
    focusTrapHandler = null;
    if (savedFocus) savedFocus.focus();
}

// ---- Lightbox ----
function openLightbox(imgEl) {
    const modal = document.getElementById('projectModal');
    let targetSrc = imgEl.tagName === 'IMG' ? imgEl.src : imgEl.querySelector('img')?.src;
    if (!targetSrc) return;

    // Collect only pd-image and modal hero image sources
    const modalImgs = modal.querySelectorAll('.pd-image, .modal-image img');
    lightboxImages = [...new Set(Array.from(modalImgs).map(i => i.src).filter(Boolean))];

    currentIndex = lightboxImages.findIndex(src => src === targetSrc);
    if (currentIndex === -1) {
        currentIndex = 0;
        if (!lightboxImages.includes(targetSrc)) lightboxImages.unshift(targetSrc);
    }

    updateLightboxImage();
    document.getElementById('lightbox')?.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox')?.classList.remove('active');
}

function changeImage(dir) {
    currentIndex = (currentIndex + dir + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightboxImg');
    const counter = document.getElementById('lbCounter');
    if (!img) return;

    img.classList.add('fade-change');
    setTimeout(() => {
        img.src = lightboxImages[currentIndex];
        if (counter) counter.textContent = `${currentIndex + 1} / ${lightboxImages.length}`;
        img.onload = () => img.classList.remove('fade-change');
    }, 200);
}

function initLightboxSwipe() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;

    let startX = 0;
    lb.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) changeImage(diff > 0 ? 1 : -1);
    }, { passive: true });
}
