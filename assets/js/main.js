import Router from './router.js';
import { SpectrumAnimation } from './spectrum.js';
import { initComponents, highlightActiveNav } from './components.js';

let currentAnimation = null;
let currentObserver = null;

// Animation & Interaction Logic
const initPageInteractions = () => {
    // Destroy previous animation if it exists
    if (currentAnimation) {
        currentAnimation.destroy();
        currentAnimation = null;
    }

    // Disconnect previous observer
    if (currentObserver) {
        currentObserver.disconnect();
        currentObserver = null;
    }

    // Init Spectrum Animation if canvas exists
    const canvas = document.getElementById('spectrum-canvas');
    if (canvas) {
        currentAnimation = new SpectrumAnimation('spectrum-canvas');
    }

    // Reveal Observer for cards and headings
    const observerOptions = { threshold: 0.05, rootMargin: '0px 0px -30px 0px' };
    currentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    delay: entry.target.dataset.delay || 0
                });
                currentObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate — only cards and headings
    const revealElements = document.querySelectorAll('.nm-card, .grid-card-wrapper');

    revealElements.forEach((el) => {
        gsap.set(el, { opacity: 0, y: 15 });
        // Add stagger delay for cards in the same grid
        const parent = el.parentElement;
        if (parent && (parent.classList.contains('cards-grid') || parent.classList.contains('careers-grid') || parent.classList.contains('benefits-grid') || parent.classList.contains('team-grid'))) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(el);
            el.dataset.delay = (index * 0.06).toFixed(2);
        }
        currentObserver.observe(el);
    });

    // Update nav highlighting
    highlightActiveNav();
};

// Global Nav Setup - Megamenu animations
const initGlobalNav = () => {
    const megaTriggers = document.querySelectorAll('.nav-item-has-mega');
    megaTriggers.forEach(trigger => {
        const links = trigger.querySelectorAll('.mega-links li');
        trigger.addEventListener('mouseenter', () => {
            gsap.fromTo(links,
                { opacity: 0, x: -5 },
                { opacity: 1, x: 0, stagger: 0.05, duration: 0.4, ease: 'power2.out', delay: 0.1 }
            );
        });
    });

    gsap.from('nav', {
        y: -10,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
};

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared header & footer components first
    initComponents();

    // Initialize router for dynamic page content
    const appMount = document.getElementById('app');
    new Router(appMount);

    // Setup megamenu animations
    initGlobalNav();

    // Handle route changes
    window.addEventListener('routeChange', () => {
        initPageInteractions();
    });

    // Initial page setup
    initPageInteractions();
});

// EOI Form Handler (Careers Page)
window.handleEOISubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add timestamp
    data.submittedAt = new Date().toISOString();

    // Save to localStorage (for demo - in production, send to backend)
    const submissions = JSON.parse(localStorage.getItem('eoi_submissions') || '[]');
    submissions.push(data);
    localStorage.setItem('eoi_submissions', JSON.stringify(submissions));

    // Hide form, show success
    form.style.display = 'none';
    document.getElementById('eoi-success').style.display = 'block';

    // Scroll to success message
    document.getElementById('eoi-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// ========================================
// UI/UX ENHANCEMENTS
// ========================================

// Back-to-Top Button
const initBackToTop = () => {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
};

// Mobile Hamburger Menu
const initHamburgerMenu = () => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.setAttribute('aria-label', 'Toggle menu');

    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
        <a href="#" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#capabilities" class="nav-link">Capabilities</a>
        <a href="#marine" class="nav-link">Marine & Coastal</a>
        <a href="#transport" class="nav-link">Transport</a>
        <a href="#energy" class="nav-link">Energy</a>
        <a href="#systems" class="nav-link">Construction Systems</a>
        <a href="#sustainability" class="nav-link">Sustainability</a>
        <a href="#careers" class="nav-link">Careers</a>
        <a href="#contact" class="nav-link">Contact</a>
    `;

    const navContainer = nav.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(hamburger);
    }
    document.body.appendChild(mobileNav);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
};

// Form Validation
const initFormValidation = () => {
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('blur', () => {
            if (input.required && !input.value.trim()) {
                input.classList.add('invalid');
                input.classList.remove('valid');
            } else if (input.type === 'email' && input.value) {
                const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
                input.classList.toggle('valid', emailValid);
                input.classList.toggle('invalid', !emailValid);
            } else if (input.value.trim()) {
                input.classList.add('valid');
                input.classList.remove('invalid');
            }
        });

        input.addEventListener('input', () => {
            input.classList.remove('invalid');
        });
    });
};

// Initialize all UI enhancements
document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
    initHamburgerMenu();
    initFormValidation();
});

// Reinitialize on route change
window.addEventListener('routeChange', () => {
    initFormValidation();
});
