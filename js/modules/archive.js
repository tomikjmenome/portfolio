// =========================================
// ARCHIVE — render + filter + stats
// =========================================

import { projectsDatabase, filterCategories } from '../data/projects.js';

export function renderArchive() {
    const grid = document.getElementById('archiveGrid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();
    const keys = Object.keys(projectsDatabase);

    keys.forEach((key, index) => {
        const item = projectsDatabase[key];
        const num = String(index + 1).padStart(2, '0');

        const card = document.createElement('article');
        card.className = `a-card ${item.gridClass || ''}`.trim();
        card.dataset.category = item.category;
        card.dataset.project = key;
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View project: ${item.title}`);

        card.innerHTML = `
            <div class="a-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="a-overlay-tech" aria-hidden="true">VIEW PROJECT</div>
            </div>
            <div class="a-meta">
                <div class="a-id">PRJ-${num}</div>
                <div class="a-info">
                    <h4>${item.title}</h4>
                    <span class="a-tag">${item.displayTag}</span>
                </div>
            </div>
        `;

        // Click and keyboard
        card.addEventListener('click', () => window.openModal(key));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.openModal(key);
            }
        });

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);

    updateStats(keys.length);
    renderFilterButtons();
    initFilters();
    initStatsCounter();
    initRandomButton();
}

function updateStats(total) {
    const totalEl = document.getElementById('totalFilesCount');
    if (totalEl) totalEl.textContent = total;
}

function renderFilterButtons() {
    const filterList = document.querySelector('.filter-list');
    if (!filterList) return;

    // Count per category
    const counts = {};
    for (const key of Object.keys(projectsDatabase)) {
        const cat = projectsDatabase[key].category;
        counts[cat] = (counts[cat] || 0) + 1;
    }

    const total = Object.keys(projectsDatabase).length;
    filterList.innerHTML = '';

    filterCategories.forEach(({ value, label }) => {
        const count = value === 'all' ? total : (counts[value] || 0);
        const btn = document.createElement('button');
        btn.className = 'f-btn' + (value === 'all' ? ' active' : '');
        btn.dataset.filter = value;
        if (value === 'all') btn.id = 'filterAllBtn';
        btn.innerHTML = `${label} <span class="filter-count">[${count}]</span>`;
        filterList.appendChild(btn);
    });
}

function initFilters() {
    const filterList = document.querySelector('.filter-list');
    if (!filterList) return;

    filterList.addEventListener('click', (e) => {
        const btn = e.target.closest('.f-btn');
        if (!btn) return;

        const filter = btn.dataset.filter;
        document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cards = document.querySelectorAll('.a-card');
        cards.forEach(card => {
            // Remove layout spans when filtering
            card.classList.remove('span-col-2', 'span-row-2');

            const match = filter === 'all' || card.dataset.category === filter;

            if (match) {
                card.classList.remove('hidden');
                // Restore original gridClass if showing all
                if (filter === 'all') {
                    const orig = projectsDatabase[card.dataset.project]?.gridClass;
                    if (orig) card.classList.add(orig);
                }
                card.style.animation = 'none';
                card.offsetHeight; // reflow
                card.style.animation = 'fadeIn 0.4s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

export function filterByTag(tagCategory) {
    const gridSection = document.getElementById('work-grid');
    const filterBtn = document.querySelector(`.f-btn[data-filter="${tagCategory}"]`);
    if (gridSection && filterBtn) {
        gridSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => filterBtn.click(), 600);
    }
}

function initStatsCounter() {
    const dashboard = document.querySelector('.archive-dashboard');
    if (!dashboard) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);

            entry.target.querySelectorAll('.stat-number').forEach(counter => {
                const target = parseInt(counter.dataset.target) || Object.keys(projectsDatabase).length;
                let current = 0;
                const inc = target / 50;
                const suffix = counter.dataset.target ? '+' : '';

                const timer = setInterval(() => {
                    current += inc;
                    if (current >= target) {
                        counter.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 30);
            });
        });
    }, { threshold: 0.5 });

    observer.observe(dashboard);
}

function initRandomButton() {
    const btn = document.getElementById('randomProjectBtn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const visible = Array.from(document.querySelectorAll('.a-card:not(.hidden)'));
        if (visible.length === 0) return;
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
            visible[Math.floor(Math.random() * visible.length)].click();
        }, 200);
    });
}
