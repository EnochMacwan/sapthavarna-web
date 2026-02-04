import k from"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const b={home:{hero:{title:"Engineering the Full Spectrum of the Earth",subtitle:"Marine, transport, energy, and advanced construction solutions across Africa, India, and the Gulf.",ctaMain:"Explore Capabilities",ctaSec:"Rebuild Signature"},about:{title:"Who We Are",desc1:"SapthaVarnah Geo Technologies (SVGT) is an infrastructure and geo-engineering company delivering climate-resilient, future-ready projects across emerging markets.",desc2:"Drawing inspiration from the seven colours of the earth, we integrate geology, engineering, and modern construction technologies into every solution."},capabilities:[{title:"Marine & Coastal Infrastructure",desc:"Ports, berths, breakwaters, coastal protection",link:"/marine"},{title:"Transport Infrastructure",desc:"Aprons, bridges, logistics corridors, runways",link:"/transport"},{title:"Energy Infrastructure",desc:"Renewables, substations, coastal energy assets",link:"/energy"},{title:"Modern Construction Systems",desc:"Precast and GFRG building solutions",link:"/systems"}],closing:{title:"Infrastructure built with respect for every layer of the earth it touches.",cta:"Contact SapthaVarnah"}},about:{hero:{label:"About SVGT",title:"Engineering Excellence Rooted in the Earth"},company:{title:"SapthaVarnah Geo Technologies",desc1:"SVGT is a specialist infrastructure company focused on marine, transport, and energy sectors. We combine deep geotechnical expertise with modern construction methodologies to deliver resilient infrastructure.",desc2:"Our name 'SapthaVarnah' reflects the seven colours of the earth — representing the complete spectrum of geological and environmental understanding we bring to every project.",desc3:"Headquartered with operations in Mauritius and India, we serve clients across Africa, the Indian subcontinent, and the Gulf region."},leadershipTeam:[{name:"Shaijan",role:"Founder & Director",desc:"Extensive experience in marine and coastal infrastructure across emerging markets."},{name:"DK Sinha",role:"Technical Director",desc:"Deep expertise in geotechnical engineering and transport infrastructure development."},{name:"Shiyas",role:"Operations Director",desc:"Leads project execution and delivery across all operational regions."}],culture:{title:"Careers & Culture",desc1:"At SVGT, we foster a collaborative environment where engineering excellence meets practical innovation. Our teams work across borders, bringing together diverse perspectives to solve complex infrastructure challenges.",desc2:"We value hands-on expertise, continuous learning, and a commitment to building infrastructure that serves communities for generations.",values:["Technical Excellence","Collaborative Spirit","Sustainable Thinking","Regional Expertise"]},careers:{title:"Expression of Interest",desc:"We're always looking for talented engineers, project managers, and specialists to join our growing team. If you share our vision for building better infrastructure, we'd like to hear from you.",ctaText:"Submit EOI",ctaEmail:"careers@svgeotech.com"}},capabilities:{hero:{label:"Core Capabilities",title:"Integrated Engineering Solutions"},overview:{desc:"SVGT delivers end-to-end infrastructure solutions across four core sectors. Each capability is supported by deep technical expertise and regional experience."},sectors:[{id:"marine",label:"Sector 01",title:"Marine & Coastal",desc:"Ports, harbours, breakwaters, and coastal protection systems.",link:"/marine"},{id:"transport",label:"Sector 02",title:"Transport",desc:"Roads, bridges, airports, and logistics infrastructure.",link:"/transport"},{id:"energy",label:"Sector 03",title:"Energy",desc:"Renewable energy infrastructure and power systems.",link:"/energy"},{id:"systems",label:"Sector 04",title:"Construction Systems",desc:"Precast and GFRG modern building technologies.",link:"/systems"}]},marine:{hero:{label:"Marine & Coastal",title:"Robust Infrastructure for Dynamic Environments"},intro:{desc:"We deliver marine infrastructure designed to withstand the most challenging coastal and ocean conditions. Our expertise spans the full lifecycle from feasibility through construction and asset management."},services:[{title:"Ports & Harbours",desc:"Design and construction of port facilities, berths, and quay walls."},{title:"Breakwaters & Revetments",desc:"Coastal protection structures engineered for long-term resilience."},{title:"Coastal Protection",desc:"Beach nourishment, groynes, and erosion control systems."},{title:"Marine Foundations",desc:"Piling, caissons, and foundation systems for marine structures."},{title:"Dredging Support",desc:"Technical support for dredging and land reclamation projects."},{title:"Climate Adaptation",desc:"Infrastructure designed for rising sea levels and changing conditions."}]},transport:{hero:{label:"Transport Infrastructure",title:"Connecting Regions, Enabling Growth"},intro:{desc:"Our transport solutions enhance connectivity and drive economic development across regional markets. We deliver infrastructure that serves communities for decades."},services:[{title:"Roads & Highways",desc:"Major road networks and highway construction."},{title:"Bridges & Structures",desc:"Bridge engineering and structural works."},{title:"Airport Infrastructure",desc:"Runways, aprons, and airport facilities."},{title:"Logistics Infrastructure",desc:"Warehousing, freight corridors, and distribution hubs."},{title:"Multimodal Interfaces",desc:"Integration points between transport modes."}]},energy:{hero:{label:"Energy Infrastructure",title:"Powering the Transition"},intro:{desc:"We support energy transition and reliability through resilient infrastructure development. Our focus is on enabling renewable energy deployment and grid infrastructure."},services:[{title:"Renewable Enabling Works",desc:"Civil works for solar, wind, and other renewable installations."},{title:"Substations & Power",desc:"Substation construction and power transmission infrastructure."},{title:"Coastal Energy Facilities",desc:"Infrastructure for coastal and offshore energy projects."},{title:"Balance-of-Plant",desc:"Supporting infrastructure for power generation facilities."}]},systems:{hero:{label:"Construction Systems",title:"Modern Building Technologies"},intro:{desc:"Our advanced construction systems deliver speed, quality, and sustainability. We bring industrialised construction methods to infrastructure projects."},technologies:[{title:"Precast Construction",desc:"Industrialised precast solutions ensuring quality, speed, and precision for large-scale infrastructure projects.",image:"precast.png"},{title:"GFRG Systems",desc:"Glass Fibre Reinforced Gypsum — rapid, lightweight, and sustainable building technology for high-performance structural delivery.",image:"gfrg.png"}],benefits:["Faster construction timelines","Consistent quality control","Reduced on-site waste","Lower carbon footprint","Cost efficiency at scale"]},sustainability:{hero:{label:"Sustainability",title:"Building Responsibly"},plan:{title:"Our Approach",desc:"Sustainability is embedded in how we work — from material selection to construction methodology. We focus on practical measures that deliver environmental and economic value."},pillars:[{title:"Climate Resilience",desc:"Designing infrastructure that adapts to changing environmental conditions."},{title:"Resource Efficiency",desc:"Minimising material consumption and waste through industrialised methods."},{title:"Long-term Value",desc:"Building assets designed for extended lifecycles and easy maintenance."}],practices:[{title:"Geo-informed design",desc:"Using site-specific data to optimize foundations and reduce material use."},{title:"Low-carbon precast",desc:"Off-site construction to reduce waste and energy consumption."},{title:"BIM-enabled execution",desc:"Digital planning to reduce errors and rework."}]},contact:{hero:{label:"Get in Touch",title:"Connect with Our Team"},enquiry:{label:"Project Enquiry",heading:"We welcome discussions on infrastructure challenges across our served regions.",email:"info@svgeotech.com",linkedin:"SapthaVarnah Geo Technologies"},offices:{label:"Global Offices",locations:[{country:"Mauritius",city:"Port Louis",type:"Headquarters"},{country:"India",city:"Chennai",type:"Technical Centre"}]},regions:{label:"Regions Served",desc:"Strategically positioned to serve emerging and established markets.",items:["Africa","India","Gulf Region"]},media:{label:"Media Relations",desc:"For press enquiries and media requests.",email:"media@svgeotech.com"}}},c=()=>{try{const e=localStorage.getItem("siteContent");return e?JSON.parse(e):b}catch{return b}};window.addEventListener("storage",e=>{e.key==="siteContent"&&window.location.reload()});const g=(e,t="")=>e.map(a=>`
    <div class="nm-card uniform-card ${t}">
        ${a.image?`<div class="card-image nm-inset"><img src="${a.image}" alt="${a.title}" class="brand-img"></div>`:""}
        <h3>${a.title}</h3>
        <p class="text-secondary mt-4">${a.desc}</p>
        ${a.link?`<a href="${a.link}" class="card-link mt-4 nav-link">Learn More →</a>`:""}
    </div>
`).join(""),v=e=>e.map(t=>`
    <div class="nm-card service-card">
        <h3>${t.title}</h3>
        <p class="text-secondary">${t.desc}</p>
    </div>
`).join(""),C=e=>e.map(t=>`
    <div class="grid-card-wrapper">
        <div class="grid-card-visual">
            ${t.photo?`<img src="${t.photo}" alt="${t.name}" loading="lazy">`:`<div class="team-avatar-large">${t.name.charAt(0)}</div>`}
        </div>
        <div class="grid-content-outside">
            <h3>${t.name}</h3>
            <h4>${t.role}</h4>
            <p>${t.desc}</p>
        </div>
    </div>
`).join(""),I=e=>e.map(t=>`<li>${t}</li>`).join(""),o={home:()=>{const e=c();return`
        <section id="hero" class="hero">
            <canvas id="spectrum-canvas"></canvas>
            <div class="hero-overlay-content">
                <h1 class="hero-title mb-6">${e.home.hero.title.replace("Full Spectrum","<span class='accent-page'>Full Spectrum</span>")}</h1>
                <p class="hero-subtitle mb-24 text-secondary">${e.home.hero.subtitle}</p>
                <div class="hero-actions">
                    <a href="/capabilities" class="cta-button nav-link">${e.home.hero.ctaMain} →</a>
                </div>
            </div>
        </section>

        <section id="about">
            <div class="about-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${e.home.about.title}</h4>
                    <p class="mb-4">${e.home.about.desc1}</p>
                    <p class="text-secondary">${e.home.about.desc2}</p>
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
                ${g(e.home.capabilities)}
            </div>
        </section>

        <section id="closing" class="section-center">
            <h2 class="mb-6">${e.home.closing.title}</h2>
            <a href="/contact" class="cta-button nav-link">${e.home.closing.cta} →</a>
        </section>
    `},about:()=>{const e=c();return`
        <section id="about-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${e.about.hero.label}</h4>
            <h1>${e.about.hero.title.replace("Earth","<span class='accent-page'>Earth</span>")}</h1>
        </section>

        <section id="company">
            <div class="nm-card">
                <h2 class="mb-6">${e.about.company.title}</h2>
                <div class="company-content">
                    <p class="mb-4">${e.about.company.desc1}</p>
                    <p class="mb-4">${e.about.company.desc2}</p>
                    <p class="text-secondary">${e.about.company.desc3}</p>
                </div>
            </div>
        </section>

        <section id="leadership">
            <h2 class="mb-6">Leadership Team</h2>
            <div class="cards-grid team-grid">
                ${C(e.about.leadershipTeam)}
            </div>
        </section>

        <section id="culture">
            <div class="nm-card">
                <h2 class="mb-6">${e.about.culture.title}</h2>
                <p class="mb-4">${e.about.culture.desc1}</p>
                <p class="text-secondary mb-6">${e.about.culture.desc2}</p>
                <ul class="value-tags">
                    ${I(e.about.culture.values)}
                </ul>
            </div>
        </section>

        <section id="careers">
            <div class="nm-card section-center">
                <h2 class="mb-4">${e.about.careers.title}</h2>
                <p class="text-secondary mb-6">${e.about.careers.desc}</p>
                <a href="mailto:${e.about.careers.ctaEmail}" class="cta-button">${e.about.careers.ctaText} →</a>
            </div>
        </section>
    `},capabilities:()=>{const e=c();return`
        <section id="cap-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${e.capabilities.hero.label}</h4>
            <h1>Integrated <span class="accent-page">Engineering</span> Solutions</h1>
        </section>

        <section id="overview">
            <p class="lead-text">${e.capabilities.overview.desc}</p>
        </section>

        <section id="sectors">
            <div class="cards-grid sector-cards">
                ${e.capabilities.sectors.map(t=>`
                    <a href="${t.link}" class="nm-card sector-link-card nav-link">
                        <h4 class="text-secondary mb-4">${t.label}</h4>
                        <h3>${t.title}</h3>
                        <p class="text-secondary mt-4">${t.desc}</p>
                        <span class="card-link mt-4">Explore →</span>
                    </a>
                `).join("")}
            </div>
        </section>
    `},marine:()=>{const e=c();return`
        <section id="marine-hero" class="subpage-hero marine-bg">
            <h4 class="text-secondary mb-4">${e.marine.hero.label}</h4>
            <h1>${e.marine.hero.title.replace("Dynamic","<span class='accent-marine'>Dynamic</span>")}</h1>
        </section>

        <section id="marine-intro">
            <div class="nm-card">
                <p class="lead-text">${e.marine.intro.desc}</p>
            </div>
        </section>

        <section id="marine-services">
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${v(e.marine.services)}
            </div>
        </section>

        <section id="marine-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Discuss a Marine Project →</a>
        </section>
    `},transport:()=>{const e=c();return`
        <section id="transport-hero" class="subpage-hero transport-bg">
            <h4 class="text-secondary mb-4">${e.transport.hero.label}</h4>
            <h1>${e.transport.hero.title.replace("Growth","<span class='accent-transport'>Growth</span>")}</h1>
        </section>

        <section id="transport-intro">
            <div class="nm-card">
                <p class="lead-text">${e.transport.intro.desc}</p>
            </div>
        </section>

        <section id="transport-services">
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${v(e.transport.services)}
            </div>
        </section>

        <section id="transport-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Discuss a Transport Project →</a>
        </section>
    `},energy:()=>{const e=c();return`
        <section id="energy-hero" class="subpage-hero energy-bg">
            <h4 class="text-secondary mb-4">${e.energy.hero.label}</h4>
            <h1>${e.energy.hero.title.replace("Transition","<span class='accent-energy'>Transition</span>")}</h1>
        </section>

        <section id="energy-intro">
            <div class="nm-card">
                <p class="lead-text">${e.energy.intro.desc}</p>
            </div>
        </section>

        <section id="energy-services">
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${v(e.energy.services)}
            </div>
        </section>

        <section id="energy-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Discuss an Energy Project →</a>
        </section>
    `},systems:()=>{const e=c();return`
        <section id="systems-hero" class="subpage-hero systems-bg">
            <h4 class="text-secondary mb-4">${e.systems.hero.label}</h4>
            <h1>${e.systems.hero.title.replace("Technologies","<span class='accent-page'>Technologies</span>")}</h1>
        </section>

        <section id="systems-intro">
            <div class="nm-card">
                <p class="lead-text">${e.systems.intro.desc}</p>
            </div>
        </section>

        <section id="technologies">
            <h2 class="mb-6">Our Technologies</h2>
            <div class="cards-grid">
                ${g(e.systems.technologies)}
            </div>
        </section>

        <section id="benefits">
            <div class="nm-card">
                <h3 class="mb-6">Key Benefits</h3>
                <ul class="benefits-list">
                    ${e.systems.benefits.map(t=>`<li>✓ ${t}</li>`).join("")}
                </ul>
            </div>
        </section>

        <section id="systems-cta" class="section-center">
            <a href="/contact" class="cta-button nav-link">Enquire About Construction Systems →</a>
        </section>
    `},sustainability:()=>{const e=c();return`
        <section id="sustain-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">${e.sustainability.hero.label}</h4>
            <h1>${e.sustainability.hero.title.replace("Responsibly","<span class='accent-page'>Responsibly</span>")}</h1>
        </section>

        <section id="plan">
            <div class="nm-card">
                <h2 class="mb-4">${e.sustainability.plan.title}</h2>
                <p class="lead-text">${e.sustainability.plan.desc}</p>
            </div>
        </section>

        <section id="pillars">
            <h2 class="mb-6">Our Pillars</h2>
            <div class="cards-grid">
                ${g(e.sustainability.pillars)}
            </div>
        </section>

        <section id="practices">
            <h2 class="mb-6">Key Practices</h2>
            <div class="nm-card">
                <ul class="practices-list">
                    ${e.sustainability.practices.map(t=>`
                        <li>
                            <strong>${t.title}</strong>
                            <p class="text-secondary">${t.desc}</p>
                        </li>
                    `).join("")}
                </ul>
            </div>
        </section>
    `},contact:()=>{const e=c();return`
        <section id="contact-hero" class="subpage-hero contact-hero-bg">
            <h4 class="text-secondary mb-4">${e.contact.hero.label}</h4>
            <h1>Connect with <span class="accent-page">Our Team</span></h1>
        </section>

        <section id="contact-details">
            <div class="contact-grid">
                <div class="nm-card contact-main-card">
                    <h4 class="text-secondary mb-4">${e.contact.enquiry.label}</h4>
                    <h2>${e.contact.enquiry.heading.replace("infrastructure challenges","<span class='accent-page'>infrastructure challenges</span>")}</h2>
                    <div class="contact-links-row mt-6">
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">Email</h4>
                            <a href="mailto:${e.contact.enquiry.email}" class="contact-link-item">${e.contact.enquiry.email}</a>
                        </div>
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">LinkedIn</h4>
                            <a href="#" class="contact-link-item">${e.contact.enquiry.linkedin}</a>
                        </div>
                    </div>
                </div>

                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${e.contact.offices.label}</h4>
                    <div class="offices-list">
                        ${e.contact.offices.locations.map(t=>`
                            <div class="office-item">
                                <strong>${t.country}</strong>
                                <span class="text-secondary">${t.city} · ${t.type}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </section>

        <section id="regions-media">
            <div class="contact-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${e.contact.regions.label}</h4>
                    <p class="text-secondary mb-4">${e.contact.regions.desc}</p>
                    <ul class="regions-tags">
                        ${e.contact.regions.items.map(t=>`<li>${t}</li>`).join("")}
                    </ul>
                </div>

                <div class="nm-card">
                    <h4 class="text-secondary mb-4">${e.contact.media.label}</h4>
                    <p class="text-secondary mb-4">${e.contact.media.desc}</p>
                    <a href="mailto:${e.contact.media.email}" class="contact-link-item">${e.contact.media.email}</a>
                </div>
            </div>
        </section>
    `},careers:()=>`
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
    `,projectDetail:(e,t)=>{c();const s={"marine-terminal":{title:"Marine Terminal Development",category:"Marine Infrastructure",image:"materials.png",description:"A comprehensive marine terminal development project featuring state-of-the-art berthing facilities, cargo handling systems, and integrated logistics.",details:["Deep-water berths capable of handling Panamax vessels","Modern container handling equipment","Integrated road and rail connectivity","Environmental protection measures"],location:"Chennai, India",year:"2023-2025",client:"Chennai Port Authority"},"highway-bridge":{title:"National Highway Bridge",category:"Transport Infrastructure",image:"transport.png",description:"Design and construction of a major highway bridge spanning 1.2km with innovative precast concrete technology.",details:["Segmental precast construction","Seismic-resistant design","6-lane carriageway","Integrated lighting and safety systems"],location:"Gujarat, India",year:"2022-2024",client:"NHAI"},"solar-farm":{title:"Solar Energy Farm",category:"Energy Infrastructure",image:"energy.png",description:"100MW solar power installation with grid integration and energy storage systems.",details:["Bifacial solar panels","Battery energy storage system","Smart grid integration","Remote monitoring capabilities"],location:"Rajasthan, India",year:"2024",client:"State Energy Corporation"}}[e]||{title:"Project Not Found",category:"Unknown",description:"The requested project could not be found.",details:[],location:"N/A",year:"N/A",client:"N/A"};return`
        <section class="page-hero detail-hero">
            <div class="hero-overlay-content">
                <span class="detail-category">${s.category}</span>
                <h1 class="hero-title">${s.title}</h1>
            </div>
        </section>

        <section id="project-detail">
            <div class="detail-grid">
                <div class="detail-main">
                    ${s.image?`<div class="nm-card detail-image nm-inset"><img src="${s.image}" alt="${s.title}"></div>`:""}
                    
                    <div class="nm-card">
                        <h2 class="mb-4">Project Overview</h2>
                        <p class="text-secondary mb-6">${s.description}</p>
                        
                        ${s.details.length>0?`
                        <h4 class="mb-4">Key Features</h4>
                        <ul class="detail-features">
                            ${s.details.map(i=>`<li><i class="fas fa-check"></i> ${i}</li>`).join("")}
                        </ul>
                        `:""}
                    </div>
                </div>
                
                <aside class="detail-sidebar">
                    <div class="nm-card">
                        <h4 class="text-secondary mb-4">Project Info</h4>
                        <div class="info-item">
                            <span class="info-label">Location</span>
                            <span class="info-value">${s.location}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Timeline</span>
                            <span class="info-value">${s.year}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Client</span>
                            <span class="info-value">${s.client}</span>
                        </div>
                    </div>
                    
                    <div class="nm-card mt-4">
                        <h4 class="mb-4">Interested in Similar Projects?</h4>
                        <a href="/contact" class="cta-button nav-link">Contact Us →</a>
                    </div>
                </aside>
            </div>
        </section>

        <section id="back-link" class="section-center">
            <a href="/capabilities" class="cta-button secondary nav-link"><i class="fas fa-arrow-left"></i> Back to Capabilities</a>
        </section>
    `},serviceDetail:(e,t)=>{const s={"structural-engineering":{title:"Structural Engineering",category:"Engineering Services",icon:"fas fa-building",description:"Comprehensive structural engineering services for buildings, bridges, and industrial facilities.",features:["Structural analysis and design","Foundation engineering","Earthquake-resistant design","Progressive collapse analysis","Structural health monitoring"],sectors:["Marine","Transport","Energy","Urban"]},"project-management":{title:"Project Management",category:"Management Services",icon:"fas fa-project-diagram",description:"End-to-end project management services ensuring on-time, on-budget delivery.",features:["Planning and scheduling","Cost management","Risk assessment","Quality control","Stakeholder coordination"],sectors:["All Sectors"]},"environmental-consulting":{title:"Environmental Consulting",category:"Sustainability Services",icon:"fas fa-leaf",description:"Environmental impact assessment and sustainable design solutions.",features:["Environmental Impact Assessment (EIA)","Green building certification","Carbon footprint analysis","Sustainable materials selection","Compliance monitoring"],sectors:["Marine","Energy","Urban"]}}[e]||{title:"Service Not Found",category:"Unknown",icon:"fas fa-question",description:"The requested service could not be found.",features:[],sectors:[]};return`
        <section class="page-hero detail-hero">
            <div class="hero-overlay-content">
                <span class="detail-category">${s.category}</span>
                <h1 class="hero-title"><i class="${s.icon}"></i> ${s.title}</h1>
            </div>
        </section>

        <section id="service-detail">
            <div class="detail-content-wide">
                <div class="nm-card">
                    <h2 class="mb-4">Service Overview</h2>
                    <p class="text-secondary mb-6">${s.description}</p>
                    
                    ${s.features.length>0?`
                    <h4 class="mb-4">What We Offer</h4>
                    <div class="features-grid">
                        ${s.features.map(i=>`
                            <div class="feature-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${i}</span>
                            </div>
                        `).join("")}
                    </div>
                    `:""}
                </div>
                
                <div class="nm-card mt-4">
                    <h4 class="mb-4">Applicable Sectors</h4>
                    <div class="sector-tags">
                        ${s.sectors.map(i=>`<span class="sector-tag">${i}</span>`).join("")}
                    </div>
                </div>
            </div>
        </section>

        <section id="service-cta" class="section-center">
            <h2 class="mb-4">Need This Service?</h2>
            <p class="text-secondary mb-6">Let's discuss how we can help with your project.</p>
            <a href="/contact" class="cta-button nav-link">Get in Touch →</a>
        </section>

        <section id="back-link" class="section-center">
            <a href="/capabilities" class="cta-button secondary nav-link"><i class="fas fa-arrow-left"></i> Back to Capabilities</a>
        </section>
    `},teamDetail:(e,t)=>{const a=c(),i=(window.TEAM_DATA||a.about?.team||[]).find(n=>n.name.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")===e)||{name:"Team Member Not Found",role:"Unknown",desc:"The requested team member could not be found.",bio:"",photo:""};return`
        <section class="page-hero team-detail-hero">
            <div class="hero-overlay-content">
                <h1 class="hero-title">Team</h1>
            </div>
        </section>

        <section id="team-detail">
            <div class="team-detail-card nm-card">
                <div class="team-detail-photo">
                    ${i.photo?`<img src="${i.photo}" alt="${i.name}">`:`<div class="team-avatar-xl">${i.name.charAt(0)}</div>`}
                </div>
                <div class="team-detail-info">
                    <h1>${i.name}</h1>
                    <h3 class="text-accent">${i.role}</h3>
                    <p class="text-secondary mt-4">${i.desc}</p>
                    ${i.bio?`<p class="mt-4">${i.bio}</p>`:""}
                    
                    ${i.linkedin||i.email?`
                    <div class="team-contact mt-6">
                        ${i.email?`<a href="mailto:${i.email}" class="contact-link"><i class="fas fa-envelope"></i> Email</a>`:""}
                        ${i.linkedin?`<a href="${i.linkedin}" class="contact-link" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>`:""}
                    </div>
                    `:""}
                </div>
            </div>
        </section>

        <section id="back-link" class="section-center">
            <a href="/about" class="cta-button secondary nav-link"><i class="fas fa-arrow-left"></i> Back to About</a>
        </section>
    `}};class T{constructor(t){this.mountPoint=t,this.routes={"/":o.home,"/index.html":o.home,"/about":o.about,"/capabilities":o.capabilities,"/marine":o.marine,"/transport":o.transport,"/energy":o.energy,"/systems":o.systems,"/sustainability":o.sustainability,"/contact":o.contact,"/careers":o.careers},this.dynamicRoutes={"/project":o.projectDetail,"/service":o.serviceDetail,"/team":o.teamDetail},window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",a=>this.interceptClick(a)),this.handleRoute()}interceptClick(t){const a=t.target.closest("a");if(a&&a.classList.contains("nav-link")){const s=new URL(a.href);s.origin===window.location.origin&&(t.preventDefault(),this.navigate(s.pathname+s.search+s.hash))}}navigate(t){window.history.pushState({},"",t),this.handleRoute()}getQueryParams(){const t={},a=window.location.search.substring(1);return a&&a.split("&").forEach(s=>{const[i,n]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n||"")}),t}async handleRoute(){let t=window.location.pathname;t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1));const a=this.getQueryParams();let s;const i=Object.keys(this.dynamicRoutes).find(r=>t.endsWith(r));if(i&&a.id)s=()=>this.dynamicRoutes[i](a.id,a);else{let r=Object.keys(this.routes).find(l=>t.endsWith(l));(t==="/"||t==="")&&(r="/"),s=this.routes[r]||o.home}const n=this.mountPoint;if(window.gsap&&await window.gsap.to(n,{opacity:0,y:10,duration:.3,ease:"power2.in"}),n.innerHTML=s(),window.location.hash){const r=document.querySelector(window.location.hash);r&&r.scrollIntoView()}else window.scrollTo(0,0);window.gsap&&window.gsap.fromTo(n,{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power2.out"}),window.dispatchEvent(new CustomEvent("routeChange",{detail:{path:t,queryParams:a}}))}}class M{constructor(t){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.particles=[],this.sparks=[],this.worker={x:0,y:0,tx:0,ty:0,state:"idle",targetIdx:-1,weldTime:0,frame:0},this.mouse={x:-1e3,y:-1e3},this.dpr=window.devicePixelRatio||1,this.themeColor="#003366",this.accentColor="#9c4221",this.active=!0,this._resizeHandler=()=>this.resize(),this._mouseMoveHandler=a=>this.handleMouseMove(a),document.fonts?document.fonts.ready.then(()=>{this.active&&this.init()}):this.init(),this.animate(),window.addEventListener("resize",this._resizeHandler),window.addEventListener("mousemove",this._mouseMoveHandler),window.resetBrandBuild=()=>this.init())}init(){this.resize(),this.particles=[],this.sparks=[];const t=document.createElement("canvas"),a=t.getContext("2d"),s=1100,i=200;t.width=s,t.height=i,a.fillStyle="black",a.font="bold 90px Inter",a.textAlign="center",a.fillText("SAPTHAVARNAH",s/2,i/2+30);const n=a.getImageData(0,0,s,i).data,l=window.innerWidth<768?12:8,m=this.canvas.width/this.dpr,p=this.canvas.height/this.dpr;for(let h=0;h<i;h+=l)for(let u=0;u<s;u+=l){const $=(h*s+u)*4;if(n[$+3]>128){const f=m/2-s/2+u,E=p*.82-i/2+h,y=Math.random()>.4;this.particles.push({tx:f,ty:E,x:f+(Math.random()-.5)*50,y:-Math.random()*1500-100,vx:0,vy:5+Math.random()*10,c:y?this.accentColor:this.themeColor,size:y?7:4,delay:Math.random()*150,landed:!1,welded:!1,bounce:0})}}this.worker={x:m/2,y:p,tx:m/2,ty:p*.8,state:"idle",targetIdx:-1,weldTime:0,frame:0,scale:1.5}}resize(){if(!this.canvas)return;const t=this.canvas.parentElement;this.canvas.width=t.offsetWidth*this.dpr,this.canvas.height=t.offsetHeight*this.dpr,this.ctx.scale(this.dpr,this.dpr)}handleMouseMove(t){if(!this.canvas)return;const a=this.canvas.getBoundingClientRect();this.mouse.x=t.clientX-a.left,this.mouse.y=t.clientY-a.top}updateWorker(){if(this.worker.frame++,this.worker.state==="idle"||this.worker.state==="walking"){let t=1/0,a=-1;this.particles.forEach((s,i)=>{if(s.landed&&!s.welded){const n=s.tx-this.worker.x,r=s.ty-this.worker.y,l=n*n+r*r;l<t&&(t=l,a=i)}}),a!==-1&&(this.worker.targetIdx=a,this.worker.tx=this.particles[a].tx,this.worker.ty=this.particles[a].ty,this.worker.state="walking")}if(this.worker.state==="walking"){const t=this.worker.tx-this.worker.x,a=this.worker.ty-(this.worker.y-15);Math.sqrt(t*t+a*a)<10?(this.worker.state="welding",this.worker.weldTime=40):(this.worker.x+=t*.12,this.worker.y+=a*.12)}this.worker.state==="welding"&&(this.worker.weldTime>0?this.worker.weldTime--:(this.worker.targetIdx!==-1&&(this.particles[this.worker.targetIdx].welded=!0),this.worker.state="idle"))}drawWorker(){const{x:t,y:a,state:s,frame:i,scale:n}=this.worker,r=s==="walking"?Math.sin(i*.25)*4:0;this.ctx.save(),this.ctx.translate(t,a+r),this.ctx.scale(n,n),this.ctx.fillStyle="#1a202c",this.ctx.fillRect(-5,-6,3,6),this.ctx.fillRect(2,-6,3,6),this.ctx.fillStyle="#f6ad55",this.ctx.fillRect(-7,-22,14,16),this.ctx.fillStyle="rgba(255,255,255,0.9)",this.ctx.fillRect(-7,-18,14,2),this.ctx.fillRect(-7,-12,14,2),this.ctx.fillStyle="#4a5568",s==="welding"?this.ctx.fillRect(2,-18,12,3):(this.ctx.fillRect(7,-18,3,10),this.ctx.fillRect(-10,-18,3,10)),this.ctx.fillStyle="#f6e05e",this.ctx.beginPath(),this.ctx.arc(0,-25,6,Math.PI,0),this.ctx.fill(),this.ctx.fillRect(-8,-25,16,2),this.ctx.restore()}animate(){if(!this.active||!this.canvas)return;const t=this.canvas.width/this.dpr,a=this.canvas.height/this.dpr;this.ctx.clearRect(0,0,t,a),this.ctx.shadowBlur=0,this.particles.forEach(s=>{if(s.delay>0){s.delay--;return}s.landed?(s.x+=(s.tx-s.x)*.1,s.y+=(s.ty-s.y)*.1,s.bounce>0&&(s.y-=s.bounce,s.bounce*=-.5)):(s.y+=s.vy,s.vy+=.3,s.y>=s.ty&&(s.y=s.ty,s.landed=!0,s.bounce=6)),this.ctx.fillStyle=s.c,this.ctx.fillRect(s.x,s.y,s.size,s.size*.6),s.welded&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.1)",this.ctx.fillRect(s.x,s.y,s.size,s.size*.1))}),this.updateWorker(),this.drawWorker(),requestAnimationFrame(()=>this.animate())}destroy(){this.active=!1,window.removeEventListener("resize",this._resizeHandler),window.removeEventListener("mousemove",this._mouseMoveHandler),this.canvas=null}}const w={header:()=>`
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
                                <h5>About SVGT</h5>
                                <ul class="mega-links">
                                    <li><a href="/about">Company Overview</a></li>
                                    <li><a href="/about#leadership">Leadership Team</a></li>
                                    <li><a href="/about#culture">Careers & Culture</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Sustainability</h5>
                                <ul class="mega-links">
                                    <li><a href="/sustainability">Our Approach</a></li>
                                    <li><a href="/sustainability#pillars">Key Pillars</a></li>
                                    <li><a href="/sustainability#practices">Practices</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Connect</h5>
                                <ul class="mega-links">
                                    <li><a href="/contact">Global Offices</a></li>
                                    <li><a href="/contact#contact-details">Project Enquiry</a></li>
                                    <li><a href="/contact#regions-media">Media Relations</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Presence</h5>
                                <p class="mega-desc">Mauritius · India · Serving Africa, Gulf & beyond</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item-has-mega">
                        <a href="/capabilities" class="nav-link">Capabilities</a>
                        <div class="mega-menu">
                            <div class="mega-col">
                                <h5>Marine & Coastal</h5>
                                <ul class="mega-links">
                                    <li><a href="/marine">Overview</a></li>
                                    <li><a href="/marine#marine-services">Services</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Transport</h5>
                                <ul class="mega-links">
                                    <li><a href="/transport">Overview</a></li>
                                    <li><a href="/transport#transport-services">Services</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Energy</h5>
                                <ul class="mega-links">
                                    <li><a href="/energy">Overview</a></li>
                                    <li><a href="/energy#energy-services">Services</a></li>
                                </ul>
                            </div>
                            <div class="mega-col">
                                <h5>Construction Systems</h5>
                                <ul class="mega-links">
                                    <li><a href="/systems">Precast & GFRG</a></li>
                                    <li><a href="/systems#technologies">Technologies</a></li>
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
    `,footer:()=>`
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
                    <li><a href="/marine" class="nav-link">Marine & Coastal</a></li>
                    <li><a href="/transport" class="nav-link">Transport</a></li>
                    <li><a href="/energy" class="nav-link">Energy</a></li>
                    <li><a href="/systems" class="nav-link">Construction Systems</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Company</h5>
                <ul class="footer-links">
                    <li><a href="/about" class="nav-link">About SVGT</a></li>
                    <li><a href="/about#leadership" class="nav-link">Leadership</a></li>
                    <li><a href="/sustainability" class="nav-link">Sustainability</a></li>
                    <li><a href="/contact" class="nav-link">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h5>Offices</h5>
                <ul class="footer-links offices-footer">
                    <li><strong>Mauritius</strong> · Port Louis</li>
                    <li><strong>India</strong> · Chennai</li>
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
    `};function j(){let e=document.getElementById("header-mount");e||(e=document.createElement("div"),e.id="header-mount",document.body.insertBefore(e,document.body.firstChild)),e.innerHTML=w.header();let t=document.getElementById("footer-mount");t||(t=document.createElement("div"),t.id="footer-mount",document.body.appendChild(t)),t.innerHTML=w.footer(),S()}function S(){const e=window.location.pathname;document.querySelectorAll(".nav-link").forEach(t=>{const a=new URL(t.href,window.location.origin).pathname;a===e||e==="/"&&a==="/"?t.classList.add("active"):t.classList.remove("active")})}let d=null;k.initialize({startOnLoad:!1,theme:"base",themeVariables:{primaryColor:"#f6f5f2",primaryTextColor:"#1c1c1c",primaryBorderColor:"rgba(0,0,0,0.1)",lineColor:"#C69061",secondaryColor:"#f6f5f2",tertiaryColor:"#f6f5f2"}});const x=()=>{d&&(d.destroy(),d=null),document.getElementById("spectrum-canvas")&&(d=new M("spectrum-canvas"));const t={threshold:.05},a=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(gsap.to(n.target,{opacity:1,y:0,duration:.8,ease:"power2.out"}),a.unobserve(n.target))})},t);document.querySelectorAll(".nm-card, h2, #closing h2, .subpage-hero h1, .hero-content h1").forEach(i=>{i.style.opacity="0",i.style.transform="translateY(15px)",a.observe(i)}),document.querySelectorAll(".mermaid").length>0&&k.run(),S()},R=()=>{document.querySelectorAll(".nav-item-has-mega").forEach(t=>{const a=t.querySelectorAll(".mega-links li");t.addEventListener("mouseenter",()=>{gsap.fromTo(a,{opacity:0,x:-5},{opacity:1,x:0,stagger:.05,duration:.4,ease:"power2.out",delay:.1})})}),gsap.from("nav",{y:-10,opacity:0,duration:.8,ease:"power2.out"})};document.addEventListener("DOMContentLoaded",()=>{j();const e=document.getElementById("app");new T(e),R(),window.addEventListener("routeChange",()=>{x()}),x()});window.setAnimationMode=e=>{d&&typeof d.setMode=="function"&&(d.setMode(e),document.querySelectorAll(".sample-btn").forEach(t=>{t.getAttribute("onclick").match(/'([^']+)'/)[1]===e?t.classList.add("active"):t.classList.remove("active")}))};window.handleEOISubmit=e=>{e.preventDefault();const t=e.target,a=new FormData(t),s=Object.fromEntries(a.entries());s.submittedAt=new Date().toISOString();const i=JSON.parse(localStorage.getItem("eoi_submissions")||"[]");i.push(s),localStorage.setItem("eoi_submissions",JSON.stringify(i)),t.style.display="none",document.getElementById("eoi-success").style.display="block",document.getElementById("eoi-success").scrollIntoView({behavior:"smooth",block:"center"}),console.log("EOI Submitted:",s)};
