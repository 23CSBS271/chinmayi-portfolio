import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "skills",
    label: "Skills"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "services",
    label: "Reflections"
  }, {
    id: "contact",
    label: "Contact"
  }];
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-portfolio-glow/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
            CB
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-colors duration-300 hover:text-portfolio-glow ${activeSection === item.id ? 'text-portfolio-glow' : 'text-portfolio-neutral'}`}>
                {item.label}
              </button>)}
            
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-colors duration-300">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-portfolio-glow/10 py-4">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left py-2 text-sm font-medium transition-colors duration-300 hover:text-portfolio-glow ${activeSection === item.id ? 'text-portfolio-glow' : 'text-portfolio-neutral'}`}>
                  {item.label}
                </button>)}
              <Button variant="portfolio" size="sm" onClick={() => scrollToSection('contact')} className="w-fit">
                Hire Me
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;