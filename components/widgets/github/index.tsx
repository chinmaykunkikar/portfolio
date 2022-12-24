import GitHubLogo from "../../drawables/github";
import SocialWidget from "../social";

export default function GitHubWidget() {
  return (
    <SocialWidget
      cardColor="bg-[#211f1f]"
      socialUrl="https://github.com/chinmaykunkikar/"
    >
      <GitHubLogo width={96} height={96} fill="white" />
    </SocialWidget>
  );
}
