import { Github, Linkedin, Mail } from "lucide-react";

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
            <p className="text-muted-foreground mt-1">Software Engineer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/mislam-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mislam-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mr.monirul.dev@gmail.com"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Monirul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
