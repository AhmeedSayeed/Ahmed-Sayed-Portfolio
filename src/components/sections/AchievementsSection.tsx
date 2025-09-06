import { useState, useEffect } from 'react';
import { achievementsData } from '../../data/achievements';

const AchievementsSection = () => {
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

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Certifications & </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and certifications that demonstrate expertise and commitment to excellence
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          isVisible ? 'animate-scale-in' : 'opacity-0'
        }`}>
          {achievementsData.map((achievement, index) => (
            <div 
              key={achievement.id}
              className="card-elegant group hover:shadow-gold cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Achievement Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-foreground">
                    {achievement.description}
                  </p>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {achievement.date}
                </div>

                {/* Achievement icon */}
                <div className="absolute top-4 left-4 text-3xl">🏆</div>
              </div>

              {/* Achievement Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-accent font-medium">
                  {achievement.organization}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative line */}
                <div className="w-12 h-1 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{achievementsData.length}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {achievementsData.reduce((max, item) => item.date > max.date ? item : max).date}
            </div>
            <div className="text-sm text-muted-foreground">Latest Cert</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;