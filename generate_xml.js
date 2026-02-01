const fs = require('fs');

const escapeXML = (str) => {
    return str.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'
        }[m];
    });
};

const createNode = (id, value, x, y, width = 120, height = 60, style = "rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;") => {
    return `    <mxCell id="${id}" value="${escapeXML(value)}" style="${style}" vertex="1" parent="1">
      <mxGeometry x="${x}" y="${y}" width="${width}" height="${height}" as="geometry" />
    </mxCell>`;
};

const createEdge = (id, source, target) => {
    return `    <mxCell id="${id}" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="${source}" target="${target}">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>`;
};

const generateXML = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="Electron" type="device">
  <diagram id="SapthaVarnahFlow" name="Website Flow">
    <mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />\n`;

    let idCounter = 2;
    const nodes = [];
    const edges = [];

    // --- Layout Logic ---
    // Level 0: Home
    const homeX = 400;
    const homeY = 40;
    xml += createNode(idCounter, "HOME PAGE", homeX, homeY, 160, 60, "rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;fontSize=14;");
    const homeId = idCounter++;

    // Level 1: Main Sections + Guidelines
    const sections = [
        { name: "DESIGN GUIDELINES", color: "#fff2cc", stroke: "#d6b656" },
        { name: "ABOUT US", color: "#dae8fc", stroke: "#6c8ebf" },
        { name: "CAPABILITIES", color: "#dae8fc", stroke: "#6c8ebf" },
        { name: "SUSTAINABILITY", color: "#dae8fc", stroke: "#6c8ebf" },
        { name: "PROJECTS", color: "#dae8fc", stroke: "#6c8ebf" },
        { name: "CONTACT", color: "#dae8fc", stroke: "#6c8ebf" }
    ];

    const startX = -180; // Shift left to accommodate new section
    const spacingX = 220;
    const sectionY = 200;

    const sectionIds = [];

    sections.forEach((sec, index) => {
        const x = startX + (index * spacingX);
        const style = `rounded=1;whiteSpace=wrap;html=1;fillColor=${sec.color};strokeColor=${sec.stroke};fontStyle=1;`;
        xml += createNode(idCounter, sec.name, x, sectionY, 160, 60, style);
        
        // Edge from Home
        xml += createEdge(1000 + idCounter, homeId, idCounter);
        
        sectionIds.push({ id: idCounter, x: x, y: sectionY, name: sec.name });
        idCounter++;
    });

    // Level 2: Sub-content
    
    const structure = {
        "DESIGN GUIDELINES": [
            "Palette: Earth Spectrum",
            "Typography: Inter/Satoshi",
            "Tone: Calm & Intelligent",
            "Stack: Webflow / Next.js",
            "Imagery: Aerials & Materials"
        ],
        "HOME PAGE": [
            "Hero: Left Aligned",
            "Who We Are",
            "Icon Grid: Core Cap",
            "Map: Geo Presence",
            "Sustainability Snippet",
            "Quiet Confidence Closing"
        ],
        "ABOUT US": [
            "Philosophy: Earth Harmony",
            "Engineering Approach",
            "Leadership (LinkedIns)"
        ],
        "CAPABILITIES": [
            "Marine: Deep Ocean",
            "Transport: Basalt Gray",
            "Energy: Mineral Rust",
            "Precast: Stone Beige",
            "GFRG: Clay/Sand"
        ],
        "SUSTAINABILITY": [
            "ESG Logic",
            "Climate Adaptation",
            "Resource Efficiency"
        ],
        "PROJECTS": [
            "Sector Specific Experience"
        ],
        "CONTACT": [
            "Regions Served",
            "Email: info@svgeotech.com",
            "LinkedIn Page"
        ]
    };

    // Add children nodes
    // Handle HOME specifically since it's the root visually but has its own content flow in the chart logic.
    // In the mermaid, I showed Home structure separately.
    // Let's put Home structure to the far right or left, or maybe just below Home but differentiate from Nav.
    // Actually, let's put section details VERTICALLY below their headers.

    sectionIds.forEach((sec) => {
        const children = structure[sec.name];
        if (children) {
            let currentY = sec.y + 100;
            let parentId = sec.id;
            
            children.forEach((child) => {
                xml += createNode(idCounter, child, sec.x, currentY, 160, 50, "whiteSpace=wrap;html=1;rounded=1;");
                xml += createEdge(2000 + idCounter, parentId, idCounter);
                parentId = idCounter; // Chain them: A -> B -> C
                idCounter++;
                currentY += 80;
            });
        }
    });

    // Handle Home Page Structure separately? 
    // In Mermaid I linked Home -> Hero -> WhoWeAre...
    // I can put this maybe to the left of the main nav tree or integrated.
    // Let's put it under Home but shift the other navs down or to the side?
    // Start simple: Just put Home Content to the side of Home.
    
    const homeContentX = homeX + 300; // Right of Home
    let homeContentY = homeY;
    let homeParent = homeId;
    
    structure["HOME PAGE"].forEach(item => {
        xml += createNode(idCounter, item, homeContentX, homeContentY, 180, 50, "whiteSpace=wrap;html=1;rounded=1;fillColor=#e1d5e7;strokeColor=#9673a6;");
        xml += createEdge(3000 + idCounter, homeParent, idCounter);
        homeParent = idCounter;
        idCounter++;
        homeContentY += 80;
    });

    xml += `      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`;

    fs.writeFileSync('website_flowchart.xml', xml);
    console.log("XML Generated: website_flowchart.xml");
};

generateXML();
