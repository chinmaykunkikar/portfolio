import {
  ExperienceWidget,
  HiWidget,
  IntroWidget,
  LinkedInWidget,
  PhotoWidget,
  ResumeWidget,
} from "@widgets/index";

export default function About() {
  return (
    <div className="[grid-auto-columns: 9rem] [grid-auto-rows: 9rem] lg:grid-rows-[9rem 9rem 9rem 9rem 9rem 9rem] mx-auto grid w-full max-w-[320px] grid-cols-2 gap-4 sm:max-w-screen-sm sm:grid-cols-4 lg:max-w-[1200px] lg:grid-cols-8">
      <div className="col-span-2 row-span-2">
        <HiWidget />
      </div>
      <div className="col-span-2 row-span-2 sm:col-span-4">
        <IntroWidget />
      </div>
      <div className="col-span-2 row-span-2">
        <PhotoWidget />
      </div>
      <div className="col-span-2 row-span-2 sm:col-span-4">
        <ExperienceWidget />
      </div>
      <div className="col-span-2 row-span-2">
        <LinkedInWidget />
      </div>
      <div className="col-span-2 row-span-2">
        <ResumeWidget />
      </div>
    </div>
  );
}
