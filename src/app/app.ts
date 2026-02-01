import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  currentLang: 'ro' | 'en' = 'ro';

  contact = {
    email: 'lupuandrei123123@gmail.com',
    phone: '+40 743 803 744',
    linkedin: 'https://www.linkedin.com/in/andrei-lupu-51bb89280/',
    github: 'https://github.com/8loopool8'
  };

  activeImage: string | null = null;
  activeProject: any = null;
  showComingSoonToast = false;

  setLang(lang: 'ro' | 'en') { this.currentLang = lang; }
  openImage(imgUrl: string) { this.activeImage = imgUrl; }
  closeImage() { this.activeImage = null; }
  openProject(project: any) { this.activeProject = project; }
  closeProject() { this.activeProject = null; }

  triggerComingSoon() {
    if (this.showComingSoonToast) return;
    this.showComingSoonToast = true;
    setTimeout(() => { this.showComingSoonToast = false; }, 2500);
  }

  clinicalData = [
    { group: 'Control', age: 68, ae_score: 15 }, { group: 'Control', age: 72, ae_score: 22 },
    { group: 'Control', age: 45, ae_score: 10 }, { group: 'Control', age: 55, ae_score: 18 },
    { group: 'Treatment', age: 66, ae_score: 45 }, { group: 'Treatment', age: 54, ae_score: 30 },
    { group: 'Treatment', age: 71, ae_score: 85 }, { group: 'Treatment', age: 35, ae_score: 15 }
  ];

  ageThreshold: number = 30;
  chartHeights: number[] = [20, 20];
  chartLabels: string[] = ['20', '20'];

  constructor() { this.updateDashboard(); }

  updateDashboard() {
    const filtered = this.clinicalData.filter(p => p.age >= this.ageThreshold);
    const controlGroup = filtered.filter(p => p.group === 'Control');
    const treatGroup = filtered.filter(p => p.group === 'Treatment');
    const avgControl = controlGroup.length > 0 ? controlGroup.reduce((a, b) => a + b.ae_score, 0) / controlGroup.length : 0;
    const avgTreat = treatGroup.length > 0 ? treatGroup.reduce((a, b) => a + b.ae_score, 0) / treatGroup.length : 0;
    this.chartHeights = [Math.min(avgControl, 100), Math.min(avgTreat, 100)];
    this.chartLabels = [avgControl.toFixed(1), avgTreat.toFixed(1)];
  }

  skillPills = ['Quality Engineer', 'Biostatistician', 'Full-Stack Developer', 'Storyteller', 'GXP Compliance'];

  rProjects = [
    {
      title: 'Survival Analysis', subtitle: 'KM-Gold Standard', icon: '⚕️',
      problem_ro: 'Interpretarea datelor clinice brute este ineficientă fără vizualizare statistică.',
      problem_en: 'Raw clinical data interpretation is inefficient without statistical visualization.',
      solution_ro: 'Curbe Kaplan-Meier automate în R cu tabele de risc și log-rank test.',
      solution_en: 'Automated Kaplan-Meier curves in R with risk tables and log-rank tests.',
      impact_ro: 'Standardizarea raportării eficacității în studiile oncologice.',
      impact_en: 'Standardizing treatment efficacy reporting in oncology trials.',
      image: 'assets/KMplot.png',
      code: `library(survival)\nfit <- survfit(Surv(time, status) ~ sex, data = lung)\nggsurvplot(fit, data = lung, pval = TRUE)`
    },
    {
      title: 'qPCR Efficiency', subtitle: 'Lab Automation', icon: '🧪',
      problem_ro: 'Calculul manual al eficienței PCR genera erori și dura 2 ore/set.',
      problem_en: 'Manual PCR efficiency calculation caused errors and took 2 hours/set.',
      solution_ro: 'Script R de procesare automată a datelor brute Ct și calcul R².',
      solution_en: 'R script for automated Ct data processing and R² calculation.',
      impact_ro: 'Reducerea timpului de analiză cu 90% în validarea de laborator.',
      impact_en: '90% reduction in analysis time for lab validation.',
      image: 'assets/r_qpcr.png',
      code: `ggplot(data, aes(x=log10(Conc), y=Ct)) + geom_smooth(method="lm")`
    },
    {
      title: 'Genomics Heatmap', subtitle: 'Gene Expression', icon: '🧬',
      problem_ro: 'Vizualizarea datelor genetice multidimensionale este imposibilă în tabele standard.',
      problem_en: 'Visualizing high-dimensional genetic expression data is impossible in standard tables.',
      solution_ro: 'Implementare complexă Pheatmap în R pentru clustering și analiză de corelație.',
      solution_en: 'Complex Pheatmap implementation in R for clustering and correlation analysis.',
      impact_ro: 'Identificarea markerilor genetici pentru studii clinice.',
      impact_en: 'Identifying genetic markers for clinical trials.',
      image: 'assets/r_heatmap.png',
      code: `pheatmap(exp_data, clustering_distance_rows = "euclidean", main = "Gene Expression Profile")`
    }
  ];

  projects = [
    {
      title: 'Guardian Aingel', badge: 'Safety Intelligence', image: 'assets/dashboard_ui.png', logo: 'assets/LogoGuardianAingel.png',
      description_ro: 'Motor Cognitiv Privacy-First. Nu găsim erori; eliminăm riscul de 8M Euro/zi de oprire regulatorie prin Federated Learning și LLM-uri locale.',
      description_en: 'A Privacy-First Cognitive Engine. We don\'t just find errors; we eliminate the 8M Euro/day risk of regulatory shutdown through Federated Learning and Local LLMs.',
      full_desc_ro: 'Guardian Aingel nu este doar un "polițist" SSM, ci un scut financiar. Sistemul folosește AI pentru a identifica instant lipsa EIP sau pericolele pe șantier.\n\nLOGISTICĂ & PREVENȚIE: Dacă betonul nu este turnat la ora stabilită, Guardian recalculează automat fluxul livrărilor.',
      full_desc_en: 'Guardian Aingel is not just an HSE "cop," but a financial shield. The system uses AI to instantly identify PPE violations or site hazards.\n\nLOGISTICS & PREVENTION: If concrete isn\'t poured as scheduled, Guardian automatically recalculates delivery flows.',
      code_files: [{ name: 'hazard_detector.py', code: 'if hazard_detected:\n  alert.send_manager("RISK_OF_FINE", penalty_estimate="10k_RON")' }],
      screenshots: ['assets/dashboard_ui.png', 'assets/ai_report1.png'],
      tech: ['Python', 'OpenCV', 'YOLOv8', 'Docker']
    }
  ];

  jobs = [
    { role_ro: 'Inginer de Calitate (GXP)', role_en: 'Quality Engineer (GXP)', company: 'Terapia SA', period: '04/2025 - 10/2025', desc_ro: 'SOP Management, GXP, ALCOA+ Data Integrity, investigații CAPA.', desc_en: 'SOP Management, GXP, ALCOA+ Data Integrity, CAPA investigations.', full_desc_ro: 'SOP Management, GXP, ALCOA+ Data Integrity, investigații CAPA.', full_desc_en: 'SOP Management, GXP, ALCOA+ Data Integrity, CAPA investigations.' },
    { role_ro: 'Sales & Business Development', role_en: 'Sales & Business Development', company: 'Freelance', period: '2023 - 2025', desc_ro: 'Prospecție intensivă (Cold Calling), management CRM și negociere strategică.', desc_en: 'Intensive prospecting (Cold Calling), CRM management, and strategic negotiation.', full_desc_ro: 'Prospecție intensivă (Cold Calling), management CRM și negociere strategică.', full_desc_en: 'Intensive prospecting (Cold Calling), CRM management, and strategic negotiation.' },
    { role_ro: 'Fondator & Lead Dev', role_en: 'Founder & Lead Dev', company: 'Aiudit Solutions', period: '2024 - Prezent', desc_ro: 'Arhitectură AI RAG Privacy-First, Dockerizare și soluții de securitate industrială.', desc_en: 'Privacy-First AI RAG architecture, Dockerization, and industrial security solutions.', full_desc_ro: 'Arhitectură AI RAG Privacy-First, Dockerizare și soluții de securitate industrială.', full_desc_en: 'Privacy-First AI RAG architecture, Dockerization, and industrial security solutions.' },
    { role_ro: 'Customer Exp. Manager', role_en: 'Customer Exp. Manager', company: 'Tărâmul Elfilor', period: '2015 - 2020', desc_ro: 'Am fost acolo de la început, construind o lume magică. Am condus o echipă de „Elfi" (educatori) pentru a crea povești pedagogice immersive bazate pe psihologia copilului. Nu ne jucam doar; ingineriam amintiri din copilărie.', desc_en: 'I was there from the beginning, building a magical world. Managed a team of \'Elves\' (educators) to create immersive pedagogical stories based on child psychology. We didn\'t just play; we engineered childhood memories.', full_desc_ro: 'Am fost acolo de la început, construind o lume magică. Am condus o echipă de „Elfi" (educatori) pentru a crea povești pedagogice immersive bazate pe psihologia copilului. Nu ne jucam doar; ingineriam amintiri din copilărie.', full_desc_en: 'I was there from the beginning, building a magical world. Managed a team of \'Elves\' (educators) to create immersive pedagogical stories based on child psychology. We didn\'t just play; we engineered childhood memories.' }
  ];

  education = [
    { degree_ro: 'Master Biostatistică și Bioinformatică', degree_en: 'Master Biostatistics', school: 'UMF Cluj', period: '2025 - Prezent', details: 'Design Studii Clinice, R, Modelare Statistică.' },
    {
      degree_ro: 'Licență Biotehnologii Industriale', degree_en: "BSc Biotechnology", school: 'UBB Cluj', period: '2018 - 2023',
      details: 'Specializat în: Industrie Alimentară, Pharma, Protecția Mediului, Chimie Analitică, Epurarea Apelor, Microbiologie. Teză: 10/10.'
    }
  ];

  articles = [
    { title: 'Breathing Chemicals: Air Pollution Review', type: 'Published (2022)' },
    { title: 'Microbial pollution in Mureș River', type: 'Academic Research' },
    { title: 'Genetic potential of groundwater bacteria', type: 'Thesis' }
  ];

  ecosystemText_ro = 'Dincolo de cod, conduc un laborator de biotehnologie privat acasă. Conduc în prezent o colecție de peste 300 de Aroizi rari și experimentez cu culturi celulare la domiciliu. Este locul unde background-ul meu în biologie se întâlnește cu obsesia pentru sisteme.';
  ecosystemText_en = 'Beyond the code, I run a private biotech lab at home. I\'m currently managing a collection of over 300 rare Aroids and experimenting with home-based cell cultures. It\'s where my biology background meets my obsession for systems.';
}
