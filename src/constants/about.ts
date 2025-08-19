export const experienceData = [
  {
    id: 1,
    company: "IntegrateBPD",
    role: "Full-Stack Developer Intern",
    duration: "Sep 2025 – Dec 2025 (Expected)",
    description: [
      "Developing a full-stack healthcare application to support BPD patients",
      "Built role-based access system with user, moderator, and admin privileges",
      "Implemented real-time chat support for patient–moderator communication",
    ],
    tech: ["React", "Java Spring Boot", "PostgreSQL", "Docker", "AWS"],
    link: "https://integratebpd.com/",
    icon: "💼",
  },
  {
    id: 2,
    company: "Rutgers University",
    role: "Part-Time Lecturer",
    duration: "Sep 2024 – Dec 2025 (Anticipated)",
    description: [
      "Taught Systems Programming, Internet Technology, and Intro to AI",
      "Covered networking, cache optimizations, and Bayesian logic",
      "Mentored 50+ students in debugging, design, and systems thinking",
    ],
    tech: ["C", "Python", "Networks", "AI Fundamentals"],
    link: "https://www.cs.rutgers.edu/",
    icon: "🎓",
  },
  {
    id: 3,
    company: "Zoho Corporation",
    role: "Senior Software Development Engineer",
    duration: "Oct 2022 – Dec 2023",
    description: [
      "Led migration of SOAR core logic into a standalone agent",
      "Built a multithreaded task execution system for business logic execution",
      "Created an RPC wrapper to simplify protocol usage across internal teams",
      "Implemented a rollback mechanism to prevent DB corruption during failed upgrades",
    ],
    tech: ["C++", "Java", "Multithreading", "RPC", "System Design"],
    link: "https://www.zohocorp.com/",
    icon: "💼",
  },
  {
    id: 4,
    company: "Zoho Corporation",
    role: "Software Development Engineer",
    duration: "Jul 2020 – Oct 2022",
    description: [
      "Migrated the SNMP framework from Java to C++, achieving a 39x performance boost",
      "Integrated SNMPv3 encryption and authentication to secure log collection",
      "Redesigned the log collection system for modular and extensible integration",
    ],
    tech: ["C++", "SNMP", "Network Security", "Ember.JS", "Java Apache Tomcat"],
    link: "https://www.zohocorp.com/",
    icon: "💼",
  },
  {
    id: 5,
    company: "Zoho Corporation",
    role: "Software Development Engineer - Trainee",
    duration: "Jan 2020 – Jul 2020",
    description: [
      "Built a universal HTML-to-PDF converter for product help docs, adopted across teams",
      "Redesigned documentation UI and added search indexing to improve usability",
    ],
    tech: ["Java", "Search Indexing", "Frontend UI"],
    link: "https://www.zohocorp.com/",
    icon: "💼",
  },
];

export const projectData = [
  {
    id: 1,
    name: "Pokédex Portfolio (Current Website)",
    description: [
      "Personal portfolio styled as a retro Pokédex",
      "Experience and projects presented as Pokédex entries",
      "Navigation modeled after Pokémon game menus",
      "Includes trainer-card style About Me and theme customization options",
    ],
    tech: ["React", "NES.css", "SCSS"],
    tags: ["Frontend", "Portfolio"],
    link: "https://your-portfolio-link.com",
    repo: "https://github.com/krshsl",
    icon: "🎮",
  },
  {
    id: 2,
    name: "Smart Doc Finder",
    description: [
      "Developed a cloud storage app with AI-powered semantic search, similar to Google Drive",
      "Implemented Redis for vector search and caching, enabling semantic file discovery",
      "Used MongoDB for NoSQL storage to handle flexible user document data",
      "Automated Docker build setup for dev/prod and streamlined hosting pipeline",
      "Deployed full flow with FastAPI backend on AWS and React frontend on Vercel",
    ],
    tech: ["FastAPI", "React", "Redis", "MongoDB", "Docker", "AWS", "Vercel"],
    tags: ["AI", "Full-Stack", "Cloud", "NoSQL", "Team Project"],
    link: "https://smart-doc-finder.vercel.app/login",
    websiteName: "Smart Doc Finder",
    repo: "https://github.com/krshsl/smart-doc-finder",
    post: "https://dev.to/pujasridhar/what-if-your-cloud-storage-had-wings-2j4h",
    icon: "🗂️",
  },
  {
    id: 3,
    name: "Emoji Diary",
    description: [
      "Frontend-only React app for mood tracking and journaling",
      "Stores user data in browser memory to remain lightweight and private",
      "Provides calendar-based navigation to revisit past entries",
      "Responsive design optimized for desktop and mobile",
    ],
    tech: ["React"],
    tags: ["Frontend", "Lightweight", "UX/UI"],
    link: "https://emodiary.vercel.app/",
    repo: "https://github.com/krshsl/emo_diary",
    icon: "📓",
  },
  {
    id: 4,
    name: "Kernel Development Projects",
    description: [
      "Built a cooperative scheduler allowing tasks to yield or sleep voluntarily",
      "Extended page fault handling for faster access to contiguous memory pages",
    ],
    tech: ["C", "Linux", "OS"],
    tags: [
      "Systems",
      "Kernel",
      "Low-Level",
      "University Project",
      "Advanced OS",
    ],
    repo: "https://github.com/krshsl/cs519-sp25",
    icon: "👾",
  },
  {
    id: 5,
    name: "SQL-to-Text Generator",
    description: [
      "Team project using Fireworks AI with LLaMA to convert SQL queries to natural language",
      "Fine-tuned the model on SQL query structures for domain-specific accuracy",
      "Developed query selection methods to pick optimal candidate outputs",
      "Evaluated accuracy using similarity metrics against ground truth",
    ],
    tech: ["Python", "LLaMA", "Fireworks AI"],
    tags: ["AI", "LLM", "Team Project", "University Project", "Advanced DBMS"],
    repo: "https://github.com/krshsl/sql_to_text",
    icon: "📝",
  },
  {
    id: 6,
    name: "Traffic Incident Prediction",
    description: [
      "Predicted traffic incidents using public datasets enriched with climate and sunlight data",
      "Integrated climate APIs to fetch historical weather records for reliable predictions",
      "Implemented LSTM model handling temporal, geo, and climate-based features",
      "Generated hourly predictions in 5km hexagonal regions",
      "Produced hotspot clusters, accident trends, and live heatmaps of traffic accidents",
    ],
    tech: ["Python", "TensorFlow", "LSTM", "APIs"],
    tags: [
      "AI",
      "Research",
      "Prediction",
      "University Project",
      "Ubiquitous Computing",
    ],
    repo: "https://github.com/krshsl/incident_prediction",
    icon: "🚦",
  },
  {
    id: 7,
    name: "Enterprise Auction System",
    description: [
      "Built a full-stack marketplace with Angular, Flask, and MySQL",
      "Used MySQL events and triggers to notify users of new products and auto-close bids daily at midnight",
      "Reduced transactional clashes and complexity with automated DB methods",
      "Built an analytics dashboard for tracking engagement and business metrics",
    ],
    tech: ["Angular", "Flask", "MySQL"],
    tags: [
      "Full-Stack",
      "Database",
      "Microservices",
      "Team Project",
      "University Project",
      "DBMS",
    ],
    repo: "https://github.com/markdoughten/auction-website",
    icon: "☀️",
  },
];

export const aboutData = {
  name: "Krishna Sathyamurthy",
  title: "Fullstack AI Engineer",
  bio: `
  I'm a software developer and graduate student at Rutgers University, graduating in December 2025. I specialize in full-stack engineering, distributed systems, and AI-driven tools. With 4+ years of professional experience at Zoho Corporation and academic projects spanning systems to LLMs, I bring industry-proven engineering and curiosity-driven research together.

  Some highlights:
    - Migrated a legacy SNMP framework to C++ with a 39x performance boost
    - Built distributed schedulers, RPC wrappers, and rollback systems for production
    - Developed a cloud storage platform with AI-powered semantic search (Redis AI Challenge)
    - Created lightweight frontend apps like Emoji Diary and a retro Pokédex-themed portfolio
    - Designed and taught undergraduate CS courses covering systems, networking, and AI fundamentals

  I'm actively seeking Fulltime Software Engineering Spring 2026 opportunities in full-stack, systems, or AI development, where I can design efficient systems and build intelligent, user-focused products.
  `,
};
