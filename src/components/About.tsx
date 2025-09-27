import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Database, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Specializing in ML, Deep Learning, NLP, and Data Science to transform complex data into actionable insights'
    },
    {
      icon: Database,
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with Django, FastAPI, and modern frameworks for scalable solutions'
    },
    {
      icon: Zap,
      title: 'Automation & Integration',
      description: 'Creating intelligent workflows with n8n, Make, Notion integrations, and business automation platforms'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            I'm Muhammad Uzair — a Computer Science professional, AI Developer, and problem-solver 
            passionate about building intelligent systems and automation that make an impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-space font-semibold text-2xl sm:text-3xl">
              Innovation Meets Execution
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in <span className="text-primary font-medium">Machine Learning, Deep Learning, NLP, and Data Science</span>, 
              I specialize in turning complex data into actionable insights and scalable solutions. My work bridges the gap between 
              data-driven intelligence and practical business workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond AI, I craft seamless <span className="text-primary font-medium">end-to-end applications</span> by combining 
              backend frameworks like <span className="text-primary font-medium">Django and FastAPI</span> with modern automation 
              platforms such as <span className="text-primary font-medium">n8n, Make, and Notion integrations</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From <span className="text-primary font-medium">resume screening systems powered by BERT</span> to 
              <span className="text-primary font-medium"> workflow automations connecting GHL, Power BI, and CRMs</span>, 
              I thrive at transforming ideas into reality through clean code, elegant design, and efficient automation.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 card-gradient border-border glow-hover transition-all hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 glow-primary">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 font-space">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
