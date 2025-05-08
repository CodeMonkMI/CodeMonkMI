import { ArrowDown } from "lucide-react";
import { BasicInfo } from "./BasicInfo";
import { Image } from "./Image";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <BasicInfo />

          <Image />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={scrollToAbout}
            className="flex items-center justify-center p-2 rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
