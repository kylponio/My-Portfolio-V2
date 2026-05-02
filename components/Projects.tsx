"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Chat System",
    image: "/project1.png",
    desc: "Real-time chat app using Socket.io",
  },
  {
    title: "Admin Dashboard",
    image: "/project2.png",
    desc: "Analytics dashboard with charts",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-16 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl mb-10 text-center text-white">
          My Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md 
              hover:shadow-blue-500/20 transition-all"
            >
              {/* IMAGE */}
              <div className="bg-black">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={500}
                  height={300}
                  className="w-full h-52 md:h-72 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {proj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}