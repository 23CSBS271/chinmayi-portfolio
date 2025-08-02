import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init("IyOrRvn58PgdWyQh8");

      // Send email using EmailJS
      await emailjs.send(
        'service_elp57hd',     // Service ID
        'template_hj2k51h',    // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'chinmayib209@gmail.com'
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chinmayib209@gmail.com",
      href: "mailto:chinmayib209@gmail.com",
      color: "portfolio-glow"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chinmayi-b",
      href: "https://www.linkedin.com/in/chinmayi-b-75ab1b2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "portfolio-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/23CSBS271",
      href: "https://github.com/23CSBS271",
      color: "portfolio-glow"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@__chinmayi_gowda_",
      href: "https://www.instagram.com/__chinmayi_gowda_/profilecard/?igsh=eWZkN3F2YmV5MHBm",
      color: "portfolio-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-portfolio-neutral max-w-3xl mx-auto">
              Ready to collaborate, learn together, or discuss exciting projects? I'd love to hear from you!
            </p>
            <div className="w-24 h-1 bg-portfolio-glow mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="fade-in">
              <div className="portfolio-card rounded-2xl p-8 glow-effect">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-portfolio-neutral mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="bg-portfolio-surface border-portfolio-glow/20 focus:border-portfolio-glow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-portfolio-neutral mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="bg-portfolio-surface border-portfolio-glow/20 focus:border-portfolio-glow"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-portfolio-neutral mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-portfolio-surface border-portfolio-glow/20 focus:border-portfolio-glow"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-portfolio-neutral mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                      className="bg-portfolio-surface border-portfolio-glow/20 focus:border-portfolio-glow resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="portfolio" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full glow-effect"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 fade-in" style={{ animationDelay: '0.3s' }}>
              
              {/* Contact Details */}
              <div className="portfolio-card rounded-2xl p-8 glow-effect">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center gap-4 p-4 rounded-lg bg-portfolio-surface/50 hover:bg-portfolio-surface border border-portfolio-glow/20 hover:border-portfolio-glow/40 transition-all duration-300 group"
                      >
                        <div className={`p-3 bg-${item.color}/20 rounded-lg group-hover:bg-${item.color}/30 transition-colors duration-300`}>
                          <IconComponent className={`w-5 h-5 text-${item.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className={`text-${item.color} text-sm hover:underline`}>{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="portfolio-card rounded-2xl p-8 glow-effect">
                <h3 className="text-xl font-bold mb-4 text-foreground">Let's collaborate on</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-glow rounded-full"></div>
                    <span className="text-portfolio-neutral">Student projects & assignments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                    <span className="text-portfolio-neutral">UI/UX design projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-glow rounded-full"></div>
                    <span className="text-portfolio-neutral">Web development tasks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                    <span className="text-portfolio-neutral">Creative design work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-portfolio-glow rounded-full"></div>
                    <span className="text-portfolio-neutral">Learning opportunities</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="text-center p-6 bg-portfolio-glow/10 rounded-xl border border-portfolio-glow/20">
                <h4 className="font-semibold text-portfolio-glow mb-2">Quick Response</h4>
                <p className="text-portfolio-neutral/80 text-sm">
                  I typically respond within 24 hours. For urgent projects, feel free to reach out via multiple channels!
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-4">Ready to start something amazing?</h3>
            <p className="text-portfolio-neutral mb-6 max-w-2xl mx-auto">
              Whether it's a small design task or a bigger collaborative project, I'm excited to work together and learn from each other.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="portfolio" 
                size="lg"
                asChild
                className="glow-effect"
              >
                <a href="mailto:chinmayib209@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me Directly
                </a>
              </Button>
              <Button 
                variant="portfolioOutline" 
                size="lg"
                asChild
              >
                <a href="https://www.linkedin.com/in/chinmayi-b-75ab1b2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;