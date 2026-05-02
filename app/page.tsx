"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

type SectionKey = "home" | "about" | "skills" | "projects" | "contact";

const sections: Record<SectionKey, React.ReactNode> = {
  home: <Hero />,
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  contact: <Contact />,
};

export default function Home() {
  const [active, setActive] = useState<SectionKey>("home");

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-center gap-6 p-4 z-50 backdrop-blur bg-black/30">
        {(Object.keys(sections) as SectionKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`capitalize transition ${
              active === key ? "text-blue-500" : "text-gray-400"
            }`}
          >
            {key}
          </button>
        ))}
      </nav>

      {/* CONTENT */}
      <div className="pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {sections[active]}
          </motion.div>
        </AnimatePresence>
      </div>

    </main>
  );
}