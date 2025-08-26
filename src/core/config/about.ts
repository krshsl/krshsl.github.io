/* Copyright Nintendo - all pokemon icons */
export const experienceData = [
  {
    id: 1,
    company: "IntegrateBPD",
    role: "Full-Stack Developer Intern",
    duration: "Sep 2025 - Dec 2025 (Expected)",
    description: [
      "Developing a full-stack healthcare application to support BPD patients",
      "Designed scalable system architecture and OpenAPI specifications, accelerating development sprints by 1–2 weeks",
      "Developed robust database schema and optimized data workflows to support growth and performance",
      "Enhanced application security by moving JWT logic to the backend and enforcing strict compliance, eliminating XSS vulnerabilities entirely",
    ],
    tech: [
      "React",
      "Java Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS (Lambda, Cognito)",
    ],
    link: "https://integratebpd.com/",
    icon: "/pokemons/ralts.png",
  },
  {
    id: 2,
    company: "Rutgers University",
    role: "Part-Time Lecturer",
    duration: "Sep 2024 - Dec 2025 (Anticipated)",
    description: [
      "Taught Systems Programming, Internet Technology, and Intro to AI",
      "Covered networking, cache optimizations, and Bayesian logic",
      "Mentored 50+ students in debugging, design, and systems thinking",
    ],
    tech: ["C", "Python", "Networks", "AI Fundamentals"],
    link: "https://www.cs.rutgers.edu/",
    icon: "/pokemons/bulbasaur.png",
  },
  {
    id: 3,
    company: "Zoho Corporation",
    role: "Senior Software Development Engineer",
    duration: "Oct 2022 - Dec 2023",
    description: [
      "Led migration of SOAR core logic into a standalone agent",
      "Built a multithreaded task execution system for business logic execution",
      "Created an RPC wrapper to simplify protocol usage across internal teams",
      "Implemented a rollback mechanism to prevent DB corruption during failed upgrades",
    ],
    tech: ["C++", "Java", "Multithreading", "RPC", "System Design"],
    link: "https://www.zohocorp.com/",
    icon: "/pokemons/charizard.png",
  },
  {
    id: 4,
    company: "Zoho Corporation",
    role: "Software Development Engineer",
    duration: "Jul 2020 - Oct 2022",
    description: [
      "Migrated the SNMP framework from Java to C++, achieving a 39x performance boost",
      "Integrated SNMPv3 encryption and authentication to secure log collection",
      "Redesigned the log collection system for modular and extensible integration",
    ],
    tech: ["C++", "SNMP", "Network Security", "Ember.JS", "Java Apache Tomcat"],
    link: "https://www.zohocorp.com/",
    icon: "/pokemons/charmeleon.png",
  },
  {
    id: 5,
    company: "Zoho Corporation",
    role: "Software Development Engineer - Trainee",
    duration: "Jan 2020 - Jul 2020",
    description: [
      "Built a universal HTML-to-PDF converter for product help docs, adopted across teams",
      "Redesigned documentation UI and added search indexing to improve usability",
    ],
    tech: ["Java", "Search Indexing", "Frontend UI"],
    link: "https://www.zohocorp.com/",
    icon: "/pokemons/charmander.png",
  },
];

export const projectData = [
  {
    id: 1,
    name: "Pokédex Portfolio",
    description: [
      "Personal portfolio styled as a Pokédex",
      "Experience and projects presented as Pokédex entries",
      "Navigation modeled after Pokémon game menus",
      "Includes trainer-card style About Me and theme customization options",
      "Responsive design optimized for desktop and mobile",
      "Hidden Easter egg achievements that unlock playful surprises",
    ],
    tech: ["React", "NES.css", "SCSS", "Piskel"],
    tags: ["Frontend", "Portfolio"],
    link: "https://krshsl.github.io",
    repo: "https://github.com/krshsl",
    icon: "/pokemons/mew.png",
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
    tech: [
      "FastAPI",
      "React",
      "Redis",
      "MongoDB",
      "Docker",
      "AWS (EC2)",
      "Vercel",
    ],
    tags: ["AI", "Full-Stack", "Cloud", "NoSQL", "Team Project"],
    link: "https://smart-doc-finder.vercel.app/login",
    websiteName: "Smart Doc Finder",
    repo: "https://github.com/krshsl/smart-doc-finder",
    post: "https://dev.to/pujasridhar/what-if-your-cloud-storage-had-wings-2j4h",
    icon: "/pokemons/dratini.png",
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
    icon: "/pokemons/ditto.png",
  },
  {
    id: 4,
    name: "Kernel Development Projects",
    description: [
      "Built a cooperative scheduler allowing tasks to yield or sleep voluntarily",
      "Extended page fault handling for faster access to contiguous memory pages",
    ],
    tech: ["C", "Linux", "kernel", "OS"],
    tags: [
      "Systems",
      "Kernel",
      "Low-Level",
      "University Project",
      "Advanced OS",
    ],
    repo: "https://github.com/krshsl/cs519-sp25",
    icon: "/pokemons/porygon.png",
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
    icon: "/pokemons/magnemite.png",
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
    icon: "/pokemons/mr-mime.png",
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
    icon: "/pokemons/meowth.png",
  },
];

export const aboutData = {
  id: 1,
  name: "Krishna Sathyamurthy",
  title: "Fullstack AI Engineer",
  bio: `
Krishna Sathyamurthy is a software developer and graduate student at Rutgers University, graduating in December 2025. He specializes in full-stack engineering, distributed systems, and developing AI-driven tools. With over 4 years of professional experience at Zoho Corporation and academic projects spanning systems to LLMs, he brings a mix of industry-proven engineering and curiosity-driven research.

Some highlights:
  - Migrated a legacy SNMP framework to C++ with a 39x performance boost
  - Built distributed schedulers, RPC wrappers, and rollback systems for production environments
  - Developed a cloud storage platform with AI-powered semantic search (Redis AI Challenge)
  - Created lightweight frontend apps such as the one you're currently reading
  - Designed and taught undergraduate CS courses on systems, networking, and AI fundamentals

He is actively seeking full-time Software Engineering opportunities starting Spring 2026 in full-stack, systems, or AI development—roles where he can design efficient systems and build intelligent, user-focused products.
  `,
  skills: [
    {
      category: "Languages",
      technologies: [
        "C++",
        "C",
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
        "NoSQL",
      ],
    },
    {
      category: "AI & Machine Learning",
      technologies: [
        "TensorFlow",
        "LLMs (LLaMA)",
        "Semantic Search (FAISS, embeddings)",
        "Vector Databases (Redis, MongoDB)",
        "NLP",
      ],
    },
    {
      category: "Full-Stack Development",
      technologies: [
        "React",
        "Java Spring Boot",
        "FastAPI",
        "Angular",
        "Flask",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis (caching & AI)",
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        "AWS (EC2, Lambda, Cognito)",
        "Docker (docker & docker-compose)",
        "Vercel",
        "CI/CD",
      ],
    },
    {
      category: "Systems & Networking",
      technologies: [
        "Multithreading",
        "System Design",
        "RPC (Linux SSH, Windows APIs)",
        "Linux Kernel",
        "Network Security",
      ],
    },
  ],
  education: [
    {
      id: 1,
      university: "Rutgers University",
      degree: "Master of Science, Computer Science",
      duration: "Jan 2024 - Dec 2025",
      gpa: 3.85,
      description: [
        "Coursework spanning foundational and advanced topics in computer science.",
        "Focused on low-level systems, distributed architectures, and performance optimization.",
        "Explored the integration of AI and machine learning into systems-level projects.",
        "Collaborated on both team-based and individual projects to gain practical experience.",
      ],
      tech: ["C++", "Java", "Python", "Docker", "SQL", "Git"],
      link: "https://www.cs.rutgers.edu/",
      icon: "/pokemons/kadabra.png",
    },
    {
      id: 2,
      university: "Sastra University",
      degree: "Bachelor of Technology, Mechanical Engineering",
      duration: "Jul 2016 - Jun 2020",
      gpa: 6.67,
      description: [
        "Built a strong foundation in engineering principles and analytical problem-solving.",
        "Gained early exposure to programming and systems analysis through internships.",
      ],
      link: "https://mech.sastra.edu/",
      icon: "/pokemons/abra.png",
    },
  ],
  resumeLink:
    "https://drive.google.com/file/d/1H2jlBAXOO7hrbI7Oqa2jblEarVDFSdvP",
  icon: "/pokemons/pikachu.png",
};
