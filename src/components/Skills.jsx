import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-12 px-6 text-white flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col justify-start min-h-[200px] hover:shadow-cyan-500/50 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-5 text-cyan-400">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.details.split(",").map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 bg-gray-700 rounded-full text-sm font-medium hover:bg-cyan-500 transition"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
