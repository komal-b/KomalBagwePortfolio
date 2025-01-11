import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';

const Experience = () => {
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
    <section id="experience" className="py-12 px-6 text-white  to-black">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-cyan-500/50 transform transition duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-cyan-400">{job.company}</h3>
                <p className="text-sm font-medium text-gray-400">{job.duration}</p>
              </div>

              <motion.h4
                className="text-xl font-medium mb-4 text-gray-200"
                whileHover={{ color: '#06b6d4' }}
                transition={{ duration: 0.3 }}
              >
                {job.title}
              </motion.h4>

              <ul className="list-disc pl-6 text-gray-300">
                {job.responsibilities.map((responsibility, i) => (
                  <motion.li key={i} className="text-sm">
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
