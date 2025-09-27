import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhammaduzair22003@gmail.com', label: 'Email' }
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-space font-bold text-2xl text-gradient">
              Muhammad Uzair
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Creating beautiful digital experiences through innovative design and clean code.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-space font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-space font-semibold text-lg">Let's Connect</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Ready to bring your next project to life?
              </p>
              <a 
                href="mailto:hello@yourname.com"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                hello@yourname.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Muhammad Uzair . All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
