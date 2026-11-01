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
  "Prince Nasamu Alhassan is an AI researcher and software engineer at the University of Ghana, Legon, where he studies Mathematical Sciences with Computer Science on a 4.0 CGPA. He leads research on Northern Ghanaian languages at the university's HCI Lab, and works as an independent researcher affiliated with GhanaNLP across low-resource NLP, speech modelling, data science, full-stack development and AI agent design. A native Kusaal speaker from Bawku in Ghana's Upper East Region, he started with his own language: he designed, trained and publicly released Kusaal translation and speech recognition models, a ~48,000-pair parallel corpus and an 81-hour speech dataset, with the full construction pipeline open-sourced. He also ships voice-first products for people mainstream tools leave out, including blind users, mothers and newborns in rural communities, and students. His research interests are multilingual representation learning, low-resource language modelling, speech technology for African languages, and equitable AI for African language communities. He taught himself programming and graphic design during the COVID-19 lockdowns, before any formal computer science instruction."

export const skills: Record<string, string[]> = {
  'Languages & Frameworks': ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js 14', 'React Native / Expo', 'Android', 'Flutter', 'FastAPI', 'Flask', 'Node.js', 'SQL'],
  'ML, NLP & Speech': ['PyTorch', 'Hugging Face Transformers', 'PEFT / LoRA', 'NLLB-200', 'Whisper', 'w2v-BERT 2.0', 'CTC with KenLM decoding', 'Meta MMS', 'sentence-transformers', 'scikit-learn', 'pandas', 'RAG Systems', 'Agentic AI', 'ONNX', 'Gradio', 'BLEU / chrF++ Evaluation'],
  'Infrastructure & Data': ['Supabase', 'PostgreSQL', 'Vercel', 'Docker', 'Git/GitHub', 'Kaggle', 'Google Colab', 'Lightning AI', 'Jupyter', "Africa's Talking", 'Khaya API', 'REST APIs'],
  'Research': ['Low-resource MT', 'Parallel Corpus Curation', 'Comparable-corpus Mining', 'ASR Fine-tuning', 'Text-to-Speech', 'Multilingual NLP'],
  'Human Languages': ['Kusaal (native)', 'English (native)'],
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
    year: '2024 – present',
    metrics: [
      { label: 'BLEU ks→en, in-domain', value: '27.57' },
      { label: 'BLEU en→ks, in-domain', value: '13.72' },
      { label: 'Corpus pairs', value: '~48,000' },
    ],
    description:
      "An open-source machine translation system for Kusaal, a Mabia language spoken by roughly 400,000 people in northern Ghana and southern Burkina Faso. Fine-tuned NLLB-200-distilled-600M with the kus_Latn token seeded from Dagbani rather than randomly. Fine-tuned in both directions, it reaches 27.57 BLEU (Kusaal → English) and 13.72 BLEU (English → Kusaal) on the in-domain held-out test set. The corpus has grown from 32,589 to roughly 48,000 sentence pairs across scripture, lexicographic and encyclopedic registers, most recently with 13,659 pairs mined from Kusaal Wikipedia in August 2026. That lifted encyclopedic-text BLEU to 47.73 (ks→en) and 32.26 (en→ks), a +12.8 BLEU jump in the harder direction, with in-domain performance held steady. The corpus is published under CC BY 4.0 with its full construction pipeline. Ships with a frozen, public 1,000-pair benchmark so the numbers are independently verifiable.",
    tags: ['NLP', 'HuggingFace', 'Low-resource MT', 'PyTorch', 'NLLB-200'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-mt' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-nllb-600M' },
      { label: 'Live Demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-mt' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-english-parallel-corpus' },
      { label: 'Benchmark', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-wikipedia-benchmark' },
    ],
    featured: true,
    bleu: { forward: 27.57, backward: 13.72 },
    githubRepo: 'kusaal-mt',
  },
  {
    id: 16,
    title: 'Kusaal Wikipedia Parallel Corpus & MT v5',
    summary: 'Moving Kusaal-English translation beyond Bible text by mining Wikipedia for new parallel data.',
    kind: 'research',
    year: '2026',
    metrics: [
      { label: 'BLEU ks→en, Wikipedia Benchmark', value: '47.73' },
      { label: 'BLEU en→ks, Wikipedia Benchmark', value: '32.26' },
      { label: 'Verified pairs mined', value: '13,659' },
    ],
    description:
      'The original Kusaal-English corpus was mostly scripture, which limited how well models handled everyday and factual language. A three-stage pipeline mines Kusaal Wikipedia: anchor-based alignment on shared numbers and proper names, an MT-bridged verification step scored with sentence embeddings and chrF++, and manual review of 503 borderline pairs. From 1,170 comparable article pairs it produced 13,659 verified sentence pairs (8,268 gold, 5,391 silver). Retraining NLLB-200 on the combined 86,683-example set, with full replay of the earlier data, raised scores on the frozen 1,000-sentence Kusaal Wikipedia Benchmark from 42.17 to 47.73 BLEU (Kusaal → English) and from 19.43 to 32.26 BLEU (English → Kusaal), while in-domain performance held steady. Corpus, code and the full pipeline are open source; three papers — dataset, MT and methodology — are in preparation with Dr. Anthony Agoswin Musah.',
    tags: ['Low-resource NLP', 'Machine Translation', 'NLLB-200', 'Corpus Construction', 'Open Source'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-mt' },
      { label: 'Benchmark', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-wikipedia-benchmark' },
      { label: 'Hugging Face', href: 'https://huggingface.co/PrinceAlhassanNasamu' },
    ],
    featured: true,
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
      "One speech model for 42 Ghanaian language subsets, prioritising northern Ghanaian languages, trained in a 48-hour H200 window at the GhanaNLP TTS/ASR Hackathon. w2v-BERT 2.0 with a CTC head in bf16, building on GhanaNLP's DONDO baseline, plus a jointly trained language-ID head — speak, and it works out which of the 42 languages it heard, at 96.8% mean accuracy. Six languages contain the same scripture read by different narrators, so the splits were rebuilt to be book-disjoint; the cost of that leakage was then measured directly and published as a negative result rather than a scare number. 30.2% micro WER on a test set where no book appears in training. A Kusaal text-to-speech model was trained in the same 48-hour window, delivered with ONNX exports and a Gradio demo, and contributed to the ghananlpcommunity Hugging Face organisation.",
    tags: ['ASR', 'TTS', 'w2v-BERT 2.0', 'CTC', 'Language ID', 'ONNX'],
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
    year: 'May 2026',
    preview: 'https://forge-study-theta.vercel.app',
    description:
      'Voice-driven study scheduler with Pomodoro focus sessions, usage analytics, PDF and ICS export, and a speech-to-speech assistant panel powered by Gemini 2.5 Flash. Built and shipped within 48 hours at the DesignPxD Student AI Hackathon, UG Legon.',
    tags: ['React', 'Vite', 'Supabase', 'Gemini 2.5 Flash', 'Vercel', 'Hackathon'],
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
    summary: 'Verified student identity, real-time messaging and campus mapping for African university students.',
    kind: 'product',
    year: '2025 – present',
    preview: 'https://campus-link-sigma.vercel.app',
    description:
      'Founded and built a full-stack platform for African university students, starting at UG Legon, with two-stage student identity verification, real-time messaging, and an interactive campus map. Also in development as CampusLink Pay for Moolre Startup Cup 2026.',
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
      "A voice-first maternal and child health IVR for CHPS work in Northern Ghana, built for UNICEF StartUp Lab's AI for Nurturing Care Hackathon 2026 with Joshua Akum Winyelsum and Dawuda Mardia, as engineering and AI lead. It calls pregnant women and caregivers in their own language over IVR and USSD on plain GSM: proactive outreach on the WHO eight-contact schedule, danger-sign triage, keypad dietary-diversity screening filtered by season and affordability, and community transport dispatch with referral tracking until care is received. Triage comes from a deterministic, auditable rule engine that returns readable reason codes. The voice layer speaks Dagbani and Kusaal through the Khaya API and Meta MMS, with recorded and spoken-English fallbacks. Under the hood: a React PWA with IndexedDB offline capture, a FastAPI backend over an append-only event log with client-generated idempotency keys, PostgreSQL, Africa's Talking and Docker, backed by 236 automated tests. The transport map is drawn on time-from-care rather than coordinates, because no village driver in the system has coordinates; the screen that matters shows the community with women enrolled and no vehicle that can carry them.",
    tags: ['Voice', 'IVR', 'USSD', 'FastAPI', 'PostgreSQL', 'Health', 'Offline-first', 'Hackathon'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Mabia-AI' },
      { label: 'Live Demo', href: 'https://mabia-ai.vercel.app' },
    ],
    featured: true,
    githubRepo: 'Mabia-AI',
  },
  {
    id: 17,
    title: 'Tɛkyerɛma AI',
    summary: 'A voice-first, agentic Android assistant that helps blind and low-vision users operate their phones in Ghanaian English and Asante Twi.',
    kind: 'product',
    year: '2026',
    description:
      'An accessibility assistant built for the Tɛkyerɛma Pa Hackathon, organised by MTN Ghana and the University of Ghana HCI Lab, where it was a top five finalist. Users handle mobile money (including transfers to other networks), messaging and calling entirely by voice: they speak naturally and the assistant carries out the task, reading results back by voice so no screen interaction is needed. It grew out of the Zigi Voice prototype and reuses its finite-state agentic design, with Khaya API Twi speech recognition and synthesis running against MTN MoMo transaction flows. The language scope is deliberately narrowed to Ghanaian English and Asante Twi so the experience is solid rather than thin across many languages, and it is tuned and tested on a Samsung Galaxy A20e (Android 11, about 2.8 GB of RAM), because that is the kind of phone many target users actually own.',
    tags: ['Agentic AI', 'Accessibility', 'Mobile Money', 'Android', 'Khaya API', 'Twi', 'Top 5 Finalist'],
    links: [],
    featured: true,
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
      'Open speech recognition for Kusaal, trained on a corpus assembled and cleaned from scratch: 30,820 verse-level clips, 81.71 hours at 16kHz mono, split by book rather than at random so no speaker or passage leaks between train and test. Whisper-small with LoRA on the attention projections reaches 30.41% WER on validation, on entirely held-out books. The model, the full dataset (with a working viewer on Hugging Face) and a live demo Space are all public.',
    tags: ['ASR', 'Whisper', 'LoRA', 'Speech', 'Hugging Face'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-asr' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-whisper-small-lora' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-asr-dataset' },
      { label: 'Live Demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-asr' },
    ],
    featured: true,
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
    id: 18,
    title: 'Wake the Word',
    summary: 'An alarm that won’t stop until you read a Scripture verse aloud and answer a reflection question.',
    kind: 'product',
    year: '2026',
    description:
      'An Android alarm app for the Gloo Hackathon (YouVersion Platform) that keeps ringing until you read a Scripture verse aloud, verified by speech recognition, and then answer an AI-generated reflection question. Built solo in Flutter as a native APK so the alarm rings through the lock screen, using the YouVersion Platform API for verses and Gloo AI Studio for reflection prompts.',
    tags: ['Flutter', 'Android', 'Speech Recognition', 'YouVersion API', 'Gloo AI', 'In Development'],
    links: [],
    featured: false,
  },
  {
    id: 19,
    title: 'GreenReS — Climate Risk Education and Action Platform',
    summary: 'District-level climate risk guidance for rural users over SMS and USSD.',
    kind: 'product',
    year: '2026',
    preview: 'https://green-res.vercel.app',
    description:
      'Built for the GreenRes Hackathon 2026 (Africa Climate Collaborative and the Mastercard Foundation) as technical lead of a team of three. A React PWA and FastAPI backend deliver district-level climate risk guidance to rural users over SMS and USSD, with a three-tier proof model for verifying real-world climate action. 24 endpoints, 76 automated tests.',
    tags: ['React', 'PWA', 'FastAPI', 'SMS', 'USSD', 'Climate', 'Hackathon'],
    links: [{ label: 'Live Demo', href: 'https://green-res.vercel.app' }],
    featured: false,
  },
  {
    id: 20,
    title: 'RBAS — Real-Time Biotech Regulatory Application System',
    summary: "An online biosafety permit application system for Ghana's National Biosafety Authority.",
    kind: 'engineering',
    year: '2026',
    description:
      "A client project for Ghana's National Biosafety Authority (NBA), built as sole developer: an online biosafety permit application system proposed to the Authority and delivered end to end as a working system. The NBA has requested a demonstration.",
    tags: ['Full-stack', 'Regulatory Tech', 'Client Project', 'In Development'],
    links: [],
    featured: false,
  },
  {
    id: 21,
    title: 'Kasa — Voice-First English and Twi Language Coaching',
    summary: 'A voice-first coaching app for Twi speakers who need working English.',
    kind: 'product',
    year: '2026',
    description:
      'A voice-first language coaching app for Twi speakers who need working English, founded and specified with a full product and technical requirements document. Built on React Native and Expo with Supabase, using Azure Pronunciation Assessment to score spoken practice.',
    tags: ['React Native', 'Expo', 'Supabase', 'Azure Speech', 'Twi', 'In Development'],
    links: [],
    featured: false,
  },
  {
    id: 22,
    title: 'Mabia Voice Line',
    summary: 'A voice line submitted to SafeTech Africa HackLab 2026.',
    kind: 'product',
    year: '2026',
    description:
      'A voice-line project submitted to SafeTech Africa HackLab 2026, run with UNFPA and the Spotlight Initiative.',
    tags: ['Voice', 'Hackathon'],
    links: [],
    featured: false,
  },
  {
    id: 23,
    title: 'Nasamu — Personal AI Workspace',
    summary: 'A personal AI workspace over a self-hosted open-weight language model.',
    kind: 'engineering',
    year: '2025 – 2026',
    description:
      'A personal AI workspace built over a self-hosted open-weight language model, running on free GPU compute.',
    tags: ['LLM', 'Self-hosted', 'Open-weight models'],
    links: [],
    featured: false,
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
      'Multi-tier cybersecurity SaaS being architected with a team: an AI-powered threat intelligence engine, mobile money payment integration, and emergency SMS infrastructure. Built with a team for Moolre Startup Cup 2026.',
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
    role: 'Lead Researcher, Northern Languages',
    org: 'HCI Lab, University of Ghana' as string | null,
    period: 'Sept 2026 – Present',
    description:
      'Leading research on speech and language technology for the languages of Northern Ghana under the supervision of Prof. Isaac Wiafe.',
    highlights: [
      'Developing a research plan for a community-led wearable platform that collects consented, naturalistic everyday speech in African languages, with community-led transcription and validation, participant withdrawal and deletion rights, and community governance over data access.',
    ],
    current: true,
  },
  {
    role: 'Independent NLP Researcher',
    org: 'Affiliated with GhanaNLP' as string | null,
    period: '2024 – Present',
    description:
      'Designed and released open-source Kusaal-English MT and ASR models, publishing them alongside their corpora on Hugging Face.',
    highlights: [
      'Grew the Kusaal-English parallel corpus from 32,589 to roughly 48,000 pairs, released under CC BY 4.0 with the full construction pipeline.',
      'Fine-tuned NLLB-200-distilled-600M in both directions: 27.57 BLEU (Kusaal → English) and 13.72 BLEU (English → Kusaal) in-domain.',
      'Mined 13,659 verified pairs from Kusaal Wikipedia, lifting the frozen 1,000-sentence benchmark to 47.73 and 32.26 BLEU.',
      'Built an 81.7-hour Kusaal ASR dataset and a Whisper-small LoRA model at 30.41% WER on unseen books.',
      'Preparing three papers (dataset, machine translation, corpus-construction methodology) with Dr. Anthony Agoswin Musah, University of Education, Winneba.',
    ],
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
    description: "Built and shipped projects across EGA's digital systems.",
    highlights: [
      'Led the backend for the Dr. Kwame Nkrumah Political Youth Fun Club website: a blog platform with an admin portal built on Supabase (Postgres, auth, storage, REST API), working with a frontend team.',
      "Completed a technical audit of EGA's web properties and presented the findings in a PowerPoint deck.",
      "Mentored junior team members across EGA's digital systems projects.",
    ],
    current: true,
  },
  {
    role: 'Sole Developer, RBAS',
    org: 'Client project for the National Biosafety Authority' as string | null,
    period: '2026',
    description:
      'Building an online biosafety permit application system proposed to the NBA, delivered end to end as a working system, with a demonstration requested by the Authority.',
    current: false,
  },
  {
    role: 'Data Science Intern',
    org: 'Decodelabs' as string | null,
    period: 'April – May 2026',
    description:
      'Built an end-to-end climate data pipeline ingesting multi-city meteorological time series from the Open-Meteo API across five Ghanaian cities, producing structured datasets for downstream analytics.',
    current: false,
  },
  {
    role: 'Data Science Intern',
    org: 'Codveda Technologies' as string | null,
    period: '2025',
    description:
      'Ran a full data science pipeline: web-scraped 1,000+ records with BeautifulSoup, cleaned the data, built regression and classification models, applied ARIMA time-series forecasting, and developed NLP text classification systems.',
    current: false,
  },
  {
    role: 'MTN Ghana Tɛkyerɛma Pa Hackathon',
    org: 'Top five finalist' as string | null,
    period: '2026',
    description:
      'Built Tɛkyerɛma AI, a voice-first Android assistant that lets blind and low-vision users handle mobile money, messaging and calling in Ghanaian English and Asante Twi.',
    current: false,
  },
  {
    role: 'UNICEF StartUp Lab — AI for Nurturing Care Hackathon',
    org: 'Engineering and AI lead' as string | null,
    period: '2026',
    description:
      'Built Mabia AI: an offline-first IVR and USSD platform for CHPS maternal and newborn care in Northern Ghana — danger-sign triage, dietary-diversity screening and community transport dispatch over plain GSM.',
    current: false,
  },
  {
    role: 'GreenRes Hackathon 2026',
    org: 'Technical lead' as string | null,
    period: '2026',
    description:
      'Built GreenReS, delivering district-level climate risk guidance to rural users over SMS and USSD, with the Africa Climate Collaborative and the Mastercard Foundation.',
    current: false,
  },
  {
    role: 'GhanaNLP TTS/ASR Hackathon',
    org: null as string | null,
    period: '2026',
    description:
      'Trained KASA-42, one speech model for 42 Ghanaian language subsets with automatic language ID, in a 48-hour H200 window from AI Skills and Compute Africa (AISCA), reaching 30.2% WER on a book-disjoint test set. Also trained a Kusaal text-to-speech model with ONNX exports and a Gradio demo.',
    current: false,
  },
  {
    role: 'DesignPxD Student AI Hackathon',
    org: null as string | null,
    period: 'May 2026',
    description: 'Built and shipped Forge, a voice-driven AI study scheduler, within 48 hours.',
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
      'Highest Elective Mathematics score in cohort',
      'NSMQ national semi-finalist; team leader and primary organiser for school\'s national campaign',
      'Best Student award; top performance in Mathematics, Physics, Chemistry, and Biology',
    ],
  },
]

export type RecognitionType = 'award' | 'talk' | 'certification' | 'community'

export interface Recognition {
  title: string
  issuer: string
  date: string | null
  type: RecognitionType
  description?: string
  /** Verification or certificate ID, printed on the certificate. */
  credential?: string
}

export const certifications: Recognition[] = [
  // Awards & recognition
  {
    title: 'Top five finalist, Tɛkyerɛma Pa Hackathon',
    issuer: 'MTN Ghana and the University of Ghana HCI Lab',
    date: '2026',
    type: 'award',
  },
  {
    title: 'MTN Ghana Foundation Bright Scholarship',
    issuer: 'MTN Ghana Foundation, 2026 cohort',
    date: '2026',
    type: 'award',
  },
  {
    title: 'Claude for Open Source Program',
    issuer: 'Anthropic — six months of Claude Max',
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
    title: 'TechCrush Data Science Bootcamp Scholarship',
    issuer: 'TechCrush — 15-week applied curriculum with live instruction',
    date: '2026',
    type: 'award',
  },
  {
    title: 'Goalpha Intern Mentorship Program (GIMP)',
    issuer: 'Participant',
    date: null,
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
    issuer: 'Google Research Africa Monthly Student Tech-Talk, AICC Accra — positive feedback from Google researchers',
    date: '31 July 2026',
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
    title: 'British Airways Data Science Job Simulation',
    issuer: 'British Airways via Forage',
    date: 'September 2026',
    type: 'certification',
    description:
      "Two practical tasks drawn from the airline's operations and customer strategy: modelling lounge eligibility to forecast lounge demand at Heathrow Terminal 3 for the Airport Planning team, then building and evaluating a predictive model to identify future holiday travellers, with the findings presented as a slide deck.",
    credential: 'User verification code 69a77e35a15f285ab30b3589',
  },
  {
    title: 'TechCrush Data Science Bootcamp',
    issuer: '15-week scholarship programme (Beginners), accredited by the American Council of Training and Development, USA',
    date: 'August 2026',
    type: 'certification',
    credential: 'Certificate ID TEC-5CBB1E22',
  },
  {
    title: 'GreenRes Hackathon Virtual Bootcamp',
    issuer: 'Africa Climate Collaborative, University of Ghana, with the Mastercard Foundation',
    date: 'July 2026',
    type: 'certification',
    description:
      'Three-day bootcamp preparing teams to build tech-driven climate solutions, under the theme "Transforming Climate Awareness into Climate Action through Technology". Modules: Gender Equality and Inclusive Climate Innovation, Innovation and Entrepreneurship, Data Analysis for Climate Solutions, Leadership and Team Collaboration, and Climate Resilience and Sustainability.',
  },
  {
    title: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University (Columbia+)',
    date: 'April 2026',
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

  // Leadership & community
  {
    title: 'Campus Ambassador, WIWIK 100',
    issuer: 'University of Ghana',
    date: null,
    type: 'community',
  },
  {
    title: 'Contributor, GhanaNLP',
    issuer: 'African NLP research network',
    date: null,
    type: 'community',
  },
  {
    title: 'Member, COMPSSA',
    issuer: "Computer Science Students' Association, University of Ghana",
    date: null,
    type: 'community',
  },
  {
    title: 'Church leadership',
    issuer: 'Drummer, sound engineer, choir member, event organiser and chaplain',
    date: null,
    type: 'community',
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
  { label: 'BLEU, Kusaal → English (in-domain)', value: '27.57' },
  { label: 'Languages, one ASR model', value: '42' },
  { label: 'Corpus pairs built', value: '48,000' },
  { label: 'Hours of audio aligned', value: '81.71' },
]

/**
 * Provenance of the ~48,000-pair corpus, for the stacked-bar visual.
 * Shares are percentages of the two documented components: the original
 * corpus (32,589 pairs across scripture, lexicographic and encyclopedic
 * sources) and the Kusaal Wikipedia harvest (13,659 verified pairs:
 * 8,268 gold, 5,391 silver).
 */
export const corpusTotalLabel = '~48,000 pairs'

export const corpusSources = [
  { name: 'Original corpus', share: 70.5 },
  { name: 'Wikipedia harvest (gold)', share: 17.9 },
  { name: 'Wikipedia harvest (silver)', share: 11.7 },
]
