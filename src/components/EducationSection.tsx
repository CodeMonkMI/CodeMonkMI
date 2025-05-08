
import { education } from '@/data/projects';
import { GraduationCap, CalendarDays } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.id} className="border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-lg font-medium mt-1">{edu.institution}</p>
                    
                    <div className="flex items-center text-muted-foreground mt-2">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    
                    {edu.description && (
                      <p className="text-muted-foreground mt-3">{edu.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
