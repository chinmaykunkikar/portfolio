import { LinkedInLogo } from "@components/logos";
import { SocialWidget } from "@widgets/social";

export function LinkedInWidget() {
  return (
    <SocialWidget
      label="LinkedIn"
      linkBgColor="bg-brand-linkedin"
      linkRingColor="hover:ring-brand-linkedin/[0.25]"
      socialUrl="https://www.linkedin.com/in/chinmaykunkikar/"
      ariaLabel="LinkedIn Widget"
    >
      <LinkedInLogo width={96} height={96} className="fill-brand-linkedin" />
    </SocialWidget>
  );
}
