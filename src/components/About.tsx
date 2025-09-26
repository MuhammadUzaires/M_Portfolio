import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality for exceptional user experiences'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing every detail for lightning-fast, responsive applications'
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
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            With a keen eye for design and a strong foundation in modern technologies, I bring ideas to life 
            through elegant code and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-space font-semibold text-2xl sm:text-3xl">
              Turning Vision Into Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              high-performance applications using modern frameworks and tools. My approach 
              combines technical excellence with creative problem-solving to deliver 
              exceptional results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying ahead of industry trends.
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