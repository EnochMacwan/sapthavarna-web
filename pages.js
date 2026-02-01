export const pages = {
    home: () => `
        <section id="hero" class="hero">
            <canvas id="spectrum-canvas"></canvas>
            <div class="hero-overlay-content">
                <h1 class="hero-title mb-6">Engineering the <br><span class="accent-page">Full Spectrum</span> of the Earth</h1>
                <p class="hero-subtitle mb-8 text-secondary">
                    Marine, transport, energy, and advanced construction solutions across Africa, India, and the Gulf.
                </p>
                <div class="hero-actions">
                    <a href="/capabilities" class="cta-button nav-link">Explore Capabilities &rarr;</a>
                </div>
                <!-- Power Gallery Navigation (20 Modes) -->
                <div class="power-gallery-nav mt-12">
                    <div class="pg-row">
                        <button onclick="window.setAnimationMode('industrialMesh')" class="sample-btn active">Mesh</button>
                        <button onclick="window.setAnimationMode('seismicPulse')" class="sample-btn">Seismic</button>
                        <button onclick="window.setAnimationMode('lidarScan')" class="sample-btn">Lidar</button>
                        <button onclick="window.setAnimationMode('structuralAssembly')" class="sample-btn">Assembly</button>
                        <button onclick="window.setAnimationMode('geoStrata')" class="sample-btn">Strata</button>
                        <button onclick="window.setAnimationMode('tectonicShift')" class="sample-btn">Tectonic</button>
                        <button onclick="window.setAnimationMode('digitalConcrete')" class="sample-btn">Concrete</button>
                        <button onclick="window.setAnimationMode('craneView')" class="sample-btn">Crane</button>
                        <button onclick="window.setAnimationMode('rebarSpiral')" class="sample-btn">Spiral</button>
                        <button onclick="window.setAnimationMode('hydraulicPressure')" class="sample-btn">Hydraulic</button>
                    </div>
                    <div class="pg-row mt-4">
                        <button onclick="window.setAnimationMode('sonicSonar')" class="sample-btn">Sonar</button>
                        <button onclick="window.setAnimationMode('impactPiling')" class="sample-btn">Piling</button>
                        <button onclick="window.setAnimationMode('stressMap')" class="sample-btn">Stress</button>
                        <button onclick="window.setAnimationMode('bimExplode')" class="sample-btn">Explode</button>
                        <button onclick="window.setAnimationMode('thermalDrone')" class="sample-btn">Thermal</button>
                        <button onclick="window.setAnimationMode('dataTelemetry')" class="sample-btn">Data</button>
                        <button onclick="window.setAnimationMode('hydroFlow')" class="sample-btn">Hydro</button>
                        <button onclick="window.setAnimationMode('emSignal')" class="sample-btn">Signal</button>
                        <button onclick="window.setAnimationMode('soilCompaction')" class="sample-btn">Soil</button>
                        <button onclick="window.setAnimationMode('geoAnnotate')" class="sample-btn">Measure</button>
                    </div>
                    <div class="pg-row mt-4">
                        <button onclick="window.setAnimationMode('vectorField')" class="sample-btn">Vectors</button>
                        <button onclick="window.setAnimationMode('pointMesh')" class="sample-btn">MeshNet</button>
                        <button onclick="window.setAnimationMode('strainGauge')" class="sample-btn">Strain</button>
                        <button onclick="window.setAnimationMode('topoHUD')" class="sample-btn">Topo</button>
                        <button onclick="window.setAnimationMode('blueprintGhost')" class="sample-btn">Draft</button>
                        <button onclick="window.setAnimationMode('coordAxis')" class="sample-btn">Axes</button>
                        <button onclick="window.setAnimationMode('hatchProfile')" class="sample-btn">Hatch</button>
                        <button onclick="window.setAnimationMode('triangulation')" class="sample-btn">GPS</button>
                        <button onclick="window.setAnimationMode('fluidStream')" class="sample-btn">Stream</button>
                        <button onclick="window.setAnimationMode('trussLogic')" class="sample-btn">Truss</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="about">
            <div class="about-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">Who We Are</h4>
                    <p class="mb-4">
                        SapthaVarnah Geo Technologies is an infrastructure and geo-engineering company delivering climate-resilient, future-ready projects.
                    </p>
                    <p class="text-secondary">
                        Drawing inspiration from the seven colours of the earth, we integrate geology, engineering, and modern construction technologies into every solution.
                    </p>
                </div>
                <div class="nm-card img-card">
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
            <h2 class="mb-6">Infrastructure built with respect for <br>every layer of the earth it touches.</h2>
            <a href="/contact" class="cta-button nav-link">Contact SapthaVarnah &rarr;</a>
        </section>
    `,

    about: () => `
        <section id="philosophy-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">Our Philosophy</h4>
            <h1>Harmony with the <span class="accent-page">Earth</span></h1>
        </section>

        <section id="philosophy-content" class="philosophy-section">
            <div class="about-grid">
                <div class="nm-card">
                    <p class="mb-4">
                        At SapthaVarnah, we believe infrastructure should work in harmony with the earth it is built upon. Every site carries its own geological, environmental, and social context. Understanding these layers is fundamental to creating infrastructure that lasts.
                    </p>
                    <p class="text-secondary">
                        Our name reflects the **seven colours of the earth** — a symbol of diversity, balance, and completeness. This philosophy shapes our multidisciplinary approach to engineering and construction.
                    </p>
                </div>
                <div class="nm-card img-card container-inset">
                    <img src="materials.png" alt="Engineering materials close-up" class="brand-img">
                </div>
            </div>
        </section>

        <section id="approach">
            <div class="nm-card">
                <h4 class="text-secondary mb-4">Engineering Approach</h4>
                <h2>Bridging <span class="accent-page">Tradition</span> & <span class="accent-page">Innovation</span></h2>
                <div class="grid-container mt-4 approach-grid">
                    <div class="approach-text">
                        <p class="mb-4">
                            We deliver integrated solutions spanning planning, engineering, construction, and modern building technologies. Our expertise bridges traditional civil engineering with advanced construction systems.
                        </p>
                        <p class="text-secondary">
                            This allows us to meet the critical demands of climate resilience, speed of delivery, and long-term sustainability for both public and private infrastructure.
                        </p>
                    </div>
                    <div class="nm-inset">
                        <img src="survey.png" alt="Engineering survey drone and instruments" class="brand-img">
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership">
            <h2 class="mb-6">Leadership & Expertise</h2>
            <div class="grid-container">
                <div class="nm-card">
                    <h3>Regional Knowledge</h3>
                    <p class="text-secondary mt-4">Led by professionals with deep experience across marine works, transport infrastructure, and energy projects in Africa, India, and the Gulf.</p>
                </div>
                <div class="nm-card">
                    <h3>Technical Depth</h3>
                    <p class="text-secondary mt-4">Our teams integrate regional knowledge with technical depth and execution capability to ensure project reliability across diverse environments.</p>
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
    `,

    capabilities: () => `
        <section id="cap-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">Core Capabilities</h4>
            <h1>Integrated <span class="accent-page">Engineering</span> Solutions</h1>
        </section>

        <section id="marine">
            <div class="featured-cap nm-card">
                <div class="cap-info">
                    <h4 class="text-secondary mb-4">Sector 01</h4>
                    <h2>Marine & Coastal Infrastructure</h2>
                    <p class="mt-4 mb-6">We deliver robust marine infrastructure designed to withstand dynamic coastal and ocean conditions.</p>
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
                    <h4 class="text-secondary mb-4">Sector 02</h4>
                    <h2>Transport Infrastructure</h2>
                    <p class="mt-4 mb-6">Our transport solutions enhance connectivity and economic growth across regional markets.</p>
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
                    <h4 class="text-secondary mb-4">Sector 03</h4>
                    <h2>Energy Infrastructure</h2>
                    <p class="mt-4 mb-6">Supporting energy transition and reliability through resilient infrastructure development.</p>
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
                <h4 class="text-secondary mb-4">Sector 04</h4>
                <h2>Modern Construction Systems</h2>
                <div class="grid-container mt-6 systems-grid">
                    <div>
                        <h3>Precast Construction</h3>
                        <p class="mt-4 text-secondary">Industrialised precast solutions ensuring quality, speed, and precision for large-scale infrastructure.</p>
                        <img src="precast.png" alt="Precast yard" class="brand-img mt-4">
                    </div>
                    <div>
                        <h3>GFRG Systems</h3>
                        <p class="mt-4 text-secondary">Rapid, lightweight, and sustainable building technology for high-performance structural delivery.</p>
                        <img src="gfrg.png" alt="GFRG material surface" class="brand-img mt-4">
                    </div>
                </div>
            </div>
        </section>
    `,

    sustainability: () => `
        <section id="sustain-hero" class="subpage-hero">
            <h4 class="text-secondary mb-4">Sustainability</h4>
            <h1>Responsible <span class="accent-page">Infrastructure</span></h1>
        </section>

        <section id="esg">
            <div class="nm-card">
                <h4 class="text-secondary mb-4">Logic</h4>
                <h2>Balanced <span class="accent-page">Performance</span></h2>
                <p class="mt-4 esg-p">
                    Sustainability at SapthaVarnah is embedded in engineering decisions, material selection, and construction methodology. Our focus is on delivering infrastructure that balances performance, environmental responsibility, and long-term value.
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
                <div class="nm-card img-card container-inset">
                    <img src="gfrg.png" alt="GFRG structural material closeup" class="brand-img">
                </div>
                <div class="nm-card">
                    <ul class="initiative-list">
                        <li>
                            <strong>Geo-informed design</strong>
                            <p class="text-secondary">Using site-specific geological data to optimize foundation depth and material strength.</p>
                        </li>
                        <li>
                            <strong>Low-carbon precast</strong>
                            <p class="text-secondary">Shifting construction off-site to controlled environments to reduce waste and energy use.</p>
                        </li>
                        <li>
                            <strong>BIM-enabled execution</strong>
                            <p class="text-secondary">Digital twins ensure precision in planning, reducing rework and material errors.</p>
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
    `,

    contact: () => `
        <section id="contact-hero" class="subpage-hero contact-hero-bg">
            <h4 class="text-secondary mb-4">Get in Touch</h4>
            <h1>Connect with <span class="accent-page">Our Team</span></h1>
        </section>

        <section id="contact-details">
            <div class="grid-container contact-grid">
                <div class="nm-card">
                    <h4 class="text-secondary mb-4">Project Opportunities</h4>
                    <h2>We welcome discussions on <span class="accent-page">Infrastructure Challenges</span> across our served regions.</h2>
                    <div class="mt-6 contact-links-row">
                        <div>
                            <h4 class="text-secondary">Email</h4>
                            <a href="mailto:info@svgeotech.com" class="logo contact-link-item">info@svgeotech.com</a>
                        </div>
                        <div>
                            <h4 class="text-secondary">LinkedIn</h4>
                            <a href="#" class="logo contact-link-item">SapthaVarnah Geo Technologies</a>
                        </div>
                    </div>
                </div>
                <div class="nm-card img-card container-inset">
                    <h4 class="text-secondary mb-4">Regions Served</h4>
                    <p class="mb-4">Strategically positioned to serve emerging and established hubs.</p>
                    <img src="regions.png" alt="Global regions focusing on Africa, India, and the Gulf" class="brand-img mb-4">
                    <ul class="regions-list">
                        <li>&bull; Africa</li>
                        <li>&bull; India</li>
                        <li>&bull; Gulf Region</li>
                    </ul>
                </div>
            </div>
        </section>
    `
};
