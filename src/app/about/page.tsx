import ExperienceWidget from "src/app/components/widgets/ExperienceWidget";
import HiWidget from "src/app/components/widgets/HiWidget";
import IntroWidget from "src/app/components/widgets/IntroWidget";
import PhotoWidget from "src/app/components/widgets/PhotoWidget";
import ResumeWidget from "src/app/components/widgets/ResumeWidget";
import LinkedInWidget from "src/app/components/widgets/social/LinkedInWidget";

export default function About() {
  return (
    <div className="text-neutral-500">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <HiWidget />
        <IntroWidget />
        <PhotoWidget />
        <ExperienceWidget />
        <LinkedInWidget />
        <ResumeWidget />
      </div>
    </div>
  );
}
