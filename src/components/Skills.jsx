import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const categoryConfig = [
  {
    accent: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/5",
    glow: "hover:shadow-cyan-500/10", badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/25 hover:border-cyan-400/40",
    icon: "{ }", num: "01", bar: "bg-cyan-500",
  },
  {
    accent: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/5",
    glow: "hover:shadow-indigo-500/10", badge: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/25 hover:border-indigo-400/40",
    icon: "⚙", num: "02", bar: "bg-indigo-500",
  },
  {
    accent: "text-violet-400", border: "border-violet-500/20", bg: "bg-violet-500/5",
    glow: "hover:shadow-violet-500/10", badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/25 hover:border-violet-400/40",
    icon: "☁", num: "03", bar: "bg-violet-500",
  },
  {
    accent: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5",
    glow: "hover:shadow-emerald-500/10", badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/25 hover:border-emerald-400/40",
    icon: "◈", num: "04", bar: "bg-emerald-500",
  },
  {
    accent: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/5",
    glow: "hover:shadow-orange-500/10", badge: "bg-orange-500/10 text-orange-300 border border-orange-500/20 hover:bg-orange-500/25 hover:border-orange-400/40",
    icon: "◉", num: "05", bar: "bg-orange-500",
  },
];

const totalSkills = skills.reduce((acc, s) => acc + s.details.split(",").length, 0);

const stats = [
  { label: "Technologies", value: totalSkills + "+" },
  { label: "Years Experience", value: "5+" },
];

const Skills = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  return (
    <section id="skills" className="min-h-screen py-20 px-6 text-white flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="display-font text-4xl font-black text-white">Skills & Technologies</h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-12 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 text-center">
              <p className="display-font text-2xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Skill cards — first 4 in 2x2 grid, last one full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill, index) => {
            const cfg = categoryConfig[index % categoryConfig.length];
            const techList = skill.details.split(",").map(t => t.trim());
            const isLast = index === skills.length - 1;

            return (
              <motion.div
                key={index}
                className={`
                  relative p-6 rounded-2xl border ${cfg.border} ${cfg.bg}
                  hover:shadow-xl ${cfg.glow} transition-all duration-300 overflow-hidden
                  ${isLast ? "sm:col-span-2" : ""}
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
              >
                {/* Large decorative number */}
                <span className={`absolute top-4 right-5 display-font text-6xl font-black opacity-5 ${cfg.accent} select-none`}>
                  {cfg.num}
                </span>

                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${cfg.bg} border ${cfg.border} flex items-center justify-center text-lg ${cfg.accent}`}>
                      {cfg.icon}
                    </div>
                    <h3 className={`display-font text-base font-bold ${cfg.accent} tracking-wide`}>
                      {skill.category}
                    </h3>
                  </div>
                  <span className={`text-xs font-mono ${cfg.accent} opacity-60`}>
                    {techList.length} skills
                  </span>
                </div>

                {/* Thin accent bar */}
                <div className="h-px bg-gray-800 mb-5 relative overflow-hidden rounded-full">
                  <motion.div
                    className={`absolute left-0 top-0 h-full ${cfg.bar} opacity-60 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min((techList.length / 16) * 100, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {techList.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${cfg.badge} transition-all duration-200 cursor-default`}
                      whileHover={{ scale: 1.08 }}
                      onHoverStart={() => setHoveredBadge(`${index}-${idx}`)}
                      onHoverEnd={() => setHoveredBadge(null)}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;