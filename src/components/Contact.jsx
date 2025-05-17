import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
   
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const result = await emailjs.sendForm(
        'service_ljgoolq', 
        'template_iiyjgh6',
        e.target,
        'l-pTH52g0Y-9IKmbe'
      );
      console.log(e);
      console.log(result.text); 

      setResponseMessage('Thank you for your message. I will get back to you soon!');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setResponseMessage('There was an error submitting the form. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-10 px-5 text-white flex flex-col justify-center items-center">
 
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mt-32 text-cyan-400">Let’s connect and create something great together!</h2>
        
      </motion.div>

     
      <div className="max-w-6xl mx-auto w-full lg:w-1/2">
        <motion.h2 className="text-4xl font-bold mb-10 text-center">Contact</motion.h2>

      
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
              required
            />
          </div>

         

          <motion.button
            type="submit"
            class="w-full py-3 mt-4 bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-600"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </motion.button>
        </motion.form>

       
        {responseMessage && (
          <motion.div
            className="mt-6 text-center text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {responseMessage}
          </motion.div>
        )}
      </div>

      
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start mt-10 lg:mt-10">
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Info:</h3>
          <p className="text-lg mb-2">
            <strong>Phone: </strong>+1 (929) 301-6848
          </p>
          <p className="text-lg mb-2">
            <strong>Email: </strong>
            <a href="mailto:knb4003@nyu.edu" className="text-cyan-400 hover:underline">
              knb4003@nyu.edu
            </a>
          </p>
          <p className="text-lg">
            <strong>Location: </strong>New York, NY
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
