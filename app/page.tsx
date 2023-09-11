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
    <div className="[grid-auto-columns: 18rem] [grid-auto-rows: 18rem] lg:grid-rows-[18rem 18rem 18rem] mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 sm:max-w-screen-sm sm:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4">
      <div className="order-1 sm:col-span-2">
        <HelloWidget />
      </div>
      <div className="order-2">
        <GitHubWidget />
      </div>
      <div className="order-3">
        <MapWidget />
      </div>
      <div className="order-4">
        <ProjectsWidget />
      </div>
      <div className="order-5">
        <LinkedInWidget />
      </div>
      <div className="order-6 sm:col-span-2">
        <SkillsWidget />
      </div>
      <div className="order-7">
        <SpotifyWidget />
      </div>
      <div className="order-8">
        <TwitterWidget />
      </div>
      <div className="order-9 sm:col-span-2">
        <ContactWidget />
      </div>
    </div>
  );
}
