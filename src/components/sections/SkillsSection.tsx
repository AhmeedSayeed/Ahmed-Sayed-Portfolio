import { useState, useEffect } from 'react';
import { skillsData } from '../../data/skills';

const SkillsSection = () => {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Skills & </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering exceptional solutions through cutting-edge technologies and proven methodologies
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          isVisible ? 'animate-scale-in' : 'opacity-0'
        }`}>
          {skillsData.map((skill, index) => (
            <div 
              key={skill.id}
              className="card-elegant group hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{skill.icon}</span>
                </div>
              </div>

              {/* Skill Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Skills Tags */}
                {skill.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skill.skills.map((skillName, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                )}

                {/* Decorative line */}
                <div className="w-12 h-1 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;