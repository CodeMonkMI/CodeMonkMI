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
      <div className="mb-3 mt-2">
        <h2 className="text-xl mb-2 hidden">Achievements</h2>

        <div className="gap-x-2 grid grid-cols-2">
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
