"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4 block tracking-wider uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-bold text-gray-900 mt-4 mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500">
              Creative Developer &
            </span>
            <br />
            <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Digital Craftsman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in crafting exceptional frontend experiences with React
            and Next.js, while also building powerful mobile applications with
            React Native. From responsive web apps to native mobile solutions, I
            bring ideas to life with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex justify-center gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 animate-pulse blur-3xl opacity-30" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 p-2">
              <div className="w-full h-full rounded-full bg-white overflow-hidden shadow-2xl">
                <Image
                  src="/img/my-photo.png"
                  alt="Profile Photo"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
