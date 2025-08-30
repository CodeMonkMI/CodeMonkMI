import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/projects";

// 6. Skills
export const Skills = () => (
  <div className="w-full h-full overflow-hidden overflow-y-auto scrollbar-hide scrollbar-hover">
    <div className="my-2">
      <h2 className="text-xl mb-2 my-1 hidden">Skills</h2>

      <div className="space-y-2 items-center flex flex-wrap gap-x-1 gap-y-0">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="overflow-hidden hover:shadow-lg bg-primary/10 px-2.5 py-1.5 transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="p-0">
                <div
                  key={skill.id}
                  className="flex flex-col items-center p-0 rounded-lg hover:shadow-md transition-all"
                >
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
