import { Award, BookOpen, CodeXml, Users } from "lucide-react";
import Card, { CardProps } from "./Card";
export const Cards = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.map((item) => (
          <Card
            description={item.description}
            icon={item.icon}
            title={item.title}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

const DATA: CardProps[] = [
  {
    description: "Building modern web applications with React and TypeScript",
    icon: <CodeXml size={30} className="text-primary" />,
    title: "Development",
  },
  {
    description: "Constantly upgrading skills and exploring new technologies",
    icon: <BookOpen size={30} className="text-primary" />,
    title: "Learning",
  },
  {
    description: "Committed to writing clean, maintainable, and efficient code",
    icon: <Award size={30} className="text-primary" />,
    title: "Quality",
  },
  {
    description: "Working effectively with cross-functional teams",
    icon: <Users size={30} className="text-primary" />,
    title: "Collaboration",
  },
];
