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

  rolePills = ['Quality Engineer', 'Biostatistician', 'Full-Stack Developer', 'GXP Compliance'];

  intro_ro = 'Biostatistică, Rigoare GXP și Inteligență Artificială. Transform datele în scuturi financiare și decizii clinice.';
  intro_en = 'Biostatistics, GXP Rigor and AI. Transforming data into financial shields and clinical decisions.';

  skills = [
    { category: 'Biostatistics & Data', items: ['R Programming', 'SAS', 'Jamovi', 'Python (Pandas/NumPy)', 'SQL'] },
    { category: 'GXP & Compliance', items: ['GLP / GCP', 'ALCOA+ Principles', 'SOP Management', 'CAPA Investigations', 'ISO 9001'] },
    { category: 'Laboratory Tech', items: ['PCR & HPLC', 'Gas Chromatography', 'Microscopy', 'Cell Cultures', 'Spectrophotometry'] },
    { category: 'Software Dev', items: ['Angular', 'TailwindCSS', 'Docker', 'Git', 'LLM Integration (RAG)'] }
  ];

  experience = [
    {
      role: 'Quality Engineer (GXP)',
      company: 'Terapia SA',
      period: '04/2025 - 10/2025',
      desc_ro: 'Asigurarea conformității cu standardele GLP/GCP într-un mediu farmaceutic. Gestionare Proceduri Operaționale Standard (SOP), investigații CAPA și aplicarea principiilor ALCOA+ pentru Integritatea Datelor, pregătind compania pentru audituri.',
      desc_en: 'Ensured compliance with GLP/GCP standards in a pharmaceutical environment. Managed Standard Operating Procedures (SOPs), conducted CAPA investigations, and enforced ALCOA+ Data Integrity principles for audit readiness.'
    },
    {
      role: 'Sales & Business Development',
      company: 'Freelance',
      period: '2023 - 2025',
      desc_ro: 'Prospecție de volum mare (Cold Calling) și management CRM. Dezvoltare strategii de negociere pentru închiderea eficientă a tranzacțiilor B2B.',
      desc_en: 'High-volume prospecting (Cold Calling) and CRM management. Developed negotiation strategies to close B2B deals efficiently.'
    },
    {
      role: 'Customer Exp. Manager',
      company: 'Tărâmul Elfilor',
      period: '2015 - 2020',
      desc_ro: 'Gestionarea operațiunilor zilnice și coordonarea echipei pentru un centru educațional de divertisment cu trafic ridicat. Orchestrare scenarii pedagogice immersive bazate pe psihologia copilului, asigurând satisfacție ridicată a clienților (CSAT) și de-escaladare eficientă a conflictelor.',
      desc_en: 'Managed daily operations and team coordination for a high-traffic educational entertainment center. Orchestrated immersive pedagogical scenarios based on child psychology, ensuring high customer satisfaction (CSAT) and effective conflict de-escalation with clients.'
    }
  ];

  projects = [
    {
      title: 'Aiudit Solutions',
      subtitle: 'Guardian Aingel',
      badge: 'Privacy-First AI',
      image: 'assets/dashboard_ui.png',
      logo: 'assets/LogoGuardianAingel.png',
      description_ro: 'Motor Cognitiv de Inspecție Privacy-First. Utilizând Federated Learning și LLM-uri locale (DeepSeek), sistemul identifică erori de documentație și riscuri regulate, protejând companiile farmaceutice de pierderi estimate la 8M Euro/zi în timpul opririi pentru audit.',
      description_en: 'Developing a Privacy-First Cognitive Inspection Engine. By utilizing Federated Learning and Local LLMs (DeepSeek), the system identifies documentation errors and regulatory risks, protecting pharmaceutical companies from financial losses estimated at 8M Euro/day during audit shutdowns.',
      full_desc_ro: 'Aiudit Solutions dezvoltă un Motor Cognitiv de Inspecție Privacy-First. Prin Federated Learning și LLM-uri locale (DeepSeek), sistemul identifică erori de documentație și riscuri regulate în timp real, protejând companiile farmaceutice de pierderi estimate la 8M Euro/zi în timpul opririi pentru audit. Arhitectura asigură conformitate cu GXP fără expunerea datelor sensibile.',
      full_desc_en: 'Aiudit Solutions develops a Privacy-First Cognitive Inspection Engine. By utilizing Federated Learning and Local LLMs (DeepSeek), the system identifies documentation errors and regulatory risks in real-time, protecting pharmaceutical companies from financial losses estimated at 8M Euro/day during audit shutdowns. The architecture ensures GXP compliance without exposing sensitive data.',
      code_files: [
        { name: 'inspection_engine.py', code: 'def detect_documentation_errors(doc):\n  llm_result = local_llm.analyze(doc)\n  return risk_assessment(llm_result)' }
      ],
      tech: ['Python', 'Angular', 'Docker', 'DeepSeek', 'RAG']
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
    { title: 'Genetic potential of groundwater bacteria', type: 'Thesis' }
  ];

  ecosystemText_ro = 'Laboratorul meu acasă. Conduc o colecție de peste 300 de Aroizi rari, experimentând cu micro-mediile și culturile de țesut vegetal. Este locul unde curiozitatea biologică se întâlnește cu optimizarea sistemică.';
  ecosystemText_en = 'My home laboratory. I manage a collection of over 300 rare Aroids, experimenting with micro-environments and plant tissue culture. It is where biological curiosity meets systematic optimization.';
}
