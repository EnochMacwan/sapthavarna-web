import { defaultContent } from '../data/content.js';

// Base path for GitHub Pages (empty for local dev, '/sapthavarna-web' for production)
const BASE_PATH = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

// Helper to get image path with base URL
const getImagePath = (img) => {
    if (!img) return '';
    if (img.startsWith('http') || img.startsWith('data:')) return img;
    return `${BASE_PATH}/${img}`;
};

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

// ========================================
// REUSABLE HELPER RENDERERS
// ========================================

// Render service cards with numbers
const renderServices = (services) => services.map((s, i) => `
    <div class="nm-card service-card">
        <div class="service-number">${String(i + 1).padStart(2, '0')}</div>
        <h3>${s.title}</h3>
        <p class="text-secondary">${s.desc}</p>
    </div>
`).join('');

// Render team cards
const renderTeam = (team) => team.map(member => `
    <div class="grid-card-wrapper">
        <div class="grid-card-visual">
            ${member.photo
                ? `<img src="${member.photo}" alt="${member.name}" loading="lazy">`
                : `<div class="team-avatar-large">${member.name.charAt(0)}</div>`
            }
        </div>
        <div class="grid-content-outside">
            <h3>${member.name}</h3>
            <h4>${member.role}</h4>
            <p>${member.desc}</p>
        </div>
    </div>
`).join('');

// Render value tags
const renderTags = (items) => items.map(item => `<li>${item}</li>`).join('');

// Stats bar renderer
const renderStatsBar = (stats) => {
    if (!stats || !stats.length) return '';
    return `
    <section class="section-alt">
        <div class="stats-bar">
            ${stats.map(s => `
                <div class="stat-item nm-card">
                    <div class="stat-icon"><i class="fas ${s.icon}"></i></div>
                    <div class="stat-value">${s.value}</div>
                    <div class="stat-label">${s.label}</div>
                </div>
            `).join('')}
        </div>
    </section>`;
};

// Client logos renderer
const renderClientLogos = (logos) => {
    if (!logos || !logos.length) return '';
    return `
    <section class="section-center">
        <div class="section-label mb-4">Trusted By</div>
        <div class="logo-grid">
            ${logos.map(l => `
                <div class="logo-grid-item">
                    ${l.logo ? `<img src="${getImagePath(l.logo)}" alt="${l.name}" style="max-height:40px;">` : `<span class="logo-placeholder">${l.name}</span>`}
                </div>
            `).join('')}
        </div>
    </section>`;
};

// Testimonials renderer
const renderTestimonials = (testimonials) => {
    if (!testimonials || !testimonials.length) return '';
    return `
    <section class="section-alt">
        <div class="section-label mb-4">What Clients Say</div>
        <h2 class="mb-6" style="text-align:center;">Client Testimonials</h2>
        <div class="testimonials-grid">
            ${testimonials.map(t => `
                <div class="testimonial-card nm-card">
                    <p class="testimonial-quote">${t.quote}</p>
                    <div class="testimonial-author">
                        <div class="avatar-placeholder">${t.name.charAt(0) === '[' ? '?' : t.name.charAt(0)}</div>
                        <div>
                            <div class="testimonial-name">${t.name}</div>
                            <div class="testimonial-role">${t.role}, ${t.company}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>`;
};

// Project card renderer
const renderProjectCard = (project, sectorClass) => {
    if (!project) return '';
    const gradientClass = sectorClass ? `${sectorClass}-gradient` : '';
    return `
    <div class="project-card nm-card" style="padding:0;overflow:hidden;">
        <div class="project-card-visual ${gradientClass}">
            <i class="fas fa-hard-hat"></i>
        </div>
        <div class="project-card-content">
            <h3>${project.title}</h3>
            <div class="project-location"><i class="fas fa-map-marker-alt"></i> ${project.location}</div>
            <p>${project.desc}</p>
            ${project.stats ? `
            <div class="project-stats">
                ${project.stats.map(s => `
                    <div class="project-stat-item">
                        <div class="project-stat-value">${s.value}</div>
                        <div class="project-stat-label">${s.label}</div>
                    </div>
                `).join('')}
            </div>` : ''}
        </div>
    </div>`;
};

// Trust strip renderer
const renderTrustStrip = (trustStrip) => {
    if (!trustStrip) return '';
    return `
    <section style="padding:0;">
        <div class="trust-strip">
            <h3>${trustStrip.title}</h3>
            <div class="trust-badges">
                ${trustStrip.badges.map(b => `
                    <div class="trust-badge"><i class="fas ${b.icon}"></i> ${b.label}</div>
                `).join('')}
            </div>
        </div>
    </section>`;
};

// Process / methodology renderer
const renderProcess = (process) => {
    if (!process) return '';
    return `
    <section>
        <div class="section-label mb-4">Our Process</div>
        <h2 class="mb-6" style="text-align:center;">${process.title}</h2>
        <div class="process-grid">
            ${process.steps.map((step, i) => `
                <div class="process-step nm-card">
                    <div class="process-icon"><i class="fas ${step.icon}"></i></div>
                    <div class="process-number">Step ${String(i + 1).padStart(2, '0')}</div>
                    <h3>${step.title}</h3>
                    <p>${step.desc}</p>
                </div>
            `).join('')}
        </div>
    </section>`;
};

// FAQ accordion renderer
const renderFAQ = (faq) => {
    if (!faq || !faq.length) return '';
    return `
    <section>
        <div class="section-label mb-4">Common Questions</div>
        <h2 class="mb-6" style="text-align:center;">Frequently Asked Questions</h2>
        <div class="faq-list">
            ${faq.map(item => `
                <div class="faq-item">
                    <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                        <span>${item.question}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">${item.answer}</div>
                </div>
            `).join('')}
        </div>
    </section>`;
};

// Sector stats renderer
const renderSectorStats = (stats) => {
    if (!stats || !stats.length) return '';
    return `
    <section class="section-alt section-center">
        <div class="sector-stats">
            ${stats.map(s => `
                <div class="sector-stat">
                    <div class="sector-stat-value">${s.value}</div>
                    <div class="sector-stat-label">${s.label}</div>
                </div>
            `).join('')}
        </div>
    </section>`;
};

// Why choose us renderer
const renderWhyChooseUs = (items) => {
    if (!items || !items.length) return '';
    return `
    <section class="section-alt">
        <div class="section-label mb-4">Why SVGT</div>
        <h2 class="mb-6" style="text-align:center;">Why Choose Us</h2>
        <div class="why-grid">
            ${items.map(item => `
                <div class="nm-card why-card">
                    <div class="diff-icon"><i class="fas ${item.icon}"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `).join('')}
        </div>
    </section>`;
};

// ========================================
// PAGE RENDERERS
// ========================================

export const pages = {
    home: () => {
        const content = getContent();
        return `
        <section id="hero" class="hero">
            <canvas id="spectrum-canvas"></canvas>
            <div class="hero-overlay-content">
                <div class="section-label mb-4">SapthaVarnah Geo Technologies</div>
                <h1 class="hero-title mb-6">${content.home.hero.title.replace("Full Spectrum", "<span class='accent-page'>Full Spectrum</span>")}</h1>
                <p class="hero-subtitle">${content.home.hero.subtitle}</p>
                <div class="hero-actions">
                    <a href="#capabilities" class="cta-button nav-link">${content.home.hero.ctaMain} →</a>
                    <a href="#contact" class="cta-button secondary nav-link">Get in Touch</a>
                </div>
            </div>
        </section>

        ${renderStatsBar(content.home.stats)}

        ${renderClientLogos(content.home.clientLogos)}

        <section id="about" class="section-alt">
            <div class="section-label mb-4">Who We Are</div>
            <div class="about-grid">
                <div>
                    <h2 class="mb-6">${content.home.about.title}</h2>
                    <p class="mb-4">${content.home.about.desc1}</p>
                    <p class="text-secondary mb-6">${content.home.about.desc2}</p>
                    <a href="#about" class="cta-button secondary nav-link">About SVGT →</a>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="${getImagePath('materials.png')}" alt="Engineering materials" class="brand-img">
                </div>
            </div>
        </section>

        <section id="capabilities">
            <div class="section-label mb-4">What We Do</div>
            <h2 class="mb-6">Core Capabilities</h2>
            <div class="cards-grid">
                ${content.home.capabilities.map((cap, i) => `
                    <a href="${cap.link}" class="nm-card sector-link-card nav-link">
                        <div class="service-number">${String(i + 1).padStart(2, '0')}</div>
                        <h3>${cap.title}</h3>
                        <p class="text-secondary mt-4">${cap.desc}</p>
                        <span class="card-link mt-4">Explore →</span>
                    </a>
                `).join('')}
            </div>
        </section>

        ${content.home.projects ? `
        <section class="section-alt">
            <div class="section-label mb-4">Our Work</div>
            <h2 class="mb-6" style="text-align:center;">Featured Projects</h2>
            <div class="projects-grid">
                ${content.home.projects.map(p => renderProjectCard(p, p.sector)).join('')}
            </div>
        </section>` : ''}

        ${renderProcess(content.home.process)}

        ${renderTestimonials(content.home.testimonials)}

        ${renderTrustStrip(content.home.trustStrip)}

        <section id="closing" class="section-alt section-center">
            <h2 class="mb-6">${content.home.closing.title}</h2>
            <a href="#contact" class="cta-button nav-link">${content.home.closing.cta} →</a>
        </section>
    `;
    },

    about: () => {
        const content = getContent();
        return `
        <section id="about-hero" class="subpage-hero">
            <div class="section-label mb-4">${content.about.hero.label}</div>
            <h1>${content.about.hero.title.replace("Earth", "<span class='accent-gfrg'>Earth</span>")}</h1>
        </section>

        <section id="company" class="section-alt">
            <div class="section-label mb-4">Our Story</div>
            <h2 class="mb-6">${content.about.company.title}</h2>
            <div style="max-width: 900px;">
                <p class="mb-4">${content.about.company.desc1}</p>
                <p class="mb-4">${content.about.company.desc2}</p>
                <p class="text-secondary">${content.about.company.desc3}</p>
            </div>
        </section>

        ${content.about.timeline ? `
        <section>
            <div class="section-label mb-4">Our Journey</div>
            <h2 class="mb-6" style="text-align:center;">Key Milestones</h2>
            <div class="timeline">
                ${content.about.timeline.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-year">${item.year}</div>
                        <div class="timeline-card">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>` : ''}

        <section id="leadership" class="section-alt">
            <div class="section-label mb-4">Our People</div>
            <h2 class="mb-6">Leadership Team</h2>
            <div class="cards-grid team-grid">
                ${renderTeam(window.TEAM_DATA || content.about.leadershipTeam)}
            </div>
        </section>

        ${content.about.certifications ? `
        <section>
            <div class="section-label mb-4">Credentials</div>
            <h2 class="mb-6" style="text-align:center;">Certifications & Standards</h2>
            <div class="certs-grid">
                ${content.about.certifications.map(c => `
                    <div class="cert-card nm-card">
                        <i class="fas ${c.icon}"></i>
                        <h4>${c.title}</h4>
                    </div>
                `).join('')}
            </div>
        </section>` : ''}

        ${content.about.partners ? `
        <section class="section-alt">
            <div class="section-label mb-4">Associations</div>
            <h2 class="mb-6" style="text-align:center;">Partners & Associations</h2>
            <div class="partners-grid">
                ${content.about.partners.map(p => `
                    <div class="partner-card">
                        ${p.logo ? `<img src="${getImagePath(p.logo)}" alt="${p.name}" style="max-height:40px;">` : `<span>${p.name}</span>`}
                    </div>
                `).join('')}
            </div>
        </section>` : ''}

        <section id="culture">
            <div class="section-label mb-4">Our Values</div>
            <h2 class="mb-6">${content.about.culture.title}</h2>
            <p class="mb-4" style="max-width: 800px;">${content.about.culture.desc1}</p>
            <p class="text-secondary mb-6" style="max-width: 800px;">${content.about.culture.desc2}</p>
            <ul class="value-tags">
                ${renderTags(content.about.culture.values)}
            </ul>
        </section>

        <section id="careers" class="section-alt section-center">
            <h2 class="mb-4">${content.about.careers.title}</h2>
            <p class="text-secondary mb-6" style="max-width: 600px; margin-left: auto; margin-right: auto;">${content.about.careers.desc}</p>
            <a href="#careers" class="cta-button nav-link">${content.about.careers.ctaText} →</a>
        </section>
    `;
    },

    capabilities: () => {
        const content = getContent();
        return `
        <section id="cap-hero" class="subpage-hero">
            <div class="section-label mb-4">${content.capabilities.hero.label}</div>
            <h1>Integrated <span class="accent-gfrg">Engineering</span> Solutions</h1>
        </section>

        <section id="overview" class="section-alt">
            <p class="lead-text">${content.capabilities.overview.desc}</p>
        </section>

        ${content.capabilities.differentiators ? `
        <section>
            <div class="section-label mb-4">Our Edge</div>
            <h2 class="mb-6" style="text-align:center;">Why SVGT</h2>
            <div class="cards-grid">
                ${content.capabilities.differentiators.map(d => `
                    <div class="nm-card">
                        <div class="diff-icon"><i class="fas ${d.icon}"></i></div>
                        <h3>${d.title}</h3>
                        <p class="text-secondary mt-4">${d.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>` : ''}

        <section id="sectors" class="section-alt">
            <div class="section-label mb-4">Our Sectors</div>
            <h2 class="mb-6">Explore Our Capabilities</h2>
            <div class="cards-grid sector-cards">
                ${content.capabilities.sectors.map(s => `
                    <a href="${s.link}" class="nm-card sector-link-card nav-link">
                        <div class="service-number">${s.label}</div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary mt-4">${s.desc}</p>
                        <span class="card-btn mt-4">Explore →</span>
                    </a>
                `).join('')}
            </div>
        </section>

        ${renderProcess(content.capabilities.methodology)}

        <section class="section-center">
            <h2 class="mb-6">Ready to discuss your project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `;
    },

    marine: () => {
        const content = getContent();
        return `
        <section id="marine-hero" class="subpage-hero marine-bg">
            <div class="section-label mb-4">${content.marine.hero.label}</div>
            <h1>${content.marine.hero.title.replace("Dynamic", "<span class='accent-gfrg'>Dynamic</span>")}</h1>
        </section>

        ${renderSectorStats(content.marine.sectorStats)}

        <section id="marine-intro" class="section-alt">
            <p class="lead-text">${content.marine.intro.desc}</p>
        </section>

        <section id="marine-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${renderServices(content.marine.services)}
            </div>
        </section>

        ${content.marine.featuredProject ? `
        <section class="section-alt">
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${renderProjectCard(content.marine.featuredProject)}
            </div>
        </section>` : ''}

        ${renderWhyChooseUs(content.marine.whyChooseUs)}

        <section id="marine-cta" class="section-center">
            <h2 class="mb-6">Ready to discuss your marine project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `;
    },

    transport: () => {
        const content = getContent();
        return `
        <section id="transport-hero" class="subpage-hero transport-bg">
            <div class="section-label mb-4">${content.transport.hero.label}</div>
            <h1>${content.transport.hero.title.replace("Growth", "<span class='accent-gfrg'>Growth</span>")}</h1>
        </section>

        ${renderSectorStats(content.transport.sectorStats)}

        <section id="transport-intro" class="section-alt">
            <p class="lead-text">${content.transport.intro.desc}</p>
        </section>

        <section id="transport-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${renderServices(content.transport.services)}
            </div>
        </section>

        ${content.transport.featuredProject ? `
        <section class="section-alt">
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${renderProjectCard(content.transport.featuredProject, 'transport')}
            </div>
        </section>` : ''}

        ${renderWhyChooseUs(content.transport.whyChooseUs)}

        <section id="transport-cta" class="section-center">
            <h2 class="mb-6">Ready to discuss your transport project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `;
    },

    energy: () => {
        const content = getContent();
        return `
        <section id="energy-hero" class="subpage-hero energy-bg">
            <div class="section-label mb-4">${content.energy.hero.label}</div>
            <h1>${content.energy.hero.title.replace("Transition", "<span class='accent-gfrg'>Transition</span>")}</h1>
        </section>

        ${renderSectorStats(content.energy.sectorStats)}

        <section id="energy-intro" class="section-alt">
            <p class="lead-text">${content.energy.intro.desc}</p>
        </section>

        <section id="energy-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${renderServices(content.energy.services)}
            </div>
        </section>

        ${content.energy.featuredProject ? `
        <section class="section-alt">
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${renderProjectCard(content.energy.featuredProject, 'energy')}
            </div>
        </section>` : ''}

        ${renderWhyChooseUs(content.energy.whyChooseUs)}

        <section id="energy-cta" class="section-center">
            <h2 class="mb-6">Ready to discuss your energy project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `;
    },

    systems: () => {
        const content = getContent();
        return `
        <section id="systems-hero" class="subpage-hero systems-bg">
            <div class="section-label mb-4">${content.systems.hero.label}</div>
            <h1>${content.systems.hero.title.replace("Technologies", "<span class='accent-gfrg'>Technologies</span>")}</h1>
        </section>

        ${renderSectorStats(content.systems.sectorStats)}

        <section id="systems-intro" class="section-alt">
            <p class="lead-text">${content.systems.intro.desc}</p>
        </section>

        <section id="technologies">
            <div class="section-label mb-4">Our Solutions</div>
            <h2 class="mb-6">Our Technologies</h2>
            <div class="cards-grid">
                ${content.systems.technologies.map((t, i) => `
                    <div class="nm-card">
                        ${t.image ? `<div class="card-image nm-inset mb-4"><img src="${getImagePath(t.image)}" alt="${t.title}" class="brand-img" style="height: 200px;"></div>` : ''}
                        <div class="service-number">${String(i + 1).padStart(2, '0')}</div>
                        <h3>${t.title}</h3>
                        <p class="text-secondary mt-4">${t.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="benefits" class="section-alt">
            <div class="nm-card">
                <div class="section-label mb-4">Advantages</div>
                <h3 class="mb-6">Key Benefits</h3>
                <ul class="benefits-list">
                    ${content.systems.benefits.map(b => `<li>✓ ${b}</li>`).join('')}
                </ul>
            </div>
        </section>

        ${content.systems.featuredProject ? `
        <section>
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${renderProjectCard(content.systems.featuredProject, 'systems')}
            </div>
        </section>` : ''}

        ${renderWhyChooseUs(content.systems.whyChooseUs)}

        <section id="systems-cta" class="section-center">
            <h2 class="mb-6">Interested in modern construction systems?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `;
    },

    sustainability: () => {
        const content = getContent();
        return `
        <section id="sustain-hero" class="subpage-hero">
            <div class="section-label mb-4">${content.sustainability.hero.label}</div>
            <h1>${content.sustainability.hero.title.replace("Responsibly", "<span class='accent-gfrg'>Responsibly</span>")}</h1>
        </section>

        <section id="plan" class="section-alt">
            <div class="section-label mb-4">Our Commitment</div>
            <h2 class="mb-4">${content.sustainability.plan.title}</h2>
            <p class="lead-text">${content.sustainability.plan.desc}</p>
        </section>

        ${content.sustainability.metrics ? `
        <section class="section-center">
            <div class="sector-stats">
                ${content.sustainability.metrics.map(m => `
                    <div class="sector-stat">
                        <div style="font-size:1.5rem;color:var(--accent-marine);margin-bottom:8px;"><i class="fas ${m.icon}"></i></div>
                        <div class="sector-stat-value">${m.value}</div>
                        <div class="sector-stat-label">${m.label}</div>
                    </div>
                `).join('')}
            </div>
        </section>` : ''}

        <section id="pillars" class="section-alt">
            <div class="section-label mb-4">Foundation</div>
            <h2 class="mb-6">Our Pillars</h2>
            <div class="cards-grid">
                ${content.sustainability.pillars.map((p, i) => `
                    <div class="nm-card cap-card">
                        <div class="service-number">${String(i + 1).padStart(2, '0')}</div>
                        <h3>${p.title}</h3>
                        <p class="text-secondary">${p.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="practices">
            <div class="section-label mb-4">In Action</div>
            <h2 class="mb-6">Key Practices</h2>
            <div class="cards-grid">
                ${content.sustainability.practices.map((p, i) => `
                    <div class="nm-card service-card">
                        <div class="service-number">${String(i + 1).padStart(2, '0')}</div>
                        <h3>${p.title}</h3>
                        <p class="text-secondary">${p.desc}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="section-alt section-center">
            <h2 class="mb-6">Partner with us on sustainable infrastructure</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `;
    },

    contact: () => {
        const content = getContent();
        return `
        <section id="contact-hero" class="subpage-hero contact-hero-bg">
            <div class="section-label mb-4">${content.contact.hero.label}</div>
            <h1>Let's Build <span class="accent-gfrg">Together</span></h1>
            <p class="hero-subtitle" style="color: rgba(255,255,255,0.8); max-width: 600px;">Have a project in mind? We'd love to hear about it. Reach out and let's explore how we can help.</p>
        </section>

        <section id="contact-form-section" class="section-alt">
            <div class="contact-form-layout">
                <div class="contact-form-card nm-card">
                    <div class="section-label mb-4">Send us a Message</div>
                    <h2 class="mb-6">Project Enquiry</h2>
                    <form id="contact-form" class="contact-form" onsubmit="return false;">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="contact-name">Full Name <span class="required">*</span></label>
                                <input type="text" id="contact-name" class="form-input" placeholder="John Smith" required>
                                <span class="form-error">Please enter your name</span>
                            </div>
                            <div class="form-group">
                                <label for="contact-company">Company / Organisation</label>
                                <input type="text" id="contact-company" class="form-input" placeholder="Your company name">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="contact-email">Email Address <span class="required">*</span></label>
                                <input type="email" id="contact-email" class="form-input" placeholder="john@company.com" required>
                                <span class="form-error">Please enter a valid email</span>
                            </div>
                            <div class="form-group">
                                <label for="contact-phone">Phone Number</label>
                                <input type="tel" id="contact-phone" class="form-input" placeholder="+230 5XXX XXXX">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="contact-sector">Sector of Interest</label>
                            <select id="contact-sector" class="form-input form-select">
                                <option value="">Select a sector...</option>
                                <option value="marine">Marine & Coastal Engineering</option>
                                <option value="transport">Transport Infrastructure</option>
                                <option value="energy">Energy & Power</option>
                                <option value="systems">Construction Systems (GFRG/Precast)</option>
                                <option value="multiple">Multiple Sectors</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="contact-region">Project Region</label>
                            <select id="contact-region" class="form-input form-select">
                                <option value="">Select a region...</option>
                                <option value="mauritius">Mauritius & Indian Ocean Islands</option>
                                <option value="east-africa">East & Southern Africa</option>
                                <option value="west-africa">West Africa</option>
                                <option value="india">Indian Subcontinent</option>
                                <option value="gcc">Gulf Cooperation Council</option>
                                <option value="other">Other Region</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="contact-message">Tell Us About Your Project <span class="required">*</span></label>
                            <textarea id="contact-message" class="form-input form-textarea" placeholder="Describe your project, timeline, and any specific requirements..." required></textarea>
                            <span class="form-error">Please describe your project</span>
                        </div>
                        <button type="submit" class="cta-button submit-btn"><i class="fas fa-paper-plane"></i> Send Enquiry</button>
                    </form>
                    <div id="contact-success" class="eoi-success" style="display:none;">
                        <i class="fas fa-check-circle"></i>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. Our team will review your enquiry and get back to you within 24–48 hours.</p>
                    </div>
                </div>

                <div class="contact-sidebar">
                    ${content.contact.responseGuarantee ? `
                    <div class="response-guarantee">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>${content.contact.responseGuarantee.title}</h4>
                            <p>${content.contact.responseGuarantee.desc}</p>
                        </div>
                    </div>` : ''}

                    <div class="nm-card contact-info-card">
                        <div class="contact-info-item">
                            <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
                            <div>
                                <h4>Email Us</h4>
                                <a href="mailto:${content.contact.enquiry.email}" class="contact-link-item">${content.contact.enquiry.email}</a>
                            </div>
                        </div>
                        ${content.contact.phone ? `
                        <div class="contact-info-item">
                            <div class="contact-info-icon"><i class="fas fa-phone"></i></div>
                            <div>
                                <h4>Call Us</h4>
                                <a href="tel:${content.contact.phone.replace(/\s/g, '')}" class="contact-link-item">${content.contact.phone}</a>
                            </div>
                        </div>` : ''}
                        <div class="contact-info-item">
                            <div class="contact-info-icon"><i class="fab fa-linkedin"></i></div>
                            <div>
                                <h4>LinkedIn</h4>
                                <span class="contact-link-item">${content.contact.enquiry.linkedin}</span>
                            </div>
                        </div>
                    </div>

                    <div class="nm-card">
                        <div class="section-label mb-4">${content.contact.offices.label}</div>
                        <div class="offices-list">
                            ${content.contact.offices.locations.map(loc => `
                                <div class="office-item">
                                    <div class="office-icon"><i class="fas fa-map-marker-alt"></i></div>
                                    <div>
                                        <strong>${loc.country}</strong> · ${loc.city}
                                        <span class="text-secondary" style="display:block; font-size: 0.85rem;">${loc.type}</span>
                                        <span class="text-secondary" style="display:block; font-size: 0.85rem;">${loc.address}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="nm-card">
                        <div class="section-label mb-4">${content.contact.regions.label}</div>
                        <ul class="regions-tags">
                            ${content.contact.regions.items.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="nm-card">
                        <div class="section-label mb-4">${content.contact.media.label}</div>
                        <p class="text-secondary mb-4" style="font-size: 0.9rem;">${content.contact.media.desc}</p>
                        <a href="mailto:${content.contact.media.email}" class="contact-link-item"><i class="fas fa-envelope" style="margin-right: 6px;"></i>${content.contact.media.email}</a>
                    </div>
                </div>
            </div>
        </section>

        ${renderFAQ(content.contact.faq)}
    `;
    },

    careers: () => {
        return `
        <section id="careers-hero" class="page-hero careers-hero">
            <div class="hero-overlay-content">
                <div class="section-label mb-4" style="color: var(--accent-gfrg);">Careers</div>
                <h1 class="hero-title">Join Our <span class="accent-page">Team</span></h1>
                <p class="hero-subtitle">Build the infrastructure that shapes tomorrow</p>
            </div>
        </section>

        <section id="careers-intro" class="section-alt">
            <div class="nm-card careers-intro-card">
                <div class="section-label mb-4">Opportunities</div>
                <h2 class="mb-4">Expression of Interest</h2>
                <p class="text-secondary mb-4">We're always looking for talented engineers, project managers, and specialists to join our growing team. If you share our vision for building better infrastructure, we'd like to hear from you.</p>
                <p class="text-secondary">SapthaVarnah operates across multiple sectors including marine, transport, energy, and urban infrastructure. We offer opportunities for professionals at all stages of their careers.</p>
            </div>
        </section>

        <section id="job-categories">
            <div class="section-label mb-4">Open Roles</div>
            <h2 class="mb-6">We're Looking For</h2>
            <div class="careers-grid">
                <div class="nm-card career-category">
                    <div class="career-icon"><i class="fas fa-hard-hat"></i></div>
                    <h3>Civil Engineers</h3>
                    <p class="text-secondary">Structural, geotechnical, and marine engineering specialists with experience in large-scale infrastructure projects.</p>
                </div>
                <div class="nm-card career-category">
                    <div class="career-icon"><i class="fas fa-project-diagram"></i></div>
                    <h3>Project Managers</h3>
                    <p class="text-secondary">Experienced PMs with a track record of delivering complex infrastructure projects on time and within budget.</p>
                </div>
                <div class="nm-card career-category">
                    <div class="career-icon"><i class="fas fa-drafting-compass"></i></div>
                    <h3>Design Engineers</h3>
                    <p class="text-secondary">CAD specialists and design engineers proficient in AutoCAD, Revit, and other industry-standard tools.</p>
                </div>
                <div class="nm-card career-category">
                    <div class="career-icon"><i class="fas fa-leaf"></i></div>
                    <h3>Environmental Specialists</h3>
                    <p class="text-secondary">Professionals focused on sustainable construction, environmental impact assessment, and green building practices.</p>
                </div>
                <div class="nm-card career-category">
                    <div class="career-icon"><i class="fas fa-cogs"></i></div>
                    <h3>Site Supervisors</h3>
                    <p class="text-secondary">On-ground leaders who can manage construction crews and ensure quality execution.</p>
                </div>
                <div class="nm-card career-category">
                    <div class="career-icon"><i class="fas fa-chart-line"></i></div>
                    <h3>Business Development</h3>
                    <p class="text-secondary">Strategic thinkers who can identify opportunities and build lasting client relationships.</p>
                </div>
            </div>
        </section>

        <section id="why-join" class="section-alt">
            <div class="section-label mb-4">Benefits</div>
            <h2 class="mb-6">Why Join SapthaVarnah?</h2>
            <div class="benefits-grid">
                <div class="nm-card benefit-card">
                    <i class="fas fa-globe-asia"></i>
                    <h4>Global Projects</h4>
                    <p class="text-secondary">Work on landmark infrastructure across India, Middle East, and beyond.</p>
                </div>
                <div class="nm-card benefit-card">
                    <i class="fas fa-graduation-cap"></i>
                    <h4>Career Growth</h4>
                    <p class="text-secondary">Continuous learning and development opportunities.</p>
                </div>
                <div class="nm-card benefit-card">
                    <i class="fas fa-users"></i>
                    <h4>Collaborative Culture</h4>
                    <p class="text-secondary">Work with industry experts in a supportive environment.</p>
                </div>
                <div class="nm-card benefit-card">
                    <i class="fas fa-seedling"></i>
                    <h4>Sustainable Impact</h4>
                    <p class="text-secondary">Contribute to projects that make a real difference.</p>
                </div>
            </div>
        </section>

        <section id="eoi-form">
            <div class="nm-card eoi-form-card">
                <div class="section-label mb-4">Apply</div>
                <h2 class="mb-2">Submit Your Expression of Interest</h2>
                <p class="text-secondary mb-6">Fill out the form below and we'll be in touch if a suitable opportunity arises.</p>

                <form id="careers-form" class="eoi-form" onsubmit="handleEOISubmit(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="eoi-name">Full Name *</label>
                            <input type="text" id="eoi-name" name="name" class="form-input" required placeholder="Your full name">
                        </div>
                        <div class="form-group">
                            <label for="eoi-email">Email Address *</label>
                            <input type="email" id="eoi-email" name="email" class="form-input" required placeholder="your@email.com">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="eoi-phone">Phone Number</label>
                            <input type="tel" id="eoi-phone" name="phone" class="form-input" placeholder="+91 98765 43210">
                        </div>
                        <div class="form-group">
                            <label for="eoi-location">Current Location</label>
                            <input type="text" id="eoi-location" name="location" class="form-input" placeholder="City, Country">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="eoi-role">Area of Interest *</label>
                        <select id="eoi-role" name="role" class="form-input" required>
                            <option value="">Select a category...</option>
                            <option value="civil-engineer">Civil Engineering</option>
                            <option value="project-manager">Project Management</option>
                            <option value="design-engineer">Design Engineering</option>
                            <option value="environmental">Environmental &amp; Sustainability</option>
                            <option value="site-supervisor">Site Supervision</option>
                            <option value="business-dev">Business Development</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="eoi-experience">Years of Experience</label>
                        <select id="eoi-experience" name="experience" class="form-input">
                            <option value="">Select experience level...</option>
                            <option value="0-2">0-2 years (Entry Level)</option>
                            <option value="3-5">3-5 years (Mid Level)</option>
                            <option value="6-10">6-10 years (Senior)</option>
                            <option value="10+">10+ years (Expert)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="eoi-resume">Resume/CV Link</label>
                        <input type="url" id="eoi-resume" name="resume" class="form-input" placeholder="Link to your resume (Google Drive, Dropbox, etc.)">
                    </div>

                    <div class="form-group">
                        <label for="eoi-message">Tell Us About Yourself</label>
                        <textarea id="eoi-message" name="message" class="form-input form-textarea" rows="5" placeholder="Brief introduction, relevant experience, and why you want to join SapthaVarnah..."></textarea>
                    </div>

                    <button type="submit" class="cta-button submit-btn">
                        <i class="fas fa-paper-plane"></i> Submit Expression of Interest
                    </button>
                </form>

                <div id="eoi-success" class="eoi-success" style="display:none;">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>Your expression of interest has been submitted successfully. We'll review your profile and get in touch if a suitable opportunity arises.</p>
                </div>
            </div>
        </section>

        <section id="careers-contact" class="section-alt section-center">
            <h2 class="mb-4">Have Questions?</h2>
            <p class="text-secondary mb-6">Reach out to our HR team for any career-related inquiries.</p>
            <a href="mailto:careers@sapthavarnah.com" class="cta-button nav-link"><i class="fas fa-envelope"></i> careers@sapthavarnah.com</a>
        </section>
    `;
    },

};
