import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Futuristic workspace background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float glow-primary" />
      <div className="absolute top-40 right-32 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-32 left-40 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1 className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl">
            <span className="text-gradient animate-gradient">Hi, it's me M.Uzair</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Empowering ideas through data-driven intelligence, I craft solutions that blend innovation, automation, and analytics to create real impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-card/50 backdrop-blur-sm hover:bg-card glow-hover transition-all"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center items-center pt-8">
            <a href="https://github.com/MuhammadUzaires" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-uzaires" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:muhammaduzaires@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;