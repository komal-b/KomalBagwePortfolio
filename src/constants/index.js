import {
    nyulogo,
    mulogo,
    rag,
    pharmacy,
    ngo
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
      year: '[Sept. 2024 - May 2026]'
    },
    {
      logo: mulogo,
      school: 'University of Mumbai',
      degree: 'Bachelor of Engineering in Computer Engineering',
      year: '[Aug 2016 - May 2019]'
    },
  ];
  
  const skills = [
    { category: "Programming Languages", details: "Python, Java, JavaScript" },
    { category: "Web Technologies", details: "HTML, CSS, React, TailWind" },
    { category: "Backend Frameworks", details: "Spring, Hibernate, JMS" },
    { category: "Machine Learning", details: "PyTorch, NumPy, Keras, TensorFlow" },
    { category: "Databases", details: "Oracle SQL Developer, MySQL, MongoDB, AWS S3" },
    { category: "DevOps", details: "Git, AWS, Docker" },
    { category: "IDEs", details: "Eclipse, IntelliJ IDEA, VisualStudio Code" },
    { category: "Tools", details: "Postman, Jira, Confluence, Splunk, GlobalScape EFT" },
    { category: "Testing", details: "Selenium, Cucumber" },
    { category: "Architecture", details: "Microservices" },
  ];
  
  const experiences = [
    {
      company: 'Accenture',
      title: 'Senior Software Engineer',
      duration: 'Dec 2021 - Aug 2024',
      responsibilities: [
        'Optimized ActiveMQ queue performance, reducing load by 60% and increasing message processing efficiency by 40% through producer flow control tuning and memory usage optimization',
        'Developed a custom scrollable tooltip component in Java Swing, implementing mouse event handling and JScrollPane integration for enhanced user interaction.',
        'Achieved 100% code coverage in JUnit test suites using PowerMockito for comprehensive mocking, improving software quality and reliability.',
        'Implemented RESTful web services with Spring Boot to expose AI/ML functionalities, enhancing system integration and accessibility',
        'Led a cross-functional engineering team of eight members during Team Lead\'s absence, maintaining project momentum and operational continuity.',
        'Authored technical analysis documents, effectively translating complex concepts into clear, non-technical language for client understanding.'
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer',
      duration: 'Jun 2021 - Nov 2021',
      responsibilities: [
        'Engineered "Ping Down" functionalities for central-pharmacy application synchronization, achieving 100% data consistency improvement.',
        'Participated in Agile methodology, contributing to sprint planning, design discussions, and code reviews.',
        'Formulated a comprehensive training program on Spring Boot application workflow for junior team members, enhancing their Java development proficiency.',
        'Identified and resolved critical bugs in a pharmaceutical application through root cause analysis, implementing targeted solutions to improve system stability and accuracy.',
        'Developed automated test scripts using Selenium WebDriver from scratch, increasing test coverage by 85% and reducing manual testing time by 90% for a pharmaceutical website.'
      ],
    },
    {
      company: 'Accenture',
      title: 'Associate Software Engineer',
      duration: 'Aug 2019 - May 2021',
      responsibilities: [
        'Executed strategic root cause analysis in financial systems, implementing targeted technical solutions to resolve complex operational challenges and optimize system performance.',
        'Leveraged Splunk for IT operations monitoring, real time analytics and performance dashboard.',
        'Used Globalscape EFT for automated file transfer Event Rules.' 
      ],
    },
  ];
  
  const projects = [
    {
      category: 'FullStack Projects',
      items: [
        {
          title: 'Enterprise Pharmacy System ',
          image: pharmacy,
          company: 'Accenture',
          description:[
            'Synchronized patient records from EPR service, ensuring 99.9% data accuracy.',
            'Facilitated insurance processing by providing EPS insurance details to Pharmacy Benefit Manager (PBM) service, reducing claim errors by 25%.',
            'Engineered order pickup time calculation functionality, improving efficiency by 30%.'
          ],
          techStack: 'Spring Boot, Spring MVC, Oracle SQL Developer, Java, Hibernate, JMS'

        },
        {
          title: 'WelcomeHome',
          image: ngo,
          description:[
            'Developed a web-based application for administrators to manage users, donations, and workflows.',
            'Implemented secure user registration and login system, enhancing data protection'
          ],
          techStack: 'SpringBoot, Java, MySQL Developer, Java, CSS, React, SpringSecurity',
        },
      ],
    },
    {
      category: 'AI/ML Projects',
      items: [
        {
          title: 'Finetunes RAG System',
          image: rag,
          description:[
            'Executed Retrieval-Augmented Generation (RAG) paradigm for large-scale language understanding tasks.',
            'Combined retrieval-based and generation-based models to enable domain-specific response generation.',
            'Utilized Docker for containerization, improving deployment efficiency.'
          ],
          techStack: 'Keras, Tensorflow, Pytorch, MongoDB, Docker, ETL',
          github: 'https://github.com/komal-b/RAG_Finetuning',
        }
      ],
    },
  ];
  
  
  export { education, skills, experiences, projects };