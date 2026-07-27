<main
  id="top"
  className="min-h-screen bg-[#0B1020] text-white"
></main>
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}