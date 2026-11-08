/*
 * All site copy lives here. House rules for anything visible on the page:
 * no em-dashes, never "first" for MT/ASR/dataset work, keep each metric next
 * to the test set it was measured on, and say "built", "demonstrated",
 * "proposed" and "deployed" only where each is true.
 */

export const personalInfo = {
  name: 'Prince Nasamu Alhassan',
  shortName: 'P.N. Alhassan',
  title: 'Independent researcher building accessibility and language technology for Africa',
  tagline: 'Speech, translation and assistive AI for African languages and the people mainstream technology leaves out.',
  email: 'pnalhassan@gmail.com',
  github: 'https://github.com/NasamuAlhassan',
  huggingface: 'https://huggingface.co/PrinceAlhassanNasamu',
  linkedin: 'https://linkedin.com/in/alhassan-prince',
  university: 'University of Ghana, Legon',
  degree: 'BSc Mathematical Sciences with Computer Science',
  gpa: '4.0',
  affiliations: ['HCI Lab, University of Ghana', 'GhanaNLP', 'COMPSSA, University of Ghana'],
}

export const about =
  "Prince Nasamu Alhassan is an independent researcher and builder from Bawku, in Ghana's Upper East Region. He works full-time on accessibility tools and language technology for Ghanaian and African languages, from open translation and speech models to Nexus, a voice-first Android assistant for blind and low-vision users. He builds for conditions mainstream technology often overlooks: low-resource languages, low-cost Android phones, basic phones, unreliable internet, and workflows where a wrong action can cost someone their money, health or independence. He began with Kusaal because it is his language and his home, and the work now spans Twi, Ewe, Hausa, Dagbani and Ghanaian English, along with voice-first systems for community health, agriculture and climate adaptation. He is Lead Researcher for Northern Languages at the University of Ghana HCI Lab, an affiliated researcher with GhanaNLP, and a Mathematical Sciences student at the University of Ghana. He trains on free and borrowed compute (Kaggle T4s, Lightning AI, Colab and a granted 48-hour H200 window) and publishes the data, code and models. Outside the work, he is a church drummer, sound engineer and choir member."

export const skills: Record<string, string[]> = {
  'ML, NLP & Speech': [
    'NLLB-200 fine-tuning',
    'Whisper with LoRA / QLoRA',
    'w2v-BERT 2.0 + CTC with KenLM decoding',
    'TTS training and ONNX export',
    'Back-translation',
    'Parallel-corpus mining and alignment',
    'BLEU / chrF++ / WER evaluation',
    'Source-disjoint split design',
    'PyTorch',
    'Hugging Face Transformers',
    'sentence-transformers',
    'Meta MMS',
    'scikit-learn',
    'pandas',
  ],
  Engineering: [
    'Python',
    'FastAPI',
    'TypeScript',
    'React',
    'Next.js 14',
    'React Native / Expo',
    'Flutter',
    'Android',
    'Node / Express',
    'Supabase / PostgreSQL',
    'Docker',
    'Vercel',
    "Africa's Talking (SMS, USSD, voice)",
    'Khaya API',
    'DHIS2 / FHIR',
  ],
  'AI-assisted development': [
    'Claude Code',
    'Multi-agent role splits',
    'SKILL.md packs',
    'Long autonomous runs with research between phases',
  ],
  Compute: ['Kaggle T4', 'Lightning AI', 'Google Colab', '48-hour H200 window (GhanaNLP / AISCA)'],
  'Human languages': [
    'Kusaal (native)',
    'English (native)',
    'Project work in Twi, Dagbani, Ewe and Hausa',
  ],
}

export type ProjectLink = { label: string; href: string }
export type Metric = { label: string; value: string; unit?: string }

/** Which filter a project sits under on the Projects grid. */
export type ProjectKind = 'accessibility' | 'language' | 'health' | 'product' | 'earlier'

export const projectKindLabels: Record<ProjectKind, string> = {
  accessibility: 'Accessibility',
  language: 'Language technology',
  health: 'Health, climate & civic',
  product: 'Products',
  earlier: 'Earlier builds',
}

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
  /** Built, prototype, concept, and so on. Shown on the card. */
  status?: string
  /** Headline numbers, rendered as a metric strip. Each label names its test set. */
  metrics?: Metric[]
  /** Live URL that can be embedded as an in-page preview. */
  preview?: string
  githubRepo?: string
}

/* ------------------------------------------------------------------ */
/*  Flagship: Nexus                                                     */
/* ------------------------------------------------------------------ */

export const nexus = {
  title: 'Nexus',
  formerly: 'Tɛkyerɛma AI',
  claim: 'Your phone. Your voice. Your independence.',
  summary:
    'A voice-first Android assistant for blind and low-vision users, in Asante Twi and Ghanaian English. Say "Soma sidi anum ma me yere" (send five cedis to my wife) and Nexus finds the contact, walks the Mobile Money menu on the phone, checks every step and stops at the PIN, which the user enters privately with the volume buttons. Accessibility technology for Africa, starting in Ghana.',
  recognition:
    'Top-five finalist, MTN Ghana Tɛkyerɛma Pa Hackathon 2026 (MTN Ghana and the University of Ghana HCI Lab). Built and presented by Team Nexus at the grand finale, 31 October 2026.',
  loop: [
    { step: 'Voice', body: 'Twi or Ghanaian English' },
    { step: 'Understand', body: 'Send GHS 5 to "my wife"' },
    { step: 'Plan', body: 'Contact, amount, MoMo menu' },
    { step: 'Act', body: 'Walks the menu on the phone' },
    { step: 'Verify', body: 'Checks each step, stops at the PIN' },
  ],
  capabilities: [
    { title: 'Access information', items: ['Reads messages, screens and documents aloud', 'Describes images', 'Recognises Ghanaian cedi notes'] },
    { title: 'Communication', items: ['Makes calls and sends messages', 'Announces callers by name', 'Replies by voice'] },
    { title: 'Everyday tasks', items: ['Works inside other apps (booked an Uber by voice)', 'Walking directions, timers, music'] },
    { title: 'Inclusive input', items: ['Asante Twi and Ghanaian English', 'A Twi keyboard with ɛ and ɔ'] },
  ],
  privacy:
    'Local-first, privacy-gated hybrid AI. Supported tasks, the money flow and Twi commands run on the phone. Before a request reaches the cloud planner, phone numbers, emails and account numbers are swapped for tags, and the real values are only put back into the action on the phone. The PIN never leaves the phone. Not every feature works offline.',
  metrics: [
    { label: 'Automated tests passing', value: '2,000', unit: '+' },
    { label: 'GB phone it runs on (Galaxy A20e)', value: '3' },
    { label: 'Rehearsal runs', value: '40' },
    { label: 'PIN appearances in logs', value: '0' },
  ] as Metric[],
  next: 'Next: real-world testing with blind and low-vision users, and exploring an official Mobile Money integration. Nexus is an independent project, not an MTN product.',
  videos: [
    {
      title: 'A blind user running Nexus',
      caption: 'Real use, with the kind of person Nexus is built for.',
      src: 'https://drive.google.com/file/d/1w4fU-1mnp789gmVBlWaZALNAinRliDP1/preview',
    },
    {
      title: 'More features at work',
      caption: 'Reading, calling, messaging and working inside other apps.',
      src: 'https://drive.google.com/file/d/171L07fyBxVv_R757-_4WdEzF0Mk-RmL9/preview',
    },
  ],
  deck: 'https://drive.google.com/file/d/18Mg26BPhnCt0uMFbQw0WpwqDbJgpAU-x/preview',
  links: [
    { label: 'Download the Android APK (1.1 GB)', href: 'https://drive.google.com/file/d/1m0UvroYYty5xisGbC0HXehdJRM1nNftS/view' },
    { label: 'Pitch deck', href: 'https://drive.google.com/file/d/18Mg26BPhnCt0uMFbQw0WpwqDbJgpAU-x/view' },
  ] as ProjectLink[],
  photo: '/moments/tekyerema-pa-pitch.jpg',
  photoAlt: 'Prince presenting Nexus at the Tɛkyerɛma Pa Hackathon grand finale, University of Ghana',
}

/* ------------------------------------------------------------------ */
/*  Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  // Accessibility
  {
    id: 17,
    title: 'Nexus (formerly Tɛkyerɛma AI)',
    summary: 'Voice-first Android assistant that lets blind and low-vision users handle mobile money, messages and calls by voice.',
    kind: 'accessibility',
    year: '2026',
    status: 'Built · Top-five finalist',
    description:
      'A voice-first Android assistant for blind and low-vision users, in Asante Twi and Ghanaian English. You say what you want; it understands, plans, acts inside the phone and checks each step, stopping at the PIN, which you enter privately with the volume buttons. It reads messages, screens and documents aloud, describes images, recognises cedi notes, makes calls and sends messages, and works inside other apps. Local-first and privacy-gated: personal numbers are swapped for tags before anything reaches the cloud, and the PIN never leaves the phone. 2,000+ automated tests; runs on a 3 GB Samsung Galaxy A20e. Top-five finalist at the MTN Ghana Tɛkyerɛma Pa Hackathon 2026.',
    tags: ['Accessibility', 'Agentic AI', 'Android', 'Mobile money', 'Twi', 'Privacy'],
    links: [
      { label: 'Demo video', href: 'https://drive.google.com/file/d/171L07fyBxVv_R757-_4WdEzF0Mk-RmL9/view' },
      { label: 'APK', href: 'https://drive.google.com/file/d/1m0UvroYYty5xisGbC0HXehdJRM1nNftS/view' },
    ],
    featured: false,
  },
  {
    id: 14,
    title: 'Zigi Voice',
    summary: 'Say what you need in Twi, Kusaal or English; it finds the telco product and stops before the PIN.',
    kind: 'accessibility',
    year: '2026',
    status: 'Unofficial concept prototype',
    description:
      'An unofficial concept prototype for a voice-first MyMTN-style self-service app, using mock balances and contacts. Customers who cannot read the menu, or do not know a product is called "Midnight Bundle", say what they need in Twi, Kusaal or English. A deterministic dialogue state machine fills the slots, asks instead of guessing, reads every transaction back before money moves, and hands off at the PIN, which it never sees. An optional LLM layer is not load-bearing: with every API key removed the core flows still work. 82 passing tests. Not an MTN app or integration.',
    tags: ['Voice UI', 'Dialogue systems', 'Twi', 'Kusaal', 'React'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/MTN' }],
    featured: false,
    githubRepo: 'MTN',
  },

  // Language technology
  {
    id: 1,
    title: 'Kusaal-English Machine Translation',
    summary: 'An open NLLB-200 translation model for Kusaal, with the corpus, the mining pipeline and a frozen public benchmark.',
    kind: 'language',
    year: '2024 – present',
    status: 'Released',
    metrics: [
      { label: 'BLEU ks→en, Wikipedia benchmark', value: '47.73' },
      { label: 'BLEU en→ks, Wikipedia benchmark', value: '32.26' },
      { label: 'Parallel pairs', value: '48,000', unit: '~' },
    ],
    description:
      "Kusaal is a Gur (Oti-Volta) language of Ghana's Upper East Region and neighbouring Burkina Faso. The model fine-tunes NLLB-200-distilled-600M with a new kus_Latn token warm-started from Dagbani. In August 2026 a three-stage pipeline mined 13,659 verified pairs (8,268 gold, 5,391 silver) from 1,170 comparable Kusaal and English Wikipedia articles, plus a 6,917-sentence back-translation pool for the weaker direction, taking the corpus to roughly 48,000 pairs. On the frozen 1,000-sentence Kusaal Wikipedia Benchmark that lifted BLEU from 42.17 to 47.73 (Kusaal to English) and from 19.43 to 32.26 (English to Kusaal), while the original, largely religious test set held steady at 30.59 and 20.21. The benchmark was mined with MT assistance, so its absolute scores read high: the before and after change is the meaningful signal. An earlier model card reported 27.57 / 13.72 BLEU under a different decoding setup on the full 2,081-sentence original test set. Known weakness: the gender-neutral pronoun o is still often rendered as \"he\".",
    tags: ['NLLB-200', 'Low-resource MT', 'Corpus mining', 'Back-translation', 'CC BY 4.0'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-mt' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-nllb-600M' },
      { label: 'Live demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-mt' },
      { label: 'Corpus', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-english-parallel-corpus' },
      { label: 'Benchmark', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-wikipedia-benchmark' },
    ],
    featured: true,
    githubRepo: 'kusaal-mt',
  },
  {
    id: 4,
    title: 'Kusaal Speech Recognition',
    summary: '81.7 hours of Kusaal speech, aligned verse by verse, and a Whisper model evaluated on whole held-out books.',
    kind: 'language',
    year: '2026',
    status: 'Released',
    metrics: [
      { label: 'WER, held-out books', value: '30.41', unit: '%' },
      { label: 'Hours of audio', value: '81.71' },
      { label: 'Verse-level clips', value: '30,820' },
    ],
    description:
      'A Kusaal speech dataset of 30,820 verse-level clips (81.7 hours, 16 kHz mono), force-aligned from chapter-level scripture recordings. Splits hold out whole books (Luke, Philippians, Proverbs and Psalms for validation; Jonah, Matthew, Revelation and Ruth for test) so adjacent verses, names and narrators cannot leak between training and evaluation. Whisper-small with LoRA (rank 32, about 1.44% of parameters trainable) reaches 30.41% WER on the held-out validation books, trained in about four hours on a Kaggle T4. A later CTC model reported 24.61% WER on a separate 100-clip scripture evaluation: a different model and a much smaller test, so the two numbers are not directly comparable. Training audio is scripture read aloud, so the models are not yet validated for spontaneous or noisy speech. The audio data is licensed for non-commercial use; the LoRA adapter is CC BY 4.0.',
    tags: ['ASR', 'Whisper', 'LoRA', 'CTC', 'Dataset'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-asr' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-whisper-small-lora' },
      { label: 'Dataset', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-asr-dataset' },
      { label: 'Live demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-asr' },
      { label: 'CTC v2', href: 'https://huggingface.co/PrinceAlhassanNasamu/tekyerema-asr-ctc-kus-v2' },
    ],
    featured: true,
  },
  {
    id: 11,
    title: 'KASA-42: Speech Recognition Across 42 Ghanaian Languages',
    summary: 'One speech model for 42 Ghanaian languages with built-in language identification, evaluated on leakage-resistant splits.',
    kind: 'language',
    year: '2026',
    status: 'Research',
    description:
      "Extends DONDO, a Ghanaian-language speech model, from 11 to 42 languages using the ghananlpcommunity/ghana-speech dataset: w2v-BERT 2.0 with a CTC head, trained in a 48-hour H200 window at the GhanaNLP TTS/ASR Hackathon (compute from AI Skills and Compute Africa). A jointly trained language-ID head works out which language was spoken instead of needing it supplied. Several languages contain the same book read by different narrators, so the splits are book-disjoint, and a leaked versus honest WER comparison was reported alongside the submission. Orthographic homoglyphs are normalised so look-alike Unicode characters do not fragment the vocabulary. A per-language evaluation table is still to come, so no single average WER is claimed here. A Kusaal text-to-speech model was trained in the same window.",
    tags: ['ASR', 'w2v-BERT 2.0', 'CTC', 'Language ID', 'ONNX'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kasa42' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/kasa42-asr' },
      { label: 'GhanaNLP community', href: 'https://huggingface.co/ghananlpcommunity' },
    ],
    featured: false,
  },
  {
    id: 30,
    title: 'Tɛkyerɛma Language Service',
    summary: 'Speech recognition and speech output for six Ghanaian languages, in one live Hugging Face Space.',
    kind: 'language',
    year: '2026',
    status: 'Live demo',
    preview: 'https://princealhassannasamu-tekyerema-lang.hf.space',
    metrics: [
      { label: 'Languages', value: '6' },
      { label: 'WER Twi, fine-tuned', value: '22.7', unit: '%' },
      { label: 'WER Ghanaian English, fine-tuned', value: '17.9', unit: '%' },
    ],
    description:
      'One service for Ghanaian English, Asante Twi, Hausa, Ewe, Kusaal and Dagbani. Fine-tuning cut word error rate on each language\'s own evaluation slice: Ghanaian English 29.7% to 17.9%, Twi 38.6% to 22.7%, Hausa 33.1% to 26.3%, Kusaal 59.3% to 30.4% and Ewe 54.0% to 42.2%. The test sets differ, so the numbers are not comparable across languages. The Dagbani recogniser is an existing Farmerline model, not one trained here. Twi training data was used with Farmerline\'s permission, and compute came from AI Skills and Compute Africa. Some model and data licences are non-commercial.',
    tags: ['ASR', 'TTS', 'Multilingual', 'Twi', 'Hausa', 'Ewe', 'Hugging Face Spaces'],
    links: [
      { label: 'Live demo', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/tekyerema-lang' },
      { label: 'Twi CTC model', href: 'https://huggingface.co/PrinceAlhassanNasamu/tekyerema-asr-ctc-twi-v2' },
    ],
    featured: true,
  },
  {
    id: 24,
    title: 'Kusaal Text-to-Speech: Restoring Missing Vowels',
    summary: 'The existing Kusaal voice silently dropped ɔ, ɛ and ʋ. This work puts them back.',
    kind: 'language',
    year: '2026',
    status: 'Research in progress',
    metrics: [
      { label: 'Verses affected', value: '99.5', unit: '%' },
      { label: 'Word tokens affected', value: '31.2', unit: '%' },
      { label: 'Vocabulary', value: '28 → 37' },
    ],
    description:
      'The baseline MMS Kusaal voice has a 28-token vocabulary that omits ɔ, ɛ and ʋ, and silently deletes them, so it can speak a different word or lose grammatical meaning. Across 30,820 scripture verses those three characters occur 312,449 times: 11.3% of all letters, in 31.2% of word tokens and 99.5% of verses. The fix extends the vocabulary from 28 to 37 tokens, keeping the trained embeddings and warm-starting new rows for the missing vowels, and keeps punctuation and the phonemic apostrophe for prosody. Evaluation by ASR round-trip character error rate and native-speaker A/B listening is planned; no listening result is claimed yet. The source corpus is CC BY-NC 4.0, so the voice is for non-commercial research use.',
    tags: ['TTS', 'MMS', 'Tokenizer', 'Orthography', 'Kusaal'],
    links: [
      { label: 'Code', href: 'https://github.com/NasamuAlhassan/kusaal-tts' },
      { label: 'Model', href: 'https://huggingface.co/PrinceAlhassanNasamu/tekyerema-tts-kus' },
    ],
    featured: false,
  },
  {
    id: 25,
    title: 'Twi Language Model and Voice Assistant',
    summary: 'Fine-tuning an open LLM to understand Twi natively, so pipelines stop routing through English.',
    kind: 'language',
    year: '2026',
    status: 'In progress',
    description:
      'Most Twi voice pipelines translate into English, reason in English and translate back, losing meaning at each step. This project fine-tunes an open language model (LoRA-style) to understand Twi directly, towards a speech-in, speech-out Twi assistant. Research in progress; no model has been released.',
    tags: ['LLM', 'LoRA', 'Twi', 'Speech'],
    links: [],
    featured: false,
  },
  {
    id: 26,
    title: 'Ambient Clinical Scribe',
    summary: 'A consent-first scribe for outpatient consultations in Twi and English.',
    kind: 'language',
    year: '2026',
    status: 'Research prototype',
    description:
      'Explores an ambient medical scribe for outpatient consultations: a tablet in the consultation room, started by the clinician after the patient consents, never a continuously listening wake word. The research covers Twi and English speech recognition, separating clinician and patient turns, and drafting a structured consultation record to assist documentation. Developed with a practising clinician, with a pilot in Northern Ghana being explored. Not clinically validated or deployed.',
    tags: ['Speech', 'Diarisation', 'Health', 'Twi', 'Consent'],
    links: [{ label: 'ASR model line', href: 'https://huggingface.co/PrinceAlhassanNasamu/yaw-asr-twi-en' }],
    featured: false,
  },

  // Health, climate and civic
  {
    id: 12,
    title: 'Mabia AI',
    summary: 'Voice-first maternal and child health outreach over plain GSM, built so silence is never mistaken for safety.',
    kind: 'health',
    year: '2026',
    status: 'Working prototype',
    preview: 'https://mabia-ai.vercel.app',
    metrics: [
      { label: 'Backend tests', value: '285' },
      { label: 'Frontend tests', value: '12' },
    ],
    description:
      "A feature-phone IVR and USSD care-coordination platform for CHPS-level maternal and child health in Northern Ghana, built for the UNICEF StartUp Lab AI for Nurturing Care Hackathon 2026. Prince was engineering and AI lead (backend, speech, risk and nutrition engines), working with Joshua Akum Winyelsum (full-stack and design) and Dawuda Mardia (nutrition). Working today: an append-only event log with idempotent sync, a deterministic risk engine with reason codes and a human in the loop, a seasonal and affordability-aware nutrition engine, an IVR with keypad triage and press-9 to a nurse, an inbound hotline with nurse and driver cascades, and a health-worker worklist and facility board. Partly built: local-language audio (Kusaal 17 of 45 core lines, Dagbani 2 of 45); anything unrecorded plays in English rather than mispronounced. Not started: speech recognition, predictive models and DHIMS2 integration. The live demo runs on seeded data; there has been no field pilot.",
    tags: ['IVR', 'USSD', 'FastAPI', 'PostgreSQL', 'Offline-first', 'Health'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Mabia-AI' },
      { label: 'Live demo', href: 'https://mabia-ai.vercel.app' },
    ],
    featured: true,
    githubRepo: 'Mabia-AI',
  },
  {
    id: 27,
    title: 'Farm to Market',
    summary: 'A farmer marketplace built so someone with a basic phone can use every part of it.',
    kind: 'health',
    year: '2026',
    status: 'Working prototype',
    metrics: [
      { label: 'Tests passing', value: '170' },
      { label: 'Locales', value: '6' },
    ],
    description:
      'Connects Ghanaian farmers with verified buyers and transport. Farmers list produce by USSD, by one spoken phone call (speech recognition, translation and a parser turn it into a live listing) or on the web, hear offers as outbound IVR calls and press 1 to accept, and get an SMS receipt at every step. Buyers see lot certificates and AI grading explained criterion by criterion; drivers take dispatch and are paid from escrow on verified delivery. One domain core and double-entry ledger sit behind every channel. Six locales (English, Twi, Ewe, Dagbani, Hausa and Kusaal) with a native-speaker review gate: unreviewed text falls back to English on SMS, USSD and IVR. The end-to-end demo runs fully offline; real providers (Africa\'s Talking, MoMo sandbox, Khaya, Hugging Face) plug in by configuration. Not an operating marketplace.',
    tags: ['USSD', 'IVR', 'SMS', 'MoMo', 'Agriculture', 'Multilingual'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/F2M' }],
    featured: false,
    githubRepo: 'F2M',
  },
  {
    id: 19,
    title: 'GreenReS: Climate Now',
    summary: 'Turns local climate conditions into one practical action, and records whether it happened.',
    kind: 'health',
    year: '2026',
    status: 'Deployed prototype · no pilot yet',
    preview: 'https://green-res.vercel.app',
    description:
      'Built for the GreenRes Hackathon 2026 (University of Ghana and the Africa Climate Collaborative, with the Mastercard Foundation). It follows one chain: what the climate is doing where you live, what that means for your health, work or crops today, one action you can take, and evidence that it happened. Heat, UV, air quality, rain and dryness come from Open-Meteo and Copernicus CAMS, compared against standards such as Ghana Standard GS 1236:2019 and WHO UV guidance. Actions are recorded as self-reported, confirmed or independently verified, and it degrades honestly when AI, SMS or connectivity are unavailable. It runs on live data, but no pilot has run yet, and it makes no emissions-reduction claim.',
    tags: ['React', 'PWA', 'FastAPI', 'SMS', 'USSD', 'Climate'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/GreenRes' },
      { label: 'Live demo', href: 'https://green-res.vercel.app' },
    ],
    featured: false,
  },
  {
    id: 13,
    title: 'Ghana AI-NCD Navigator',
    summary: 'A connected prototype for non-communicable disease care, wired to a public DHIS2 demo instance.',
    kind: 'health',
    year: '2026',
    status: 'Connected prototype',
    description:
      "A phased prototype of a non-communicable disease care system shaped around DHIS2-style health infrastructure: an AI gateway with a model registry and audit trail, a FHIR-shaped API over DHIS2, a clinician navigator where the clinician accepts or overrides each suggestion, an offline-first screening app for community outreach, and a population dashboard. All five services work together against the shared public DHIS2 demo sandbox (its Hypertension Registry holds about 2,900 patients). A sixth phase adds a patient portal whose blood-pressure readings sync to the same registry. The risk models are illustrative and not clinically validated, and this is not a Ghana Health Service deployment.",
    tags: ['DHIS2', 'FHIR', 'Flask', 'Next.js 14', 'Health systems'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/NCD' },
      { label: 'Patient portal', href: 'https://github.com/NasamuAlhassan/NCD_v1' },
    ],
    featured: false,
    githubRepo: 'NCD',
  },
  {
    id: 22,
    title: 'Mabia Voice Line',
    summary: 'A voice line submitted to SafeTech Africa HackLab 2026.',
    kind: 'health',
    year: 'Oct 2026',
    status: 'Hackathon submission',
    description:
      'A voice-line project submitted to SafeTech Africa HackLab 2026, run with UNFPA and the Spotlight Initiative.',
    tags: ['Voice', 'Hackathon'],
    links: [],
    featured: false,
  },
  {
    id: 20,
    title: 'RBAS: Biosafety Permit System',
    summary: "An online biosafety permit application system, built for Ghana's National Biosafety Authority.",
    kind: 'health',
    year: '2026',
    status: 'Client project',
    description:
      "Real-Time Biotech Regulatory Application System: an online biosafety permit application system built end to end for Ghana's National Biosafety Authority (NBA), as a solo build for the client, who owns the product. The Authority has requested a demonstration.",
    tags: ['Full-stack', 'Regulatory tech', 'Client work'],
    links: [],
    featured: false,
  },

  // Products
  {
    id: 3,
    title: 'CampusLink',
    summary: 'Verified student connection for African university students, piloting at UG Legon.',
    kind: 'product',
    year: '2025 – present',
    status: 'Live pilot',
    preview: 'https://campus-link-sigma.vercel.app',
    description:
      'A platform for African university students with two-stage student identity verification, real-time messaging and an interactive campus map, piloting at the University of Ghana. Founded and built solo, it has been through a full redesign, and a CampusLink Pay extension is in development.',
    tags: ['Next.js 14', 'Supabase', 'Gemini API', 'Full-stack'],
    links: [{ label: 'Live demo', href: 'https://campus-link-sigma.vercel.app' }],
    featured: false,
  },
  {
    id: 21,
    title: 'Kasa',
    summary: 'Voice-first language learning: Twi speakers learn English, English speakers learn Twi.',
    kind: 'product',
    year: '2026',
    status: 'App built · backend activation pending',
    description:
      'A bilingual, voice-first mobile app that teaches spoken language through conversation, with audio-labelled scenario tiles, target phrases, slow replay, tap-to-speak practice with per-word feedback, streaks and offline lesson packs. The core mobile loop, Supabase backend and service wiring are built; the app currently runs on local fallbacks until live speech and AI keys are added, and Twi content still needs native-speaker review.',
    tags: ['React Native', 'Expo', 'Supabase', 'Speech', 'Twi'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/KasaAI' }],
    featured: false,
  },
  {
    id: 2,
    title: 'Forge',
    summary: "An AI study scheduler that plans around a student's whole life, not just classes.",
    kind: 'product',
    year: 'May 2026',
    status: 'Live demo',
    preview: 'https://forge-study-theta.vercel.app',
    description:
      'Plans study around work, church, projects and sleep, with Pomodoro focus sessions, analytics, streaks, a focus mode, PDF and ICS export, and an "Ask Forge" voice mode on Gemini 2.5 Flash. Built and shipped in 48 hours at the DesignPxD Student AI Hackathon, University of Ghana. An earlier smart-timetable prototype lives in a separate repository.',
    tags: ['React', 'Vite', 'Supabase', 'Gemini 2.5 Flash', 'Hackathon'],
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Forge_study' },
      { label: 'Live demo', href: 'https://forge-study-theta.vercel.app' },
      { label: 'Earlier prototype', href: 'https://github.com/NasamuAlhassan/Forge' },
    ],
    featured: false,
    githubRepo: 'Forge_study',
  },
  {
    id: 28,
    title: 'Dawuro',
    summary: 'Scripture as a WhatsApp voice note, in your own language.',
    kind: 'product',
    year: '2026',
    status: 'Hackathon prototype',
    description:
      'Built for the Scripture in New Frontiers hackathon (YouVersion and Gloo AI). Say or type how you feel, get a relevant verse in English and a local language, hear it read aloud, and share it as a voice note and image card that opens in a browser with no app or account. Where a published local-language Bible exists it is used; otherwise translated text is clearly labelled as a translation. Speech and translation come from GhanaNLP Khaya, and language support varies by modality.',
    tags: ['Next.js', 'YouVersion', 'Gloo AI', 'Khaya API', 'Voice'],
    preview: 'https://dawuro.vercel.app',
    links: [
      { label: 'GitHub', href: 'https://github.com/NasamuAlhassan/dawuro' },
      { label: 'Live demo', href: 'https://dawuro.vercel.app' },
    ],
    featured: false,
  },
  {
    id: 18,
    title: 'Wake the Word',
    summary: 'An alarm that keeps ringing until you read a verse aloud and answer a reflection question.',
    kind: 'product',
    year: '2026',
    status: 'Hackathon build',
    description:
      'An Android alarm app for the Gloo Hackathon (YouVersion Platform) that keeps ringing until you read a Scripture verse aloud, checked by speech recognition, and answer an AI-generated reflection question. Built solo in Flutter as a native APK so the alarm rings through the lock screen.',
    tags: ['Flutter', 'Android', 'Speech recognition', 'YouVersion API', 'Gloo AI'],
    links: [],
    featured: false,
  },
  {
    id: 15,
    title: 'Editorial Board Hub',
    summary: 'One system for running a school editorial board: public site, members’ portal, archive and SMS.',
    kind: 'product',
    year: '2026',
    status: 'Phase 1 MVP',
    description:
      'Built for the Osei Tutu SHS Editorial Board: a public site with a publications archive, a members’ portal with four role levels, a document library with role-based permissions, a calendar with RSVPs and read receipts, urgent SMS with a cost estimate and explicit send confirmation, and an append-only activity log. Later phases (WhatsApp integration, full-text search, version history) are not built yet.',
    tags: ['Next.js 14', 'Postgres', 'Full-stack', 'SMS'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/EIC-Platform' }],
    featured: false,
    githubRepo: 'EIC-Platform',
  },
  {
    id: 8,
    title: 'WhatsApp Agent Dashboard',
    summary: 'A personal dashboard that watches WhatsApp, flags urgent messages and alerts on Telegram.',
    kind: 'product',
    year: '2026',
    status: 'Personal prototype',
    description:
      'Real-time WhatsApp monitoring over WebSockets with urgency detection, digest summaries, Telegram alerts for urgent messages, task and news extraction from group chats, and natural-language questions over message history. A separate Telegram agent runs locally with Telethon and Ollama. Not an official WhatsApp integration.',
    tags: ['WebSockets', 'Telethon', 'Ollama', 'Python'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/Whatsapp-Agent' }],
    featured: false,
  },

  // Earlier builds
  {
    id: 9,
    title: 'DecodeLabs Climate Data Pipeline',
    summary: 'Climate time series from five Ghanaian cities, ingested end to end.',
    kind: 'earlier',
    year: '2026',
    description:
      'An end-to-end pipeline ingesting meteorological time series from the Open-Meteo API across five Ghanaian cities into structured datasets for analysis. Built during the Decodelabs data science internship.',
    tags: ['Data engineering', 'Python', 'Open-Meteo', 'Internship'],
    links: [{ label: 'GitHub', href: 'https://github.com/NasamuAlhassan/DecodeLabs-Internship' }],
    featured: false,
    githubRepo: 'DecodeLabs-Internship',
  },
  {
    id: 29,
    title: 'NSMQ Team Selection Platform',
    summary: 'Contest practice and team selection for National Science & Maths Quiz-format rounds.',
    kind: 'earlier',
    year: '2026',
    description:
      'A private web app for coaches and students: question banks with AI-assisted import from PDF and DOCX, all five contest rounds with timers and live state, KaTeX rendering, offline answer queuing, a live admin monitor, and CSV and PDF reports.',
    tags: ['Web app', 'Education', 'KaTeX'],
    links: [],
    featured: false,
  },
  {
    id: 5,
    title: 'FieldMind',
    summary: 'Retrieval-augmented search over enterprise documents.',
    kind: 'earlier',
    year: '2026',
    description: 'A retrieval-augmented generation tool for enterprise document search on the Google Gemini API, submitted to a LabLab.ai hackathon.',
    tags: ['RAG', 'Gemini', 'Hackathon'],
    links: [],
    featured: false,
  },
  {
    id: 7,
    title: 'HyperFlow Risk Agent',
    summary: 'Multi-agent trade risk analysis, built as part of a team.',
    kind: 'earlier',
    year: '2026',
    description: 'A multi-agent trade risk analysis system, a team entry in the AMD Developer Cloud Hackathon AI Agents track.',
    tags: ['AI agents', 'Team project'],
    links: [],
    featured: false,
  },
  {
    id: 23,
    title: 'Nasamu Workspace',
    summary: 'A personal AI workspace over a self-hosted open-weight model.',
    kind: 'earlier',
    year: '2025 – 2026',
    description: 'A single-file assistant interface over a self-hosted open-weight language model running on free Kaggle GPU compute.',
    tags: ['LLM', 'Self-hosted'],
    links: [],
    featured: false,
  },
  {
    id: 10,
    title: 'VerifiQ',
    summary: 'QR attendance tracking for lecture halls.',
    kind: 'earlier',
    year: '2026',
    description: 'A QR-based student attendance system.',
    tags: ['QR', 'Web'],
    links: [],
    featured: false,
  },
]

/* ------------------------------------------------------------------ */
/*  Research: papers and agenda                                         */
/* ------------------------------------------------------------------ */

export const papers = {
  status: 'In preparation with Dr. Anthony Agoswin Musah (Kusaal linguist, University of Education, Winneba). Not yet submitted.',
  titles: [
    'The Kusaal Wikipedia Parallel Corpus',
    'Beyond Religious Texts: Improving Kusaal-English Machine Translation through Wikipedia Corpus Mining',
    'Anchor-First, MT-Bridged Alignment for Parallel Corpus Construction in Low-Resource African Languages',
  ],
}

/** "Where this is going": every item carries its real stage. */
export const researchAgenda = [
  {
    title: 'Sodown: community-owned speech infrastructure',
    stage: 'Concept and proposal',
    body: 'An affordable, audio-first wearable recorder and app for capturing consented, everyday speech. A base model drafts a first-pass transcript and translation, uncertain segments go weekly to paid community validators, and the model retrains on their corrections. Fieldworkers explain consent, withdrawal and deletion; communities govern access, and public release is not the default. Pilot concept: Kusaal in Bawku and nearby Upper East communities (20 speakers, 10 hours, 500 checked segments), then other Mabia languages.',
  },
  {
    title: 'Speech data and models for Mabia languages',
    stage: 'Planned',
    body: 'ASR, TTS and MT for the Mabia (Gur) languages of Northern Ghana, with paid speakers and transcription, aiming at about 100 hours per language. Deliverables: open datasets, trained models, a reusable pipeline and papers.',
  },
  {
    title: 'Multilingual ambient clinical scribe',
    stage: 'Exploring a pilot',
    body: 'Clinician augmentation, not replacement: consent-first consultation documentation in Ghanaian languages, developed with a practising clinician. Prince leads the language and dataset side.',
  },
  {
    title: 'AI safety evaluation in low-resource languages',
    stage: 'Concept',
    body: 'Evaluation and red-teaming coverage for underrepresented languages, where safety behaviour is rarely tested.',
  },
  {
    title: 'A Twi-native language model',
    stage: 'In progress',
    body: 'Fine-tuning an open model to understand Twi directly, so voice assistants stop routing through English.',
  },
]

/** Released artifacts. Licences differ: check each card before reuse. */
export const openResources = [
  { name: 'kusaal-nllb-600M', type: 'Model', note: 'Kusaal-English translation', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-nllb-600M' },
  { name: 'kusaal-english-parallel-corpus', type: 'Dataset', note: 'Parallel corpus, CC BY 4.0', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-english-parallel-corpus' },
  { name: 'kusaal-wikipedia-benchmark', type: 'Dataset', note: '1,000 frozen test pairs', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-wikipedia-benchmark' },
  { name: 'kusaal-whisper-small-lora', type: 'Model', note: 'Kusaal ASR, adapter CC BY 4.0', href: 'https://huggingface.co/PrinceAlhassanNasamu/kusaal-whisper-small-lora' },
  { name: 'kusaal-asr-dataset', type: 'Dataset', note: '81.7 h of speech, non-commercial', href: 'https://huggingface.co/datasets/PrinceAlhassanNasamu/kusaal-asr-dataset' },
  { name: 'tekyerema-asr-ctc-kus-v2', type: 'Model', note: 'Kusaal CTC ASR', href: 'https://huggingface.co/PrinceAlhassanNasamu/tekyerema-asr-ctc-kus-v2' },
  { name: 'tekyerema-asr-ctc-twi-v2', type: 'Model', note: 'Twi CTC ASR', href: 'https://huggingface.co/PrinceAlhassanNasamu/tekyerema-asr-ctc-twi-v2' },
  { name: 'tekyerema-tts-kus', type: 'Model', note: 'Kusaal TTS, non-commercial', href: 'https://huggingface.co/PrinceAlhassanNasamu/tekyerema-tts-kus' },
  { name: 'kasa42-asr', type: 'Model', note: '42-language Ghanaian ASR', href: 'https://huggingface.co/PrinceAlhassanNasamu/kasa42-asr' },
  { name: 'kusaal-mt', type: 'Demo', note: 'Translate in the browser', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-mt' },
  { name: 'kusaal-asr', type: 'Demo', note: 'Transcribe Kusaal speech', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/kusaal-asr' },
  { name: 'tekyerema-lang', type: 'Demo', note: 'Tɛkyerɛma language service', href: 'https://huggingface.co/spaces/PrinceAlhassanNasamu/tekyerema-lang' },
]

/** Event photos for the Moments gallery. */
export const moments = [
  { src: '/moments/tekyerema-pa-pitch.jpg', caption: 'Presenting Nexus at the Tɛkyerɛma Pa Hackathon grand finale', place: 'University of Ghana · 31 Oct 2026', wide: true },
  { src: '/moments/tekyerema-pa-team-nexus.jpg', caption: 'Team Nexus at the podium', place: 'Tɛkyerɛma Pa Hackathon 2026' },
  { src: '/moments/tekyerema-pa-finalists.jpg', caption: 'The five finalist teams on stage', place: 'Tɛkyerɛma Pa Hackathon 2026' },
  { src: '/moments/tekyerema-pa-congratulations.jpg', caption: 'Congratulations after the final', place: 'Tɛkyerɛma Pa Hackathon 2026' },
  { src: '/moments/google-tech-talk-portrait.jpg', caption: 'Google Research Africa Student Tech-Talk', place: 'Accra · 31 Jul 2026', tall: true },
  { src: '/moments/google-tech-talk-group.jpg', caption: 'After presenting the Kusaal-English MT work', place: 'Accra · 31 Jul 2026' },
  { src: '/moments/google-tech-talk-audience.jpg', caption: 'Student Tech-Talk participants', place: 'Accra · 31 Jul 2026' },
]

/* ------------------------------------------------------------------ */
/*  Experience, education, recognition                                  */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    role: 'Independent Researcher and Builder',
    org: 'Full-time' as string | null,
    period: '2024 – Present',
    description:
      'Accessibility tools and language technology for Ghanaian and African languages, published openly as data, code and models.',
    highlights: [
      'Built Nexus, a voice-first Android assistant for blind and low-vision users with 2,000+ automated tests; top-five finalist at the MTN Ghana Tɛkyerɛma Pa Hackathon 2026.',
      'Released Kusaal-English MT, a ~48,000-pair corpus and a frozen public benchmark; mined 13,659 verified pairs from Kusaal Wikipedia.',
      'Released an 81.7-hour Kusaal speech dataset and ASR models evaluated on whole held-out books.',
      'Preparing three papers with Dr. Anthony Agoswin Musah (University of Education, Winneba).',
    ],
    current: true,
  },
  {
    role: 'Lead Researcher, Northern Languages',
    org: 'HCI Lab, University of Ghana' as string | null,
    period: 'Sept 2026 – Present',
    description:
      'Leading research on speech and language technology for the languages of Northern Ghana, including a plan for community-led collection of consented everyday speech with participant withdrawal and deletion rights and community governance over data access.',
    current: true,
  },
  {
    role: 'Affiliated NLP Researcher',
    org: 'GhanaNLP' as string | null,
    period: '2025 – Present',
    description:
      'Works with the GhanaNLP community and its tooling; presented the Kusaal-English MT work at a community session and contributed models to the ghananlpcommunity organisation on Hugging Face.',
    current: true,
  },
  {
    role: 'Builder and Hackathon Team Lead',
    org: 'Claude Builders Club, University of Ghana' as string | null,
    period: '2026 – Present',
    description: 'Active builder in the campus chapter; led Team Gold at the club hackathon.',
    current: true,
  },
  {
    role: 'Technology and Digital Systems Intern',
    org: 'Emerging Global Academy (EGA)' as string | null,
    period: '2026',
    description: "Built and shipped projects across EGA's digital systems.",
    highlights: [
      'Led the backend of the Dr. Kwame Nkrumah Political Youth Fun Club website, a blog platform with an admin portal on Supabase (Postgres, auth, storage, REST API), working with a frontend team.',
      "Ran a technical audit of EGA's web properties and presented the findings in a deck.",
      'Mentored junior team members.',
    ],
    current: false,
  },
  {
    role: 'Developer, client project',
    org: 'National Biosafety Authority (RBAS)' as string | null,
    period: '2026',
    description:
      'Built an online biosafety permit application system end to end for the client, who owns the product. The Authority has requested a demonstration.',
    current: false,
  },
  {
    role: 'Data Science Intern',
    org: 'Decodelabs' as string | null,
    period: 'April – May 2026',
    description:
      'Built an end-to-end climate data pipeline over Open-Meteo time series for five Ghanaian cities.',
    current: false,
  },
  {
    role: 'Data Science Intern',
    org: 'Codveda Technologies' as string | null,
    period: '2025',
    description:
      'Web-scraped 1,000+ records with BeautifulSoup, cleaned the data, built regression and classification models, applied ARIMA forecasting and built NLP text classifiers.',
    current: false,
  },
  {
    role: 'MTN Ghana Tɛkyerɛma Pa Hackathon',
    org: 'Top-five finalist, Team Nexus' as string | null,
    period: 'Oct 2026',
    description: 'Built and presented Nexus at the residential camp and grand finale.',
    current: false,
  },
  {
    role: 'UNICEF StartUp Lab, AI for Nurturing Care Hackathon',
    org: 'Engineering and AI lead' as string | null,
    period: '2026',
    description: 'Built Mabia AI with a team of three: backend, speech, and the risk and nutrition engines.',
    current: false,
  },
  {
    role: 'GhanaNLP TTS/ASR Hackathon',
    org: null as string | null,
    period: 'Jul – Aug 2026',
    description:
      'Trained the KASA-42 multilingual ASR model and a Kusaal TTS model in a 48-hour H200 window, and documented a narrator-leakage issue with a leaked versus honest WER comparison.',
    current: false,
  },
  {
    role: 'More hackathon builds',
    org: null as string | null,
    period: '2026',
    description:
      'GreenRes Hackathon (GreenReS), DesignPxD Student AI Hackathon (Forge), Scripture in New Frontiers (Dawuro), Gloo Hackathon (Wake the Word), SafeTech Africa HackLab (Mabia Voice Line) and the AMD Developer Cloud Hackathon (HyperFlow, team entry).',
    current: false,
  },
]

export const education = [
  {
    institution: 'University of Ghana, Legon',
    degree: 'BSc Mathematical Sciences with Computer Science',
    period: 'Current',
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
      "NSMQ national semi-finalist; team leader and primary organiser of the school's national campaign",
      'Best Student award; top performance in Mathematics, Physics, Chemistry and Biology',
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
  // Awards & programmes
  {
    title: 'Top-five finalist, Tɛkyerɛma Pa Hackathon',
    issuer: 'MTN Ghana and the University of Ghana HCI Lab, with Nexus',
    date: 'Oct 2026',
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
    issuer: 'Anthropic, six months of Claude Max',
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
    issuer: 'TechCrush, 15-week applied curriculum with live instruction',
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
    title: 'SYNC Mentorship Program',
    issuer: 'CKODON, undergraduate track',
    date: null,
    type: 'award',
  },

  // Talks
  {
    title: 'Bridging the Gap: A Fine-Tuned NLLB-200 Model for Kusaal-English Machine Translation',
    issuer: 'Google Research Africa Monthly Student Tech-Talk, AICC Accra',
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
      "Two practical tasks drawn from the airline's operations and customer strategy: modelling lounge eligibility to forecast lounge demand at Heathrow Terminal 3, then building and evaluating a predictive model to identify future holiday travellers, presented as a slide deck.",
    credential: 'User verification code 69a77e35a15f285ab30b3589',
  },
  {
    title: 'TechCrush Data Science Bootcamp',
    issuer: '15-week scholarship programme, accredited by the American Council of Training and Development, USA',
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
      'Three-day bootcamp on building tech-driven climate solutions: gender equality and inclusive climate innovation, innovation and entrepreneurship, data analysis for climate solutions, leadership and team collaboration, and climate resilience.',
  },
  {
    title: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University (Columbia+)',
    date: 'April 2026',
    type: 'certification',
  },
  {
    title: 'Pan African AI & Innovation Summit 2026',
    issuer: 'Registered attendee',
    date: 'September 2026, Accra',
    type: 'certification',
  },

  // Leadership & community
  {
    title: 'Campus Ambassador, WIWIK 100',
    issuer: 'WIWIK Foundation, University of Ghana',
    date: null,
    type: 'community',
  },
  {
    title: 'Builder, Claude Builders Club',
    issuer: 'University of Ghana chapter; led Team Gold at the club hackathon',
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
    title: 'Church music and service',
    issuer: 'Drummer, sound engineer, choir member, event organiser and chaplain',
    date: null,
    type: 'community',
  },
]

/* ------------------------------------------------------------------ */
/*  Navigation, positioning and figures                                 */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'Nexus', href: '#nexus' },
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Vision', href: '#vision' },
  { label: 'About', href: '#about' },
  { label: 'Partner', href: '#partner' },
]

export const positioning = {
  eyebrow: 'Independent researcher · Accra, Ghana',
  claim: 'AI that works for the people it usually leaves out.',
  /** Words of the claim set in the accent colour. */
  accent: 'usually leaves out.',
  support:
    'I build accessibility tools and language technology for Africa: a voice-first phone assistant for blind users, open speech and translation models, and voice systems for health and farming that work on a basic phone.',
  photo: '/moments/tekyerema-pa-pitch.jpg',
  photoAlt: 'Prince presenting Nexus at the Tɛkyerɛma Pa Hackathon grand finale, University of Ghana',
}

/** Credibility strip under the hero. */
export const proof = [
  { title: 'Top-five finalist', note: 'MTN Ghana × UG HCI Lab hackathon, 2026' },
  { title: 'Google Research Africa', note: 'Student Tech-Talk speaker, Accra' },
  { title: 'Anthropic', note: 'Claude for Open Source Program' },
  { title: 'HCI Lab, University of Ghana', note: 'Lead Researcher, Northern Languages' },
]

/** "At a glance" report grid. Each figure says what it measures. */
export const glance: Metric[] = [
  { label: 'Automated tests behind Nexus', value: '2,000', unit: '+' },
  { label: 'Hours of Kusaal speech, released openly', value: '81.7', unit: 'h' },
  { label: 'Parallel sentence pairs built', value: '48,000', unit: '+' },
  { label: 'BLEU gained, English to Kusaal, on the Wikipedia benchmark', value: '12.8' },
  { label: 'Ghanaian languages in one ASR model', value: '42' },
  { label: 'Languages in the live speech service', value: '6' },
  { label: 'Tests on Mabia AI (backend and frontend)', value: '297' },
  { label: 'Tests on Farm to Market', value: '170' },
]

/** The partner call to action. */
export const partner = {
  heading: 'Help take this from working prototypes to the people they are built for.',
  asks: [
    { title: 'Fund', body: 'Field testing of Nexus with blind and low-vision users, with honoraria for testers.' },
    { title: 'Pilot', body: 'Mabia AI with a CHPS zone or health NGO, or Nexus with a disability organisation.' },
    { title: 'Collaborate', body: 'Community-owned speech data and models for the Mabia languages of Northern Ghana.' },
  ],
}

/** Figures on the home page. Each label names what it was measured on. */
export const headlineMetrics: Metric[] = [
  { label: 'Hours of Kusaal speech, released', value: '81.7' },
  { label: 'Parallel sentence pairs built', value: '48,000', unit: '+' },
  { label: 'BLEU ks→en, Kusaal Wikipedia benchmark', value: '47.73' },
  { label: 'Ghanaian languages, one ASR model', value: '42' },
]

/**
 * Provenance of the ~48,000-pair corpus, for the stacked-bar visual:
 * the v4 corpus (34,568 pairs, grown from 32,589 with back-translation)
 * plus the 13,659 pairs mined from Kusaal Wikipedia (8,268 gold, 5,391
 * silver). Shares are percentages of the 48,227 total.
 */
export const corpusTotalLabel = '~48,000 pairs'

export const corpusSources = [
  { name: 'Original corpus (v4)', share: 71.7 },
  { name: 'Wikipedia harvest (gold)', share: 17.1 },
  { name: 'Wikipedia harvest (silver)', share: 11.2 },
]
