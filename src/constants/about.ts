export const experienceData = [
  {
    id: 1,
    company: "Rutgers University",
    role: "Part Time Lecturer (PTL)",
    duration: "Sep 2024 - May 2025",
    description:
      "Taught Systems Programming, Internet Technology, and Intro to AI, covering topics from networking basics to cache optimization and Bayesian logic while emphasizing clean code practices. Designed project-heavy coursework and mentored 50+ students, guiding them through deep technical debugging and architectural strategies.",
    icon: "🎓",
  },
  {
    id: 2,
    company: "Zoho Corporation",
    role: "Senior Software Development Engineer",
    duration: "Oct 2022 - Dec 2023",
    description:
      "Led migration of SOAR core logic into a lightweight, standalone agent, ensuring robust system performance and secure development practices. Engineered a multi-consumer task execution system using a multithreaded architecture to streamline business logic in an agile environment. Created an RPC wrapper abstracting protocol differences, enhancing code maintainability and integrating microservices principles. Designed a rollback mechanism to detect DB corruption during failed upgrades and restore systems, reinforcing data integrity and operational stability.",
    icon: "💼",
  },
  {
    id: 3,
    company: "Zoho Corporation",
    role: "Software Development Engineer",
    duration: "Jul 2020 - Oct 2022",
    description:
      "Rewrote the SNMP framework in C++, replacing legacy Java code and achieving a 39x performance boost. Integrated SNMPv3 to add encryption and authentication support, enabling secure log collection in the cloud. Optimized Log Collection framework, reducing complexity and improving maintainability.",
    icon: "💼",
  },
  {
    id: 4,
    company: "Zoho Corporation",
    role: "Software Development Engineer - Trainee",
    duration: "Jan 2020 - Jul 2020",
    description:
      "Built a universal HTML-to-PDF conversion tool across Manage Engine products to serve customer help docs. Redesigned help documentation UI and added advanced search indexing to improve customer experience.",
    icon: "💼",
  },
];

export const projectData = [
  {
    id: 1,
    name: "Kernel Development Projects",
    description:
      "Developed a custom functionality to yield system resources by a process to allow another process to complete. Developed custom page tables to track contiguous PFNs to VMAs to perform faster TLB access.",
    tech: ["C", "Linux"],
    icon: "👾",
  },
  {
    id: 2,
    name: "SQL-to-Text Generator",
    description:
      "Created fine-tuned LLM models to generate responses and select queries from existing LLMs. Candidate-Generators were used to generate multiple solution candidates. Selection models resulted in a response that had 95% accuracy for > 75% cosine similarity to ground truth.",
    tech: ["Python", "PyTorch"],
    icon: "📝",
  },
  {
    id: 3,
    name: "Enterprise Auction System",
    description:
      "Architected scalable marketplace platform using Angular, Python Flask, and PostgreSQL with microservices architecture. Developed analytics dashboard for tracking key business metrics and user engagement patterns.",
    tech: ["Angular", "Python", "PostgreSQL"],
    icon: "☀️",
  },
];

export const aboutData = {
  name: "Krishna Sathyamurthy",
  title: "Fullstack AI Engineer",
  bio: `
  I’m a software developer and graduate student at Rutgers University, graduating in December 2025. I specialize in backend systems, distributed architectures, and AI-driven tools. With 4+ years of professional experience at Zoho Corporation and hands-on academic research, I bring a mix of industry-tested engineering and curiosity-driven exploration.

  Some of my highlights:
  - Rewrote a legacy SNMP framework in C++ for a 39x performance boost
  - Built distributed schedulers, secure RPC wrappers, and rollback systems for production environments
  - Fine-tuned LLMs to translate SQL queries into natural language with 95% accuracy
  - Designed and taught undergraduate CS courses covering systems, networking, and AI

  I’m currently looking for full-time SDE roles starting Spring 2026. My focus is on roles where I can design efficient systems, solve hard problems, and help shape products from the ground up.
  `,
  avatar: "https://placehold.co/96x96/000000/ffffff?text=K&font=pixel",
};
