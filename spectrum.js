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
        else if (m === 'vectorField') this.initVectorField();
        else if (m === 'pointMesh') this.initPointMesh();
        else if (m === 'strainGauge') this.initStrainGauge();
        else if (m === 'topoHUD') this.initTopoHUD();
        else if (m === 'blueprintGhost') this.initBlueprintGhost();
        else if (m === 'coordAxis') this.initCoordAxis();
        else if (m === 'hatchProfile') this.initHatchProfile();
        else if (m === 'triangulation') this.initTriangulation();
        else if (m === 'fluidStream') this.initFluidStream();
        else if (m === 'trussLogic') this.initTrussLogic();
        // New Operational Modes (31-40)
        else if (m === 'truckMove') this.initTruckMove();
        else if (m === 'craneLift') this.initCraneLift();
        else if (m === 'earthScoop') this.initEarthScoop();
        else if (m === 'concretePump') this.initConcretePump();
        else if (m === 'jackHammer') this.initJackHammer();
        else if (m === 'roadPaver') this.initRoadPaver();
        else if (m === 'activeDrone') this.initActiveDrone();
        else if (m === 'scaffoldUp') this.initScaffoldUp();
        else if (m === 'trafficZone') this.initTrafficZone();
        else if (m === 'masonryBuild') this.initMasonryBuild();
    }

    // --- INIT 1-10 ---
    initIndustrialMesh() { for (let i=0; i<40; i++) this.particles.push({ x:(Math.random()-0.5)*600, y:(Math.random()-0.5)*600, z:(Math.random()-0.5)*600, vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, vz:(Math.random()-0.5)*0.2 }); }
    initSeismicPulse() { const r=20, c=30, w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; for (let i=0; i<r; i++) for (let j=0; j<c; j++) this.particles.push({ x:(w/c)*j, y:(h/r)*i, baseX:(w/c)*j, baseY:(h/r)*i }); }
    initLidarScan() { this.particles = { scanX: 0, points: [] }; for (let i=0; i<300; i++) this.particles.points.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), z:Math.random()*2, brightness:0 }); }
    initStructuralAssembly() { for (let i=0; i<12; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr)-500, targetY:Math.random()*(this.canvas.height/this.dpr), w:Math.random()*200+100, h:15, progress:0 }); }
    initGeoStrata() { for (let i=0; i<6; i++) this.particles.push({ y:i*150, offset:Math.random()*1000, color:i%2===0?'rgba(156,66,33,0.1)':'rgba(45,55,72,0.1)' }); }
    initTectonicShift() { for (let i=0; i<8; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), poly:Array.from({length:6},()=>({x:(Math.random()-0.5)*200, y:(Math.random()-0.5)*200})), vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2 }); }
    initDigitalConcrete() { for (let i=0; i<30; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:this.canvas.height/this.dpr+100, size:Math.random()*80+40, targetY:Math.random()*(this.canvas.height/this.dpr), alpha:0 }); }
    initCraneView() { this.particles = { angle: 0, zoom: 1 }; }
    initRebarSpiral() { for (let i=0; i<100; i++) this.particles.push({ angle:(i/100)*Math.PI*2, radius:i*5, rv:0.005+Math.random()*0.01, color:i%2===0?'rgba(0,51,102,0.2)':'rgba(45,55,72,0.2)' }); }
    initHydraulicPressure() { for (let i=0; i<5; i++) this.particles.push({ x:(this.canvas.width/this.dpr)/6*(i+1), y:this.canvas.height/this.dpr/2, h:200, phase:Math.random()*Math.PI*2 }); }

    // --- INIT 11-20 ---
    initSonicSonar() { this.particles = { pulses: [], nodes: [] }; for (let i=0; i<15; i++) this.particles.nodes.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), active:0 }); }
    initImpactPiling() { this.particles = { pileX:(this.canvas.width/this.dpr)/2, pileY:-200, impact:0 }; }
    initStressMap() { for (let x=0; x<(this.canvas.width/this.dpr); x+=30) for (let y=0; y<(this.canvas.height/this.dpr); y+=30) this.particles.push({ x, y, stress:0 }); }
    initBimExplode() { for (let i=0; i<20; i++) this.particles.push({ x:(this.canvas.width/this.dpr)/2+(Math.random()-0.5)*100, y:(this.canvas.height/this.dpr)/2+(Math.random()-0.5)*100, targetX:Math.random()*(this.canvas.width/this.dpr), targetY:Math.random()*(this.canvas.height/this.dpr), w:50, h:50 }); }
    initThermalDrone() { for (let i=0; i<50; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), vx:(Math.random()-0.5), vy:(Math.random()-0.5), temp:Math.random() }); }
    initDataTelemetry() { this.particles = { streams: [] }; for (let i=0; i<8; i++) this.particles.streams.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), s:2+Math.random()*4 }); }
    initHydroFlow() { for (let i=0; i<200; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), l:15+Math.random()*15 }); }
    initEmSignal() { this.particles = { nodes: [] }; for (let i=0; i<8; i++) this.particles.nodes.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr) }); }
    initSoilCompaction() { for (let i=0; i<400; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), ty:(this.canvas.height/this.dpr)*0.8 + Math.random()*100 }); }
    initGeoAnnotate() { this.particles = { nodes: [] }; }

    // --- INIT 21-30 ---
    initVectorField() { for (let x=0; x<(this.canvas.width/this.dpr); x+=40) for (let y=0; y<(this.canvas.height/this.dpr); y+=40) this.particles.push({ x, y }); }
    initPointMesh() { for (let i=0; i<150; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5 }); }
    initStrainGauge() { for (let x=0; x<(this.canvas.width/this.dpr); x+=25) for (let y=0; y<(this.canvas.height/this.dpr); y+=25) this.particles.push({ x, y, bx:x, by:y }); }
    initTopoHUD() { for (let i=0; i<8; i++) this.particles.push({ r:100+i*150, offset:Math.random()*100 }); }
    initBlueprintGhost() { for (let i=0; i<12; i++) this.particles.push({ x:Math.random()*(this.canvas.width/this.dpr), y:Math.random()*(this.canvas.height/this.dpr), w:100+Math.random()*200, h:50+Math.random()*150, phase:Math.random()*Math.PI*2 }); }
    initCoordAxis() { this.particles = { rot: 0 }; }
    initHatchProfile() { for (let i=0; i<5; i++) this.particles.push({ y:i*(this.canvas.height/this.dpr)/5, h:(this.canvas.height/this.dpr)/5, type:i%3 }); }
    initTriangulation() { this.particles = { anchors: [{x:100,y:100}, {x:(this.canvas.width/this.dpr)-100,y:100}, {x:(this.canvas.width/this.dpr)/2,y:(this.canvas.height/this.dpr)-100}] }; }
    initFluidStream() { for (let i=0; i<40; i++) this.particles.push({ y:Math.random()*(this.canvas.height/this.dpr), offset:Math.random()*1000 }); }
    initTrussLogic() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; for (let i=0; i<10; i++) this.particles.push({ x:i*(w/9), yTop:h*0.3+Math.sin(i)*20, yBot:h*0.7+Math.cos(i)*20 }); }

    // --- INIT 31-40 (Operational) ---
    initTruckMove() { for (let i=0; i<5; i++) this.particles.push({ x: -100 - i*300, y: (this.canvas.height/this.dpr)*0.6, s: 3+Math.random()*2 }); }
    initCraneLift() { this.particles = { angle: 0, loadY: 0, swing: 0 }; }
    initEarthScoop() { this.particles = { bucketX: 0, bucketY: 0, dirt: [] }; }
    initConcretePump() { this.particles = { phase: 0, drips: [] }; }
    initJackHammer() { this.particles = { x: (this.canvas.width/this.dpr)/2, y: (this.canvas.height/this.dpr)/2, sparks: [] }; }
    initRoadPaver() { this.particles = { x: 0, trail: [] }; }
    initActiveDrone() { this.particles = { x: 100, y: 100, targetX: 100, targetY: 100, t: 0 }; }
    initScaffoldUp() { for (let i=0; i<40; i++) this.particles.push({ x: Math.random()*(this.canvas.width/this.dpr), y: (this.canvas.height/this.dpr), ty: Math.random()*(this.canvas.height/this.dpr), active: 0 }); }
    initTrafficZone() { for (let i=0; i<10; i++) this.particles.push({ x: Math.random()*(this.canvas.width/this.dpr), y: (this.canvas.height/this.dpr)*0.5 + (Math.random()-0.5)*100, s: 2+Math.random()*3 }); }
    initMasonryBuild() { for (let i=0; i<100; i++) this.particles.push({ x: (i%20)*40, y: (this.canvas.height/this.dpr) - Math.floor(i/20)*20, active: 0 }); }

    // --- CORE ---
    resize() { if (!this.canvas) return; const p=this.canvas.parentElement; this.canvas.width=p.offsetWidth*this.dpr; this.canvas.height=p.offsetHeight*this.dpr; this.canvas.style.width=p.offsetWidth+'px'; this.canvas.style.height=p.offsetHeight+'px'; this.ctx.scale(this.dpr, this.dpr); }
    handleMouseMove(e) { const r=this.canvas.getBoundingClientRect(); this.mouse.x=e.clientX-r.left; this.mouse.y=e.clientY-r.top; }

    animate() {
        if (!this.canvas) return;
        this.ctx.clearRect(0,0,this.canvas.width/this.dpr,this.canvas.height/this.dpr);
        const m=this.mode;
        if(m==='industrialMesh')this.drawIndustrialMesh(); else if(m==='seismicPulse')this.drawSeismicPulse(); else if(m==='lidarScan')this.drawLidarScan(); else if(m==='structuralAssembly')this.drawStructuralAssembly(); else if(m==='geoStrata')this.drawGeoStrata(); else if(m==='tectonicShift')this.drawTectonicShift(); else if(m==='digitalConcrete')this.drawDigitalConcrete(); else if(m==='craneView')this.drawCraneView(); else if(m==='rebarSpiral')this.drawRebarSpiral(); else if(m==='hydraulicPressure')this.drawHydraulicPressure();
        else if(m==='sonicSonar')this.drawSonicSonar(); else if(m==='impactPiling')this.drawImpactPiling(); else if(m==='stressMap')this.drawStressMap(); else if(m==='bimExplode')this.drawBimExplode(); else if(m==='thermalDrone')this.drawThermalDrone(); else if(m==='dataTelemetry')this.drawDataTelemetry(); else if(m==='hydroFlow')this.drawHydroFlow(); else if(m==='emSignal')this.drawEmSignal(); else if(m==='soilCompaction')this.drawSoilCompaction(); else if(m==='geoAnnotate')this.drawGeoAnnotate();
        else if(m==='vectorField')this.drawVectorField(); else if(m==='pointMesh')this.drawPointMesh(); else if(m==='strainGauge')this.drawStrainGauge(); else if(m==='topoHUD')this.drawTopoHUD(); else if(m==='blueprintGhost')this.drawBlueprintGhost(); else if(m==='coordAxis')this.drawCoordAxis(); else if(m==='hatchProfile')this.drawHatchProfile(); else if(m==='triangulation')this.drawTriangulation(); else if(m==='fluidStream')this.drawFluidStream(); else if(m==='trussLogic')this.drawTrussLogic();
        else if(m==='truckMove')this.drawTruckMove(); else if(m==='craneLift')this.drawCraneLift(); else if(m==='earthScoop')this.drawEarthScoop(); else if(m==='concretePump')this.drawConcretePump(); else if(m==='jackHammer')this.drawJackHammer(); else if(m==='roadPaver')this.drawRoadPaver(); else if(m==='activeDrone')this.drawActiveDrone(); else if(m==='scaffoldUp')this.drawScaffoldUp(); else if(m==='trafficZone')this.drawTrafficZone(); else if(m==='masonryBuild')this.drawMasonryBuild();
        requestAnimationFrame(()=>this.animate());
    }

    // --- DRAW 1-30 (Shortened) ---
    drawIndustrialMesh() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr, r=Date.now()*0.0003; this.ctx.strokeStyle='rgba(0,51,102,0.15)'; const p=this.particles.map(v=>{ const x=v.x*Math.cos(r)-v.z*Math.sin(r), z=v.x*Math.sin(r)+v.z*Math.cos(r), s=500/(500+z); return {x:w/2+x*s, y:h/2+v.y*s, s}; }); p.forEach((p1,i)=>p.forEach((p2,j)=>{ const d=Math.sqrt((p1.x-p2.x)**2+(p1.y-p2.y)**2); if(d<80*p1.s){ this.ctx.beginPath(); this.ctx.moveTo(p1.x,p1.y); this.ctx.lineTo(p2.x,p2.y); this.ctx.stroke(); } })); }
    drawSeismicPulse() { const t=Date.now()*0.002; this.particles.forEach(p=>{ const dx=p.baseX-this.mouse.x, dy=p.baseY-this.mouse.y, d=Math.sqrt(dx*dx+dy*dy); const pulse=Math.sin(d*0.05-t)*15, push=d<200?(200-d)*0.1:0; this.ctx.fillStyle='rgba(0,51,102,0.3)'; this.ctx.beginPath(); this.ctx.arc(p.baseX+push*(dx/d||0), p.baseY+pulse+push*(dy/d||0), 1.5, 0, Math.PI*2); this.ctx.fill(); }); }
    drawLidarScan() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.scanX=(this.particles.scanX+4)%w; this.ctx.strokeStyle='rgba(156,66,33,0.3)'; this.ctx.beginPath(); this.ctx.moveTo(this.particles.scanX,0); this.ctx.lineTo(this.particles.scanX,h); this.ctx.stroke(); this.particles.points.forEach(p=>{ const d=Math.abs(p.x-this.particles.scanX); if(d<20)p.brightness=1; else p.brightness*=0.98; if(p.brightness>0.01){ this.ctx.fillStyle=`rgba(0,51,102,${p.brightness*0.4})`; this.ctx.beginPath(); this.ctx.arc(p.x,p.y,p.z*2,0,Math.PI*2); this.ctx.fill(); } }); }
    drawStructuralAssembly() { this.ctx.strokeStyle='rgba(45,55,72,0.25)'; this.particles.forEach(p=>{ if(p.progress<1)p.progress+=0.012; const y=-500+(p.targetY+500)*p.progress; this.ctx.strokeRect(p.x,y,p.w,15); }); }
    drawGeoStrata() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.forEach(l=>{ l.offset+=0.005; this.ctx.fillStyle=l.color; this.ctx.beginPath(); this.ctx.moveTo(0,l.y); for(let x=0;x<=w;x+=50)this.ctx.lineTo(x,l.y+Math.sin(l.offset+x*0.01)*30); this.ctx.lineTo(w,h); this.ctx.lineTo(0,h); this.ctx.fill(); }); }
    drawTectonicShift() { this.ctx.strokeStyle='rgba(156,66,33,0.2)'; this.particles.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>this.canvas.width/this.dpr)p.vx*=-1; if(p.y<0||p.y>this.canvas.height/this.dpr)p.vy*=-1; this.ctx.save(); this.ctx.translate(p.x,p.y); this.ctx.beginPath(); p.poly.forEach((pt,i)=>i===0?this.ctx.moveTo(pt.x,pt.y):this.ctx.lineTo(pt.x,pt.y)); this.ctx.closePath(); this.ctx.stroke(); this.ctx.restore(); }); }
    drawDigitalConcrete() { this.particles.forEach(p=>{ if(p.alpha<1)p.alpha+=0.005; p.y+=(p.targetY-p.y)*0.01; this.ctx.fillStyle=`rgba(45,55,72,${p.alpha*0.1})`; this.ctx.beginPath(); this.ctx.arc(p.x,p.y,p.size,0,Math.PI*2); this.ctx.fill(); }); }
    drawCraneView() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.angle+=0.001; this.ctx.strokeStyle='rgba(0,51,102,0.3)'; this.ctx.save(); this.ctx.translate(w/2,h/2); this.ctx.rotate(this.particles.angle); this.ctx.strokeRect(-200,-200,400,400); this.ctx.beginPath(); this.ctx.moveTo(-300,0); this.ctx.lineTo(300,0); this.ctx.stroke(); this.ctx.restore(); }
    drawRebarSpiral() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.forEach(p=>{ p.angle+=p.rv; this.ctx.fillStyle=p.color; this.ctx.beginPath(); this.ctx.arc(w/2+Math.cos(p.angle)*p.radius, h/2+Math.sin(p.angle)*p.radius, 2,0,Math.PI*2); this.ctx.fill(); }); }
    drawHydraulicPressure() { this.particles.forEach(p=>{ p.phase+=0.05; const ch=200+Math.sin(p.phase)*50; this.ctx.fillStyle='rgba(45,55,72,0.1)'; this.ctx.fillRect(p.x-20,p.y-ch/2,40,ch); this.ctx.strokeStyle='rgba(156,66,33,0.2)'; this.ctx.strokeRect(p.x-20,p.y-ch/2,40,ch); }); }
    drawSonicSonar() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; if(Math.random()<0.02)this.particles.pulses.push({r:0,x:w/2,y:h/2}); this.particles.pulses.forEach((p,i)=>{ p.r+=3; if(p.r>1000)this.particles.pulses.splice(i,1); this.ctx.strokeStyle=`rgba(0,51,102,${1-p.r/1000})`; this.ctx.beginPath(); this.ctx.arc(p.x,p.y,p.r,0,Math.PI*2); this.ctx.stroke(); this.particles.nodes.forEach(n=>{ if(Math.abs(Math.sqrt((n.x-p.x)**2+(n.y-p.y)**2)-p.r)<10)n.active=1; }); }); this.particles.nodes.forEach(n=>{ if(n.active>0){ this.ctx.fillStyle=`rgba(156,66,33,${n.active})`; this.ctx.beginPath(); this.ctx.arc(n.x,n.y,4,0,Math.PI*2); this.ctx.fill(); n.active-=0.01; } }); }
    drawImpactPiling() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.pileY+=12; if(this.particles.pileY>h*0.75){ this.particles.pileY=-300; this.particles.impact=1; } if(this.particles.impact>0){ this.ctx.strokeStyle=`rgba(0,51,102,${this.particles.impact})`; this.ctx.beginPath(); this.ctx.arc(this.particles.pileX, h*0.75, (1-this.particles.impact)*200, 0, Math.PI*2); this.ctx.stroke(); this.particles.impact-=0.03; } this.ctx.fillStyle='rgba(45,55,72,0.15)'; this.ctx.fillRect(this.particles.pileX-25,this.particles.pileY,50,400); }
    drawStressMap() { this.particles.forEach(p=>{ const d=Math.sqrt((p.x-this.mouse.x)**2+(p.y-this.mouse.y)**2); p.stress=d<200?1-d/200:0; this.ctx.fillStyle=`hsla(${240-p.stress*240}, 70%, 50%, 0.08)`; this.ctx.fillRect(p.x,p.y,28,28); }); }
    drawBimExplode() { const dx=this.mouse.x-this.canvas.width/this.dpr/2, dy=this.mouse.y-this.canvas.height/this.dpr/2, explode=Math.min(1, Math.sqrt(dx*dx+dy*dy)/300); this.particles.forEach(p=>{ const cx=p.x+(p.targetX-p.x)*explode, cy=p.y+(p.targetY-p.y)*explode; this.ctx.strokeStyle='rgba(0,51,102,0.12)'; this.ctx.strokeRect(cx,cy,50,50); }); }
    drawThermalDrone() { this.particles.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>this.canvas.width/this.dpr)p.vx*=-1; if(p.y<0||p.y>this.canvas.height/this.dpr)p.vy*=-1; const g=this.ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,50); g.addColorStop(0,`rgba(156,66,33,${0.08*p.temp})`); g.addColorStop(1,'transparent'); this.ctx.fillStyle=g; this.ctx.fillRect(p.x-50,p.y-50,100,100); }); }
    drawDataTelemetry() { this.ctx.fillStyle='rgba(0,51,102,0.08)'; this.ctx.font='8px monospace'; this.particles.streams.forEach(s=>{ s.y+=s.s; if(s.y>this.canvas.height/this.dpr)s.y=-20; this.ctx.fillText(Math.random().toFixed(4), s.x, s.y); this.ctx.fillText('REF_'+s.x.toFixed(0), s.x, s.y+15); }); }
    drawHydroFlow() { const t=Date.now()*0.001; this.ctx.strokeStyle='rgba(0,51,102,0.12)'; this.particles.forEach(p=>{ const a=Math.sin(p.x*0.01+t)*Math.cos(p.y*0.01+t)*Math.PI; this.ctx.beginPath(); this.ctx.moveTo(p.x,p.y); this.ctx.lineTo(p.x+Math.cos(a)*p.l, p.y+Math.sin(a)*p.l); this.ctx.stroke(); }); }
    drawEmSignal() { const t=Date.now()*0.015; this.ctx.strokeStyle='rgba(0,51,102,0.15)'; this.particles.nodes.forEach(n=>{ this.ctx.beginPath(); for(let i=0;i<20;i++)this.ctx.lineTo(n.x+(i-10)*12, n.y+Math.sin(t+i*0.5)*20); this.ctx.stroke(); }); }
    drawSoilCompaction() { const t=Date.now()*0.04; this.particles.forEach(p=>{ p.y+=(p.ty-p.y)*0.01; this.ctx.fillStyle='rgba(45,55,72,0.2)'; this.ctx.beginPath(); this.ctx.arc(p.x+Math.sin(t+p.x)*2, p.y, 1.5,0,Math.PI*2); this.ctx.fill(); }); }
    drawGeoAnnotate() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.ctx.strokeStyle='rgba(156,66,33,0.15)'; this.ctx.setLineDash([5,5]); this.ctx.beginPath(); this.ctx.moveTo(this.mouse.x,0); this.ctx.lineTo(this.mouse.x,h); this.ctx.moveTo(0,this.mouse.y); this.ctx.lineTo(w,this.mouse.y); this.ctx.stroke(); this.ctx.setLineDash([]); this.ctx.fillStyle='rgba(156,66,33,0.4)'; this.ctx.font='10px Inter'; this.ctx.fillText(`X: ${this.mouse.x.toFixed(0)}`, this.mouse.x+10, 20); this.ctx.fillText(`Y: ${(h-this.mouse.y).toFixed(0)}`, 10, this.mouse.y-10); }
    drawVectorField() { this.ctx.strokeStyle='rgba(0,51,102,0.08)'; this.particles.forEach(p=>{ const a = Math.atan2(this.mouse.y-p.y, this.mouse.x-p.x); this.ctx.save(); this.ctx.translate(p.x, p.y); this.ctx.rotate(a); this.ctx.beginPath(); this.ctx.moveTo(-5,0); this.ctx.lineTo(5,0); this.ctx.lineTo(2,2); this.ctx.stroke(); this.ctx.restore(); }); }
    drawPointMesh() { this.ctx.fillStyle='rgba(0,51,102,0.25)'; this.ctx.strokeStyle='rgba(0,51,102,0.04)'; this.particles.forEach((p,i)=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>this.canvas.width/this.dpr)p.vx*=-1; if(p.y<0||p.y>this.canvas.height/this.dpr)p.vy*=-1; this.ctx.beginPath(); this.ctx.arc(p.x,p.y,1.5,0,Math.PI*2); this.ctx.fill(); for(let j=i+1; j<this.particles.length; j++){ const p2=this.particles[j], d=Math.sqrt((p.x-p2.x)**2+(p.y-p2.y)**2); if(d < 60) { this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(p2.x, p2.y); this.ctx.stroke(); } } }); }
    drawStrainGauge() { this.particles.forEach(p=>{ const dx=p.bx-this.mouse.x, dy=p.by-this.mouse.y, d=Math.sqrt(dx*dx+dy*dy); const move=d<200 ? (200-d)*0.15 : 0; p.x=p.bx+ (dx/d||0)*move; p.y=p.by+ (dy/d||0)*move; this.ctx.fillStyle=d<150?`rgba(156,66,33,${1-d/150})`:'rgba(0,51,102,0.08)'; this.ctx.beginPath(); this.ctx.arc(p.x, p.y, 1, 0, Math.PI*2); this.ctx.fill(); }); }
    drawTopoHUD() { const t=Date.now()*0.001; this.ctx.strokeStyle='rgba(156,66,33,0.12)'; this.ctx.font='9px monospace'; this.particles.forEach(p=>{ this.ctx.beginPath(); this.ctx.arc(this.canvas.width/this.dpr/2, this.canvas.height/this.dpr/2, p.r+Math.sin(t+p.offset)*20, 0, Math.PI*2); this.ctx.stroke(); this.ctx.fillStyle='rgba(156,66,33,0.25)'; this.ctx.fillText(`ELV: +${(p.r/10).toFixed(0)}m`, this.canvas.width/this.dpr/2 + p.r, this.canvas.height/this.dpr/2); }); }
    drawBlueprintGhost() { const t=Date.now()*0.0005; this.ctx.strokeStyle='rgba(0,51,102,0.08)'; this.ctx.setLineDash([10,5]); this.particles.forEach(p=>{ const s=0.8+Math.sin(t+p.phase)*0.2; this.ctx.strokeRect(p.x-p.w*s/2, p.y-p.h*s/2, p.w*s, p.h*s); this.ctx.beginPath(); this.ctx.moveTo(p.x-p.w*s/2, p.y); this.ctx.lineTo(p.x+p.w*s/2, p.y); this.ctx.stroke(); }); this.ctx.setLineDash([]); }
    drawCoordAxis() { const w=this.canvas.width/this.dpr, h=this.canvas.height/this.dpr; this.particles.rot+=0.01; this.ctx.strokeStyle='rgba(45,55,72,0.15)'; this.ctx.save(); this.ctx.translate(w/2, h/2); this.ctx.rotate(this.particles.rot); ['rgba(156,66,33,0.3)','rgba(0,51,102,0.3)','rgba(45,55,72,0.3)'].forEach((c,i)=>{ this.ctx.strokeStyle=c; this.ctx.beginPath(); this.ctx.moveTo(0,0); this.ctx.lineTo(150*Math.cos(i*2.1), 150*Math.sin(i*2.1)); this.ctx.stroke(); this.ctx.fillStyle=c; this.ctx.fillText(['X-AXIS','Y-AXIS','Z-AXIS'][i], 160*Math.cos(i*2.1), 160*Math.sin(i*2.1)); }); this.ctx.restore(); }
    drawHatchProfile() { this.particles.forEach(p=>{ this.ctx.strokeStyle='rgba(45,55,72,0.08)'; for(let i=0; i<p.h; i+=10){ this.ctx.beginPath(); this.ctx.moveTo(0, p.y+i); this.ctx.lineTo(this.canvas.width/this.dpr, p.y+i+ (p.type===0?100:-100)); this.ctx.stroke(); } this.ctx.fillStyle='rgba(45,55,72,0.05)'; this.ctx.fillText(['SILT','CLAY','SHALE'][p.type], 20, p.y+20); }); }
    drawTriangulation() { this.ctx.strokeStyle='rgba(156,66,33,0.15)'; this.ctx.setLineDash([2,2]); this.particles.anchors.forEach(a=>{ this.ctx.beginPath(); this.ctx.moveTo(a.x, a.y); this.ctx.lineTo(this.mouse.x, this.mouse.y); this.ctx.stroke(); const d=Math.sqrt((a.x-this.mouse.x)**2+(a.y-this.mouse.y)**2); this.ctx.fillStyle='rgba(156,66,33,0.3)'; this.ctx.font='9px monospace'; this.ctx.fillText(`DIST: ${d.toFixed(1)}m`, (a.x+this.mouse.x)/2, (a.y+this.mouse.y)/2); }); this.ctx.setLineDash([]); }
    drawFluidStream() { const w=this.canvas.width/this.dpr, t=Date.now()*0.002; this.ctx.strokeStyle='rgba(0,51,102,0.08)'; this.particles.forEach(p=>{ this.ctx.beginPath(); this.ctx.moveTo(0, p.y); for(let x=0; x<w; x+=20) this.ctx.lineTo(x, p.y + Math.sin(x*0.01+t+p.offset)*30); this.ctx.stroke(); const ax= (t*200 + p.offset*100) % w; const ay= p.y + Math.sin(ax*0.01+t+p.offset)*30; this.ctx.fillStyle='rgba(0,51,102,0.25)'; this.ctx.beginPath(); this.ctx.arc(ax,ay,2,0,Math.PI*2); this.ctx.fill(); }); }
    drawTrussLogic() { this.ctx.strokeStyle='rgba(45,55,72,0.12)'; this.particles.forEach((p,i)=>{ this.ctx.beginPath(); this.ctx.moveTo(p.x, p.yTop); this.ctx.lineTo(p.x, p.yBot); this.ctx.stroke(); if(this.particles[i+1]){ const p2=this.particles[i+1]; this.ctx.beginPath(); this.ctx.moveTo(p.x,p.yTop); this.ctx.lineTo(p2.x,p2.yTop); this.ctx.lineTo(p2.x,p2.yBot); this.ctx.lineTo(p.x,p.yTop); this.ctx.stroke(); } }); }

    // --- DRAW 31-40 (Operational) ---
    drawTruckMove() {
        const w = this.canvas.width/this.dpr;
        this.ctx.fillStyle = 'rgba(45, 55, 72, 0.2)';
        this.particles.forEach(p => {
            p.x += p.s; if (p.x > w + 100) p.x = -100;
            this.ctx.fillRect(p.x, p.y, 40, 20); // Truck body
            this.ctx.fillRect(p.x + 30, p.y - 10, 15, 15); // Cab
            this.ctx.beginPath(); this.ctx.arc(p.x + 10, p.y + 20, 5, 0, Math.PI*2); this.ctx.arc(p.x + 35, p.y + 20, 5, 0, Math.PI*2); this.ctx.fill();
        });
    }
    drawCraneLift() {
        const w = (this.canvas.width/this.dpr), h = (this.canvas.height/this.dpr);
        this.particles.angle += 0.005; this.particles.loadY = Math.sin(this.particles.angle)*50;
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.3)'; this.ctx.lineWidth = 4;
        this.ctx.beginPath(); this.ctx.moveTo(w/2, h); this.ctx.lineTo(w/2, h*0.3); // Tower
        const boomX = w/2 + Math.cos(Math.sin(this.particles.angle)*0.5)*200;
        const boomY = h*0.3 + Math.sin(Math.sin(this.particles.angle)*0.5)*200;
        this.ctx.lineTo(boomX, boomY); this.ctx.stroke();
        this.ctx.lineWidth = 1; this.ctx.beginPath(); this.ctx.moveTo(boomX, boomY); this.ctx.lineTo(boomX, boomY + 100 + this.particles.loadY); this.ctx.stroke();
        this.ctx.strokeRect(boomX - 25, boomY + 100 + this.particles.loadY, 50, 20);
    }
    drawEarthScoop() {
        const t = Date.now()*0.002;
        this.particles.bucketX = (this.canvas.width/this.dpr)/2 + Math.cos(t)*200;
        this.particles.bucketY = (this.canvas.height/this.dpr)*0.7 + Math.sin(t*2)*50;
        if(Math.sin(t*2) > 0.8 && Math.random() < 0.3) this.particles.dirt.push({x:this.particles.bucketX, y:this.particles.bucketY, vy:0});
        this.ctx.fillStyle = 'rgba(156, 66, 33, 0.3)';
        this.particles.dirt.forEach((d,i)=>{ d.vy += 0.2; d.y += d.vy; if(d.y > (this.canvas.height/this.dpr))this.particles.dirt.splice(i,1); this.ctx.beginPath(); this.ctx.arc(d.x, d.y, 3, 0, Math.PI*2); this.ctx.fill(); });
        this.ctx.strokeStyle = 'rgba(45, 55, 72, 0.4)'; this.ctx.strokeRect(this.particles.bucketX-20, this.particles.bucketY-20, 40, 30);
    }
    drawConcretePump() {
        const w = (this.canvas.width/this.dpr), h = (this.canvas.height/this.dpr);
        this.particles.phase += 0.02;
        this.ctx.strokeStyle = 'rgba(45, 55, 72, 0.3)'; this.ctx.lineWidth = 8;
        this.ctx.beginPath(); this.ctx.moveTo(w*0.2, h); this.ctx.lineTo(w*0.3, h*0.5); this.ctx.lineTo(w*0.5 + Math.sin(this.particles.phase)*100, h*0.4); this.ctx.stroke();
        const endX = w*0.5 + Math.sin(this.particles.phase)*100, endY = h*0.4;
        if(Math.random()<0.2) this.particles.drips.push({x:endX, y:endY, s:2+Math.random()*3});
        this.ctx.fillStyle = 'rgba(45, 55, 72, 0.2)'; this.ctx.lineWidth = 1;
        this.particles.drips.forEach((d,i)=>{ d.y += d.s; if(d.y > h)this.particles.drips.splice(i,1); this.ctx.beginPath(); this.ctx.arc(d.x, d.y, 4, 0, Math.PI*2); this.ctx.fill(); });
    }
    drawJackHammer() {
        this.particles.x += (Math.random()-0.5)*10; this.particles.y += (Math.random()-0.5)*10;
        if(Math.random()<0.5) this.particles.sparks.push({x:this.particles.x, y:this.particles.y, vx:(Math.random()-0.5)*10, vy:(Math.random()-0.5)*10, a:1});
        this.ctx.strokeStyle = 'rgba(45, 55, 72, 0.5)'; this.ctx.strokeRect(this.particles.x-5, this.particles.y-40, 10, 80);
        this.particles.sparks.forEach((s,i)=>{ s.x+=s.vx; s.y+=s.vy; s.a-=0.05; if(s.a<=0)this.particles.sparks.splice(i,1); this.ctx.fillStyle=`rgba(156,66,33,${s.a})`; this.ctx.beginPath(); this.ctx.arc(s.x,s.y,2,0,Math.PI*2); this.ctx.fill(); });
    }
    drawRoadPaver() {
        const w = (this.canvas.width/this.dpr), h = (this.canvas.height/this.dpr);
        this.particles.x = (this.particles.x + 2) % (w+200);
        this.particles.trail.push({x:this.particles.x-100, y:h*0.6});
        if(this.particles.trail.length > 200) this.particles.trail.shift();
        this.ctx.fillStyle = 'rgba(45, 55, 72, 0.15)';
        this.particles.trail.forEach(pt => this.ctx.fillRect(pt.x, pt.y, 10, 50));
        this.ctx.fillStyle = 'rgba(45, 55, 72, 0.4)'; this.ctx.fillRect(this.particles.x-100, h*0.6-10, 100, 70);
    }
    drawActiveDrone() {
        const w = (this.canvas.width/this.dpr), h = (this.canvas.height/this.dpr);
        this.particles.t += 0.01; this.particles.x = w/2 + Math.cos(this.particles.t)*300; this.particles.y = h/2 + Math.sin(this.particles.t*0.5)*200;
        this.ctx.strokeStyle = 'rgba(0, 51, 102, 0.4)'; this.ctx.beginPath(); this.ctx.moveTo(this.particles.x-30,this.particles.y); this.ctx.lineTo(this.particles.x+30,this.particles.y); this.ctx.moveTo(this.particles.x,this.particles.y-30); this.ctx.lineTo(this.particles.x,this.particles.y+30); this.ctx.stroke();
        this.ctx.fillStyle = `rgba(156,66,33,${0.2 + Math.sin(this.particles.t*10)*0.1})`;
        this.ctx.beginPath(); this.ctx.arc(this.particles.x, this.particles.y, 100, 0, Math.PI*2); this.ctx.fill();
    }
    drawScaffoldUp() {
        this.particles.forEach(p => {
            if(Math.random()<0.01) p.active = 1;
            if(p.active > 0) {
                p.y += (p.ty - p.y)*0.05; p.active -= 0.005;
                this.ctx.strokeStyle = `rgba(45, 55, 72, ${p.active*0.4})`;
                this.ctx.strokeRect(p.x, p.y, 40, 10); this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(p.x, this.canvas.height/this.dpr); this.ctx.stroke();
            }
        });
    }
    drawTrafficZone() {
        const w = (this.canvas.width/this.dpr), h = (this.canvas.height/this.dpr);
        this.particles.forEach(p => {
            p.x += p.s; if(p.x > w+50) p.x = -50;
            this.ctx.fillStyle = 'rgba(0, 51, 102, 0.2)'; this.ctx.fillRect(p.x, p.y, 30, 15);
        });
        this.ctx.fillStyle = 'rgba(156, 66, 33, 0.4)';
        for(let i=0; i<w; i+=100) { this.ctx.beginPath(); this.ctx.moveTo(i, h*0.5-20); this.ctx.lineTo(i-10, h*0.5+20); this.ctx.lineTo(i+10, h*0.5+20); this.ctx.fill(); }
    }
    drawMasonryBuild() {
        this.particles.forEach((p,i) => {
            if(Math.random()<0.005) p.active = 1;
            if(p.active > 0) {
                this.ctx.fillStyle = `rgba(45, 55, 72, ${p.active*0.3})`;
                this.ctx.fillRect(p.x, p.y, 38, 18); p.active -= 0.002;
            }
        });
    }

    setMode(mode) { this.mode = mode; this.init(); }
    destroy() { this.canvas = null; }
}
