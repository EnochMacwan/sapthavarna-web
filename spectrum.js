export class SpectrumAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.sparks = [];
        this.worker = { x: 0, y: 0, tx: 0, ty: 0, state: 'idle', targetIdx: -1, weldTime: 0, frame: 0 };
        this.mouse = { x: -1000, y: -1000 };
        this.dpr = window.devicePixelRatio || 1;
        this.themeColor = '#003366'; // Cement Grey/Blue
        this.accentColor = '#9c4221'; // Brick Red
        
        // Wait for fonts to be ready to capture text correctly
        if (document.fonts) {
            document.fonts.ready.then(() => this.init());
        } else {
            this.init();
        }
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.resetBrandBuild = () => this.init();
    }

    init() {
        this.resize();
        this.particles = [];
        this.sparks = [];
        
        const tempCanvas = document.createElement('canvas');
        const tctx = tempCanvas.getContext('2d');
        const w = 1100, h = 200;
        tempCanvas.width = w; tempCanvas.height = h;
        
        tctx.fillStyle = 'black';
        tctx.font = 'bold 90px Inter';
        tctx.textAlign = 'center';
        tctx.fillText('SAPTHAVARNAH', w/2, h/2 + 30);
        
        const imageData = tctx.getImageData(0, 0, w, h).data;
        const gap = 8; // Larger gap for bigger, more detailed blocks
        const cw = (this.canvas.width / this.dpr);
        const ch = (this.canvas.height / this.dpr);
        
        for (let y = 0; y < h; y += gap) {
            for (let x = 0; x < w; x += gap) {
                const index = (y * w + x) * 4;
                if (imageData[index + 3] > 128) {
                    const tx = cw/2 - w/2 + x;
                    const ty = ch * 0.82 - h/2 + y; // Lowered even more for balance
                    const isBrick = Math.random() > 0.4;
                    
                    this.particles.push({
                        tx, ty,
                        x: tx + (Math.random() - 0.5) * 50,
                        y: -Math.random() * 1500 - 100,
                        vx: 0, vy: 5 + Math.random() * 10,
                        c: isBrick ? this.accentColor : this.themeColor,
                        size: isBrick ? 7 : 4, // Chunkier bricks
                        delay: Math.random() * 150,
                        landed: false, welded: false, bounce: 0
                    });
                }
            }
        }
        
        this.worker = { 
            x: cw/2, y: ch, tx: cw/2, ty: ch*0.8, 
            state: 'idle', targetIdx: -1, weldTime: 0, frame: 0,
            scale: 1.5 // Scaled up worker presence
        };
    }

    resize() {
        if (!this.canvas) return;
        const p = this.canvas.parentElement;
        this.canvas.width = p.offsetWidth * this.dpr;
        this.canvas.height = p.offsetHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
    }

    handleMouseMove(e) {
        const r = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - r.left; this.mouse.y = e.clientY - r.top;
    }

    updateWorker() {
        this.worker.frame++;
        if (this.worker.state === 'idle' || this.worker.state === 'walking') {
            let bestDist = Infinity, bestIdx = -1;
            this.particles.forEach((p, i) => {
                if (p.landed && !p.welded) {
                    const dx = p.tx - this.worker.x, dy = p.ty - this.worker.y;
                    const d = dx*dx + dy*dy;
                    if (d < bestDist) { bestDist = d; bestIdx = i; }
                }
            });

            if (bestIdx !== -1) {
                this.worker.targetIdx = bestIdx;
                this.worker.tx = this.particles[bestIdx].tx;
                this.worker.ty = this.particles[bestIdx].ty;
                this.worker.state = 'walking';
            }
        }

        if (this.worker.state === 'walking') {
            const dx = this.worker.tx - this.worker.x, dy = this.worker.ty - (this.worker.y - 15);
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 10) {
                this.worker.state = 'welding'; this.worker.weldTime = 40;
            } else {
                this.worker.x += dx * 0.12; this.worker.y += dy * 0.12;
            }
        }

        if (this.worker.state === 'welding') {
            if (this.worker.weldTime > 0) {
                this.worker.weldTime--;
            } else {
                if (this.worker.targetIdx !== -1) this.particles[this.worker.targetIdx].welded = true;
                this.worker.state = 'idle';
            }
        }
    }

    drawWorker() {
        const { x, y, state, frame, scale } = this.worker;
        const bob = state === 'walking' ? Math.sin(frame * 0.25) * 4 : 0;
        
        this.ctx.save();
        this.ctx.translate(x, y + bob);
        this.ctx.scale(scale, scale);

        // Legs (detailed boots)
        this.ctx.fillStyle = '#1a202c'; 
        this.ctx.fillRect(-5, -6, 3, 6); // Left boot
        this.ctx.fillRect(2, -6, 3, 6);  // Right boot

        // Torso & Hi-Viz Vest (More detail)
        this.ctx.fillStyle = '#f6ad55'; // Vibrant Orange
        this.ctx.fillRect(-7, -22, 14, 16);
        this.ctx.fillStyle = 'rgba(255,255,255,0.9)'; // Reflective strips
        this.ctx.fillRect(-7, -18, 14, 2);
        this.ctx.fillRect(-7, -12, 14, 2);

        // Arms
        this.ctx.fillStyle = '#4a5568';
        if (state === 'welding') {
            this.ctx.fillRect(2, -18, 12, 3); // Welding arm out
        } else {
            this.ctx.fillRect(7, -18, 3, 10);
            this.ctx.fillRect(-10, -18, 3, 10);
        }

        // Helmet (More structured)
        this.ctx.fillStyle = '#f6e05e'; // Bright Yellow
        this.ctx.beginPath();
        this.ctx.arc(0, -25, 6, Math.PI, 0);
        this.ctx.fill();
        this.ctx.fillRect(-8, -25, 16, 2); // Brim

        this.ctx.restore();
    }

    animate() {
        if (!this.canvas) return;
        const cw = this.canvas.width / this.dpr, ch = this.canvas.height / this.dpr;
        this.ctx.clearRect(0, 0, cw, ch);
        
        // Bricks/Particles
        this.ctx.shadowBlur = 0;
        this.particles.forEach(p => {
            if (p.delay > 0) { p.delay--; return; }
            if (!p.landed) {
                p.y += p.vy; p.vy += 0.3;
                if (p.y >= p.ty) { p.y = p.ty; p.landed = true; p.bounce = 6; }
            } else {
                p.x += (p.tx - p.x) * 0.1; p.y += (p.ty - p.y) * 0.1;
                if (p.bounce > 0) { p.y -= p.bounce; p.bounce *= -0.5; }
            }
            this.ctx.fillStyle = p.c;
            this.ctx.fillRect(p.x, p.y, p.size, p.size * 0.6);
            if (p.welded) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                this.ctx.fillRect(p.x, p.y, p.size, p.size * 0.1);
            }
        });

        this.updateWorker();
        this.drawWorker();

        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.canvas = null;
    }
}
