import HiWidget from "@components/widgets/about-hi";
import ExperienceWidget from "@components/widgets/experience";
import IntroWidget from "@components/widgets/intro";
import PhotoWidget from "@components/widgets/photo";
import ResumeWidget from "@components/widgets/resume";
import LinkedInWidget from "@components/widgets/social/linkedin";

export default function About() {
  return (
    <div className="text-neutral-500">
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-12 md:px-20 lg:px-32 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
