"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import ExperienceCard from "../ExperienceCard";
import { experiences } from "../../constants/constants";

const textVariant = () => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
});

const Experience: React.FC = () => {
  return (
    <>
    <section id="experience" className="min-h-screen p-7">
      <motion.div initial="hidden" animate="visible" variants={textVariant()}>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-2">
          What I have done so far
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-5">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
      </section>
    </>
  );
};

export default Experience;
