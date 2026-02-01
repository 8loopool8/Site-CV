<nav class="fixed w-full z-50 bg-deep-bg/95 backdrop-blur-md border-b border-white/10 shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between h-24">
      <div class="flex items-center gap-4">
        <div class="relative h-14 w-14 bg-guardian-yellow rounded-full flex items-center justify-center border-2 border-white shadow-[0_0_15px_rgba(255,214,0,0.6)] overflow-hidden shrink-0">
          <img src="assets/Logo.png" class="w-full h-full object-contain transform scale-150">
        </div>
        <div class="flex flex-col justify-center h-full pt-1">
          <span class="text-2xl font-black text-white leading-none tracking-tight">AIUDIT</span>
          <span class="text-[10px] font-bold text-guardian-blue tracking-[0.3em] uppercase leading-none mt-1">SOLUTIONS</span>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-8">
        <div class="flex bg-white/5 rounded-full p-1 border border-white/10">
          <button (click)="setLang('ro')" [ngClass]="currentLang === 'ro' ? 'bg-guardian-blue text-black' : 'text-gray-400'" class="px-4 py-1 rounded-full text-xs font-bold transition">RO</button>
          <button (click)="setLang('en')" [ngClass]="currentLang === 'en' ? 'bg-guardian-blue text-black' : 'text-gray-400'" class="px-4 py-1 rounded-full text-xs font-bold transition">EN</button>
        </div>
        <a href="#r-stats" class="text-sm font-bold text-gray-300 hover:text-guardian-yellow transition tracking-widest">R-STATS</a>
        <a href="#projects" class="text-sm font-bold text-gray-300 hover:text-guardian-yellow transition tracking-widest">PROIECTE</a>
        <a href="#contact" class="px-6 py-2.5 bg-guardian-blue text-black font-bold rounded-full text-xs hover:scale-105 transition shadow-lg shadow-cyan-500/20 tracking-wider">CONTACT</a>
      </div>
    </div>
  </div>
</nav>

<div class="relative pt-48 pb-24 bg-deep-bg min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-guardian-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="relative z-10 inline-block px-4 py-1.5 mb-8 border border-guardian-yellow/30 rounded-full bg-guardian-yellow/5 text-guardian-yellow text-[10px] font-black tracking-[0.25em] uppercase animate-pulse-slow">
    LUPU ANDREI • QUALITY ENGINEER & DEVELOPER
  </div>
  <h1 class="relative z-10 text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
    AIUDIT <span class="text-guardian-blue drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">SOLUTIONS</span>
  </h1>
  <p class="relative z-10 max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light text-center">
    <ng-container *ngIf="currentLang === 'ro'">Construiesc sisteme care nu doar monitorizează, ci optimizează. De la siguranța șantierului la integritatea datelor clinice.</ng-container>
    <ng-container *ngIf="currentLang === 'en'">Building systems that not only monitor but optimize. From construction site safety to clinical data integrity.</ng-container>
  </p>
  <div class="relative z-10 flex flex-col sm:flex-row gap-5">
    <a href="#projects" class="px-8 py-4 bg-guardian-blue text-black font-extrabold rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition text-sm tracking-wider uppercase">
      VEZI SOLUȚIILE
    </a>
    <a href="#contact" class="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:border-guardian-yellow hover:text-guardian-yellow transition text-sm tracking-wider uppercase bg-black/40 backdrop-blur">
      CONTACT
    </a>
  </div>
</div>

<div class="bg-black/30 py-20 border-y border-white/5 backdrop-blur-sm relative z-20">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-6">
      <div *ngFor="let cat of skillCategories" class="bg-card-bg p-6 rounded-xl border border-white/10 text-center hover:-translate-y-2 hover:border-guardian-blue transition duration-300 group shadow-lg">
        <div class="text-4xl mb-4 group-hover:scale-110 transition duration-300 transform">{{ cat.icon }}</div>
        <h3 class="font-bold text-white mb-4 text-sm uppercase tracking-wide">{{ currentLang === 'ro' ? cat.name_ro : cat.name_en }}</h3>
        <ul class="text-xs text-gray-400 space-y-2.5">
          <li *ngFor="let s of cat.skills" class="bg-white/5 py-1.5 px-3 rounded text-gray-300 hover:text-white hover:bg-guardian-blue/20 transition cursor-default">
            {{ s }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="py-24 bg-[#0a0a0a] relative" id="r-stats">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl font-black text-white mb-4 text-center tracking-tight flex items-center justify-center gap-3">
       <span class="text-blue-500">R</span> & BIOSTATISTICS
    </h2>
    <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
      <ng-container *ngIf="currentLang === 'ro'">Data Science Aplicat pentru Cercetare Clinică și Automatizare de Laborator.</ng-container>
      <ng-container *ngIf="currentLang === 'en'">Applied Data Science for Clinical Research & Lab Automation.</ng-container>
      <br><span class="text-guardian-yellow text-xs font-mono uppercase tracking-widest">Problem • Solution • Impact</span>
    </p>

    <div class="space-y-20">
      <div *ngFor="let rProj of rProjects" class="flex flex-col md:flex-row gap-10 items-start border-b border-white/5 pb-16 last:border-0">
        <div class="md:w-1/2 space-y-6">
           <div class="flex items-center gap-3">
              <span class="text-4xl bg-white/5 p-3 rounded-lg">{{ rProj.icon }}</span>
              <div>
                 <h3 class="text-2xl font-bold text-white">{{ rProj.title }}</h3>
                 <span class="text-xs text-guardian-blue font-mono uppercase tracking-wider">{{ rProj.subtitle }}</span>
              </div>
           </div>
           <div class="space-y-4">
              <div class="bg-red-500/5 border-l-2 border-red-500/50 p-4 rounded-r-lg">
                 <h4 class="text-red-400 text-xs font-bold uppercase mb-1">Problem</h4>
                 <p class="text-gray-400 text-sm">{{ currentLang === 'ro' ? rProj.problem_ro : rProj.problem_en }}</p>
              </div>
              <div class="bg-green-500/5 border-l-2 border-green-500/50 p-4 rounded-r-lg">
                 <h4 class="text-green-400 text-xs font-bold uppercase mb-1">Solution</h4>
                 <p class="text-gray-400 text-sm">{{ currentLang === 'ro' ? rProj.solution_ro : rProj.solution_en }}</p>
              </div>
              <div class="bg-blue-500/5 border-l-2 border-blue-500/50 p-4 rounded-r-lg">
                 <h4 class="text-blue-400 text-xs font-bold uppercase mb-1">Business Impact</h4>
                 <p class="text-gray-300 text-sm font-semibold">{{ currentLang === 'ro' ? rProj.impact_ro : rProj.impact_en }}</p>
              </div>
           </div>
        </div>
        <div class="md:w-1/2 w-full">
           <div class="bg-[#1e1e1e] rounded-t-lg border border-white/10 p-2 flex items-center gap-2">
              <div class="flex gap-1.5">
                 <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span class="text-[10px] text-gray-500 font-mono ml-2">analysis_script.R</span>
           </div>
           <div class="bg-[#0f0f0f] border-x border-b border-white/10 p-4 overflow-x-auto max-h-60 mb-4 font-mono text-xs">
              <pre class="text-blue-300">{{ rProj.code }}</pre>
           </div>
           <div class="aspect-video bg-black rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <img [src]="rProj.image" class="w-full h-full object-contain hover:scale-105 transition duration-500" alt="R Visualization">
           </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-20 bg-deep-bg border-y border-white/5">
    <div class="max-w-6xl mx-auto px-4">
       <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-white">Interactive Dashboard <span class="text-guardian-blue text-sm font-normal">(R-Shiny Concept)</span></h2>
          <span class="bg-green-500/10 text-green-500 px-3 py-1 rounded text-xs font-bold border border-green-500/20">● Live Simulation</span>
       </div>
       <div class="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row h-[500px]">
          <div class="w-full md:w-64 bg-[#111] border-r border-white/10 p-6 flex flex-col gap-6">
             <div>
                <label class="text-xs text-gray-500 uppercase font-bold mb-2 block">Select Metric</label>
                <select class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-guardian-blue outline-none">
                   <option>Adverse Events (AE)</option>
                   <option>Lab Deviations</option>
                   <option>Subject Dropout</option>
                </select>
             </div>
             <div>
                <label class="text-xs text-gray-500 uppercase font-bold mb-2 block">Exclude Patients < {{ ageThreshold }} yrs</label>
                <input type="range" min="18" max="70" [(ngModel)]="ageThreshold" (input)="updateDashboard()" class="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-guardian-blue">
                <div class="flex justify-between text-[10px] text-gray-500 mt-1"><span>18</span><span>70</span></div>
             </div>
             <button (click)="triggerDownload()" class="mt-auto bg-guardian-blue text-black font-bold py-2 rounded text-xs hover:bg-white transition flex justify-center items-center">
                {{ currentLang === 'ro' ? downloadText_ro : downloadText_en }}
             </button>
          </div>
          <div class="flex-1 p-8 bg-[#1a1a1a] flex flex-col">
             <div class="flex justify-between mb-6">
                <h3 class="text-white font-bold">Average Adverse Event (AE) Score</h3>
                <div class="flex gap-2"><span class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span><span class="text-xs text-gray-400">Data Streaming...</span></div>
             </div>
             <div class="flex-1 bg-black/20 rounded border border-white/5 relative flex items-end justify-around p-4 gap-4">
                <div class="w-1/4 bg-blue-500/50 rounded-t hover:bg-blue-500 transition-all duration-300 relative group" [style.height.%]="chartHeights[0]">
                   <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white">{{ chartLabels[0] }}</span>
                   <span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-white/50">Control</span>
                </div>
                <div class="w-1/4 bg-guardian-yellow/50 rounded-t hover:bg-guardian-yellow transition-all duration-300 relative group" [style.height.%]="chartHeights[1]">
                   <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white">{{ chartLabels[1] }}</span>
                   <span class="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-black/50 font-bold">Drug-X</span>
                </div>
             </div>
          </div>
       </div>
    </div>
</div>

<div class="py-24 bg-deep-bg relative" id="projects">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl font-black text-white mb-20 text-center tracking-tight">
      {{ currentLang === 'ro' ? 'SOLUȚII SOFTWARE' : 'SOFTWARE SOLUTIONS' }}
    </h2>
    <div class="grid md:grid-cols-2 gap-16">
      <div *ngFor="let proj of projects" class="group bg-card-bg rounded-3xl overflow-hidden border border-white/10 hover:border-guardian-blue hover:shadow-[0_0_40px_rgba(0,229,255,0.1)] transition-all duration-500 flex flex-col h-full cursor-pointer" (click)="openProject(proj)">
        <div class="h-64 overflow-hidden relative border-b border-white/5">
          <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10"></div>
          <img [src]="proj.image" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1">
          <div class="absolute top-5 left-5 z-20 h-16 w-16 bg-guardian-yellow rounded-full border-2 border-white shadow-xl shadow-black/50 flex items-center justify-center overflow-hidden">
            <img [src]="proj.logo" class="w-full h-full object-contain transform scale-150">
          </div>
          <span class="absolute top-5 right-5 z-20 bg-black/90 backdrop-blur text-guardian-yellow border border-guardian-yellow/50 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
            {{ proj.badge }}
          </span>
        </div>
        <div class="p-8 flex-1 flex flex-col">
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-guardian-blue transition">{{ proj.title }}</h3>
          <p class="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
            {{ currentLang === 'ro' ? proj.description_ro : proj.description_en }}
          </p>
          <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
             <button class="text-white text-xs font-bold uppercase tracking-widest hover:text-guardian-yellow transition flex items-center gap-2 group-hover:gap-3">
                {{ currentLang === 'ro' ? 'Vezi Detalii' : 'View Details' }} <span class="text-lg">→</span>
             </button>
             <a *ngIf="proj.title.includes('Guardian')" href="#contact" (click)="$event.stopPropagation()" class="px-5 py-2 bg-guardian-yellow text-black text-[10px] font-black rounded hover:bg-white transition shadow-lg uppercase tracking-widest transform hover:-translate-y-0.5">
                Request Demo
             </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-24 max-w-6xl mx-auto px-4">
  <div class="grid md:grid-cols-2 gap-20">
    <div>
      <h3 class="text-xl text-white font-bold mb-10 flex items-center gap-3 uppercase tracking-[0.2em]">
        <span class="text-guardian-blue text-2xl">►</span> Experience
      </h3>
      <div class="space-y-12 border-l border-white/10 ml-2 pl-10 relative">
        <div *ngFor="let job of jobs" class="relative group">
          <div class="absolute -left-[45px] top-1.5 h-4 w-4 rounded-full bg-deep-bg border-2 border-guardian-blue group-hover:bg-guardian-blue group-hover:shadow-[0_0_15px_rgba(0,229,255,0.6)] transition-all duration-300"></div>
          <div class="text-[10px] text-guardian-yellow font-mono mb-2 tracking-widest uppercase opacity-80">{{ job.period }}</div>
          <h4 class="text-xl font-bold text-white leading-tight mb-1">{{ currentLang === 'ro' ? job.role_ro : job.role_en }}</h4>
          <div class="text-sm text-gray-400 mb-3 font-semibold border-b border-white/10 pb-2 inline-block">{{ job.company }}</div>
          <p class="text-sm text-gray-500 leading-relaxed">{{ currentLang === 'ro' ? job.desc_ro : job.desc_en }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-xl text-white font-bold mb-10 flex items-center gap-3 uppercase tracking-[0.2em]">
        <span class="text-guardian-yellow text-2xl">►</span> Education
      </h3>
      <div class="space-y-6 mb-16">
        <div *ngFor="let edu of education" class="bg-card-bg p-6 rounded-r-2xl border-l-4 border-guardian-yellow hover:bg-white/5 transition duration-300">
          <div class="text-white font-bold text-lg mb-1">{{ currentLang === 'ro' ? edu.degree_ro : edu.degree_en }}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide mb-3">{{ edu.school }} • {{ edu.period }}</div>
          <div class="text-sm text-guardian-blue font-mono border-t border-white/5 pt-2">{{ edu.details }}</div>
        </div>
      </div>
      
      <h4 class="text-xs font-bold text-gray-500 mb-6 uppercase tracking-[0.2em] text-center">Research & Publications</h4>
      <div class="space-y-3 mb-16">
        <div *ngFor="let art of articles" class="bg-white/5 p-4 rounded border-l-2 border-blue-500 hover:bg-white/10 transition">
            <div class="text-white font-bold text-sm">{{ art.title }}</div>
            <div class="text-[10px] text-gray-400 uppercase mt-1">{{ art.type }}</div>
        </div>
      </div>

      <h4 class="text-xs font-bold text-gray-500 mb-6 uppercase tracking-[0.2em] text-center">Verified Certifications</h4>
      <div class="flex flex-col gap-3">
        <div *ngFor="let cert of certifications" (click)="openImage(cert.image)" class="group relative bg-white/5 border border-white/10 p-4 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-guardian-blue hover:translate-x-2">
             <div class="flex justify-between items-center relative z-10">
                <div>
                    <h5 class="text-sm font-bold text-white group-hover:text-guardian-blue transition">{{ cert.name }}</h5>
                    <span class="text-[10px] text-gray-500 uppercase tracking-wider">{{ cert.org }}</span>
                </div>
                <span class="text-xl opacity-50 group-hover:opacity-100 transition">📜</span>
             </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-24 bg-gradient-to-b from-black to-green-950/30 text-center border-t border-white/5 relative overflow-hidden">
  <div class="relative z-10">
    <span class="text-green-500 text-xs font-bold tracking-[0.4em] uppercase block mb-4">Personal Life</span>
    <h2 class="text-3xl font-bold text-white mb-8">{{ currentLang === 'ro' ? 'Colecția de Aroizi' : 'Aroids Collection' }}</h2>
    <p class="max-w-xl mx-auto text-gray-400 italic mb-12 px-4 leading-relaxed">
      "{{ currentLang === 'ro' ? 'Peste 300 de plante rare. Aici învăț că lucrurile bune necesită timp și grijă constantă.' : 'Over 300 rare plants. Here I learn that good things require time and constant care.' }}"
    </p>
    <div class="flex justify-center gap-6 flex-wrap px-4">
      <div *ngFor="let img of plantImages" class="h-48 w-48 bg-white/5 rounded-2xl border border-white/10 overflow-hidden group hover:-rotate-2 transition duration-500 shadow-2xl">
        <img [src]="img" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 hover:scale-110">
      </div>
    </div>
  </div>
</div>

<div id="contact" class="py-24 bg-black text-center border-t border-white/10">
  <h2 class="text-5xl font-black text-white mb-16 tracking-tight">LET'S CONNECT</h2>
  <div class="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
    <a [href]="'mailto:' + contact.email" class="flex items-center gap-4 text-gray-400 hover:text-white transition group bg-white/5 px-8 py-4 rounded-full hover:bg-white/10 border border-transparent hover:border-guardian-blue">
      <span class="text-2xl">✉️</span> <span class="text-lg font-mono">{{ contact.email }}</span>
    </a>
    <a [href]="'tel:' + contact.phone" class="flex items-center gap-4 text-gray-400 hover:text-white transition group bg-white/5 px-8 py-4 rounded-full hover:bg-white/10 border border-transparent hover:border-guardian-blue">
      <span class="text-2xl">📞</span> <span class="text-lg font-mono">{{ contact.phone }}</span>
    </a>
  </div>
  <div class="flex justify-center gap-6">
    <a [href]="contact.linkedin" target="_blank" class="px-10 py-3 bg-[#0077b5] text-white font-bold rounded-lg hover:brightness-110 transition shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">LinkedIn</a>
    <a [href]="contact.github" target="_blank" class="px-10 py-3 bg-[#24292e] text-white font-bold rounded-lg hover:bg-[#333] transition shadow-lg hover:shadow-gray-500/30 transform hover:-translate-y-1">GitHub</a>
  </div>
  <footer class="mt-20 text-gray-700 text-xs font-mono uppercase tracking-widest">&copy; 2026 Aiudit Solutions. System Operational.</footer>
</div>

<div *ngIf="activeImage" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-xl" (click)="closeImage()">
  <img [src]="activeImage" class="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10" (click)="$event.stopPropagation()">
  <button class="absolute top-6 right-6 text-white/50 hover:text-white text-5xl transition">&times;</button>
</div>

<div *ngIf="activeProject" class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" (click)="closeProject()">
  <div class="bg-[#0a0a0a] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border border-guardian-blue/30 shadow-[0_0_100px_rgba(0,229,255,0.15)] p-0" (click)="$event.stopPropagation()">
    <div class="bg-gray-900/80 p-8 border-b border-white/10 flex justify-between items-center sticky top-0 z-10 backdrop-blur-xl">
      <div class="flex items-center gap-6">
        <div class="h-16 w-16 bg-guardian-yellow rounded-full border-2 border-white p-1 flex items-center justify-center overflow-hidden shadow-lg">
            <img [src]="activeProject.logo" class="w-full h-full object-contain transform scale-150">
        </div>
        <div>
          <h2 class="text-3xl font-black text-white mb-1">{{ activeProject.title }}</h2>
          <span class="text-xs text-guardian-blue font-mono uppercase tracking-[0.2em] bg-guardian-blue/10 px-2 py-1 rounded">System Access Granted</span>
        </div>
      </div>
      <button (click)="closeProject()" class="text-gray-500 hover:text-white text-5xl leading-none transition transform hover:rotate-90">&times;</button>
    </div>
    <div class="p-10">
      <div class="mb-12">
        <h3 class="text-guardian-yellow font-bold text-xs uppercase tracking-[0.3em] mb-6 border-l-2 border-guardian-yellow pl-4">Mission Protocol</h3>
        <p class="text-gray-300 text-lg leading-relaxed whitespace-pre-line font-light">{{ currentLang === 'ro' ? activeProject.full_desc_ro : activeProject.full_desc_en }}</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-8 mb-12">
        <div *ngFor="let file of activeProject.code_files" class="bg-[#050505] rounded-xl border border-white/10 overflow-hidden group hover:border-guardian-blue/50 transition duration-500 shadow-2xl">
          <div class="bg-white/5 px-5 py-3 text-xs text-gray-400 font-mono border-b border-white/5 flex justify-between items-center">
            <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-red-500"></span><span class="w-2 h-2 rounded-full bg-yellow-500"></span><span class="w-2 h-2 rounded-full bg-green-500"></span><span class="ml-2">{{ file.name }}</span></span>
            <span class="text-guardian-blue text-[10px] uppercase tracking-wider group-hover:animate-pulse">● Live Execution</span>
          </div>
          <pre class="p-6 text-xs font-mono text-green-400 overflow-x-auto whitespace-pre-wrap leading-relaxed opacity-90 group-hover:opacity-100 transition">{{ file.code }}</pre>
        </div>
      </div>
      <div>
        <h3 class="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-4">Visual Interfaces</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <img *ngFor="let shot of activeProject.screenshots" [src]="shot" class="rounded-lg border border-white/10 w-full hover:scale-[1.02] transition duration-500 hover:shadow-2xl hover:border-white/30">
        </div>
      </div>
    </div>
  </div>
</div>