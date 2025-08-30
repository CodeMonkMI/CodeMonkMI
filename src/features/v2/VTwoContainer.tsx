import {
  AboutSection,
  Achievements,
  Certifications,
  ContactSocial,
  Education,
  NameAndDesignations,
  Photo,
  Project,
  Skills,
  WorkExperience,
} from "./components";

export const VTwoContainer = () => {
  return (
    <div className="bg-background h-screen py-5">
      <div className="container mx-auto h-full">
        <div className=" h-full w-full rounded-lg overflow-hidden flex justify-center items-center">
          <div className="bg-transparent w-full h-full grid grid-cols-11 grid-rows-7 gap-0">
            <div className="row-start-1 row-end-2 col-start-1 col-end-12 ">
              <NameAndDesignations />
            </div>
            <div className="row-start-2 row-end-6 col-start-1 col-end-4 ">
              <Project />
            </div>

            <div className="row-start-6 row-end-8 col-start-1 col-end-4">
              <Education />
            </div>

            <div className="row-start-2 row-end-3 col-start-4 col-end-9 overflow-hidden">
              <AboutSection />
            </div>

            <div className="row-start-3 row-end-6 col-start-8 col-end-9">
              <ContactSocial />
            </div>

            <div className="row-start-6 row-end-7 col-start-4 col-end-9">
              <Skills />
            </div>

            <div className="row-start-3 row-end-6 col-start-4 col-end-8">
              <Photo />
            </div>

            <div className="row-start-7 row-end-8 col-start-4 col-end-9">
              <Achievements />
            </div>

            <div className="row-start-2 row-end-5 col-start-9 col-end-12">
              <WorkExperience />
            </div>

            <div className="row-start-5 row-end-8 col-start-9 col-end-12">
              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
