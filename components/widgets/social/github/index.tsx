import GitHubLogo from "@drawables/github";
import SocialWidget from "@widgets/social";

export default function GitHubWidget() {
  return (
    <SocialWidget
      socialBgColor="bg-[#211f1f]"
      socialRingColor="hover:ring-[#211f1f]/[0.25]"
      socialUrl="https://github.com/chinmaykunkikar/"
    >
      <GitHubLogo width={96} height={96} fill="#211f1f" />
    </SocialWidget>
  );
}
