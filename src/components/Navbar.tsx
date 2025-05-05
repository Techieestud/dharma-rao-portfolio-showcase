
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/90 shadow-md' : 'py-4 bg-black'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex flex-col">
          <div className="flex items-center">
            <span className="text-primary text-2xl font-bold p-3 pb-2">D</span>
          </div>
          <span className="text-xs italic ml-3 text-secondary">bhupathi.dharmarao@gmail.com</span>
        </a>
        
        <button className="lg:hidden text-white p-2" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="hidden lg:flex items-center space-x-1">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="nav-link text-secondary hover:text-primary">
            Home
          </a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="nav-link text-secondary hover:text-primary">
            About me
          </a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="nav-link text-secondary hover:text-primary">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="nav-link text-secondary hover:text-primary">
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="nav-link text-secondary hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
