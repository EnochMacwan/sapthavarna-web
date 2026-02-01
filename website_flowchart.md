# SapthaVarnah Website Process Flow

Based on the analysis of `AI suggestions website SapthaVarnah.docx` and `AI guidelines SapthaVarnah Website.pptx`, here is the refined flowchart.

```mermaid
graph TD
    %% Main Navigation
    Home[HOME PAGE]
    About[ABOUT US]
    Capabilities[CAPABILITIES]
    Sustain[SUSTAINABILITY]
    Projects[PROJECTS & EXPERIENCE]
    Contact[CONTACT]
    Design[DESIGN & TECH GUIDELINES]

    %% Home Page Connections
    Home -->|Nav| About
    Home -->|Nav| Capabilities
    Home -->|Nav| Sustain
    Home -->|Nav| Projects
    Home -->|Nav| Contact
    Home -->|Guideline| Design

    %% Design Guidelines
    subgraph "Design System"
        direction TB
        Palette[Palette: Off-white, Graphite, Gray]
        Accents[Section Accents: Marine/Transport/Energy...]
        Type[Typography: Inter / Satoshi]
        Tone[Tone: Calm, Intelligent, Credible]
        Stack[Stack: Webflow or Next.js + GSAP]
    end
    Design --- Palette
    Palette --> Accents
    Accents --> Type
    Type --> Tone
    Tone --> Stack

    %% Home Page Structure
    subgraph "Home Page Structure"
        direction TB
        Hero[Hero Section<br/>'Engineering the Full Spectrum...']
        WhoWeAre[Who We Are<br/>Snippet: 'Seven colours of earth']
        CapGrid[Capabilities Icon Grid<br/>5 items with 1-line desc]
        Map[Geographic Focus<br/>Africa | India | Gulf Map]
        SustainPreview[Sustainability Intelligence<br/>No buzzwords]
        Closing[Closing Statement<br/>'Quiet Confidence']
    end
    Home --- Hero
    Hero --> WhoWeAre
    WhoWeAre --> CapGrid
    CapGrid --> Map
    Map --> SustainPreview
    SustainPreview --> Closing

    %% About Page Structure
    subgraph "About Page Content"
        direction TB
        Philosophy[Our Philosophy<br/>Earth Harmony]
        Appro[Engineering Approach]
        Leadership[Leadership<br/>No long bios, LinkedIn focus]
    end
    About --- Philosophy
    Philosophy --> Appro
    Appro --> Leadership

    %% Capabilities Page Structure
    subgraph "Capabilities Content"
        direction TB
        Marine[Marine & Coastal<br/>Accent: Deep Ocean Blue]
        Transport[Transport<br/>Accent: Basalt Gray]
        Energy[Energy<br/>Accent: Mineral Rust]
        Precast[Modern Precast<br/>Accent: Stone Beige]
        GFRG[GFRG Systems<br/>Accent: Clay/Sand]
    end
    Capabilities --- Marine
    Marine --> Transport
    Transport --> Energy
    Energy --> Precast
    Precast --> GFRG

    %% Sustainability Page Structure
    subgraph "Sustainability Content"
        direction TB
        ESG[ESG Logic]
        Adap[Climate Adaptation]
        Res[Resource Efficiency]
    end
    Sustain --- ESG
    ESG --> Adap
    Adap --> Res

    %% Contact Page Structure
    subgraph "Contact Content"
        direction TB
        Reg[Regions Served]
        Em[Email & LinkedIn]
    end
    Contact --- Reg
    Reg --> Em
```

## Key Highlights
- **Tagline**: "Engineering the Full Spectrum of the Earth"
- **Core Philosophy**: Inspired by the seven colours of the earth (diversity, resilience).
- **Regions**: Africa, India, Gulf.
- **Key Offerings**: Marine, Transport, Energy, Precast, GFRG.
