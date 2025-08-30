import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/projects";
import { ExternalLink } from "lucide-react";
// 4. Certifications
export const Certifications = () => {
  const openLinks = () => {};
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto scrollbar-hide scrollbar-hover">
      <div className="pl-4 mb-3">
        <h2 className="text-xl mb-2">Certifications</h2>

        <div className="space-y-2">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-primary/10"
            >
              <CardContent className="p-0">
                <div className="p-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold line-clamp-2">
                      {cert.title}
                    </h3>
                    {cert.credentialLink && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs my-0.5">{cert.issuer}</p>
                  <div className="flex items-center text-primary text-xs">
                    {cert.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
