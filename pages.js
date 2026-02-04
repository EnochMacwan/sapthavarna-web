import { defaultContent } from './web/content.js';

// Helper to get current content (checks LocalStorage first, then falls back to default)
const getContent = () => {
    try {
        const saved = localStorage.getItem('siteContent');
        return saved ? JSON.parse(saved) : defaultContent;
    } catch (e) {
        return defaultContent;
    }
};

// Listen for updates from Admin Panel (live preview across tabs)
window.addEventListener('storage', (e) => {
    if (e.key === 'siteContent') {
        window.location.reload();
    }
});

// Render capability cards dynamically
const renderCapCards = (caps) => {
    return caps.map(cap => {
        if (cap.featured) {
            return `
                <div class="nm-card cap-card featured-cap">
                    <div class="icon-blob"></div>
                    <div class="cap-text">
                        <h3>${cap.title}</h3>
                        <p>${cap.desc}</p>
                    </div>
                    ${cap.image ? `<img src="${cap.image}" alt="${cap.title}" class="brand-img">` : ''}
                </div>
            `;
        }
        return `
            <div class="nm-card cap-card">
                <div class="icon-blob"></div>
                <h3>${cap.title}</h3>
                <p>${cap.desc}</p>
            </div>
        `;
    }).join('');
};

// Render uniform cards grid
const renderCards = (cards, extraClass = '') => {
    return cards.map(card => `
        <div class="nm-card uniform-card ${extraClass}">
            ${card.image ? `<div class="card-image nm-inset"><img src="${card.image}" alt="${card.title}" class="brand-img"></div>` : ''}
            <h3>${card.title}</h3>
            <p class="text-secondary mt-4">${card.desc}</p>
        </div>
    `).join('');
};

// Render sector with items list
const renderSector = (sector, reverse = false) => {
    const itemsList = sector.items ? sector.items.map(item => `<li>&bull; ${item}</li>`).join('') : '';
    return `
        <section id="${sector.id}">
            <div class="featured-cap nm-card ${reverse ? 'reverse-layout' : ''}">
                <div class="cap-info ${reverse ? 'order-right' : ''}">
                    <h4 class="text-secondary mb-4">${sector.label}</h4>
                    <h2>${sector.title}</h2>
                    <p class="mt-4 mb-6">${sector.desc}</p>
                    ${itemsList ? `<ul class="sector-list">${itemsList}</ul>` : ''}
                </div>
                <div class="cap-visual ${reverse ? 'order-left' : ''}">
                    <div class="nm-inset">
                        <img src="${sector.image}" alt="${sector.title}" class="brand-img">
                    </div>
                </div>
            </div>
        </section>
    `;
};

export const pages = {
    home: () => {
        const content = getContent();
        return `
        <section id="hero" class="hero">
            <canvas id="spectrum-canvas"></canvas>
            <div class="hero-overlay-content">
                <h1 class="hero-title mb-6">${content.home.hero.title.replace("Full Spectrum", "<span class='accent-page'>Full Spectrum</span>")}</h1>
                <p class="hero-subtitle mb-24 text-secondary" style="max-width: 800px; margin-left: auto; margin-right: auto;">
                    ${content.home.hero.subtitle}
                </p>
                <div class="hero-actions">
                    <a href="/capabilities" class="cta-button nav-link">${content.home.hero.ctaMain} &rarr;</a>
                    <button onclick="window.resetBrandBuild()" class="cta-button secondary nm-flat" style="margin-left: 15px; background: transparent; border: 1px solid rgba(156,66,33,0.3); color: var(--accent);">${content.home.hero.ctaSec}</button>
                </div>
            </div>
        </section>

        <section id="about">
            <div class="about-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${content.home.about.title}</h4>
                    <p class="mb-4">${content.home.about.desc1}</p>
                    <p class="text-secondary">${content.home.about.desc2}</p>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="materials.png" alt="Close-up of concrete and steel materials" class="brand-img">
                </div>
            </div>
        </section>

        <section id="capabilities">
            <h2 class="mb-6">Core Capabilities</h2>
            <div class="cards-grid">
                ${renderCapCards(content.home.capabilities)}
            </div>
        </section>

        <section id="geography">
            <div class="nm-card featured-cap">
                <div class="cap-text">
                    <h4 class="text-secondary mb-4">Geographic Focus</h4>
                    <h2>Africa | India | Gulf Region</h2>
                    <p class="mt-4 text-secondary">Experience across diverse geologies, climates, and regulatory environments.</p>
                </div>
                <img src="regions.png" alt="Map focused on core service regions" class="brand-img">
            </div>
        </section>

        <section id="closing" class="section-center">
            <h2 class="mb-6">${content.home.closing.title}</h2>
            <a href="/contact" class="cta-button nav-link">${content.home.closing.cta} &rarr;</a>
        </section>
    `;
    },

    about: () => {
        const content = getContent();
        return `
        <section id="philosophy-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${content.about.hero.label}</h4>
            <h1>${content.about.hero.title.replace("Earth", "<span class='accent-page'>Earth</span>")}</h1>
        </section>

        <section id="philosophy-content" class="philosophy-section">
            <div class="about-grid">
                <div class="nm-card">
                    <p class="mb-4">${content.about.philosophy.desc1}</p>
                    <p class="text-secondary">${content.about.philosophy.desc2}</p>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="materials.png" alt="Engineering materials close-up" class="brand-img">
                </div>
            </div>
        </section>

        <section id="approach">
            <div class="nm-card">
                <h4 class="text-secondary mb-4">${content.about.approach.label}</h4>
                <h2>${content.about.approach.title}</h2>
                <div class="approach-grid mt-4">
                    <div class="approach-text">
                        <p class="mb-4">${content.about.approach.desc1}</p>
                        <p class="text-secondary">${content.about.approach.desc2}</p>
                    </div>
                    <div class="nm-inset">
                        <img src="survey.png" alt="Engineering survey" class="brand-img">
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership">
            <h2 class="mb-6">Leadership & Expertise</h2>
            <div class="cards-grid uniform-grid">
                ${renderCards(content.about.leadershipCards)}
            </div>
        </section>

        <section id="sitemap">
            <div class="nm-card section-center">
                <h4 class="text-secondary mb-4">Digital Presence</h4>
                <h2>Site <span class="accent-page">Architecture</span></h2>
                <div class="flowchart-container nm-inset mt-8">
                    <div class="mermaid">
                        graph TD
                            Home[Home Page] --> About[About: Philosophy & Leadership]
                            Home --> Cap[Capabilities: Sectors & Systems]
                            Home --> Sust[Sustainability: ESG & Lifecycle]
                            Home --> Cont[Contact: Regions & Team]
                    </div>
                </div>
            </div>
        </section>
    `;
    },

    capabilities: () => {
        const content = getContent();
        const sectorsHtml = content.capabilities.sectors.map((sector, i) => 
            renderSector(sector, i % 2 === 1)
        ).join('');
        
        return `
        <section id="cap-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${content.capabilities.hero.label}</h4>
            <h1>Integrated <span class="accent-page">Engineering</span> Solutions</h1>
        </section>

        ${sectorsHtml}

        <section id="systems">
            <div class="nm-card">
                <h4 class="text-secondary mb-4">${content.capabilities.systems.label}</h4>
                <h2>${content.capabilities.systems.title}</h2>
                <div class="cards-grid uniform-grid mt-6">
                    ${renderCards(content.capabilities.systems.cards)}
                </div>
            </div>
        </section>
    `;
    },

    sustainability: () => {
        const content = getContent();
        return `
        <section id="sustain-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${content.sustainability.hero.label}</h4>
            <h1>Responsible <span class="accent-page">Infrastructure</span></h1>
        </section>

        <section id="esg">
            <div class="nm-card">
                <h4 class="text-secondary mb-4">${content.sustainability.logic.label}</h4>
                <h2>Balanced <span class="accent-page">Performance</span></h2>
                <p class="mt-4 esg-p">${content.sustainability.logic.desc}</p>
            </div>
        </section>

        <section id="logic-grid">
            <div class="cards-grid uniform-grid">
                ${renderCards(content.sustainability.focusCards)}
            </div>
        </section>

        <section id="initiatives">
            <div class="about-grid">
                <div class="nm-card img-card nm-inset">
                    <img src="gfrg.png" alt="GFRG structural material" class="brand-img">
                </div>
                <div class="nm-card">
                    <ul class="initiative-list">
                        ${content.sustainability.initiatives.map(item => `
                            <li>
                                <strong>${item.title}</strong>
                                <p class="text-secondary">${item.desc}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </section>

        <section id="process">
            <div class="nm-card section-center">
                <h4 class="text-secondary mb-4">Infrastructure Lifecycle</h4>
                <h2>Integrated <span class="accent-page">Project Flow</span></h2>
                <div class="flowchart-container nm-inset mt-8">
                    <div class="mermaid">
                        graph TD
                            A[Geo-Technical Analysis] --> B[Integrated Engineering]
                            B --> C[Industrialised Precast]
                            C --> D[Resilient Infrastructure]
                            D --> E[Asset Lifecycle Monitoring]
                    </div>
                </div>
            </div>
        </section>
    `;
    },

    contact: () => {
        const content = getContent();
        return `
        <section id="contact-hero" class="subpage-hero contact-hero-bg">
            <h4 class="text-secondary mb-4">${content.contact.hero.label}</h4>
            <h1>Connect with <span class="accent-page">Our Team</span></h1>
        </section>

        <section id="contact-details">
            <div class="contact-grid">
                <div class="nm-card contact-main-card">
                    <h4 class="text-secondary mb-4">${content.contact.details.oppsLabel}</h4>
                    <h2>${content.contact.details.heading.replace("Infrastructure Challenges", "<span class='accent-page'>Infrastructure Challenges</span>")}</h2>
                    <div class="contact-links-row mt-6">
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">Email</h4>
                            <a href="mailto:${content.contact.details.email}" class="contact-link-item">${content.contact.details.email}</a>
                        </div>
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">LinkedIn</h4>
                            <a href="#" class="contact-link-item">${content.contact.details.linkedin}</a>
                        </div>
                    </div>
                </div>
                <div class="nm-card contact-regions-card">
                    <h4 class="text-secondary mb-4">${content.contact.regions.label}</h4>
                    <p class="text-secondary mb-4">${content.contact.regions.desc}</p>
                    <div class="regions-image-wrapper nm-inset">
                        <img src="regions.png" alt="Global regions" class="brand-img">
                    </div>
                    <ul class="regions-tags mt-4">
                        ${content.contact.regions.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </section>
    `;
    }
};
