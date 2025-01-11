import { motion } from 'framer-motion';
import { styles } from '../styles';
import profile from '../assets/profile.jpeg';
import github from '../assets/github.png'; 
import linkedin from '../assets/linkedin.png'; 
import download from '../assets/download.png'; 

const Hero = () => {
  return (
    <section id="about" className='relative w-full  bg-gradient-to-b from-gray-900 to-black flex min-h-screen mx-auto '>
      <div className={`${styles.paddingX} flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-10`}>
        <div className="flex flex-col gap-5 max-w-lg text-justify lg:text-left">
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm Komal</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am currently pursuing my Master’s in Computer Science at New York University, with an expected graduation in May 2026. I have expertise in Selenium, Cucumber, GlobalScape, Splunk, Unix, Java, Spring Boot, Hibernate, Jenkins, JavaScript, React, MySQL, Python, and Oracle SQL Developer. I bring experience in developing innovative solutions for the Healthcare and Finance domains.
          </p>
          
        
          <div className="flex gap-6 mt-4">
          
            <a 
              href="https://github.com/komal-b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300"
            >
              <img 
                src={github} 
                alt="GitHub" 
                className="w-10 h-10"
              />
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/komalbagwe/" // Replace with your LinkedIn link
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300"
            >
              <img 
                src={linkedin} 
                alt="LinkedIn" 
                className="w-10 h-10"
              />
            </a>

     
            <a 
              href="https://drive.google.com/file/d/1o8oKILstFNMvL4QcpzhfD9BhZLe5BlGx/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-950 rounded-md shadow-md hover:scale-110 transition-all duration-300"
            >
              <img 
                src={download} 
                alt="Download" 
                className="w-7 h-7"
              />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <motion.div
          className="relative w-60 h-80 md:w-80 md:h-[28rem] lg:w-80 lg:h-[28rem] rounded-lg overflow-hidden border-4 border-cyan-400 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          style={{ marginTop: '8rem' }} 
        >
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover sm:mt-320"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
