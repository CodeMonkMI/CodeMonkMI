
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </h2>
              <h1 className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Monirul Islam
              </h1>
              <h3 className="text-xl sm:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Frontend Developer & Software Engineer
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md animate-fade-in" style={{ animationDelay: '0.8s' }}>
              I build exceptional digital experiences with modern technologies, 
              focusing on creating robust, scalable, and user-friendly applications.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <a href="#contact">
                <Button className="px-6">
                  Contact Me
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-6">
                  Resume
                </Button>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <a 
                href="https://github.com/monirulislam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/monirulislam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:monirul@example.com" 
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto md:ml-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20">
                <img 
                  src="/lovable-uploads/3e1d3840-2036-46b8-a7fb-261be3a76a0f.png" 
                  alt="Monirul Islam" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-primary opacity-30 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <button 
            onClick={scrollToAbout}
            className="flex items-center justify-center p-2 rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
