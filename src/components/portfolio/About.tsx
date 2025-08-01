import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-portfolio-glow mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Personal Bio */}
            <div className="space-y-6 fade-in">
              <div className="prose prose-lg text-portfolio-neutral/90 max-w-none">
                <p className="text-lg leading-relaxed">
                  Hi, I'm <span className="text-portfolio-glow font-semibold">Chinmayi B</span>, 
                  currently pursuing Computer Science and Business Systems at P.E.S College of Engineering, Mandya. 
                  I'm passionate about blending technology with real-world problem solving, especially where 
                  innovation meets impact.
                </p>
                
                <p className="text-lg leading-relaxed">
                  What drives me is the curiosity to learn, create, and contribute meaningfully—whether 
                  it's through collaborative projects, exploring AI tools, or developing user-focused solutions. 
                  I believe in continuous growth, staying adaptable, and building with purpose.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-portfolio-neutral">
                  <MapPin className="w-5 h-5 text-portfolio-glow" />
                  <span>Mandya, Karnataka</span>
                </div>
                <div className="flex items-center gap-2 text-portfolio-neutral">
                  <Calendar className="w-5 h-5 text-portfolio-glow" />
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="portfolio-card rounded-2xl p-8 glow-effect">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-portfolio-glow/20 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-portfolio-glow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-portfolio-glow">
                          Bachelor of Engineering
                        </h4>
                        <p className="text-portfolio-neutral">
                          Computer Science and Business Systems
                        </p>
                        <p className="text-sm text-portfolio-neutral/70">
                          P.E.S College of Engineering, Mandya
                        </p>
                        <p className="text-sm text-portfolio-accent font-medium">
                          3rd Year (Ongoing)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Interests */}
          <div className="mt-16 fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-center mb-8">What I'm Passionate About</h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 portfolio-card rounded-xl glow-effect">
                <div className="w-12 h-12 bg-portfolio-glow/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-portfolio-glow mb-2">Innovation</h4>
                <p className="text-portfolio-neutral/80 text-sm">
                  Exploring cutting-edge technologies and creating solutions that make a difference
                </p>
              </div>

              <div className="text-center p-6 portfolio-card rounded-xl glow-effect">
                <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-portfolio-accent mb-2">Design</h4>
                <p className="text-portfolio-neutral/80 text-sm">
                  Crafting beautiful and intuitive user experiences through thoughtful design
                </p>
              </div>

              <div className="text-center p-6 portfolio-card rounded-xl glow-effect">
                <div className="w-12 h-12 bg-portfolio-glow/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-portfolio-glow mb-2">Collaboration</h4>
                <p className="text-portfolio-neutral/80 text-sm">
                  Working with diverse teams to bring innovative ideas to life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;