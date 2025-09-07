import { useState, useEffect } from 'react';
import { personalData } from '../../data/personal';
import { projectsData } from '../../data/projects.js';
import profileImage from '../../assets/profile-pic.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-gradient-hero py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-elegant animate-float">
                <img 
                  src={profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-gold rounded-full opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">Hello, I'm </span>
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                {personalData.jobTitle}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalData.uspStatement}
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCTAClick}
                  className="btn-hero group relative overflow-hidden"
                >
                  <span className="relative z-10">{personalData.ctaText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <a 
                  href="https://drive.usercontent.google.com/download?id=1gEUs_9DZU-yiF6ejy-c6azA_tEnoalX4&export=download&authuser=0&confirm=t&uuid=92b2861a-0941-4a69-9663-a15b81dfc094&at=AN8xHoo8-A9MiOSwzLPMOj_FGPUu:1757186823187"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-primary">0+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{projectsData.length}+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;