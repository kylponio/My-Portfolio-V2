"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">KYL PONIO</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-400 mt-3">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-5 max-w-md">
            I build modern, scalable, and high-performance web applications
            using Next.js, React, and Node.js.
          </p>

          {/* BUTTONS (FIXED - WORKING LINKS) */}
          <div className="flex gap-4 mt-6">

            {/* HIRE ME */}
            <a
              href="https://facebook.com/kylponio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
            >
              Hire Me
            </a>

            {/* LET'S TALK */}
            <a
              href="https://facebook.com/kylponio"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition"
            >
              Let's Talk
            </a>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-blue-400 text-xl">

            <a
              href="#home"
              className="hover:text-blue-500 transition"
            >
              🌐
            </a>

            <a
              href="https://github.com/kylponio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              🐙
            </a>

            <a
              href="https://facebook.com/kylponio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              💼
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* GLOW EFFECT */}
          <div className="absolute w-80 h-80 bg-blue-600 blur-[150px] opacity-30 rounded-full"></div>

          {/* IMAGE */}
          <Image
            src="/profile.jpg"
            alt="profile"
            width={350}
            height={350}
            className="rounded-xl object-cover relative z-10 grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}