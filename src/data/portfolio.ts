export type Project = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Axioma Scholar",
    eyebrow: "Adaptive learning platform",
    description:
      "A production math-learning platform that combines guided practice, adaptive progression, mastery tracking, and student analytics in one responsive experience.",
    impact:
      "Built independently across product strategy, UI/UX, frontend, backend, deployment, authentication, accessibility, and a production database containing 350,000+ questions.",
    stack: ["Next.js", "TypeScript", "Go", "SQL", "Docker", "Vercel"],
    href: "https://axiomascholar.com",
    featured: true,
  },
  {
    number: "02",
    title: "MyCare AI",
    eyebrow: "Cross-platform health navigation",
    description:
      "A mobile-first healthcare navigator for finding nearby services, public-health alerts, physician availability, and chatbot-guided support.",
    impact:
      "Delivered a 13,000+ line Flutter application validated across Android, iOS, and web, with GPS search, Firebase authentication, scraping pipelines, and AI-assisted queries.",
    stack: ["Flutter", "Python", "Flask", "Firebase", "LangChain", "DeepSeek"],
  },
  {
    number: "03",
    title: "TrueCost Auto",
    eyebrow: "Canadian ownership-cost calculator",
    description:
      "A transparent vehicle cost-of-ownership tool that estimates the real monthly and long-term cost of buying and operating a car in Canada.",
    impact:
      "Combines live AutoTrader market data with province-specific taxes, insurance, fuel, maintenance, repairs, and depreciation modelling.",
    stack: ["Next.js", "TypeScript", "Zod", "Tailwind", "Apify"],
  },
  {
    number: "04",
    title: "Pulse MCQ Studio",
    eyebrow: "Private browser-based study tool",
    description:
      "A lightweight app that transforms Excel question banks into interactive practice exams without uploading student data to a server.",
    impact:
      "Supports single- and multi-answer questions, explanations, instant scoring, and reusable spreadsheet templates entirely in the browser.",
    stack: ["Next.js", "React", "Tailwind", "SheetJS"],
  },
];

export const experience = [
  {
    period: "2025 - Present",
    role: "Lead Full-Stack Developer",
    company: "Axioma Scholar",
    summary:
      "Founded and independently built the product, engineering platform, database, adaptive systems, infrastructure, and user experience.",
  },
  {
    period: "2025 - 2026",
    role: "IT Support Analyst Student",
    company: "The City of Calgary",
    summary:
      "Built and modernized public-sector applications, including a notification experience serving Calgary's population of roughly 1.6 million residents.",
  },
  {
    period: "2024 - 2025",
    role: "AI, IT & Infrastructure Developer",
    company: "256 Solutions",
    summary:
      "Developed LLM systems, deployment tooling, data migrations, cybersecurity monitoring, Wazuh architecture, and multi-client log infrastructure.",
  },
];

export const capabilities = [
  {
    title: "Product engineering",
    body: "I turn an idea into a complete, usable product - from interface design and frontend architecture to APIs, data models, authentication, deployment, and iteration.",
    skills: "React, Next.js, TypeScript, Go, Python, C#/.NET, SQL",
  },
  {
    title: "AI-enabled systems",
    body: "I build practical AI experiences around real workflows, including RAG applications, fine-tuned models, dataset pipelines, agentic tools, and adaptive educational systems.",
    skills: "LLMs, LangChain, Ollama, Unsloth, RAG, fine-tuning",
  },
  {
    title: "Cloud & infrastructure",
    body: "I deploy, monitor, and support software beyond localhost, with experience spanning containers, Linux, cloud platforms, CI/CD, SIEM tooling, and network log architecture.",
    skills: "Docker, Azure, DigitalOcean, Vercel, Linux, Wazuh",
  },
];
