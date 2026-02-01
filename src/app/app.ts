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

  activeProject: any = null;

  setLang(lang: 'ro' | 'en') { this.currentLang = lang; }
  openProject(project: any) { this.activeProject = project; }
  closeProject() { this.activeProject = null; }

  heroTitle_ro = 'Hybrid R&D Scientist | AI Systems Architect | Biostatistician';
  heroTitle_en = 'Hybrid R&D Scientist | AI Systems Architect | Biostatistician';

  heroBio_ro = 'Sunt un specialist în Științele Vieții care a decis să nu mai aleagă între eprubetă și codul sursă. Cu un background solid în Biologie Moleculară (PCR) și un Master în Biostatistică, integrez rigoarea farmaceutică (Quality Engineering) cu inovația Generative AI. Dezvolt soluții precum Aiudit Safety, transformând conformitatea legală în sisteme autonome.';
  heroBio_en = 'I am a Life Sciences specialist who decided to stop choosing between the test tube and the source code. With a solid background in Molecular Biology (PCR) and a Master\'s in Biostatistics, I integrate pharmaceutical rigor (Quality Engineering) with Generative AI innovation. I develop solutions like Aiudit Safety, transforming legal compliance into autonomous systems.';

  skills = [
    { category: 'Biostatistics & Data', items: ['R Programming', 'SAS', 'Jamovi', 'Python (Pandas)', 'SQL'] },
    { category: 'R&D & Molecular', items: ['qPCR', 'Primer Design', 'HPLC', 'Gas Chromatography (GC)', 'IVDR Validation'] },
    { category: 'Quality Engineering', items: ['ALCOA+ Principles', 'ISO 13485', 'GMP / GCP', 'SOP Management', 'CAPA'] },
    { category: 'Business & Sales', items: ['CRM Management', 'Strategic Negotiation', 'Cold Calling', 'Account Mgmt'] },
    { category: 'Full-Stack & AI', items: ['Angular', 'TailwindCSS', 'Docker', 'REST API', 'LLM Integration (RAG)'] }
  ];

  softwareProjects = [
    {
      id: 'aiudit',
      name: 'Aiudit',
      tagline: 'Primul Auditor Digital cu Inteligență de Verificare în Cascadă',
      description: 'Nu doar scanezi documente, le supui unui stres-test digital. Sistemul Deep-Check (10x Multi-Agent Verification) garantează starea de "Audit-Ready". Gândire transparentă (Chain-of-Thought) care citează exact legea încălcată.',
      features: ['Chain-of-Thought Reasoning', 'Local Docker Privacy', 'Legislative Mapping (ISO/GCP)'],
      codeSnippet: `> Initiating Deep-Check...
> Agent 1 (Syntax): OK
> Agent 2 (Compliance): ERROR found in Section 4.2
> Logic: "Semnătura datează dinainte de aprobarea etică."
> Reference: Law 95/2006, Art 14.
> RISK SCORE: HIGH (Audit Failure likely).`,
      tech: ['DeepSeek-R1', 'Python', 'Vector DB', 'Angular'],
      logo: 'assets/Logo.png'
    },
    {
      id: 'guardian',
      name: 'Guardian Aingel',
      tagline: 'SSM Vision & Predictive Logistics',
      description: 'Sistem proactiv care previne accidentele și întârzierile înainte să apară. Identifică lipsa EIP prin Computer Vision și recalculează fluxul logistic în timp real dacă apar blocaje pe șantier.',
      features: ['YOLOv8 Object Detection', 'Predictive Logistics', 'Real-Time Alerts'],
      codeSnippet: `if detection.class == "no_helmet":
  alert_level = "CRITICAL"
  fine_risk = "5000 RON"

elif logistics.delay > 15_mins:
  schedule.reoptimize(target="Concrete_Pouring")
  notify_manager("Delay predicted. Shift orders.")`,
      tech: ['OpenCV', 'YOLO', 'TensorFlow', 'IoT Edge'],
      logo: 'assets/LogoGuardianAingel.png'
    }
  ];

  rProjects = [
    {
      title: 'Oncology Survival Analysis',
      icon: '⚕️',
      problem: 'Interpretarea datelor de supraviețuire brute este dificilă și predispusă la erori umane în studiile clinice.',
      solution: 'Algoritm automatizat R pentru generarea curbelor Kaplan-Meier și calculul Hazard Ratio.',
      impact: 'Decizii clinice bazate pe date statistice validate, standardizând raportarea eficacității tratamentului.',
      code: `fit <- survfit(Surv(time, status) ~ treatment)\nggsurvplot(fit, data = lung, pval = TRUE)`,
      image: 'assets/KMplot.png'
    },
    {
      title: 'qPCR Validation Tool',
      icon: '🧪',
      problem: 'Calculul manual al eficienței PCR și regresiei liniare consumă 2 ore/set și riscă neconformitatea IVDR.',
      solution: 'Script R care extrage automat valorile Cq, elimină outlierii și calculează panta/R².',
      impact: 'Reducerea timpului de analiză cu 90% și asigurarea conformității instantanee cu normele de laborator.',
      code: `model <- lm(Ct ~ log10(Conc), data=df)\nefficiency <- (10^(-1/coef(model)[2]) - 1) * 100`,
      image: 'assets/r_qpcr.png'
    },
    {
      title: 'Genomics Heatmap (PCA)',
      icon: '🧬',
      problem: 'Vizualizarea corelațiilor în seturi de date genomice multidimensionale este imposibilă în tabele standard.',
      solution: 'Implementare Pheatmap cu Clustering Ierarhic pentru vizualizarea expresiei genice.',
      impact: 'Identificarea biomarkerilor critici și a nișelor ecologice în studiile de mediu.',
      code: `pheatmap(mat, clustering_distance_cols = "euclidean",
         color = colorRampPalette(c("navy", "white", "firebrick3"))(50))`,
      image: 'assets/r_heatmap.png'
    }
  ];

  experience = [
    {
      role: 'Quality Engineer (GXP)',
      company: 'Terapia SA',
      period: '04/2025 - 10/2025',
      desc: 'Guardian of Data Integrity. Managed SOPs and ensured strict adherence to GLP/GCP standards. Conducted CAPA investigations.'
    },
    {
      role: 'Sales & Business Development',
      company: 'Freelance',
      period: '2023 - 2025',
      desc: 'High-volume prospecting and CRM management. Developed B2B negotiation strategies.'
    },
    {
      role: 'Customer Exp. Manager',
      company: 'Tărâmul Elfilor',
      period: '2015 - 2020',
      desc: 'Managed daily operations. Orchestrated immersive pedagogical scenarios based on child psychology. Engineered childhood memories.'
    },
    {
      role: 'Customer Support Specialist',
      company: 'BT / Regina Maria / CGS',
      period: 'Collective Exp.',
      desc: 'Banking, Healthcare & Telecom expertise. High-performance KPI management (AHT, CSAT) and Technical Troubleshooting in English & Romanian.'
    }
  ];

  education = [
    {
      degree_ro: 'Master Biostatistică și Bioinformatică',
      degree_en: 'Master Biostatistics & Bioinformatics',
      school: 'UMF Cluj-Napoca',
      period: '2025 - Prezent',
      details_ro: 'Design Studii Clinice, Analiză R, Modelare Statistică.',
      details_en: 'Clinical Trial Design, R Analysis, Statistical Modeling.'
    },
    {
      degree_ro: 'Licență Biotehnologii Industriale',
      degree_en: 'BSc Industrial Biotechnology',
      school: 'UBB Cluj-Napoca',
      period: '2018 - 2023',
      details_ro: 'Specializare: Industrie Alimentară, Farmacie, Protecția Mediului, Chimie Analitică, Microbiologie. Teză: 10/10.',
      details_en: 'Specialization: Food Industry, Pharma, Environmental Protection, Analytical Chemistry, Microbiology. Thesis: 10/10.'
    }
  ];

  articles = [
    { title: 'Breathing Chemicals: Air Pollution Review', type: 'Published (2022)' },
    { title: 'Microbial pollution in Mureș River', type: 'Academic Research' },
    { title: 'Genetic potential of groundwater bacteria', type: 'Thesis (10/10)' }
  ];

  leadership = [
    { title: "English Theatre Troupe 'Dramatricks'", role: 'Founder', desc: 'Directing, Scriptwriting, and Stage Presence (English).' },
    { title: 'High School Debate Club', role: 'Founder', desc: 'Public Speaking & Argumentation (English).' },
    { title: 'English Proficiency', role: 'C2 Certification', desc: 'Cambridge Advanced - Bilingual High School Profile.' }
  ];
}
