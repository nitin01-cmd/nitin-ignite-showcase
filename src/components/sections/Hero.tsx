import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-30 animate-glow" />
              <img 
                src="/lovable-uploads/483e508e-3b31-4371-afa8-3442d0816f72.png"
                alt="Nitin Kumar Singh"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nitin Kumar Singh
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-4 space-y-2">
              <div>Full Stack Developer</div>
              <div className="text-accent">•</div>
              <div>Ethical Hacker</div>
              <div className="text-accent">•</div>
              <div>AI-ML Researcher</div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              "From 0 tech background to national-level hackathons — building smart, secure, and impactful solutions."
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('resume')}
                className="group"
              >
                <Download className="group-hover:animate-bounce" />
                View Resume
              </Button>
              <Button 
                variant="glow" 
                size="xl"
                onClick={() => scrollToSection('projects')}
              >
                <ExternalLink />
                View Projects
              </Button>
              <Button 
                variant="accent" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                <Mail />
                Contact Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/nitin01-cmd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nitin-singh-731793275/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:nitin152105@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;