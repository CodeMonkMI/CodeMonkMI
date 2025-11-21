import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Award, Star, Target, Trophy } from "lucide-react";

const AchievementsSection = () => {
  // Function to return the appropriate icon component
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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Achievements</h2>

        <div
          className={cn(
            "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            {
              "lg:grid-cols-3": achievements.length === 2,
            }
          )}
        >
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="text-center hover:shadow-lg transition-all duration-300 border-t-4 border-primary overflow-hidden"
            >
              <CardContent className="pt-6 pb-6 px-4 flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {getIcon(achievement.icon)}
                </div>

                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                <span className="text-sm font-medium bg-muted py-1 px-3 rounded-full">
                  {achievement.year}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
