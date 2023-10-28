import { TwitterLogo } from "@components/logos";
import { SocialWidget } from "@widgets/social";

export function TwitterWidget() {
  return (
    <SocialWidget
      label="Twitter"
      linkBgColor="bg-brand-twitter"
      linkRingColor="hover:ring-brand-twitter/[0.25]"
      socialUrl="https://twitter.com/ChinmayKunkikar"
      ariaLabel="Twitter Widget"
    >
      <TwitterLogo width={72} height={72} className="fill-brand-twitter" />
    </SocialWidget>
  );
}
