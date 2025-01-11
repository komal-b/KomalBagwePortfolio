import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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

  const skills = [
    { category: "Programming Languages", details: "Python, Java, JavaScript" },
    { category: "Web Technologies", details: "HTML, CSS, React, TailWind" },
    { category: "Backend Frameworks", details: "Spring, Hibernate, JMS" },
    { category: "Machine Learning", details: "PyTorch, NumPy, Keras, TensorFlow" },
    { category: "Databases", details: "Oracle SQL Developer, MySQL, MongoDB, AWS S3" },
    { category: "DevOps", details: "Git, AWS, Docker" },
    { category: "IDEs", details: "Eclipse, IntelliJ IDEA, VisualStudio Code" },
    { category: "Tools", details: "Postman, Jira, Confluence, Splunk, GlobalScape EFT" },
    { category: "Testing", details: "Selenium, Cucumber" },
    { category: "Architecture", details: "Microservices" },
  ];

  return (
    <section id="skills" className="min-h-screen py-12 px-6 text-white flex flex-col items-center ">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg flex flex-col justify-between hover:shadow-cyan-500/50 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{skill.category}</h3>
              <p className="text-base text-gray-300 leading-relaxed">{skill.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
