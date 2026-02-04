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
        // Content will be re-read on next page render
        window.location.reload();
    }
});

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
                    <p class="mb-4">
                        ${content.home.about.desc1}
                    </p>
                    <p class="text-secondary">
                        ${content.home.about.desc2}
                    </p>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="materials.png" alt="Close-up of concrete and steel materials" class="brand-img">
                </div>
            </div>
        </section>

        <section id="capabilities">
            <h2 class="mb-6">Core Capabilities</h2>
            <div class="grid-container">
                <div class="nm-card cap-card">
                    <div class="icon-blob"></div>
                    <h3>Marine & Coastal Infrastructure</h3>
                    <p>Ports, berths, breakwaters, coastal protection</p>
                </div>
                <div class="nm-card cap-card">
                    <div class="icon-blob"></div>
                    <h3>Transport Infrastructure</h3>
                    <p>Aprons, bridges, logistics corridors, runways</p>
                </div>
                <div class="nm-card cap-card">
                    <div class="icon-blob"></div>
                    <h3>Energy Infrastructure</h3>
                    <p>Renewables, substations, coastal energy assets</p>
                </div>
                <div class="nm-card cap-card featured-cap">
                    <div class="icon-blob"></div>
                    <div class="cap-text">
                        <h3>Modern Precast Construction</h3>
                        <p>Industrialised, high-precision structural systems</p>
                    </div>
                    <img src="precast.png" alt="Orderly precast yard" class="brand-img">
                </div>
                <div class="nm-card cap-card">
                    <div class="icon-blob"></div>
                    <h3>GFRG Construction Systems</h3>
                    <p>Rapid, sustainable, lightweight building solutions</p>
                </div>
            </div>
        </section>

        <section id="geography">
            <div class="nm-card featured-cap">
                <div class="cap-text">
                    <h4 class="text-secondary mb-4">Geographic Focus</h4>
                    <h2>Africa | India | Gulf Region</h2>
                    <p class="mt-4 text-secondary">
                        Experience across diverse geologies, climates, and regulatory environments.
                    </p>
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
            <h4 class="text-secondary mb-4">${content.about.philosophy.label}</h4>
            <h1>${content.about.philosophy.title.replace("Earth", "<span class='accent-page'>Earth</span>")}</h1>
        </section>

        <section id="philosophy-content" class="philosophy-section">
            <div class="about-grid">
                <div class="nm-card">
                    <p class="mb-4">
                        ${content.about.philosophy.desc1}
                    </p>
                    <p class="text-secondary">
                        ${content.about.philosophy.desc2}
                    </p>
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
                <div class="grid-container mt-4 approach-grid">
                    <div class="approach-text">
                        <p class="mb-4">
                            ${content.about.approach.desc1}
                        </p>
                        <p class="text-secondary">
                            ${content.about.approach.desc2}
                        </p>
                    </div>
                    <div class="nm-inset">
                        <img src="survey.png" alt="Engineering survey drone and instruments" class="brand-img">
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership">
            <h2 class="mb-6">${content.about.leadership.title}</h2>
            <div class="grid-container">
                <div class="nm-card">
                    <h3>${content.about.leadership.card1Title}</h3>
                    <p class="text-secondary mt-4">${content.about.leadership.card1Desc}</p>
                </div>
                <div class="nm-card">
                    <h3>${content.about.leadership.card2Title}</h3>
                    <p class="text-secondary mt-4">${content.about.leadership.card2Desc}</p>
                </div>
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
                            
                            Cap --> Marine[Marine & Coastal]
                            Cap --> Trans[Transport]
                            Cap --> Ener[Energy]
                            Cap --> Sys[Precast & GFRG]
                            
                            Sust --> Flow[Lifecycle Flowchart]
                            
                            style Home fill:#fbfaf8,stroke:#9C4221,stroke-width:2px
                            style About fill:#fbfaf8,stroke:#9C4221,stroke-width:2px
                            style Cap fill:#fbfaf8,stroke:#9C4221,stroke-width:2px
                            style Sust fill:#fbfaf8,stroke:#9C4221,stroke-width:2px
                            style Cont fill:#fbfaf8,stroke:#9C4221,stroke-width:2px
                    </div>
                </div>
            </div>
        </section>
    `;
    },

    capabilities: () => {
        const content = getContent();
        return `
        <section id="cap-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${content.capabilities.hero.label}</h4>
            <h1>Integrated <span class="accent-page">Engineering</span> Solutions</h1>
        </section>

        <section id="marine">
            <div class="featured-cap nm-card">
                <div class="cap-info">
                    <h4 class="text-secondary mb-4">${content.capabilities.marine.label}</h4>
                    <h2>${content.capabilities.marine.title}</h2>
                    <p class="mt-4 mb-6">${content.capabilities.marine.desc}</p>
                    <div class="marine-list-container">
                        <ul class="marine-list">
                            <li>&bull; Ports & Harbours</li>
                            <li>&bull; Breakwaters & Revetments</li>
                            <li>&bull; Coastal Protection</li>
                            <li>&bull; Marine Foundations</li>
                            <li>&bull; Dredging Support</li>
                            <li>&bull; Climate-Adaptive Solutions</li>
                        </ul>
                    </div>
                </div>
                <div class="cap-visual">
                    <div class="nm-inset">
                        <img src="marine.png" alt="Marine infrastructure aerial port" class="brand-img">
                    </div>
                </div>
            </div>
        </section>

        <section id="transport">
            <div class="featured-cap nm-card">
                <div class="cap-visual order-left">
                    <div class="nm-inset">
                        <img src="transport.png" alt="Transport infrastructure aerial bridge" class="brand-img">
                    </div>
                </div>
                <div class="cap-info order-right">
                    <h4 class="text-secondary mb-4">${content.capabilities.transport.label}</h4>
                    <h2>${content.capabilities.transport.title}</h2>
                    <p class="mt-4 mb-6">${content.capabilities.transport.desc}</p>
                    <ul class="clean-list">
                        <li>&bull; Roads & Highways</li>
                        <li>&bull; Bridges & Structures</li>
                        <li>&bull; Logistics Infrastructure</li>
                        <li>&bull; Multimodal Interfaces</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="energy">
            <div class="featured-cap nm-card">
                <div class="cap-info">
                    <h4 class="text-secondary mb-4">${content.capabilities.energy.label}</h4>
                    <h2>${content.capabilities.energy.title}</h2>
                    <p class="mt-4 mb-6">${content.capabilities.energy.desc}</p>
                    <ul class="clean-list">
                        <li>&bull; Renewable Enabling Works</li>
                        <li>&bull; Substations & Power</li>
                        <li>&bull; Coastal Energy Facilities</li>
                        <li>&bull; Balance-of-Plant</li>
                    </ul>
                </div>
                <div class="cap-visual">
                    <div class="nm-inset">
                        <img src="energy.png" alt="Energy infrastructure coastal renewables" class="brand-img">
                    </div>
                </div>
            </div>
        </section>

        <section id="systems">
            <div class="nm-card">
                <h4 class="text-secondary mb-4">${content.capabilities.systems.label}</h4>
                <h2>${content.capabilities.systems.title}</h2>
                <div class="grid-container mt-6 systems-grid">
                    <div>
                        <h3>${content.capabilities.systems.precastTitle}</h3>
                        <p class="mt-4 text-secondary">${content.capabilities.systems.precastDesc}</p>
                        <div class="nm-inset mt-4">
                             <img src="precast.png" alt="Precast yard" class="brand-img">
                        </div>
                    </div>
                    <div>
                        <h3>${content.capabilities.systems.gfrgTitle}</h3>
                        <p class="mt-4 text-secondary">${content.capabilities.systems.gfrgDesc}</p>
                        <div class="nm-inset mt-4">
                            <img src="gfrg.png" alt="GFRG material surface" class="brand-img">
                        </div>
                    </div>
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
                <p class="mt-4 esg-p">
                    ${content.sustainability.logic.desc}
                </p>
            </div>
        </section>

        <section id="logic-grid">
            <div class="grid-container structural-logic-grid">
                <div class="nm-card">
                    <h3>Climate Adaptation</h3>
                    <p class="mt-4 text-secondary">Designing coastal and inland infrastructure specifically for long-term climate resilience and dynamic environmental conditions.</p>
                    <img src="resilience.png" alt="Climate-resilient coastal protection structure" class="brand-img mt-4">
                </div>
                <div class="nm-card">
                    <h3>Resource Efficiency</h3>
                    <p class="mt-4 text-secondary">Utilising industrialised construction methods to reduce material consumption and minimize the project carbon footprint.</p>
                </div>
                <div class="nm-card">
                    <h3>Asset Performance</h3>
                    <p class="mt-4 text-secondary">Ensuring every layer of infrastructure is built for long-term maintainability and lifecycle optimization.</p>
                </div>
            </div>
        </section>

        <section id="initiatives">
            <div class="about-grid">
                <div class="nm-card img-card nm-inset">
                    <img src="gfrg.png" alt="GFRG structural material closeup" class="brand-img">
                </div>
                <div class="nm-card">
                    <ul class="initiative-list">
                        <li>
                            <strong>${content.sustainability.initiatives.item1Title}</strong>
                            <p class="text-secondary">${content.sustainability.initiatives.item1Desc}</p>
                        </li>
                        <li>
                            <strong>${content.sustainability.initiatives.item2Title}</strong>
                            <p class="text-secondary">${content.sustainability.initiatives.item2Desc}</p>
                        </li>
                        <li>
                            <strong>${content.sustainability.initiatives.item3Title}</strong>
                            <p class="text-secondary">${content.sustainability.initiatives.item3Desc}</p>
                        </li>
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
                            
                            style A fill:#fbfaf8,stroke:#003366,stroke-width:2px
                            style B fill:#fbfaf8,stroke:#003366,stroke-width:2px
                            style C fill:#fbfaf8,stroke:#003366,stroke-width:2px
                            style D fill:#fbfaf8,stroke:#003366,stroke-width:2px
                            style E fill:#fbfaf8,stroke:#003366,stroke-width:2px
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
                    <h2>We welcome discussions on <span class="accent-page">Infrastructure Challenges</span> across our served regions.</h2>
                    <div class="contact-links-row mt-6">
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">Email</h4>
                            <a href="mailto:info@svgeotech.com" class="contact-link-item">info@svgeotech.com</a>
                        </div>
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">LinkedIn</h4>
                            <a href="#" class="contact-link-item">SapthaVarnah Geo Technologies</a>
                        </div>
                    </div>
                </div>
                <div class="nm-card contact-regions-card">
                    <h4 class="text-secondary mb-4">${content.contact.details.regionsLabel}</h4>
                    <p class="text-secondary mb-4">${content.contact.details.regionsDesc}</p>
                    <div class="regions-image-wrapper nm-inset">
                        <img src="regions.png" alt="Global regions focusing on Africa, India, and the Gulf" class="brand-img">
                    </div>
                    <ul class="regions-tags mt-4">
                        <li>Africa</li>
                        <li>India</li>
                        <li>Gulf Region</li>
                    </ul>
                </div>
            </div>
        </section>
    `;
    }

};
