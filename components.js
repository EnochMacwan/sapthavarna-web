// Shared UI Components - Header with Megamenu & Footer

export const components = {
    header: () => `
    <nav class="pill-nav">
        <div class="nav-container">
            <a href="/" class="logo nav-link" aria-label="SapthaVarnah Home">
                <div class="logo-crop">
                    <img src="/logo-master.png" alt="SapthaVarnah Logo" class="logo-img-master">
                </div>
                <span class="logo-text">SapthaVarnah</span>
            </a>
            <div class="nav-links-wrapper">
                <div class="nav-links">
                    <div class="nav-item-has-mega">
                        <a href="/about" class="nav-link">Company</a>
                        <div class="mega-menu">
                            <div class="mega-col">
                                <h5>The Collective</h5>
                                <ul class="mega-links">
                                    <li><a href="/about">About SapthaVarnah</a></li>
                                    <li><a href="/about#leadership">Leadership Team</a></li>
                                    <li><a href="/about#careers">Careers & Culture</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Impact</h5>
                                <ul class="mega-links">
                                    <li><a href="/sustainability">Sustainability Plan</a></li>
                                    <li><a href="/sustainability#climate">Climate Resilience</a></li>
                                    <li><a href="/sustainability#ethics">Ethics & Governance</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Connect</h5>
                                <ul class="mega-links">
                                    <li><a href="/contact">Global Offices</a></li>
                                    <li><a href="/contact#support">Project Support</a></li>
                                    <li><a href="/contact#media">Media Relations</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Global</h5>
                                <p class="mega-desc">Engineering the full spectrum across Africa, India, and the Gulf.</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item-has-mega">
                        <a href="/capabilities" class="nav-link">Capabilities</a>
                        <div class="mega-menu">
                            <div class="mega-col">
                                <h5>Marine & Coastal</h5>
                                <ul class="mega-links">
                                    <li><a href="/capabilities#marine">Infrastructure</a></li>
                                    <li><a href="/capabilities#coastal">Coastal Protection</a></li>
                                    <li><a href="/capabilities#dredging">Dredging & Reclamation</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Transport</h5>
                                <ul class="mega-links">
                                    <li><a href="/capabilities#rail">Rail & Metro</a></li>
                                    <li><a href="/capabilities#roads">Highways & Bridges</a></li>
                                    <li><a href="/capabilities#ports">Port Terminals</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Energy</h5>
                                <ul class="mega-links">
                                    <li><a href="/capabilities#oilgas">Oil & Gas</a></li>
                                    <li><a href="/capabilities#renewable">Renewables</a></li>
                                    <li><a href="/capabilities#power">Power Systems</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Advanced</h5>
                                <ul class="mega-links">
                                    <li><a href="/capabilities#technical">Technical Surveys</a></li>
                                    <li><a href="/capabilities#digital">Digital Twin</a></li>
                                    <li><a href="/capabilities#consultancy">Global Consultancy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="/sustainability" class="nav-link">Sustainability</a>
                    <a href="/contact" class="nav-link">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    `,

    footer: () => `
    <footer class="main-footer">
        <div class="footer-grid">
            <div class="footer-col brand-col">
                <a href="/" class="logo nav-link mb-4">
                    <div class="logo-crop">
                        <img src="/logo-master.png" alt="SapthaVarnah Logo" class="logo-img-master">
                    </div>
                    <span class="footer-brand-name">SapthaVarnah</span>
                </a>
                <p class="text-secondary footer-tagline">
                    Engineering the full spectrum of the Earth across Marine, Transport, and Energy sectors.
                </p>
            </div>
            
            <div class="footer-col">
                <h5>Capabilities</h5>
                <ul class="footer-links">
                    <li><a href="/capabilities#marine" class="nav-link">Marine & Coastal</a></li>
                    <li><a href="/capabilities#transport" class="nav-link">Transport</a></li>
                    <li><a href="/capabilities#energy" class="nav-link">Energy</a></li>
                    <li><a href="/capabilities#systems" class="nav-link">Advanced Systems</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Company</h5>
                <ul class="footer-links">
                    <li><a href="/about" class="nav-link">About Us</a></li>
                    <li><a href="/sustainability" class="nav-link">Sustainability</a></li>
                    <li><a href="/about#leadership" class="nav-link">Leadership</a></li>
                    <li><a href="/contact" class="nav-link">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Presence</h5>
                <ul class="presence-labels">
                    <li class="accent-marine">Africa</li>
                    <li class="accent-energy">India</li>
                    <li class="accent-page">Gulf</li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} SapthaVarnah Geo Technologies. All rights reserved.</p>
            <div class="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="/admin.html" class="admin-link">Admin</a>
            </div>
        </div>
    </footer>

    `
};

// Initialize components on DOM load
export function initComponents() {
    // Create header container if not exists
    let headerContainer = document.getElementById('header-mount');
    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'header-mount';
        document.body.insertBefore(headerContainer, document.body.firstChild);
    }
    headerContainer.innerHTML = components.header();

    // Create footer container if not exists  
    let footerContainer = document.getElementById('footer-mount');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer-mount';
        document.body.appendChild(footerContainer);
    }
    footerContainer.innerHTML = components.footer();

    // Highlight active nav link
    highlightActiveNav();
}

// Highlight current page in navigation
export function highlightActiveNav() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
