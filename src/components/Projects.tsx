import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'HRMS with NLP Resume Screening System',
      subtitle: 'Final Year Project',
      role: 'Team Lead',
      description: 'Developed an intelligent resume screening system integrated into an HR management platform. Applied BERT embeddings and cosine similarity for semantic ranking of resumes.',
      highlights: [
        'Achieved 95% matching accuracy on the test dataset',
        'Designed and implemented the entire ML pipeline, including dataset preparation, model fine-tuning, evaluation, and deployment',
        'Integrated the solution into the HRMS using FastAPI for API deployment and full-stack system integration'
      ],
      technologies: ['Python', 'BERT', 'NLP', 'FastAPI', 'Machine Learning', 'Full-Stack Integration'],
      featured: true
    },
    {
      title: 'Placement Prediction Using IQ and CGPA',
      subtitle: 'End-to-End ML Project',
      role: 'ML Developer',
      description: 'Built supervised machine learning models to predict student job placement probability. Performed feature engineering, data preprocessing, and model evaluation.',
      highlights: [
        'Used scikit-learn and statistical methods to optimize accuracy',
        'Delivered insights into how academic and cognitive scores influence employability',
        'Complete end-to-end machine learning pipeline implementation'
      ],
      technologies: ['Python', 'scikit-learn', 'Machine Learning', 'Statistical Analysis', 'Data Preprocessing'],
      featured: true
    },
    {
      title: 'Customer Relationship Management (CRM) System',
      subtitle: 'Backend Django Project',
      role: 'Backend Developer',
      description: 'Created a Django-based CRM with role-based authentication and dynamic dashboards. Integrated analytics and reporting features for tracking customer engagement.',
      highlights: [
        'Implemented role-based authentication system',
        'Built dynamic dashboards with real-time analytics',
        'Focused on secure data handling and efficient backend design'
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'Authentication', 'Analytics', 'Backend Development'],
      featured: false
    },
    {
      title: 'Trademark Issuing Publication Scraper',
      subtitle: 'Web Scraping Project',
      role: 'Data Engineer',
      description: 'Built a web scraper to extract official trademark issuance data from the IP Gazette of Saudi Arabia. The system retrieves structured data and saves it for further analysis or use.',
      highlights: [
        'Extracts structured data (trademark name, registration number, publication date, class, owner, etc.)',
        'Automated data collection from official IP Gazette publications',
        'Saves data for dashboards, databases, and reporting purposes'
      ],
      technologies: ['Python', 'Web Scraping', 'Data Extraction', 'Data Processing', 'Automation'],
      featured: false
    },
    {
      title: 'Automated YouTube-to-Newsletter Workflow',
      subtitle: 'n8n Automation Project',
      role: 'Automation Engineer',
      description: 'Developed an automation workflow in n8n that monitors a YouTube channel for new videos, extracts video details, and uses AI to generate professional newsletters.',
      highlights: [
        'Monitors YouTube channels for new video uploads automatically',
        'Extracts video details (title, description, transcript, thumbnail)',
        'Uses Google Gemini AI to generate professional newsletters',
        'Automatically sends newsletters via Gmail/Substack'
      ],
      technologies: ['n8n', 'Google Gemini AI', 'YouTube API', 'Gmail', 'Substack', 'Automation'],
      featured: false
    },
    {
      title: 'AI-Powered Email Reply Automation',
      subtitle: 'n8n AI Workflow',
      role: 'AI Automation Developer',
      description: 'Developed an AI-driven workflow in n8n that automatically processes unread emails, generates professional draft replies using Google Gemini AI, and manages conversation data.',
      highlights: [
        'Automatically processes unread emails in real-time',
        'Generates professional draft replies using Google Gemini AI',
        'Stores conversation history in Airtable for tracking',
        'Marks emails as read and improves productivity'
      ],
      technologies: ['n8n', 'Google Gemini AI', 'Airtable', 'Email Automation', 'AI Workflows'],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            A showcase of my latest work in AI, Machine Learning, and Full-Stack Development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="p-6 card-gradient border-border glow-hover transition-all hover:scale-[1.02] group">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-space font-semibold text-xl">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20">
                    {project.role}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2 text-foreground">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="p-6 card-gradient border-border glow-hover transition-all hover:scale-[1.02]">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-space font-semibold text-lg">
                        {project.title}
                      </h4>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/20 text-xs">
                        {project.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h5>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;