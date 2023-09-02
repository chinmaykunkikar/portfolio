import ContactWidget from "@widgets/ContactWidget";
import HelloWidget from "@widgets/HelloWidget";
import MapWidget from "@widgets/MapWidget";
import ProjectsWidget from "@widgets/ProjectsWidget";
import SkillsWidget from "@widgets/SkillsWidget";
import SpotifyWidget from "@widgets/SpotifyWidget";
import GitHubWidget from "@widgets/social/GitHubWidget";
import LinkedInWidget from "@widgets/social/LinkedInWidget";
import TwitterWidget from "@widgets/social/TwitterWidget";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[80rem] grid-cols-1 gap-4 p-3 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
      <div className="lg:row order-1 sm:col-span-2 lg:col-span-2">
        <HelloWidget />
      </div>
      <div className="order-2 sm:col-span-2 md:col-span-1">
        <GitHubWidget />
      </div>
      <div className="order-3 sm:col-span-2 md:col-span-1">
        <MapWidget />
      </div>
      <div className="order-4 sm:col-span-2 md:col-span-1">
        <ProjectsWidget />
      </div>
      <div className="order-5 sm:col-span-2 md:col-span-1">
        <LinkedInWidget />
      </div>
      <div className="order-6 sm:col-span-2">
        <SkillsWidget />
      </div>
      <div className="order-7 sm:col-span-2 md:col-span-1">
        <SpotifyWidget />
      </div>
      <div className="order-8 sm:col-span-2 md:col-span-1">
        <TwitterWidget />
      </div>
      <div className="order-9 sm:col-span-2 md:col-span-2">
        <ContactWidget />
      </div>
    </div>
  );
}
