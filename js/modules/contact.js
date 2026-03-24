// =========================================
// CONTACT FORM
// =========================================

import { translations } from '../data/projects.js';
import { getCurrentLang } from './lang.js';

export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const lang = getCurrentLang();
        const t = translations[lang];

        // Honeypot check
        const honeypot = form.querySelector('input[name="_hp"]');
        if (honeypot && honeypot.value) {
            showFormStatus('success', t.formSuccess);
            form.reset();
            return;
        }

        const name = form.querySelector('#contact-name')?.value.trim();
        const email = form.querySelector('#contact-email')?.value.trim();
        const message = form.querySelector('#contact-message')?.value.trim();
        const submitBtn = form.querySelector('.form-submit');

        // Validation
        if (!name || !email || !message) return;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showFormStatus('error', 'Neplatný e-mail / Invalid email');
            return;
        }
        if (message.length < 20) {
            showFormStatus('error', 'Zpráva je příliš krátká / Message too short');
            return;
        }

        // Loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '...';
        }

        try {
            // EmailJS — fill in your own serviceId, templateId, publicKey
            // if (typeof emailjs !== 'undefined') {
            //     await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', '#contactForm', 'PUBLIC_KEY');
            // }

            // Fallback: mailto link opens with form data
            const mailtoUrl = `mailto:tomas.hajek@email.cz?subject=Portfolio inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
            window.location.href = mailtoUrl;

            showFormStatus('success', t.formSuccess);
            form.reset();
        } catch (err) {
            showFormStatus('error', t.formError);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = t.formSend;
            }
        }
    });
}

function showFormStatus(type, message) {
    const status = document.getElementById('formStatus');
    if (!status) return;
    status.textContent = message;
    status.className = `form-status ${type}`;

    // Auto-clear
    setTimeout(() => {
        status.textContent = '';
        status.className = 'form-status';
    }, 5000);
}

export function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
