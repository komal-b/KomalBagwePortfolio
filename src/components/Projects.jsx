import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-10 px-5 text-white flex flex-col justify-center items-center"
    > 
    <motion.h2 className="text-4xl font-bold mb-10 text-center">
      Projects
    </motion.h2>
      <div className="max-w-6xl mx-auto w-full">
        
          <>
           

            {projects.map((projectCategory) => (
              <motion.div
                key={projectCategory.category}
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl font-semibold mb-6"
                  variants={itemVariants}
                >
                  {projectCategory.category}
                </motion.h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center"
                  variants={containerVariants}
                >
                  {projectCategory.items.map((project) => (
                  <motion.div
                  key={project.title}
                  className="relative rounded-lg shadow-lg overflow-hidden transform transition-all"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 10px 30px rgba(0, 255, 255, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end bg-opacity-90">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <a
                      onClick={() => setSelectedProject(project)}
                      className="text-cyan-400 hover:underline cursor-pointer"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </>

      </div>
  {selectedProject && (
  <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    < div className="bg-gray-800  bg-gradient-to-t from-black to-transparent shadow-2xl shadow-cyan-500/50  p-8 rounded-lg w-96">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">{selectedProject.title}</h2>
      <p className="text-center text-l mb-4 text-white">{selectedProject.company}</p>
      <motion.p
        className="max-w-4xl mb-6 text-white text-lg"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <ul className="list-disc pl-6 text-white">
          {selectedProject.description.map((description, i) => (
            <motion.li key={i} className="text-sm">
              {description}
            </motion.li>
          ))}
        </ul>
      </motion.p>

      <motion.p
        className="text-white text-l mb-6"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <strong>Tech Stack: </strong>{selectedProject.techStack || 'N/A'}
      </motion.p>

      {selectedProject.github && (
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          View GitHub Repository →
        </a>
      )}

      <button
        onClick={closeModal}
        className="mt-6 text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg w-full"
      >
        Close
      </button>
    </div>
  </div>
)}


    </section>
  );
};

export default Projects;
