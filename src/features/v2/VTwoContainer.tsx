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
    <div className="bg-background lg:h-screen  py-5 overflow-y-auto">
      <div className="pl-3   md:container mx-auto h-full overflow-y-auto">
        <div className=" h-full w-full rounded-lg overflow-y-auto overflow-x-hidden flex justify-center items-center">
          <div className="bg-transparent w-full h-full grid grid-cols-1 lg:grid-cols-11 lg:grid-rows-7 lg:gap-0">
            <div className="lg:row-start-1 lg:row-end-2 auto-rows-min lg:col-start-1 lg:col-end-12 order-1 ">
              <NameAndDesignations />
            </div>
            <div className="lg:row-start-2 lg:row-end-6 lg:col-start-1 lg:col-end-4 order-4 mt-3 lg:mt-0">
              <Project />
            </div>

            <div className="lg:row-start-6 lg:row-end-8 lg:col-start-1 lg:col-end-4 order-7">
              <Education />
            </div>

            <div className="lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-9 order-3 mt-3 lg:mt-0">
              <AboutSection />
            </div>

            <div className="lg:row-start-3 lg:row-end-6 lg:col-start-8 lg:col-end-9 order-10">
              <ContactSocial />
            </div>

            <div className="lg:row-start-6 lg:row-end-7 lg:col-start-4 lg:col-end-9 order-6">
              <Skills />
            </div>

            <div className="lg:row-start-3 lg:row-end-6 lg:col-start-4 lg:col-end-8 order-2">
              <Photo />
            </div>

            <div className="lg:row-start-7 lg:row-end-8 lg:col-start-4 lg:col-end-9 order-9">
              <Achievements />
            </div>

            <div className="lg:row-start-2 lg:row-end-5 lg:col-start-9 lg:col-end-12 order-5  mt-3 lg:mt-0">
              <WorkExperience />
            </div>

            <div className="lg:row-start-5 lg:row-end-8 lg:col-start-9 lg:col-end-12 order-8  mt-3 lg:mt-0">
              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
