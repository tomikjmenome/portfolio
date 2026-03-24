// =========================================
// CANVAS DOT ANIMATION — spatial grid optimized
// =========================================

export function initCanvas() {
    const canvas = document.getElementById('dotCanvas');
    const heroSection = document.getElementById('hero');
    if (!canvas || !heroSection) return;

    const ctx = canvas.getContext('2d');
    const SPACING = 80;
    const CONNECT_DIST = 160;
    const REPEL_DIST = 150;
    const CELL_SIZE = CONNECT_DIST;

    let dots = [];
    let mouse = { x: -9999, y: -9999 };
    let animId = null;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
        initDots();
    }

    function initDots() {
        dots = [];
        // Fewer dots on mobile to save battery
        const spacing = isMobile ? 140 : SPACING;
        const rows = Math.ceil(canvas.height / spacing) + 2;
        const cols = Math.ceil(canvas.width / spacing) + 2;
        let id = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const baseX = j * spacing;
                const baseY = i * spacing;
                dots.push({
                    id: id++,
                    x: baseX + Math.random() * 20,
                    y: baseY + Math.random() * 20,
                    baseX,
                    baseY,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                });
            }
        }
    }

    // Spatial hash: partition dots into cells for O(1) neighbor lookup
    function buildSpatialGrid() {
        const grid = new Map();
        for (const dot of dots) {
            const cx = Math.floor(dot.x / CELL_SIZE);
            const cy = Math.floor(dot.y / CELL_SIZE);
            const key = `${cx},${cy}`;
            if (!grid.has(key)) grid.set(key, []);
            grid.get(key).push(dot);
        }
        return grid;
    }

    function getNeighborDots(grid, dot) {
        const cx = Math.floor(dot.x / CELL_SIZE);
        const cy = Math.floor(dot.y / CELL_SIZE);
        const neighbors = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const key = `${cx + dx},${cy + dy}`;
                if (grid.has(key)) {
                    for (const n of grid.get(key)) {
                        if (n !== dot) neighbors.push(n);
                    }
                }
            }
        }
        return neighbors;
    }

    function drawDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update positions
        for (const dot of dots) {
            dot.x += dot.vx + (dot.baseX - dot.x) * 0.05;
            dot.y += dot.vy + (dot.baseY - dot.y) * 0.05;

            const dx = mouse.x - dot.x;
            const dy = mouse.y - dot.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < REPEL_DIST) {
                const force = (REPEL_DIST - dist) / REPEL_DIST;
                dot.x -= dx * force * 0.03;
                dot.y -= dy * force * 0.03;
            }

            ctx.fillStyle = 'rgba(255, 51, 102, 0.5)';
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw connections using spatial grid
        const grid = buildSpatialGrid();
        ctx.strokeStyle = 'rgba(255, 51, 102, 0.15)';
        ctx.lineWidth = 1;

        const drawn = new Set();
        for (const dot of dots) {
            const neighbors = getNeighborDots(grid, dot);
            for (const n of neighbors) {
                const a = dot.id < n.id ? dot.id : n.id;
                const b = dot.id < n.id ? n.id : dot.id;
                const pairKey = (a << 16) | b; // fast integer key
                if (drawn.has(pairKey)) continue;
                drawn.add(pairKey);

                const dx = dot.x - n.x;
                const dy = dot.y - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(n.x, n.y);
                    ctx.stroke();
                }
            }
        }

        animId = requestAnimationFrame(drawDots);
    }

    // Mouse tracking
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', () => {
        mouse.x = -9999;
        mouse.y = -9999;
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (prefersReduced) {
        // Just draw static dots, no animation loop
        ctx.fillStyle = 'rgba(255, 51, 102, 0.5)';
        for (const dot of dots) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    } else {
        drawDots();
    }

    // Expose mouse for hero parallax
    return mouse;
}
