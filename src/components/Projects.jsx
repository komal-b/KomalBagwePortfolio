import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants';

const categoryMeta = {
  'Full Stack':           { icon: '⚡', color: 'text-cyan-400',   border: 'border-cyan-500/40',   bg: 'bg-cyan-500/10',   activeBg: 'bg-cyan-500/20',   dotBg: 'bg-cyan-400',   btnBg: 'bg-cyan-500'   },
  'AI / ML':              { icon: '◈', color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', activeBg: 'bg-emerald-500/20', dotBg: 'bg-emerald-400', btnBg: 'bg-emerald-500' },
  'Cloud':                { icon: '☁', color: 'text-violet-400',  border: 'border-violet-500/40',  bg: 'bg-violet-500/10',  activeBg: 'bg-violet-500/20',  dotBg: 'bg-violet-400',  btnBg: 'bg-violet-500'  },
  'Distributed Systems':  { icon: '⟳', color: 'text-orange-400',  border: 'border-orange-500/40',  bg: 'bg-orange-500/10',  activeBg: 'bg-orange-500/20',  dotBg: 'bg-orange-400',  btnBg: 'bg-orange-500'  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(projects[0].category);
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProjects = projects.find(p => p.category === activeCategory)?.items || [];
  const meta = categoryMeta[activeCategory] || Object.values(categoryMeta)[0];

  return (
    <section id="projects" className="min-h-screen py-20 px-5 text-white flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Things I've built</p>
          <h2 className="display-font text-4xl font-black text-white">Projects</h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((cat) => {
            const m = categoryMeta[cat.category] || {};
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium
                  transition-all duration-200 hover:-translate-y-0.5 transform
                  ${isActive
                    ? `${m.activeBg} ${m.border} ${m.color}`
                    : 'bg-transparent border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300'
                  }
                `}
              >
                <span className="text-base">{m.icon}</span>
                <span className="display-font font-bold">{cat.category}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? m.bg : 'bg-gray-800'}`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {activeProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className={`group relative rounded-2xl overflow-hidden border border-gray-800 hover:${meta.border} bg-gray-900/40 cursor-pointer transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                  {/* Category badge on image */}
                  <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${meta.bg} ${meta.color} border ${meta.border}`}>
                    <span>{meta.icon}</span>
                    {activeCategory}
                  </div>
                  {/* In Progress badge */}
                  {project.description[0]?.startsWith('🚧') && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      In Progress
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="display-font text-lg font-bold text-white mb-2 group-hover:text-opacity-90">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-xs font-mono mb-4 line-clamp-1">{project.techStack}</p>
                  <div className="flex items-center justify-between">
                    <button className={`text-sm font-medium ${meta.color} hover:opacity-80 transition-opacity`}>
                      View Details →
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 hover:text-gray-300 text-xs transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg max-h-[85vh] overflow-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image */}
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-40 object-cover rounded-t-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-t-2xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-gray-900/80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors text-sm"
                >✕</button>
                <div className={`absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${meta.bg} ${meta.color} border ${meta.border}`}>
                  <span>{meta.icon}</span> {activeCategory}
                </div>
              </div>

              <div className="p-6">
                <h2 className="display-font text-2xl font-black text-white mb-4">{selectedProject.title}</h2>
                <ul className="space-y-2.5 mb-5">
                  {selectedProject.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${meta.dotBg}`} />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className={`${meta.bg} border ${meta.border} rounded-xl p-4 mb-5`}>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Tech Stack</p>
                  <p className={`${meta.color} text-sm font-mono`}>{selectedProject.techStack || 'N/A'}</p>
                </div>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 text-black ${meta.btnBg} hover:opacity-90`}
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;