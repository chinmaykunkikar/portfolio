import ContactWidget from "app/components/widgets/ContactWidget";
import HelloWidget from "app/components/widgets/HelloWidget";
import MapWidget from "app/components/widgets/MapWidget";
import ProjectsWidget from "app/components/widgets/ProjectsWidget";
import SkillsWidget from "app/components/widgets/SkillsWidget";
import SpotifyWidget from "app/components/widgets/SpotifyWidget";
import GitHubWidget from "app/components/widgets/social/GitHubWidget";
import LinkedInWidget from "app/components/widgets/social/LinkedInWidget";
import TwitterWidget from "app/components/widgets/social/TwitterWidget";

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
