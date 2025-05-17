import {
    nyulogo,
    mulogo,
    rag,
    pharmacy,
    ngo,
    weather
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
      degree: 'Master of Science in Computer Science'
    },
    {
      logo: mulogo,
      school: 'University of Mumbai',
      degree: 'Bachelor of Engineering in Computer Engineering'
    },
  ];
  
  const skills = [
    { category: "Programming Languages", details: "Python, Java, JavaScript" },
    { category: "Web Technologies", details: "HTML, CSS, React, TailWind" },
    { category: "Databases", details: "Oracle SQL Developer, MySQL, MongoDB, AWS S3" },
    { category: "Machine Learning", details: "PyTorch, NumPy, Keras, TensorFlow, OpenCV" },
    { category: "Backend Frameworks", details: "Spring, Hibernate, JMS" },
    { category: "DevOps", details: "Git, AWS, Docker" },
    { category: "IDEs", details: "Eclipse, IntelliJ IDEA, VisualStudio Code" },
    { category: "Testing", details: "Selenium, Cucumber" },
    { category: "Big Data", details: "Apache Spark, Hadoop" },
    { category: "Architecture", details: "Microservices" },
    { category: "Tools", details: "Postman, Jira, Confluence, Splunk, GlobalScape EFT" },
  ];
  
  const experiences = [
    {
      company: 'Accenture',
      title: 'Senior Software Engineer',
      duration: 'Dec 2021 - Aug 2024',
      responsibilities: [
        'Boosted system performance by 60% through ActiveMQ queue tuning',
        'Built custom Java Swing UI components for enhanced user interaction',
        'Achieved 100% JUnit coverage using PowerMockito for robust testing',
        'Reduced insurance claim errors by 45% by integrating EPS data with PBM',
        'Led a team of 8 during Team Lead\'s absence, ensuring delivery continuity',
        'Developed Spring Boot APIs to expose AI/ML services'
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer',
      duration: 'Jun 2021 - Nov 2021',
      responsibilities: [
        'Engineered “Ping Down” sync modules, improving data accuracy by 99%.',
        'Conducted sprint planning, code reviews, and Agile ceremonies',
        'Designed Spring Boot training for junior developers',
        'Resolved critical production bugs using RCA methods',
        'Developed Selenium WebDriver tests, boosting test coverage by 85%'
      ],
    },
    ,
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
          title: 'Finetuned RAG System',
          image: rag,
          description:[
            'Executed Retrieval-Augmented Generation (RAG) paradigm for large-scale language understanding tasks.',
            'Combined retrieval-based and generation-based models to enable domain-specific response generation.',
            'Utilized Docker for containerization, improving deployment efficiency.'
          ],
          techStack: 'Hugging Face, Pytorch, MongoDB, Docker, ETL',
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
        }
      ],
    },
  ];
  
  
  export { education, skills, experiences, projects };