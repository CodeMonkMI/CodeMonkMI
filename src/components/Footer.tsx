
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">
              Monirul<span className="text-foreground">Islam</span>
            </h3>
            <p className="text-muted-foreground mt-1">
              Frontend Developer & Software Engineer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/monirulislam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/monirulislam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:monirul@example.com" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Monirul Islam. All rights reserved.
            </p>
            
            <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
