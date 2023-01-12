import GitHubLogo from "@drawables/github";
import SocialWidget from "@widgets/social";

export default function GitHubWidget() {
  return (
    <SocialWidget
      socialBgColor="bg-social-github"
      socialRingColor="hover:ring-social-github/[0.25]"
      socialUrl="https://github.com/chinmaykunkikar/"
    >
      <GitHubLogo width={96} height={96} className="fill-social-github" />
    </SocialWidget>
  );
}
