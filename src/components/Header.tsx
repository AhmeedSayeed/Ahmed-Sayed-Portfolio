import { useState, useEffect } from 'react';
import { personalData } from '../data/personal';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              {personalData.name}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-primary hover:text-accent transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-border">
              <div className="flex flex-col space-y-6 mt-8">
                <h2 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  {personalData.name}
                </h2>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.id} asChild>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left py-3 px-4 rounded-lg transition-colors ${
                          activeSection === item.id 
                            ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                            : 'text-foreground hover:bg-accent/10 hover:text-accent'
                        }`}
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;