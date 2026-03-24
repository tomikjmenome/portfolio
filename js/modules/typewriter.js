// =========================================
// TYPEWRITER EFFECT
// =========================================

let hasTyped = false;
let observer = null;

export function initTypewriter(text, coloredWord) {
    hasTyped = false;
    const target = document.getElementById('typewriter-target');
    if (!target) return;

    if (observer) observer.disconnect();

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                hasTyped = true;
                startTypewriter(text, coloredWord);
            }
        });
    });

    observer.observe(target);
}

function startTypewriter(text, coloredWord) {
    const el = document.getElementById('typewriterText');
    if (!el) return;

    el.innerHTML = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        } else if (coloredWord) {
            el.innerHTML = text.replace(
                coloredWord,
                `<span class="accent-word">${coloredWord}</span>`
            );
        }
    }

    type();
}

export function resetTypewriter(text, coloredWord) {
    hasTyped = false;
    initTypewriter(text, coloredWord);
    // Also trigger immediately if already in viewport
    const target = document.getElementById('typewriter-target');
    if (target) {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            hasTyped = true;
            startTypewriter(text, coloredWord);
        }
    }
}
