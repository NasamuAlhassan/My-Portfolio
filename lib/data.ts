export const personalInfo = {
  name: 'Prince Nasamu Alhassan',
  shortName: 'P.N. Alhassan',
  title: 'AI Researcher · Low-Resource NLP · African Language Technologies',
  tagline: "Building language technology for Africa's most ignored languages.",
  email: 'pnalhassan@gmail.com',
  github: 'https://github.com/NasamuAlhassan',
  huggingface: 'https://huggingface.co/PrinceAlhassanNasamu',
  linkedin: 'https://linkedin.com/in/alhassan-prince',
  university: 'University of Ghana, Legon',
  degree: 'BSc Mathematical Sciences with Computer Science',
  graduationYear: '2029',
  gpa: '4.0',
  affiliations: ['GhanaNLP', 'Kusaal Wikimedia Community', 'COMPSSA'],
}

export const about =
  "Prince Nasamu Alhassan is an 18-year-old AI researcher and software engineer at the University of Ghana, Legon, maintaining a 4.0 CGPA. A native Kusaal speaker from Bawku in Ghana's Upper East Region, he independently designed, trained, and publicly released the first standalone Kusaal-English machine translation system — building the 32,000-pair parallel corpus that underlies it from scratch. His work has been presented at a GhanaNLP community session, where GhanaNLP co-founder Paul Azunre publicly engaged and requested access to the dataset. He builds full-stack products used by real students, contributes to the Kusaal Wikimedia Community, and taught himself programming during COVID-19 lockdowns before any formal CS instruction."

export const skills: Record<string, string[]> = {
  'Languages & Frameworks': ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js 14'],
  'ML / NLP': ['PyTorch', 'HuggingFace Transformers', 'NLLB-200', 'Whisper', 'scikit-learn', 'RAG Systems', 'BLEU Evaluation'],
  'Infrastructure & Data': ['Supabase', 'Vercel', 'Git/GitHub', 'Kaggle', 'Jupyter', 'SQL', 'REST APIs', 'pandas'],
  'Research': ['Low-resource MT', 'Parallel Corpus Curation', 'Data Augmentation (Back-translation)', 'ASR Fine-tuning', 'Multilingual NLP'],
  'Human Languages': ['Kusaal (native)', 'English (professional)'],
}

export type ProjectLink = { label: string; href: string }
export type BleuScores = { forward: number; backward: number }

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  featured: boolean
  bleu?: BleuScores
  githubRepo?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kusaal-English Machine Translation',
    description:
      "The first open-source standalone Kusaal-English machine translation system. Fine-tuned Meta's NLLB-200-distilled-600M on a 32,589-pair parallel corpus — the largest structured Kusaal linguistic dataset in existence.",
    tags: ['NLP', 'HuggingFace', 'Low-resource MT', 'PyTorch', 'NLLB-200'],
    links: [
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-nllb-600M' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-english-parallel-corpus' },
    ],
    featured: true,
    bleu: { forward: 23.31, backward: 13.03 },
  },
  {
    id: 2,
    title: 'Forge — AI-Powered Academic Productivity Tool',
    description:
      'Voice-driven study scheduler with Pomodoro focus sessions and usage analytics. Built and shipped within 48 hours at the DesignPxD Student AI Hackathon, UG Legon.',
    tags: ['React', 'Vite', 'AI', 'Vercel', 'Hackathon'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Forge_study' },
      { label: 'Live Demo', href: 'https://forge-study-theta.vercel.app' },
    ],
    featured: true,
    githubRepo: 'Forge_study',
  },
  {
    id: 3,
    title: 'CampusLink — Verified Student Connection Platform',
    description:
      'Full-stack platform with two-stage student identity verification, real-time messaging, and an interactive campus map. Built for UG Legon students. Also in development as CampusLink Pay for Moolre Startup Cup 2026.',
    tags: ['Next.js 14', 'Supabase', 'Gemini API', 'Full-stack'],
    links: [{ label: 'Live Demo', href: 'https://campus-link-sigma.vercel.app' }],
    featured: true,
  },
  {
    id: 4,
    title: 'Kusaal ASR — Whisper Fine-tune',
    description:
      'Fine-tuned OpenAI Whisper on approximately 81 hours of Kusaal Bible audio, producing the first publicly available Kusaal automatic speech recognition model.',
    tags: ['ASR', 'Whisper', 'HuggingFace', 'Low-resource'],
    links: [{ label: 'HuggingFace', href: 'https://huggingface.co/PrinceAlhassanNasamu' }],
    featured: false,
  },
  {
    id: 5,
    title: 'FieldMind — RAG Document Intelligence',
    description:
      'Retrieval-augmented generation tool for enterprise document search, built with Google Gemini API. Submitted to LabLab.ai hackathon.',
    tags: ['RAG', 'Gemini', 'LangChain', 'Hackathon'],
    links: [],
    featured: false,
  },
  {
    id: 6,
    title: 'ShieldNet AI',
    description:
      'Multi-tier cybersecurity SaaS with AI-powered threat intelligence engine, mobile money payment integration, and emergency SMS infrastructure. Built with a team for Moolre Startup Cup 2026.',
    tags: ['AI', 'Cybersecurity', 'SaaS', 'In Development'],
    links: [],
    featured: false,
  },
  {
    id: 7,
    title: 'HyperFlow Risk Agent',
    description:
      'Multi-agent trade risk analysis system. Contributed to a team for the AMD Developer Cloud AI Agents hackathon track on Devpost.',
    tags: ['AI Agents', 'Risk Intelligence', 'AMD'],
    links: [],
    featured: false,
  },
  {
    id: 8,
    title: 'WhatsApp & Telegram AI Agents',
    description:
      'AI agent that monitors WhatsApp and delivers summarized digests via Telegram. Separate Telegram AI agent using Telethon and Ollama for locally-hosted conversational responses.',
    tags: ['Telethon', 'Ollama', 'Automation', 'Python'],
    links: [],
    featured: false,
  },
  {
    id: 9,
    title: 'DecodeLabs Climate Data Pipeline',
    description:
      'End-to-end climate data pipeline ingesting meteorological time-series from the Open-Meteo API across five Ghanaian cities. Built during internship at Decodelabs.',
    tags: ['Data Engineering', 'Python', 'Open-Meteo', 'Internship'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/DecodeLabs-Internship' }],
    featured: false,
    githubRepo: 'DecodeLabs-Internship',
  },
  {
    id: 10,
    title: 'VerifiQ',
    description: 'QR-based student attendance system.',
    tags: ['QR', 'Attendance', 'Web'],
    links: [],
    featured: false,
  },
]

export const experience = [
  {
    role: 'Independent NLP Researcher',
    org: null as string | null,
    period: '2024 – Present',
    description:
      'Designed and released the first Kusaal-English MT system and ASR model. Presented at GhanaNLP. Published model and 32K-pair corpus on HuggingFace. Engineering back-translation pipeline to scale corpus to 100K+ pairs.',
    current: true,
  },
  {
    role: 'Data Science Intern',
    org: 'Decodelabs' as string | null,
    period: 'April – May 2026',
    description: 'Built an end-to-end climate data pipeline across five Ghanaian cities using the Open-Meteo API.',
    current: false,
  },
  {
    role: 'Data Science Intern',
    org: 'Codveda Technologies' as string | null,
    period: '2025',
    description:
      'Web-scraped 1,000+ records, built regression/classification models, applied ARIMA forecasting, developed NLP text classification systems.',
    current: false,
  },
  {
    role: 'DesignPxD Student AI Hackathon',
    org: null as string | null,
    period: '2025',
    description: 'Built and shipped FieldMind (RAG document intelligence) and Forge (AI study scheduler) in separate hackathon sprints.',
    current: false,
  },
  {
    role: 'AMD Developer Cloud Hackathon',
    org: null as string | null,
    period: '2025',
    description: 'Contributed to HyperFlow Risk Agent — multi-agent trade risk system, AI Agents track on Devpost.',
    current: false,
  },
]

export const education = [
  {
    institution: 'University of Ghana, Legon',
    degree: 'BSc Mathematical Sciences with Computer Science',
    period: '2025 – 2029 (Expected)',
    grade: 'CGPA: 4.0 / 4.0',
    details:
      'Relevant coursework: Calculus, Linear Algebra, Probability & Statistics, Discrete Mathematics, Algorithms, Data Structures, Numerical Analysis',
    highlights: [] as string[],
  },
  {
    institution: 'Osei Tutu Senior High School, Akropong',
    degree: 'WASSCE',
    period: 'Completed 2025',
    grade: '6 A1s, 2 B3s',
    details: null as string | null,
    highlights: [
      'Ranked 1st in class, 5th school-wide',
      'NSMQ national semi-finalist; team leader and primary organiser for school\'s national campaign',
      'Best Student award; top performance in Mathematics, Physics, Chemistry, and Biology',
    ],
  },
]

export const certifications = [
  {
    title: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University (Columbia+)',
    date: 'April 2026',
  },
  {
    title: 'TechCrush Data Science Program',
    issuer: '12-week applied data science curriculum',
    date: null as string | null,
  },
  {
    title: 'Google Research Africa Monthly Student Tech-Talk',
    issuer: 'Speaker Application — Kusaal-English MT research',
    date: null as string | null,
  },
  {
    title: 'SYNC Mentorship Program',
    issuer: 'CKODON, undergraduate track — Accepted',
    date: null as string | null,
  },
  {
    title: 'Pan African AI & Innovation Summit 2026',
    issuer: 'Registered Attendee',
    date: 'September 2026, Accra',
  },
  {
    title: 'Moonshot Awards',
    issuer: 'Submitted — Kusaal NLP + CampusLink',
    date: null as string | null,
  },
]
