export const personalInfo = {
  name: 'Prince Nasamu Alhassan',
  firstName: 'Prince Nasamu',
  lastName: 'Alhassan',
  title: 'Data Scientist & Python Developer',
  tagline: 'Building tools for languages that matter.',
  email: 'pnalhassan@gmail.com',
  location: 'Accra, Ghana',
  hometown: 'Bawku, Northern Ghana',
  university: 'University of Ghana, Legon',
  degree: 'BSc Mathematical Sciences with Computer Science',
  graduationYear: '2029',
  gpa: '4.0',
  yearsOfCoding: '3+',
  bio: [
    "I'm Prince Nasamu Alhassan. I study Mathematical Sciences with Computer Science at the University of Ghana, Legon — currently holding a 4.0.",
    "What pulls me toward data science isn't the dashboards or the buzzwords. It's that you can take a language like Kusaal — the one I grew up speaking in Bawku, the one most models can't read a sentence of — and turn it into training data, into translation tools, into something that doesn't quietly disappear. Math and code stop feeling abstract the moment you aim them at a problem no one big enough is paying attention to.",
    "Outside of that: I drum and run sound for my church choir. I believe good ideas should travel — that's partly why I build in public.",
  ],
}

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/NasamuAlhassan', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/alhassan-prince', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/PrinceAlha50083', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com/prince_melanin', icon: 'instagram' },
  { name: 'Telegram', url: 'https://t.me/AlhassanNasamu', icon: 'send' },
]

export const skills = {
  Languages: [
    { name: 'Python', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML & CSS', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Beginner' },
  ],
  'Data Science': [
    { name: 'Pandas', level: 'Advanced' },
    { name: 'NumPy', level: 'Advanced' },
    { name: 'Scikit-learn', level: 'Intermediate' },
    { name: 'Matplotlib', level: 'Intermediate' },
    { name: 'Seaborn', level: 'Intermediate' },
    { name: 'Statistics', level: 'Advanced' },
    { name: 'Machine Learning', level: 'Intermediate' },
  ],
  'Tools & Platforms': [
    { name: 'Power BI', level: 'Intermediate' },
    { name: 'Excel', level: 'Advanced' },
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'Next.js', level: 'Intermediate' },
    { name: 'Supabase', level: 'Beginner' },
    { name: 'VS Code', level: 'Advanced' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'CampusLink',
    description:
      'A full-stack platform built specifically for students at the University of Ghana — connecting students, organizing campus resources, and streamlining communication across the community.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/NasamuAlhassan/campuslink',
    live: null as string | null,
    image: null as string | null,
    badge: 'Full-Stack',
    featured: true,
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A real-time weather application that fetches live data from an open weather API, displaying current conditions, forecasts, and location-based results with a clean, responsive UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/NasamuAlhassan',
    live: null as string | null,
    image: '/Weather.jpg',
    badge: 'Web Dev',
    featured: false,
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Internship Projects',
    description:
      'Data analysis and business intelligence work from internship experience — including data cleaning pipelines, interactive dashboards, and reports that drove real decisions.',
    tags: ['Python', 'Power BI', 'Excel', 'Pandas'],
    github: 'https://github.com/NasamuAlhassan',
    live: null as string | null,
    image: '/BI-Dash.png',
    badge: 'Analytics',
    featured: false,
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Forge',
    description:
      'Something in the works. Details coming soon.',
    tags: [],
    github: 'https://github.com/NasamuAlhassan',
    live: null as string | null,
    image: null as string | null,
    badge: 'Coming Soon',
    featured: false,
    comingSoon: true,
  },
]

export const timeline = [
  {
    year: '2026 — Present',
    title: 'BSc Mathematical Sciences with Computer Science',
    org: 'University of Ghana, Legon',
    description:
      'Currently holding a 4.0 GPA. Focused on mathematical modelling, algorithms, data structures, and applied computing. First Class standing.',
    type: 'education',
  },
  {
    year: '2024 — 2025',
    title: 'Data & Analytics Internship',
    org: 'Industry Experience',
    description:
      'Worked on real-world data projects — cleaning datasets, building Power BI dashboards, and delivering actionable insights to stakeholders.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Built CampusLink',
    org: 'Personal Project',
    description:
      'Developed a full-stack platform for UG students using Next.js, TypeScript, and Supabase — from idea to deployed product.',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Started Building in Public',
    org: 'Self-directed',
    description:
      'Began learning Python, data analysis, and web development. Built first projects and started sharing work on GitHub.',
    type: 'milestone',
  },
]

export const certifications = [
  { title: 'Google Data Analytics', issuer: 'Google / Coursera', status: 'planned' },
  { title: 'IBM Data Science Professional', issuer: 'IBM / Coursera', status: 'planned' },
  { title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', status: 'planned' },
  { title: 'Python for Everybody', issuer: 'University of Michigan', status: 'planned' },
]

export const stats = [
  { value: '4.0', label: 'GPA' },
  { value: '3+', label: 'Years Coding' },
  { value: '4+', label: 'Projects' },
  { value: '2029', label: 'Graduating' },
]
