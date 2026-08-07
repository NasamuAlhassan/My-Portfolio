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
  "Prince Nasamu Alhassan is an 18-year-old AI researcher and software engineer at the University of Ghana, Legon, maintaining a 4.0 CGPA. A native Kusaal speaker from Bawku in Ghana's Upper East Region, he independently designed, trained, and publicly released the first standalone Kusaal-English machine translation system — building the 34,568-pair parallel corpus that underlies it from scratch. His work has been presented at a GhanaNLP community session, where GhanaNLP co-founder Paul Azunre publicly engaged and requested access to the dataset. He builds full-stack products used by real students, contributes to the Kusaal Wikimedia Community, and taught himself programming during COVID-19 lockdowns before any formal CS instruction."

export const skills: Record<string, string[]> = {
  'Languages & Frameworks': ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js 14'],
  'ML / NLP': ['PyTorch', 'HuggingFace Transformers', 'NLLB-200', 'Whisper', 'scikit-learn', 'RAG Systems', 'BLEU Evaluation'],
  'Infrastructure & Data': ['Supabase', 'Vercel', 'Git/GitHub', 'Kaggle', 'Jupyter', 'SQL', 'REST APIs', 'pandas'],
  'Research': ['Low-resource MT', 'Parallel Corpus Curation', 'Data Augmentation (Back-translation)', 'ASR Fine-tuning', 'Multilingual NLP'],
  'Human Languages': ['Kusaal (native)', 'English (professional)'],
}

export type ProjectLink = { label: string; href: string }
export type BleuScores = { forward: number; backward: number }
export type Metric = { label: string; value: string; unit?: string }

/** Which page a project belongs to: /research or /work. */
export type ProjectKind = 'research' | 'product' | 'engineering'

export interface Project {
  id: number
  title: string
  /** One line for cards and list rows. */
  summary: string
  /** Full body for detail views. */
  description: string
  tags: string[]
  links: ProjectLink[]
  featured: boolean
  kind: ProjectKind
  year: string
  /** Headline numbers, rendered as an animated metric strip. */
  metrics?: Metric[]
  /** Live URL that can be embedded as an in-page preview. */
  preview?: string
  bleu?: BleuScores
  githubRepo?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kusaal-English Machine Translation',
    summary: 'The first machine translation system for a language of one million speakers.',
    kind: 'research',
    year: '2025 – present',
    metrics: [
      { label: 'BLEU ks→en', value: '27.57' },
      { label: 'BLEU en→ks', value: '13.72' },
      { label: 'Parallel pairs', value: '34,568' },
    ],
    description:
      "The first open-source machine translation system for Kusaal, a Mabia language spoken by roughly a million people in northern Ghana and southern Burkina Faso. Fine-tuned NLLB-200-distilled-600M with the kus_Latn token seeded from Dagbani rather than randomly, on a 34,568-pair corpus built from Bible text, the English-Kusaal Index, Lexique Pro, Wikipedia and a back-translation pipeline. Released under CC BY 4.0.",
    tags: ['NLP', 'HuggingFace', 'Low-resource MT', 'PyTorch', 'NLLB-200'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-mt' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-nllb-600M' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-english-parallel-corpus' },
    ],
    featured: true,
    bleu: { forward: 27.57, backward: 13.72 },
    githubRepo: 'kusaal-mt',
  },
  {
    id: 11,
    title: 'Multilingual ASR for Ghanaian Languages',
    summary: 'Speech recognition across 42 Ghanaian languages, with the splits rebuilt to be honest.',
    kind: 'research',
    year: '2026',
    metrics: [
      { label: 'Language subsets', value: '42' },
      { label: 'Training window', value: '48', unit: 'h on H200' },
      // TODO: add the final WER comparison once the table is ready
    ],
    description:
      "Speech recognition across 42 Ghanaian language subsets, trained in a 48-hour H200 window at the GhanaNLP TTS/ASR Hackathon. w2v-BERT 2.0 with a CTC head in bf16, building on GhanaNLP's DONDO baseline. Found narrator leakage in the Asante Twi Bible audio and rebuilt the splits to be source-disjoint, publishing a leaked-versus-honest WER comparison so the numbers mean something.",
    tags: ['ASR', 'w2v-BERT 2.0', 'CTC', 'ONNX'],
    links: [
      // TODO: replace with the Gradio Space URL before deploy
      { label: 'Demo', href: '#' },
      { label: 'Models', href: 'https://huggingface.co/ghananlpcommunity' },
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Forge — AI-Powered Academic Productivity Tool',
    summary: 'A voice-driven study scheduler, designed and shipped in 48 hours.',
    kind: 'product',
    year: '2025',
    preview: 'https://forge-study-theta.vercel.app',
    description:
      'Voice-driven study scheduler with Pomodoro focus sessions and usage analytics. Built and shipped within 48 hours at the DesignPxD Student AI Hackathon, UG Legon.',
    tags: ['React', 'Vite', 'AI', 'Vercel', 'Hackathon'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Forge_study' },
      { label: 'Live Demo', href: 'https://forge-study-theta.vercel.app' },
    ],
    featured: false,
    githubRepo: 'Forge_study',
  },
  {
    id: 3,
    title: 'CampusLink — Verified Student Connection Platform',
    summary: 'Verified student identity, real-time messaging and campus mapping for UG Legon.',
    kind: 'product',
    year: '2025 – present',
    preview: 'https://campus-link-sigma.vercel.app',
    description:
      'Full-stack platform with two-stage student identity verification, real-time messaging, and an interactive campus map. Built for UG Legon students. Also in development as CampusLink Pay for Moolre Startup Cup 2026.',
    tags: ['Next.js 14', 'Supabase', 'Gemini API', 'Full-stack'],
    links: [{ label: 'Live Demo', href: 'https://campus-link-sigma.vercel.app' }],
    featured: true,
  },
  {
    id: 4,
    title: 'Kusaal ASR — Whisper Fine-tune',
    summary: 'Eighty-one hours of audio, assembled by hand, into the first Kusaal speech recogniser.',
    kind: 'research',
    year: '2026',
    metrics: [
      { label: 'Word error rate', value: '30.41', unit: '%' },
      { label: 'Audio', value: '81.71', unit: 'hours' },
      { label: 'Verse-level clips', value: '30,820' },
    ],
    description:
      'The first ASR baseline for Kusaal, trained on a corpus assembled and cleaned from scratch: 30,820 verse-level clips, 81.71 hours at 16kHz mono, split by book rather than at random so no speaker or passage leaks between train and test. Whisper-small with LoRA on the attention projections — 30.41% WER on held-out books.',
    tags: ['ASR', 'Whisper', 'LoRA', 'Low-resource'],
    links: [
      { label: 'Dataset', href: 'https://kaggle.com/datasets/alhassanprince/kusaal-asr-dataset' },
      { label: 'HuggingFace', href: 'https://huggingface.co/PrinceAlhassanNasamu' },
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'FieldMind — RAG Document Intelligence',
    summary: 'Retrieval-augmented search over enterprise document collections.',
    kind: 'product',
    year: '2025',
    description:
      'Retrieval-augmented generation tool for enterprise document search, built with Google Gemini API. Submitted to LabLab.ai hackathon.',
    tags: ['RAG', 'Gemini', 'LangChain', 'Hackathon'],
    links: [],
    featured: false,
  },
  {
    id: 6,
    title: 'ShieldNet AI',
    summary: 'Threat intelligence, mobile money and emergency SMS in one security platform.',
    kind: 'product',
    year: '2026',
    description:
      'Multi-tier cybersecurity SaaS with AI-powered threat intelligence engine, mobile money payment integration, and emergency SMS infrastructure. Built with a team for Moolre Startup Cup 2026.',
    tags: ['AI', 'Cybersecurity', 'SaaS', 'In Development'],
    links: [],
    featured: false,
  },
  {
    id: 7,
    title: 'HyperFlow Risk Agent',
    summary: 'Multi-agent risk analysis for live trading decisions.',
    kind: 'engineering',
    year: '2025',
    description:
      'Multi-agent trade risk analysis system. Contributed to a team for the AMD Developer Cloud AI Agents hackathon track on Devpost.',
    tags: ['AI Agents', 'Risk Intelligence', 'AMD'],
    links: [],
    featured: false,
  },
  {
    id: 8,
    title: 'WhatsApp & Telegram AI Agents',
    summary: 'Locally-hosted agents that summarise WhatsApp and answer on Telegram.',
    kind: 'engineering',
    year: '2025',
    description:
      'AI agent that monitors WhatsApp and delivers summarized digests via Telegram. Separate Telegram AI agent using Telethon and Ollama for locally-hosted conversational responses.',
    tags: ['Telethon', 'Ollama', 'Automation', 'Python'],
    links: [],
    featured: false,
  },
  {
    id: 9,
    title: 'DecodeLabs Climate Data Pipeline',
    summary: 'Climate time-series from five Ghanaian cities, ingested end to end.',
    kind: 'engineering',
    year: '2026',
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
    summary: 'QR attendance tracking for lecture halls.',
    kind: 'engineering',
    year: '2025',
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
      'Designed and released the first Kusaal-English MT system and ASR model, publishing both alongside a 34K-pair corpus on HuggingFace. Contributing corpora and models for low-resource Ghanaian languages with GhanaNLP, and presenting the work at their community sessions. Engineering a back-translation pipeline to scale the corpus to 100K+ pairs.',
    current: true,
  },
  {
    // TODO: switch role to 'Research Assistant' once full-time work starts next semester
    role: 'Research Member, Human-Computer Interaction Lab',
    org: 'University of Ghana, Legon' as string | null,
    period: '2026 – Present',
    description:
      'Speech and language technology for Ghanaian languages. Full-time research with Prof. Isaac Wiafe begins next semester.',
    current: true,
  },
  {
    role: 'Builder & Hackathon Team Lead',
    org: 'Claude Builders Club, University of Ghana' as string | null,
    period: '2026 – Present',
    description: 'Joined the campus chapter as a fresher and led Team Gold at the club hackathon.',
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
    role: 'Technology & Digital Systems Intern',
    org: 'EGA Mentorship International' as string | null,
    // TODO: confirm actual start and end dates — this placeholder renders on the live page
    period: '2025',
    description:
      "Ran a technical audit of the organisation's web properties and presented the findings and remediation plan to the team.",
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

export type RecognitionType = 'award' | 'talk' | 'certification'

export interface Recognition {
  title: string
  issuer: string
  date: string | null
  type: RecognitionType
}

export const certifications: Recognition[] = [
  // Awards & recognition
  {
    title: 'Claude for Open Source Program',
    issuer: 'Anthropic',
    date: '2026',
    type: 'award',
  },
  {
    title: 'Official Ambassador',
    issuer: 'International Organization of Youth',
    date: '2026 – 2027',
    type: 'award',
  },
  {
    title: 'Moonshot Awards',
    issuer: 'Submitted — Kusaal NLP + CampusLink',
    date: null,
    type: 'award',
  },

  // Talks
  {
    title:
      'Bridging the Gap: A Fine-Tuned NLLB-200 Model for Kusaal-English Machine Translation',
    issuer: 'Monthly Tech-Talk — researchers from Google attended',
    date: '2026',
    type: 'talk',
  },
  {
    title: 'Kusaal-English MT',
    issuer: 'GhanaNLP community session',
    date: '2026',
    type: 'talk',
  },

  // Certifications
  {
    title: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University (Columbia+)',
    date: 'April 2026',
    type: 'certification',
  },
  {
    title: 'TechCrush Data Science Program',
    issuer: '12-week applied data science curriculum',
    date: null,
    type: 'certification',
  },
  {
    title: 'SYNC Mentorship Program',
    issuer: 'CKODON, undergraduate track — Accepted',
    date: null,
    type: 'certification',
  },
  {
    title: 'Pan African AI & Innovation Summit 2026',
    issuer: 'Registered Attendee',
    date: 'September 2026, Accra',
    type: 'certification',
  },
]

/* ------------------------------------------------------------------ */
/*  Redesign data — navigation, positioning and figures for visuals    */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const positioning = {
  claim: 'Kusaal had no language technology. I built the first.',
  support:
    'A Mabia language of roughly one million speakers in northern Ghana and southern Burkina Faso, with no machine translation and no speech recognition until 2025. I built both, and released the corpus behind them.',
}

/** Animated counters on the home page. */
export const headlineMetrics: Metric[] = [
  { label: 'BLEU, Kusaal → English', value: '27.57' },
  { label: 'Word error rate', value: '30.41', unit: '%' },
  { label: 'Parallel pairs released', value: '34,568' },
  { label: 'Hours of audio aligned', value: '81.71' },
]

/**
 * Provenance of the 34,568-pair corpus, for the stacked-bar visual.
 * Shares are illustrative proportions of the named sources.
 * TODO: replace `share` with the true per-source pair counts when you have them.
 */
export const corpusSources = [
  { name: 'Bible text', share: 46 },
  { name: 'Back-translation', share: 24 },
  { name: 'English-Kusaal Index', share: 16 },
  { name: 'Lexique Pro', share: 9 },
  { name: 'Wikipedia', share: 5 },
]

/** Marquee band under the hero. */
export const marqueeItems = [
  'Low-resource machine translation',
  'Automatic speech recognition',
  'Parallel corpus curation',
  'Kusaal',
  'NLLB-200',
  'w2v-BERT 2.0',
  'Whisper',
  'Back-translation',
  'GhanaNLP',
  'Mabia languages',
]
