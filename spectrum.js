export class SpectrumAnimation {
    constructor(canvasId, mode = 'digitalTwin') {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.mode = mode;
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.dpr = window.devicePixelRatio || 1;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    init() {
        this.resize();
        this.particles = [];
        
        if (this.mode === 'digitalTwin') {
            this.initDigitalTwin();
        } else if (this.mode === 'heavyFramework') {
            this.initHeavyFramework();
        } else if (this.mode === 'geoIntensity') {
            this.initGeoIntensity();
        }
 else if (this.mode === 'scaffold') {
            this.initScaffold();
        } else if (this.mode === 'laser') {
            this.initLaser();
        } else if (this.mode === 'foundation') {
            this.initFoundation();
        }
    }

    initDigitalTwin() {
        // Complex 3D-like wireframe nodes
        for (let i = 0; i < 60; i++) {
            this.particles.push({
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 800,
                z: (Math.random() - 0.5) * 800,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                vz: (Math.random() - 0.5) * 0.5,
                label: `PT-${Math.floor(Math.random()*999)}`
            });
        }
    }

    initHeavyFramework() {
        // Thick industrial beams
        for (let i = 0; i < 20; i++) {
            this.particles.push({
                x1: Math.random() * (this.canvas.width / this.dpr),
                y1: Math.random() * (this.canvas.height / this.dpr),
                x2: Math.random() * (this.canvas.width / this.dpr),
                y2: Math.random() * (this.canvas.height / this.dpr),
                thickness: Math.random() * 8 + 4,
                opacity: Math.random() * 0.3 + 0.1,
                drift: Math.random() * 2,
                offset: Math.random() * 100
            });
        }
    }

    initGeoIntensity() {
        // Multi-colored dense topographic layers
        this.particles = [];
        const layerCount = 12;
        for (let i = 0; i < layerCount; i++) {
            const points = [];
            const segments = 20;
            const w = (this.canvas.width / this.dpr);
            for (let j = 0; j <= segments; j++) {
                points.push({
                    x: (w / segments) * j,
                    y: (this.canvas.height / this.dpr) * 0.1 + (i * 50),
                    baseY: (this.canvas.height / this.dpr) * 0.1 + (i * 50)
                });
            }
            this.particles.push({ 
                points, 
                offset: Math.random() * 100,
                color: i % 2 === 0 ? 'rgba(0, 51, 102, 0.2)' : 'rgba(156, 66, 33, 0.15)'
            });
        }
    }

    initScaffold() {
        for (let i = 0; i < 6; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                size: Math.random() * 100 + 50,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                rotation: Math.random() * Math.PI,
                rv: (Math.random() - 0.5) * 0.01
            });
        }
    }

    initLaser() {
        this.particles = {
            scanY: 0,
            dir: 1,
            points: []
        };
        for (let i = 0; i < 20; i++) {
            this.particles.points.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                active: 0
            });
        }
    }

    initFoundation() {
        const count = 12;
        const w = (this.canvas.width / this.dpr);
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: (w / count) * i + (w / count / 2),
                h: Math.random() * 200 + 100,
                targetH: Math.random() * 200 + 100,
                offset: Math.random() * 100
            });
        }
    }

    resize() {
        const parent = this.canvas.parentElement;
        this.dpr = window.devicePixelRatio || 1;
        this.canvas.width = parent.offsetWidth * this.dpr;
        this.canvas.height = parent.offsetHeight * this.dpr;
        this.canvas.style.width = `${parent.offsetWidth}px`;
        this.canvas.style.height = `${parent.offsetHeight}px`;
        this.ctx.scale(this.dpr, this.dpr);
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }

    animate() {
        if (!this.canvas) return;
        this.ctx.clearRect(0, 0, this.canvas.width / this.dpr, this.canvas.height / this.dpr);

        if (this.mode === 'digitalTwin') {
            this.drawDigitalTwin();
        } else if (this.mode === 'heavyFramework') {
            this.drawHeavyFramework();
        } else if (this.mode === 'geoIntensity') {
            this.drawGeoIntensity();
        }
 else if (this.mode === 'scaffold') {
            this.drawScaffold();
        } else if (this.mode === 'laser') {
            this.drawLaser();
        } else if (this.mode === 'foundation') {
            this.drawFoundation();
        }

        requestAnimationFrame(() => this.animate());
    }

    drawDigitalTwin() {
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;
        const cx = w / 2;
        const cy = h / 2;
        
        const rotationAngle = Date.now() * 0.0005;
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.15)';
        this.ctx.lineWidth = 0.5;

        // Project 3D to 2D
        const projected = this.particles.map(p => {
            const x = p.x * Math.cos(rotationAngle) - p.z * Math.sin(rotationAngle);
            const z = p.x * Math.sin(rotationAngle) + p.z * Math.cos(rotationAngle);
            const scale = 600 / (600 + z);
            return {
                x: cx + x * scale,
                y: cy + p.y * scale,
                scale,
                label: p.label
            };
        });

        // Draw connections
        for (let i = 0; i < projected.length; i++) {
            const p1 = projected[i];
            for (let j = i + 1; j < projected.length; j++) {
                const p2 = projected[j];
                const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
                if (dist < 100 * p1.scale) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
            
            // Draw nodes and labels sparingly
            if (i % 5 === 0) {
                this.ctx.fillStyle = 'rgba(0, 51, 102, 0.3)';
                this.ctx.beginPath();
                this.ctx.arc(p1.x, p1.y, 1.5 * p1.scale, 0, Math.PI * 2);
                this.ctx.fill();
                
                if (p1.scale > 1.2) {
                    this.ctx.font = `${6 * p1.scale}px Inter`;
                    this.ctx.fillText(p1.label, p1.x + 5, p1.y);
                }
            }
        }
    }

    drawHeavyFramework() {
        this.particles.forEach(p => {
            const time = Date.now() * 0.001;
            const driftX = Math.sin(time + p.offset) * p.drift * 20;
            const driftY = Math.cos(time + p.offset) * p.drift * 20;

            this.ctx.strokeStyle = `rgba(45, 55, 72, ${p.opacity})`;
            this.ctx.lineWidth = p.thickness;
            this.ctx.lineCap = 'square';
            
            this.ctx.beginPath();
            this.ctx.moveTo(p.x1 + driftX, p.y1 + driftY);
            this.ctx.lineTo(p.x2 + driftX, p.y2 + driftY);
            this.ctx.stroke();

            // Highlight joints
            this.ctx.fillStyle = 'rgba(156, 66, 33, 0.15)';
            this.ctx.beginPath();
            this.ctx.arc(p.x1 + driftX, p.y1 + driftY, p.thickness/2, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawGeoIntensity() {
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;

        this.particles.forEach(layer => {
            layer.offset += 0.01;
            this.ctx.beginPath();
            this.ctx.fillStyle = layer.color;
            
            this.ctx.moveTo(0, h);
            layer.points.forEach((p, idx) => {
                const noise = Math.sin(layer.offset + (idx * 0.3)) * 30;
                const distToMouse = Math.sqrt(Math.pow(p.x - this.mouse.x, 2) + Math.pow(p.y - this.mouse.y, 2));
                const mouseEffect = distToMouse < 300 ? (300 - distToMouse) * 0.2 : 0;
                
                this.ctx.lineTo(p.x, p.y + noise - mouseEffect);
            });
            this.ctx.lineTo(w, h);
            this.ctx.fill();
        });
    }

    setMode(mode) {
        this.mode = mode;
        this.init();
    }

    destroy() {
        this.canvas = null;
    }
}
