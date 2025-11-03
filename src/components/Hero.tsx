import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Anil Gopal Suthar ☁️
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light">
            Cloud Computing Enthusiast | DevOps Learner | Future Cloud Architect
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Mail, href: '#', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 hover:border-cyan-400/50 transition-all shadow-lg hover:shadow-cyan-400/20"
            >
              <Icon size={24} className="text-cyan-400" />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-cyan-400/50 transition-all relative overflow-hidden group"
        >
          <span className="relative z-10">View My Work</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white/20 rounded-full"
          />
        </motion.button>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-cyan-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
