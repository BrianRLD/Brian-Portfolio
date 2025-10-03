"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp, FaFilePdf } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaLinkedin size={30} className="text-blue-500" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/brian-amparo-901874221/",
      hover: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram size={30} className="text-pink-500" />,
      label: "Instagram",
      href: "https://www.instagram.com/briandevelop/",
      hover: "hover:text-pink-400",
    },
    {
      icon: <FaEnvelope size={30} className="text-red-500" />,
      label: "Email",
      href: "mailto:briandevelop21@gmail.com",
      hover: "hover:text-red-400",
    },
    {
      icon: <FaWhatsapp size={30} className="text-green-500" />,
      label: "WhatsApp",
      href: "https://wa.me/18093182183",
      hover: "hover:text-green-400",
    },
    {
      icon: <FaFilePdf size={30} className="text-gray-300" />,
      label: "Download Resume",
      href: "https://drive.google.com/file/d/1KvU0etLwSrtlWTr7nBIxNs94NM-pcDGc/view?usp=sharing",
      hover: "hover:text-blue-500",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-custom p-8 text-white">
      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="text-gray-400 uppercase tracking-widest mb-2">Connect with me</p>
        <h2 className="text-4xl font-bold mb-8">Let&apos;s Talk!</h2>

        <div className="flex flex-col items-center gap-6">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 text-lg transition ${c.hover}`}
            >
              {c.icon} {c.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
