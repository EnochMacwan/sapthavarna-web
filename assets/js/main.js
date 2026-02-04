import Router from './router.js';
import { SpectrumAnimation } from './spectrum.js';
import { initComponents, highlightActiveNav } from './components.js';
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
    // Destroy previous animation if it exists
    if (currentAnimation) {
        currentAnimation.destroy();
        currentAnimation = null;
    }

    // Init Spectrum Animation if canvas exists
    const canvas = document.getElementById('spectrum-canvas');
    if (canvas) {
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
// Animation Sampling Global Logic
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
    
    console.log('EOI Submitted:', data);
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
    
    // Create hamburger button
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    
    // Create mobile nav overlay
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
        <a href="#" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#capabilities" class="nav-link">Capabilities</a>
        <a href="#marine" class="nav-link">Marine</a>
        <a href="#transport" class="nav-link">Transport</a>
        <a href="#energy" class="nav-link">Energy</a>
        <a href="#systems" class="nav-link">Systems</a>
        <a href="#sustainability" class="nav-link">Sustainability</a>
        <a href="#careers" class="nav-link">Careers</a>
        <a href="#contact" class="nav-link">Contact</a>
    `;
    
    // Insert elements
    const navContainer = nav.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(hamburger);
    }
    document.body.appendChild(mobileNav);
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
};

// Dark Mode Toggle
const initDarkMode = () => {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(btn);
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
};

// Animated Stats Counter
const initStatsCounter = () => {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;
    
    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            
            el.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
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
    initDarkMode();
    initStatsCounter();
    initFormValidation();
});

// Reinitialize on route change
window.addEventListener('routeChange', () => {
    initStatsCounter();
    initFormValidation();
});
