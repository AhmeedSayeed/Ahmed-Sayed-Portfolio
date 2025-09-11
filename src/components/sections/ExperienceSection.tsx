import { useState, useEffect } from 'react';
import { experienceData } from '../../data/experience';

const ExperienceSection = () => {
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

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Professional </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, innovation, and impactful contributions across diverse tech environments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-gold"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="card-glass group hover:shadow-gold">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {experience.company}
                      </h3>
                      <span className="text-[0.65rem] font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </div>

                    {/* Position */}
                    <h4 className="text-lg font-semibold text-accent mb-4">
                      {experience.position}
                    </h4>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Decorative element */}
                    <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;