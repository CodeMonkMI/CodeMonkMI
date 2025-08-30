import { experiences } from "@/data/projects";
// 9. Work Experience
export const WorkExperience = () => (
  <div className="w-full h-full overflow-hidden overflow-y-auto scrollbar-hide hover:scrollbar-hover">
    <div className="pl-4 mb-3">
      <h4 className="text-xl mb-2">Work Experiences</h4>
      <div className="space-y-3">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative bg-primary/10">
            <div className=" rounded-xl p-3 shadow-md">
              <div className="">
                <h3 className="text-base font-bold">{experience.position}</h3>
                <h4 className="text-sm">{experience.company}</h4>
                <span className="text-primary text-xs font-semibold">
                  {experience.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
