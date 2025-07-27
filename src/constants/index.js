import {
    nyulogo,
    mulogo,
    rag,
    security,
    ngo,
    weather,
    construction,
    stock
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
    { category: "Frameworks & Tools", details: "Spring Boot, ReactJS, FastAPI, Docker, Kubernetes, Kafka, Jenkins, Git, JIRA, Selenium, Postman, PowerMockito, Tailwind CSS" },
    { category: "Cloud & Databases", details: "WS, Azure, GCP, PostgreSQL, MySQL, Oracle, MongoDB (NoSQL), Amazon S3, Hadoop, Hibernate"},
    { category: "AI/ML & Data", details: "TensorFlow, PyTorch, NumPy, OpenCV, PySpark, Pandas, Scikit-learn" },
    { category: "Other Skills", details: "Full-Stack Development, Backend Architecture, System Design, Microservices, REST APIs, Test Automation, Agile, Scrum, CI/CD, SDLC" },
  ];
  
  const experiences = [
    {
      company: 'Accenture',
      title: 'Senior Software Engineer',
      duration: 'Dec 2021 - Aug 2024',
      responsibilities: [
        'Engineered two resilient ’Ping Down’ functionalities, synchronizing central and pharmacy apps, improving data consistency to 99%.',
        'Tuned ActiveMQ queues using producer flow control and memory optimization, reducing load by 60% and enhancing throughput by 50%.',
        'Refactored EPS insurance data flow to PBM systems, cutting claim rejections by 45%.',
        'Developed and deployed scalable Spring Boot REST APIs, integrated into 30% of internal modules.',
        'Led an 8-member team in the absence of lead, maintaining delivery timelines and operational stability.'
       
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer',
      duration: 'Jun 2021 - Nov 2021',
      responsibilities: [
        'Facilitated sprint planning and refinement sessions across 15+ Agile sprints, resulting in the product team achieving 95% of sprint goals and improving team velocity scores by 20%.',
        'Achieved 100% unit test coverage using JUnit and PowerMockito, boosting test confidence.',
        'Resolved 20+ high-priority defects, reducing critical bug rate by 35%.'
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer',
      duration: 'Aug 2019 - May 2021',
      responsibilities: [
        'Built automated Selenium test scripts, raising test coverage to 85% and cutting manual QA by 90%.',
        'Troubleshot production issues via ServiceNow and Splunk, halving MTTR from 10 to 5 hours.'

      ],
    },
    ,
  ];
  
  const projects = [
    {
      category: 'FullStack Projects',
      items: [
        {
          title: 'TraceMyData',
          image: security,
          company: '',
          description:[
            'Built 10+ Spring Boot REST APIs with 99% uptime, integrated with PostgreSQL and secured using JWT.',
            'Implemented robust OAuth2-based authentication, enabling secure multi-provider login (Google), reducing unauthorized access attempts by over 70% and improving user onboarding speed by 40%.',
            'Automated CSV report generation for privacy audits, saving 60% manual effort.',
            'Containerized and orchestrated microservices using Docker and Kubernetes, ensuring 100% environment parity, staging, and production. Reduced deployment time by 40% through scheduled CI/CD rollouts.',
            'Designed an interactive privacy education module to inform users about personal data risks, enhancing user engagement.',
            'Bridged software engineering and ML by leading both API/backend development (authentication, endpoints) and machine-learning privacy scoring, demonstrating versatile cross-functional expertise.',
            'Architected an end-to-end privacy analysis platform by integrating a FastAPI backend, Playwright web crawler, and Python ML scoring model into a unified, containerized system.'

          ],
          techStack: 'ReactJS, TypeScript, Java, Spring Boot, PostgreSQL, Python, JWT, OAuth2, Docker, Kubernetes, Machine Learning',
          github: 'https://github.com/komal-b/TraceMyData',
        },
        {
          title: 'WelcomeHome',
          image: ngo,
          description:[
            'Developed a web-based application for administrators to manage users, donations, and workflows.',
            'Implemented secure user registration and login system, enhancing data protection',
            'Designed MySQL schema for donor management, ensuring 100% ACID compliance and referential integrity.',
            'Achieved 98% query accuracy by implementing complex SQL joins for inventory search and role-based user task retrieval.'
          ],
          techStack: 'SpringBoot, Java, MySQL Developer, CSS, ReactJS, SpringSecurity',
           github: 'https://github.com/komal-b/WelcomeHome',
        },
      ],
    },
    {
      category: 'AI/ML Projects',
      items: [
        {
          title: 'Finetuned RAG System',
          image: rag,
          description:[
            'Built a Retrieval-Augmented Generation (RAG) system using Qdrant and a fine-tuned LLaMA 2 LLM to generate context-aware answers from custom document data, improving response relevance by 30\% based on manual evaluation.',
            'Fine-tuned LLM on custom datasets to enhance contextual relevance; containerized using Docker for scalable, reproducible deployment.'
          ],
          techStack: 'Hugging Face, Pytorch, MongoDB, Docker, ETL, Transformers',
          github: 'https://github.com/komal-b/RAG_Finetuning',
        },
        {
          title: 'Weather Prediction',
          image: weather,
          description:[
            'Interactive dark-themed map using React Leaflet',
            'Click on any location or search by city name to get weather data',
            'Hourly temperature prediction for the next 24 hours using a trained LSTM model',
            'Live data pulled using OpenWeather API',
          ],
          techStack: 'React, MaterialUI, Python, FastAPI, Keras, Tensorflow, Pandas, NumPYy, LSTM',
          github: 'https://github.com/komal-b/WeatherPrediction',
        },
        {
          title: 'AI-Powered Multi-Source Construction Insights',
          image: construction,
          description:[
            'Developed an AI-driven chatbot integrating structured (RDF-based) and unstructured (PDF) construction data.',
            'Implemented PDF parsing with PyPDFLoader and sentence embedding using SentenceTransformer (all-MiniLM-6-v2).',
            'Applied cosine similarity for query matching, merging insights from both data sources.',
            'Utilized OpenAI GPT-4 for contextual response generation.',
            'Ensured accuracy and relevance by dynamically combining results into a unified context.'
          ],
          techStack: 'Python, NLP, RAG, OpenAI API',
          github: 'https://github.com/mdabdulrazzaq/Contech-Hackathon',
        },
        {
          title: 'VibeTrader',
          image: stock,
          description:[
            'Developed a hybrid deep learning system combining LSTM models in TensorFlow and PyTorch to forecast stock prices and sentiment-based trends using historical data and synthetic features.',
            'Designed the full data-to-model pipeline, including sequence generation, training, model saving/loading, and predictions via  scalable modular code',
            'Implemented a real-time streaming architecture with Kafka for live data ingestion and event-triggered trading alerts.',
          ],
          techStack: 'ReactJS, Kafka, SparkNLP, LSTM, TensorFlow, MLOps, Spark, AI Agents, Dask, MongoDB',
          github: 'https://github.com/komal-b/VibeTrader',
        }
      ],
    },
  ];
  
  
  export { education, skills, experiences, projects };