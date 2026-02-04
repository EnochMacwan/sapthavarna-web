import { pages } from './pages.js';

class Router {
    constructor(mountPoint) {
        this.mountPoint = mountPoint;
        
        // Static routes (hash-based for GitHub Pages compatibility)
        this.routes = {
            '': pages.home,
            '/': pages.home,
            'about': pages.about,
            'capabilities': pages.capabilities,
            'marine': pages.marine,
            'transport': pages.transport,
            'energy': pages.energy,
            'systems': pages.systems,
            'sustainability': pages.sustainability,
            'contact': pages.contact,
            'careers': pages.careers
        };

        // Dynamic routes (query parameter based)
        this.dynamicRoutes = {
            'project': pages.projectDetail,
            'service': pages.serviceDetail,
            'team': pages.teamDetail
        };

        window.addEventListener('hashchange', () => this.handleRoute());
        document.addEventListener('click', (e) => this.interceptClick(e));
        
        // Initial load
        this.handleRoute();
    }

    interceptClick(e) {
        const link = e.target.closest('a');
        if (link && link.classList.contains('nav-link')) {
            const href = link.getAttribute('href');
            
            // Convert path-based links to hash-based
            if (href && href.startsWith('/') && !href.startsWith('//')) {
                e.preventDefault();
                const hashPath = href === '/' ? '' : href.substring(1);
                window.location.hash = hashPath;
            }
        }
    }

    navigate(path) {
        window.location.hash = path;
    }

    getHashPath() {
        // Get hash without the '#' symbol
        let hash = window.location.hash.substring(1);
        // Remove leading slash if present
        if (hash.startsWith('/')) hash = hash.substring(1);
        return hash;
    }

    getQueryParams(hash) {
        const params = {};
        const queryIndex = hash.indexOf('?');
        if (queryIndex > -1) {
            const query = hash.substring(queryIndex + 1);
            query.split('&').forEach(pair => {
                const [key, value] = pair.split('=');
                params[decodeURIComponent(key)] = decodeURIComponent(value || '');
            });
        }
        return params;
    }

    async handleRoute() {
        let hash = this.getHashPath();
        const queryParams = this.getQueryParams(hash);
        
        // Remove query string from path
        const queryIndex = hash.indexOf('?');
        if (queryIndex > -1) {
            hash = hash.substring(0, queryIndex);
        }
        
        let renderer;
        
        // Check dynamic routes first (with query params)
        const dynamicKey = Object.keys(this.dynamicRoutes).find(key => hash.startsWith(key));
        if (dynamicKey && queryParams.id) {
            renderer = () => this.dynamicRoutes[dynamicKey](queryParams.id, queryParams);
        } else {
            // Static routes
            renderer = this.routes[hash] || pages.home;
        }
        
        // Dynamic Transition Effect
        const app = this.mountPoint;
        
        // Trigger exit animation if GSAP is available
        if (window.gsap) {
            await window.gsap.to(app, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.in' });
        }

        app.innerHTML = renderer();
        
        // Scroll to top
        window.scrollTo(0, 0);

        // Trigger entry animation
        if (window.gsap) {
            window.gsap.fromTo(app, 
                { opacity: 0, y: 10 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
        }

        // Dispatch an event to notify that content has changed
        window.dispatchEvent(new CustomEvent('routeChange', { detail: { path: hash, queryParams } }));
    }
}

export default Router;
