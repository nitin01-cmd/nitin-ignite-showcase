import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Github, ExternalLink, Brain, Shield, Globe, Bot } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "WebCrawlerSentiment",
      description: "Advanced sentiment analysis crawler with real-time data processing and machine learning algorithms.",
      category: "AI/ML",
      technologies: ["Python", "Scikit-learn", "Pandas", "OpenCV"],
      github: "https://github.com/nitin01-cmd/webcrawlersentiment",
      demo: "",
      icon: Brain
    },
    {
      title: "CrowdPulse Detection",
      description: "AI-powered crowd monitoring system for real-time analysis and safety management.",
      category: "AI/ML",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      github: "https://github.com/nitin01-cmd/webcrawlersentiment",
      demo: "",
      icon: Brain
    },
    {
      title: "StockVeda Trading Hub",
      description: "Full-stack trading platform with prompt engineering and intelligent market analysis.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "MongoDB", "AI Prompts"],
      github: "https://github.com/nitin01-cmd/stockveda-trading-hub",
      demo: "",
      icon: Globe
    },
    {
      title: "Market Mindset Master",
      description: "Comprehensive financial education platform with interactive learning modules.",
      category: "Full Stack",
      technologies: ["React.js", "Express.js", "MongoDB", "Firebase"],
      github: "https://github.com/nitin01-cmd/market-mindset-master",
      demo: "",
      icon: Globe
    },
    {
      title: "Emergency Training System",
      description: "Disaster response platform for emergency preparedness and crisis management training.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "MongoDB", "Real-time Updates"],
      github: "https://github.com/nitin01-cmd/EmergencyTrainingSystem",
      demo: "",
      icon: Globe
    },
    {
      title: "ChirpIndia",
      description: "Twitter alternative social media platform with enhanced privacy and security features.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/nitin01-cmd/ChirpIndia",
      demo: "",
      icon: Globe
    },
    {
      title: "CyberSentinel",
      description: "Advanced cyber threat detection system with real-time monitoring and alert mechanisms.",
      category: "Cybersecurity",
      technologies: ["Python", "Metasploit", "Wireshark", "OSINT"],
      github: "https://github.com/nitin01-cmd/CyberSentinel",
      demo: "",
      icon: Shield
    },
    {
      title: "CamShield",
      description: "Camera and microphone security tool for privacy protection and unauthorized access detection.",
      category: "Cybersecurity",
      technologies: ["Python", "OpenCV", "System Security", "Privacy Tools"],
      github: "https://github.com/nitin01-cmd/CamShield",
      demo: "",
      icon: Shield
    },
    {
      title: "Password Strength Checker",
      description: "Real-time password strength analyzer with security recommendations and breach detection.",
      category: "Cybersecurity",
      technologies: ["JavaScript", "Python", "Cybersecurity", "Web APIs"],
      github: "https://github.com/nitin01-cmd/Real-Time-Password-Strength-Checker",
      demo: "",
      icon: Shield
    },
    {
      title: "Jarvis-like ChatBot",
      description: "AI assistant with advanced Python capabilities for task automation and intelligent conversations.",
      category: "AI Bots",
      technologies: ["Python", "AI/ML", "NLP", "Voice Recognition"],
      github: "https://github.com/nitin01-cmd/ChatBot",
      demo: "",
      icon: Bot
    },
    {
      title: "Local Experience Hub",
      description: "Travel-tech platform connecting tourists with authentic local experiences and cultural activities.",
      category: "Full Stack",
      technologies: ["React.js", "Node.js", "MongoDB", "Maps API"],
      github: "https://github.com/nitin01-cmd/Local-Experience-Hub",
      demo: "",
      icon: Globe
    }
  ];

  const categories = ["All", "AI/ML", "Full Stack", "Cybersecurity", "AI Bots"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML, cybersecurity, and full-stack development
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/20 mr-4">
                  <project.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="secondary"
                    className="text-xs bg-secondary/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  asChild
                  className="flex-1"
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button 
                    size="sm" 
                    variant="default"
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            asChild
          >
            <a 
              href="https://github.com/nitin01-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;