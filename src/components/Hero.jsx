import { motion } from 'framer-motion';
import { styles } from '../styles';
import profile from '../assets/profile.jpeg';
import github from '../assets/github.png'; 
import linkedin from '../assets/linkedin.png'; 
import download from '../assets/download.png'; 

const Hero = () => {
  return (
    <section id="about" className='mt-24 relative w-full flex min-h-screen mx-auto '>
      <div className={`${styles.paddingX} mt-8 flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-10`}>
        <div className="flex flex-col mt-12 gap-5 max-w-lg text-justify lg:text-left">
          <p  className={`${styles.heroHeadText} `}>Hi, I'm Komal</p>
          <p className={`${styles.heroSubText} text-white-100`}>
            I'm Komal Bagwe, a software engineer and Master’s student at NYU with 4+ years of experience at Accenture. I specialize in full-stack development, scalable systems, and team leadership. From building robust Java applications to mentoring junior engineers, I blend technical skill with a people-first mindset. I'm passionate about clean code, collaboration, and continuous growth—driven to create impactful, user-focused software.
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

           
            <a 
              href="https://www.linkedin.com/in/komalbagwe/"
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
              href="https://drive.google.com/file/d/1OiUDEzdaQ8OFAdH2TmwKA3PApzJdH0kI/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-950 rounded-md shadow-md hover:scale-110 transition-all duration-300"
            >
              <img 
                src={download} 
                alt="Download" 
                className="w-7 h-7"
              />
              <span>Download Resume</span>
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
