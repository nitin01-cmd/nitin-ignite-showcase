import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

const Resume = () => {
  const resumeUrl = "https://drive.google.com/file/d/1AhawMlTNPXyNe-TdjlIL53MT2sGAtMJ4/view?usp=sharing";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1AhawMlTNPXyNe-TdjlIL53MT2sGAtMJ4";

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300">
            
            {/* Header with actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/20">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Nitin Kumar Singh</h3>
                  <p className="text-muted-foreground">Full Stack Developer | Ethical Hacker | AI-ML Researcher</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href={resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    View Online
                  </a>
                </Button>
                
                <Button 
                  variant="hero" 
                  size="lg"
                  asChild
                >
                  <a 
                    href={downloadUrl}
                    download
                    className="flex items-center gap-2"
                  >
                    <Download size={20} />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="bg-background rounded-lg border border-border/50 overflow-hidden">
              <div className="aspect-[8.5/11] w-full">
                <iframe
                  src={`${resumeUrl}&embedded=true`}
                  className="w-full h-full border-0"
                  title="Nitin Kumar Singh Resume"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quick highlights */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Class 10 Score</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-1">19+</div>
                <div className="text-sm text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">6+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Interested in working together? Let's discuss how I can contribute to your team.
              </p>
              <Button 
                variant="glow" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;