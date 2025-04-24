import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
  className="bg-white p-6 rounded-xl shadow-md"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
      <h2 className="text-2xl font-bold text-indigo-600 mb-2">連絡先</h2>
      <p className="text-gray-800 mb-2">何かあればこちらからご連絡ください。</p>
      <ul className="text-blue-500">
        <li>メール: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li>GitHub: <a href="https://github.com/Ota26228" target="_blank" rel="noopener noreferrer">github.com/Ota26228</a></li>
      </ul>
    </motion.div>
  );
}

export default Contact;

