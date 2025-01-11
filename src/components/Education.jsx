import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../constants';

const Education = () => {
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
    <section id="education" className="py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-cyan-500/50 transform transition duration-300 flex flex-col justify-between"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <img src={edu.logo} alt={edu.logo} className="w-12 h-12 object-contain" />
                  <p className="text-xl font-semibold">{edu.school}</p>
                </div>
                {/* Degree and Year in Same Line */}
                <div className="flex items-center justify-center space-x-4">
                  <p className="text-md font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
