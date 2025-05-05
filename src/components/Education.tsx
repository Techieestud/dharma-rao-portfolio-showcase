
import { useEffect, useRef } from 'react';

interface EducationItem {
  id: number;
  degree: string;
  field: string;
  institution: string;
  period: string;
  details: string[];
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Siddhartha Institute of Technology and Sciences",
      period: "2023 - 2027",
      details: [
        "Currently Pursuing",
        "Computer Science Stream",
        "Expected Graduation: 2027"
      ]
    },
    {
      id: 2,
      degree: "Intermediate",
      field: "Mathematics, Physics, Chemistry (MPC)",
      institution: "Your College Name",
      period: "2021 - 2023",
      details: [
        "Percentage: 96%",
        "Mathematics: 98%",
        "Physics: 95%",
        "Chemistry: 95%"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationItems.map(item => (
            <div key={item.id} className="education-card">
              <div className="education-card-inner">
                <div className="education-card-front">
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.degree}</h3>
                  <p className="text-secondary mb-2">{item.field}</p>
                  <p className="text-primary font-medium my-3">{item.institution}</p>
                  <p className="text-secondary text-sm opacity-80">{item.period}</p>
                </div>
                <div className="education-card-back">
                  <h4 className="text-lg font-bold mb-4 text-primary">Key Details</h4>
                  <ul>
                    {item.details.map((detail, index) => (
                      <li key={index} className="mb-2 text-secondary">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
