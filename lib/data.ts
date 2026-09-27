export const personalInfo = {
  name: 'Prince Nasamu Alhassan',
  shortName: 'P.N. Alhassan',
  title: 'AI Researcher · Low-Resource NLP · African Language Technologies, starting with Northern Ghana',
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
  "Prince Nasamu Alhassan is an 18-year-old AI researcher and software engineer at the University of Ghana, Legon, maintaining a 4.0 CGPA. A native Kusaal speaker from Bawku in Ghana's Upper East Region, he independently designed, trained, and publicly released an open-source Kusaal-English machine translation system — building the roughly 63,000-pair corpus that underlies it from scratch, most recently by mining 13,659 parallel sentences from Kusaal Wikipedia. His work has been presented at a GhanaNLP community session, where GhanaNLP co-founder Paul Azunre publicly engaged and requested access to the dataset. He builds full-stack products used by real students, contributes to the Kusaal Wikimedia Community, and taught himself programming during COVID-19 lockdowns before any formal CS instruction."

export const skills: Record<string, string[]> = {
  'Languages & Frameworks': ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js 14'],
  'ML / NLP': ['PyTorch', 'HuggingFace Transformers', 'NLLB-200', 'Whisper', 'w2v-BERT 2.0', 'scikit-learn', 'RAG Systems', 'BLEU Evaluation'],
  'Infrastructure & Data': ['Supabase', 'Vercel', 'FastAPI', 'Flask', 'Git/GitHub', 'Kaggle', 'Jupyter', 'SQL', 'REST APIs', 'pandas'],
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
    summary: 'Open-source machine translation for a language of roughly 400,000 speakers.',
    kind: 'research',
    year: '2025 – present',
    metrics: [
      { label: 'BLEU ks→en', value: '39.2' },
      { label: 'BLEU en→ks', value: '26.2' },
      { label: 'Corpus pairs', value: '63,100' },
    ],
    description:
      "An open-source machine translation system for Kusaal, a Mabia language spoken by roughly 400,000 people in northern Ghana and southern Burkina Faso. Fine-tuned NLLB-200-distilled-600M with the kus_Latn token seeded from Dagbani rather than randomly. The corpus — now ~63,100 pairs across seven sources — was extended in August 2026 with 13,659 sentence pairs mined from Kusaal Wikipedia, lifting encyclopedic-text BLEU to 47.73 (ks→en) and 32.26 (en→ks), a +12.8 BLEU jump in the harder direction, with no forgetting on the original test set. Ships with a frozen, public 1,000-pair benchmark so the numbers are independently verifiable.",
    tags: ['NLP', 'HuggingFace', 'Low-resource MT', 'PyTorch', 'NLLB-200'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-mt' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-nllb-600M' },
      { label: 'Live Demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-mt' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-english-parallel-corpus' },
      { label: 'Benchmark', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-wikipedia-benchmark' },
    ],
    featured: true,
    bleu: { forward: 39.2, backward: 26.2 },
    githubRepo: 'kusaal-mt',
  },
  {
    id: 11,
    title: 'Multilingual ASR for Ghanaian Languages',
    summary: 'Speech recognition across 42 Ghanaian languages, with the splits rebuilt to be honest.',
    kind: 'research',
    year: '2026',
    metrics: [
      { label: 'WER, book-disjoint', value: '30.2', unit: '%' },
      { label: 'Language ID accuracy', value: '96.8', unit: '%' },
      { label: 'Language subsets', value: '42' },
    ],
    description:
      "One speech model for 42 Ghanaian language subsets, trained in a 48-hour H200 window at the GhanaNLP TTS/ASR Hackathon. w2v-BERT 2.0 with a CTC head in bf16, building on GhanaNLP's DONDO baseline, plus a jointly trained language-ID head — speak, and it works out which of the 42 languages it heard, at 96.8% mean accuracy. Six languages contain the same scripture read by different narrators, so the splits were rebuilt to be book-disjoint; the cost of that leakage was then measured directly and published as a negative result rather than a scare number. 30.2% micro WER on a test set where no book appears in training.",
    tags: ['ASR', 'w2v-BERT 2.0', 'CTC', 'Language ID', 'ONNX'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kasa42' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kasa42-asr' },
      { label: 'GhanaNLP org', href: 'https://huggingface.co/ghananlpcommunity' },
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Forge — AI-Powered Academic Productivity Tool',
    summary: 'A voice-driven study scheduler, designed and shipped in 48 hours.',
    kind: 'product',
    year: '2026',
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
    year: '2026 – present',
    preview: 'https://campus-link-sigma.vercel.app',
    description:
      'Full-stack platform with two-stage student identity verification, real-time messaging, and an interactive campus map. Built for UG Legon students. Also in development as CampusLink Pay for Moolre Startup Cup 2026.',
    tags: ['Next.js 14', 'Supabase', 'Gemini API', 'Full-stack'],
    links: [{ label: 'Live Demo', href: 'https://campus-link-sigma.vercel.app' }],
    featured: true,
  },
  {
    id: 12,
    title: 'Mabia AI — Maternal Health Voice Platform',
    summary: 'Voice calls in her own language, over plain GSM, so silence is never mistaken for safety.',
    kind: 'product',
    year: '2026',
    preview: 'https://mabia-ai.vercel.app',
    description:
      "An offline-first voice platform for CHPS maternal health work in Northern Ghana, built for the UNICEF StartUp Lab AI for Nurturing Care Hackathon 2026. It calls pregnant women and caregivers in their own language over plain GSM — triaging danger signs, measuring dietary diversity, and dispatching community transport. The transport map is drawn on time-from-care rather than coordinates, because no village driver in the system has coordinates; the screen that matters shows the community with women enrolled and no vehicle that can carry them.",
    tags: ['Voice', 'FastAPI', 'Health', 'Offline-first', 'Hackathon'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Mabia-AI' },
      { label: 'Live Demo', href: 'https://mabia-ai.vercel.app' },
    ],
    featured: true,
    githubRepo: 'Mabia-AI',
  },
  {
    id: 4,
    title: 'Kusaal ASR — Whisper Fine-tune',
    summary: 'Eighty-one hours of audio, assembled by hand, into a Kusaal speech recogniser.',
    kind: 'research',
    year: '2026',
    metrics: [
      { label: 'Word error rate', value: '30.41', unit: '%' },
      { label: 'Audio', value: '81.71', unit: 'hours' },
      { label: 'Verse-level clips', value: '30,820' },
    ],
    description:
      'An ASR baseline for Kusaal, trained on a corpus assembled and cleaned from scratch: 30,820 verse-level clips, 81.71 hours at 16kHz mono, split by book rather than at random so no speaker or passage leaks between train and test. Whisper-small with LoRA on the attention projections — 30.41% WER on held-out books.',
    tags: ['ASR', 'Whisper', 'LoRA', 'Low-resource'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-asr' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-whisper-small-lora' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-asr-dataset' },
      { label: 'Live Demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-asr' },
    ],
    featured: false,
  },
  {
    id: 13,
    title: 'Ghana AI-NCD Navigator',
    summary: 'Five connected services for national NCD care, wired into a real DHIS2 instance.',
    kind: 'engineering',
    year: '2026',
    description:
      'A phased build-out of a national non-communicable disease care system for Ghana: an AI gateway with model cards and an audit trail, a FHIR facade over a live DHIS2 instance, a clinician-facing navigator, an offline-first CHPS screening app, and a national dashboard portal — all five services complete, with real data flowing end to end. A sixth phase adds a patient self-service portal (Next.js + Postgres on Vercel) whose blood-pressure readings sync into the shared DHIS2 Hypertension Registry.',
    tags: ['Flask', 'DHIS2', 'FHIR', 'Health Systems', 'Next.js 14'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/NCD' },
      { label: 'Patient Portal', href: 'https://github.com/NasamuAlhassan/NCD_v1' },
    ],
    featured: false,
    githubRepo: 'NCD',
  },
  {
    id: 14,
    title: 'Zigi Voice — Local-Language Telco Assistant',
    summary: 'Say what you need in Twi, Kusaal or English; it finds the product and stops at the PIN.',
    kind: 'engineering',
    year: '2026',
    description:
      'A voice-first assistant prototype for a MyMTN-style app. Customers who cannot read the menu, or don\'t know a product is called "Midnight Bundle", just say what they need — in Twi, Kusaal or English. A deterministic dialogue state machine fills the slots, reads every transaction back before money moves, and hands off at the PIN, which it never sees. An LLM is layered on top but is not load-bearing: pull every API key out and the core flows still work. 82 tests, CI on every push.',
    tags: ['Voice UI', 'Twi', 'Kusaal', 'React', 'Dialogue Systems'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/MTN' }],
    featured: false,
    githubRepo: 'MTN',
  },
  {
    id: 15,
    title: 'Editorial Board Hub',
    summary: 'A school editorial board, run end to end: public site, members’ portal, archive, SMS.',
    kind: 'product',
    year: '2026',
    description:
      'A single system for running a school Editorial Board: a public website with a searchable publications archive and in-browser PDF reader, a members’ portal with ranked roles and read receipts, a permanent document archive with an append-only activity log, an events calendar that turns RSVPs into attendance records, and urgent SMS with per-recipient delivery logs and cost estimates before sending.',
    tags: ['Next.js 14', 'Postgres', 'Full-stack', 'SMS'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/EIC-Platform' }],
    featured: false,
    githubRepo: 'EIC-Platform',
  },
  {
    id: 5,
    title: 'FieldMind — RAG Document Intelligence',
    summary: 'Retrieval-augmented search over enterprise document collections.',
    kind: 'product',
    year: '2026',
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
    year: '2026',
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
    year: '2026',
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
    year: '2026',
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
    period: '2025 – Present',
    description:
      'Designed and released open-source Kusaal-English MT and ASR models, publishing both alongside their corpora on HuggingFace. Scaled the corpus from 34K to roughly 63K pairs with a Wikipedia mining pipeline and back-translation, and froze a public 1,000-pair benchmark so results are independently verifiable. Contributing corpora and models for low-resource Ghanaian languages with GhanaNLP, and presenting the work at their community sessions.',
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
    role: 'Technology & Digital Systems Intern',
    org: 'EGA Mentorship International' as string | null,
    period: '2026 – Present',
    description:
      "Ran a technical audit of the organisation's web properties and presented the findings and remediation plan to the team.",
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
    period: '2026',
    description:
      'Web-scraped 1,000+ records, built regression/classification models, applied ARIMA forecasting, developed NLP text classification systems.',
    current: false,
  },
  {
    role: 'UNICEF StartUp Lab — AI for Nurturing Care Hackathon',
    org: null as string | null,
    period: '2026',
    description:
      'Built Mabia AI: an offline-first voice platform for CHPS maternal health outreach in Northern Ghana — danger-sign triage, dietary-diversity calls and community transport dispatch over plain GSM.',
    current: false,
  },
  {
    role: 'GhanaNLP TTS/ASR Hackathon',
    org: null as string | null,
    period: '2026',
    description:
      'Trained KASA-42, one speech model for 42 Ghanaian language subsets with automatic language ID, in a 48-hour H200 window — 30.2% WER on a book-disjoint test set.',
    current: false,
  },
  {
    role: 'DesignPxD Student AI Hackathon',
    org: null as string | null,
    period: '2026',
    description: 'Built and shipped FieldMind (RAG document intelligence) and Forge (AI study scheduler) in separate hackathon sprints.',
    current: false,
  },
  {
    role: 'AMD Developer Cloud Hackathon',
    org: null as string | null,
    period: '2026',
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
  claim: 'Building language technology for African languages, starting with Northern Ghana.',
  support:
    'Machine translation and speech recognition for Kusaal, a Mabia language of roughly 400,000 speakers in northern Ghana and southern Burkina Faso, and across 42 Ghanaian language subsets. Open models, an open corpus, a public benchmark, and results measured on held-out data.',
}

/** Animated counters on the home page. */
export const headlineMetrics: Metric[] = [
  { label: 'BLEU, Kusaal → English', value: '39.2' },
  { label: 'Languages, one ASR model', value: '42' },
  { label: 'Corpus pairs built', value: '63,100' },
  { label: 'Hours of audio aligned', value: '81.71' },
]

/**
 * Provenance of the ~63,100-pair corpus, for the stacked-bar visual.
 * Shares are percentages computed from the per-source pair counts on the
 * kusaal-nllb-600M model card (Aug 2026): Bible 29,257 · Wikipedia harvest
 * 13,659 · back-translation ~9,300 · Index 3,504 · GhanaNLP 3,489 ·
 * Lexique Pro 2,775 · Wikipedia original subset 1,136.
 */
export const corpusSources = [
  { name: 'Bible text', share: 46.4 },
  { name: 'Wikipedia harvest', share: 21.6 },
  { name: 'Back-translation', share: 14.7 },
  { name: 'English-Kusaal Index', share: 5.6 },
  { name: 'GhanaNLP', share: 5.5 },
  { name: 'Lexique Pro', share: 4.4 },
  { name: 'Wikipedia (original)', share: 1.8 },
]

