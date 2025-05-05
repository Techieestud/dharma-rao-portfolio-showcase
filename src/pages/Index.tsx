
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

const Index = () => {
  // Apply scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section headings
    document.querySelectorAll("h2").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-5");
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll("h2").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-black text-secondary min-h-screen">
      <Navbar />
      <Hero />
      <div className="w-full h-px bg-gray-800"></div>
      <About />
      <div className="w-full h-px bg-gray-800"></div>
      <Projects />
      <div className="w-full h-px bg-gray-800"></div>
      <Skills />
      <div className="w-full h-px bg-gray-800"></div>
      <Education />
      <div className="w-full h-px bg-gray-800"></div>
      <Contact />
    </div>
  );
};

export default Index;
