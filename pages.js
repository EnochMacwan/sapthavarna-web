import { defaultContent } from './web/content.js';

// Helper to get current content
const getContent = () => {
    try {
        const saved = localStorage.getItem('siteContent');
        return saved ? JSON.parse(saved) : defaultContent;
    } catch (e) {
        return defaultContent;
    }
};

// Listen for updates from Admin Panel
window.addEventListener('storage', (e) => {
    if (e.key === 'siteContent') window.location.reload();
});

// Render cards grid
const renderCards = (cards, extraClass = '') => cards.map(card => `
    <div class="nm-card uniform-card ${extraClass}">
        ${card.image ? `<div class="card-image nm-inset"><img src="${card.image}" alt="${card.title}" class="brand-img"></div>` : ''}
        <h3>${card.title}</h3>
        <p class="text-secondary mt-4">${card.desc}</p>
        ${card.link ? `<a href="${card.link}" class="card-link mt-4 nav-link">Learn More →</a>` : ''}
    </div>
`).join('');

// Render service list
const renderServices = (services) => services.map(s => `
    <div class="nm-card service-card">
        <h3>${s.title}</h3>
        <p class="text-secondary">${s.desc}</p>
    </div>
`).join('');

// Render team cards
const renderTeam = (team) => team.map(member => `
    <div class="nm-card team-card">
        <div class="team-avatar">${member.name.charAt(0)}</div>
        <h3>${member.name}</h3>
        <h4 class="text-secondary mb-4">${member.role}</h4>
        <p class="text-secondary">${member.desc}</p>
    </div>
`).join('');

// Render value tags
const renderTags = (items) => items.map(item => `<li>${item}</li>`).join('');

export const pages = {
    home: () => {
        const content = getContent();
        return `
        <section id="hero" class="hero">
            <canvas id="spectrum-canvas"></canvas>
            <div class="hero-overlay-content">
                <h1 class="hero-title mb-6">${content.home.hero.title.replace("Full Spectrum", "<span class='accent-page'>Full Spectrum</span>")}</h1>
                <p class="hero-subtitle mb-24 text-secondary">${content.home.hero.subtitle}</p>
                <div class="hero-actions">
                    <a href="/capabilities" class="cta-button nav-link">${content.home.hero.ctaMain} →</a>
                </div>
            </div>
        </section>

        <section id="about">
            <div class="about-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${content.home.about.title}</h4>
                    <p class="mb-4">${content.home.about.desc1}</p>
                    <p class="text-secondary">${content.home.about.desc2}</p>
                    <a href="/about" class="card-link mt-6 nav-link">About SVGT →</a>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="materials.png" alt="Engineering materials" class="brand-img">
                </div>
            </div>
        </section>

        <section id="capabilities">
            <h2 class="mb-6">Core Capabilities</h2>
            <div class="cards-grid">
                ${renderCards(content.home.capabilities)}
            </div>
        </section>

        <section id="closing" class="section-center">
            <h2 class="mb-6">${content.home.closing.title}</h2>
            <a href="/contact" class="cta-button nav-link">${content.home.closing.cta} →</a>
        </section>
    `;
    },

    about: () => {
        const content = getContent();
        return `
        <section id="about-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${content.about.hero.label}</h4>
            <h1>${content.about.hero.title.replace("Earth", "<span class='accent-page'>Earth</span>")}</h1>
        </section>

        <section id="company">
            <div class="nm-card">
                <h2 class="mb-6">${content.about.company.title}</h2>
                <div class="company-content">
                    <p class="mb-4">${content.about.company.desc1}</p>
                    <p class="mb-4">${content.about.company.desc2}</p>
                    <p class="text-secondary">${content.about.company.desc3}</p>
                </div>
            </div>
        </section>

        <section id="leadership">
            <h2 class="mb-6">Leadership Team</h2>
            <div class="cards-grid team-grid">
                ${renderTeam(content.about.leadershipTeam)}
            </div>
        </section>

        <section id="culture">
            <div class="nm-card">
                <h2 class="mb-6">${content.about.culture.title}</h2>
                <p class="mb-4">${content.about.culture.desc1}</p>
                <p class="text-secondary mb-6">${content.about.culture.desc2}</p>
                <ul class="value-tags">
                    ${renderTags(content.about.culture.values)}
                </ul>
            </div>
        </section>

        <section id="careers">
            <div class="nm-card section-center">
                <h2 class="mb-4">${content.about.careers.title}</h2>
                <p class="text-secondary mb-6">${content.about.careers.desc}</p>
                <a href="mailto:${content.about.careers.ctaEmail}" class="cta-button">${content.about.careers.ctaText} →</a>
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

        <section id="overview">
            <p class="lead-text">${content.capabilities.overview.desc}</p>
        </section>

        <section id="sectors">
            <div class="cards-grid sector-cards">
                ${content.capabilities.sectors.map(s => `
                    <a href="${s.link}" class="nm-card sector-link-card nav-link">
                        <h4 class="text-secondary mb-4">${s.label}</h4>
                        <h3>${s.title}</h3>
                        <p class="text-secondary mt-4">${s.desc}</p>
                        <span class="card-link mt-4">Explore →</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    },

    marine: () => {
        const content = getContent();
        return `
        <section id="marine-hero" class="subpage-hero marine-bg">
            <h4 class="text-secondary mb-4">${content.marine.hero.label}</h4>
            <h1>${content.marine.hero.title.replace("Dynamic", "<span class='accent-marine'>Dynamic</span>")}</h1>
        </section>

        <section id="marine-intro">
            <div class="nm-card">
                <p class="lead-text">${content.marine.intro.desc}</p>
            </div>
        </section>

        <section id="marine-services">
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${renderServices(content.marine.services)}
            </div>
        </section>

        <section id="marine-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Discuss a Marine Project →</a>
        </section>
    `;
    },

    transport: () => {
        const content = getContent();
        return `
        <section id="transport-hero" class="subpage-hero transport-bg">
            <h4 class="text-secondary mb-4">${content.transport.hero.label}</h4>
            <h1>${content.transport.hero.title.replace("Growth", "<span class='accent-transport'>Growth</span>")}</h1>
        </section>

        <section id="transport-intro">
            <div class="nm-card">
                <p class="lead-text">${content.transport.intro.desc}</p>
            </div>
        </section>

        <section id="transport-services">
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${renderServices(content.transport.services)}
            </div>
        </section>

        <section id="transport-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Discuss a Transport Project →</a>
        </section>
    `;
    },

    energy: () => {
        const content = getContent();
        return `
        <section id="energy-hero" class="subpage-hero energy-bg">
            <h4 class="text-secondary mb-4">${content.energy.hero.label}</h4>
            <h1>${content.energy.hero.title.replace("Transition", "<span class='accent-energy'>Transition</span>")}</h1>
        </section>

        <section id="energy-intro">
            <div class="nm-card">
                <p class="lead-text">${content.energy.intro.desc}</p>
            </div>
        </section>

        <section id="energy-services">
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${renderServices(content.energy.services)}
            </div>
        </section>

        <section id="energy-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Discuss an Energy Project →</a>
        </section>
    `;
    },

    systems: () => {
        const content = getContent();
        return `
        <section id="systems-hero" class="subpage-hero systems-bg">
            <h4 class="text-secondary mb-4">${content.systems.hero.label}</h4>
            <h1>${content.systems.hero.title.replace("Technologies", "<span class='accent-page'>Technologies</span>")}</h1>
        </section>

        <section id="systems-intro">
            <div class="nm-card">
                <p class="lead-text">${content.systems.intro.desc}</p>
            </div>
        </section>

        <section id="technologies">
            <h2 class="mb-6">Our Technologies</h2>
            <div class="cards-grid">
                ${renderCards(content.systems.technologies)}
            </div>
        </section>

        <section id="benefits">
            <div class="nm-card">
                <h3 class="mb-6">Key Benefits</h3>
                <ul class="benefits-list">
                    ${content.systems.benefits.map(b => `<li>✓ ${b}</li>`).join('')}
                </ul>
            </div>
        </section>

        <section id="systems-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Enquire About Construction Systems →</a>
        </section>
    `;
    },

    sustainability: () => {
        const content = getContent();
        return `
        <section id="sustain-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${content.sustainability.hero.label}</h4>
            <h1>${content.sustainability.hero.title.replace("Responsibly", "<span class='accent-page'>Responsibly</span>")}</h1>
        </section>

        <section id="plan">
            <div class="nm-card">
                <h2 class="mb-4">${content.sustainability.plan.title}</h2>
                <p class="lead-text">${content.sustainability.plan.desc}</p>
            </div>
        </section>

        <section id="pillars">
            <h2 class="mb-6">Our Pillars</h2>
            <div class="cards-grid">
                ${renderCards(content.sustainability.pillars)}
            </div>
        </section>

        <section id="practices">
            <h2 class="mb-6">Key Practices</h2>
            <div class="nm-card">
                <ul class="practices-list">
                    ${content.sustainability.practices.map(p => `
                        <li>
                            <strong>${p.title}</strong>
                            <p class="text-secondary">${p.desc}</p>
                        </li>
                    `).join('')}
                </ul>
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
                    <h4 class="text-secondary mb-4">${content.contact.enquiry.label}</h4>
                    <h2>${content.contact.enquiry.heading.replace("infrastructure challenges", "<span class='accent-page'>infrastructure challenges</span>")}</h2>
                    <div class="contact-links-row mt-6">
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">Email</h4>
                            <a href="mailto:${content.contact.enquiry.email}" class="contact-link-item">${content.contact.enquiry.email}</a>
                        </div>
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">LinkedIn</h4>
                            <a href="#" class="contact-link-item">${content.contact.enquiry.linkedin}</a>
                        </div>
                    </div>
                </div>

                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${content.contact.offices.label}</h4>
                    <div class="offices-list">
                        ${content.contact.offices.locations.map(loc => `
                            <div class="office-item">
                                <strong>${loc.country}</strong>
                                <span class="text-secondary">${loc.city} · ${loc.type}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>

        <section id="regions-media">
            <div class="contact-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${content.contact.regions.label}</h4>
                    <p class="text-secondary mb-4">${content.contact.regions.desc}</p>
                    <ul class="regions-tags">
                        ${content.contact.regions.items.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>

                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${content.contact.media.label}</h4>
                    <p class="text-secondary mb-4">${content.contact.media.desc}</p>
                    <a href="mailto:${content.contact.media.email}" class="contact-link-item">${content.contact.media.email}</a>
                </div>
            </div>
        </section>
    `;
    }
};
