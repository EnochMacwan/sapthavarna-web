const SERVICES_DATA = [
    {
        id: "marine",
        category: "Marine & Coastal",
        title: "Marine & Coastal Infrastructure",
        description: "Ports, harbours, breakwaters, and coastal protection systems designed for dynamic environments.",
        image: "services/marine.png",
        link: "/marine",
        services: [
            { name: "Ports & Harbours", desc: "Design and construction of port facilities, berths, and quay walls." },
            { name: "Breakwaters & Revetments", desc: "Coastal protection structures engineered for long-term resilience." },
            { name: "Coastal Protection", desc: "Beach nourishment, groynes, and erosion control systems." },
            { name: "Marine Foundations", desc: "Piling, caissons, and foundation systems for marine structures." },
            { name: "Dredging Support", desc: "Technical support for dredging and land reclamation projects." },
            { name: "Climate Adaptation", desc: "Infrastructure designed for rising sea levels and changing conditions." }
        ]
    },
    {
        id: "transport",
        category: "Transport",
        title: "Transport Infrastructure",
        description: "Roads, bridges, airports, and logistics infrastructure connecting regions.",
        image: "services/transport.png",
        link: "/transport",
        services: [
            { name: "Roads & Highways", desc: "Major road networks and highway construction." },
            { name: "Bridges & Structures", desc: "Bridge engineering and structural works." },
            { name: "Airport Infrastructure", desc: "Runways, aprons, and airport facilities." },
            { name: "Logistics Infrastructure", desc: "Warehousing, freight corridors, and distribution hubs." },
            { name: "Multimodal Interfaces", desc: "Integration points between transport modes." }
        ]
    },
    {
        id: "energy",
        category: "Energy",
        title: "Energy Infrastructure",
        description: "Renewable energy infrastructure and power systems supporting energy transition.",
        image: "services/energy.png",
        link: "/energy",
        services: [
            { name: "Renewable Enabling Works", desc: "Civil works for solar, wind, and other renewable installations." },
            { name: "Substations & Power", desc: "Substation construction and power transmission infrastructure." },
            { name: "Coastal Energy Facilities", desc: "Infrastructure for coastal and offshore energy projects." },
            { name: "Balance-of-Plant", desc: "Supporting infrastructure for power generation facilities." }
        ]
    },
    {
        id: "systems",
        category: "Construction Systems",
        title: "Modern Construction Systems",
        description: "Precast and GFRG modern building technologies for speed, quality, and sustainability.",
        image: "services/systems.png",
        link: "/systems",
        services: [
            { name: "Precast Construction", desc: "Industrialised precast solutions ensuring quality, speed, and precision." },
            { name: "GFRG Systems", desc: "Glass Fibre Reinforced Gypsum — rapid, lightweight building technology." }
        ]
    }
];

const featuredService = {
    tag: "Featured",
    title: "Integrated Solutions",
    description: "End-to-end infrastructure from feasibility through construction.",
    link: "/capabilities",
    buttonText: "View All",
    image: "services/featured.png"
};
