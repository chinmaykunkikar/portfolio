import TwitterLogo from "src/components/drawables/twitter";
import SocialWidget from "src/widgets/social";

export default function TwitterWidget() {
  return (
    <SocialWidget
      label="Twitter"
      linkBgColor="bg-brand-twitter"
      linkRingColor="hover:ring-brand-twitter/[0.25]"
      socialUrl="https://twitter.com/ChinmayKunkikar"
    >
      <TwitterLogo width={72} height={72} className="fill-brand-twitter" />
    </SocialWidget>
  );
}
