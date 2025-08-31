import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/data/projects";
import { Award, Star, Target, Trophy } from "lucide-react";
// 8. Achievements
export const Achievements = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "trophy":
        return <Trophy className="h-12 w-12 text-primary" />;
      case "star":
        return <Star className="h-12 w-12 text-primary" />;
      case "target":
        return <Target className="h-12 w-12 text-primary" />;
      case "award":
        return <Award className="h-12 w-12 text-primary" />;
      default:
        return <Trophy className="h-12 w-12 text-primary" />;
    }
  };
  return (
    <div className="w-full h-full overflow-hidden scrollbar-hide scrollbar-hover">
      <div className="mb-3 mt-2 pr-2.5 lg:pr-0">
        <h2 className="text-xl mb-2 lg:hidden mt-3 lg:mt-0">Achievements</h2>

        <div className="gap-y-2 sm:gap-x-2 grid sm:grid-cols-2 lg:grid-cols-2">
          {achievements.slice(0, 2).map((achievement) => (
            <Card
              key={achievement.id}
              className="hover:shadow-lg transition-all duration-300 p-0 overflow-hidden bg-primary/10"
            >
              <CardContent className="p-1.5">
                <h3 className="text-sm font-bold mb-2 text-primary">
                  {achievement.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
