import { Heart, ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-background border-t border-portfolio-glow/10">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Chinmayi B</h3>
              <p className="text-portfolio-neutral/80 leading-relaxed mb-4 max-w-md">
                Aspiring tech enthusiast passionate about creating meaningful solutions through 
                design and development. Always eager to learn, collaborate, and grow.
              </p>
              <div className="flex gap-4">
                <a href="mailto:chinmayib209@gmail.com" className="w-10 h-10 bg-portfolio-surface rounded-lg flex items-center justify-center border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110">
                  <span className="text-portfolio-glow">📧</span>
                </a>
                <a href="https://linkedin.com/in/chinmayi-b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-portfolio-surface rounded-lg flex items-center justify-center border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110">
                  <span className="text-portfolio-glow">💼</span>
                </a>
                <a href="https://github.com/23CSBS271" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-portfolio-surface rounded-lg flex items-center justify-center border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110">
                  <span className="text-portfolio-glow">💻</span>
                </a>
                <a href="https://instagram.com/chinmayi_gowda" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-portfolio-surface rounded-lg flex items-center justify-center border border-portfolio-glow/20 hover:border-portfolio-glow/50 transition-all duration-300 hover:scale-110">
                  <span className="text-portfolio-glow">📷</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects'].map(item => <li key={item}>
                    <button onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({
                  behavior: 'smooth'
                })} className="text-portfolio-neutral/80 hover:text-portfolio-glow transition-colors duration-300 text-sm">
                      {item}
                    </button>
                  </li>)}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Reflections</h4>
              <ul className="space-y-2">
                {['UI/UX Design', 'Web Development', 'Event Design', 'Collaboration'].map(item => <li key={item}>
                    <button onClick={() => document.getElementById('services')?.scrollIntoView({
                  behavior: 'smooth'
                })} className="text-portfolio-neutral/80 hover:text-portfolio-glow transition-colors duration-300 text-sm">
                      {item}
                    </button>
                  </li>)}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-portfolio-glow/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-portfolio-neutral/70 text-sm">
                <span>© {currentYear} Chinmayi B. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>and lots of learning</span>
              </div>

              {/* Back to Top */}
              <button onClick={scrollToTop} className="flex items-center gap-2 text-sm text-portfolio-glow hover:text-portfolio-accent transition-colors duration-300 group">
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Additional Note */}
          <div className="text-center mt-6 p-4 bg-portfolio-surface/30 rounded-lg border border-portfolio-glow/10">
            <p className="text-xs text-portfolio-neutral/60">
              Currently pursuing Computer Science and Business Systems at P.E.S College of Engineering, Mandya. 
              Open to learning opportunities, collaborations, and building meaningful connections.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;