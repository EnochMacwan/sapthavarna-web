import { pages } from './pages.js';

class Router {
    constructor(mountPoint) {
        this.mountPoint = mountPoint;
        this.routes = {
            '/': pages.home,
            '/index.html': pages.home,
            '/about': pages.about,
            '/capabilities': pages.capabilities,
            '/sustainability': pages.sustainability,
            '/contact': pages.contact
        };

        window.addEventListener('popstate', () => this.handleRoute());
        document.addEventListener('click', (e) => this.interceptClick(e));
        
        // Initial load
        this.handleRoute();
    }

    interceptClick(e) {
        const link = e.target.closest('a');
        if (link && link.classList.contains('nav-link')) {
            const url = new URL(link.href);
            
            // Only SPA handle if it's the same origin
            if (url.origin === window.location.origin) {
                e.preventDefault();
                this.navigate(url.pathname + url.hash);
            }
        }
    }

    navigate(pathWithHash) {
        window.history.pushState({}, '', pathWithHash);
        this.handleRoute();
    }

    async handleRoute() {
        const path = window.location.pathname;
        const renderer = this.routes[path] || pages.home;
        
        // Dynamic Transition Effect
        const app = this.mountPoint;
        
        // Trigger exit animation if GSAP is available
        if (window.gsap) {
            await window.gsap.to(app, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.in' });
        }

        app.innerHTML = renderer();
        
        // Scroll to top or specific hash
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }

        // Trigger entry animation
        if (window.gsap) {
            window.gsap.fromTo(app, 
                { opacity: 0, y: 10 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
        }

        // Dispatch an event to notify that content has changed
        window.dispatchEvent(new CustomEvent('routeChange', { detail: { path } }));
    }
}

export default Router;
