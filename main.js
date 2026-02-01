// Initialize GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Register scroll trigger if needed
    // gsap.registerPlugin(ScrollTrigger);

    // Initial load animation - Subtle & Composed
    const tl = gsap.timeline();

    tl.from('nav', {
        y: -10,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    })
    .from('.hero-content h1', {
        y: 10,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, "-=0.4")
    .from('.hero-content p', {
        y: 10,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, "-=0.4")
    .from('.hero-content .cta-button', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    }, "-=0.2");

    // Simple Intersection Observer for scroll reveal
    const observerOptions = {
        threshold: 0.05
    };

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

    // Apply subtle reveal to all cards and major headings
    document.querySelectorAll('.nm-card, h2, #closing h2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        revealObserver.observe(el);
    });
});
