import { pages } from './pages.js';

class Router {
    constructor(mountPoint) {
        this.mountPoint = mountPoint;
        
        // Static routes
        this.routes = {
            '/': pages.home,
            '/index.html': pages.home,
            '/about': pages.about,
            '/capabilities': pages.capabilities,
            '/marine': pages.marine,
            '/transport': pages.transport,
            '/energy': pages.energy,
            '/systems': pages.systems,
            '/sustainability': pages.sustainability,
            '/contact': pages.contact,
            '/careers': pages.careers
        };

        // Dynamic routes (query parameter based)
        this.dynamicRoutes = {
            '/project': pages.projectDetail,
            '/service': pages.serviceDetail,
            '/team': pages.teamDetail
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
                this.navigate(url.pathname + url.search + url.hash);
            }
        }
    }

    navigate(fullPath) {
        window.history.pushState({}, '', fullPath);
        this.handleRoute();
    }

    getQueryParams() {
        const params = {};
        const search = window.location.search.substring(1);
        if (search) {
            search.split('&').forEach(pair => {
                const [key, value] = pair.split('=');
                params[decodeURIComponent(key)] = decodeURIComponent(value || '');
            });
        }
        return params;
    }

    async handleRoute() {
        let path = window.location.pathname;
        if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
        
        const queryParams = this.getQueryParams();
        let renderer;
        
        // Check dynamic routes first (with query params)
        const dynamicKey = Object.keys(this.dynamicRoutes).find(key => path.endsWith(key));
        if (dynamicKey && queryParams.id) {
            renderer = () => this.dynamicRoutes[dynamicKey](queryParams.id, queryParams);
        } else {
            // Static routes
            let routeKey = Object.keys(this.routes).find(key => path.endsWith(key));
            if (path === '/' || path === '') routeKey = '/';
            renderer = this.routes[routeKey] || pages.home;
        }
        
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
        window.dispatchEvent(new CustomEvent('routeChange', { detail: { path, queryParams } }));
    }
}

export default Router;
