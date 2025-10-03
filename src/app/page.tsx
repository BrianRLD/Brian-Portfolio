import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <a href="https://drive.google.com/file/d/1KvU0etLwSrtlWTr7nBIxNs94NM-pcDGc/view?usp=sharing">CV</a>
    </>
  );
}