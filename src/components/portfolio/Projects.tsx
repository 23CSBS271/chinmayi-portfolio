import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma, Calendar } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Listify - Online To-Do List App",
    description: "A comprehensive task management application built with Django and Python, featuring user authentication, CRUD operations, task categorization, and deadline reminders.",
    image: "/lovable-uploads/ed68f1de-19f8-4d8a-810d-7e72848dbc91.png",
    technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
    features: ["User Login & Authentication", "CRUD Task Functionality", "Task Categorization", "Status Filtering", "Pagination", "Deadline Reminders (In Progress)"],
    liveUrl: "#",
    githubUrl: "https://github.com/23CSBS271",
    status: "Completed",
    type: "Web Application"
  }, {
    title: "Trip.com Travel App UI",
    description: "Modern travel application interface designed in Figma, focusing on seamless booking experience and vibrant user journeys with emphasis on user flow and aesthetics.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    features: ["Modern Interface Design", "Seamless Booking Flow", "Vibrant User Experience", "Mobile-First Approach", "Interactive Prototyping"],
    figmaUrl: "#",
    status: "Completed",
    type: "UI/UX Design"
  }, {
    title: "Beat the Clock - Event Poster",
    description: "Eye-catching event poster design for Ascend Club activities, showcasing creative visual design skills using Canva and Figma with modern typography and engaging graphics.",
    image: "https://images.unsplash.com/photo-1558618047-71c0c3d54a28?w=600&h=400&fit=crop",
    technologies: ["Canva", "Figma", "Graphic Design"],
    features: ["Creative Visual Design", "Modern Typography", "Engaging Graphics", "Brand Consistency", "Print-Ready Format"],
    status: "Completed",
    type: "Graphic Design"
  }, {
    title: "Déjà View - Event Poster",
    description: "Sophisticated poster design for club event featuring artistic elements and professional layout, demonstrating advanced design principles and visual communication skills.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    technologies: ["Canva", "Figma", "Creative Design"],
    features: ["Artistic Elements", "Professional Layout", "Visual Communication", "Color Psychology", "Event Branding"],
    status: "Completed",
    type: "Graphic Design"
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400 bg-green-400/20";
      case "In Progress":
        return "text-portfolio-glow bg-portfolio-glow/20";
      default:
        return "text-portfolio-neutral bg-portfolio-surface";
    }
  };
  return <section id="projects" className="py-20 bg-portfolio-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-3xl mx-auto">
              A showcase of my work spanning web development, UI/UX design, and creative projects
            </p>
            <div className="w-24 h-1 bg-portfolio-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => <div key={project.title} className="portfolio-card rounded-2xl p-8 glow-effect fade-in group" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-portfolio-accent/20 text-portfolio-accent">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-portfolio-glow transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-portfolio-neutral/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-portfolio-surface rounded-lg text-sm text-portfolio-neutral border border-portfolio-glow/20">
                        {tech}
                      </span>)}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map(feature => <div key={feature} className="flex items-center gap-2 text-sm text-portfolio-neutral/80">
                        <div className="w-1.5 h-1.5 bg-portfolio-glow rounded-full"></div>
                        <span>{feature}</span>
                      </div>)}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && <Button variant="portfolio" size="sm" asChild>
                        
                      </Button>}
                    
                    {project.githubUrl && <Button variant="portfolioOutline" size="sm" asChild>
                        
                      </Button>}
                    
                    {project.figmaUrl && <Button variant="portfolioOutline" size="sm" asChild>
                        
                      </Button>}
                  </div>
                </div>
              </div>)}
          </div>

          {/* Call to Action */}
          
        </div>
      </div>
    </section>;
};
export default Projects;