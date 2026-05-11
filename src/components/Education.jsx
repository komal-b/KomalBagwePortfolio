import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education } from "../constants";

const Education = () => {
  const [expandedIndices, setExpandedIndices] = useState([]);
  const toggleCourses = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="education" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Academic background</p>
          <h2 className="display-font text-4xl font-black text-white">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 border border-gray-800 hover:border-gray-700 p-6 rounded-2xl flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 flex-shrink-0">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="display-font text-base font-bold text-white">{edu.school}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{edu.degree}</p>
                  <span className="inline-block mt-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleCourses(index)}
                  className="text-xs text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-widest flex items-center gap-2"
                >
                  <span className={`transition-transform duration-200 ${expandedIndices.includes(index) ? 'rotate-90' : ''}`}>▶</span>
                  {expandedIndices.includes(index) ? 'Hide' : 'Show'} Coursework
                </button>

                <AnimatePresence>
                  {expandedIndices.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.course.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;