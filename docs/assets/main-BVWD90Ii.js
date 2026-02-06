(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const w={home:{hero:{title:"Engineering the Full Spectrum of the Earth",subtitle:"Comprehensive marine, transport, energy, and advanced construction solutions delivering climate-resilient infrastructure across Africa, India, and the Gulf region.",ctaMain:"Explore Capabilities",ctaSec:"Rebuild Signature"},about:{title:"Who We Are",desc1:"SapthaVarnah Geo Technologies (SVGT) is a specialist infrastructure and geo-engineering company delivering climate-resilient, future-ready projects across emerging markets. With decades of combined experience, our team brings together expertise in geotechnical engineering, marine infrastructure, and modern construction technologies.",desc2:"Drawing inspiration from the seven colours of the earth — representing soil, rock, water, minerals, and the diverse geological formations we work with — we integrate deep geological understanding with cutting-edge engineering to create infrastructure that endures."},capabilities:[{title:"Marine & Coastal Infrastructure",desc:"Comprehensive port development, breakwater engineering, coastal protection systems, and marine foundation solutions for challenging ocean environments.",link:"#marine"},{title:"Transport Infrastructure",desc:"Strategic road networks, bridge engineering, airport infrastructure, and multimodal logistics corridors connecting regions and enabling economic growth.",link:"#transport"},{title:"Energy Infrastructure",desc:"Enabling works for renewable energy installations, substation construction, and grid infrastructure supporting the energy transition.",link:"#energy"},{title:"Modern Construction Systems",desc:"Industrialised precast concrete and GFRG building technologies delivering faster construction with superior quality control.",link:"#systems"}],closing:{title:"Infrastructure built with respect for every layer of the earth it touches.",cta:"Contact SapthaVarnah"}},about:{hero:{label:"About SVGT",title:"Engineering Excellence Rooted in the Earth"},company:{title:"SapthaVarnah Geo Technologies",desc1:"SVGT is a specialist infrastructure company focused on marine, transport, and energy sectors across emerging markets. We combine deep geotechnical expertise accumulated over decades with modern construction methodologies to deliver resilient infrastructure that serves communities for generations.",desc2:"Our name 'SapthaVarnah' — meaning 'seven colours' in Sanskrit — reflects the rich geological diversity of the earth we work with. From the deep marine sediments of coastal projects to the varied rock formations encountered in transport corridors, we bring a complete spectrum of geological and environmental understanding to every project.",desc3:"Headquartered in Mauritius with technical operations in Chennai, India, we serve clients across the African continent, the Indian subcontinent, and the Gulf region. Our strategic positioning allows us to mobilise quickly and deliver projects efficiently across these dynamic markets."},leadershipTeam:[{name:"Shaijan",role:"Founder & Managing Director",desc:"With over 25 years of experience in marine and coastal infrastructure, Shaijan has led major port development and coastal protection projects across emerging markets including Mauritius, East Africa, and the Gulf."},{name:"DK Sinha",role:"Technical Director",desc:"A veteran geotechnical engineer with expertise spanning foundation engineering, ground improvement, and transport infrastructure. DK brings deep technical rigour to every project, ensuring optimal solutions grounded in scientific principles."},{name:"Shiyas",role:"Operations Director",desc:"Leads project execution and delivery across all operational regions, managing complex multi-site projects with a focus on safety, quality, and timely completion. Shiyas ensures seamless coordination between design, procurement, and construction teams."}],culture:{title:"Careers & Culture",desc1:"At SVGT, we foster a collaborative environment where engineering excellence meets practical innovation. Our teams work across borders and disciplines, bringing together diverse perspectives to solve complex infrastructure challenges in some of the world's most dynamic markets.",desc2:"We value hands-on expertise, continuous learning, and a deep commitment to building infrastructure that serves communities for generations. Our culture emphasises mentorship, technical growth, and the satisfaction of seeing projects transform from concepts to completed structures.",values:["Technical Excellence","Collaborative Spirit","Sustainable Thinking","Regional Expertise","Integrity & Safety","Innovation Mindset"]},careers:{title:"Expression of Interest",desc:"We're always looking for talented civil engineers, geotechnical specialists, project managers, and construction professionals to join our growing team. Whether you're an experienced professional or an emerging talent, if you share our vision for building better infrastructure, we'd like to hear from you.",ctaText:"Submit EOI",ctaEmail:"careers@svgeotech.com"}},capabilities:{hero:{label:"Core Capabilities",title:"Integrated Engineering Solutions"},overview:{desc:"SVGT delivers end-to-end infrastructure solutions across four core sectors, from initial feasibility studies through detailed design, construction, and asset management. Each capability is supported by deep technical expertise, proven methodologies, and extensive regional experience across Africa, India, and the Gulf."},sectors:[{id:"marine",label:"Sector 01",title:"Marine & Coastal",desc:"Comprehensive solutions for ports, harbours, breakwaters, and coastal protection systems engineered to withstand dynamic marine environments.",link:"#marine"},{id:"transport",label:"Sector 02",title:"Transport",desc:"Strategic road networks, bridge engineering, airport infrastructure, and multimodal logistics corridors that connect regions and drive economic development.",link:"#transport"},{id:"energy",label:"Sector 03",title:"Energy",desc:"Enabling works and infrastructure for renewable energy installations, substations, and grid systems supporting the global energy transition.",link:"#energy"},{id:"systems",label:"Sector 04",title:"Construction Systems",desc:"Advanced precast concrete and GFRG building technologies delivering speed, precision, and sustainability in modern construction.",link:"#systems"}]},marine:{hero:{label:"Marine & Coastal",title:"Robust Infrastructure for Dynamic Ocean Environments"},intro:{desc:"We deliver marine and coastal infrastructure designed to withstand the most challenging ocean conditions — from tropical cyclones to persistent wave action and corrosive saltwater environments. Our expertise spans the full project lifecycle from feasibility studies and environmental assessment through detailed design, construction management, and long-term asset stewardship."},services:[{title:"Ports & Harbours",desc:"Complete port development including berths, quay walls, container terminals, bulk handling facilities, and small craft harbours. We engineer facilities for vessels ranging from fishing boats to Panamax-class ships."},{title:"Breakwaters & Revetments",desc:"Rubble mound breakwaters, caisson structures, and armoured revetments engineered using advanced wave modelling and physical model testing for long-term coastal resilience."},{title:"Coastal Protection",desc:"Comprehensive coastal defence systems including beach nourishment, groynes, seawalls, and managed realignment solutions that balance protection with natural coastal processes."},{title:"Marine Foundations",desc:"Driven piles, bored piles, caissons, and gravity-based foundations for marine structures. We specialise in challenging ground conditions including soft marine clays and coral formations."},{title:"Dredging & Reclamation",desc:"Technical support for capital and maintenance dredging, land reclamation design, and beneficial reuse of dredged materials for coastal development projects."},{title:"Climate Adaptation",desc:"Infrastructure designed for rising sea levels, increased storm intensity, and changing coastal conditions. We integrate climate projections into all our marine designs to ensure long-term resilience."}]},transport:{hero:{label:"Transport Infrastructure",title:"Connecting Regions, Enabling Economic Growth"},intro:{desc:"Our transport infrastructure solutions enhance connectivity and drive economic development across regional markets. From major highway corridors to urban roads, bridges, and airport facilities, we deliver infrastructure engineered for safety, durability, and the specific demands of tropical and emerging market environments."},services:[{title:"Roads & Highways",desc:"Major road networks including national highways, regional roads, and urban arterials. Our designs account for local traffic patterns, climate conditions, and available materials to optimise whole-life costs."},{title:"Bridges & Structures",desc:"Bridge engineering from simple culverts to major river crossings, including prestressed concrete, steel composite, and cable-stayed structures. We specialise in bridges for challenging foundation conditions."},{title:"Airport Infrastructure",desc:"Runway and taxiway pavements, aprons, terminal buildings, and associated airside infrastructure designed to aviation authority standards for commercial and cargo operations."},{title:"Logistics Infrastructure",desc:"Warehousing zones, freight corridors, inland container depots, and distribution hubs that support efficient goods movement and supply chain operations."},{title:"Multimodal Interfaces",desc:"Integration points between road, rail, port, and air transport modes, designed for seamless cargo transfer and optimised logistics operations across transport networks."}]},energy:{hero:{label:"Energy Infrastructure",title:"Powering the Energy Transition"},intro:{desc:"We support energy transition and grid reliability through resilient infrastructure development. Our focus is on enabling renewable energy deployment — from solar and wind farms to hydropower facilities — as well as the grid infrastructure needed to distribute clean energy to communities and industries."},services:[{title:"Renewable Enabling Works",desc:"Civil works for solar PV farms, wind turbine foundations, and other renewable installations including access roads, cable routes, laydown areas, and foundation systems designed for specific ground conditions."},{title:"Substations & Grid Infrastructure",desc:"Substation construction from 33kV distribution substations to 220kV transmission facilities, including earthworks, foundations, cable trenches, and control buildings."},{title:"Coastal Energy Facilities",desc:"Infrastructure for coastal and nearshore energy projects including LNG terminals, offshore wind support facilities, and tidal/wave energy installations."},{title:"Balance-of-Plant",desc:"Supporting infrastructure for power generation facilities including cooling water systems, fuel handling, ash disposal, and ancillary structures that ensure reliable plant operations."},{title:"Hydropower Civil Works",desc:"Dam construction, intake structures, penstocks, and powerhouse foundations for run-of-river and storage hydropower projects in challenging terrain."}]},systems:{hero:{label:"Construction Systems",title:"Modern Building Technologies for Faster, Better Construction"},intro:{desc:"Our advanced construction systems deliver speed, quality, and sustainability that conventional methods cannot match. We bring industrialised construction technologies to infrastructure projects, enabling faster delivery, consistent quality, and reduced environmental impact through off-site manufacturing and precision assembly."},technologies:[{title:"Precast Concrete Systems",desc:"Factory-manufactured precast concrete elements including beams, columns, slabs, wall panels, and complete building systems. Our precast solutions ensure consistent quality control, faster site assembly, and reduced construction waste for projects ranging from industrial facilities to residential developments.",image:"precast.png"},{title:"GFRG Building Technology",desc:"Glass Fibre Reinforced Gypsum (GFRG) panels provide a rapid, lightweight, and sustainable building solution. These factory-produced panels can be assembled into complete structures in a fraction of conventional construction time, offering excellent thermal performance, fire resistance, and seismic resilience.",image:"gfrg.png"}],benefits:["50-70% faster construction timelines","Consistent factory quality control","Up to 80% reduced on-site waste","Lower embodied carbon footprint","Significant cost efficiency at scale","Reduced site labour requirements","All-weather construction capability"]},sustainability:{hero:{label:"Sustainability",title:"Building Responsibly for Future Generations"},plan:{title:"Our Approach to Sustainable Infrastructure",desc:"Sustainability is embedded in how we work — from initial site investigation through material selection, construction methodology, and long-term asset management. We focus on practical, measurable actions that deliver both environmental benefits and economic value for our clients and the communities we serve."},pillars:[{title:"Climate Resilience",desc:"Designing infrastructure that not only withstands current conditions but adapts to projected changes in climate, sea level, and extreme weather events over its design life."},{title:"Resource Efficiency",desc:"Minimising material consumption, water use, and construction waste through careful design optimisation, industrialised construction methods, and beneficial reuse of excavated materials."},{title:"Long-term Value",desc:"Building assets designed for extended lifecycles with easy maintenance, adaptability for future needs, and eventual end-of-life recycling or repurposing."},{title:"Community Benefit",desc:"Ensuring our infrastructure projects deliver lasting positive impact for local communities through employment, skills development, and improved access to essential services."}],practices:[{title:"Geo-informed Design",desc:"Using detailed site investigation and geological modelling to optimise foundation designs, reducing overengineering and minimising material quantities without compromising safety."},{title:"Low-carbon Construction",desc:"Off-site precast manufacturing, optimised concrete mixes with supplementary cementitious materials, and efficient logistics to reduce construction-phase carbon emissions."},{title:"BIM-enabled Execution",desc:"Digital Building Information Modelling for clash detection, construction sequencing, and efficient coordination — reducing errors, rework, and material waste."},{title:"Natural Solutions",desc:"Where appropriate, incorporating nature-based solutions such as living shorelines, constructed wetlands, and bioengineered slopes that provide infrastructure function with ecological co-benefits."}]},contact:{hero:{label:"Get in Touch",title:"Connect with Our Team"},enquiry:{label:"Project Enquiry",heading:"We welcome discussions on infrastructure challenges across our served regions. Whether you're planning a new port development, transport corridor, energy installation, or building project, our team is ready to explore how we can help.",email:"info@svgeotech.com",linkedin:"SapthaVarnah Geo Technologies"},offices:{label:"Global Offices",locations:[{country:"Mauritius",city:"Port Louis",type:"Global Headquarters",address:"Level 3, Hennessy Tower, Pope Hennessy Street"},{country:"India",city:"Chennai",type:"Technical Centre",address:"Perungudi, OMR Technology Corridor"}]},regions:{label:"Regions Served",desc:"Strategically positioned in Mauritius and India to serve emerging and established markets across three continents with rapid mobilisation capability.",items:["East & Southern Africa","West Africa","Indian Subcontinent","Gulf Cooperation Council","Indian Ocean Islands"]},media:{label:"Media Relations",desc:"For press enquiries, project announcements, and media requests, please contact our communications team.",email:"media@svgeotech.com"}}},O="/sapthavarna-web/".replace(/\/$/,"")||"",x=e=>e?e.startsWith("http")||e.startsWith("data:")?e:`${O}/${e}`:"",c=()=>{try{const e=localStorage.getItem("siteContent");return e?JSON.parse(e):w}catch{return w}};window.addEventListener("storage",e=>{e.key==="siteContent"&&window.location.reload()});const v=e=>e.map((t,i)=>`
    <div class="nm-card service-card">
        <div class="service-number">${String(i+1).padStart(2,"0")}</div>
        <h3>${t.title}</h3>
        <p class="text-secondary">${t.desc}</p>
    </div>
`).join(""),j=e=>e.map(t=>`
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
`).join(""),R=e=>e.map(t=>`<li>${t}</li>`).join(""),r={home:()=>{const e=c();return`
        <section id="hero" class="hero">
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
        </section>

        <section id="about" class="section-alt">
            <div class="section-label mb-4">Who We Are</div>
            <div class="about-grid">
                <div>
                    <h2 class="mb-6">${e.home.about.title}</h2>
                    <p class="mb-4">${e.home.about.desc1}</p>
                    <p class="text-secondary mb-6">${e.home.about.desc2}</p>
                    <a href="#about" class="cta-button secondary nav-link">About SVGT →</a>
                </div>
                <div class="nm-card img-card nm-inset">
                    <img src="${x("materials.png")}" alt="Engineering materials" class="brand-img">
                </div>
            </div>
        </section>

        <section id="capabilities">
            <div class="section-label mb-4">What We Do</div>
            <h2 class="mb-6">Core Capabilities</h2>
            <div class="cards-grid">
                ${e.home.capabilities.map((t,i)=>`
                    <a href="${t.link}" class="nm-card sector-link-card nav-link">
                        <div class="service-number">${String(i+1).padStart(2,"0")}</div>
                        <h3>${t.title}</h3>
                        <p class="text-secondary mt-4">${t.desc}</p>
                        <span class="card-link mt-4">Explore →</span>
                    </a>
                `).join("")}
            </div>
        </section>

        <section id="closing" class="section-alt section-center">
            <h2 class="mb-6">${e.home.closing.title}</h2>
            <a href="#contact" class="cta-button nav-link">${e.home.closing.cta} →</a>
        </section>
    `},about:()=>{const e=c();return`
        <section id="about-hero" class="subpage-hero">
            <div class="section-label mb-4">${e.about.hero.label}</div>
            <h1>${e.about.hero.title.replace("Earth","<span class='accent-gfrg'>Earth</span>")}</h1>
        </section>

        <section id="company" class="section-alt">
            <div class="section-label mb-4">Our Story</div>
            <h2 class="mb-6">${e.about.company.title}</h2>
            <div style="max-width: 900px;">
                <p class="mb-4">${e.about.company.desc1}</p>
                <p class="mb-4">${e.about.company.desc2}</p>
                <p class="text-secondary">${e.about.company.desc3}</p>
            </div>
        </section>

        <section id="leadership">
            <div class="section-label mb-4">Our People</div>
            <h2 class="mb-6">Leadership Team</h2>
            <div class="cards-grid team-grid">
                ${j(window.TEAM_DATA||e.about.leadershipTeam)}
            </div>
        </section>

        <section id="culture" class="section-alt">
            <div class="section-label mb-4">Our Values</div>
            <h2 class="mb-6">${e.about.culture.title}</h2>
            <p class="mb-4" style="max-width: 800px;">${e.about.culture.desc1}</p>
            <p class="text-secondary mb-6" style="max-width: 800px;">${e.about.culture.desc2}</p>
            <ul class="value-tags">
                ${R(e.about.culture.values)}
            </ul>
        </section>

        <section id="careers" class="section-center">
            <h2 class="mb-4">${e.about.careers.title}</h2>
            <p class="text-secondary mb-6" style="max-width: 600px; margin-left: auto; margin-right: auto;">${e.about.careers.desc}</p>
            <a href="#careers" class="cta-button nav-link">${e.about.careers.ctaText} →</a>
        </section>
    `},capabilities:()=>{const e=c();return`
        <section id="cap-hero" class="subpage-hero">
            <div class="section-label mb-4">${e.capabilities.hero.label}</div>
            <h1>Integrated <span class="accent-gfrg">Engineering</span> Solutions</h1>
        </section>

        <section id="overview" class="section-alt">
            <p class="lead-text">${e.capabilities.overview.desc}</p>
        </section>

        <section id="sectors">
            <div class="section-label mb-4">Our Sectors</div>
            <h2 class="mb-6">Explore Our Capabilities</h2>
            <div class="cards-grid sector-cards">
                ${e.capabilities.sectors.map(t=>`
                    <a href="${t.link}" class="nm-card sector-link-card nav-link">
                        <div class="service-number">${t.label}</div>
                        <h3>${t.title}</h3>
                        <p class="text-secondary mt-4">${t.desc}</p>
                        <span class="card-btn mt-4">Explore →</span>
                    </a>
                `).join("")}
            </div>
        </section>
    `},marine:()=>{const e=c();return`
        <section id="marine-hero" class="subpage-hero marine-bg">
            <div class="section-label mb-4">${e.marine.hero.label}</div>
            <h1>${e.marine.hero.title.replace("Dynamic","<span class='accent-gfrg'>Dynamic</span>")}</h1>
        </section>

        <section id="marine-intro" class="section-alt">
            <p class="lead-text">${e.marine.intro.desc}</p>
        </section>

        <section id="marine-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${v(e.marine.services)}
            </div>
        </section>

        <section id="marine-cta" class="section-alt section-center">
            <h2 class="mb-6">Ready to discuss your marine project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `},transport:()=>{const e=c();return`
        <section id="transport-hero" class="subpage-hero transport-bg">
            <div class="section-label mb-4">${e.transport.hero.label}</div>
            <h1>${e.transport.hero.title.replace("Growth","<span class='accent-gfrg'>Growth</span>")}</h1>
        </section>

        <section id="transport-intro" class="section-alt">
            <p class="lead-text">${e.transport.intro.desc}</p>
        </section>

        <section id="transport-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${v(e.transport.services)}
            </div>
        </section>

        <section id="transport-cta" class="section-alt section-center">
            <h2 class="mb-6">Ready to discuss your transport project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `},energy:()=>{const e=c();return`
        <section id="energy-hero" class="subpage-hero energy-bg">
            <div class="section-label mb-4">${e.energy.hero.label}</div>
            <h1>${e.energy.hero.title.replace("Transition","<span class='accent-gfrg'>Transition</span>")}</h1>
        </section>

        <section id="energy-intro" class="section-alt">
            <p class="lead-text">${e.energy.intro.desc}</p>
        </section>

        <section id="energy-services">
            <div class="section-label mb-4">What We Deliver</div>
            <h2 class="mb-6">Our Services</h2>
            <div class="cards-grid services-grid">
                ${v(e.energy.services)}
            </div>
        </section>

        <section id="energy-cta" class="section-alt section-center">
            <h2 class="mb-6">Ready to discuss your energy project?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `},systems:()=>{const e=c();return`
        <section id="systems-hero" class="subpage-hero systems-bg">
            <div class="section-label mb-4">${e.systems.hero.label}</div>
            <h1>${e.systems.hero.title.replace("Technologies","<span class='accent-gfrg'>Technologies</span>")}</h1>
        </section>

        <section id="systems-intro" class="section-alt">
            <p class="lead-text">${e.systems.intro.desc}</p>
        </section>

        <section id="technologies">
            <div class="section-label mb-4">Our Solutions</div>
            <h2 class="mb-6">Our Technologies</h2>
            <div class="cards-grid">
                ${e.systems.technologies.map((t,i)=>`
                    <div class="nm-card">
                        ${t.image?`<div class="card-image nm-inset mb-4"><img src="${x(t.image)}" alt="${t.title}" class="brand-img" style="height: 200px;"></div>`:""}
                        <div class="service-number">${String(i+1).padStart(2,"0")}</div>
                        <h3>${t.title}</h3>
                        <p class="text-secondary mt-4">${t.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>

        <section id="benefits" class="section-alt">
            <div class="nm-card">
                <div class="section-label mb-4">Advantages</div>
                <h3 class="mb-6">Key Benefits</h3>
                <ul class="benefits-list">
                    ${e.systems.benefits.map(t=>`<li>✓ ${t}</li>`).join("")}
                </ul>
            </div>
        </section>

        <section id="systems-cta" class="section-center">
            <h2 class="mb-6">Interested in modern construction systems?</h2>
            <a href="#contact" class="cta-button nav-link">Get in Touch →</a>
        </section>
    `},sustainability:()=>{const e=c();return`
        <section id="sustain-hero" class="subpage-hero">
            <div class="section-label mb-4">${e.sustainability.hero.label}</div>
            <h1>${e.sustainability.hero.title.replace("Responsibly","<span class='accent-gfrg'>Responsibly</span>")}</h1>
        </section>

        <section id="plan" class="section-alt">
            <div class="section-label mb-4">Our Commitment</div>
            <h2 class="mb-4">${e.sustainability.plan.title}</h2>
            <p class="lead-text">${e.sustainability.plan.desc}</p>
        </section>

        <section id="pillars">
            <div class="section-label mb-4">Foundation</div>
            <h2 class="mb-6">Our Pillars</h2>
            <div class="cards-grid">
                ${e.sustainability.pillars.map((t,i)=>`
                    <div class="nm-card cap-card">
                        <div class="service-number">${String(i+1).padStart(2,"0")}</div>
                        <h3>${t.title}</h3>
                        <p class="text-secondary">${t.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>

        <section id="practices" class="section-alt">
            <div class="section-label mb-4">In Action</div>
            <h2 class="mb-6">Key Practices</h2>
            <div class="cards-grid">
                ${e.sustainability.practices.map((t,i)=>`
                    <div class="nm-card service-card">
                        <div class="service-number">${String(i+1).padStart(2,"0")}</div>
                        <h3>${t.title}</h3>
                        <p class="text-secondary">${t.desc}</p>
                    </div>
                `).join("")}
            </div>
        </section>
    `},contact:()=>{const e=c();return`
        <section id="contact-hero" class="subpage-hero contact-hero-bg">
            <div class="section-label mb-4">${e.contact.hero.label}</div>
            <h1>Connect with <span class="accent-gfrg">Our Team</span></h1>
        </section>

        <section id="contact-details" class="section-alt">
            <div class="contact-grid">
                <div class="nm-card contact-main-card">
                    <div class="section-label mb-4">${e.contact.enquiry.label}</div>
                    <h2 class="mb-6">${e.contact.enquiry.heading.replace("infrastructure challenges","<span class='accent-page'>infrastructure challenges</span>")}</h2>
                    <div class="contact-links-row mt-6">
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">Email</h4>
                            <a href="mailto:${e.contact.enquiry.email}" class="contact-link-item">${e.contact.enquiry.email}</a>
                        </div>
                        <div class="contact-link-block">
                            <h4 class="text-secondary mb-4">LinkedIn</h4>
                            <span class="contact-link-item">${e.contact.enquiry.linkedin}</span>
                        </div>
                    </div>
                </div>

                <div class="nm-card">
                    <div class="section-label mb-4">${e.contact.offices.label}</div>
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
                    <div class="section-label mb-4">${e.contact.regions.label}</div>
                    <p class="text-secondary mb-4">${e.contact.regions.desc}</p>
                    <ul class="regions-tags">
                        ${e.contact.regions.items.map(t=>`<li>${t}</li>`).join("")}
                    </ul>
                </div>

                <div class="nm-card">
                    <div class="section-label mb-4">${e.contact.media.label}</div>
                    <p class="text-secondary mb-4">${e.contact.media.desc}</p>
                    <a href="mailto:${e.contact.media.email}" class="contact-link-item">${e.contact.media.email}</a>
                </div>
            </div>
        </section>
    `},careers:()=>`
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
    `};class W{constructor(t){this.mountPoint=t,this.routes={"":r.home,"/":r.home,about:r.about,capabilities:r.capabilities,marine:r.marine,transport:r.transport,energy:r.energy,systems:r.systems,sustainability:r.sustainability,contact:r.contact,careers:r.careers},window.addEventListener("hashchange",()=>this.handleRoute()),document.addEventListener("click",i=>this.interceptClick(i)),this.handleRoute()}interceptClick(t){const i=t.target.closest("a");if(i&&i.classList.contains("nav-link")){const s=i.getAttribute("href");if(s&&s.startsWith("/")&&!s.startsWith("//")){t.preventDefault();const a=s==="/"?"":s.substring(1);window.location.hash=a}}}navigate(t){window.location.hash=t}getHashPath(){let t=window.location.hash.substring(1);return t.startsWith("/")&&(t=t.substring(1)),t}async handleRoute(){const t=this.getHashPath(),i=this.routes[t]||r.home,s=this.mountPoint;window.gsap&&await window.gsap.to(s,{opacity:0,y:10,duration:.3,ease:"power2.in"}),s.innerHTML=i(),window.scrollTo(0,0),window.gsap&&window.gsap.fromTo(s,{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power2.out"}),window.dispatchEvent(new CustomEvent("routeChange",{detail:{path:t}}))}}class G{constructor(t){this.canvas=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.particles=[],this.sparks=[],this.worker={x:0,y:0,tx:0,ty:0,state:"idle",targetIdx:-1,weldTime:0,frame:0},this.mouse={x:-1e3,y:-1e3},this.dpr=Math.min(window.devicePixelRatio||1,3),this.themeColor="#003366",this.accentColor="#C69061",this.active=!0,this._resizeHandler=()=>this.resize(),this._mouseMoveHandler=i=>this.handleMouseMove(i),document.fonts?document.fonts.ready.then(()=>{this.active&&this.init()}):this.init(),this.animate(),window.addEventListener("resize",this._resizeHandler),window.addEventListener("mousemove",this._mouseMoveHandler),window.resetBrandBuild=()=>this.init())}init(){this.resize(),this.particles=[],this.sparks=[];const t=document.createElement("canvas"),i=t.getContext("2d"),s=2,a=1200*s,n=220*s;t.width=a,t.height=n,i.fillStyle="black",i.font=`bold ${100*s}px Inter, system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText("SAPTHAVARNAH",a/2,n/2);const o=i.getImageData(0,0,a,n).data,l=window.innerWidth<768,I=this.dpr>=2,f=l?10*s:I?5*s:6*s,p=this.canvas.width/this.dpr,g=this.canvas.height/this.dpr;for(let u=0;u<n;u+=f)for(let h=0;h<a;h+=f){const L=(u*a+h)*4;if(o[L+3]>128){const b=p/2-a/s/2+h/s,M=g*.82-n/s/2+u/s,y=Math.random()>.4,A=y?8:5;this.particles.push({tx:b,ty:M,x:b+(Math.random()-.5)*50,y:-Math.random()*1500-100,vx:0,vy:5+Math.random()*10,c:y?this.accentColor:this.themeColor,size:A,delay:Math.random()*150,landed:!1,welded:!1,bounce:0})}}this.worker={x:p/2,y:g,tx:p/2,ty:g*.8,state:"idle",targetIdx:-1,weldTime:0,frame:0,scale:1.8}}resize(){if(!this.canvas)return;const t=this.canvas.parentElement;this.canvas.width=t.offsetWidth*this.dpr,this.canvas.height=t.offsetHeight*this.dpr,this.canvas.style.width=t.offsetWidth+"px",this.canvas.style.height=t.offsetHeight+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.ctx.imageSmoothingEnabled=!1}handleMouseMove(t){if(!this.canvas)return;const i=this.canvas.getBoundingClientRect();this.mouse.x=t.clientX-i.left,this.mouse.y=t.clientY-i.top}updateWorker(){if(this.worker.frame++,this.worker.state==="idle"||this.worker.state==="walking"){let t=1/0,i=-1;this.particles.forEach((s,a)=>{if(s.landed&&!s.welded){const n=s.tx-this.worker.x,o=s.ty-this.worker.y,l=n*n+o*o;l<t&&(t=l,i=a)}}),i!==-1&&(this.worker.targetIdx=i,this.worker.tx=this.particles[i].tx,this.worker.ty=this.particles[i].ty,this.worker.state="walking")}if(this.worker.state==="walking"){const t=this.worker.tx-this.worker.x,i=this.worker.ty-(this.worker.y-15);Math.sqrt(t*t+i*i)<10?(this.worker.state="welding",this.worker.weldTime=40):(this.worker.x+=t*.12,this.worker.y+=i*.12)}this.worker.state==="welding"&&(this.worker.weldTime>0?(this.worker.weldTime--,Math.random()>.5&&this.sparks.push({x:this.worker.x+10,y:this.worker.y-15,vx:(Math.random()-.5)*8,vy:-Math.random()*6-2,life:20+Math.random()*20})):(this.worker.targetIdx!==-1&&(this.particles[this.worker.targetIdx].welded=!0),this.worker.state="idle"))}drawWorker(){const{x:t,y:i,state:s,frame:a,scale:n}=this.worker,o=s==="walking"?Math.sin(a*.25)*4:0;this.ctx.save(),this.ctx.translate(t,i+o),this.ctx.scale(n,n),this.ctx.fillStyle="#1a202c",this.ctx.fillRect(-5,-6,3,6),this.ctx.fillRect(2,-6,3,6),this.ctx.fillStyle="#f6ad55",this.ctx.fillRect(-7,-22,14,16),this.ctx.fillStyle="rgba(255,255,255,0.9)",this.ctx.fillRect(-7,-18,14,2),this.ctx.fillRect(-7,-12,14,2),this.ctx.fillStyle="#4a5568",s==="welding"?this.ctx.fillRect(2,-18,12,3):(this.ctx.fillRect(7,-18,3,10),this.ctx.fillRect(-10,-18,3,10)),this.ctx.fillStyle="#f6e05e",this.ctx.beginPath(),this.ctx.arc(0,-25,6,Math.PI,0),this.ctx.fill(),this.ctx.fillRect(-8,-25,16,2),this.ctx.restore()}animate(){if(!this.active||!this.canvas)return;const t=this.canvas.width/this.dpr,i=this.canvas.height/this.dpr;this.ctx.clearRect(0,0,t,i),this.ctx.shadowBlur=0,this.particles.forEach(s=>{if(s.delay>0){s.delay--;return}s.landed?(s.x+=(s.tx-s.x)*.1,s.y+=(s.ty-s.y)*.1,s.bounce>0&&(s.y-=s.bounce,s.bounce*=-.5)):(s.y+=s.vy,s.vy+=.3,s.y>=s.ty&&(s.y=s.ty,s.landed=!0,s.bounce=6)),this.ctx.fillStyle=s.c,this.ctx.beginPath(),this.ctx.roundRect(s.x,s.y,s.size,s.size*.6,1),this.ctx.fill(),s.welded&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.15)",this.ctx.fillRect(s.x,s.y,s.size,s.size*.15))}),this.sparks=this.sparks.filter(s=>{s.x+=s.vx,s.y+=s.vy,s.vy+=.3,s.life--;const a=s.life/40;return this.ctx.fillStyle=`rgba(255, 200, 50, ${a})`,this.ctx.beginPath(),this.ctx.arc(s.x,s.y,2,0,Math.PI*2),this.ctx.fill(),s.life>0}),this.updateWorker(),this.drawWorker(),requestAnimationFrame(()=>this.animate())}destroy(){this.active=!1,window.removeEventListener("resize",this._resizeHandler),window.removeEventListener("mousemove",this._mouseMoveHandler),this.canvas=null}}const E="/sapthavarna-web/".replace(/\/$/,"")||"",k=e=>`${E}/${e}`;function P(){const e=window.NAV_DATA;if(!e)return null;let t="";return(e.megaMenus||[]).forEach(i=>{t+=`<div class="nav-item-has-mega">
            <a href="${i.href}" class="nav-link">${i.label}</a>
            <div class="mega-menu">`,(i.columns||[]).forEach(s=>{t+=`<div class="mega-col"><h5>${s.heading}</h5>`,s.type==="text"?t+=`<p class="mega-desc">${s.text}</p>`:(t+='<ul class="mega-links">',(s.links||[]).forEach(a=>{t+=`<li><a href="${a.href}">${a.text}</a></li>`}),t+="</ul>"),t+="</div>"}),t+="</div></div>"}),(e.standaloneLinks||[]).forEach(i=>{t+=`<a href="${i.href}" class="nav-link">${i.label}</a>`}),t}const S={header:()=>{const t=P()||`
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
                    <img src="${k("logo-master.png")}" alt="SapthaVarnah Logo" class="logo-img-master">
                </div>
                <span class="logo-text">SapthaVarnah</span>
            </a>
            <div class="nav-links-wrapper">
                <div class="nav-links">
                    ${t}
                </div>
            </div>
        </div>
    </nav>
    `},footer:()=>`
    <footer class="main-footer">
        <div class="footer-grid">
            <div class="footer-col brand-col">
                <a href="#" class="logo nav-link mb-4">
                    <div class="logo-crop">
                        <img src="${k("logo-master.png")}" alt="SapthaVarnah Logo" class="logo-img-master">
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
                    <li><strong>Mauritius</strong> · Port Louis</li>
                    <li><strong>India</strong> · Chennai</li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} SapthaVarnah Geo Technologies. All rights reserved.</p>
            <div class="legal-links">
                <a href="${E}/admin.html" class="admin-link">Admin</a>
            </div>
        </div>
    </footer>
    `};function D(){let e=document.getElementById("header-mount");e||(e=document.createElement("div"),e.id="header-mount",document.body.insertBefore(e,document.body.firstChild)),e.innerHTML=S.header();let t=document.getElementById("footer-mount");t||(t=document.createElement("div"),t.id="footer-mount",document.body.appendChild(t)),t.innerHTML=S.footer(),C()}function C(){const e=window.location.hash.replace("#","").split("?")[0];document.querySelectorAll(".nav-link").forEach(t=>{const i=t.getAttribute("href")||"",s=i.startsWith("#")?i.substring(1):"";e===s||e===""&&s===""?t.classList.add("active"):t.classList.remove("active")})}let m=null,d=null;const $=()=>{m&&(m.destroy(),m=null),d&&(d.disconnect(),d=null),document.getElementById("spectrum-canvas")&&(m=new G("spectrum-canvas"));const t={threshold:.05,rootMargin:"0px 0px -30px 0px"};d=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(gsap.to(a.target,{opacity:1,y:0,duration:.7,ease:"power2.out",delay:a.target.dataset.delay||0}),d.unobserve(a.target))})},t),document.querySelectorAll(".nm-card, .grid-card-wrapper, h2, .subpage-hero h1, .hero-content h1, .section-label, .lead-text, .cta-button, .value-tags, .benefits-list, .regions-tags").forEach((s,a)=>{gsap.set(s,{opacity:0,y:20});const n=s.parentElement;if(n&&n.classList.contains("cards-grid")){const l=Array.from(n.children).indexOf(s);s.dataset.delay=(l*.08).toFixed(2)}d.observe(s)}),C()},q=()=>{document.querySelectorAll(".nav-item-has-mega").forEach(t=>{const i=t.querySelectorAll(".mega-links li");t.addEventListener("mouseenter",()=>{gsap.fromTo(i,{opacity:0,x:-5},{opacity:1,x:0,stagger:.05,duration:.4,ease:"power2.out",delay:.1})})}),gsap.from("nav",{y:-10,opacity:0,duration:.8,ease:"power2.out"})};document.addEventListener("DOMContentLoaded",()=>{D();const e=document.getElementById("app");new W(e),q(),window.addEventListener("routeChange",()=>{$()}),$()});window.handleEOISubmit=e=>{e.preventDefault();const t=e.target,i=new FormData(t),s=Object.fromEntries(i.entries());s.submittedAt=new Date().toISOString();const a=JSON.parse(localStorage.getItem("eoi_submissions")||"[]");a.push(s),localStorage.setItem("eoi_submissions",JSON.stringify(a)),t.style.display="none",document.getElementById("eoi-success").style.display="block",document.getElementById("eoi-success").scrollIntoView({behavior:"smooth",block:"center"})};const B=()=>{const e=document.createElement("button");e.className="back-to-top",e.setAttribute("aria-label","Back to top"),e.innerHTML='<i class="fas fa-arrow-up"></i>',document.body.appendChild(e),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",()=>{window.scrollY>400?e.classList.add("visible"):e.classList.remove("visible")})},H=()=>{const e=document.querySelector("nav");if(!e)return;const t=document.createElement("div");t.className="hamburger",t.innerHTML="<span></span><span></span><span></span>",t.setAttribute("aria-label","Toggle menu");const i=document.createElement("div");i.className="mobile-nav",i.innerHTML=`
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
    `;const s=e.querySelector(".nav-container");s&&s.appendChild(t),document.body.appendChild(i),t.addEventListener("click",()=>{t.classList.toggle("active"),i.classList.toggle("active"),document.body.style.overflow=i.classList.contains("active")?"hidden":""}),i.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{t.classList.remove("active"),i.classList.remove("active"),document.body.style.overflow=""})})},T=()=>{document.querySelectorAll(".form-input").forEach(e=>{e.addEventListener("blur",()=>{if(e.required&&!e.value.trim())e.classList.add("invalid"),e.classList.remove("valid");else if(e.type==="email"&&e.value){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value);e.classList.toggle("valid",t),e.classList.toggle("invalid",!t)}else e.value.trim()&&(e.classList.add("valid"),e.classList.remove("invalid"))}),e.addEventListener("input",()=>{e.classList.remove("invalid")})})};document.addEventListener("DOMContentLoaded",()=>{B(),H(),T()});window.addEventListener("routeChange",()=>{T()});
