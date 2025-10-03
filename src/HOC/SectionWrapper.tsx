"use client";
import React from "react";

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <section id={idName} className="py-20 px-5 sm:px-10 md:px-20 bg-white">
        <Component />
      </section>
    );
  };

export default SectionWrapper;
