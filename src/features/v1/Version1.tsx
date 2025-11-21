import { AboutSection } from "./AboutSection";
import { default as AchievementsSection } from "./AchievementsSection";
import { default as CertificationsSection } from "./CertificationsSection";
import { default as ContactSection } from "./ContactSection";
import { default as EducationSection } from "./EducationSection";
import { default as ExperienceSection } from "./ExperienceSection";
import { default as Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { default as Navbar } from "./Navbar";
import { default as ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillSection";

export const Version1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Version1;
