
import { useEffect, useRef } from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-bold mb-3 text-secondary">Hey,</h3>
          <h3 className="text-4xl md:text-5xl font-bold mb-3 text-secondary">I'm Dharma Rao</h3>
          <p className="text-xl mb-6 text-secondary">I'm a Frontend Developer</p>
          <a 
            href="https://www.linkedin.com/in/dharma-rao-bhupathi-2a002726a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-transparent"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
