import React, { useState } from "react";
import { motion } from "framer-motion";
import { education } from "../constants";

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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

  const toggleCourses = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
              className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-cyan-500/50 transform transition duration-300 flex flex-col justify-between"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-14 h-14 object-contain"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-400">
                      {edu.degree} <span className="mx-2">|</span> {edu.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-4">
                <button
                  onClick={() => toggleCourses(index)}
                  className="text-sm text-cyan-400 hover:underline focus:outline-none"
                >
                  {expandedIndex === index
                    ? "Hide Relevant Coursework"
                    : "Show Relevant Coursework"}
                </button>
                {expandedIndex === index && (
                  <ul className="mt-3 list-disc list-inside text-sm text-gray-300 space-y-1">
                    {edu.course && edu.course.length > 0 && (
                      <ul className="list-disc list-inside text-left text-sm text-gray-300 mt-2">
                        {edu.course.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    )}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
