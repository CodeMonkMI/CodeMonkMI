
import { skills, Skill } from '@/data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Layout, Palette, Wrench } from 'lucide-react';

const SkillsSection = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(skillsByCategory);

  // Map categories to icons
  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'frontend':
        return <Layout className="h-5 w-5" />;
      case 'backend':
        return <Server className="h-5 w-5" />;
      case 'database':
        return <Database className="h-5 w-5" />;
      case 'programming languages':
        return <Code className="h-5 w-5" />;
      case 'design':
        return <Palette className="h-5 w-5" />;
      default:
        return <Wrench className="h-5 w-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="mt-12">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="mb-6 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {getCategoryIcon(category)}
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skillsByCategory[category].map((skill) => (
                      <div key={skill.id} className="flex flex-col items-center p-4 bg-muted rounded-lg hover:shadow-md transition-all">
                        <span className="font-medium text-lg mb-2">{skill.name}</span>
                        <Badge variant="secondary">{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
