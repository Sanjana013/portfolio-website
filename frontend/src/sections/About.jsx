import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "HTML", "CSS", "Tailwind CSS", "Next.js"],
      icon: Palette,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Express", "MongoDB", "SQL"],
      icon: Code,
      color: "text-green-600 dark:text-green-400",
    },
    {
      category: "Tools",
      technologies: ["Git", "AWS"],
      icon: Rocket,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      category: "Soft Skills",
      technologies: [
        "Problem Solving",
        "Team Collaboration",
        "Agile Methodology",
        "Communication",
        "Leadership",
      ],
      icon: Users,
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions
              and exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hello! I'm Sanjana Biswas
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a full-stack developer. I specialize in creating responsive,
                performant, and accessible digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a passion for creating
                solutions that make a difference in people's lives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities.
              </p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    5+
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </p>
                </div>
                {/* <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-green-600 dark:text-green-400"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.7, type: "spring" }}
                  >
                    3+
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Years Experience
                  </p>
                </div> */}
              </motion.div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className={`w-6 h-6 ${skill.color} mr-3`} />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
