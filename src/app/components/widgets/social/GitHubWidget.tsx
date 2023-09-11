import GitHubLogo from "src/app/components/drawables/github";
import SocialWidget from "src/app/components/widgets/social";

export default function GitHubWidget() {
  return (
    <SocialWidget
      linkBgColor="bg-social-github"
      linkRingColor="hover:ring-social-github/[0.25]"
      socialUrl="https://github.com/chinmaykunkikar/"
    >
      <GitHubLogo width={96} height={96} className="fill-social-github" />
    </SocialWidget>
  );
}
