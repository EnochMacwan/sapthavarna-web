export class SpectrumAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        this.particles = [];
        this.sparks = [];
        this.worker = { x: 0, y: 0, tx: 0, ty: 0, state: 'idle', targetIdx: -1, weldTime: 0, frame: 0 };
        this.mouse = { x: -1000, y: -1000 };
        
        // High-DPI scaling (clamp to max 3x for performance)
        this.dpr = Math.min(window.devicePixelRatio || 1, 3);
        
        this.themeColor = '#003366'; // Cement Grey/Blue
        this.accentColor = '#C69061'; // Warm accent (brand color)
        
        this.active = true;

        // Bound handlers for cleanup
        this._resizeHandler = () => this.resize();
        this._mouseMoveHandler = (e) => this.handleMouseMove(e);
        
        // Wait for fonts to be ready to capture text correctly
        if (document.fonts) {
            document.fonts.ready.then(() => {
                if (this.active) this.init();
            });
        } else {
            this.init();
        }
        this.animate();
        
        window.addEventListener('resize', this._resizeHandler);
        window.addEventListener('mousemove', this._mouseMoveHandler);
        window.resetBrandBuild = () => this.init();
    }

    init() {
        this.resize();
        this.particles = [];
        this.sparks = [];
        
        // High-res text rendering canvas
        const tempCanvas = document.createElement('canvas');
        const tctx = tempCanvas.getContext('2d');
        
        // Scale up for crisp text sampling
        const textScale = 2;
        const w = 1200 * textScale, h = 220 * textScale;
        tempCanvas.width = w; tempCanvas.height = h;
        
        tctx.fillStyle = 'black';
        tctx.font = `bold ${100 * textScale}px Inter, system-ui, sans-serif`;
        tctx.textAlign = 'center';
        tctx.textBaseline = 'middle';
        tctx.fillText('SAPTHAVARNAH', w/2, h/2);
        
        const imageData = tctx.getImageData(0, 0, w, h).data;
        
        // Higher particle density for denser text
        const isMobile = window.innerWidth < 768;
        const isHighDPI = this.dpr >= 2;
        const gap = isMobile ? 10 * textScale : (isHighDPI ? 5 * textScale : 6 * textScale);
        
        const cw = (this.canvas.width / this.dpr);
        const ch = (this.canvas.height / this.dpr);
        
        for (let y = 0; y < h; y += gap) {
            for (let x = 0; x < w; x += gap) {
                const index = (y * w + x) * 4;
                if (imageData[index + 3] > 128) {
                    const tx = cw/2 - (w/textScale)/2 + x/textScale;
                    const ty = ch * 0.82 - (h/textScale)/2 + y/textScale;
                    const isBrick = Math.random() > 0.4;
                    
                    // Larger, crisper particles for high-DPI
                    const baseSize = isBrick ? 8 : 5;
                    
                    this.particles.push({
                        tx, ty,
                        x: tx + (Math.random() - 0.5) * 50,
                        y: -Math.random() * 1500 - 100,
                        vx: 0, vy: 5 + Math.random() * 10,
                        c: isBrick ? this.accentColor : this.themeColor,
                        size: baseSize,
                        delay: Math.random() * 150,
                        landed: false, welded: false, bounce: 0
                    });
                }
            }
        }
        
        this.worker = { 
            x: cw/2, y: ch, tx: cw/2, ty: ch*0.8, 
            state: 'idle', targetIdx: -1, weldTime: 0, frame: 0,
            scale: 1.8 // Larger worker for visibility
        };
    }

    resize() {
        if (!this.canvas) return;
        const p = this.canvas.parentElement;
        
        // Set canvas size with proper DPI scaling
        this.canvas.width = p.offsetWidth * this.dpr;
        this.canvas.height = p.offsetHeight * this.dpr;
        
        // Set CSS size
        this.canvas.style.width = p.offsetWidth + 'px';
        this.canvas.style.height = p.offsetHeight + 'px';
        
        // Reset and scale context
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(this.dpr, this.dpr);
        
        // Enable crisp rendering
        this.ctx.imageSmoothingEnabled = false;
    }

    handleMouseMove(e) {
        if (!this.canvas) return;
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
                // Add welding sparks
                if (Math.random() > 0.5) {
                    this.sparks.push({
                        x: this.worker.x + 10,
                        y: this.worker.y - 15,
                        vx: (Math.random() - 0.5) * 8,
                        vy: -Math.random() * 6 - 2,
                        life: 20 + Math.random() * 20
                    });
                }
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
        if (!this.active || !this.canvas) return;
        const cw = this.canvas.width / this.dpr, ch = this.canvas.height / this.dpr;
        this.ctx.clearRect(0, 0, cw, ch);
        
        // Draw particles (bricks)
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
            // Use rounded rectangles for crisper appearance
            this.ctx.beginPath();
            this.ctx.roundRect(p.x, p.y, p.size, p.size * 0.6, 1);
            this.ctx.fill();
            
            // Highlight on welded bricks
            if (p.welded) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
                this.ctx.fillRect(p.x, p.y, p.size, p.size * 0.15);
            }
        });

        // Draw welding sparks
        this.sparks = this.sparks.filter(s => {
            s.x += s.vx;
            s.y += s.vy;
            s.vy += 0.3;
            s.life--;
            
            const alpha = s.life / 40;
            this.ctx.fillStyle = `rgba(255, 200, 50, ${alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
            this.ctx.fill();
            
            return s.life > 0;
        });

        this.updateWorker();
        this.drawWorker();

        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.active = false;
        window.removeEventListener('resize', this._resizeHandler);
        window.removeEventListener('mousemove', this._mouseMoveHandler);
        this.canvas = null;
    }
}
