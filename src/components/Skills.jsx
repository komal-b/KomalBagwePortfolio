import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';


const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  

  return (
    <section id="skills" className="min-h-screen py-12 px-6 text-white flex flex-col items-center ">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg flex flex-col justify-between hover:shadow-cyan-500/50 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{skill.category}</h3>
              <p className="text-base text-gray-300 leading-relaxed">{skill.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
