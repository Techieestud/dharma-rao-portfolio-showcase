
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  progress: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML5', progress: 90 },
    { name: 'CSS3', progress: 85 },
    { name: 'JavaScript', progress: 80 },
    { name: 'Bootstrap', progress: 85 }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3 className="text-xl font-bold mb-2 text-primary">{skill.name}</h3>
              <div className="progress-bar">
                <div 
                  ref={el => progressRefs.current[index] = el}
                  className="progress-fill w-0" 
                  data-progress={skill.progress}
                ></div>
              </div>
              <p className="mt-2 text-secondary">{skill.progress}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
