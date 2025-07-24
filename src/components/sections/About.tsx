import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Zap, Target, Brain, Shield } from "lucide-react";

const About = () => {
  const timeline = [
    {
      phase: "Class 10",
      achievement: "98% Board Exams",
      description: "Strong academic foundation",
      icon: GraduationCap,
    },
    {
      phase: "College Entry",
      achievement: "Zero Tech Background",
      description: "Started from absolute basics",
      icon: Target,
    },
    {
      phase: "First Year",
      achievement: "SIH Qualification",
      description: "National-level hackathon finals",
      icon: Trophy,
    },
    {
      phase: "Growth Phase",
      achievement: "Skills & Certifications",
      description: "Cisco, HP, AWS, Microsoft",
      icon: Brain,
    },
    {
      phase: "Present",
      achievement: "Real-World Impact",
      description: "AI, cybersecurity applications",
      icon: Shield,
    },
  ];

  const certifications = [
    "Cisco Certified Ethical Hacker",
    "HP LIFE Cybersecurity",
    "FreeCodeCamp ML with Python",
    "AWS Innovation & Transformation",
    "Microsoft AI & Cloud",
    "Accenture Digital Marketing"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From zero tech background to national-level achievements
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center gap-2">
                  <Zap className="text-primary" />
                  The Beginning
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I secured 98% in my Class 10th board exams, but I stepped into college with zero technical background or external support. What I had was hunger to learn, consistency to grow, and the courage to never give up.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center gap-2">
                  <Trophy className="text-primary" />
                  The Transformation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  By second year of B.Tech at Amity University Chhattisgarh, I was qualifying national-level hackathons, contributing to open-source, and building real-world AI and cybersecurity applications.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <item.icon className="text-primary" size={24} />
                        <h4 className="text-xl font-semibold text-accent">{item.phase}</h4>
                      </div>
                      <h5 className="text-lg font-medium mt-2 mb-1">{item.achievement}</h5>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;