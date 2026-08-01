import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoadingScreen from "../components/ui/LoadingScreen";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#0B1020] text-white"
    >
      <LoadingScreen />

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