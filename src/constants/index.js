import {
    nyulogo,
    mulogo,
    rag,
    security,
    ngo,
    weather,
    stock,
    auction,
    ratelimiter,
    dining
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  

  const education = [
    {
      logo: nyulogo,
      school: 'New York University',
      degree: 'Master of Science in Computer Science',
      course: [
        'Algorithms', 
        'Artificial Intelligence', 
        'Computer Vision', 
        'Machine Learning', 
        'Big Data', 
        'Deep Learning', 
        'Database Systems'
      ],
      year: 'Sept 2024 - May 2026',
    },
    {
      logo: mulogo,
      school: 'University of Mumbai',
      degree: 'Bachelor of Engineering in Computer Engineering',
      course: [
        'Object Oriented Programming', 
        'Software Engineering', 
        'Distributed Systems', 
        'Cloud Computing', 
        'Networking', 
        'Operating System'
      ],
      year: 'Aug 2016 - Jun 2019',
    },
  ];
  
  const skills = [
    { category: "Languages", details: "Python, Java, C++, JavaScript, TypeScript, HTML/CSS, SQL, PHP, Bash (Shell Scripting)" },
    { category: "Frameworks & Tools", details: "Spring Boot, ReactJS, FastAPI, Docker, Kubernetes, Kafka, Jenkins, Git, JIRA, Selenium, Postman, Tailwind CSS, Node.js, AngularJS, Maven, Gradle" },
    { category: "Cloud & Databases", details: "AWS (SES · SQS · EC2 · Lambda · ECS · DynamoDB · RDS · S3), Azure, GCP (BigQuery · Kubernetes Engine), PostgreSQL, MySQL, Oracle, MongoDB, Hadoop, Hibernate" },
    { category: "AI/ML & Data", details: "TensorFlow, PyTorch, NumPy, OpenCV, PySpark, Pandas, Scikit-learn" },
    { category: "Other Skills", details: "Full-Stack Development, Backend Architecture, Distributed Systems, System Design, Microservices, REST APIs, CI/CD, Agile, Scrum, Test Automation, SDLC" },
  ];
  
  const experiences = [
    {
      company: 'New York University',
      title: 'Course Assistant — Agile Software Development & DevOps',
      duration: 'Sept 2025 - Present',
      responsibilities: [
        'Support 190+ students in MERN Stack development and DevOps (Docker, DigitalOcean, CI/CD); guide student teams through Agile/Scrum workflows, from design in Figma to sprint planning and user story management using GitHub Projects.',
        'Manage a team of 3 graders and 2 tutors to ensure consistent and timely academic support.',
        'Created a bash script to automate repository insights for grading — scans student repos to generate reports on PR stats, commit history, and individual contributor metrics.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer II',
      duration: 'Dec 2021 - Aug 2024',
      responsibilities: [
        "Engineered two resilient 'Ping Down' functionalities, synchronizing central and pharmacy apps, maintaining data consistency to 95%.",
        'Tuned ActiveMQ queues using producer flow control and memory optimization, reducing load by 30% and enhancing throughput by 20%.',
        'Refactored EPS insurance data flow to PBM systems, cutting claim rejections by 25%.',
        'Developed and deployed scalable Spring Boot REST APIs, integrated into 20% of internal modules.',
        'Led an 8-member team in the absence of lead, maintaining delivery timelines and operational stability.',
        'Orchestrated containerized microservices deployments using Docker and Kubernetes, ensuring high availability and zero-downtime releases.',
        'Optimized complex PostgreSQL database queries, reducing query execution time by 40% for high-volume transaction modules.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer',
      duration: 'Jun 2021 - Nov 2021',
      responsibilities: [
        'Achieved 100% unit test coverage using JUnit, boosting test confidence.',
        'Implemented secure authentication modules using OAuth2 and JWT, enhancing application security compliance for external vendor APIs.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Associate Software Engineer',
      duration: 'Aug 2019 - May 2021',
      responsibilities: [
        'Migrated legacy manual testing to automated Selenium scripts, cutting manual QA time by 90% and increasing regression coverage.',
        'Acted as Designated Responsible Individual (DRI) for high-volume transaction modules; utilized Splunk for real-time log analysis and monitoring, resolving 20+ critical production bottlenecks and maintaining 99.9% service availability.',
      ],
    },
  ];
  
  const projects = [
    {
      category: 'Full Stack',
      items: [
        {
          title: 'TraceMyData',
          image: security,
          description: [
            'Privacy awareness platform that crawls websites, detects third-party trackers, and computes an ML-based privacy risk score.',
            'Secured with JWT + Google OAuth2, reducing unauthorized access attempts by 70% and improving onboarding speed by 40%.',
            'Containerized all services (frontend, backend, ML microservice, PostgreSQL) with Docker Compose; deployed to Kubernetes reducing deployment time by 40%.',
            'Automated CSV privacy audit reports, saving 60% of manual effort.',
          ],
          techStack: 'React, TypeScript, Java, Spring Boot, Python, FastAPI, PostgreSQL, JWT, OAuth2, Docker, Kubernetes',
          github: 'https://github.com/komal-b/TraceMyData',
        },
        {
          title: 'WelcomeHome',
          image: ngo,
          description: [
            'Web app for an NGO to manage donors, inventory, and role-based workflows for admins and volunteers.',
            'Designed a normalized MySQL schema ensuring 100% ACID compliance and referential integrity.',
            'Implemented complex SQL joins for inventory search and task retrieval, achieving 98% query accuracy.',
            'Secured with Spring Security for role-based access control across admin and volunteer roles.',
          ],
          techStack: 'Java, Spring Boot, Spring Security, MySQL, ReactJS, CSS',
          github: 'https://github.com/komal-b/WelcomeHome',
        },
      ],
    },
    {
      category: 'AI / ML',
      items: [
        {
          title: 'RAG Assistant for ROS2 Robotics',
          image: rag,
          description: [
            'Domain-specific RAG chatbot helping robotics engineers with ROS2, Navigation2, and Gazebo simulation queries.',
            'Automated ETL pipeline scrapes ROS2 docs and YouTube transcripts; BERT embeddings + Qdrant vector search retrieve the most relevant context.',
            'Fine-tuned GPT-2/Llama on robotics datasets to improve domain-specific answer quality by 30%.',
            'Experiment tracking with ClearML; full system containerized with Docker Compose for reproducible deployment.',
          ],
          techStack: 'Python, PyTorch, Hugging Face Transformers, Qdrant, MongoDB, ClearML, Gradio, Docker',
          github: 'https://github.com/komal-b/RAG_Finetuning',
        },
        {
          title: 'VibeTrader',
          image: stock,
          description: [
            'Hybrid AI trading engine fusing 60-hour LSTM price sequences with LLM-generated sentiment scores from financial news.',
            'Integrated Google Gemini via LangChain for semantic "vibe scoring" of news, outperforming traditional VADER sentiment tools.',
            'Event-driven scheduling with Apache Kafka: a Time Daemon triggers hourly inference and daily model retraining pipelines.',
            'PySpark ETL processes 5+ years of historical stock data; Redis caches real-time inference signals for low-latency access.',
          ],
          techStack: 'Python, TensorFlow, PyTorch, LangChain, Gemini API, Apache Kafka, PySpark, Redis, MongoDB, Selenium',
          github: 'https://github.com/komal-b/VibeTrader',
        },
      ],
    },
    {
      category: 'Cloud',
      items: [
        {
          title: 'Dining Concierge Chatbot',
          image: dining,
          description: [
            'Fully serverless AWS chatbot recommending NYC restaurants by cuisine, location, time, and group size.',
            'End-to-end pipeline: Amazon Lex (NLP) → Lambda → SQS → OpenSearch → SES, with EventBridge scheduling suggestion delivery every minute.',
            'Indexed 1,000+ Yelp restaurants into DynamoDB and OpenSearch for fast, cuisine-filtered retrieval.',
            'Implemented a Dead Letter Queue for failed email deliveries with automatic retry logic.',
          ],
          techStack: 'AWS (Lex, Lambda, API Gateway, DynamoDB, OpenSearch, SQS, SES, S3, EventBridge), Python',
          github: 'https://github.com/komal-b/Dining-Conceirge',
        },
        {
          title: 'Live Flash Auction Platform',
          image: auction,
          description: [
            'Real-time auction platform with 4 independent microservices (auction management, bid processing, WebSocket, timer) deployed on AWS EKS.',
            'WebSocket service powers live bidding, chat, and participant tracking; atomic bid validation with anti-snipe logic prevents race conditions.',
            'AWS stack: RDS PostgreSQL (auctions), ElastiCache Redis (pub/sub), DynamoDB (bid history), SQS + Lambda (async notifications), Cognito (auth), ALB (routing).',
          ],
          techStack: 'Python, React, TypeScript, AWS EKS, RDS PostgreSQL, ElastiCache Redis, DynamoDB, SQS, Lambda, Cognito, Kubernetes',
          github: 'https://github.com/komal-b/live-flash-auction',
        },
      ],
    },
    {
      category: 'Distributed Systems',
      items: [
        {
          title: 'Real-Time Crypto Alert System',
          image: stock,
          description: [
            'Decoupled event-driven architecture: a worker microservice polls CoinGecko prices and publishes to Redis Pub/Sub, keeping the web server lightweight and independently fault-tolerant.',
            'Targeted WebSocket alerts via Socket.io — only the specific user whose price target is hit receives a notification.',
            'Redis Sorted Sets (ZSET) enable O(log N) alert lookups across thousands of concurrent users.',
            'Live Chart.js dashboard renders real-time price charts without page refreshes.',
          ],
          techStack: 'Node.js, Express, Socket.io, Redis (Pub/Sub + ZSET), Chart.js, CoinGecko API',
          github: 'https://github.com/komal-b/crypto-alert-system',
        },
        {
          title: 'Distributed Rate Limiter',
          image: ratelimiter,
          description: [
            '🚧 In Progress — High-performance rate-limiting service in Go implementing 4 core algorithms: Token Bucket, Leaky Bucket, Fixed Window, and Sliding Window.',
            'Multi-stage Docker build produces a minimal ~15MB image; runs as a non-privileged user to reduce container escape risk.',
            'Redis-backed for distributed consistency — rate limit state is shared across multiple service replicas.',
          ],
          techStack: 'Go, Redis, Docker, Docker Compose',
          github: 'https://github.com/komal-b/go-rate-limiter',
        },
      ],
    },
  ];
  
  
  export { education, skills, experiences, projects };