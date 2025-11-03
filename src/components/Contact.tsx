import { motion } from 'framer-motion';
import { Send, Download, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { Icon: Mail, text: 'anil@example.com' },
                { Icon: Phone, text: '+91 XXXXX XXXXX' },
                { Icon: MapPin, text: 'Bangalore, India' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{text}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-cyan-400/50"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-white transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-white transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-white transition-all resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
