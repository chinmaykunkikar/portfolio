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
    <div className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
      <div className="order-1 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
        <HelloWidget />
      </div>
      <div className="order-2 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <GitHubWidget />
      </div>
      <div className="order-3 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <MapWidget />
      </div>
      <div className="order-4 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <ProjectsWidget />
      </div>
      <div className="order-5 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <LinkedInWidget />
      </div>
      <div className="order-6 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
        <SkillsWidget />
      </div>
      <div className="order-7 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <SpotifyWidget />
      </div>
      <div className="order-8 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <TwitterWidget />
      </div>
      <div className="order-9 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
        <ContactWidget />
      </div>
    </div>
  );
}
