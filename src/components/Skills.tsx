import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'Django', 'FastAPI', 'NumPy', 'Pandas', 'scikit-learn', 'Hugging Face', 'API Development', 'Full-Stack Integration'],
      color: 'bg-primary/20 text-primary border-primary/20'
    },
    {
      title: 'AI & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Feature Engineering', 'Predictive Modeling', 'ML Pipeline', 'Data Analytics', 'Data Visualization', 'Statistical Analysis'],
      color: 'bg-accent/20 text-accent border-accent/20'
    },
    {
      title: 'Automation & Workflow',
      skills: ['n8n Automation', 'Make (Integromat)', 'Notion Integration', 'GHL Automation', 'Business Workflow', 'Reporting Automation'],
      color: 'bg-green-500/20 text-green-500 border-green-500/20'
    },
    {
      title: 'Data & BI Tools',
      skills: ['Power BI', 'Excel', 'Data Cleaning', 'Data Preprocessing', 'Dashboard Development', 'Insight Generation'],
      color: 'bg-blue-500/20 text-blue-500 border-blue-500/20'
    },
    {
      title: 'Deployment & DevOps',
      skills: ['Docker', 'API Deployment', 'Model Serving', 'Scalable System Design'],
      color: 'bg-orange-500/20 text-orange-500 border-orange-500/20'
    },
    {
      title: 'Other Technical Skills',
      skills: ['Web Scraping', 'Data Extraction', 'CRM Systems', 'Research', 'Independent Project Execution'],
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
            A comprehensive toolkit for building modern, scalable applications and AI solutions
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