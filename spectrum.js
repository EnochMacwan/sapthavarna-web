export class SpectrumAnimation {
    constructor(canvasId, mode = 'industrialMesh') {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.mode = mode;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.dpr = window.devicePixelRatio || 1;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

        if (this.mode === 'industrialMesh') this.initIndustrialMesh();
        else if (this.mode === 'seismicPulse') this.initSeismicPulse();
        else if (this.mode === 'lidarScan') this.initLidarScan();
        else if (this.mode === 'structuralAssembly') this.initStructuralAssembly();
        else if (this.mode === 'geoStrata') this.initGeoStrata();
        else if (this.mode === 'tectonicShift') this.initTectonicShift();
        else if (this.mode === 'digitalConcrete') this.initDigitalConcrete();
        else if (this.mode === 'craneView') this.initCraneView();
        else if (this.mode === 'rebarSpiral') this.initRebarSpiral();
        else if (this.mode === 'hydraulicPressure') this.initHydraulicPressure();
    }

    initIndustrialMesh() {
        this.particles = [];
        for (let i = 0; i < 40; i++) {
            this.particles.push({
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                z: (Math.random() - 0.5) * 600,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                vz: (Math.random() - 0.5) * 0.2
            });
        }
    }

    initSeismicPulse() {
        this.particles = [];
        const rows = 20, cols = 30;
        const w = this.canvas.width / this.dpr, h = this.canvas.height / this.dpr;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.particles.push({ x: (w / cols) * j, y: (h / rows) * i, baseX: (w / cols) * j, baseY: (h / rows) * i });
            }
        }
    }

    initLidarScan() {
        this.particles = { scanX: 0, points: [] };
        for (let i = 0; i < 300; i++) {
            this.particles.points.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                z: Math.random() * 2,
                brightness: 0
            });
        }
    }

    initStructuralAssembly() {
        this.particles = [];
        for (let i = 0; i < 12; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr) - 500,
                targetY: Math.random() * (this.canvas.height / this.dpr),
                w: Math.random() * 200 + 100,
                h: 15,
                progress: 0,
                delay: Math.random() * 2
            });
        }
    }

    initGeoStrata() {
        this.particles = [];
        for (let i = 0; i < 6; i++) {
            this.particles.push({
                y: i * 150,
                offset: Math.random() * 1000,
                color: i % 2 === 0 ? 'rgba(156, 66, 33, 0.1)' : 'rgba(45, 55, 72, 0.1)'
            });
        }
    }

    initTectonicShift() {
        this.particles = [];
        for (let i = 0; i < 8; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                poly: Array.from({length: 6}, () => ({x: (Math.random()-0.5)*200, y: (Math.random()-0.5)*200})),
                vx: (Math.random()-0.5)*0.2,
                vy: (Math.random()-0.5)*0.2
            });
        }
    }

    initDigitalConcrete() {
        this.particles = [];
        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: this.canvas.height / this.dpr + 100,
                size: Math.random() * 80 + 40,
                targetY: Math.random() * (this.canvas.height / this.dpr),
                alpha: 0
            });
        }
    }

    initCraneView() {
        this.particles = { angle: 0, zoom: 1 };
    }

    initRebarSpiral() {
        this.particles = [];
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                angle: (i / 100) * Math.PI * 2,
                radius: i * 5,
                rv: 0.005 + Math.random() * 0.01,
                color: i % 2 === 0 ? 'rgba(0, 51, 102, 0.2)' : 'rgba(45, 55, 72, 0.2)'
            });
        }
    }

    initHydraulicPressure() {
        this.particles = [];
        for (let i = 0; i < 5; i++) {
            this.particles.push({
                x: (this.canvas.width / this.dpr) / 6 * (i + 1),
                y: this.canvas.height / this.dpr / 2,
                h: 200,
                phase: Math.random() * Math.PI * 2
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
