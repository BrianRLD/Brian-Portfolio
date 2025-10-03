"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["About", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-5xl focus:outline-none"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menú desplegable con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 right-4 bg-layout border border-gray-500 rounded-lg p-4 flex flex-col gap-4 shadow-lg"
          >
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="font-press-start text-sm hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </a>
              </li>
            ))}

            {/* Botón para descargar o abrir el CV */}
            <li>
              <a
                href="https://drive.google.com/file/d/1KvU0etLwSrtlWTr7nBIxNs94NM-pcDGc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-press-start text-sm hover:text-gray-300 transition-colors"
              >
                Download CV
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
