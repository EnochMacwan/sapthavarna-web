(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const C={home:{projects:[],testimonials:[]},sectionVisibility:{home:{hero:!0,stats:!1,clientLogos:!1,about:!0,capabilities:!0,projects:!1,process:!0,testimonials:!1,trustStrip:!1,closing:!0},about:{hero:!0,company:!0,timeline:!1,leadership:!0,certifications:!1,partners:!1,culture:!0,careers:!0},capabilities:{hero:!0,overview:!0,differentiators:!0,sectors:!0,methodology:!0,cta:!0},marine:{hero:!0,sectorStats:!0,intro:!0,services:!0,featuredProject:!1,whyChooseUs:!1,cta:!0},transport:{hero:!0,sectorStats:!0,intro:!0,services:!0,featuredProject:!1,whyChooseUs:!0,cta:!0},energy:{hero:!0,sectorStats:!0,intro:!0,services:!0,featuredProject:!1,whyChooseUs:!0,cta:!0},systems:{hero:!0,sectorStats:!0,intro:!0,technologies:!0,benefits:!0,featuredProject:!1,whyChooseUs:!0,cta:!0},sustainability:{hero:!0,plan:!0,metrics:!0,pillars:!0,practices:!0,cta:!0},contact:{hero:!0,form:!0,faq:!1},careers:{hero:!0,intro:!0,categories:!0,whyJoin:!0,eoiForm:!0,contact:!0}}},R="/sapthavarna-web/".replace(/\/$/,"")||"",$=e=>e?e.startsWith("http")||e.startsWith("data:")?e:`${R}/${e}`:"",l=()=>{try{const e=localStorage.getItem("siteContent");return e?JSON.parse(e):C}catch{return C}},n=(e,s)=>{const a=l();return!a.sectionVisibility||!a.sectionVisibility[e]?!0:a.sectionVisibility[e][s]!==!1};window.addEventListener("storage",e=>{e.key==="siteContent"&&window.location.reload()});const k=e=>e.map((s,a)=>`
    <div class="nm-card service-card">
        <div class="service-number">${String(a+1).padStart(2,"0")}</div>
        <h3>${s.title}</h3>
        <p class="text-secondary">${s.desc}</p>
    </div>
`).join(""),D=e=>e.map(s=>`
    <div class="grid-card-wrapper">
        <div class="grid-card-visual">
            ${s.photo?`<img src="${s.photo}" alt="${s.name}" loading="lazy">`:`<div class="team-avatar-large">${s.name.charAt(0)}</div>`}
        </div>
        <div class="grid-content-outside">
            <h3>${s.name}</h3>
            <h4>${s.role}</h4>
            <p>${s.desc}</p>
        </div>
    </div>
`).join(""),V=e=>e.map(s=>`<li>${s}</li>`).join(""),G=e=>!e||!e.length?"":`
    <section class="section-alt">
        <div class="stats-bar">
            ${e.map(s=>`
                <div class="stat-item nm-card">
                    <div class="stat-icon"><i class="fas ${s.icon}"></i></div>
                    <div class="stat-value">${s.value}</div>
                    <div class="stat-label">${s.label}</div>
                </div>
            `).join("")}
        </div>
    </section>`,H=e=>!e||!e.length?"":`
    <section class="section-center">
        <div class="section-label mb-4">Trusted By</div>
        <div class="logo-grid">
            ${e.map(s=>`
                <div class="logo-grid-item">
                    ${s.logo?`<img src="${$(s.logo)}" alt="${s.name}" style="max-height:40px;">`:`<span class="logo-placeholder">${s.name}</span>`}
                </div>
            `).join("")}
        </div>
    </section>`,N=e=>!e||!e.length?"":`
    <section class="section-alt">
        <div class="section-label mb-4">What Clients Say</div>
        <h2 class="mb-6" style="text-align:center;">Client Testimonials</h2>
        <div class="testimonials-grid">
            ${e.map(s=>`
                <div class="testimonial-card nm-card">
                    <p class="testimonial-quote">${s.quote}</p>
                    <div class="testimonial-author">
                        <div class="avatar-placeholder">${s.name.charAt(0)==="["?"?":s.name.charAt(0)}</div>
                        <div>
                            <div class="testimonial-name">${s.name}</div>
                            <div class="testimonial-role">${s.role}, ${s.company}</div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    </section>`,v=(e,s)=>e?`
    <div class="project-card nm-card" style="padding:0;overflow:hidden;">
        <div class="project-card-visual ${s?`${s}-gradient`:""}">
            <i class="fas fa-hard-hat"></i>
        </div>
        <div class="project-card-content">
            <h3>${e.title}</h3>
            <div class="project-location"><i class="fas fa-map-marker-alt"></i> ${e.location}</div>
            <p>${e.desc}</p>
            ${e.stats?`
            <div class="project-stats">
                ${e.stats.map(t=>`
                    <div class="project-stat-item">
                        <div class="project-stat-value">${t.value}</div>
                        <div class="project-stat-label">${t.label}</div>
                    </div>
                `).join("")}
            </div>`:""}
        </div>
    </div>`:"",F=e=>e?`
    <section style="padding:0;">
        <div class="trust-strip">
            <h3>${e.title}</h3>
            <div class="trust-badges">
                ${e.badges.map(s=>`
                    <div class="trust-badge"><i class="fas ${s.icon}"></i> ${s.label}</div>
                `).join("")}
            </div>
        </div>
    </section>`:"",L=e=>e?`
    <section>
        <div class="section-label mb-4">Our Process</div>
        <h2 class="mb-6" style="text-align:center;">${e.title}</h2>
        <div class="process-grid">
            ${e.steps.map((s,a)=>`
                <div class="process-step nm-card">
                    <div class="process-icon"><i class="fas ${s.icon}"></i></div>
                    <div class="process-number">Step ${String(a+1).padStart(2,"0")}</div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                </div>
            `).join("")}
        </div>
    </section>`:"",z=e=>!e||!e.length?"":`
    <section>
        <div class="section-label mb-4">Common Questions</div>
        <h2 class="mb-6" style="text-align:center;">Frequently Asked Questions</h2>
        <div class="faq-list">
            ${e.map(s=>`
                <div class="faq-item">
                    <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                        <span>${s.question}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">${s.answer}</div>
                </div>
            `).join("")}
        </div>
    </section>`,b=e=>!e||!e.length?"":`
    <section class="section-alt section-center">
        <div class="sector-stats">
            ${e.map(s=>`
                <div class="sector-stat">
                    <div class="sector-stat-value">${s.value}</div>
                    <div class="sector-stat-label">${s.label}</div>
                </div>
            `).join("")}
        </div>
    </section>`,g=e=>!e||!e.length?"":`
    <section class="section-alt">
        <div class="section-label mb-4">Why SVGT</div>
        <h2 class="mb-6" style="text-align:center;">Why Choose Us</h2>
        <div class="why-grid">
            ${e.map(s=>`
                <div class="nm-card why-card">
                    <div class="diff-icon"><i class="fas ${s.icon}"></i></div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                </div>
            `).join("")}
        </div>
    </section>`,c={home:()=>{const e=l();return`
        ${n("home","hero")?`<section id="hero" class="hero">
            <canvas id="spectrum-canvas"></canvas>
            <div class="hero-overlay-content">
                <div class="section-label mb-4">SapthaVarnah Geo Technologies</div>
                <h1 class="hero-title mb-6">${e.home.hero.title.replace("Full Spectrum","<span class='accent-page'>Full Spectrum</span>")}</h1>
                <p class="hero-subtitle">${e.home.hero.subtitle}</p>
                <div class="hero-actions">
                    <a href="#capabilities" class="cta-button nav-link">${e.home.hero.ctaMain} →</a>
                    <a href="#contact" class="cta-button secondary nav-link">Get in Touch</a>
                </div>
            </div>
        </section>`:""}

        ${n("home","stats")?G(e.home.stats):""}

        ${n("home","clientLogos")?H(e.home.clientLogos):""}

        ${n("home","about")?`<section id="about" class="section-alt">
            <div class="section-label mb-4">Who We Are</div>
            <div class="about-grid">
                <div>
                    <h2 class="mb-6">${e.home.about.title}</h2>
                    <p class="mb-4">${e.home.about.desc1}</p>
                    <p class="text-secondary mb-6">${e.home.about.desc2}</p>
                    <a href="#about" class="cta-button secondary nav-link">About SVGT →</a>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="${$("materials.png")}" alt="Engineering materials" class="brand-img">
                </div>
            </div>
        </section>`:""}

        ${n("home","capabilities")?`<section id="capabilities">
            <div class="section-label mb-4">What We Do</div>
            <h2 class="mb-6">Core Capabilities</h2>
            <div class="cards-grid">
                ${e.home.capabilities.map((s,a)=>`
                    <a href="${s.link}" class="nm-card sector-link-card nav-link">
                        <div class="service-number">${String(a+1).padStart(2,"0")}</div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary mt-4">${s.desc}</p>
                        <span class="card-link mt-4">Explore →</span>
                    </a>
                `).join("")}
            </div>
        </section>`:""}

        ${n("home","projects")&&e.home.projects?`
        <section class="section-alt">
            <div class="section-label mb-4">Our Work</div>
            <h2 class="mb-6" style="text-align:center;">Featured Projects</h2>
            <div class="projects-grid">
                ${e.home.projects.map(s=>v(s,s.sector)).join("")}
            </div>
        </section>`:""}

        ${n("home","process")?L(e.home.process):""}

        ${n("home","testimonials")?N(e.home.testimonials):""}

        ${n("home","trustStrip")?F(e.home.trustStrip):""}

        ${n("home","closing")?`<section id="closing" class="section-alt section-center">
            <h2 class="mb-6">${e.home.closing.title}</h2>
            <a href="#contact" class="cta-button nav-link">${e.home.closing.cta} →</a>
        </section>`:""}
    `},about:()=>{const e=l();return`
        ${n("about","hero")?`<section id="about-hero" class="subpage-hero">
            <div class="section-label mb-4">${e.about.hero.label}</div>
            <h1>${e.about.hero.title.replace("Earth","<span class='accent-gfrg'>Earth</span>")}</h1>
        </section>`:""}

        ${n("about","company")?`<section id="company" class="section-alt">
            <div class="section-label mb-4">Our Story</div>
            <h2 class="mb-6">${e.about.company.title}</h2>
            <div style="max-width: 900px;">
                <p class="mb-4">${e.about.company.desc1}</p>
                <p class="mb-4">${e.about.company.desc2}</p>
                <p class="text-secondary">${e.about.company.desc3}</p>
            </div>
        </section>`:""}

        ${n("about","timeline")&&e.about.timeline?`
        <section>
            <div class="section-label mb-4">Our Journey</div>
            <h2 class="mb-6" style="text-align:center;">Key Milestones</h2>
            <div class="timeline">
                ${e.about.timeline.map(s=>`
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-year">${s.year}</div>
                        <div class="timeline-card">
                            <h3>${s.title}</h3>
                            <p>${s.desc}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("about","leadership")?`<section id="leadership" class="section-alt">
            <div class="section-label mb-4">Our People</div>
            <h2 class="mb-6">Leadership Team</h2>
            <div class="cards-grid team-grid">
                ${D(window.TEAM_DATA||e.about.leadershipTeam)}
            </div>
        </section>`:""}

        ${n("about","certifications")&&e.about.certifications?`
        <section>
            <div class="section-label mb-4">Credentials</div>
            <h2 class="mb-6" style="text-align:center;">Certifications & Standards</h2>
            <div class="certs-grid">
                ${e.about.certifications.map(s=>`
                    <div class="cert-card nm-card">
                        <i class="fas ${s.icon}"></i>
                        <h4>${s.title}</h4>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("about","partners")&&e.about.partners?`
        <section class="section-alt">
            <div class="section-label mb-4">Associations</div>
            <h2 class="mb-6" style="text-align:center;">Partners & Associations</h2>
            <div class="partners-grid">
                ${e.about.partners.map(s=>`
                    <div class="partner-card">
                        ${s.logo?`<img src="${$(s.logo)}" alt="${s.name}" style="max-height:40px;">`:`<span>${s.name}</span>`}
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("about","culture")?`<section id="culture">
            <div class="section-label mb-4">Our Values</div>
            <h2 class="mb-6">${e.about.culture.title}</h2>
            <p class="mb-4" style="max-width: 800px;">${e.about.culture.desc1}</p>
            <p class="text-secondary mb-6" style="max-width: 800px;">${e.about.culture.desc2}</p>
            <ul class="value-tags">
                ${V(e.about.culture.values)}
            </ul>
        </section>`:""}

        ${n("about","careers")?`<section id="careers" class="section-alt section-center">
            <h2 class="mb-4">${e.about.careers.title}</h2>
            <p class="text-secondary mb-6" style="max-width: 600px; margin-left: auto; margin-right: auto;">${e.about.careers.desc}</p>
            <a href="#careers" class="cta-button nav-link">${e.about.careers.ctaText} →</a>
        </section>`:""}
    `},capabilities:()=>{const e=l();return`
        ${n("capabilities","hero")?`<section id="cap-hero" class="subpage-hero">
            <div class="section-label mb-4">${e.capabilities.hero.label}</div>
            <h1>Integrated <span class="accent-gfrg">Engineering</span> Solutions</h1>
        </section>`:""}

        ${n("capabilities","overview")?`<section id="overview" class="section-alt">
            <p class="lead-text">${e.capabilities.overview.desc}</p>
        </section>`:""}

        ${n("capabilities","differentiators")&&e.capabilities.differentiators?`
        <section>
            <div class="section-label mb-4">Our Edge</div>
            <h2 class="mb-6" style="text-align:center;">Why SVGT</h2>
            <div class="cards-grid">
                ${e.capabilities.differentiators.map(s=>`
                    <div class="nm-card">
                        <div class="diff-icon"><i class="fas ${s.icon}"></i></div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary mt-4">${s.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("capabilities","sectors")?`<section id="sectors" class="section-alt">
            <div class="section-label mb-4">Our Sectors</div>
            <h2 class="mb-6">Explore Our Capabilities</h2>
            <div class="cards-grid sector-cards">
                ${e.capabilities.sectors.map(s=>`
                    <a href="${s.link}" class="nm-card sector-link-card nav-link">
                        <div class="service-number">${s.label}</div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary mt-4">${s.desc}</p>
                        <span class="card-btn mt-4">Explore →</span>
                    </a>
                `).join("")}
            </div>
        </section>`:""}

        ${n("capabilities","methodology")?L(e.capabilities.methodology):""}

        ${n("capabilities","cta")?`<section class="section-center">
            <h2 class="mb-6">Ready to discuss your project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>`:""}
    `},marine:()=>{const e=l();return`
        ${n("marine","hero")?`<section id="marine-hero" class="subpage-hero marine-bg">
            <div class="section-label mb-4">${e.marine.hero.label}</div>
            <h1>${e.marine.hero.title.replace("Dynamic","<span class='accent-gfrg'>Dynamic</span>")}</h1>
        </section>`:""}

        ${n("marine","sectorStats")?b(e.marine.sectorStats):""}

        ${n("marine","intro")?`<section id="marine-intro" class="section-alt">
            <p class="lead-text">${e.marine.intro.desc}</p>
        </section>`:""}

        ${n("marine","services")?`<section id="marine-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${k(e.marine.services)}
            </div>
        </section>`:""}

        ${n("marine","featuredProject")&&e.marine.featuredProject?`
        <section class="section-alt">
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${v(e.marine.featuredProject)}
            </div>
        </section>`:""}

        ${n("marine","whyChooseUs")?g(e.marine.whyChooseUs):""}

        ${n("marine","cta")?`<section id="marine-cta" class="section-center">
            <h2 class="mb-6">Ready to discuss your marine project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>`:""}
    `},transport:()=>{const e=l();return`
        ${n("transport","hero")?`<section id="transport-hero" class="subpage-hero transport-bg">
            <div class="section-label mb-4">${e.transport.hero.label}</div>
            <h1>${e.transport.hero.title.replace("Growth","<span class='accent-gfrg'>Growth</span>")}</h1>
        </section>`:""}

        ${n("transport","sectorStats")?b(e.transport.sectorStats):""}

        ${n("transport","intro")?`<section id="transport-intro" class="section-alt">
            <p class="lead-text">${e.transport.intro.desc}</p>
        </section>`:""}

        ${n("transport","services")?`<section id="transport-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${k(e.transport.services)}
            </div>
        </section>`:""}

        ${n("transport","featuredProject")&&e.transport.featuredProject?`
        <section class="section-alt">
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${v(e.transport.featuredProject,"transport")}
            </div>
        </section>`:""}

        ${n("transport","whyChooseUs")?g(e.transport.whyChooseUs):""}

        ${n("transport","cta")?`<section id="transport-cta" class="section-center">
            <h2 class="mb-6">Ready to discuss your transport project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>`:""}
    `},energy:()=>{const e=l();return`
        ${n("energy","hero")?`<section id="energy-hero" class="subpage-hero energy-bg">
            <div class="section-label mb-4">${e.energy.hero.label}</div>
            <h1>${e.energy.hero.title.replace("Transition","<span class='accent-gfrg'>Transition</span>")}</h1>
        </section>`:""}

        ${n("energy","sectorStats")?b(e.energy.sectorStats):""}

        ${n("energy","intro")?`<section id="energy-intro" class="section-alt">
            <p class="lead-text">${e.energy.intro.desc}</p>
        </section>`:""}

        ${n("energy","services")?`<section id="energy-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${k(e.energy.services)}
            </div>
        </section>`:""}

        ${n("energy","featuredProject")&&e.energy.featuredProject?`
        <section class="section-alt">
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${v(e.energy.featuredProject,"energy")}
            </div>
        </section>`:""}

        ${n("energy","whyChooseUs")?g(e.energy.whyChooseUs):""}

        ${n("energy","cta")?`<section id="energy-cta" class="section-center">
            <h2 class="mb-6">Ready to discuss your energy project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>`:""}
    `},systems:()=>{const e=l();return`
        ${n("systems","hero")?`<section id="systems-hero" class="subpage-hero systems-bg">
            <div class="section-label mb-4">${e.systems.hero.label}</div>
            <h1>${e.systems.hero.title.replace("Technologies","<span class='accent-gfrg'>Technologies</span>")}</h1>
        </section>`:""}

        ${n("systems","sectorStats")?b(e.systems.sectorStats):""}

        ${n("systems","intro")?`<section id="systems-intro" class="section-alt">
            <p class="lead-text">${e.systems.intro.desc}</p>
        </section>`:""}

        ${n("systems","technologies")?`<section id="technologies">
            <div class="section-label mb-4">Our Solutions</div>
            <h2 class="mb-6">Our Technologies</h2>
            <div class="cards-grid">
                ${e.systems.technologies.map((s,a)=>`
                    <div class="nm-card">
                        ${s.image?`<div class="card-image nm-inset mb-4"><img src="${$(s.image)}" alt="${s.title}" class="brand-img" style="height: 200px;"></div>`:""}
                        <div class="service-number">${String(a+1).padStart(2,"0")}</div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary mt-4">${s.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("systems","benefits")?`<section id="benefits" class="section-alt">
            <div class="nm-card">
                <div class="section-label mb-4">Advantages</div>
                <h3 class="mb-6">Key Benefits</h3>
                <ul class="benefits-list">
                    ${e.systems.benefits.map(s=>`<li>✓ ${s}</li>`).join("")}
                </ul>
            </div>
        </section>`:""}

        ${n("systems","featuredProject")&&e.systems.featuredProject?`
        <section>
            <div class="section-label mb-4">Project Spotlight</div>
            <h2 class="mb-6" style="text-align:center;">Featured Project</h2>
            <div style="max-width:600px;margin:0 auto;">
                ${v(e.systems.featuredProject,"systems")}
            </div>
        </section>`:""}

        ${n("systems","whyChooseUs")?g(e.systems.whyChooseUs):""}

        ${n("systems","cta")?`<section id="systems-cta" class="section-center">
            <h2 class="mb-6">Interested in modern construction systems?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>`:""}
    `},sustainability:()=>{const e=l();return`
        ${n("sustainability","hero")?`<section id="sustain-hero" class="subpage-hero">
            <div class="section-label mb-4">${e.sustainability.hero.label}</div>
            <h1>${e.sustainability.hero.title.replace("Responsibly","<span class='accent-gfrg'>Responsibly</span>")}</h1>
        </section>`:""}

        ${n("sustainability","plan")?`<section id="plan" class="section-alt">
            <div class="section-label mb-4">Our Commitment</div>
            <h2 class="mb-4">${e.sustainability.plan.title}</h2>
            <p class="lead-text">${e.sustainability.plan.desc}</p>
        </section>`:""}

        ${n("sustainability","metrics")&&e.sustainability.metrics?`
        <section class="section-center">
            <div class="sector-stats">
                ${e.sustainability.metrics.map(s=>`
                    <div class="sector-stat">
                        <div style="font-size:1.5rem;color:var(--accent-marine);margin-bottom:8px;"><i class="fas ${s.icon}"></i></div>
                        <div class="sector-stat-value">${s.value}</div>
                        <div class="sector-stat-label">${s.label}</div>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("sustainability","pillars")?`<section id="pillars" class="section-alt">
            <div class="section-label mb-4">Foundation</div>
            <h2 class="mb-6">Our Pillars</h2>
            <div class="cards-grid">
                ${e.sustainability.pillars.map((s,a)=>`
                    <div class="nm-card cap-card">
                        <div class="service-number">${String(a+1).padStart(2,"0")}</div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary">${s.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("sustainability","practices")?`<section id="practices">
            <div class="section-label mb-4">In Action</div>
            <h2 class="mb-6">Key Practices</h2>
            <div class="cards-grid">
                ${e.sustainability.practices.map((s,a)=>`
                    <div class="nm-card service-card">
                        <div class="service-number">${String(a+1).padStart(2,"0")}</div>
                        <h3>${s.title}</h3>
                        <p class="text-secondary">${s.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>`:""}

        ${n("sustainability","cta")?`<section class="section-alt section-center">
            <h2 class="mb-6">Partner with us on sustainable infrastructure</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>`:""}
    `},contact:()=>{const e=l();return`
        ${n("contact","hero")?`<section id="contact-hero" class="subpage-hero contact-hero-bg">
            <div class="section-label mb-4">${e.contact.hero.label}</div>
            <h1>Let's Build <span class="accent-gfrg">Together</span></h1>
            <p class="hero-subtitle" style="color: rgba(255,255,255,0.8); max-width: 600px;">Have a project in mind? We'd love to hear about it. Reach out and let's explore how we can help.</p>
        </section>`:""}

        ${n("contact","form")?`<section id="contact-form-section" class="section-alt">
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
                    ${e.contact.responseGuarantee?`
                    <div class="response-guarantee">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>${e.contact.responseGuarantee.title}</h4>
                            <p>${e.contact.responseGuarantee.desc}</p>
                        </div>
                    </div>`:""}

                    <div class="nm-card contact-info-card">
                        <div class="contact-info-item">
                            <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
                            <div>
                                <h4>Email Us</h4>
                                <a href="mailto:${e.contact.enquiry.email}" class="contact-link-item">${e.contact.enquiry.email}</a>
                            </div>
                        </div>
                        ${e.contact.phone?`
                        <div class="contact-info-item">
                            <div class="contact-info-icon"><i class="fas fa-phone"></i></div>
                            <div>
                                <h4>Call Us</h4>
                                <a href="tel:${e.contact.phone.replace(/\s/g,"")}" class="contact-link-item">${e.contact.phone}</a>
                            </div>
                        </div>`:""}
                        <div class="contact-info-item">
                            <div class="contact-info-icon"><i class="fab fa-linkedin"></i></div>
                            <div>
                                <h4>LinkedIn</h4>
                                <span class="contact-link-item">${e.contact.enquiry.linkedin}</span>
                            </div>
                        </div>
                    </div>

                    <div class="nm-card">
                        <div class="section-label mb-4">${e.contact.offices.label}</div>
                        <div class="offices-list">
                            ${e.contact.offices.locations.map(s=>`
                                <div class="office-item">
                                    <div class="office-icon"><i class="fas fa-map-marker-alt"></i></div>
                                    <div>
                                        <strong>${s.country}</strong> · ${s.city}
                                        <span class="text-secondary" style="display:block; font-size: 0.85rem;">${s.type}</span>
                                        <span class="text-secondary" style="display:block; font-size: 0.85rem;">${s.address}</span>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="nm-card">
                        <div class="section-label mb-4">${e.contact.regions.label}</div>
                        <ul class="regions-tags">
                            ${e.contact.regions.items.map(s=>`<li>${s}</li>`).join("")}
                        </ul>
                    </div>

                    <div class="nm-card">
                        <div class="section-label mb-4">${e.contact.media.label}</div>
                        <p class="text-secondary mb-4" style="font-size: 0.9rem;">${e.contact.media.desc}</p>
                        <a href="mailto:${e.contact.media.email}" class="contact-link-item"><i class="fas fa-envelope" style="margin-right: 6px;"></i>${e.contact.media.email}</a>
                    </div>
                </div>
            </div>
        </section>`:""}

        ${n("contact","faq")?z(e.contact.faq):""}
    `},careers:()=>`
        ${n("careers","hero")?`<section id="careers-hero" class="page-hero careers-hero">
            <div class="hero-overlay-content">
                <div class="section-label mb-4" style="color: var(--accent-gfrg);">Careers</div>
                <h1 class="hero-title">Join Our <span class="accent-page">Team</span></h1>
                <p class="hero-subtitle">Build the infrastructure that shapes tomorrow</p>
            </div>
        </section>`:""}

        ${n("careers","intro")?`<section id="careers-intro" class="section-alt">
            <div class="nm-card careers-intro-card">
                <div class="section-label mb-4">Opportunities</div>
                <h2 class="mb-4">Expression of Interest</h2>
                <p class="text-secondary mb-4">We're always looking for talented engineers, project managers, and specialists to join our growing team. If you share our vision for building better infrastructure, we'd like to hear from you.</p>
                <p class="text-secondary">SapthaVarnah operates across multiple sectors including marine, transport, energy, and urban infrastructure. We offer opportunities for professionals at all stages of their careers.</p>
            </div>
        </section>`:""}

        ${n("careers","categories")?`<section id="job-categories">
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
        </section>`:""}

        ${n("careers","whyJoin")?`<section id="why-join" class="section-alt">
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
        </section>`:""}

        ${n("careers","eoiForm")?`<section id="eoi-form">
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
        </section>`:""}

        ${n("careers","contact")?`<section id="careers-contact" class="section-alt section-center">
            <h2 class="mb-4">Have Questions?</h2>
            <p class="text-secondary mb-6">Reach out to our HR team for any career-related inquiries.</p>
            <a href="mailto:careers@sapthavarnah.com" class="cta-button nav-link"><i class="fas fa-envelope"></i> careers@sapthavarnah.com</a>
        </section>`:""}
    `};class U{constructor(s){this.mountPoint=s,this._routeVersion=0,this.routes={"":c.home,"/":c.home,about:c.about,capabilities:c.capabilities,marine:c.marine,transport:c.transport,energy:c.energy,systems:c.systems,sustainability:c.sustainability,contact:c.contact,careers:c.careers},window.addEventListener("hashchange",()=>this.handleRoute()),document.addEventListener("click",a=>this.interceptClick(a)),this.handleRoute()}interceptClick(s){const a=s.target.closest("a");if(a&&a.classList.contains("nav-link")){const t=a.getAttribute("href");if(t&&t.startsWith("/")&&!t.startsWith("//")){s.preventDefault();const i=t==="/"?"":t.substring(1);window.location.hash=i}}}navigate(s){window.location.hash=s}getHashPath(){let s=window.location.hash.substring(1);return s.startsWith("/")&&(s=s.substring(1)),s}async handleRoute(){const s=++this._routeVersion,a=this.mountPoint;if(window.gsap&&await window.gsap.to(a,{opacity:0,y:10,duration:.3,ease:"power2.in"}),s!==this._routeVersion)return;const t=this.getHashPath(),i=this.routes[t]||c.home;a.innerHTML=i(),window.scrollTo(0,0),window.gsap&&window.gsap.fromTo(a,{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power2.out"}),window.dispatchEvent(new CustomEvent("routeChange",{detail:{path:t}}))}}class _{constructor(s){this.canvas=document.getElementById(s),this.canvas&&(this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.particles=[],this.sparks=[],this.worker={x:0,y:0,tx:0,ty:0,state:"idle",targetIdx:-1,weldTime:0,frame:0},this.mouse={x:-1e3,y:-1e3},this.dpr=Math.min(window.devicePixelRatio||1,3),this.themeColor="#003366",this.accentColor="#C69061",this.active=!0,this._resizeHandler=()=>this.resize(),this._mouseMoveHandler=a=>this.handleMouseMove(a),document.fonts?document.fonts.ready.then(()=>{this.active&&this.init()}):this.init(),this.animate(),window.addEventListener("resize",this._resizeHandler),window.addEventListener("mousemove",this._mouseMoveHandler),window.resetBrandBuild=()=>this.init())}init(){this.resize(),this.particles=[],this.sparks=[];const s=document.createElement("canvas"),a=s.getContext("2d"),t=2,i=1200*t,o=220*t;s.width=i,s.height=o,a.fillStyle="black",a.font=`bold ${100*t}px Inter, system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText("SAPTHAVARNAH",i/2,o/2);const r=a.getImageData(0,0,i,o).data,d=window.innerWidth<768,m=this.dpr>=2,h=d?10*t:m?5*t:6*t,w=this.canvas.width/this.dpr,x=this.canvas.height/this.dpr;for(let p=0;p<o;p+=h)for(let f=0;f<i;f+=h){const q=(p*i+f)*4;if(r[q+3]>128){const S=w/2-i/t/2+f/t,W=x*.82-o/t/2+p/t,E=Math.random()>.4,B=E?8:5;this.particles.push({tx:S,ty:W,x:S+(Math.random()-.5)*50,y:-Math.random()*1500-100,vx:0,vy:5+Math.random()*10,c:E?this.accentColor:this.themeColor,size:B,delay:Math.random()*150,landed:!1,welded:!1,bounce:0})}}this.worker={x:w/2,y:x,tx:w/2,ty:x*.8,state:"idle",targetIdx:-1,weldTime:0,frame:0,scale:1.8}}resize(){if(!this.canvas)return;const s=this.canvas.parentElement;this.canvas.width=s.offsetWidth*this.dpr,this.canvas.height=s.offsetHeight*this.dpr,this.canvas.style.width=s.offsetWidth+"px",this.canvas.style.height=s.offsetHeight+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.ctx.imageSmoothingEnabled=!1}handleMouseMove(s){if(!this.canvas)return;const a=this.canvas.getBoundingClientRect();this.mouse.x=s.clientX-a.left,this.mouse.y=s.clientY-a.top}updateWorker(){if(this.worker.frame++,this.worker.state==="idle"||this.worker.state==="walking"){let s=1/0,a=-1;this.particles.forEach((t,i)=>{if(t.landed&&!t.welded){const o=t.tx-this.worker.x,r=t.ty-this.worker.y,d=o*o+r*r;d<s&&(s=d,a=i)}}),a!==-1&&(this.worker.targetIdx=a,this.worker.tx=this.particles[a].tx,this.worker.ty=this.particles[a].ty,this.worker.state="walking")}if(this.worker.state==="walking"){const s=this.worker.tx-this.worker.x,a=this.worker.ty-(this.worker.y-15);Math.sqrt(s*s+a*a)<10?(this.worker.state="welding",this.worker.weldTime=40):(this.worker.x+=s*.12,this.worker.y+=a*.12)}this.worker.state==="welding"&&(this.worker.weldTime>0?(this.worker.weldTime--,Math.random()>.5&&this.sparks.push({x:this.worker.x+10,y:this.worker.y-15,vx:(Math.random()-.5)*8,vy:-Math.random()*6-2,life:20+Math.random()*20})):(this.worker.targetIdx!==-1&&(this.particles[this.worker.targetIdx].welded=!0),this.worker.state="idle"))}drawWorker(){const{x:s,y:a,state:t,frame:i,scale:o}=this.worker,r=t==="walking"?Math.sin(i*.25)*4:0;this.ctx.save(),this.ctx.translate(s,a+r),this.ctx.scale(o,o),this.ctx.fillStyle="#1a202c",this.ctx.fillRect(-5,-6,3,6),this.ctx.fillRect(2,-6,3,6),this.ctx.fillStyle="#f6ad55",this.ctx.fillRect(-7,-22,14,16),this.ctx.fillStyle="rgba(255,255,255,0.9)",this.ctx.fillRect(-7,-18,14,2),this.ctx.fillRect(-7,-12,14,2),this.ctx.fillStyle="#4a5568",t==="welding"?this.ctx.fillRect(2,-18,12,3):(this.ctx.fillRect(7,-18,3,10),this.ctx.fillRect(-10,-18,3,10)),this.ctx.fillStyle="#f6e05e",this.ctx.beginPath(),this.ctx.arc(0,-25,6,Math.PI,0),this.ctx.fill(),this.ctx.fillRect(-8,-25,16,2),this.ctx.restore()}animate(){if(!this.active||!this.canvas)return;const s=this.canvas.width/this.dpr,a=this.canvas.height/this.dpr;this.ctx.clearRect(0,0,s,a),this.ctx.shadowBlur=0,this.particles.forEach(t=>{if(t.delay>0){t.delay--;return}t.landed?(t.x+=(t.tx-t.x)*.1,t.y+=(t.ty-t.y)*.1,t.bounce>0&&(t.y-=t.bounce,t.bounce*=-.5)):(t.y+=t.vy,t.vy+=.3,t.y>=t.ty&&(t.y=t.ty,t.landed=!0,t.bounce=6)),this.ctx.fillStyle=t.c,this.ctx.beginPath(),this.ctx.roundRect(t.x,t.y,t.size,t.size*.6,1),this.ctx.fill(),t.welded&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.15)",this.ctx.fillRect(t.x,t.y,t.size,t.size*.15))}),this.sparks=this.sparks.filter(t=>{t.x+=t.vx,t.y+=t.vy,t.vy+=.3,t.life--;const i=t.life/40;return this.ctx.fillStyle=`rgba(255, 200, 50, ${i})`,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,2,0,Math.PI*2),this.ctx.fill(),t.life>0}),this.updateWorker(),this.drawWorker(),requestAnimationFrame(()=>this.animate())}destroy(){this.active=!1,window.removeEventListener("resize",this._resizeHandler),window.removeEventListener("mousemove",this._mouseMoveHandler),this.canvas=null}}const A="/sapthavarna-web/".replace(/\/$/,"")||"",j=e=>`${A}/${e}`;function J(){const e=window.NAV_DATA;if(!e)return null;let s="";return(e.megaMenus||[]).forEach(a=>{s+=`<div class="nav-item-has-mega">
            <a href="${a.href}" class="nav-link">${a.label}</a>
            <div class="mega-menu">`,(a.columns||[]).forEach(t=>{s+=`<div class="mega-col"><h5>${t.heading}</h5>`,t.type==="text"?s+=`<p class="mega-desc">${t.text}</p>`:(s+='<ul class="mega-links">',(t.links||[]).forEach(i=>{s+=`<li><a href="${i.href}">${i.text}</a></li>`}),s+="</ul>"),s+="</div>"}),s+="</div></div>"}),(e.standaloneLinks||[]).forEach(a=>{s+=`<a href="${a.href}" class="nav-link">${a.label}</a>`}),s}const P={header:()=>{const s=J()||`
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
                                <p class="mega-desc">Mauritius · India · Serving Africa, Gulf & beyond</p>
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
                    <a href="#contact" class="nav-link">Contact</a>`;return`
    <nav class="pill-nav">
        <div class="nav-container">
            <a href="#" class="logo nav-link" aria-label="SapthaVarnah Home">
                <div class="logo-crop">
                    <img src="${j("logo-master.png")}" alt="SapthaVarnah Logo" class="logo-img-master">
                </div>
                <span class="logo-text">SapthaVarnah</span>
            </a>
            <div class="nav-links-wrapper">
                <div class="nav-links">
                    ${s}
                </div>
            </div>
        </div>
    </nav>
    `},footer:()=>{let e={};try{const s=localStorage.getItem("siteContent");e=(s?JSON.parse(s):null)?.shared||{}}catch{}return`
    <footer class="main-footer">
        <div class="footer-grid">
            <div class="footer-col brand-col">
                <a href="#" class="logo nav-link mb-4">
                    <div class="logo-crop">
                        <img src="${j("logo-master.png")}" alt="SapthaVarnah Logo" class="logo-img-master">
                    </div>
                    <span class="footer-brand-name">SapthaVarnah</span>
                </a>
                <p class="text-secondary footer-tagline">
                    Engineering the full spectrum of the Earth across Marine, Transport, and Energy sectors.
                </p>
                <div class="social-links">
                    <a href="${e.socialLinks?.linkedin||"#"}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${e.socialLinks?.twitter||"#"}" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="${e.socialLinks?.youtube||"#"}" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
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
                    <li><strong>Mauritius</strong> · Port Louis</li>
                    <li><strong>India</strong> · Chennai</li>
                </ul>
                ${e.phone?`<p style="margin-top:12px;font-size:0.9rem;"><i class="fas fa-phone" style="margin-right:6px;color:var(--accent-marine);"></i>${e.phone}</p>`:""}
            </div>
        </div>

        <div class="footer-newsletter">
            <div class="newsletter-inner">
                <h4>${e.newsletter?.title||"Stay Updated"}</h4>
                <p>${e.newsletter?.desc||"Subscribe to receive project updates and industry insights."}</p>
                <form class="newsletter-form" id="newsletter-form" onsubmit="return false;">
                    <input type="email" class="newsletter-input" placeholder="Enter your email" required>
                    <button type="submit" class="newsletter-btn">Subscribe</button>
                </form>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} SapthaVarnah Geo Technologies. All rights reserved.</p>
            <div class="legal-links">
                <a href="${A}/admin.html" class="admin-link">Admin</a>
            </div>
        </div>
    </footer>
    `}};function Y(){let e=document.getElementById("header-mount");e||(e=document.createElement("div"),e.id="header-mount",document.body.insertBefore(e,document.body.firstChild)),e.innerHTML=P.header();let s=document.getElementById("footer-mount");s||(s=document.createElement("div"),s.id="footer-mount",document.body.appendChild(s)),s.innerHTML=P.footer(),O()}function O(){const e=window.location.hash.replace("#","").split("?")[0];document.querySelectorAll(".nav-link").forEach(s=>{const a=s.getAttribute("href")||"",t=a.startsWith("#")?a.substring(1):"";e===t||e===""&&t===""?s.classList.add("active"):s.classList.remove("active")})}let y=null,u=null;const T=()=>{y&&(y.destroy(),y=null),u&&(u.disconnect(),u=null),document.getElementById("spectrum-canvas")&&(y=new _("spectrum-canvas"));const s={threshold:.05,rootMargin:"0px 0px -30px 0px"};u=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(gsap.to(i.target,{opacity:1,y:0,duration:.7,ease:"power2.out",delay:i.target.dataset.delay||0}),u.unobserve(i.target))})},s),document.querySelectorAll(".nm-card, .grid-card-wrapper").forEach(t=>{gsap.set(t,{opacity:0,y:15});const i=t.parentElement;if(i&&(i.classList.contains("cards-grid")||i.classList.contains("careers-grid")||i.classList.contains("benefits-grid")||i.classList.contains("team-grid")||i.classList.contains("stats-bar")||i.classList.contains("process-grid")||i.classList.contains("certs-grid")||i.classList.contains("why-grid")||i.classList.contains("testimonials-grid")||i.classList.contains("projects-grid"))){const r=Array.from(i.children).indexOf(t);t.dataset.delay=(r*.06).toFixed(2)}u.observe(t)}),O()},X=()=>{document.querySelectorAll(".nav-item-has-mega").forEach(s=>{const a=s.querySelectorAll(".mega-links li");s.addEventListener("mouseenter",()=>{gsap.fromTo(a,{opacity:0,x:-5},{opacity:1,x:0,stagger:.05,duration:.4,ease:"power2.out",delay:.1})})}),gsap.from("nav",{y:-10,opacity:0,duration:.8,ease:"power2.out"})};document.addEventListener("DOMContentLoaded",()=>{Y();const e=document.getElementById("app");new U(e),X(),window.addEventListener("routeChange",()=>{T(),I()}),T(),I()});window.handleEOISubmit=e=>{e.preventDefault();const s=e.target,a=new FormData(s),t=Object.fromEntries(a.entries());t.submittedAt=new Date().toISOString();const i=JSON.parse(localStorage.getItem("eoi_submissions")||"[]");i.push(t),localStorage.setItem("eoi_submissions",JSON.stringify(i)),s.style.display="none",document.getElementById("eoi-success").style.display="block",document.getElementById("eoi-success").scrollIntoView({behavior:"smooth",block:"center"})};const I=()=>{const e=document.getElementById("contact-form");e&&(e.addEventListener("submit",s=>{s.preventDefault();let a=!0;const t=document.getElementById("contact-name"),i=document.getElementById("contact-email"),o=document.getElementById("contact-message");if([t,i,o].forEach(h=>{h.classList.remove("valid","invalid"),h.value.trim()?h.classList.add("valid"):(h.classList.add("invalid"),a=!1)}),i.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)&&(i.classList.remove("valid"),i.classList.add("invalid"),a=!1),!a)return;const r={name:t.value,company:document.getElementById("contact-company").value,email:i.value,phone:document.getElementById("contact-phone").value,sector:document.getElementById("contact-sector").value,region:document.getElementById("contact-region").value,message:o.value,submittedAt:new Date().toISOString()},d=JSON.parse(localStorage.getItem("contact_submissions")||"[]");d.push(r),localStorage.setItem("contact_submissions",JSON.stringify(d)),e.style.display="none";const m=document.getElementById("contact-success");m.style.display="block",m.scrollIntoView({behavior:"smooth",block:"center"})}),e.querySelectorAll(".form-input[required]").forEach(s=>{s.addEventListener("blur",()=>{s.classList.remove("valid","invalid"),s.value.trim()&&(s.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value)?s.classList.add("invalid"):s.classList.add("valid"))})}))},K=()=>{const e=document.createElement("button");e.className="back-to-top",e.setAttribute("aria-label","Back to top"),e.innerHTML='<i class="fas fa-arrow-up"></i>',document.body.appendChild(e),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{window.scrollY>400?e.classList.add("visible"):e.classList.remove("visible")})},Q=()=>{const e=document.querySelector("nav");if(!e)return;const s=document.createElement("div");s.className="hamburger",s.innerHTML="<span></span><span></span><span></span>",s.setAttribute("aria-label","Toggle menu");const a=document.createElement("div");a.className="mobile-nav",a.innerHTML=`
        <a href="#" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#capabilities" class="nav-link">Capabilities</a>
        <a href="#marine" class="nav-link">Marine & Coastal</a>
        <a href="#transport" class="nav-link">Transport</a>
        <a href="#energy" class="nav-link">Energy</a>
        <a href="#systems" class="nav-link">Construction Systems</a>
        <a href="#sustainability" class="nav-link">Sustainability</a>
        <a href="#careers" class="nav-link">Careers</a>
        <a href="#contact" class="nav-link">Contact</a>
    `;const t=e.querySelector(".nav-container");t&&t.appendChild(s),document.body.appendChild(a),s.addEventListener("click",()=>{s.classList.toggle("active"),a.classList.toggle("active"),document.body.style.overflow=a.classList.contains("active")?"hidden":""}),a.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{s.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow=""})})},M=()=>{document.querySelectorAll(".form-input").forEach(e=>{e.addEventListener("blur",()=>{if(e.required&&!e.value.trim())e.classList.add("invalid"),e.classList.remove("valid");else if(e.type==="email"&&e.value){const s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value);e.classList.toggle("valid",s),e.classList.toggle("invalid",!s)}else e.value.trim()&&(e.classList.add("valid"),e.classList.remove("invalid"))}),e.addEventListener("input",()=>{e.classList.remove("invalid")})})},Z=()=>{const e=document.getElementById("newsletter-form");e&&e.addEventListener("submit",s=>{s.preventDefault();const a=e.querySelector(".newsletter-input");if(a&&a.value&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value)){const t=JSON.parse(localStorage.getItem("newsletter_subs")||"[]");t.push({email:a.value,subscribedAt:new Date().toISOString()}),localStorage.setItem("newsletter_subs",JSON.stringify(t)),a.value="";const i=e.querySelector(".newsletter-btn");i.textContent="Subscribed!",setTimeout(()=>{i.textContent="Subscribe"},3e3)}})};document.addEventListener("DOMContentLoaded",()=>{K(),Q(),M(),Z()});window.addEventListener("routeChange",()=>{M()});
