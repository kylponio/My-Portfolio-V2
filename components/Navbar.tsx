"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50 
      backdrop-blur-md bg-black/40 border-b border-white/10 text-white">

        <h1 className="font-bold tracking-wide">KYL PONIO</h1>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl transition"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group capitalize"
            >
              {item}

              {/* HOVER LINE */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6 z-40 transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setOpen(false)}
            className="text-lg capitalize hover:text-blue-400 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}