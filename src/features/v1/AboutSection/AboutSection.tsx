import { Cards } from "./Cards";
import { Summary } from "./Summary";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 place-items-center lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-7">
            <Summary />
          </div>
          <div className="lg:col-span-5">
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
