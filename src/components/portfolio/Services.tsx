import { Button } from "@/components/ui/button";
import { Palette, Code, Presentation, Users, ArrowRight } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces using modern design principles and tools.",
    features: ["Wireframing & Prototyping", "User Experience Research", "Interface Design", "Design Systems", "Responsive Design"],
    tools: ["Figma", "Canva", "Adobe XD"],
    color: "portfolio-glow",
    pricing: "Starting from ₹2,000"
  }, {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive websites and web applications with clean, efficient code.",
    features: ["Static Website Development", "Responsive Web Design", "Frontend Development", "Basic Backend Integration", "Performance Optimization"],
    tools: ["HTML", "CSS", "JavaScript", "Django", "Python"],
    color: "portfolio-accent",
    pricing: "Starting from ₹5,000"
  }, {
    icon: Presentation,
    title: "Event & Presentation Design",
    description: "Designing eye-catching posters, presentations, and visual content for events and organizations.",
    features: ["Event Poster Design", "Presentation Templates", "Social Media Graphics", "Brand Identity Design", "Print-Ready Materials"],
    tools: ["Canva", "Figma", "Adobe Creative Suite"],
    color: "portfolio-glow",
    pricing: "Starting from ₹500"
  }, {
    icon: Users,
    title: "Collaboration & Consultation",
    description: "Working closely with teams and individuals to bring creative ideas to life through technology.",
    features: ["Project Consultation", "Team Collaboration", "Technical Mentoring", "Design Reviews", "Problem Solving"],
    tools: ["Communication", "Project Management", "Technical Skills"],
    color: "portfolio-accent",
    pricing: "Contact for rates"
  }];
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Reflections</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-3xl mx-auto">
              Student-level services focused on collaboration, learning, and building meaningful projects together
            </p>
            <div className="w-24 h-1 bg-portfolio-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <div key={service.title} className="portfolio-card rounded-2xl p-8 glow-effect fade-in group" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 bg-${service.color}/20 rounded-xl group-hover:bg-${service.color}/30 transition-colors duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-portfolio-glow transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-portfolio-neutral/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What I Know:</h4>
                    <div className="space-y-2">
                      {service.features.map(feature => <div key={feature} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-portfolio-glow flex-shrink-0" />
                          <span className="text-portfolio-neutral/80 text-sm">{feature}</span>
                        </div>)}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map(tool => <span key={tool} className="px-3 py-1 bg-portfolio-surface rounded-lg text-sm text-portfolio-neutral border border-portfolio-glow/20">
                          {tool}
                        </span>)}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="border-t border-portfolio-glow/20 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        
                        
                      </div>
                      
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Collaboration Note */}
          <div className="portfolio-card rounded-2xl p-8 text-center fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Open to Collaboration</h3>
              <p className="text-portfolio-neutral/90 text-lg leading-relaxed mb-6">
                As a student, I'm especially interested in volunteer work, collaborative projects, and opportunities 
                to learn while contributing. I believe in building meaningful connections and growing together through 
                shared experiences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="portfolio" size="lg" onClick={scrollToContact} className="glow-effect">
                  Start a Project
                </Button>
                <Button variant="portfolioOutline" size="lg" onClick={scrollToContact}>
                  Discuss Ideas
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 fade-in" style={{
          animationDelay: '1s'
        }}>
            <div className="text-center">
              <div className="w-12 h-12 bg-portfolio-glow/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-portfolio-glow mb-2">Quick Turnaround</h4>
              <p className="text-portfolio-neutral/80 text-sm">
                Fast delivery without compromising on quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-portfolio-accent/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-portfolio-accent mb-2">Student-Friendly</h4>
              <p className="text-portfolio-neutral/80 text-sm">
                Affordable rates designed for students and small projects
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-portfolio-glow/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold text-portfolio-glow mb-2">Collaborative</h4>
              <p className="text-portfolio-neutral/80 text-sm">
                Working together to bring your vision to life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;