// Shared UI Components - Header with Megamenu & Footer

// Base path for GitHub Pages
const BASE_PATH = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
const getImagePath = (img) => `${BASE_PATH}/${img}`;

// Build mega menu HTML from NAV_DATA if available
function buildMegaMenu() {
    const navData = window.NAV_DATA;
    if (!navData) return null;

    let html = '';

    (navData.megaMenus || []).forEach(menu => {
        html += `<div class="nav-item-has-mega">
            <a href="${menu.href}" class="nav-link">${menu.label}</a>
            <div class="mega-menu">`;

        (menu.columns || []).forEach(col => {
            html += `<div class="mega-col"><h5>${col.heading}</h5>`;
            if (col.type === 'text') {
                html += `<p class="mega-desc">${col.text}</p>`;
            } else {
                html += `<ul class="mega-links">`;
                (col.links || []).forEach(link => {
                    html += `<li><a href="${link.href}">${link.text}</a></li>`;
                });
                html += `</ul>`;
            }
            html += `</div>`;
        });

        html += `</div></div>`;
    });

    (navData.standaloneLinks || []).forEach(link => {
        html += `<a href="${link.href}" class="nav-link">${link.label}</a>`;
    });

    return html;
}

export const components = {
    header: () => {
        const dynamicNav = buildMegaMenu();
        const navContent = dynamicNav || `
                    <div class="nav-item-has-mega">
                        <a href="#about" class="nav-link">Company</a>
                        <div class="mega-menu">
                            <div class="mega-col">
                                <h5>About SVGT</h5>
                                <ul class="mega-links">
                                    <li><a href="#about">Company Overview</a></li>
                                    <li><a href="#about">Leadership Team</a></li>
                                    <li><a href="#careers">Careers & Culture</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Sustainability</h5>
                                <ul class="mega-links">
                                    <li><a href="#sustainability">Our Approach</a></li>
                                    <li><a href="#sustainability">Key Pillars</a></li>
                                    <li><a href="#sustainability">Practices</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Connect</h5>
                                <ul class="mega-links">
                                    <li><a href="#contact">Global Offices</a></li>
                                    <li><a href="#contact-details">Project Enquiry</a></li>
                                    <li><a href="#contact-media">Media Relations</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Presence</h5>
                                <p class="mega-desc">Mauritius \u00b7 India \u00b7 Serving Africa, Gulf & beyond</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item-has-mega">
                        <a href="#capabilities" class="nav-link">Capabilities</a>
                        <div class="mega-menu">
                            <div class="mega-col">
                                <h5>Marine & Coastal</h5>
                                <ul class="mega-links">
                                    <li><a href="#marine">Overview</a></li>
                                    <li><a href="#marine-services">Services</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Transport</h5>
                                <ul class="mega-links">
                                    <li><a href="#transport">Overview</a></li>
                                    <li><a href="#transport-services">Services</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Energy</h5>
                                <ul class="mega-links">
                                    <li><a href="#energy">Overview</a></li>
                                    <li><a href="#energy-services">Services</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Construction Systems</h5>
                                <ul class="mega-links">
                                    <li><a href="#systems">Precast & GFRG</a></li>
                                    <li><a href="#systems">Technologies</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a href="#sustainability" class="nav-link">Sustainability</a>
                    <a href="#careers" class="nav-link">Careers</a>
                    <a href="#contact" class="nav-link">Contact</a>`;

        return `
    <nav class="pill-nav">
        <div class="nav-container">
            <a href="#" class="logo nav-link" aria-label="SapthaVarnah Home">
                <div class="logo-crop">
                    <img src="${getImagePath('logo-master.png')}" alt="SapthaVarnah Logo" class="logo-img-master">
                </div>
                <span class="logo-text">SapthaVarnah</span>
            </a>
            <div class="nav-links-wrapper">
                <div class="nav-links">
                    ${navContent}
                </div>
            </div>
        </div>
    </nav>
    `;
    },

    footer: () => `
    <footer class="main-footer">
        <div class="footer-grid">
            <div class="footer-col brand-col">
                <a href="#" class="logo nav-link mb-4">
                    <div class="logo-crop">
                        <img src="${getImagePath('logo-master.png')}" alt="SapthaVarnah Logo" class="logo-img-master">
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
                    <li><a href="#marine" class="nav-link">Marine & Coastal</a></li>
                    <li><a href="#transport" class="nav-link">Transport</a></li>
                    <li><a href="#energy" class="nav-link">Energy</a></li>
                    <li><a href="#systems" class="nav-link">Construction Systems</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Company</h5>
                <ul class="footer-links">
                    <li><a href="#about" class="nav-link">About SVGT</a></li>
                    <li><a href="#about" class="nav-link">Leadership</a></li>
                    <li><a href="#sustainability" class="nav-link">Sustainability</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Offices</h5>
                <ul class="footer-links offices-footer">
                    <li><strong>Mauritius</strong> \u00b7 Port Louis</li>
                    <li><strong>India</strong> \u00b7 Chennai</li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} SapthaVarnah Geo Technologies. All rights reserved.</p>
            <div class="legal-links">
                <a href="${BASE_PATH}/admin.html" class="admin-link">Admin</a>
            </div>
        </div>
    </footer>
    `
};

// Initialize components on DOM load
export function initComponents() {
    let headerContainer = document.getElementById('header-mount');
    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'header-mount';
        document.body.insertBefore(headerContainer, document.body.firstChild);
    }
    headerContainer.innerHTML = components.header();

    let footerContainer = document.getElementById('footer-mount');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer-mount';
        document.body.appendChild(footerContainer);
    }
    footerContainer.innerHTML = components.footer();

    highlightActiveNav();
}

// Highlight current page in navigation
export function highlightActiveNav() {
    const currentHash = window.location.hash.replace('#', '').split('?')[0];
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkHash = href.startsWith('#') ? href.substring(1) : '';
        if (currentHash === linkHash || (currentHash === '' && linkHash === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
