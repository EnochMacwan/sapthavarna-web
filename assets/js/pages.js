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

        <section id="leadership">
            <div class="section-label mb-4">Our People</div>
            <h2 class="mb-6">Leadership Team</h2>
            <div class="cards-grid team-grid">
                ${renderTeam(window.TEAM_DATA || content.about.leadershipTeam)}
            </div>
        </section>

        <section id="culture" class="section-alt">
            <div class="section-label mb-4">Our Values</div>
            <h2 class="mb-6">${content.about.culture.title}</h2>
            <p class="mb-4" style="max-width: 800px;">${content.about.culture.desc1}</p>
            <p class="text-secondary mb-6" style="max-width: 800px;">${content.about.culture.desc2}</p>
            <ul class="value-tags">
                ${renderTags(content.about.culture.values)}
            </ul>
        </section>

        <section id="careers" class="section-center">
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

        <section id="sectors">
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
    `;
    },

    marine: () => {
        const content = getContent();
        return `
        <section id="marine-hero" class="subpage-hero marine-bg">
            <div class="section-label mb-4">${content.marine.hero.label}</div>
            <h1>${content.marine.hero.title.replace("Dynamic", "<span class='accent-gfrg'>Dynamic</span>")}</h1>
        </section>

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

        <section id="marine-cta" class="section-alt section-center">
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

        <section id="transport-cta" class="section-alt section-center">
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

        <section id="energy-cta" class="section-alt section-center">
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

        <section id="pillars">
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

        <section id="practices" class="section-alt">
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
    `;
    },

    contact: () => {
        const content = getContent();
        return `
        <section id="contact-hero" class="subpage-hero contact-hero-bg">
            <div class="section-label mb-4">${content.contact.hero.label}</div>
            <h1>Connect with <span class="accent-gfrg">Our Team</span></h1>
        </section>

        <section id="contact-details" class="section-alt">
            <div class="contact-grid">
                <div class="nm-card contact-main-card">
                    <div class="section-label mb-4">${content.contact.enquiry.label}</div>
                    <h2 class="mb-6">${content.contact.enquiry.heading.replace("infrastructure challenges", "<span class='accent-page'>infrastructure challenges</span>")}</h2>
                    <div class="contact-links-row mt-6">
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">Email</h4>
                            <a href="mailto:${content.contact.enquiry.email}" class="contact-link-item">${content.contact.enquiry.email}</a>
                        </div>
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">LinkedIn</h4>
                            <span class="contact-link-item">${content.contact.enquiry.linkedin}</span>
                        </div>
                    </div>
                </div>

                <div class="nm-card">
                    <div class="section-label mb-4">${content.contact.offices.label}</div>
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
                    <div class="section-label mb-4">${content.contact.regions.label}</div>
                    <p class="text-secondary mb-4">${content.contact.regions.desc}</p>
                    <ul class="regions-tags">
                        ${content.contact.regions.items.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>

                <div class="nm-card">
                    <div class="section-label mb-4">${content.contact.media.label}</div>
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
