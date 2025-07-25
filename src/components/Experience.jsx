import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="relative border-l-2 border-cyan-400 pl-4 sm:pl-6 space-y-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              variants={itemVariants}
            >
              {/* Blue Dot */}
              <span className="absolute -left-[9px] top-3 w-3 h-3 bg-cyan-400 rounded-full border-2 border-gray-900 z-10"></span>

              {/* Card */}
              <div className="bg-gray-800 p-5 sm:p-6 rounded-xl shadow-md w-full hover:shadow-cyan-500/40 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    {job.company}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 sm:mt-0">
                    {job.duration}
                  </p>
                </div>

                <h4 className="text-lg font-medium mb-3 text-white hover:text-cyan-300 transition duration-300">
                  {job.title}
                </h4>

                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
