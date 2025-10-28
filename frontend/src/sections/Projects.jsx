import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Code,
  Server,
  Globe,
  Cpu,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Quick GPT",
      description:
        "A full-stack chatbot web application built with Node.js, Express, and MongoDB, along with React as frontend",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "fullstack",
      github: "https://github.com/Sanjana013/QuickGPT",
      live: "https://quick-gpt-sigma.vercel.app/",
      featured: true,
      icon: Cpu,
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      title: "Joke Nest",
      description:
        "This project delivers a user-interactive website with an endless collection of freshly brewed jokes every single time!",
      technologies: ["HTML", "CSS", "JS", "Jokes API"],
      category: "frontend",
      github: "https://github.com/Sanjana013/JokeNest",
      live: "https://joke-nest.netlify.app/",
      featured: true,
      icon: Globe,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "Simon Says",
      description:
        "This project implements a digital version of the fun game - Simon Says!",
      technologies: ["HTML", "CSS", "JS"],
      category: "frontend",
      github: "https://github.com/Sanjana013/SimonSaysGame",
      live: "https://github.com/Sanjana013/SimonSaysGame",
      icon: Code,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "Auth Service",
      description:
        "A basic user sign-up and login authentication system with the frontend with scope of integration with a chat app called Yappspace which is still in development phase.",
      technologies: ["Node.js", "Express", "React", "MongoDB"],
      category: "backend",
      github: "https://github.com/Sanjana013/Auth-Implementation",
      live: "https://github.com/Sanjana013/Auth-Implementation",
      icon: Server,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com/Sanjana013/portfolio-website",
      live: "https://yourportfolio.com",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 6,
      title: "Sustainable Energy Dashboard",
      description:
        "A responsive AI-powered dashboard that simulates, predicts, and analyzes smart household energy consumption in real-time using clean energy data. Built using React, Node.js, Express, and Python.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Python"],
      category: "fullstack",
      github: "https://github.com/Sanjana013/sustainable-energy-dashboard",
      live: "https://sustainable-energy-dashboard-frontend.onrender.com/",
      icon: Cpu,
      color: "from-emerald-500 to-green-500",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg"
                  : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Background Gradient Effect - FIXED OPACITY */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                    initial={false}
                    animate={{
                      opacity: hoveredProject === project.id ? 0.03 : 0,
                    }}
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute top-6 right-6 z-10"
                    >
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 text-sm font-bold rounded-full shadow-lg">
                        Featured
                      </span>
                    </motion.div>
                  )}

                  {/* Project Icon */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <motion.div
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4 relative z-10">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                      whileHover={{ x: 2 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div className="flex flex-wrap gap-2 pt-4" layout>
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          custom={index}
                          variants={techVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            backgroundColor: "rgb(59 130 246)",
                            color: "white",
                          }}
                          className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 cursor-default shadow-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Project Links */}
                    <motion.div
                      className="flex items-center justify-between pt-6 mt-4 border-t border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                        whileHover={{ x: 5 }}
                      >
                        View Project
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </motion.div>
                      </motion.a>
                      <motion.span
                        className="text-sm text-gray-500 dark:text-gray-400 capitalize font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/Sanjana013"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
