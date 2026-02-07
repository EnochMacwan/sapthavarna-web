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
            <ul class="mega-menu">`;
        (menu.columns || []).forEach(col => {
            (col.links || []).forEach(link => {
                html += `<li><a href="${link.href}">${link.text}</a></li>`;
            });
        });
        html += `</ul></div>`;
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
                        <a href="#about" class="nav-link">About</a>
                        <ul class="mega-menu">
                            <li><a href="#about">Company Overview</a></li>
                            <li><a href="#about">Leadership</a></li>
                            <li><a href="#sustainability">Sustainability</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="nav-item-has-mega">
                        <a href="#capabilities" class="nav-link">Capabilities</a>
                        <ul class="mega-menu">
                            <li><a href="#marine">Marine & Coastal</a></li>
                            <li><a href="#transport">Transport</a></li>
                            <li><a href="#energy">Energy</a></li>
                            <li><a href="#systems">Construction Systems</a></li>
                        </ul>
                    </div>
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

    footer: () => {
        // Get shared content for social links and newsletter
        let shared = {};
        try {
            const saved = localStorage.getItem('siteContent');
            const content = saved ? JSON.parse(saved) : null;
            shared = content?.shared || {};
        } catch (e) { /* use defaults */ }

        return `
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
                <div class="social-links">
                    <a href="${shared.socialLinks?.linkedin || '#'}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${shared.socialLinks?.twitter || '#'}" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="${shared.socialLinks?.youtube || '#'}" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
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
                    <li><a href="#careers" class="nav-link">Careers</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Offices</h5>
                <ul class="footer-links offices-footer">
                    <li><strong>India</strong> · Vadodara, Gujarat</li>
                    <li><strong>Mauritius</strong> · Moka</li>
                </ul>
                ${shared.phone ? `<p style="margin-top:12px;font-size:0.9rem;"><i class="fas fa-phone" style="margin-right:6px;color:var(--accent-marine);"></i>${shared.phone}</p>` : ''}
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} SapthaVarnah Geo Technologies. All rights reserved.</p>
            <div class="legal-links">
                <a href="${BASE_PATH}/admin.html" class="admin-link">Admin</a>
            </div>
        </div>
    </footer>
    `;
    }
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
