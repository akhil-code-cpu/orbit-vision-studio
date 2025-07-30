import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Team() {
  const navigate = useNavigate();

  const team = [
    {
      name: "Soumyajit Banerjee",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Visionary leader with 8+ years of experience in software development and business strategy.",
      skills: ["Leadership", "Strategy", "Full-Stack Development"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Priya Sharma",
      role: "CTO & Lead Architect",
      image: "/placeholder.svg",
      bio: "Technology enthusiast specializing in scalable architecture and cloud-native solutions.",
      skills: ["System Architecture", "Cloud Computing", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Rahul Kumar",
      role: "Senior Full-Stack Developer",
      image: "/placeholder.svg",
      bio: "Passionate developer with expertise in modern web technologies and mobile applications.",
      skills: ["React", "Node.js", "React Native"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Anita Patel",
      role: "UI/UX Design Lead",
      image: "/placeholder.svg",
      bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
      skills: ["UI/UX Design", "Prototyping", "User Research"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Vikram Singh",
      role: "DevOps Engineer",
      image: "/placeholder.svg",
      bio: "Infrastructure expert ensuring reliable, scalable, and secure deployment solutions.",
      skills: ["AWS", "Docker", "Kubernetes"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Neha Gupta",
      role: "QA Lead",
      image: "/placeholder.svg",
      bio: "Quality assurance specialist ensuring bug-free and performant applications.",
      skills: ["Test Automation", "Performance Testing", "Quality Assurance"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Arjun Mehta",
      role: "Mobile App Developer",
      image: "/placeholder.svg",
      bio: "Mobile development expert creating cross-platform applications with native performance.",
      skills: ["Flutter", "React Native", "iOS/Android"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Kavya Reddy",
      role: "Product Manager",
      image: "/placeholder.svg",
      bio: "Product strategist ensuring our solutions align with market needs and user expectations.",
      skills: ["Product Strategy", "Market Research", "Agile Management"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team of talented professionals brings together years of experience, 
              innovative thinking, and a shared passion for creating exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0" asChild>
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0" asChild>
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in fostering an environment where creativity thrives, collaboration flourishes, 
              and every team member can grow and contribute to our shared success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We encourage creative thinking and embrace new technologies to stay ahead of the curve."
              },
              {
                title: "Collaboration",
                description: "We believe the best solutions come from diverse perspectives working together."
              },
              {
                title: "Growth",
                description: "We invest in our team's professional development and personal growth journey."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3"
              onClick={() => navigate('/career')}
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}