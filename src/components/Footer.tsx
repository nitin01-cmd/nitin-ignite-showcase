import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-card to-background border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Nitin Kumar Singh
            </h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer | Ethical Hacker | AI-ML Researcher
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/nitin01-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nitin-singh-731793275/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:nitin152105@gmail.com"
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={16} className="text-red-500" /> 
              <span className="mx-1">©</span> 
              {currentYear}
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            "From zero tech background to national-level hackathons — building smart, secure, and impactful solutions."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;