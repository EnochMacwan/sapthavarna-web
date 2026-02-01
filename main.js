import Router from './router.js';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

// Initialize Mermaid
mermaid.initialize({ 
    startOnLoad: false, // We will manually trigger it
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

    document.querySelectorAll('.nm-card, h2, #closing h2, .subpage-hero h1').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        revealObserver.observe(el);
    });

    // Re-run Mermaid for dynamic content
    const mermaidDivs = document.querySelectorAll('.mermaid');
    if (mermaidDivs.length > 0) {
        mermaid.run();
    }

    // Megamenu Links Highlight (Active State Update)
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Global Nav Setup (Once per session)
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

    // Initial Nav Load Animation
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
    const router = new Router(appMount);

    initGlobalNav();

    // Listen for route changes to re-init interactions
    window.addEventListener('routeChange', () => {
        initPageInteractions();
    });

    // Trigger for first load
    initPageInteractions();
});
