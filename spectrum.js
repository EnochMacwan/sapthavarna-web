export class SpectrumAnimation {
    constructor(canvasId, mode = 'industrialMesh') {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.mode = mode;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: -1000, y: -1000 };
        this.dpr = window.devicePixelRatio || 1;
        this.startTime = Date.now();
        this.showcaseActive = false;
        
        // Meta-Controls
        this.themeColor = '#003366'; // Default Deep Blue
        this.accentColor = '#9c4221'; // Default Earthy Red
        this.particleDensity = 1.0;
        this.timeScale = 1.0;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Global API for UI
        window.startShowcase = () => this.startShowcase();
        window.setAnimationTheme = (color) => { this.themeColor = color; };
        window.setAnimationDensity = (val) => { this.particleDensity = val; this.init(); };
        window.setAnimationSpeed = (val) => { this.timeScale = val; };
    }

    startShowcase() {
        this.showcaseActive = true;
        this.startTime = Date.now();
        this.setMode('seismicPulse');
    }

    init() {
        this.resize();
        this.particles = [];
        const m = this.mode;
        const d = this.particleDensity;
        
        if (m === 'industrialMesh') this.initIndustrialMesh(d);
        else if (m === 'seismicPulse') this.initSeismicPulse(d);
        else if (m === 'lidarScan') this.initLidarScan(d);
        else if (m === 'structuralAssembly') this.initStructuralAssembly(d);
        else if (m === 'geoStrata') this.initGeoStrata();
        else if (m === 'tectonicShift') this.initTectonicShift(d);
        else if (m === 'digitalConcrete') this.initDigitalConcrete(d);
        else if (m === 'craneView') this.initCraneView();
        else if (m === 'rebarSpiral') this.initRebarSpiral(d);
        else if (m === 'hydraulicPressure') this.initHydraulicPressure();
        else if (m === 'sonicSonar') this.initSonicSonar();
        else if (m === 'impactPiling') this.initImpactPiling();
        else if (m === 'stressMap') this.initStressMap(d);
        else if (m === 'bimExplode') this.initBimExplode(d);
        else if (m === 'thermalDrone') this.initThermalDrone(d);
        else if (m === 'dataTelemetry') this.initDataTelemetry(d);
        else if (m === 'hydroFlow') this.initHydroFlow(d);
        else if (m === 'emSignal') this.initEmSignal();
        else if (m === 'soilCompaction') this.initSoilCompaction(d);
        else if (m === 'geoAnnotate') this.initGeoAnnotate();
        else if (m === 'vectorField') this.initVectorField(d);
        else if (m === 'pointMesh') this.initPointMesh(d);
        else if (m === 'strainGauge') this.initStrainGauge(d);
        else if (m === 'topoHUD') this.initTopoHUD();
        else if (m === 'blueprintGhost') this.initBlueprintGhost(d);
        else if (m === 'coordAxis') this.initCoordAxis();
        else if (m === 'hatchProfile') this.initHatchProfile();
        else if (m === 'triangulation') this.initTriangulation();
        else if (m === 'fluidStream') this.initFluidStream(d);
        else if (m === 'trussLogic') this.initTrussLogic();
        else if (m === 'truckMove') this.initTruckMove();
        else if (m === 'craneLift') this.initCraneLift();
        else if (m === 'earthScoop') this.initEarthScoop();
        else if (m === 'concretePump') this.initConcretePump();
        else if (m === 'jackHammer') this.initJackHammer();
        else if (m === 'roadPaver') this.initRoadPaver();
        else if (m === 'activeDrone') this.initActiveDrone();
        else if (m === 'scaffoldUp') this.initScaffoldUp(d);
        else if (m === 'trafficZone') this.initTrafficZone();
        else if (m === 'masonryBuild') this.initMasonryBuild(d);
        else if (m === 'brandBuild') this.initBrandBuild();
        // --- NEW MODES 42-50 ---
        else if (m === 'satelliteSweep') this.initSatelliteSweep();
        else if (m === 'seafloorMesh') this.initSeafloorMesh();
        else if (m === 'heatIsland') this.initHeatIsland();
        else if (m === 'windVector') this.initWindVector();
        else if (m === 'strataCore') this.initStrataCore();
        else if (m === 'logisticsHub') this.initLogisticsHub();
        else if (m === 'digitalTwin') this.initDigitalTwin();
        else if (m === 'seismicEcho') this.initSeismicEcho();
        else if (m === 'earthHarmony') this.initEarthHarmony();
    }

    // --- INIT BLOCK ---
    initIndustrialMesh(d) { for (let i=0; i<40*d; i++) this.particles.push({ x:(Math.random()-0.5)*600, y:(Math.random()-0.5)*600, z:(Math.random()-0.5)*600, vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, vz:(Math.random()-0.5)*0.2 }); }
    initSeismicPulse(d) { const r=20, c=30, w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; for (let i=0; i<r; i++) for (let j=0; j<c; j++) this.particles.push({ x:(w/c)*j, y:(h/r)*i, baseX:(w/c)*j, baseY:(h/r)*i }); }
    initLidarScan(d) { this.particles = { scanX: 0, points: [] }; for (let i=0; i<300*d; i++) this.particles.points.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), z:Math.random()*2, brightness:0 }); }
    initStructuralAssembly(d) { for (let i=0; i<12*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr)-500, targetY:Math.random()*(this.canvas.height/this.dpr), w:Math.random()*200+100, h:15, progress:0 }); }
    initGeoStrata() { for (let i=0; i<6; i++) this.particles.push({ y:i*150, offset:Math.random()*1000, color:i%2===0?'rgba(156,66,33,0.1)':'rgba(45,55,72,0.1)' }); }
    initTectonicShift(d) { for (let i=0; i<8*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), poly:Array.from({length:6},()=>({x:(Math.random()-0.5)*200, y:(Math.random()-0.5)*200})), vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2 }); }
    initDigitalConcrete(d) { for (let i=0; i<30*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:this.canvas.height/this.dpr+100, size:Math.random()*80+40, targetY:Math.random()*(this.canvas.height/this.dpr), alpha:0 }); }
    initCraneView() { this.particles = { angle: 0, zoom: 1 }; }
    initRebarSpiral(d) { for (let i=0; i<100*d; i++) this.particles.push({ angle:(i/100)*Math.PI*2, radius:i*5, rv:0.005+Math.random()*0.01, color:i%2===0?'rgba(0,51,102,0.2)':'rgba(45,55,72,0.2)' }); }
    initHydraulicPressure() { for (let i=0; i<5; i++) this.particles.push({ x:(this.canvas.width/this.dpr)/6*(i+1), y:this.canvas.height/this.dpr/2, h:200, phase:Math.random()*Math.PI*2 }); }
    initSonicSonar() { this.particles = { pulses: [], nodes: [] }; for (let i=0; i<15; i++) this.particles.nodes.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), active:0 }); }
    initImpactPiling() { this.particles = { pileX:(this.canvas.width/this.dpr)/2, pileY:-200, impact:0 }; }
    initStressMap(d) { for (let x=0; x<(this.canvas.width/this.dpr); x+=30) for (let y=0; y<(this.canvas.height/this.dpr); y+=30) this.particles.push({ x, y, stress:0 }); }
    initBimExplode(d) { for (let i=0; i<20*d; i++) this.particles.push({ x:(this.canvas.width/this.dpr)/2+(Math.random()-0.5)*100, y:(this.canvas.height/this.dpr)/2+(Math.random()-0.5)*100, targetX:Math.random()*(this.canvas.width/this.dpr), targetY:Math.random()*(this.canvas.height/this.dpr), w:50, h:50 }); }
    initThermalDrone(d) { for (let i=0; i<50*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), vx:(Math.random()-0.5), vy:(Math.random()-0.5), temp:Math.random() }); }
    initDataTelemetry(d) { this.particles = { streams: [] }; for (let i=0; i<8*d; i++) this.particles.streams.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), s:2+Math.random()*4 }); }
    initHydroFlow(d) { for (let i=0; i<200*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), l:15+Math.random()*15 }); }
    initEmSignal() { this.particles = { nodes: [] }; for (let i=0; i<8; i++) this.particles.nodes.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr) }); }
    initSoilCompaction(d) { for (let i=0; i<400*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), ty:(this.canvas.height/this.dpr)*0.8 + Math.random()*100 }); }
    initGeoAnnotate() { this.particles = { nodes: [] }; }
    initVectorField(d) { for (let x=0; x<(this.canvas.width/this.dpr); x+=40) for (let y=0; y<(this.canvas.height/this.dpr); y+=40) this.particles.push({ x, y }); }
    initPointMesh(d) { for (let i=0; i<150*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5 }); }
    initStrainGauge(d) { for (let x=0; x<(this.canvas.width/this.dpr); x+=25) for (let y=0; y<(this.canvas.height/this.dpr); y+=25) this.particles.push({ x, y, bx:x, by:y }); }
    initTopoHUD() { for (let i=0; i<8; i++) this.particles.push({ r:100+i*150, offset:Math.random()*100 }); }
    initBlueprintGhost(d) { for (let i=0; i<12*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), w:100+Math.random()*200, h:50+Math.random()*150, phase:Math.random()*Math.PI*2 }); }
    initCoordAxis() { this.particles = { rot: 0 }; }
    initHatchProfile() { for (let i=0; i<5; i++) this.particles.push({ y:i*(this.canvas.height/this.dpr)/5, h:(this.canvas.height/this.dpr)/5, type:i%3 }); }
    initTriangulation() { this.particles = { anchors: [{x:100,y:100}, {x:(this.canvas.width/this.dpr)-100,y:100}, {x:(this.canvas.width/this.dpr)/2,y:(this.canvas.height/this.dpr)-100}] }; }
    initFluidStream(d) { for (let i=0; i<40*d; i++) this.particles.push({ y:Math.random()*(this.canvas.height/this.dpr), offset:Math.random()*1000 }); }
    initTrussLogic() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; for (let i=0; i<10; i++) this.particles.push({ x:i*(w/9), yTop:h*0.3+Math.sin(i)*20, yBot:h*0.7+Math.cos(i)*20 }); }
    initTruckMove() { for (let i=0; i<5; i++) this.particles.push({ x:-100-i*300, y:(this.canvas.height/this.dpr)*0.6, s:3+Math.random()*2 }); }
    initCraneLift() { this.particles = { angle:0, loadY:0 }; }
    initEarthScoop() { this.particles = { bucketX:0, bucketY:0, dirt:[] }; }
    initConcretePump() { this.particles = { phase:0, drips:[] }; }
    initJackHammer() { this.particles = { x:(this.canvas.width/this.dpr)/2, y:(this.canvas.height/this.dpr)/2, sparks:[] }; }
    initRoadPaver() { this.particles = { x:0, trail:[] }; }
    initActiveDrone() { this.particles = { x:100, y:100, t:0 }; }
    initScaffoldUp(d) { for (let i=0; i<40*d; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:(this.canvas.height/this.dpr), ty:Math.random()*(this.canvas.height/this.dpr), active:0 }); }
    initTrafficZone() { for (let i=0; i<10; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:(this.canvas.height/this.dpr)*0.5, s:2+Math.random()*3 }); }
    initMasonryBuild(d) { for (let i=0; i<100*d; i++) this.particles.push({ x:(i%20)*40, y:(this.canvas.height/this.dpr)-Math.floor(i/20)*20, active:0 }); }
    initBrandBuild() {
        const tempCanvas = document.createElement('canvas'); const tctx = tempCanvas.getContext('2d');
        const w = 1000, h = 200; tempCanvas.width = w; tempCanvas.height = h;
        tctx.fillStyle = 'black'; tctx.font = 'bold 90px Inter'; tctx.textAlign = 'center'; tctx.fillText('SAPTHAVARNA', w/2, h/2 + 30);
        const data = tctx.getImageData(0,0,w,h).data; this.particles = [];
        const gap = 5, cw = (this.canvas.width/this.dpr), ch = (this.canvas.height/this.dpr);
        for(let y=0; y<h; y+=gap) for(let x=0; x<w; x+=gap) if(data[(y*w+x)*4+3]>128) {
            this.particles.push({ tx:cw/2-w/2+x, ty:ch/2-h/2+y, x:Math.random()*cw, y:Math.random()*ch, c:Math.random()>0.5?this.accentColor:this.themeColor, d:Math.random()*60 });
        }
    }

    // --- NEW MODES INIT (42-50) ---
    initSatelliteSweep() { for(let i=0; i<5; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), r:200+Math.random()*200, a:Math.random()*Math.PI*2, s:0.002+Math.random()*0.005 }); }
    initSeafloorMesh() { for(let x=0; x<30; x++) for(let y=0; y<20; y++) this.particles.push({ x, y, dx:x*40, dy:y*30, z:Math.random()*50 }); }
    initHeatIsland() { for(let i=0; i<30; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), r:50+Math.random()*100, t:Math.random() }); }
    initWindVector() { for(let x=0; x<25; x++) for(let y=0; y<15; y++) this.particles.push({ x:x*50, y:y*50, phase:Math.random()*Math.PI*2 }); }
    initStrataCore() { this.particles = { cores: Array.from({length:8}, (_,i)=>({ x:(this.canvas.width/this.dpr)/9*(i+1), depth:0, max:150+Math.random()*100 })) }; }
    initLogisticsHub() { this.particles = { nodes: Array.from({length:15}, ()=>({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), active:0 })), packages: [] }; }
    initDigitalTwin() { for(let i=0; i<15; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), w:Math.random()*150, h:Math.random()*150, z:Math.random()*100 }); }
    initSeismicEcho() { this.particles = { pulses: [] }; }
    initEarthHarmony() { this.particles = { circles: Array.from({length:7}, (_,i)=>({ r:0, c:i, active:true })) }; }

    // --- CORE ---
    resize() { if (!this.canvas) return; const p=this.canvas.parentElement; this.canvas.width=p.offsetWidth*this.dpr; this.canvas.height=p.offsetHeight*this.dpr; this.canvas.style.width=p.offsetWidth+'px'; this.canvas.style.height=p.offsetHeight+'px'; this.ctx.scale(this.dpr, this.dpr); }
    handleMouseMove(e) { const r=this.canvas.getBoundingClientRect(); this.mouse.x=e.clientX-r.left; this.mouse.y=e.clientY-r.top; }

    animate() {
        if (!this.canvas) return;
        this.ctx.clearRect(0,0,this.canvas.width/this.dpr,this.canvas.height/this.dpr);
        if (this.showcaseActive) this.drawShowcase();
        else {
            const m = this.mode;
            if(m==='brandBuild') this.drawBrandBuild();
            else if(m==='industrialMesh')this.drawIndustrialMesh(); else if(m==='seismicPulse')this.drawSeismicPulse(); else if(m==='lidarScan')this.drawLidarScan(); else if(m==='structuralAssembly')this.drawStructuralAssembly(); else if(m==='geoStrata')this.drawGeoStrata(); else if(m==='tectonicShift')this.drawTectonicShift(); else if(m==='digitalConcrete')this.drawDigitalConcrete(); else if(m==='craneView')this.drawCraneView(); else if(m==='rebarSpiral')this.drawRebarSpiral(); else if(m==='hydraulicPressure')this.drawHydraulicPressure();
            else if(m==='sonicSonar')this.drawSonicSonar(); else if(m==='impactPiling')this.drawImpactPiling(); else if(m==='stressMap')this.drawStressMap(); else if(m==='bimExplode')this.drawBimExplode(); else if(m==='thermalDrone')this.drawThermalDrone(); else if(m==='dataTelemetry')this.drawDataTelemetry(); else if(m==='hydroFlow')this.drawHydroFlow(); else if(m==='emSignal')this.drawEmSignal(); else if(m==='soilCompaction')this.drawSoilCompaction(); else if(m==='geoAnnotate')this.drawGeoAnnotate();
            else if(m==='vectorField')this.drawVectorField(); else if(m==='pointMesh')this.drawPointMesh(); else if(m==='strainGauge')this.drawStrainGauge(); else if(m==='topoHUD')this.drawTopoHUD(); else if(m==='blueprintGhost')this.drawBlueprintGhost(); else if(m==='coordAxis')this.drawCoordAxis(); else if(m==='hatchProfile')this.drawHatchProfile(); else if(m==='triangulation')this.drawTriangulation(); else if(m==='fluidStream')this.drawFluidStream(); else if(m==='trussLogic')this.drawTrussLogic();
            else if(m==='truckMove')this.drawTruckMove(); else if(m==='craneLift')this.drawCraneLift(); else if(m==='earthScoop')this.drawEarthScoop(); else if(m==='concretePump')this.drawConcretePump(); else if(m==='jackHammer')this.drawJackHammer(); else if(m==='roadPaver')this.drawRoadPaver(); else if(m==='activeDrone')this.drawActiveDrone(); else if(m==='scaffoldUp')this.drawScaffoldUp(); else if(m==='trafficZone')this.drawTrafficZone(); else if(m==='masonryBuild')this.drawMasonryBuild();
            else if(m==='satelliteSweep')this.drawSatelliteSweep(); else if(m==='seafloorMesh')this.drawSeafloorMesh(); else if(m==='heatIsland')this.drawHeatIsland(); else if(m==='windVector')this.drawWindVector(); else if(m==='strataCore')this.drawStrataCore(); else if(m==='logisticsHub')this.drawLogisticsHub(); else if(m==='digitalTwin')this.drawDigitalTwin(); else if(m==='seismicEcho')this.drawSeismicEcho(); else if(m==='earthHarmony')this.drawEarthHarmony();
        }
        requestAnimationFrame(()=>this.animate());
    }

    drawShowcase() {
        const elapsed = (Date.now() - this.startTime) / 1000;
        if (elapsed < 2.5) { this.drawSeismicPulse(); }
        else if (elapsed < 5.0) { if(this.mode !== 'lidarScan') this.setMode('lidarScan'); this.drawLidarScan(); }
        else if (elapsed < 7.5) { if(this.mode !== 'structuralAssembly') this.setMode('structuralAssembly'); this.drawStructuralAssembly(); }
        else if (elapsed < 10.0) { if(this.mode !== 'brandBuild') this.setMode('brandBuild'); this.drawBrandBuild(); }
        else { this.showcaseActive = false; this.setMode('industrialMesh'); }
        this.ctx.fillStyle = this.accentColor+'44'; this.ctx.fillRect(0, 0, (elapsed/10)*(this.canvas.width/this.dpr), 2);
    }

    // --- DRAW BLOCK ---
    drawIndustrialMesh() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr, r=Date.now()*0.0003*this.timeScale; this.ctx.strokeStyle=this.themeColor+'11'; const p=this.particles.map(v=>{ const x=v.x*Math.cos(r)-v.z*Math.sin(r), z=v.x*Math.sin(r)+v.z*Math.cos(r), s=500/(500+z); return {x:w/2+x*s, y:h/2+v.y*s, s}; }); p.forEach((p1,i)=>p.forEach((p2,j)=>{ const d=Math.sqrt((p1.x-p2.x)**2+(p1.y-p2.y)**2); if(d<80*p1.s){ this.ctx.beginPath(); this.ctx.moveTo(p1.x,p1.y); this.ctx.lineTo(p2.x,p2.y); this.ctx.stroke(); } })); }
    drawSeismicPulse() { const t=Date.now()*0.002*this.timeScale; this.particles.forEach(p=>{ const dx=p.baseX-this.mouse.x, dy=p.baseY-this.mouse.y, d=Math.sqrt(dx*dx+dy*dy); const pulse=Math.sin(d*0.05-t)*15, push=d<200?(200-d)*0.1:0; this.ctx.fillStyle=this.themeColor+'33'; this.ctx.beginPath(); this.ctx.arc(p.baseX+push*(dx/d||0), p.baseY+pulse+push*(dy/d||0),1.5,0,Math.PI*2); this.ctx.fill(); }); }
    drawLidarScan() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.scanX=(this.particles.scanX+4*this.timeScale)%w; this.ctx.strokeStyle=this.accentColor+'33'; this.ctx.beginPath(); this.ctx.moveTo(this.particles.scanX,0); this.ctx.lineTo(this.particles.scanX,h); this.ctx.stroke(); this.particles.points.forEach(p=>{ const d=Math.abs(p.x-this.particles.scanX); if(d<20)p.brightness=1; else p.brightness*=0.98; if(p.brightness>0.01){ this.ctx.fillStyle=this.themeColor+(Math.floor(p.brightness*64)).toString(16).padStart(2,'0'); this.ctx.beginPath(); this.ctx.arc(p.x,p.y,p.z*2,0,Math.PI*2); this.ctx.fill(); } }); }
    drawStructuralAssembly() { this.ctx.strokeStyle=this.themeColor+'33'; this.particles.forEach(p=>{ if(p.progress<1)p.progress+=0.01*this.timeScale; const y=-500+(p.targetY+500)*p.progress; this.ctx.strokeRect(p.x,y,p.w,15); }); }
    drawGeoStrata() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.forEach(l=>{ l.offset+=0.005*this.timeScale; this.ctx.fillStyle=l.color; this.ctx.beginPath(); this.ctx.moveTo(0,l.y); for(let x=0;x<=w;x+=50)this.ctx.lineTo(x,l.y+Math.sin(l.offset+x*0.01)*30); this.ctx.lineTo(w,h); this.ctx.lineTo(0,h); this.ctx.fill(); }); }
    drawTectonicShift() { this.ctx.strokeStyle=this.accentColor+'33'; this.particles.forEach(p=>{ p.x+=p.vx*this.timeScale; p.y+=p.vy*this.timeScale; if(p.x<0||p.x>this.canvas.width/this.dpr)p.vx*=-1; if(p.y<0||p.y>this.canvas.height/this.dpr)p.vy*=-1; this.ctx.save(); this.ctx.translate(p.x,p.y); this.ctx.beginPath(); p.poly.forEach((pt,i)=>i===0?this.ctx.moveTo(pt.x,pt.y):this.ctx.lineTo(pt.x,pt.y)); this.ctx.closePath(); this.ctx.stroke(); this.ctx.restore(); }); }
    drawDigitalConcrete() { this.particles.forEach(p=>{ if(p.alpha<1)p.alpha+=0.005*this.timeScale; p.y+=(p.targetY-p.y)*0.01*this.timeScale; this.ctx.fillStyle=this.themeColor+(Math.floor(p.alpha*25)).toString(16).padStart(2,'0'); this.ctx.beginPath(); this.ctx.arc(p.x,p.y,p.size,0,Math.PI*2); this.ctx.fill(); }); }
    drawCraneView() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.angle+=0.001*this.timeScale; this.ctx.strokeStyle=this.themeColor+'44'; this.ctx.save(); this.ctx.translate(w/2,h/2); this.ctx.rotate(this.particles.angle); this.ctx.strokeRect(-200,-200,400,400); this.ctx.beginPath(); this.ctx.moveTo(-300,0); this.ctx.lineTo(300,0); this.ctx.stroke(); this.ctx.restore(); }
    drawRebarSpiral() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.forEach(p=>{ p.angle+=p.rv*this.timeScale; this.ctx.fillStyle=p.color; this.ctx.beginPath(); this.ctx.arc(w/2+Math.cos(p.angle)*p.radius, h/2+Math.sin(p.angle)*p.radius, 2,0,Math.PI*2); this.ctx.fill(); }); }
    drawHydraulicPressure() { this.particles.forEach(p=>{ p.phase+=0.05*this.timeScale; const ch=200+Math.sin(p.phase)*50; this.ctx.fillStyle=this.themeColor+'11'; this.ctx.fillRect(p.x-20,p.y-ch/2,40,ch); this.ctx.strokeStyle=this.accentColor+'33'; this.ctx.strokeRect(p.x-20,p.y-ch/2,40,ch); }); }
    drawSonicSonar() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; if(Math.random()<0.02*this.timeScale)this.particles.pulses.push({r:0,x:w/2,y:h/2}); this.particles.pulses.forEach((p,i)=>{ p.r+=3*this.timeScale; if(p.r>1000)this.particles.pulses.splice(i,1); this.ctx.strokeStyle=this.themeColor+(Math.floor((1-p.r/1000)*255)).toString(16).padStart(2,'0'); this.ctx.beginPath(); this.ctx.arc(p.x,p.y,p.r,0,Math.PI*2); this.ctx.stroke(); }); }
    drawPointMesh() { this.ctx.fillStyle=this.themeColor+'33'; this.ctx.strokeStyle=this.themeColor+'08'; this.particles.forEach((p,i)=>{ p.x+=p.vx*this.timeScale; p.y+=p.vy*this.timeScale; if(p.x<0||p.x>this.canvas.width/this.dpr)p.vx*=-1; if(p.y<0||p.y>this.canvas.height/this.dpr)p.vy*=-1; this.ctx.beginPath(); this.ctx.arc(p.x,p.y,1.5,0,Math.PI*2); this.ctx.fill(); }); }
    drawBrandBuild() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.particles.forEach(p => {
            if(p.d > 0) { p.d-=this.timeScale; return; }
            const dx = p.tx - p.x, dy = p.ty - p.y;
            p.x += dx * 0.08 * this.timeScale; p.y += dy * 0.08 * this.timeScale;
            // Repulsion
            const mdx = p.x-this.mouse.x, mdy=p.y-this.mouse.y, md=Math.sqrt(mdx*mdx+mdy*mdy);
            if(md < 100) { p.x += mdx/md*5; p.y += mdy/md*5; }
            this.ctx.fillStyle = p.c; this.ctx.fillRect(p.x, p.y, 4, 3);
        });
    }

    // --- NEW MODES DRAW ---
    drawSatelliteSweep() {
        const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr;
        this.particles.forEach(p => {
            p.a += p.s * this.timeScale;
            const x = p.x + Math.cos(p.a)*p.r, y = p.y + Math.sin(p.a)*p.r;
            this.ctx.strokeStyle = this.themeColor+'22';
            this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); this.ctx.stroke();
            this.ctx.fillStyle = this.accentColor;
            this.ctx.beginPath(); this.ctx.arc(x,y,4,0,Math.PI*2); this.ctx.fill();
        });
    }
    drawSeafloorMesh() {
        this.ctx.strokeStyle = this.themeColor+'11';
        this.particles.forEach(p => {
            const z = p.z + Math.sin(Date.now()*0.001 + p.x)*10;
            this.ctx.beginPath(); this.ctx.strokeRect(p.dx, p.dy + z, 40, 30);
        });
    }
    drawHeatIsland() {
        this.particles.forEach(p => {
            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
            grad.addColorStop(0, this.accentColor+'33'); grad.addColorStop(1, 'transparent');
            this.ctx.fillStyle = grad; this.ctx.fillRect(p.x-p.r, p.y-p.r, p.r*2, p.r*2);
        });
    }
    drawWindVector() {
        this.ctx.strokeStyle = this.themeColor+'33';
        this.particles.forEach(p => {
            const a = p.phase + Date.now()*0.002 * this.timeScale;
            this.ctx.save(); this.ctx.translate(p.x, p.y); this.ctx.rotate(a);
            this.ctx.beginPath(); this.ctx.moveTo(-10, 0); this.ctx.lineTo(10, 0); this.ctx.stroke();
            this.ctx.restore();
        });
    }
    drawStrataCore() {
        this.particles.cores.forEach(c => {
            if(c.depth < c.max) c.depth += 2*this.timeScale;
            this.ctx.fillStyle = this.themeColor+'22'; this.ctx.fillRect(c.x-5, 100, 10, c.depth);
            this.ctx.fillStyle = this.accentColor; this.ctx.fillRect(c.x-5, 100+c.depth, 10, 5);
        });
    }
    drawLogisticsHub() {
        this.ctx.strokeStyle = this.themeColor+'22';
        this.particles.nodes.forEach(n => {
            this.ctx.beginPath(); this.ctx.arc(n.x, n.y, 5, 0, Math.PI*2); this.ctx.stroke();
            if(Math.random()<0.01) this.particles.packages.push({x:n.x, y:n.y, target:this.particles.nodes[Math.floor(Math.random()*15)], p:0});
        });
        this.particles.packages.forEach((pkg, i) => {
            pkg.p += 0.02 * this.timeScale;
            const x = pkg.x + (pkg.target.x-pkg.x)*pkg.p, y = pkg.y + (pkg.target.y-pkg.y)*pkg.p;
            this.ctx.fillStyle = this.accentColor; this.ctx.fillRect(x-2, y-2, 4, 4);
            if(pkg.p >= 1) this.particles.packages.splice(i, 1);
        });
    }
    drawDigitalTwin() {
        this.ctx.strokeStyle = this.themeColor+'22';
        this.particles.forEach(p => {
            const s = 1 + Math.sin(Date.now()*0.001 + p.z)*0.1;
            this.ctx.strokeRect(p.x, p.y, p.w*s, p.h*s);
            this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(p.x+20, p.y-20); this.ctx.stroke();
        });
    }
    drawSeismicEcho() {
        if(Math.random()<0.03*this.timeScale) this.particles.pulses.push({x:this.mouse.x, y:this.mouse.y, r:0});
        this.particles.pulses.forEach((p,i) => {
            p.r += 5*this.timeScale;
            this.ctx.strokeStyle = this.accentColor+(Math.floor((1-p.r/500)*255)).toString(16).padStart(2,'0');
            this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); this.ctx.stroke();
            if(p.r > 500) this.particles.pulses.splice(i, 1);
        });
    }
    drawEarthHarmony() {
        const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr;
        const colors = ['#9c4221', '#003366', '#2d3748', '#4a5568', '#718096', '#a0aec0', '#e2e8f0'];
        this.particles.circles.forEach(c => {
            c.r += (c.c+1)*this.timeScale;
            if(c.r > 1000) c.r = 0;
            this.ctx.strokeStyle = colors[c.c]+'44';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath(); this.ctx.arc(w/2, h/2, c.r, 0, Math.PI*2); this.ctx.stroke();
        });
        this.ctx.lineWidth = 1;
    }

    setMode(mode) { this.mode = mode; this.init(); }
    destroy() { this.canvas = null; }
}
