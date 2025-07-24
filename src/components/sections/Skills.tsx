import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Brain, 
  Shield, 
  Wrench,
  Database,
  Monitor,
  Smartphone
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Firebase"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["Scikit-learn", "Pandas", "OpenCV", "Prompt Engineering", "TensorFlow", "NumPy"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Metasploit", "Wireshark", "Nmap", "OSINT", "Burp Suite", "Ethical Hacking"],
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["GitHub", "VS Code", "Postman", "Linux", "Docker", "AWS"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL", "Redis"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-xs bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">19+</div>
            <div className="text-muted-foreground">Hackathons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">17</div>
            <div className="text-muted-foreground">Team Leader</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;