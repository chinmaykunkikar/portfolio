import ContactWidget from "@widgets/ContactWidget";
import GitHubWidget from "@widgets/GitHubWidget";
import HelloWidget from "@widgets/HelloWidget";
import MapWidget from "@widgets/MapWidget";
import ProjectsWidget from "@widgets/ProjectsWidget";
import SkillsWidget from "@widgets/SkillsWidget";
import SpotifyWidget from "@widgets/SpotifyWidget";
import LinkedInWidget from "@widgets/social/LinkedInWidget";
import TwitterWidget from "@widgets/social/TwitterWidget";

export default function Home() {
  return (
    <div className="[grid-auto-columns: 9rem] [grid-auto-rows: 9rem] lg:grid-rows-[repeat(6, 9rem)] mx-auto grid w-full max-w-[320px] grid-cols-2 gap-4 sm:max-w-screen-sm sm:grid-cols-4 lg:max-w-[1200px] lg:grid-cols-8">
      <div className="order-1 col-span-2 row-span-2 sm:col-span-4">
        <HelloWidget />
      </div>
      <div className="order-2 col-span-2 row-span-2">
        <GitHubWidget />
      </div>
      <div className="order-3 col-span-2 row-span-2">
        <MapWidget />
      </div>
      <div className="order-4 col-span-2 row-span-2">
        <ProjectsWidget />
      </div>
      <div className="order-5 col-span-2 row-span-2">
        <LinkedInWidget />
      </div>
      <div className="order-6 col-span-2 row-span-2 sm:col-span-4">
        <SkillsWidget />
      </div>
      <div className="order-7 col-span-2 row-span-2">
        <SpotifyWidget />
      </div>
      <div className="order-8 col-span-2 row-span-2">
        <TwitterWidget />
      </div>
      <div className="order-9 col-span-2 row-span-2 sm:col-span-4">
        <ContactWidget />
      </div>
    </div>
  );
}
