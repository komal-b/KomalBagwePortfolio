import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-5 text-white flex flex-col justify-center items-center bg-transparent"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-400">
          Let’s connect and create something great together!
        </h2>
      </motion.div>

      <motion.div
        className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-center space-y-6 border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl font-medium flex items-center justify-center gap-3"
        >
          <Phone className="w-5 h-5 text-cyan-400" />
          <span>+1 (929) 301-6848</span>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl font-medium flex items-center justify-center gap-3"
        >
          <Mail className="w-5 h-5 text-cyan-400" />
          <a
            href="mailto:knb4003@nyu.edu"
            className="hover:underline text-cyan-300"
          >
            knb4003@nyu.edu
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl font-medium flex items-center justify-center gap-3"
        >
          <MapPin className="w-5 h-5 text-cyan-400" />
          <span>Manhattan, NY, USA</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
