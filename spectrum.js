export class SpectrumAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.colors = [
            'rgba(0, 51, 102, 0.15)',   // Marine Blue
            'rgba(45, 55, 72, 0.15)',   // Basalt Gray
            'rgba(156, 66, 33, 0.15)',  // Mineral Rust
            'rgba(209, 199, 183, 0.15)', // Stone Beige
            'rgba(198, 144, 97, 0.15)'  // Clay/Sand Tone
        ];
        this.blobs = [];
        this.numBlobs = 12;
        this.mouse = { x: -1000, y: -1000 };
        this.dpr = window.devicePixelRatio || 1;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    init() {
        this.resize();
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;
        
        for (let i = 0; i < this.numBlobs; i++) {
            this.blobs.push({
                x: Math.random() * w,
                y: Math.random() * h,
                radius: Math.random() * 300 + 200,
                color: this.colors[i % this.colors.length],
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                angle: Math.random() * Math.PI * 2
            });
        }
    }

    resize() {
        const parent = this.canvas.parentElement;
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
        this.ctx.filter = 'blur(80px)';
        const w = this.canvas.width / this.dpr;
        const h = this.canvas.height / this.dpr;

        this.blobs.forEach(blob => {
            // Organic movement
            blob.x += blob.vx + Math.sin(blob.angle) * 0.2;
            blob.y += blob.vy + Math.cos(blob.angle) * 0.2;
            blob.angle += 0.002;

            // Boundaries
            if (blob.x < -blob.radius) blob.x = w + blob.radius;
            if (blob.x > w + blob.radius) blob.x = -blob.radius;
            if (blob.y < -blob.radius) blob.y = h + blob.radius;
            if (blob.y > h + blob.radius) blob.y = -blob.radius;

            // Mouse interaction (repel/attract)
            const dx = this.mouse.x - blob.x;
            const dy = this.mouse.y - blob.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 400) {
                blob.x -= dx * 0.005;
                blob.y -= dy * 0.005;
            }

            // Draw
            this.ctx.beginPath();
            this.ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = blob.color;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }

    destroy() {
        this.canvas = null;
    }
}
