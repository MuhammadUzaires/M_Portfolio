import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      color: 'bg-primary/20 text-primary border-primary/20'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
      color: 'bg-accent/20 text-accent border-accent/20'
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
      color: 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/20'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 card-gradient border-border glow-hover transition-all hover:scale-[1.02]">
              <h3 className="font-space font-semibold text-xl mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className={`${category.color} hover:scale-105 transition-transform cursor-default font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center card-gradient border-border glow-hover transition-all hover:scale-[1.05]">
              <div className="space-y-2">
                <div className="font-space font-bold text-3xl text-gradient">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;