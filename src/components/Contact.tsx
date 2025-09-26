import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceID = 'service_45u8zne';
      const templateID = 'template_l96y4z8';
      const publicKey = 'lC_Xw8Ts-Xj5NZyeK';

      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Muhammad Uzair'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammaduzaires@gmail.com',
      href: 'mailto:muhammaduzaires@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+923169919319',
      href: 'tel:+923169919319'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Street Pakistan Masjid, Post Office Gujrat, District Mardan, Province KPK',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-space font-semibold text-2xl mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Drop me a line and let's start a conversation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-4 card-gradient border-border glow-hover transition-all hover:scale-[1.02]">
                  <a 
                    href={item.href} 
                    className="flex items-center gap-4 text-inherit hover:text-primary transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 glow-primary">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold font-space">{item.label}</div>
                      <div className="text-muted-foreground text-sm">{item.value}</div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="p-6 card-gradient border-border glow-primary">
              <div className="text-center">
                <h4 className="font-space font-semibold text-lg mb-2">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Let's discuss how we can bring your ideas to life
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <a href="tel:+923169919319">
                    <Phone className="w-4 h-4" />
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <Card className="p-8 card-gradient border-border glow-hover">
            <div className="space-y-6">
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-500 font-medium">Message sent successfully!</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-500 font-medium">Failed to send message. Please try again.</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-medium">First Name</Label>
                  <Input 
                    id="firstName"
                    placeholder="First Name"
                    className="bg-background/50 border-border focus:border-primary"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                  <Input 
                    id="lastName"
                    placeholder="Last Name"
                    className="bg-background/50 border-border focus:border-primary"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  className="bg-background/50 border-border focus:border-primary"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-medium">Subject</Label>
                <Input 
                  id="subject"
                  placeholder="Let's work together"
                  className="bg-background/50 border-border focus:border-primary"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-medium">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button 
                type="button" 
                variant="hero" 
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
