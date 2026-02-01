export class SpectrumAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.dpr = window.devicePixelRatio || 1;
        this.themeColor = '#003366'; // Slate Blue/Cement
        this.accentColor = '#9c4221'; // Earthy Red/Brick
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.resetBrandBuild = () => this.init();
    }

    init() {
        this.resize();
        this.particles = [];
        
        const tempCanvas = document.createElement('canvas');
        const tctx = tempCanvas.getContext('2d');
        const w = 1000, h = 200;
        tempCanvas.width = w;
        tempCanvas.height = h;
        
        tctx.fillStyle = 'black';
        tctx.font = 'bold 90px Inter';
        tctx.textAlign = 'center';
        tctx.fillText('SAPTHAVARNA', w/2, h/2 + 30);
        
        const imageData = tctx.getImageData(0, 0, w, h).data;
        const gap = 4;
        const cw = (this.canvas.width / this.dpr);
        const ch = (this.canvas.height / this.dpr);
        
        for (let y = 0; y < h; y += gap) {
            for (let x = 0; x < w; x += gap) {
                const index = (y * w + x) * 4;
                if (imageData[index + 3] > 128) {
                    const tx = cw/2 - w/2 + x;
                    const ty = ch * 0.8 - h/2 + y; // Lowered to 80% height
                    
                    // Particle type: Brick (red) or Cement (grey)
                    const isBrick = Math.random() > 0.4;
                    
                    this.particles.push({
                        tx: tx,
                        ty: ty,
                        x: tx + (Math.random() - 0.5) * 100, // Slight horizontal scatter
                        y: -Math.random() * 2000 - 100, // Falling from even higher for better effect
                        vx: 0,
                        vy: 3 + Math.random() * 6, // Slightly faster fall
                        c: isBrick ? this.accentColor : this.themeColor,
                        size: isBrick ? 4 : 2,
                        delay: Math.random() * 100,
                        landed: false,
                        bounce: 0
                    });
                }
            }
        }
    }

    resize() {
        if (!this.canvas) return;
        const p = this.canvas.parentElement;
        this.canvas.width = p.offsetWidth * this.dpr;
        this.canvas.height = p.offsetHeight * this.dpr;
        this.canvas.style.width = p.offsetWidth + 'px';
        this.canvas.style.height = p.offsetHeight + 'px';
        this.ctx.scale(this.dpr, this.dpr);
    }

    handleMouseMove(e) {
        const r = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - r.left;
        this.mouse.y = e.clientY - r.top;
    }

    animate() {
        if (!this.canvas) return;
        const cw = this.canvas.width / this.dpr;
        const ch = this.canvas.height / this.dpr;
        
        this.ctx.clearRect(0, 0, cw, ch);
        
        this.particles.forEach(p => {
            if (p.delay > 0) {
                p.delay--;
                return;
            }

            if (!p.landed) {
                p.y += p.vy;
                p.vy += 0.2; // Gravity
                
                if (p.y >= p.ty) {
                    p.y = p.ty;
                    p.landed = true;
                    p.bounce = 4; // Landing impact
                }
            } else {
                // Settle logic
                const dx = p.tx - p.x;
                const dy = p.ty - p.y;
                p.x += dx * 0.1;
                p.y += dy * 0.1;
                
                if (p.bounce > 0) {
                    p.y -= p.bounce;
                    p.bounce *= -0.5;
                }

                // Interaction: Mouse repulsion
                const mdx = p.x - this.mouse.x;
                const mdy = p.y - this.mouse.y;
                const dist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (dist < 80) {
                    const force = (80 - dist) / 80;
                    p.x += (mdx / dist) * force * 10;
                    p.y += (mdy / dist) * force * 10;
                }
            }

            this.ctx.fillStyle = p.c;
            this.ctx.fillRect(p.x, p.y, p.size, p.size * 0.7);
        });

        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.canvas = null;
    }
}
