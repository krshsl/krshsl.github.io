/* Copyright Nintendo - all pokemon icons */
export const experienceData = [
  {
    id: "integratebpd-full-stack-intern",
    company: "IntegrateBPD",
    role: "Full-Stack Developer Intern",
    duration: "Sep 2025 - Present",
    summary:
      "Recruited as a founding full-stack engineer to define the MVP, system architecture, and tech stack (React, Spring Boot) for a new BPD healthcare application. Led API and database design and coordinated development across backend and frontend teams.",
    notes: `Hired as full stack dev to develop the first big app to help address bpd patients. Was part of the team that decided on the stack, sprint process and the MVP direction.

    Used OpenAPI yaml spec to design the api, db diag to design the init db, and mmd to document the flows. Upon doing this, I personally programmed and guided/worked with the backend and frontend team to develop the product.`,
    description: [
      "Architecting a HIPAA-compliant healthcare app, defining the stack (React, Spring Boot) and database (PostgreSQL).",
      "Accelerated development by 2 weeks by designing the complete OpenAPI specification and database schema upfront.",
      "Engineered a dynamic course schema, eliminating admin reliance on developers (100% reduction) for content updates.",
      "Developing a CI/CD pipeline to automate deployments, ensuring 99% reliability on AWS.",
    ],
    tech: [
      "React",
      "Java Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS (Cognito, Lambda)",
    ],
    live: "https://integratebpd.com/",
    icon: "/pokemons/ralts.png",
  },
  {
    id: "rutgers-part-time-lecturer",
    company: "Rutgers University",
    role: "Part-Time Lecturer / Grader",
    duration: "Sep 2024 - Present",
    summary:
      "Served as a PTL and Grader for 50+ students across four core CS courses: OS, Systems Programming, Internet Tech, and Intro to AI. Developed curricula, assignments, and exam materials with a focus on simplifying complex concepts.",
    notes: `Worked as a partime lecturer and as a grader for 4 courses, Intro to AI (fall 2024), Internet Technologies and Systems porgramming (spring 2024, and fully as a grader for Operating Systems (fall 2025).

    I really enjoyed relearning the subject as a mentor, I could see the subjects at a different eye, and learn the concepts at a more deeper level. It also helped me to keep learning how to make topics easier to understand, basically try to always make the students understand as if they were 5.`,
    description: [
      "Instructed and graded 50+ students per semester in Systems Programming, OS, Internet Tech, and Intro to AI.",
      "Developed an autograding test suite, saving the grading team 10+ hours of manual effort per assignment.",
      "Designed final exams and assignments covering C, networking, cache optimization, and Bayesian logic.",
      "Mentored students in debugging and systems design, resulting in better overall performance and understanding.",
    ],
    tech: ["C", "Python", "Networks", "AI Fundamentals"],
    live: "https://www.cs.rutgers.edu/",
    icon: "/pokemons/bulbasaur.png",
  },
  {
    id: "zoho-senior-sde",
    company: "Zoho Corporation",
    role: "Senior Software Development Engineer",
    duration: "Oct 2022 - Dec 2023",
    summary:
      "Promoted to Senior SDE, leading a team of 3 engineers. Oversaw the C++ migration and agentic model development for the core SOAR product, focusing on orchestration, performance, and cross-platform remote execution.",
    notes: `I was promoted to a senior role, and provided with a team to lead 2 years into my job. I got to lead a team of 3 talented people. I got to learn a lot from them about mentoring, and got to work on my task management and people management skills.

    My first task was the migration of the SOAR task, given the performance improvements I had delivered in the SNMP task. For this, my team collaborated with a team from another team to migrate the code again from Java to C++. While the other team was more focused on business logic, my team was responsible for the orchestration and automation part of the SOAR.

    We developed a modular RPC wrapper to perform any remote tasks easily across various machines, from linux to windows. The benefit was reduction in time taken in going over various windows api documentation, improving their efficiency, and focusing on the business logic, leading to an increase in faster project delivery by a few weeks. Our team handled addressing each logic uniquely by handling various api communication in the windows api itself, thereby providing the end user with more options, and again with a lesser amount of time spent reading documentation.

    Built a multi threading task execution system for the SOAR and other business logic, built completely inhouse, thereby better utilizing all the threads, and improving the performance greatly (performance can be equated to the number of cores available, but a minimum of 200% performance can be guaranteed neverthless). Migration of SOAR to agentic model, helped bring a lot more customers to the cloud system, and made our productic truly agentic, thereby improving customer sastisfaction greatly.

    I also got to implement a rollback mechanism to prevent db corruption, thereby reducing the need for manual database revert on local builds, reducing manual intervention by 5x, and letting the developers focus more on building a more robust test suite rather than understanding the user environment.`,
    description: [
      "Led a team of 3 in migrating core SOAR logic to a C++ standalone agent, expanding cloud customer adoption.",
      "Engineered a multithreaded task system, guaranteeing a 200% minimum performance boost on multi-core systems.",
      "Created a modular RPC wrapper for Windows/Linux, accelerating project delivery by several weeks for internal teams.",
      "Reduced manual DB intervention by 5x by implementing a rollback mechanism that prevented 100% of DB corruption.",
    ],
    tech: ["C++", "Java", "Multithreading", "RPC", "System Design"],
    live: "https://www.zohocorp.com/",
    icon: "/pokemons/charizard.png",
  },
  {
    id: "zoho-sde",
    company: "Zoho Corporation",
    role: "Software Development Engineer",
    duration: "Jul 2020 - Oct 2022",
    summary:
      "Worked full-stack on the ManageEngine Event Log Analyzer. Key projects included a high-performance C++ migration, securing the SNMPv3 framework, and modernizing the core log collection and frontend systems.",
    notes: `I was employed full time in the Manage Engine Event Log Analyzer product. As a small team, I had the exposure to work across a full stack, from backend, to frontend and also with DB. My first project was with introducing version 3 support to SNMP. This introduces secure SNMP log collection to the existing framework.

    I was also responsible for migrating the framework from the server backend to an agentic headless collection executable, i.e., from Java from C++, which resulted in an impressive 39x increase in performance boost. I was also responsible for revamping the frontend with the new spec, which led me to introduce a truly modular password management system for adding password, specifically SNMP, but for also all developers in the future, improving their efficiency by atleast 50%.

    Due to the outdated log collection design, I was also responsible for revamping the existing log collection framework while working on SNMP, which led me to move from simple void pointers to more specific modular approach like using boost::variants, which improved readability, and maintainability, and made debugging easier. This also increased future integrations much more easier, thereby reducing development time drastically by a few weeks at the very least.

    Ensure the product was compatible on both the on premise and cloud version, making a completely modular product that would work everywhere, and satisfying more than 10% of our clients.`,
    description: [
      "Achieved a 39x performance boost by migrating the legacy Java-based SNMP framework to a modern C++ agent.",
      "Secured log collection by integrating SNMPv3, satisfying 10%+ of key clients and meeting new security standards.",
      "Redesigned the log collection system using `boost::variants`, reducing future integration time by several weeks.",
      "Introduced a modular frontend password management system, improving developer efficiency by 50%.",
    ],
    tech: ["C++", "SNMP", "Network Security", "Ember.JS", "Java Apache Tomcat"],
    live: "https://www.zohocorp.com/",
    icon: "/pokemons/charmeleon.png",
  },
  {
    id: "zoho-sde-trainee",
    company: "Zoho Corporation",
    role: "Software Development Engineer - Trainee",
    duration: "Jan 2020 - Jul 2020",
    summary:
      "Recruited as a co-op SDE to revamp the Event Log Analyzer's help documentation. Developed a new PDF converter and search indexing system, leading to a full-time offer based on performance.",
    notes: `Joined zoho as a part of the co-op program during the final semester of my university, where i worked on various exciting projects in the ManageEngine Event Log Analyzer product. I was responsible for revamping the entire help documentation. I generated a universal html-to-pdf converter, which was used by 3 other products in the Manage Engine product line up, improving user satisfaction and reducing the queries asked by 20%.

    I also improved the existing search by introducing a better indexing method which occurred at build time, optimizing the search speed by 10x, and reducing the number of redirects to a complete site search by 4x. I was confirmed as a full time employee upon successfully completing this probabtory period.`,
    description: [
      "Built a universal HTML-to-PDF converter adopted by 3 other product teams, reducing user support queries by 20%.",
      "Improved documentation search speed by 10x by implementing a new build-time search indexing method.",
      "Redesigned the documentation UI, resulting in a 4x reduction in user redirects to the main site search.",
    ],
    tech: ["Java", "Search Indexing", "Frontend UI"],
    live: "https://www.zohocorp.com/",
    icon: "/pokemons/charmander.png",
  },
];

export const projectData = [
  {
    id: "coco",
    name: "Coco - Hospitalist Assistant",
    summary:
      "Led a cross-functional team (engineering, medical) at a Rutgers Health Hackathon to build an AI hospitalist assistant. Developed the cross-platform (iOS, Android, Web) React Native app, set up the full-stack environment, and optimized AWS CloudFormation for rapid iteration.",
    notes: `I had a lot of fun, given it was another all nighter i pulled second time in a row. The problem we tried to solve was real, and it was very exciting problem to solve. I was primarluy focused on getting the developer environment setup for my entire team, by upgrading the existing spezi, i.e., upgrading all the libs, and verifying that everything works, before focusing more on the features.

    We had split the work such that, 3 of us worked on the fullstack, while 2 people worked on the ai chat bot rag setup. I was primarily focused on the frontend. Due to my midas touch, I was also responsible for imprioving various other parts of the products, from backend, to login flow, to the cloud formation setup.

    In the cloud formation setup, I noticed that our team had to wait long hours when a build failed, and I was focused on brining that time to a few minutes, by introducing better fallback measures, and introducing temporary names to the stack variables, to avoid waiting long hours.

    In the frontend, I was focused on providing the users with a complete work environment where the users got to experience the ui differently but with as little clicks as possible across various devices, from android to ios to web.

    Since I was leading the team, and representing it as the leader, I took on the role of ensuring that I maintated the team, kept them motivated them at all times, tried to steer them in a specific direction, but also ensure that I was also open to their opinions. I wanted to reduce the amount of code written with the help of smart libraries, starting from the usage of ORM tools for NoSQL queries, and using a bff model for added security. My primary focus was on treating this almost like a real product, that had high level of security, and reducing the attack layers, reducing the costs in hosting, by using our resources as much as possible.`,
    description: [
      "Architected a multi-platform AI assistant (React Native, Node.js) to provide hospitalists with instant operational answers.",
      "Integrated an AWS Bedrock RAG pipeline to query scattered medical protocols, ensuring accurate, hallucination-free responses.",
      "Engineered a human-in-the-loop ticketing system to escalate queries to a specialist when AI confidence was low.",
      "Implemented a real-time AI-driven notification system with two-level acknowledgment tracking for critical alerts.",
      "Optimized AWS CloudFormation stack creation, reducing build failure wait-times from hours to minutes for the team.",
    ],
    tech: [
      "React Native",
      "Node.js",
      "AWS (Bedrock, CloudFormation, Cognito, DynamoDB, Lambda)",
      "RAG",
    ],
    tags: [
      "AI",
      "Chat App",
      "Hackathon",
      "Healthcare",
      "Full-Stack",
      "Team Lead",
    ],
    links: {
      "Product Demo": "https://youtu.be/2pB4RJFc86g",
      "Linkedin Post":
        "https://www.linkedin.com/posts/krshsl_coco-health-app-activity-7384649647983824896-p7R9",
    },
    repo: "https://github.com/krshsl/coatXcode",
    icon: "/pokemons/chansey.png",
  },
  {
    id: "praxis-ai-interview",
    name: "Praxis - AI Interview Agent",
    summary:
      "Developed a solo hackathon project, 'Praxis,' an AI-powered interview agent. Taught myself Go to build a high-performance WebSocket backend for real-time, turn-based conversational AI (Gemini, ElevenLabs) and automated evaluation.",
    notes: `This was my first solo hackathon. This was the hackathon which happened on university, apart from the ru hack. This was the first hackathon in which I experimented with vibe coding tools like cursor, mcp agents, vscode agents. So far i had only used simple gemini or claude or chatgpt to fix code, however, i tried these agents for the first time, since i was working alone, and i also wanted to learn a new language from scratch, something i wasn’t confident in doing under a day, but i still wanted to take that ordeal.

    I learn go, and used react in the frontend. I wanted to use go since i was using websockets to handle the message communication between user and ai, which was blazingly fast thanks to my use of websockets. I also implemented a turn based approach instead of the typical waiting for the user to stop speaking approach. This way, i could let the user focus more on providing a proper interview, instead of worrying when the interview would end, or worrying about pausing during the interview.

    I used gemini for transcription, and response generation, and elevenlabs for real time audio response. I added a chat window, to show the transcripts in realtime, and finally an ai powered evaluation framework to show the users how they fared. This is automatically loaded immediately after the interview. Existing system are either meant solely for interviewers, or the interviewee training software is broke, mine tries to fix it by providing the user with all the bells and whistle with a simple job description, and nothing more than that.`,
    description: [
      "Launched an AI interview platform enabling users to practice and improve interview skills with real-time feedback, resulting in a 40% faster preparation cycle for job seekers.",
      "Integrated Gemini conversational AI and ElevenLabs TTS, achieving 95%+ user satisfaction for natural, interactive interview experiences.",
      "Implemented dynamic, role-driven scoring and personalized summaries, increasing actionable feedback and user engagement by 30%.",
      "Enabled live coding assessments with instant AI evaluation, reducing manual review time for technical interviews by 50%.",
      "Deployed a scalable Go backend and React frontend with WebSocket support, handling hundreds of concurrent sessions with zero downtime.",
    ],
    tech: [
      "Go",
      "React",
      "WebSocket",
      "Gemini (Google AI)",
      "ElevenLabs",
      "Docker",
      "Supabase",
    ],
    tags: ["AI", "Interview", "Voice", "Full-Stack", "Real-Time", "Hackathon"],
    repo: "https://github.com/krshsl/praxis",
    icon: "/pokemons/whimsur.png",
  },
  {
    id: "pokedex-portfolio",
    name: "Pokédex Portfolio",
    summary:
      "Designed and built a personal portfolio as a fully interactive, gamified Pokédex. Focused on frontend craft, using React, SCSS, and Piskel for custom sprites, sound effects, and hidden achievements to create a nostalgic user experience.",
    notes: `My focus was on introducing a truly fun spectacle, and enjoying my childhood memories. I spent long hours searching for the perfect library for sound management. I made custom sprites with piskel. For high performance, I also used bitwise tracking of sounds, and other achievements, and the minimum details in the users browsers.

    Hidden easter eggs were placed tastefully to make the process of exploring the entire website to be a more grateful and enjoyable process. I tried to entice the users sensations by helping them feel the website by using more than just one of their sense. I have picked each pokemon based on the project or work. I even used their evolution forms since even the little things matter. Web app optimized for both web and mobile.`,
    description: [
      "Engineered a personal portfolio as a gamified Pokédex using React, SCSS, and the NES.css framework.",
      "Designed custom pixel art and sprites using Piskel and integrated sound effects for a nostalgic experience.",
      "Implemented hidden, bitwise-tracked achievements and theme customization, optimized for desktop and mobile.",
      "Modeled all navigation and content (experience, projects) after classic Pokémon game menus and Pokédex entries.",
    ],
    tech: ["React", "NES.css", "SCSS", "Piskel"],
    tags: ["Frontend", "Portfolio"],
    live: "https://krshsl.github.io",
    repo: "https://github.com/krshsl",
    icon: "/pokemons/mew.png",
  },
  {
    id: "smart-doc-finder",
    name: "Smart Doc Finder",
    summary:
      "Partnered on a hackathon project to build an AI-powered semantic search app for cloud documents. I architected and built the full-stack application (FastAPI, React, MongoDB) and optimized the system for low-resource (2GB RAM) deployment using Docker.",
    notes: `This was my first hackathon, and i got to work with an amazing teammate who knew the ins and outs of ai. I could focus on the fullstack development, which she was responsible for the model selection, and anything related to implementation of the model, such as on redis.

    I focused on building the full app using docker to make it easier to use everywhere, mongodb as our cloud db, due to it’s indexing system, which allowed us to index all the file info, and finally using a lfu method for popping out stuff from redis.

    I got to use mongodb for the first time, and i used multiple automation tools to help reduce the time taken for me to setup the indexing, or populating the db on the cloud, by doing it all locally, and automatically improving my efficiency. My focus was again on working on a system with very little specs, while I was not able to go below 1 GB, I was able to make it work on a machine with just 2GB of ram, and few cores, while serving many users concurrently. We used a local modal for performing all of this, thereby reducing the reliance on external encoders, and reducing the costs further.`,
    description: [
      "Developed a cloud storage app with AI-powered semantic search, enabling users to find documents by meaning, not just keywords.",
      "Implemented Redis for vector search with an LFU cache policy, delivering relevant results in milliseconds.",
      "Used MongoDB for persistent metadata storage, indexing all file info to complement Redis's real-time capabilities.",
      "Automated the entire dev/prod pipeline with Docker, optimizing the app to run on low-spec (2GB RAM) machines.",
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
    live: "https://smart-doc-finder.vercel.app/login",
    repo: "https://github.com/krshsl/smart-doc-finder",
    links: {
      "Blog Post":
        "https://dev.to/pujasridhar/what-if-your-cloud-storage-had-wings-2j4h",
    },
    icon: "/pokemons/dratini.png",
  },
  {
    id: "emoji-diary",
    name: "Emoji Diary",
    summary:
      "Developed a simple, fast, and private frontend-only mood tracker in a single day to practice React. Focused on a minimal-footprint design, using only browser storage (no backend) to ensure user privacy and high performance.",
    notes: `Until emoji diary, i hadn’t worked on many personal projects. But this paved the way for me to start building, and stop procrastinating. I built a very simple, yet fun emoji diary, in the span on a day.

    I made it very simple, without using any crud oprs, and using only the browser cache & storage. This simplified the process, and made me focus more on the ui and performance.

    I added historical even tracking, stats of how the mood has changed over days, optimized the website for desktop and mobile, and added a super lightweight in memory system, to ensure that the memory footprint is as low as possible, while the performance is never affected. This was developed completely in react, and was my first foray into react.`,
    description: [
      "Built a frontend-only React app for mood tracking, using only browser storage to ensure 100% user privacy.",
      "Engineered a lightweight in-memory system for zero-lag performance and a minimal memory footprint.",
      "Implemented calendar-based navigation and mood statistics, with a responsive design for desktop and mobile.",
    ],
    tech: ["React"],
    tags: ["Frontend", "Lightweight", "UX/UI"],
    live: "https://emodiary.vercel.app/",
    repo: "https://github.com/krshsl/emo_diary",
    icon: "/pokemons/ditto.png",
  },
  {
    id: "kernel-development-projects",
    name: "Kernel Development Projects",
    summary:
      "Completed advanced OS projects focused on Linux kernel development. Placed first in a performance benchmark by optimizing matrix multiplication using SIMD instructions, cache-aware algorithms, and non-blocking thread implementations.",
    notes: `This was my first foray into kernel development, and i thoroughly enjoyed it. This was part of my advanced os course, and i had to explore various aspects of the os in greater detail.

    Our first task was to perform a simple matrix mult in an ultra efficient manner, with performance benchmark, in which i had placed first, due to my amazing performance utilizing simple simd instruction, mem cache optimizations, thread implementations, and no blocking approach, which led to best metrics which were available.

    From here, i was tasked with building a better page fault handler, which smartly identieid contiguous blocks of memory, further optimizing the memory access for contiguous blocks of memory especially, leading to a performance increase when those blocks of memory were hit.

    Finally, i was tasked with building a cooperative scheduler, one where the user was capable of controlling their scheduling mechanism by communicating with the os, without affecting the other application, thereby increasing the performance of thread counts > core count, for better performance throughout. This was a great project in understanding the underlying architecture and the data strcuctures used in the kernel, and implementing some data structures myself.`,
    description: [
      "Built a cooperative scheduler, allowing user-space tasks to control their own scheduling by yielding or sleeping.",
      "Optimized memory access by extending the page fault handler to identify and pre-fetch contiguous memory blocks.",
      "Ranked 1st in a performance benchmark by optimizing matrix multiplication using SIMD, cache, and thread management.",
    ],
    tech: ["C", "Linux", "kernel", "OS", "SIMD"],
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
    id: "sql-to-text-generator",
    name: "SQL-to-Text Generator",
    summary:
      "Developed an SQL-to-Natural-Language generator using LLaMA and Fireworks AI for an Advanced DBMS project. Focused on fine-tuning and creating a novel selection method to improve translation accuracy for non-technical users.",
    notes: `This was another class project, for the advanced database class. In this my team developed a sql to text generator using llama llm. More often than not, we always search for a text to sql generator, however, since the world has more non tech, than technical people, being able to understand the sql commands, will come a long way. Here we convert sql commands to actual questions or sentence, this way, a user must be capable of understanding the underlying goal. the best part about this is our reliance on online llama models to train and test it.

    I was particularly responsoble for fine-tuning the model, and building an optimal candidate selection method. My teammates performed the initial candidate generator:
    * Few Shot Generator:
        1.  Provide LLM with a few examples of input and output pairs.
        2.  For future reference Zero-Shot is a prompt with no examples.
    * Divide and Conquer
        1.  Inspired from Chase-SQL Divide and Conquer approach
        2.  Understand the subqueries to give context needed to understand the whole query

    Finally, these are the Selection Methods employed by us:
    1.  Pairwise Cosine Similarity: Inspired by self-consistency mentioned in Chase-SQL. Select “best one” utilizing self-consistency, which entails clustering candidates based on their execution outputs. Get the cosine similarity between each of the generated responses. Sum the similarities for each of the responses. Greatest sum is most similar to the others generated i.e. consensus best selection
    2.  Sampling: Inspired by Shah, D., Equi, M.R., et al. (2023) Navigation with large language models. Given an image, it generated subgoals or candidates it could travel to. Positive Prompt: LLM was prompted with a question and was instructed to return the most likely answer. Negative Prompt: LLM was prompted with the same or similar question and was instructed to return the least likely answer.
    3.  Fine Tuning: Use a LLM model to select the best outcome from a given set. In case of failure, randomly select a value. The LLM model is fine-tuned using the training dataset.

    I was particularly responsible for the fine tuning selection approach, which resulted in 65% success rate, as opposed to a mere 50% in all other approach. This was great jump in performance. However, we realize using simple cosine similarity does not actually understand the context of the question, and better methods could’ve been employed.

    We used 1B, 3B and 8B model for testing, however ended up relying only on the 8B model due to it’s availability being free as opposed to the other models.

    Our approach is a one of a kind, and we had used the spider, bird and beaver dataset to perform our research. I fine tuned the data by cleaning these 3 datasets further, and finally training on this corpus. Using the fine tuned model resulted in an another impressive 75% success rate, as opposed to the normal 65%. The 50% already tells us a lot about how great the existing models are, and fine tuning appears to also perform huge benefits.`,
    description: [
      "Engineered an LLM pipeline to translate complex SQL queries into natural language for non-technical stakeholders.",
      "Developed a novel fine-tuning selection method, achieving a 65% success rate—surpassing other methods by 15%.",
      "Improved model accuracy to 75% by fine-tuning an 8B LLaMA model on a custom-cleaned corpus of Spider and BIRD.",
    ],
    tech: ["Python", "LLaMA", "Fireworks AI", "LLM Fine-Tuning"],
    tags: ["AI", "LLM", "Team Project", "University Project", "Advanced DBMS"],
    links: {
      Slides:
        "https://docs.google.com/presentation/d/1zzeGWTEb4GLG_ZIeU5DnV6U9hvOFKnG0DOsc-HD8IWw",
    },
    repo: "https://github.com/krshsl/sql_to_text",
    icon: "/pokemons/magnemite.png",
  },
  {
    id: "traffic-incident-prediction",
    name: "Traffic Incident Prediction",
    summary:
      "Led a university research project to predict traffic incidents with 88-92% accuracy. Engineered a data pipeline to integrate sparse public traffic, climate (API), and sunlight data, and implemented an LSTM model to generate hourly predictions.",
    notes: `While this was a group project, all the code and work are completely mine. I collaborated with my teammate on what to do, and how to implement, since he never bothered doing the stuff, I pretty much did everything from getting the data to cleaning, post processing to model training and eval. This was an amazing experience, since this paper was first inspired by another paper “Accident Risk Prediction Based on Heterogeneous Sparse”, which captured 1. The effectiveness of combining multiple sparse data signals; 2. The value of capturing temporal and spatial heterogeneity to enhance model robustness. This inspired us to explore the integration of weather data, sunlight data, and traffic history to improve predictive performance.

    **Data Integration Challenges and Solutions**
    * Low Availability of Weather Data: Standard weather data is not readily available.
    * Low Granularity of Weather Data: Most weather datasets do not provide sufficient past event information.
    * Sunlight Data Integration: Required custom API access and normalization techniques.
    * Multiple API Requests: Required multiple API requests to pool several months of data.
    * Data Consistency Issues: Aligning formats and timestamps across multiple sources proved complex.

    **Achieving 5 km Grid-Level Weather Data**
    Standard datasets lacked the spatial resolution needed. Explored both open APIs (era5 hourly) and commercial sources (e.g., Oikolab). Utilized the haversine formula to spatially align weather data to the closest traffic events.

    **Data Preparation & Preprocessing Challenges**
    * Multi-Source Integration: Merged temporal, spatial, and environmental data from disparate sources.
    * Cyclical Feature Encoding: Transformed features like time-of-day using sine/cosine encodings.
    * Scalability & Efficiency: Optimized memory usage and processing by using multiple processors.

    **Model Architecture (LSTM)**
    * LSTM Layer: 64 units for sequence modeling.
    * Output Layer: Softmax activation for multi-class classification.
    * Input Features: Temporal (Hour, day), Weather (Temp, wind), Daylight (Sunrise/sunset).

    **Why We Chose LSTM**
    Traffic and environmental data are inherently sequential. LSTMs excel at learning time-series dependencies, outperforming traditional classifiers and capturing temporal correlations.

    **Insights: Accident analysis**
    * Seasonal Patterns: Spikes in daily accidents align with holidays and weather extremes.
    * City-Specific Trends: Los Angeles has the highest accident rates, Austin shows sharp peaks, and New York City remains relatively stable.

    **Daylight vs Night Analysis: Insights**
    * Nighttime Risk Highest in Los Angeles: LA shows higher nighttime accidents (43.77) vs. daylight (40.19).
    * Daylight Safer in Austin and New York City: NYC seeing a 50% drop from daylight (22.00) to night (11.03).

    **Insights: Weather Conditions vs. Accident Frequency**
    Non-Weather Factors Likely Dominate: Variables such as traffic volume, driver behavior, or road design may play a larger role.

    **Model accuracy: 88-92%**
    An impressive score given how unpredictable traffic accidents usually are. I relied on a various factors, and were able to identify several patterns from cluster formations analysis over a period of time.

    **How Is Our Approach Better?**
    * Granularity: Predict incidents at precise time intervals using 5 km radii grids.
    * Data Diversity: Integrate traffic events, weather, and sunlight—datasets not combined in prior research.
    * Scalability: Leverage the US-Accidents dataset, the largest open-source traffic accident dataset.`,
    description: [
      "Achieved 88-92% accuracy in predicting traffic incidents by implementing an LSTM model with temporal and geo-spatial features.",
      "Engineered a data pipeline to integrate disparate traffic, climate API, and sunlight data for reliable predictions.",
      "Generated hourly predictions within 5km hexagonal regions, producing hotspot clusters and live incident heatmaps.",
    ],
    tech: ["Python", "TensorFlow", "LSTM", "APIs", "K-Means"],
    tags: [
      "AI",
      "Research",
      "Prediction",
      "University Project",
      "Ubiquitous Computing",
    ],
    repo: "https://github.com/krshsl/incident_prediction",
    links: {
      Slides:
        "https://docs.google.com/presentation/d/1HToKCwH-_m2zwhPLAp7frfq7jT-wPpw9f1g8qLDvGOg",
    },
    icon: "/pokemons/mr-mime.png",
  },
  {
    id: "enterprise-auction-system",
    name: "Enterprise Auction System",
    summary:
      "Built a full-stack auction marketplace for a DBMS course, teaching myself Angular for the frontend. Designed and implemented the analytics dashboard and the core database logic, including automated MySQL event triggers.",
    notes: `This too was done as group. Everyone worked across the entire stack, and we all took different roles. I was fully responsible for desinigng the frontend. I built the complete analytics dashboard, which gave detailed analysis of the sales and bidding info. I wanted to take a challenge this time, and i learnt angular completely for this assignment. I was particularly interested in angular due to it being a typesafe typescript language, which was also something new to me, a good difference from the usual javascript language.

    Apart from this, i also built an event trigger which is automatically triggered at midnight everynight. This was done to manage the number of bids that were active vs closed, and to close the bids, and identify the highest bidder. The benefit of a single closing bid handling was that i managed to protect the system from running into any concurrent inserts or updates, thereby resulting in an incorrect highest bid. Thus making a truly efficient and only single source of truth sort of system.

    This was great experience in practically applying all the normalization principles, using ORM tools for simple queries, while manually typing event type queries for more optimal performance.`,
    description: [
      "Built a full-stack marketplace with Angular, Flask, and MySQL; personally developed the analytics dashboard.",
      "Eliminated transactional clashes by designing a MySQL event to auto-close all bids at midnight, creating a single source of truth.",
      "Applied database normalization principles and ORM/raw SQL queries to ensure data integrity and performance.",
    ],
    tech: ["Angular", "Flask", "MySQL", "Database Triggers"],
    tags: [
      "Full-Stack",
      "Database",
      "Microservices",
      "Team Project",
      "University Project",
    ],
    icon: "/pokemons/meowth.png",
  },
];

export const aboutData = {
  id: "krishna-sathyamurthy",
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
  notes: `I have had an amazing few years, given my transition from mechanical to computer science. I fell in love with cars, immediately after watching 3 britains breaking and fiddling around with cars, yes you guessed it right, i am talking about top gear. During my time at undergrad, i developed more interests, and i realized my love for one my favorutie passtime hobby like photography, and also my new curiosity with computer science. I was impressed by how the students made amazing websites for the     culturals, especially when ai was still not a thing, and i used to learn to code all by myself (i had a little bit of background in c/c++) from my time at high school.

    This motivation, led me to crack the interview process at zoho, where i went on to learn everything i know about programming. I owe it to my mentor/manager for motivating me to keep learning, and to keep looking for the small details. I learnt various concepts from threads, to security, to new backend languages like java, sql, frontend languages like js, html, css and frameworks like ember js, apache tomcat, all which were completely new to me. I even excelled at work, which led to me gaining a quick promotion at work, and i went on to lead a team of 3 people.

    But i always felt a gap, given my background in mechanical, which led me to pursue a masters in computer science. I didn't want to just code, but i wanted to understand the systems i am programming better as well. This led me to apply for rutgers, one of the top universities in the east coast.

    I fell in love with systems at rutgers from day 1. When the entire world was moving towards ai, i deliberately made the choice to work on the systems that power ai, and to make them more powerful. I explored various courses from basic system design, to advanced operating system, and data related courses. These courses strengthened my understanding of not just the underlying systems, but also of the ai which runs on top of it, giving me an overall understanding of the entire architecture.

    I took my curiosity a bit further, and i am now working on an independent study with professor kannan, and phd student linjie on disaggregated cache, where we are trying to identify the underlying problem with simple rdma based comm for getting data from server,without reliance of cache, to further optimize the entire process.

    I took things further, i participated in 3 hackathons in under a month (just a bit over a month), lost so much sleep in the process however, built so many different products, interning at a health startup which helps cure BPD disorder. It has been an amazing experience so far. I have had the chance to applying and learning so many different things, as opposed to what I had done at work. I got to explore various avenues, and I fell more in love with backend, as time went on.

    But I also challenged myself, and built an equally cool frontend, which was inspired my by love for pokemon, and I made a pokedex style portfolio, with custom options, and achievements, all a truly gamified package for a simple portfolio. This ignited a new found interest in developing frontend as well.

    Currently I am looking for full time opportunities, and I would like to apply what I have learnt, and continue to learn in the process. A single summary cannot summarize what I had experience and learnt over the past many years, but I have tried to honor it a little bit over here.`,
  skills: [
    {
      category: "Languages",
      technologies: [
        "C++",
        "C",
        "Rust",
        "Go",
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
        "Semantic Search (RAG, embeddings)",
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
        "NodeJS",
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
        "AWS (Bedrock, CloudFormation, Cognito, DynamoDB, EC2, Lambda, S3)",
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
      id: "rutgers-ms-cs",
      university: "Rutgers University",
      degree: "Master of Science, Computer Science",
      duration: "Jan 2024 - Dec 2025",
      gpa: 3.85,
      summary:
        "Master's program focused on low-level systems, distributed architectures, and performance optimization. Coursework spanned Advanced OS to AI, supplemented by an independent study in disaggregated caching.",
      notes: `Worked on an independent study exploring the performance drawbacks of relying on simple RDMA-based communication for accessing remote storage, instead of relying on efficient cache techniques, to utilize both the client and server cache more efficiently, thereby improving performance.
        I was specifically responsible for generating the test suite to identify the existing drawbacks, and on performance testing our suite to make it better than the existing simple setup`,
      description: [
        "Coursework: Advanced OS, Advanced DBMS, Compilers, Ubiquitous Computing, AI, and Computer Networks.",
        "Conducting independent study on disaggregated cache performance, benchmarking RDMA vs. efficient caching.",
        "Focused on low-level systems, distributed architectures, and AI integration into systems-level projects.",
      ],
      tech: ["C", "Rust", "Python", "Docker", "SQL", "NoSQL", "Git"],
      live: "https://www.cs.rutgers.edu/",
      icon: "/pokemons/kadabra.png",
    },
    {
      id: "sastra-btech-mech",
      university: "Sastra University",
      degree: "Bachelor of Technology, Mechanical Engineering",
      duration: "Jul 2016 - Jun 2020",
      gpa: 6.67,
      summary:
        "A foundational engineering degree focused on analytical problem-solving. This program provided early exposure to programming and systems analysis during my co-op at Zoho.",
      notes: `I have had an amazing few years, given my transition from mechanical to computer science. I fell in love with cars, immediately after watching 3 britains breaking and fiddling around with cars, yes you guessed it right, i am talking about top gear.
        During my time at undergrad, i developed more interests, and i realized my love for one my favorutie passtime hobby like photography, and also my new curiosity with computer science. I was impressed by how the students made amazing websites for the culturals... This motivation, led me to crack the interview process at zoho... But i always felt a gap, given my background in mechanical, which led me to pursue a masters in computer science.`,
      description: [
        "Built a strong foundation in engineering principles and analytical problem-solving.",
        "Gained early exposure to programming and systems analysis through co-op at Zoho.",
      ],
      live: "https://mech.sastra.edu/",
      icon: "/pokemons/abra.png",
    },
  ],
  resumeLink:
    "https://drive.google.com/file/d/1H2jlBAXOO7hrbI7Oqa2jblEarVDFSdvP",
  icon: "/pokemons/pikachu.png",
};
