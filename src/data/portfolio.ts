// src/data/portfolio.ts — single source of truth derived from Info.md

export const identity = {
  fullName: 'Syed Aakib Hossain',
  displayName: 'Syed Aakib Hossain.',
  tagline: 'I build real-time & AI-powered web apps.',
  role: 'CSE Student (AI & ML) · Full-Stack + ML Developer',
  logoMark: '<SAH/>',
  location: 'India',
  availability: 'Open to internships (remote or on-site)',
};

export const contact = {
  email: 'syedaakibhossain@gmail.com',
  phone: '+91 97491 56995',
  github: 'https://github.com/syedaakibhossain-prog',
  linkedin:
    'https://www.linkedin.com/in/syed-aakib-hossain-657b7b383?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

export const about = {
  sectionTitle: '01. About Me',
  paragraphs: [
    `I'm a Computer Science student specializing in <strong>Artificial Intelligence & Machine Learning</strong>, passionate about building systems that are both intelligent and production-ready.`,
    `I've independently designed and deployed two full-stack applications — a <strong>real-time chat platform</strong> with WebSocket delivery and a <strong>content-based movie recommender</strong> powered by NLP and cosine similarity. Both are live and open-sourced.`,
  ],
  focusList: [
    'Async backend architecture with <strong>FastAPI</strong> & <strong>SQLAlchemy</strong>',
    'Real-time systems with <strong>WebSockets</strong> and optimistic UI',
    'Applied ML — NLP pipelines, vectorization, similarity ranking',
    'Production concerns: auth, rate limiting, caching, deployment',
  ],
  pullQuote:
    "I'm currently looking for an <strong>internship</strong> where I can contribute to real products and grow alongside experienced engineers.",
};

export interface SkillCategory {
  icon: string;
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    icon: '⚡',
    category: 'Backend',
    skills: [
      'Python',
      'FastAPI',
      'Uvicorn',
      'SQLAlchemy 2 (async)',
      'REST APIs',
      'WebSockets',
      'JWT Authentication',
      'Pydantic',
    ],
  },
  {
    icon: '🎨',
    category: 'Frontend',
    skills: ['React 19', 'TypeScript', 'Vite', 'React Router v7', 'Zustand', 'Tailwind CSS'],
  },
  {
    icon: '🧠',
    category: 'AI / ML',
    skills: [
      'scikit-learn',
      'pandas',
      'scipy',
      'nltk',
      'NLP',
      'CountVectorizer',
      'Cosine Similarity',
      'Porter Stemming',
    ],
  },
  {
    icon: '🛠️',
    category: 'Data & Ops',
    skills: ['Redis', 'SQLite', 'aiosqlite', 'httpx (async)', 'Git', 'Vercel', 'Render'],
  },
];

export interface Project {
  label: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    label: 'Featured Project',
    title: 'Chatify',
    subtitle: 'Real-Time Chat Application',
    image: '/assets/chatify.png',
    imageAlt: 'Chatify — Real-Time Chat UI screenshot',
    reverse: false,
    description:
      'Full-stack one-on-one messaging platform with instant WebSocket delivery, optimistic UI updates, live typing indicators, and read receipts. Backend is fully async with Redis-backed rate limiting on every endpoint.',
    highlights: [
      'WebSocket fan-out manager: <code>user_id → [WS]</code>, <code>conversation_id → {user_id}</code>',
      'JWT auth via HTTP-only cookies with access + refresh rotation',
      'Redis sliding-window rate limiter (login: 5/min, register: 3/hr)',
      'Async SQLAlchemy 2 + aiosqlite — zero thread blocking',
      'Optimistic rendering with <code>temp_id → message:ack</code> reconciliation',
    ],
    techStack: ['FastAPI', 'React 19', 'TypeScript', 'WebSockets', 'Redis', 'SQLAlchemy', 'Tailwind', 'sqlite (in dev)', 'postgresql (in prod)'],
    links: [
      { label: 'Live Demo', href: 'https://chatify-lime.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/syedaakibhossain-prog/Chatify' },
    ],
  },
  {
    label: 'Featured Project',
    title: 'CineMatch',
    subtitle: 'AI-Powered Movie Recommender',
    image: '/assets/cinmatch.png',
    imageAlt: 'CineMatch — AI Movie Recommender UI screenshot',
    reverse: true,
    description:
      'Content-based recommendation engine that returns 5 personalized movies per query, with live posters from TMDB. Trained on TMDB 5000 dataset using a custom NLP pipeline and cosine similarity ranking.',
    highlights: [
      'NLP pipeline: tag construction → Porter stemming → CountVectorizer (5K features)',
      'Cosine similarity over sparse matrix — magnitude-independent ranking',
      'Concurrent poster fetching with <code>asyncio.gather</code> + <code>httpx</code>',
      'Atomic Lua sliding-window rate limiter in Redis (100 req/60s)',
      'Pydantic input sanitization protecting the ML layer',
    ],
    techStack: ['FastAPI', 'scikit-learn', 'nltk', 'Redis', 'httpx', 'pandas', 'Vanilla JS'],
    links: [
      { label: 'Live Demo', href: 'https://cin-match-six.vercel.app' },
      { label: 'API', href: 'https://cinmatch.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/syedaakibhossain-prog/CinMatch' },
    ],
  },
];

export const education = {
  sectionTitle: '04. Education',
  degree: 'B.Tech — Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  status: 'Currently Pursuing',
  institution: 'SEACOM SKILLS UNIVERSITY',
  graduation: '2029',
  location: 'India',
};

export const contactSection = {
  eyebrow: "05. What's Next?",
  heading: "Let's Build Something.",
  body: "I'm actively seeking an internship in software engineering or applied ML. Whether you have a role, a project idea, or just want to connect — my inbox is always open.",
  cta: { label: 'Say Hello', href: 'mailto:syedaakibhossain@gmail.com' },
};
