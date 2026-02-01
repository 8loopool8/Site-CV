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

  heroTitle_ro = 'Hybrid R&D Scientist | AI Systems Architect | Biostatistician';
  heroTitle_en = 'Hybrid R&D Scientist | AI Systems Architect | Biostatistician';

  bio_ro = 'Sunt un specialist în Științele Vieții care a decis să nu mai aleagă între eprubetă și codul sursă. Cu un background solid în Biologie Moleculară (PCR) și un Master în Biostatistică, integrez rigoarea farmaceutică (Quality Engineering) cu inovația Generative AI.';
  bio_en = 'I am a Life Sciences specialist who decided to stop choosing between the test tube and the source code. With a solid background in Molecular Biology (PCR) and a Master in Biostatistics, I integrate pharmaceutical rigor (Quality Engineering) with Generative AI innovation.';

  skills = [
    { category: 'Data Science', items: ['R Programming (Expert)', 'SAS', 'Clinical Data', 'Python (Pandas)', 'SQL'] },
    { category: 'R&D & Molecular', items: ['qPCR', 'HPLC', 'Gas Chromatography (GC)', 'Primer Design', 'IVDR Validation'] },
    { category: 'Quality Engineering', items: ['ALCOA+ Principles', 'ISO 13485', 'GMP / GCP', 'SOP Management', 'CAPA'] },
    { category: 'Business & Sales', items: ['CRM Management', 'Strategic Negotiation', 'Cold Calling', 'Account Mgmt'] },
    { category: 'Full-Stack & AI', items: ['Angular', 'TailwindCSS', 'Docker', 'REST API', 'LLM Integration (RAG)'] }
  ];

  softwareProjects = [
    {
      id: 'aiudit',
      name: 'Aiudit',
      tagline_ro: 'Auditor Digital Cognitiv cu Verificare în Cascadă',
      tagline_en: 'Deep-Check Cognitive Auditor with Cascade Verification',
      desc_ro: 'Nu doar scanezi documente, le supui unui stres-test digital. Sistemul Deep-Check (Multi-Agent Verification) garantează starea de "Audit-Ready" în Pharma și Medical. Gândire transparentă (Chain-of-Thought) care citează exact legea încălcată.',
      desc_en: 'You do not just scan documents; you digital stress-test them. The Deep-Check system (Multi-Agent Verification) guarantees "Audit-Ready" status in Pharma and Medical. Transparent Chain-of-Thought reasoning that cites the exact violated law.',
      features: ['Chain-of-Thought Reasoning', 'Local Docker Privacy', 'Legislative Mapping (ISO/GCP)'],
      codeSnippet: `> Initiating Deep-Check...
> Agent 1 (Syntax): OK
> Agent 2 (Compliance): ERROR found in Section 4.2
> Logic: "Signature predates ethical approval."
> Reference: Law 95/2006, Art 14.
> RISK SCORE: HIGH (Audit Failure likely).`,
      tech: ['DeepSeek-R1', 'Python', 'Vector DB', 'Angular'],
      logo: 'assets/Logo.png'
    },
    {
      id: 'guardian',
      name: 'Guardian Aingel',
      tagline_ro: 'SSM Vision & Logistică Predictivă',
      tagline_en: 'HSE Vision & Predictive Logistics',
      desc_ro: 'Sistem proactiv care previne accidentele și întârzierile înainte să apară. Identifică lipsa EIP prin Computer Vision și recalculează fluxul logistic în timp real dacă apar blocaje, evitând pierderile operaționale.',
      desc_en: 'Proactive system preventing accidents and delays before they occur. Identifies missing PPE via Computer Vision and recalculates logistics flow in real-time if site blockages are detected, avoiding operational losses.',
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

  experience = [
    {
      role_ro: 'Quality Engineer (GXP)',
      role_en: 'Quality Engineer (GXP)',
      company: 'Terapia SA',
      period: '04/2025 - 10/2025',
      desc_ro: 'Gardian al Integrității Datelor. Am gestionat SOP-uri și am asigurat aderența strictă la standardele GLP/GCP. Am condus investigații CAPA și audituri interne.',
      desc_en: 'Guardian of Data Integrity. Managed SOPs and ensured strict adherence to GLP/GCP standards. Conducted CAPA investigations and internal audits.'
    },
    {
      role_ro: 'Sales & Business Development',
      role_en: 'Sales & Business Development',
      company: 'Freelance',
      period: '2023 - 2025',
      desc_ro: 'Prospecție intensivă și management CRM. Dezvoltarea strategiilor de negociere B2B pentru închiderea contractelor cu volum mare.',
      desc_en: 'High-volume prospecting and CRM management. Developed B2B negotiation strategies to close high-value contracts.'
    },
    {
      role_ro: 'Customer Exp. Manager',
      role_en: 'Customer Exp. Manager',
      company: 'Tărâmul Elfilor',
      period: '2015 - 2020',
      desc_ro: 'Management operațional și coordonarea echipei. Am orchestrat scenarii pedagogice imersive bazate pe psihologia copilului.',
      desc_en: 'Operational management and team coordination. Orchestrated immersive pedagogical scenarios based on child psychology.'
    },
    {
      role_ro: 'Customer Support Specialist',
      role_en: 'Customer Support Specialist',
      company: 'BT / Regina Maria / CGS',
      period: 'Collective Exp.',
      desc_ro: 'Expertiză în Banking, Medical & Telecom. Management de performanță KPI (AHT, CSAT) și Troubleshooting Tehnic în Engleză & Română.',
      desc_en: 'Banking, Healthcare & Telecom expertise. High-performance KPI management (AHT, CSAT) and Technical Troubleshooting in English & Romanian.'
    }
  ];

  leadership = [
    {
      title: "English Theatre Troupe 'Dramatricks'",
      role: 'Founder',
      desc_ro: 'Regie, Scenaristică și Prezență Scenică (Limba Engleză).',
      desc_en: 'Directing, Scriptwriting, and Stage Presence (English).'
    },
    {
      title: 'High School Debate Club',
      role: 'Founder',
      desc_ro: 'Public Speaking și Argumentare (Limba Engleză).',
      desc_en: 'Public Speaking and Argumentation (English).'
    },
    {
      title: 'English Proficiency',
      role: 'C2 Certification',
      desc_ro: 'Cambridge Advanced - Profil Liceal Bilingv.',
      desc_en: 'Cambridge Advanced - Bilingual High School Profile.'
    }
  ];

  rProjects = [
    {
      title: 'Oncology Survival Analysis',
      icon: '⚕️',
      problem_ro: 'Interpretarea datelor de supraviețuire brute este dificilă și predispusă la erori umane.',
      problem_en: 'Raw survival data interpretation is difficult and prone to human error.',
      solution_ro: 'Algoritm automatizat R pentru generarea curbelor Kaplan-Meier și calculul Hazard Ratio.',
      solution_en: 'Automated R algorithm for Kaplan-Meier curve generation and Hazard Ratio calculation.',
      impact_ro: 'Decizii clinice bazate pe date statistice validate, standardizând raportarea.',
      impact_en: 'Clinical decisions based on validated statistical data, standardizing reporting.',
      code: `fit <- survfit(Surv(time, status) ~ treatment)\nggsurvplot(fit, data = lung, pval = TRUE)`,
      image: 'assets/KMplot.png'
    },
    {
      title: 'qPCR Validation Tool',
      icon: '🧪',
      problem_ro: 'Calculul manual al eficienței PCR consumă 2 ore/set și riscă neconformitatea IVDR.',
      problem_en: 'Manual PCR efficiency calculation takes 2 hours/set and risks IVDR non-compliance.',
      solution_ro: 'Script R care extrage automat valorile Cq, elimină outlierii și calculează panta/R².',
      solution_en: 'R script that automatically extracts Cq values, removes outliers, and calculates slope/R².',
      impact_ro: 'Reducerea timpului de analiză cu 90% și asigurarea conformității de laborator.',
      impact_en: '90% reduction in analysis time and ensuring laboratory compliance.',
      code: `model <- lm(Ct ~ log10(Conc), data=df)\nefficiency <- (10^(-1/coef(model)[2]) - 1) * 100`,
      image: 'assets/r_qpcr.png'
    },
    {
      title: 'Genomics Heatmap (PCA)',
      icon: '🧬',
      problem_ro: 'Vizualizarea corelațiilor în seturi de date genomice multidimensionale este imposibilă.',
      problem_en: 'Visualizing correlations in multidimensional genomic datasets is impossible manually.',
      solution_ro: 'Implementare Pheatmap cu Clustering Ierarhic pentru vizualizarea expresiei genice.',
      solution_en: 'Pheatmap implementation with Hierarchical Clustering for gene expression visualization.',
      impact_ro: 'Identificarea biomarkerilor critici și a nișelor ecologice.',
      impact_en: 'Identification of critical biomarkers and ecological niches.',
      code: `pheatmap(mat, clustering_distance_cols = "euclidean",
         color = colorRampPalette(c("navy", "white", "firebrick3"))(50))`,
      image: 'assets/r_heatmap.png'
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
    { title_ro: 'Breathing Chemicals: Air Pollution Review', title_en: 'Breathing Chemicals: Air Pollution Review', type_ro: 'Publicat (2022)', type_en: 'Published (2022)' },
    { title_ro: 'Poluarea microbială în Râul Mureș', title_en: 'Microbial pollution in Mureș River', type_ro: 'Cercetare Academică', type_en: 'Academic Research' },
    { title_ro: 'Potențialul genetic al bacteriilor din apele subterane', title_en: 'Genetic potential of groundwater bacteria', type_ro: 'Teză (10/10)', type_en: 'Thesis (10/10)' }
  ];

  setLang(lang: 'ro' | 'en') {
    this.currentLang = lang;
  }
}
