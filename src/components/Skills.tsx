
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  progress: number;
  logo: string;
  color: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { 
      name: 'HTML5', 
      progress: 90, 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E44D26'
    },
    { 
      name: 'CSS3', 
      progress: 85, 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6' 
    },
    { 
      name: 'JavaScript', 
      progress: 80, 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E' 
    },
    { 
      name: 'Bootstrap', 
      progress: 85, 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: '#7952B3' 
    },
    { 
      name: 'React', 
      progress: 75, 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB' 
    },
    { 
      name: 'Tailwind CSS', 
      progress: 80, 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      color: '#38B2AC' 
    }
  ];

  // Ref for each progress bar
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const progress = progressBar.getAttribute('data-progress');
            if (progress) {
              progressBar.style.width = `${progress}%`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item group hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6 p-4 rounded-full bg-white flex items-center justify-center group-hover:rotate-y-180 transition-all duration-500">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`} 
                    className="w-16 h-16 object-contain" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{skill.name}</h3>
                <div className="w-full progress-bar">
                  <div 
                    ref={el => progressRefs.current[index] = el}
                    className="progress-fill w-0" 
                    data-progress={skill.progress}
                    style={{ backgroundColor: skill.color }}
                  ></div>
                </div>
                <p className="mt-2 text-secondary">{skill.progress}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-secondary">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['Git', 'API Integration', 'Responsive Design', 'UI/UX Principles'].map((skill, index) => (
              <div 
                key={index} 
                className="bg-primary bg-opacity-10 px-6 py-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-white cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
