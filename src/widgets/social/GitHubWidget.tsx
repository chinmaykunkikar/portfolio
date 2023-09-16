import GitHubLogo from "src/components/drawables/github";
import SocialWidget from "src/widgets/social";

export default function GitHubWidget() {
  return (
    <SocialWidget
      label="GitHub"
      linkBgColor="bg-brand-github"
      linkRingColor="hover:ring-brand-github/[0.25]"
      socialUrl="https://github.com/chinmaykunkikar/"
    >
      <GitHubLogo width={96} height={96} className="fill-brand-github" />
    </SocialWidget>
  );
}
