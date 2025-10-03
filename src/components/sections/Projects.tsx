"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../../constants/projects";
import { fadeIn, textVariant } from "../../utils/motion";

// Tipado de props del ProjectCard
type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer"
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.05}
        transitionSpeed={450}
        className="bg-gray-900 p-5 rounded-2xl sm:w-[360px] w-full shadow-lg"
      >
        {/* Imagen del proyecto */}
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Nombre y descripción */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="mt-2 text-gray-400 text-sm">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      {/* Títulos */}
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-gray-400 uppercase tracking-widest">My work</p>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
      </motion.div>

      {/* Descripción */}
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="mt-3 text-gray-300 text-base max-w-3xl leading-7 text-center"
        >
          Here are some projects that showcase my skills and experience through
          real-world examples. Each project includes a short description, links
          to the code repository, and technologies used.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
