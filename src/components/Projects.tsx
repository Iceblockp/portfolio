"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  category: "Web" | "Mobile" | "All";
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "Web" | "Mobile" | "All"
  >("All");

  const projects: Project[] = [
    {
      title: "Baranie Beauty Platform",
      description:
        "A comprehensive beauty service platform built with AWS infrastructure and RESTful APIs. Features include service booking, provider management, and real-time scheduling powered by AWS services.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "AWS RDS",
        "REST API",
        "Tailwind CSS",
      ],
      image: "/img/baranie.png",
      link: "https://baranie.com",
      category: "Web",
    },
    {
      title: "Baranie User Mobile App",
      description:
        "A user-friendly mobile application for customers to discover, book, and manage beauty services. Features include easy appointment booking, real-time notifications, and service provider reviews.",
      technologies: [
        "React Native",
        "Redux",
        "Node.js",
        "AWS DynamoDB",
        "REST API",
        "Stripe",
      ],
      image: "/img/baranie-user.png",
      link: "#",
      category: "Mobile",
    },
    {
      title: "Baranie Business Mobile App",
      description:
        "A dedicated mobile application for beauty service providers to manage their business operations, including appointment scheduling, client management, and real-time business analytics on-the-go.",
      technologies: [
        "React Native",
        "Redux",
        "Node.js",
        "AWS DynamoDB",
        "REST API",
        "Stripe",
      ],
      image: "/img/baranie-mobile.png",
      link: "#",
      category: "Mobile",
    },
    {
      title: "Baranie Management System",
      description:
        "A sophisticated management platform leveraging AWS services and RESTful APIs for robust data management, offering tools for appointment scheduling, customer management, and real-time business analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Shadcn UI"],
      image: "/img/management-baranie.png",
      link: "https://management.baranie.com",
      category: "Web",
    },
    {
      title: "Financial Tracker App",
      description:
        "A comprehensive mobile application for personal and business financial management. Features include expense tracking, budget planning, financial analytics, and customizable reporting tools.",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "AWS"],
      image: "/img/financial-app.png",
      link: "https://apps.apple.com/financial-tracker",
      category: "Mobile",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing my projects and skills, built with Next.js and enhanced with smooth animations using Framer Motion.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "/img/portfolio.png",
      link: "#",
      category: "Web",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {["All", "Web", "Mobile"].map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category as "Web" | "Mobile" | "All")
              }
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 text-lg ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-purple-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
                <div className="relative overflow-hidden group aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-purple-500/70 to-blue-500/70 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium transform hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      {project.category === "Mobile"
                        ? "Early Access"
                        : "View Project"}
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Let&apos;s Work Together
            <svg
              className="w-6 h-6 ml-2"
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

export default Projects;
