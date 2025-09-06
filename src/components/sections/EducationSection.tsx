import { useState, useEffect } from 'react';
import { educationData } from '../../data/education';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Educational </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and academic excellence in computer science and emerging technologies
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${
          isVisible ? 'animate-scale-in' : 'opacity-0'
        }`}>
          {educationData.map((education, index) => (
            <div 
              key={education.id}
              className="card-elegant group hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Education Header */}
              <div className="mb-6">
                {/* Institution */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {education.institution}
                </h3>
                
                {/* Degree */}
                <h4 className="text-lg font-semibold text-accent mb-3">
                  {education.degree}
                </h4>

                {/* Date and GPA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {education.startDate} - {education.endDate}
                  </span>
                  <span className="text-sm font-bold text-accent">
                    GPA: {education.gpa}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {education.description}
              </p>

              {/* Achievement indicator */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-1 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-500"></div>
                <div className="text-2xl">🎓</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;