
import { useEffect, useRef } from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="https://res.cloudinary.com/dji0fdtcw/image/upload/v1724076331/WhatsApp_Image_2024-08-19_at_13.10.36_e4a088c2_fhj0nh.jpg" 
              alt="Dharma Rao" 
              className="w-3/4 md:w-full max-w-xs rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="w-full md:w-2/3 text-secondary">
            <p className="mb-6 text-lg">
              My name is Dharma Rao Bhupathi, and I am currently looking for a job in Frontend Development.
              I have experience working on projects as a Frontend Developer. I have a bachelor's
              degree in Computer science and Engineering. People find me to be an Upbeat, Self-motivated
              team player with excellent communication skills.
            </p>
            <p className="text-lg">
              I am a dedicated person with family of four. I enjoy reading, and the knowledge and
              perspective that my reading gives me have strengthened my teaching skills and
              presentation abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
