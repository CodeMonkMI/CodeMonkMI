
import { certifications } from '@/data/projects';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Certifications</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-4 flex items-center">
                  <Award className="h-10 w-10 text-primary mr-3" />
                  <h3 className="text-xl font-bold line-clamp-2">{cert.title}</h3>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline" className="font-medium">
                      {cert.issuer}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  {cert.credentialLink && (
                    <a 
                      href={cert.credentialLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 mt-2 font-medium transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
