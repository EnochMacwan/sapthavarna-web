export class SpectrumAnimation {
    constructor(canvasId, mode = 'blueprint') {
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
        
        if (this.mode === 'blueprint') {
            this.initBlueprint();
        } else if (this.mode === 'structural') {
            this.initStructural();
        } else if (this.mode === 'topographic') {
            this.initTopographic();
        } else if (this.mode === 'scaffold') {
            this.initScaffold();
        } else if (this.mode === 'laser') {
            this.initLaser();
        } else if (this.mode === 'foundation') {
            this.initFoundation();
        }
    }

    initBlueprint() {
        for (let i = 0; i < 40; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: 2
            });
        }
    }

    initStructural() {
        for (let i = 0; i < 15; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                w: Math.random() * 100 + 50,
                h: Math.random() * 20 + 5,
                vx: (Math.random() - 0.5) * 0.1,
                vy: (Math.random() - 0.5) * 0.1,
                opacity: Math.random() * 0.1 + 0.05
            });
        }
    }

    initTopographic() {
        for (let i = 0; i < 8; i++) {
            const points = [];
            const segments = 10;
            const w = (this.canvas.width / this.dpr);
            for (let j = 0; j <= segments; j++) {
                points.push({
                    x: (w / segments) * j,
                    y: (this.canvas.height / this.dpr) * 0.2 + (i * 60) + Math.random() * 20,
                    baseY: (this.canvas.height / this.dpr) * 0.2 + (i * 60)
                });
            }
            this.particles.push({ points, offset: Math.random() * 100 });
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

        if (this.mode === 'blueprint') {
            this.drawBlueprint();
        } else if (this.mode === 'structural') {
            this.drawStructural();
        } else if (this.mode === 'topographic') {
            this.drawTopographic();
        } else if (this.mode === 'scaffold') {
            this.drawScaffold();
        } else if (this.mode === 'laser') {
            this.drawLaser();
        } else if (this.mode === 'foundation') {
            this.drawFoundation();
        }

        requestAnimationFrame(() => this.animate());
    }

    drawBlueprint() {
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.08)';
        this.ctx.lineWidth = 0.5;

        // Connections
        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.x < 0 || p1.x > this.canvas.width / this.dpr) p1.vx *= -1;
            if (p1.y < 0 || p1.y > this.canvas.height / this.dpr) p1.vy *= -1;

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }

            // Draw Node
            this.ctx.fillStyle = 'rgba(0, 51, 102, 0.15)';
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, 1.5, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawStructural() {
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -100) p.x = this.canvas.width / this.dpr + 100;
            if (p.x > this.canvas.width / this.dpr + 100) p.x = -100;
            if (p.y < -100) p.y = this.canvas.height / this.dpr + 100;
            if (p.y > this.canvas.height / this.dpr + 100) p.y = -100;

            this.ctx.fillStyle = `rgba(45, 55, 72, ${p.opacity})`;
            this.ctx.fillRect(p.x, p.y, p.w, p.h);
            
            this.ctx.strokeStyle = 'rgba(45, 55, 72, 0.1)';
            this.ctx.strokeRect(p.x, p.y, p.w, p.h);
        });
    }

    drawTopographic() {
        this.ctx.strokeStyle = 'rgba(198, 144, 97, 0.12)';
        this.ctx.lineWidth = 1;
        
        this.particles.forEach(line => {
            line.offset += 0.005;
            this.ctx.beginPath();
            line.points.forEach((p, idx) => {
                const noise = Math.sin(line.offset + (idx * 0.5)) * 15;
                const distToMouse = Math.sqrt(Math.pow(p.x - this.mouse.x, 2) + Math.pow(p.y - this.mouse.y, 2));
                const mouseEffect = distToMouse < 200 ? (200 - distToMouse) * 0.1 : 0;
                
                if (idx === 0) this.ctx.moveTo(p.x, p.y + noise - mouseEffect);
                else this.ctx.lineTo(p.x, p.y + noise - mouseEffect);
            });
            this.ctx.stroke();
        });
    }

    drawScaffold() {
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.1)';
        this.ctx.lineWidth = 0.8;
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rv;

            if (p.x < 0 || p.x > this.canvas.width / this.dpr) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height / this.dpr) p.vy *= -1;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);
            this.ctx.strokeRect(-p.size/2, -p.size/2, p.size, p.size);
            
            // Connection lines to mouse
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            if (Math.sqrt(dx*dx + dy*dy) < 300) {
                this.ctx.rotate(-p.rotation); // unrotate for direct line
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.lineTo(this.mouse.x - p.x, this.mouse.y - p.y);
                this.ctx.stroke();
            }
            this.ctx.restore();
        });
    }

    drawLaser() {
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;
        
        this.particles.scanY += 2 * this.particles.dir;
        if (this.particles.scanY > h || this.particles.scanY < 0) this.particles.dir *= -1;

        // Laser line
        this.ctx.strokeStyle = 'rgba(156, 66, 33, 0.15)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.particles.scanY);
        this.ctx.lineTo(w, this.particles.scanY);
        this.ctx.stroke();

        // Reveal points
        this.particles.points.forEach(p => {
            const dist = Math.abs(p.y - this.particles.scanY);
            if (dist < 50) p.active = 1 - (dist / 50);
            else p.active *= 0.95;

            if (p.active > 0.01) {
                this.ctx.fillStyle = `rgba(0, 51, 102, ${p.active * 0.2})`;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }

    drawFoundation() {
        this.ctx.fillStyle = 'rgba(45, 55, 72, 0.08)';
        this.ctx.strokeStyle = 'rgba(45, 55, 72, 0.15)';
        const h_total = this.canvas.height / this.dpr;
        
        this.particles.forEach(p => {
            p.offset += 0.02;
            const pulse = Math.sin(p.offset) * 20;
            const currentH = p.h + pulse;
            
            this.ctx.fillRect(p.x - 10, h_total - currentH, 20, currentH);
            this.ctx.strokeRect(p.x - 10, h_total - currentH, 20, currentH);
            
            // Mouse effect
            const dx = p.x - this.mouse.x;
            if (Math.abs(dx) < 100) {
                this.ctx.fillStyle = 'rgba(156, 66, 33, 0.1)';
                this.ctx.fillRect(p.x - 12, h_total - currentH - 5, 24, 5);
            }
            this.ctx.fillStyle = 'rgba(45, 55, 72, 0.08)';
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
