import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const companyColors = {
  "New York University": { dot: "bg-violet-400", glow: "shadow-violet-500/40", accent: "text-violet-400", border: "border-violet-500/20" },
  "Accenture": { dot: "bg-cyan-400", glow: "shadow-cyan-500/40", accent: "text-cyan-400", border: "border-cyan-500/20" },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Where I've been</p>
          <h2 className="display-font text-4xl font-black text-white">Experience</h2>
        </motion.div>

        <div className="relative border-l-2 border-gray-800 pl-6 sm:pl-8 space-y-10">
          {experiences.filter(Boolean).map((job, index) => {
            const style = companyColors[job.company] || companyColors["Accenture"];
            return (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Timeline dot */}
                <span className={`absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-4 w-3 h-3 ${style.dot} rounded-full border-2 border-gray-950 z-10`} />

                {/* Card */}
                <motion.div
                  className={`bg-gray-900/60 backdrop-blur border border-gray-800 hover:border-gray-700 p-5 sm:p-6 rounded-2xl w-full hover:shadow-xl ${style.glow} transition-all duration-300`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                    <div>
                      <h3 className={`display-font text-xl font-bold ${style.accent}`}>
                        {job.company}
                      </h3>
                      <h4 className="text-white font-medium mt-0.5">{job.title}</h4>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full font-mono whitespace-nowrap h-fit">
                      {job.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${style.dot} opacity-60`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;