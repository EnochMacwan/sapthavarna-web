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

    init() {
        this.resize();
        this.particles = [];
        
        // Mode switch
        const m = this.mode;
        if (m === 'industrialMesh') this.initIndustrialMesh();
        else if (m === 'seismicPulse') this.initSeismicPulse();
        else if (m === 'lidarScan') this.initLidarScan();
        else if (m === 'structuralAssembly') this.initStructuralAssembly();
        else if (m === 'geoStrata') this.initGeoStrata();
        else if (m === 'tectonicShift') this.initTectonicShift();
        else if (m === 'digitalConcrete') this.initDigitalConcrete();
        else if (m === 'craneView') this.initCraneView();
        else if (m === 'rebarSpiral') this.initRebarSpiral();
        else if (m === 'hydraulicPressure') this.initHydraulicPressure();
        // New Modes 11-20
        else if (m === 'sonicSonar') this.initSonicSonar();
        else if (m === 'impactPiling') this.initImpactPiling();
        else if (m === 'stressMap') this.initStressMap();
        else if (m === 'bimExplode') this.initBimExplode();
        else if (m === 'thermalDrone') this.initThermalDrone();
        else if (m === 'dataTelemetry') this.initDataTelemetry();
        else if (m === 'hydroFlow') this.initHydroFlow();
        else if (m === 'emSignal') this.initEmSignal();
        else if (m === 'soilCompaction') this.initSoilCompaction();
        else if (m === 'geoAnnotate') this.initGeoAnnotate();
    }

    // --- INIT METHODS (1-10) ---
    initIndustrialMesh() {
        for (let i = 0; i < 40; i++) {
            this.particles.push({
                x: (Math.random() - 0.5) * 600, y: (Math.random() - 0.5) * 600, z: (Math.random() - 0.5) * 600,
                vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2, vz: (Math.random() - 0.5) * 0.2
            });
        }
    }
    initSeismicPulse() {
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
                z: Math.random() * 2, brightness: 0
            });
        }
    }
    initStructuralAssembly() {
        for (let i = 0; i < 12; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr) - 500,
                targetY: Math.random() * (this.canvas.height / this.dpr),
                w: Math.random() * 200 + 100, h: 15, progress: 0
            });
        }
    }
    initGeoStrata() {
        for (let i = 0; i < 6; i++) {
            this.particles.push({
                y: i * 150, offset: Math.random() * 1000,
                color: i % 2 === 0 ? 'rgba(156, 66, 33, 0.1)' : 'rgba(45, 55, 72, 0.1)'
            });
        }
    }
    initTectonicShift() {
        for (let i = 0; i < 8; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: Math.random() * (this.canvas.height / this.dpr),
                poly: Array.from({length: 6}, () => ({x: (Math.random()-0.5)*200, y: (Math.random()-0.5)*200})),
                vx: (Math.random()-0.5)*0.2, vy: (Math.random()-0.5)*0.2
            });
        }
    }
    initDigitalConcrete() {
        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width / this.dpr),
                y: this.canvas.height / this.dpr + 100,
                size: Math.random() * 80 + 40,
                targetY: Math.random() * (this.canvas.height / this.dpr), alpha: 0
            });
        }
    }
    initCraneView() { this.particles = { angle: 0, zoom: 1 }; }
    initRebarSpiral() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                angle: (i / 100) * Math.PI * 2, radius: i * 5, rv: 0.005 + Math.random() * 0.01,
                color: i % 2 === 0 ? 'rgba(0, 51, 102, 0.2)' : 'rgba(45, 55, 72, 0.2)'
            });
        }
    }
    initHydraulicPressure() {
        for (let i = 0; i < 5; i++) {
            this.particles.push({
                x: (this.canvas.width / this.dpr) / 6 * (i + 1),
                y: this.canvas.height / this.dpr / 2, h: 200, phase: Math.random() * Math.PI * 2
            });
        }
    }

    // --- INIT METHODS (11-20) ---
    initSonicSonar() {
        this.particles = { pulses: [], nodes: [] };
        for (let i = 0; i < 15; i++) {
            this.particles.nodes.push({
                x: Math.random() * (this.canvas.width/this.dpr),
                y: Math.random() * (this.canvas.height/this.dpr),
                active: false
            });
        }
    }
    initImpactPiling() {
        this.particles = { pileX: (this.canvas.width/this.dpr)/2, pileY: -200, impact: 0 };
    }
    initStressMap() {
        const size = 30;
        const w = (this.canvas.width/this.dpr), h = (this.canvas.height/this.dpr);
        for (let x = 0; x < w; x += size) {
            for (let y = 0; y < h; y += size) {
                this.particles.push({ x, y, stress: 0 });
            }
        }
    }
    initBimExplode() {
        for (let i = 0; i < 20; i++) {
            this.particles.push({
                x: (this.canvas.width/this.dpr)/2 + (Math.random()-0.5)*100,
                y: (this.canvas.height/this.dpr)/2 + (Math.random()-0.5)*100,
                targetX: Math.random() * (this.canvas.width/this.dpr),
                targetY: Math.random() * (this.canvas.height/this.dpr),
                w: 40 + Math.random()*60, h: 40 + Math.random()*60, explode: 0
            });
        }
    }
    initThermalDrone() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width/this.dpr),
                y: Math.random() * (this.canvas.height/this.dpr),
                vx: (Math.random()-0.5)*1, vy: (Math.random()-0.5)*1,
                temp: Math.random()
            });
        }
    }
    initDataTelemetry() {
        this.particles = { streams: [], overlay: true };
        for (let i = 0; i < 5; i++) {
            this.particles.streams.push({ x: Math.random() * (this.canvas.width/this.dpr), y: 0, speed: 2 + Math.random()*5 });
        }
    }
    initHydroFlow() {
        for (let i = 0; i < 200; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width/this.dpr),
                y: Math.random() * (this.canvas.height/this.dpr),
                long: Math.random() * 20 + 10
            });
        }
    }
    initEmSignal() {
        this.particles = { points: [], nodes: [] };
        for (let i = 0; i < 10; i++) this.particles.nodes.push({x: Math.random()*(this.canvas.width/this.dpr), y: Math.random()*(this.canvas.height/this.dpr)});
    }
    initSoilCompaction() {
        for (let i = 0; i < 400; i++) {
            this.particles.push({
                x: Math.random() * (this.canvas.width/this.dpr),
                y: Math.random() * (this.canvas.height/this.dpr),
                yTarget: (this.canvas.height/this.dpr) * 0.8 + Math.random()*100
            });
        }
    }
    initGeoAnnotate() {
        this.particles = { points: [] };
    }

    // --- CORE METHODS ---
    resize() {
        if (!this.canvas) return;
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

        const m = this.mode;
        if (m === 'industrialMesh') this.drawIndustrialMesh();
        else if (m === 'seismicPulse') this.drawSeismicPulse();
        else if (m === 'lidarScan') this.drawLidarScan();
        else if (m === 'structuralAssembly') this.drawStructuralAssembly();
        else if (m === 'geoStrata') this.drawGeoStrata();
        else if (m === 'tectonicShift') this.drawTectonicShift();
        else if (m === 'digitalConcrete') this.drawDigitalConcrete();
        else if (m === 'craneView') this.drawCraneView();
        else if (m === 'rebarSpiral') this.drawRebarSpiral();
        else if (m === 'hydraulicPressure') this.drawHydraulicPressure();
        // New Draws 11-20
        else if (m === 'sonicSonar') this.drawSonicSonar();
        else if (m === 'impactPiling') this.drawImpactPiling();
        else if (m === 'stressMap') this.drawStressMap();
        else if (m === 'bimExplode') this.drawBimExplode();
        else if (m === 'thermalDrone') this.drawThermalDrone();
        else if (m === 'dataTelemetry') this.drawDataTelemetry();
        else if (m === 'hydroFlow') this.drawHydroFlow();
        else if (m === 'emSignal') this.drawEmSignal();
        else if (m === 'soilCompaction') this.drawSoilCompaction();
        else if (m === 'geoAnnotate') this.drawGeoAnnotate();

        requestAnimationFrame(() => this.animate());
    }

    // --- DRAW METHODS (1-10) ---
    drawIndustrialMesh() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        const rot = Date.now() * 0.0003;
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.25)';
        const proj = this.particles.map(p => {
            const x = p.x * Math.cos(rot) - p.z * Math.sin(rot);
            const z = p.x * Math.sin(rot) + p.z * Math.cos(rot);
            const s = 500 / (500 + z);
            return { x: w/2 + x * s, y: h/2 + p.y * s, s };
        });
        proj.forEach((p1, i) => {
            proj.forEach((p2, j) => {
                const d = Math.sqrt((p1.x-p2.x)**2+(p1.y-p2.y)**2);
                if (d < 80 * p1.s) {
                    this.ctx.beginPath(); this.ctx.moveTo(p1.x, p1.y); this.ctx.lineTo(p2.x, p2.y); this.ctx.stroke();
                }
            });
        });
    }
    drawSeismicPulse() {
        this.ctx.fillStyle = 'rgba(0, 51, 102, 0.4)';
        const t = Date.now() * 0.002;
        this.particles.forEach(p => {
            const dx = p.baseX - this.mouse.x, dy = p.baseY - this.mouse.y;
            const d = Math.sqrt(dx*dx + dy*dy);
            const pulse = Math.sin(d * 0.05 - t) * 15;
            const push = d < 200 ? (200 - d) * 0.1 : 0;
            this.ctx.beginPath(); this.ctx.arc(p.baseX + push * (dx/d || 0), p.baseY + pulse + push * (dy/d || 0), 1.5, 0, Math.PI*2); this.ctx.fill();
        });
    }
    drawLidarScan() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.particles.scanX = (this.particles.scanX + 4) % w;
        this.ctx.strokeStyle = 'rgba(156, 66, 33, 0.4)';
        this.ctx.beginPath(); this.ctx.moveTo(this.particles.scanX, 0); this.ctx.lineTo(this.particles.scanX, h); this.ctx.stroke();
        this.particles.points.forEach(p => {
            const d = Math.abs(p.x - this.particles.scanX);
            if (d < 20) p.brightness = 1; else p.brightness *= 0.98;
            if (p.brightness > 0.01) {
                this.ctx.fillStyle = `rgba(0, 51, 102, ${p.brightness * 0.6})`;
                this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.z * 2, 0, Math.PI*2); this.ctx.fill();
            }
        });
    }
    drawStructuralAssembly() {
        this.ctx.strokeStyle = 'rgba(45, 55, 72, 0.3)';
        this.particles.forEach(p => {
            if (p.progress < 1) p.progress += 0.01;
            const y = -500 + (p.targetY + 500) * p.progress;
            this.ctx.strokeRect(p.x, y, p.w, 15);
        });
    }
    drawGeoStrata() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.particles.forEach(layer => {
            layer.offset += 0.005; this.ctx.fillStyle = layer.color;
            this.ctx.beginPath(); this.ctx.moveTo(0, layer.y);
            for (let x = 0; x <= w; x += 50) this.ctx.lineTo(x, layer.y + Math.sin(layer.offset + x*0.01)*30);
            this.ctx.lineTo(w, h); this.ctx.lineTo(0, h); this.ctx.fill();
        });
    }
    drawTectonicShift() {
        this.ctx.strokeStyle = 'rgba(156, 66, 33, 0.3)';
        this.particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > this.canvas.width/this.dpr) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height/this.dpr) p.vy *= -1;
            this.ctx.save(); this.ctx.translate(p.x, p.y);
            this.ctx.beginPath(); p.poly.forEach((pt, i) => i === 0 ? this.ctx.moveTo(pt.x, pt.y) : this.ctx.lineTo(pt.x, pt.y));
            this.ctx.closePath(); this.ctx.stroke(); this.ctx.restore();
        });
    }
    drawDigitalConcrete() {
        this.particles.forEach(p => {
            if (p.alpha < 1) p.alpha += 0.005;
            p.y += (p.targetY - p.y) * 0.01;
            this.ctx.fillStyle = `rgba(45, 55, 72, ${p.alpha * 0.15})`;
            this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); this.ctx.fill();
        });
    }
    drawCraneView() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.particles.angle += 0.001; this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.4)';
        this.ctx.save(); this.ctx.translate(w/2, h/2); this.ctx.rotate(this.particles.angle);
        this.ctx.strokeRect(-200, -200, 400, 400); this.ctx.beginPath(); this.ctx.moveTo(-300, 0); this.ctx.lineTo(300, 0); this.ctx.stroke();
        this.ctx.restore();
    }
    drawRebarSpiral() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.particles.forEach(p => {
            p.angle += p.rv;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath(); this.ctx.arc(w/2 + Math.cos(p.angle)*p.radius, h/2 + Math.sin(p.angle)*p.radius, 2, 0, Math.PI*2); this.ctx.fill();
        });
    }
    drawHydraulicPressure() {
        this.particles.forEach(p => {
            p.phase += 0.05;
            const ch = 200 + Math.sin(p.phase)*50;
            this.ctx.fillStyle = 'rgba(45, 55, 72, 0.2)'; this.ctx.fillRect(p.x-20, p.y-ch/2, 40, ch);
            this.ctx.strokeStyle = 'rgba(156, 66, 33, 0.3)'; this.ctx.strokeRect(p.x-20, p.y-ch/2, 40, ch);
        });
    }

    // --- DRAW METHODS (11-20) ---
    drawSonicSonar() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        if (Math.random() < 0.02) this.particles.pulses.push({ r: 0, x: w/2, y: h/2 });
        this.particles.pulses.forEach((p, i) => {
            p.r += 3; if (p.r > 1000) this.particles.pulses.splice(i, 1);
            this.ctx.strokeStyle = `rgba(0, 51, 102, ${1 - p.r/1000})`;
            this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); this.ctx.stroke();
            this.particles.nodes.forEach(n => {
                const d = Math.sqrt((n.x-p.x)**2+(n.y-p.y)**2);
                if (Math.abs(d - p.r) < 10) n.active = 1;
            });
        });
        this.particles.nodes.forEach(n => {
            if (n.active > 0) {
                this.ctx.fillStyle = `rgba(156, 66, 33, ${n.active})`;
                this.ctx.beginPath(); this.ctx.arc(n.x, n.y, 4, 0, Math.PI*2); this.ctx.fill();
                n.active -= 0.01;
            }
        });
    }
    drawImpactPiling() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.particles.pileY += 10;
        if (this.particles.pileY > h*0.7) {
            this.particles.pileY = -200; this.particles.impact = 1;
        }
        if (this.particles.impact > 0) {
            this.ctx.strokeStyle = `rgba(0, 51, 102, ${this.particles.impact})`;
            this.ctx.beginPath(); this.ctx.arc(this.particles.pileX, h*0.7, (1-this.particles.impact)*200, 0, Math.PI*2); this.ctx.stroke();
            this.particles.impact -= 0.02;
        }
        this.ctx.fillStyle = 'rgba(45, 55, 72, 0.3)';
        this.ctx.fillRect(this.particles.pileX-30, this.particles.pileY, 60, 400);
    }
    drawStressMap() {
        this.particles.forEach(p => {
            const dx = p.x - this.mouse.x, dy = p.y - this.mouse.y;
            const d = Math.sqrt(dx*dx+dy*dy);
            p.stress = d < 200 ? 1 - d/200 : 0;
            this.ctx.fillStyle = `hsla(${240 - p.stress*240}, 70%, 50%, 0.15)`;
            this.ctx.fillRect(p.x, p.y, 28, 28);
        });
    }
    drawBimExplode() {
        this.particles.forEach(p => {
            const dx = this.mouse.x - (this.canvas.width/this.dpr)/2, dy = this.mouse.y - (this.canvas.height/this.dpr)/2;
            const d = Math.max(0, Math.min(1, Math.sqrt(dx*dx+dy*dy)/300));
            p.explode = d;
            const cx = p.x + (p.targetX - p.x) * p.explode;
            const cy = p.y + (p.targetY - p.y) * p.explode;
            this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.2)';
            this.ctx.strokeRect(cx, cy, p.w, p.h);
        });
    }
    drawThermalDrone() {
        this.particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > this.canvas.width/this.dpr) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height/this.dpr) p.vy *= -1;
            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 50);
            grad.addColorStop(0, `rgba(156, 66, 33, ${0.1 * p.temp})`);
            grad.addColorStop(1, 'transparent');
            this.ctx.fillStyle = grad; this.ctx.fillRect(p.x-50, p.y-50, 100, 100);
        });
    }
    drawDataTelemetry() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.ctx.fillStyle = 'rgba(0, 51, 102, 0.1)'; this.ctx.font = '8px monospace';
        this.particles.streams.forEach(s => {
            s.y += s.speed; if (s.y > h) s.y = -20;
            this.ctx.fillText(`${Math.random().toFixed(4)}`, s.x, s.y);
            this.ctx.fillText(`GEO_REF_${s.x.toFixed(0)}`, s.x, s.y + 15);
        });
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.05)';
        for (let i = 0; i < w; i += 100) { this.ctx.beginPath(); this.ctx.moveTo(i, 0); this.ctx.lineTo(i, h); this.ctx.stroke(); }
    }
    drawHydroFlow() {
        const t = Date.now() * 0.001;
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.2)';
        this.particles.forEach(p => {
            const angle = Math.sin(p.x*0.01 + t) * Math.cos(p.y*0.01 + t) * Math.PI;
            this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x + Math.cos(angle)*p.long, p.y + Math.sin(angle)*p.long);
            this.ctx.stroke();
        });
    }
    drawEmSignal() {
        const t = Date.now() * 0.01;
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.3)';
        this.particles.nodes.forEach(n => {
            this.ctx.beginPath();
            for (let i = 0; i < 20; i++) {
                const x = n.x + (i-10)*10;
                const y = n.y + Math.sin(t + i*0.5)*20;
                i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
        });
    }
    drawSoilCompaction() {
        const t = Date.now() * 0.05;
        this.particles.forEach(p => {
            const vib = Math.sin(t + p.x) * 2;
            p.y += (p.yTarget - p.y) * 0.01;
            this.ctx.fillStyle = 'rgba(45, 55, 72, 0.3)';
            this.ctx.beginPath(); this.ctx.arc(p.x + vib, p.y, 1.5, 0, Math.PI*2); this.ctx.fill();
        });
    }
    drawGeoAnnotate() {
        const w = this.canvas.width/this.dpr, h = this.canvas.height/this.dpr;
        this.ctx.strokeStyle = 'rgba(156, 66, 33, 0.3)'; this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath(); this.ctx.moveTo(this.mouse.x, 0); this.ctx.lineTo(this.mouse.x, h); this.ctx.stroke();
        this.ctx.beginPath(); this.ctx.moveTo(0, this.mouse.y); this.ctx.lineTo(w, this.mouse.y); this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = 'rgba(156, 66, 33, 0.6)'; this.ctx.font = '10px Inter';
        this.ctx.fillText(`X: ${this.mouse.x.toFixed(0)}m`, this.mouse.x + 10, 20);
        this.ctx.fillText(`Y: ${(h-this.mouse.y).toFixed(0)}m`, 10, this.mouse.y - 10);
    }

    setMode(mode) {
        this.mode = mode;
        this.init();
    }
    destroy() { this.canvas = null; }
}
