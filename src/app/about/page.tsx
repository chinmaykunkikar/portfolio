import { PageWrapper } from "@components/PageWrapper";
import ExperienceWidget from "@widgets/ExperienceWidget";
import HiWidget from "@widgets/HiWidget";
import IntroWidget from "@widgets/IntroWidget";
import PhotoWidget from "@widgets/PhotoWidget";
import ResumeWidget from "@widgets/ResumeWidget";
import LinkedInWidget from "@widgets/social/LinkedInWidget";

export default function About() {
  return (
    <PageWrapper className="[grid-auto-columns: 9rem] [grid-auto-rows: 9rem] lg:grid-rows-[9rem 9rem 9rem 9rem 9rem 9rem] mx-auto grid w-full max-w-[320px] grid-cols-2 gap-4 sm:max-w-screen-sm sm:grid-cols-4 lg:max-w-[1200px] lg:grid-cols-8">
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
    </PageWrapper>
  );
}
