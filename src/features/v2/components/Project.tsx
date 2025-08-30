import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

// 10. Project
export const Project = () => (
  <div className="w-full h-full overflow-hidden overflow-y-auto scrollbar-hide scrollbar-hover">
    <div className="pr-3 mb-3">
      <h2 className="text-xl mb-2 ml-1">Projects</h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="bg-primary/10 p-2">
                <div className="flex justify-between">
                  <h3 className="text-base font-bold mb-0">{project.title}</h3>
                  <div className="flex">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-foreground/80 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground my-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-2 mt-1 gap-y-0">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <p className="text-xs text-primary mb-1" key={tech}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
