import { PageWrapper } from "@components/PageWrapper";
import ExperienceWidget from "@widgets/ExperienceWidget";
import HiWidget from "@widgets/HiWidget";
import IntroWidget from "@widgets/IntroWidget";
import PhotoWidget from "@widgets/PhotoWidget";
import ResumeWidget from "@widgets/ResumeWidget";
import LinkedInWidget from "@widgets/social/LinkedInWidget";

export default function About() {
  return (
    <PageWrapper className="text-neutral-500">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <HiWidget />
        <IntroWidget />
        <PhotoWidget />
        <ExperienceWidget />
        <LinkedInWidget />
        <ResumeWidget />
      </div>
    </PageWrapper>
  );
}
