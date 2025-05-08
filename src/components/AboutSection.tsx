
import { CodeXml, BookOpen, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              I'm a passionate Frontend Developer and Software Engineer with over 5 years of experience 
              building modern web applications. I specialize in creating responsive, user-friendly interfaces 
              with React, Next.js, and TypeScript.
            </p>
            
            <p className="text-lg">
              My journey in software development began during my university years where I developed a strong 
              foundation in computer science and software engineering principles. Since then, I've worked 
              with various companies to deliver high-quality software solutions that meet business goals 
              and exceed user expectations.
            </p>
            
            <p className="text-lg">
              I'm particularly interested in creating performant web applications that provide excellent 
              user experiences while maintaining clean, maintainable code. I enjoy learning new technologies 
              and continuously improving my skills to stay at the forefront of web development.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through blog posts and community forums.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <CodeXml size={30} className="text-primary" />
                </div>
                <h4 className="font-bold mb-2">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building modern web applications with React and TypeScript
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <BookOpen size={30} className="text-primary" />
                </div>
                <h4 className="font-bold mb-2">Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Constantly upgrading skills and exploring new technologies
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Award size={30} className="text-primary" />
                </div>
                <h4 className="font-bold mb-2">Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Committed to writing clean, maintainable, and efficient code
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Users size={30} className="text-primary" />
                </div>
                <h4 className="font-bold mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Working effectively with cross-functional teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
