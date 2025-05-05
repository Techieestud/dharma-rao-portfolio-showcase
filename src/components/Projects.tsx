
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  techStack: string[];
  link: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Royal Grand Hotel",
      category: "Web design",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-1-img.png",
      techStack: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      link: "#"
    },
    {
      id: 2,
      title: "Happy Meals",
      category: "Web design",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png",
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather App",
      category: "Web Application",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-3-img.png",
      techStack: ["HTML5", "CSS3", "JavaScript", "API Integration"],
      link: "https://weatherappdrb.ccbp.tech"
    },
    {
      id: 4,
      title: "Food Munch",
      category: "Food Delivery App",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-4-img.png",
      techStack: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      link: "https://foodmunchdrb.ccbp.tech"
    },
    {
      id: 5,
      title: "E-commerce Store",
      category: "Online Shopping Platform",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-5-img.png",
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "#"
    },
    {
      id: 6,
      title: "Task Manager",
      category: "Productivity App",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-6-img.png",
      techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      link: "#"
    }
  ]);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">Projects I have done</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-6 transition-transform duration-300 hover:scale-105"
                  />
                  <h3 className="text-xl font-bold mb-1 text-primary text-center">{project.title}</h3>
                  <p className="text-sm text-secondary text-center">{project.category}</p>
                </div>
                
                <div className="project-card-back">
                  <h3 className="text-xl font-bold mb-4 text-primary">Tech Stack</h3>
                  <ul className="mb-6">
                    {project.techStack.map((tech, index) => (
                      <li key={index} className="mb-2 text-secondary">{tech}</li>
                    ))}
                  </ul>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-transparent"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
