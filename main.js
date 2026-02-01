import Router from './router.js';
import { SpectrumAnimation } from './spectrum.js';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

let currentAnimation = null;

// Initialize Mermaid
mermaid.initialize({ 
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        primaryColor: '#f6f5f2',
        primaryTextColor: '#1c1c1c',
        primaryBorderColor: 'rgba(0,0,0,0.1)',
        lineColor: '#C69061',
        secondaryColor: '#f6f5f2',
        tertiaryColor: '#f6f5f2'
    }
});

// Animation & Interaction Logic
const initPageInteractions = () => {
    const currentPath = window.location.pathname;

    // Destroy previous animation if it exists
    if (currentAnimation) {
        currentAnimation.destroy();
        currentAnimation = null;
    }

    // Init Spectrum Animation if on Home
    if (currentPath === '/' || currentPath === '/index.html') {
        currentAnimation = new SpectrumAnimation('spectrum-canvas');
    }

    // Reveal Observer for cards and headings
    const observerOptions = { threshold: 0.05 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.nm-card, h2, #closing h2, .subpage-hero h1, .hero-content h1').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        revealObserver.observe(el);
    });

    // Re-run Mermaid for dynamic content
    const mermaidDivs = document.querySelectorAll('.mermaid');
    if (mermaidDivs.length > 0) {
        mermaid.run();
    }

    // Nav Links Highlight
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Global Nav Setup
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
    const appMount = document.getElementById('app');
    new Router(appMount);

    initGlobalNav();

    window.addEventListener('routeChange', () => {
        initPageInteractions();
    });

    initPageInteractions();
});// Animation Sampling Global Logic
window.setAnimationMode = (mode) => {
    if (currentAnimation && typeof currentAnimation.setMode === 'function') {
        currentAnimation.setMode(mode);
        
        // Update UI
        document.querySelectorAll('.sample-btn').forEach(btn => {
            const btnMode = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
            if (btnMode === mode) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }
};
