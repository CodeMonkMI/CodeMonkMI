import {
  AboutSection,
  Achievements,
  Certifications,
  ContactSocial,
  Education,
  ExtraCurricular,
  NameAndDesignations,
  Newsletter,
  Project,
  Skills,
  WorkExperience,
} from ".";

const GridLayout = () => {
  return (
    <div className="bg-background h-screen ">
      <div className=" mx-auto h-full">
        <div className=" h-full w-full border-2  rounded-lg overflow-hidden shadow-lg flex justify-center items-center">
          <div className="bg-transparent border w-full h-full grid grid-cols-11 grid-rows-7 gap-0">
            {/* left sections */}
            {/* about */}
            <div className="row-start-1 row-end-3 col-start-1 col-end-4 border">
              <AboutSection />
            </div>
            <div className="row-start-3 row-end-5 col-start-1 col-end-4 border">
              <ContactSocial />
            </div>
            <div className="row-start-5 row-end-6 col-start-1 col-end-4 border">
              <Education />
            </div>
            <div className="row-start-6 row-end-8 col-start-1 col-end-4 border">
              <Certifications />
            </div>
            {/* middle sections */}
            <div className="row-start-1 row-end-2 col-start-4 col-end-9 border">
              <NameAndDesignations />
            </div>
            {/* skill and photo section */}
            <div className="row-start-2 row-end-3 col-start-4 col-end-9 ">
              <Skills />
            </div>
            {/*  */}
            <div className="row-start-3 row-end-6 col-start-4 col-end-5 ">
              <Skills />
            </div>
            <div className="row-start-3 row-end-6 col-start-8 col-end-9 ">
              <Skills />
            </div>
            <div className="row-start-6 row-end-7 col-start-4 col-end-9 ">
              <Skills />
            </div>
            {/* skills section end */}
            {/* name and designations */}
            <div className="row-start-3 row-end-6 col-start-5 col-end-8 border">
              <NameAndDesignations />
            </div>

            {/* achievements */}
            <div className="row-start-7 row-end-8 col-start-4 col-end-9 border">
              <Achievements />
            </div>

            {/* right sections */}
            {/* about */}
            <div className="row-start-1 row-end-3 col-start-9 col-end-12 border">
              <WorkExperience />
            </div>
            <div className="row-start-3 row-end-5 col-start-9 col-end-12 border">
              <ExtraCurricular />
            </div>
            <div className="row-start-5 row-end-7 col-start-9 col-end-12 border">
              <Project />
            </div>
            <div className="row-start-7 row-end-8 col-start-9 col-end-12 border">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
