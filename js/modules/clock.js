// =========================================
// LIVE CLOCK — Brno/Prague timezone
// =========================================

export function initClock() {
    const dateEl = document.getElementById('brnoDate');
    const timeEl = document.getElementById('brnoTime');
    if (!dateEl && !timeEl) return;

    function update() {
        const now = new Date();
        if (dateEl) dateEl.textContent = now.toLocaleDateString('cs-CZ', { timeZone: 'Europe/Prague' });
        if (timeEl) timeEl.textContent = now.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });
    }

    update();
    setInterval(update, 1000);
}
