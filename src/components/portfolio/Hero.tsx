import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/assets/chinmayi-final-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-portfolio-surface"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-portfolio-glow/20 rounded-full floating-animation"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-portfolio-accent/20 rotate-45 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-portfolio-glow/10 rounded-lg floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-left space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="block text-white font-black bg-black/20 px-2 py-1 rounded-lg backdrop-blur-sm" style={{ textShadow: '3px 3px 6px rgba(0,0,0,1), -1px -1px 2px rgba(0,0,0,1)' }}>Chinmayi</span>
                  <span className="block gradient-text">B</span>
                </h1>
                <p className="text-xl lg:text-2xl text-portfolio-neutral font-light">
                  Aspiring Tech + Design Enthusiast
                </p>
                <p className="text-lg text-portfolio-neutral/80">
                  Building, Learning, Growing
                </p>
              </div>

              <div className="prose prose-lg text-portfolio-neutral/90 max-w-none">
                <p>
                  3rd-year Computer Science and Business Systems student passionate about 
                  blending technology with real-world problem-solving. Currently exploring 
                  the intersection of innovation and impact.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="portfolio" 
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="glow-effect"
                >
                  View My Work
                </Button>
                <Button 
                  variant="portfolioOutline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Connect
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="mailto:chinmayib209@gmail.com" 
                  className="p-3 rounded-full bg-portfolio-surface border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Mail className="w-5 h-5 text-portfolio-glow" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/chinmayi-b-75ab1b2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-portfolio-surface border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Linkedin className="w-5 h-5 text-portfolio-glow" />
                </a>
                <a 
                  href="https://github.com/23CSBS271" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-portfolio-surface border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Github className="w-5 h-5 text-portfolio-glow" />
                </a>
                <a 
                  href="https://www.instagram.com/__chinmayi_gowda_/profilecard/?igsh=eWZkN3F2YmV5MHBm"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-portfolio-surface border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Instagram className="w-5 h-5 text-portfolio-glow" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center lg:justify-end fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-portfolio-glow/30 shadow-2xl portfolio-glow">
                  <img 
                    src={profileImage} 
                    alt="Chinmayi B - Portfolio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-portfolio-glow/20 rounded-full blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '1s' }}>
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronDown className="w-6 h-6 text-portfolio-glow animate-bounce group-hover:text-portfolio-glow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;