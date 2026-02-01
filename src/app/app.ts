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

  heroBio_ro = 'Sunt un specialist în Științe ale Vieții care a decis să nu mai aleagă între eprubetă și codul sursă. Cu un background solid în Biologie Moleculară (PCR/NGS) și un Master în Biostatistică, integrez rigoarea farmaceutică (Quality Engineering) cu inovația Generative AI. Dezvolt soluții precum Aiudit Safety, transformând conformitatea legală în sisteme autonome.';
  heroBio_en = 'I am a Life Sciences specialist who decided to stop choosing between the test tube and the source code. With a solid background in Molecular Biology (PCR/NGS) and a Master\'s in Biostatistics, I integrate pharmaceutical rigor (Quality Engineering) with Generative AI innovation. I develop solutions like Aiudit Safety, transforming legal compliance into autonomous systems.';

  skills = [
    {
      category_ro: 'Data Science & Statistical Programming',
      category_en: 'Data Science & Statistical Programming',
      keywords: ['R (Expert)', 'SAS', 'Clinical Data', 'Python'],
      desc_ro: 'Transpunerea modelelor statistice complexe în insights de business pentru studii clinice și cercetare de mediu.',
      desc_en: 'Translating complex statistical models into business insights for clinical trials and environmental research.'
    },
    {
      category_ro: 'R&D & Molecular Diagnostics',
      category_en: 'R&D & Molecular Diagnostics',
      keywords: ['qPCR', 'Primer Design', 'Validare IVDR', 'NGS'],
      desc_ro: 'Dezvoltarea și optimizarea protocoalelor de detecție moleculară cu accent pe sensibilitate și specificitate analitică.',
      desc_en: 'Development and optimization of molecular detection protocols with emphasis on analytical sensitivity and specificity.'
    },
    {
      category_ro: 'Quality Engineering & Regulatory',
      category_en: 'Quality Engineering & Regulatory',
      keywords: ['ALCOA+', 'ISO 13485', 'GMP/GCP', 'Data Integrity'],
      desc_ro: 'Implementarea standardelor de integritate a datelor și managementul riscului într-un mediu de producție farma reglementat.',
      desc_en: 'Implementation of data integrity standards and risk management in a regulated pharma production environment.'
    },
    {
      category_ro: 'Business Development & Client Relations',
      category_en: 'Business Development & Client Relations',
      keywords: ['CRM Management', 'Strategic Negotiation', 'Cold Calling', 'Account Mgmt'],
      desc_ro: 'Experiență în vânzări B2B și gestionarea relațiilor cu clienții. Abilități de negociere și comunicare dobândite în medii competitive.',
      desc_en: 'Experience in B2B sales and client relationship management. Negotiation and communication skills acquired in competitive environments.'
    }
  ];

  softwareProjects = [
    {
      id: 'aiudit',
      name: 'Aiudit',
      tagline: 'Deep-Check Cognitive Auditor',
      headline_ro: 'Aiudit – Primul Auditor Digital cu Inteligență de Verificare în Cascadă',
      headline_en: 'Aiudit – The First Digital Auditor with Cascade Verification Intelligence',
      subheadline_ro: 'Nu doar scanezi documente, le supui unui stres-test digital. Garanția "Audit-Ready" pentru Pharma & Clinical.',
      subheadline_en: 'You don\'t just scan documents, you subject them to a digital stress test. "Audit-Ready" guarantee for Pharma & Clinical.',
      description_ro: 'Sistem de audit digital bazat pe Agentic AI și RAG. Verifică documentația în cascadă (Ensemble Voting) pentru a garanta starea de "Audit-Ready" în sectoare reglementate (Pharma, Medical).',
      description_en: 'Digital audit system based on Agentic AI and RAG. Verifies documentation in cascade (Ensemble Voting) to guarantee "Audit-Ready" status in regulated sectors (Pharma, Medical).',
      features: [
        { title: 'Deep-Check', desc_ro: '10x Multi-Agent Verification (No Hallucinations)', desc_en: '10x Multi-Agent Verification (No Hallucinations)' },
        { title: 'Chain-of-Thought', desc_ro: 'Explains logic & Cites Laws (GCP/SSM)', desc_en: 'Explains logic & Cites Laws (GCP/SSM)' },
        { title: 'Privacy', desc_ro: 'Local Docker Execution (Data never leaves the building)', desc_en: 'Local Docker Execution (Data never leaves the building)' }
      ],
      codeSnippet: `> Initiating Deep-Check...
> Agent 1 (Syntax): OK
> Agent 2 (Compliance): ERROR found in Section 4.2
> Logic: "Semnătura datează dinainte de aprobarea etică."
> Reference: Law 95/2006, Art 14.
> RISK SCORE: HIGH (Audit Failure likely).`,
      tech: ['DeepSeek-R1', 'Python', 'Vector DB', 'Angular'],
      image: 'assets/dashboard_ui.png',
      logo: 'assets/Logo.png'
    },
    {
      id: 'guardian',
      name: 'Guardian Aingel',
      tagline: 'SSM Vision & Logistics Optimizer',
      headline_ro: 'Guardian Aingel – Computer Vision & Predictive Logistics',
      headline_en: 'Guardian Aingel – Computer Vision & Predictive Logistics',
      subheadline_ro: 'Sistem proactiv de securitate (SSM) și optimizare logistică. Previne accidentele și întârzierile înainte să apară.',
      subheadline_en: 'Proactive safety (HSE) and logistics optimization system. Prevents accidents and delays before they occur.',
      description_ro: 'Nu este doar un "polițist" SSM, ci un scut logistic. Identifică lipsa echipamentului de protecție și recalculează fluxul livrărilor dacă betonul nu este turnat la timp, evitând pierderile operaționale.',
      description_en: 'It is not just an HSE "cop," but a logistics shield. Identifies missing PPE and recalculates delivery flow if concrete is not poured on time, avoiding operational losses.',
      features: [
        { title: 'HSE/SSM', desc_ro: 'Detectează lipsa EIP (căști, vestă) instant.', desc_en: 'Detects missing PPE (Helmets, Vests) instantly.' },
        { title: 'Logistics', desc_ro: 'Prezice întârzieri și sugerează reprogramare comenzilor.', desc_en: 'Predicts supply chain delays and suggests order rescheduling.' },
        { title: 'Real-Time', desc_ro: 'Procesare 30ms pe dispozitive Edge.', desc_en: '30ms latency processing on Edge Devices.' }
      ],
      codeSnippet: `if detection.class == "no_helmet":
  alert_level = "CRITICAL"
  fine_risk = "5000 RON"

elif logistics.delay > 15_mins:
  schedule.reoptimize(target="Concrete_Pouring")
  notify_manager("Delay predicted. Shift orders.")`,
      tech: ['OpenCV', 'YOLO', 'TensorFlow', 'IoT Edge'],
      image: 'assets/dashboard_ui.png',
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

  leadership = [
    {
      title_ro: 'Certificare Engleză C2',
      title_en: 'English C2 Certification',
      desc_ro: 'Cambridge Advanced – Liceu Bilingv.',
      desc_en: 'Cambridge Advanced – Bilingual High School.'
    },
    {
      title_ro: 'Fondator – Club de Dezbateri',
      title_en: 'Founder – High School Debate Club',
      desc_ro: 'Public Speaking & Argumentation.',
      desc_en: 'Public Speaking & Argumentation.'
    },
    {
      title_ro: 'Fondator – Trupă de Teatru',
      title_en: 'Founder – Theatre Troupe',
      desc_ro: 'Directing, Scriptwriting, and Stage Presence.',
      desc_en: 'Directing, Scriptwriting, and Stage Presence.'
    }
  ];
}
