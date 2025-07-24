import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hi Nitin,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:nitin152105@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your message will be sent via your default email client.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/nitin01-cmd",
      icon: Github,
      color: "hover:text-gray-600"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nitin-singh-731793275/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      platform: "Email",
      url: "mailto:nitin152105@gmail.com",
      icon: Mail,
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss exciting opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-card-hover transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Send className="text-primary" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="text-primary" />
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href="mailto:nitin152105@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      nitin152105@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Chhattisgarh, India</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-semibold mb-6">
                Connect on Social
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300 group ${link.color}`}
                  >
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium">{link.platform}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.platform === "Email" ? "nitin152105@gmail.com" : `@nitin-singh`}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-8 bg-gradient-primary text-white text-center">
              <h4 className="text-xl font-semibold mb-2">Ready to Start?</h4>
              <p className="mb-6 opacity-90">
                Let's turn your ideas into reality with cutting-edge technology and innovative solutions.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                asChild
              >
                <a href="#resume">
                  View My Resume
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;