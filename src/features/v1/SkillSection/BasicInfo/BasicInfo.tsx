import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const BasicInfo = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      <div className="space-y-3">
        <h2
          className="text-xl sm:text-2xl font-medium text-primary animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hello, I'm
        </h2>
        <h1 className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Monirul Islam
        </h1>
        <h3
          className="text-xl sm:text-2xl text-muted-foreground animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Frontend Developer & Software Engineer
        </h3>
      </div>

      <p
        className="text-lg text-muted-foreground max-w-md animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        I build exceptional digital experiences with modern technologies,
        focusing on creating robust, scalable, and user-friendly applications.
      </p>

      <div
        className="flex flex-wrap gap-4 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <a href="#contact">
          <Button className="px-6">Contact Me</Button>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="px-6">
            Resume
          </Button>
        </a>
      </div>

      <div
        className="flex items-center space-x-4 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
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
  );
};
