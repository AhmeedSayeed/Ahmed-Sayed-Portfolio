import { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/testimonials';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Client </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what colleagues and clients say about working with me
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`mb-16 ${
          isVisible ? 'animate-scale-in' : 'opacity-0'
        }`}>
          <div className="card-glass max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
            
            {/* Quote Icon */}
            <div className="text-6xl text-primary/20 mb-6">❝</div>
            
            {/* Testimonial Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed italic">
                {testimonialsData[currentIndex].testimonial}
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="font-bold text-primary text-lg">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonialsData[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-elegant group hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Author Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-colors"
                />
                <div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <div className="w-full h-px bg-gradient-to-r from-primary to-transparent mb-1"></div>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;