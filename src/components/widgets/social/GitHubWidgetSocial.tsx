import { GitHubLogo } from "@components/logos";
import { SocialWidget } from "@widgets/social";

export function GitHubWidgetSocial() {
  return (
    <SocialWidget
      label="GitHub"
      linkBgColor="bg-brand-github"
      linkRingColor="hover:ring-brand-github/[0.25]"
      socialUrl="https://github.com/chinmaykunkikar/"
      ariaLabel="GitHub Widget"
    >
      <GitHubLogo width={96} height={96} className="fill-brand-github" />
    </SocialWidget>
  );
}
