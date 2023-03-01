import GitHubWidget from "@components/widgets/social/GitHubWidget";
import ContactWidget from "@widgets/ContactWidget";
import HelloWidget from "@widgets/HelloWidget";
import MapWidget from "@widgets/MapWidget";
import ProjectsWidget from "@widgets/ProjectsWidget";
import SkillsWidget from "@widgets/SkillsWidget";
import LinkedInWidget from "@widgets/social/LinkedInWidget";
import TwitterWidget from "@widgets/social/TwitterWidget";
import SpotifyWidget from "@widgets/SpotifyWidget";

export default function Home() {
  return (
    <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <HelloWidget />
      <GitHubWidget />
      <MapWidget />
      <ProjectsWidget />
      <LinkedInWidget />
      <SkillsWidget />
      <SpotifyWidget />
      <TwitterWidget />
      <ContactWidget />
    </div>
  );
}
