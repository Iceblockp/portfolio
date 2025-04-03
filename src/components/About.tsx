"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
    "Framer Motion",
    "Redux",
    "Node.js",
    "AWS",
    "Google Play Console",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Frontend Specialist
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a frontend specialist with expertise in creating beautiful,
              responsive, and user-centric web applications. My focus lies in
              crafting exceptional user experiences using React, Next.js, and
              modern frontend technologies. With a strong eye for design and
              deep understanding of frontend architecture, I transform ideas
              into seamless, interactive interfaces.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              While my core strength is in frontend development, I maintain a
              solid foundation in full-stack principles, allowing me to better
              collaborate with backend teams and understand the complete
              application lifecycle. I've successfully delivered production
              projects like baranie.com and management.baranie.com, showcasing
              my ability to create polished, performant web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl relative overflow-hidden border border-purple-100"
          >
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-50"
                >
                  <p className="text-gray-800 font-medium text-center">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            View My Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
