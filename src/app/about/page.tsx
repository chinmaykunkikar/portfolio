import { PageWrapper } from "@components/PageWrapper";
import ExperienceWidget from "@widgets/ExperienceWidget";
import HiWidget from "@widgets/HiWidget";
import IntroWidget from "@widgets/IntroWidget";
import PhotoWidget from "@widgets/PhotoWidget";
import ResumeWidget from "@widgets/ResumeWidget";
import LinkedInWidget from "@widgets/social/LinkedInWidget";

export default function About() {
  return (
    <PageWrapper className="[grid-auto-columns: 18rem] [grid-auto-rows: 18rem] lg:grid-rows-[18rem 18rem 18rem] text-type mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 sm:max-w-screen-sm sm:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4">
      <HiWidget />
      <IntroWidget />
      <PhotoWidget />
      <ExperienceWidget />
      <LinkedInWidget />
      <ResumeWidget />
    </PageWrapper>
  );
}
