import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Health Buddy',
      description: 'AI-powered health prediction app using machine learning algorithms',
      tech: ['Python', 'React', 'Next.js', 'Tailwind', 'Google Colab'],
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Unreal Open World Terrain',
      description: '3D map environment built with Unreal Engine 5',
      tech: ['Unreal Engine 5', '3D Modeling', 'Game Design'],
      gradient: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all shadow-2xl hover:shadow-cyan-400/20 group"
            >
              <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />

              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/20 dark:bg-black/20 text-sm text-gray-700 dark:text-gray-300 border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium"
                >
                  <ExternalLink size={18} />
                  View
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 text-gray-800 dark:text-white font-medium"
                >
                  <Github size={18} />
                  Code
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
