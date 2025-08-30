import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/projects";
import { CalendarDays } from "lucide-react";
// 3. Education
export const Education = () => (
  <div className="w-full h-full overflow-hidden overflow-y-auto scrollbar-hide scrollbar-hover ">
    <div className="pr-3 mt-3">
      <h2 className="text-xl mb-2">Education</h2>

      <div className="space-y-3">
        {education.map((edu) => (
          <Card
            key={edu.id}
            className="hover:cursor-pointer transition-colors duration-300"
          >
            <CardContent className="px-2.5 py-2  bg-primary/10">
              <div>
                <h3 className="text-sm font-bold">{edu.degree}</h3>
                <p className="text-sm font-medium mt-1">{edu.institution}</p>

                <div className="flex items-center text-xs mt-2 text-primary">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
