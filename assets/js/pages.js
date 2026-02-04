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

// Render cards grid
const renderCards = (cards, extraClass = '') => cards.map(card => `
    <div class="nm-card uniform-card ${extraClass}">
        ${card.image ? `<div class="card-image nm-inset"><img src="${getImagePath(card.image)}" alt="${card.title}" class="brand-img"></div>` : ''}
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

// Render team cards - Tridel grid-card-wrapper pattern
const renderTeam = (team) => team.map(member => `
    <div class="grid-card-wrapper">
        <div class="grid-card-visual">
            ${member.photo 
                ? `<img src="${getImagePath(member.photo)}" alt="${member.name}" loading="lazy">`
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
                    <a href="#capabilities" class="cta-button nav-link">${content.home.hero.ctaMain} →</a>
                </div>
            </div>
        </section>

        <section id="about">
            <div class="about-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${content.home.about.title}</h4>
                    <p class="mb-4">${content.home.about.desc1}</p>
                    <p class="text-secondary">${content.home.about.desc2}</p>
                    <a href="#about" class="card-link mt-6 nav-link">About SVGT →</a>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="${getImagePath('materials.png')}" alt="Engineering materials" class="brand-img">
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
            <a href="#contact" class="cta-button nav-link">${content.home.closing.cta} →</a>
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
            <a href="#contact" class="cta-button nav-link">Discuss a Marine Project →</a>
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
            <a href="#contact" class="cta-button nav-link">Discuss a Transport Project →</a>
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
            <a href="#contact" class="cta-button nav-link">Discuss an Energy Project →</a>
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
            <a href="#contact" class="cta-button nav-link">Enquire About Construction Systems →</a>
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
    },

    careers: () => {
        return `
        <section id="careers-hero" class="page-hero careers-hero">
            <div class="hero-overlay-content">
                <h1 class="hero-title">Join Our <span class="accent-page">Team</span></h1>
                <p class="hero-subtitle text-secondary">Build the infrastructure that shapes tomorrow</p>
            </div>
        </section>

        <section id="careers-intro">
            <div class="nm-card careers-intro-card">
                <h2 class="mb-4">Expression of Interest</h2>
                <p class="text-secondary mb-4">We're always looking for talented engineers, project managers, and specialists to join our growing team. If you share our vision for building better infrastructure, we'd like to hear from you.</p>
                <p class="text-secondary">SapthaVarnah operates across multiple sectors including marine, transport, energy, and urban infrastructure. We offer opportunities for professionals at all stages of their careers.</p>
            </div>
        </section>

        <section id="job-categories">
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

        <section id="why-join">
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

        <section id="careers-contact" class="section-center">
            <h2 class="mb-4">Have Questions?</h2>
            <p class="text-secondary mb-6">Reach out to our HR team for any career-related inquiries.</p>
            <a href="mailto:careers@sapthavarnah.com" class="cta-button nav-link"><i class="fas fa-envelope"></i> careers@sapthavarnah.com</a>
        </section>
    `;
    },

    // ===== DYNAMIC DETAIL PAGES =====

    // Project Detail Page - /project?id=xxx
    projectDetail: (id, params) => {
        const content = getContent();
        
        // Sample project data (can be extended from content.js or admin)
        const projects = {
            'marine-terminal': {
                title: 'Marine Terminal Development',
                category: 'Marine Infrastructure',
                image: 'materials.png',
                description: 'A comprehensive marine terminal development project featuring state-of-the-art berthing facilities, cargo handling systems, and integrated logistics.',
                details: [
                    'Deep-water berths capable of handling Panamax vessels',
                    'Modern container handling equipment',
                    'Integrated road and rail connectivity',
                    'Environmental protection measures'
                ],
                location: 'Chennai, India',
                year: '2023-2025',
                client: 'Chennai Port Authority'
            },
            'highway-bridge': {
                title: 'National Highway Bridge',
                category: 'Transport Infrastructure',
                image: 'transport.png',
                description: 'Design and construction of a major highway bridge spanning 1.2km with innovative precast concrete technology.',
                details: [
                    'Segmental precast construction',
                    'Seismic-resistant design',
                    '6-lane carriageway',
                    'Integrated lighting and safety systems'
                ],
                location: 'Gujarat, India',
                year: '2022-2024',
                client: 'NHAI'
            },
            'solar-farm': {
                title: 'Solar Energy Farm',
                category: 'Energy Infrastructure',
                image: 'energy.png',
                description: '100MW solar power installation with grid integration and energy storage systems.',
                details: [
                    'Bifacial solar panels',
                    'Battery energy storage system',
                    'Smart grid integration',
                    'Remote monitoring capabilities'
                ],
                location: 'Rajasthan, India',
                year: '2024',
                client: 'State Energy Corporation'
            }
        };

        const project = projects[id] || {
            title: 'Project Not Found',
            category: 'Unknown',
            description: 'The requested project could not be found.',
            details: [],
            location: 'N/A',
            year: 'N/A',
            client: 'N/A'
        };

        return `
        <section class="page-hero detail-hero">
            <div class="hero-overlay-content">
                <span class="detail-category">${project.category}</span>
                <h1 class="hero-title">${project.title}</h1>
            </div>
        </section>

        <section id="project-detail">
            <div class="detail-grid">
                <div class="detail-main">
                    ${project.image ? `<div class="nm-card detail-image nm-inset"><img src="${getImagePath(project.image)}" alt="${project.title}"></div>` : ''}
                    
                    <div class="nm-card">
                        <h2 class="mb-4">Project Overview</h2>
                        <p class="text-secondary mb-6">${project.description}</p>
                        
                        ${project.details.length > 0 ? `
                        <h4 class="mb-4">Key Features</h4>
                        <ul class="detail-features">
                            ${project.details.map(d => `<li><i class="fas fa-check"></i> ${d}</li>`).join('')}
                        </ul>
                        ` : ''}
                    </div>
                </div>
                
                <aside class="detail-sidebar">
                    <div class="nm-card">
                        <h4 class="text-secondary mb-4">Project Info</h4>
                        <div class="info-item">
                            <span class="info-label">Location</span>
                            <span class="info-value">${project.location}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Timeline</span>
                            <span class="info-value">${project.year}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Client</span>
                            <span class="info-value">${project.client}</span>
                        </div>
                    </div>
                    
                    <div class="nm-card mt-4">
                        <h4 class="mb-4">Interested in Similar Projects?</h4>
                        <a href="#contact" class="cta-button nav-link">Contact Us →</a>
                    </div>
                </aside>
            </div>
        </section>

        <section id="back-link" class="section-center">
            <a href="#capabilities" class="cta-button secondary nav-link"><i class="fas fa-arrow-left"></i> Back to Capabilities</a>
        </section>
    `;
    },

    // Service Detail Page - /service?id=xxx
    serviceDetail: (id, params) => {
        const services = {
            'structural-engineering': {
                title: 'Structural Engineering',
                category: 'Engineering Services',
                icon: 'fas fa-building',
                description: 'Comprehensive structural engineering services for buildings, bridges, and industrial facilities.',
                features: [
                    'Structural analysis and design',
                    'Foundation engineering',
                    'Earthquake-resistant design',
                    'Progressive collapse analysis',
                    'Structural health monitoring'
                ],
                sectors: ['Marine', 'Transport', 'Energy', 'Urban']
            },
            'project-management': {
                title: 'Project Management',
                category: 'Management Services',
                icon: 'fas fa-project-diagram',
                description: 'End-to-end project management services ensuring on-time, on-budget delivery.',
                features: [
                    'Planning and scheduling',
                    'Cost management',
                    'Risk assessment',
                    'Quality control',
                    'Stakeholder coordination'
                ],
                sectors: ['All Sectors']
            },
            'environmental-consulting': {
                title: 'Environmental Consulting',
                category: 'Sustainability Services',
                icon: 'fas fa-leaf',
                description: 'Environmental impact assessment and sustainable design solutions.',
                features: [
                    'Environmental Impact Assessment (EIA)',
                    'Green building certification',
                    'Carbon footprint analysis',
                    'Sustainable materials selection',
                    'Compliance monitoring'
                ],
                sectors: ['Marine', 'Energy', 'Urban']
            }
        };

        const service = services[id] || {
            title: 'Service Not Found',
            category: 'Unknown',
            icon: 'fas fa-question',
            description: 'The requested service could not be found.',
            features: [],
            sectors: []
        };

        return `
        <section class="page-hero detail-hero">
            <div class="hero-overlay-content">
                <span class="detail-category">${service.category}</span>
                <h1 class="hero-title"><i class="${service.icon}"></i> ${service.title}</h1>
            </div>
        </section>

        <section id="service-detail">
            <div class="detail-content-wide">
                <div class="nm-card">
                    <h2 class="mb-4">Service Overview</h2>
                    <p class="text-secondary mb-6">${service.description}</p>
                    
                    ${service.features.length > 0 ? `
                    <h4 class="mb-4">What We Offer</h4>
                    <div class="features-grid">
                        ${service.features.map(f => `
                            <div class="feature-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${f}</span>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                
                <div class="nm-card mt-4">
                    <h4 class="mb-4">Applicable Sectors</h4>
                    <div class="sector-tags">
                        ${service.sectors.map(s => `<span class="sector-tag">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        </section>

        <section id="service-cta" class="section-center">
            <h2 class="mb-4">Need This Service?</h2>
            <p class="text-secondary mb-6">Let's discuss how we can help with your project.</p>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>

        <section id="back-link" class="section-center">
            <a href="#capabilities" class="cta-button secondary nav-link"><i class="fas fa-arrow-left"></i> Back to Capabilities</a>
        </section>
    `;
    },

    // Team Detail Page - /team?id=xxx
    teamDetail: (id, params) => {
        const content = getContent();
        
        // Get team from content or use sample
        const teamData = window.TEAM_DATA || content.about?.team || [];
        
        // Find member by slug
        const member = teamData.find(m => 
            m.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === id
        ) || {
            name: 'Team Member Not Found',
            role: 'Unknown',
            desc: 'The requested team member could not be found.',
            bio: '',
            photo: ''
        };

        return `
        <section class="page-hero team-detail-hero">
            <div class="hero-overlay-content">
                <h1 class="hero-title">Team</h1>
            </div>
        </section>

        <section id="team-detail">
            <div class="team-detail-card nm-card">
                <div class="team-detail-photo">
                    ${member.photo 
                        ? `<img src="${member.photo}" alt="${member.name}">`
                        : `<div class="team-avatar-xl">${member.name.charAt(0)}</div>`
                    }
                </div>
                <div class="team-detail-info">
                    <h1>${member.name}</h1>
                    <h3 class="text-accent">${member.role}</h3>
                    <p class="text-secondary mt-4">${member.desc}</p>
                    ${member.bio ? `<p class="mt-4">${member.bio}</p>` : ''}
                    
                    ${member.linkedin || member.email ? `
                    <div class="team-contact mt-6">
                        ${member.email ? `<a href="mailto:${member.email}" class="contact-link"><i class="fas fa-envelope"></i> Email</a>` : ''}
                        ${member.linkedin ? `<a href="${member.linkedin}" class="contact-link" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>` : ''}
                    </div>
                    ` : ''}
                </div>
            </div>
        </section>

        <section id="back-link" class="section-center">
            <a href="#about" class="cta-button secondary nav-link"><i class="fas fa-arrow-left"></i> Back to About</a>
        </section>
    `;
    }
};
