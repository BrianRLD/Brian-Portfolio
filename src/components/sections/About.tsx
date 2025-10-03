"use client"

import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-custom text-colored p-6 md:p-10 lg:p-12"
    >
      {/* Contenedor principal con diseño responsive */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Grid principal: texto a la izquierda, imagen a la derecha en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Columna de texto */}
          <div className="flex flex-col space-y-6">
            {/* Título con animación de escritura */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-press-start)] typing">
              Who am I?
            </h1>

            {/* Párrafo descriptivo */}
            <p className="text-sm sm:text-base lg:text-lg fade-in leading-relaxed">
              I&apos;m Brian Amparo, a Web & API Developer with over 6 years of experience in Software development. A
              graduate of ITLA, focus on building scalable APIs, optimizing databases, and delivering backend solutions.
              My expertise includes JavaScript (Node.js, Express), Python, SQL/NoSQL databases, RESTful & GraphQL APIs,
              Docker, Git/GitHub, and cloud platforms like AWS and Azure, strong passion for clean code and automation.
            </p>
          </div>

          {/* Columna de imagen de perfil */}
          <div className="flex justify-center lg:justify-end">
            <div className="profile-fade-in">
              <Image
                src="/perfil.png"
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-full w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Grid de logos de tecnologías */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          {/* JavaScript */}
          <div className="logo-fade-in-1 logo-hover">
            <Image
              src="/javascript.png"
              alt="JavaScript logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* Node.js */}
          <div className="logo-fade-in-2 logo-hover">
            <Image
              src="/nodejs.png"
              alt="Node.js logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* Docker */}
          <div className="logo-fade-in-3 logo-hover">
            <Image
              src="/docker.png"
              alt="Docker logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* MongoDB */}
          <div className="logo-fade-in-4 logo-hover">
            <Image
              src="/mongodb.png"
              alt="MongoDB logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* Git */}
          <div className="logo-fade-in-5 logo-hover">
            <Image
              src="/git.png"
              alt="Git logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* React */}
          <div className="logo-fade-in-6 logo-hover">
            <Image
              src="/reactjs.png"
              alt="React.js logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


