import { Code, Palette, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "portfolio-glow",
      skills: ["HTML", "CSS", "JavaScript", "Python", "C", "C++ (OOP)", "SQL"]
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      color: "portfolio-accent",
      skills: ["Django", "Figma", "Canva", "Tinkercad", "OpenAI", "Git"]
    },
    {
      icon: Database,
      title: "Database & Backend",
      color: "portfolio-glow",
      skills: ["SQL", "Django ORM", "RESTful APIs", "Database Design"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      color: "portfolio-accent",
      skills: ["Figma", "Canva", "UI Design", "Prototyping", "User Research"]
    }
  ];

  const proficiencyLevels = [
    { skill: "HTML/CSS", level: 85 },
    { skill: "Canva", level: 85 },
    { skill: "Python", level: 75 },
    { skill: "Django", level: 70 },
    { skill: "Figma", level: 80 },
    { skill: "SQL", level: 50 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and designing intuitive user experiences
            </p>
            <div className="w-24 h-1 bg-portfolio-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className="portfolio-card rounded-2xl p-6 text-center glow-effect fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 bg-${category.color}/20 rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-portfolio-surface rounded-full text-sm text-portfolio-neutral border border-portfolio-glow/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proficiency Levels */}
          <div className="fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {proficiencyLevels.map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-portfolio-glow font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-portfolio-surface rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-portfolio-glow to-portfolio-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${item.level}%`,
                        animationDelay: `${index * 0.2 + 1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="mt-16 text-center fade-in" style={{ animationDelay: '1.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-portfolio-accent">Currently Learning</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
              {["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-portfolio-accent/20 text-portfolio-accent rounded-lg border border-portfolio-accent/30 font-medium hover:bg-portfolio-accent/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;