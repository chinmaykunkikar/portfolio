import ContactWidget from "@components/widgets/contact";
import SkillsWidget from "@components/widgets/skills";
import HelloWidget from "@widgets/hello";
import LocationTimeWidget from "@widgets/location-time";
import ProjectsWidget from "@widgets/projects";
import GitHubWidget from "@widgets/social/github";
import LinkedInWidget from "@widgets/social/linkedin";
import TwitterWidget from "@widgets/social/twitter";
import SpotifyWidget from "@widgets/spotify";

export default function Home() {
  return (
    <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-32 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <HelloWidget />
      <LocationTimeWidget />
      <GitHubWidget />
      <ProjectsWidget />
      <LinkedInWidget />
      <SkillsWidget />
      <SpotifyWidget />
      <TwitterWidget />
      <ContactWidget />
    </div>
  );
}
