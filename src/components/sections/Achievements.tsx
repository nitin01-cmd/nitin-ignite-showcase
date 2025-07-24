import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Target, Award, Star, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon (SIH)",
      description: "Qualified for finals in 1st year of college, demonstrating exceptional innovation and problem-solving under pressure.",
      details: [
        "National-level competition",
        "Top finalist position",
        "Innovation in AI/ML domain",
        "Team leadership experience"
      ],
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "DotSlash Hackathon - Plaksha University",
      description: "Secured top 75 ranking out of 1500+ participating teams through rapid prototype development.",
      details: [
        "Top 75 out of 1500+ teams",
        "Led team to success",
        "Rapid prototype development",
        "Technical excellence recognition"
      ],
      icon: Target,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Hackathon Leadership",
      description: "Participated in 19+ hackathons with 17 as Team Leader, showcasing consistent leadership and technical expertise.",
      details: [
        "19+ hackathons participated",
        "17 times Team Leader",
        "Consistent performance",
        "Mentorship skills developed"
      ],
      icon: Users,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "AlgoStorm Organizer",
      description: "Organized and mentored programming competitions, creating challenging problems and hosting mock interviews.",
      details: [
        "Competition organizer",
        "Problem setter",
        "Junior mentorship",
        "Mock interview host"
      ],
      icon: Star,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    {
      number: "98%",
      label: "Class 10 Score",
      icon: Award
    },
    {
      number: "19+",
      label: "Hackathons",
      icon: Trophy
    },
    {
      number: "17",
      label: "Team Leader",
      icon: Users
    },
    {
      number: "6+",
      label: "Certifications",
      icon: Star
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones that mark the journey from zero to hero in the tech world
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group hover:scale-105">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <stat.icon className="text-primary" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-start mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} mr-6 flex-shrink-0`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {achievement.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-2">
                    <Zap className="text-primary flex-shrink-0" size={16} />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-primary text-white max-w-4xl mx-auto">
            <blockquote className="text-2xl font-medium mb-4">
              "Success is not just about reaching the destination, but about the courage to start the journey with nothing but determination."
            </blockquote>
            <cite className="text-lg opacity-90">- My philosophy that drove every achievement</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;