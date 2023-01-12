import TwitterLogo from "@drawables/twitter";
import SocialWidget from "@widgets/social";

export default function TwitterWidget() {
  return (
    <SocialWidget
      socialBgColor="bg-social-twitter"
      socialRingColor="hover:ring-social-twitter/[0.25]"
      socialUrl="https://twitter.com/ChinmayKunkikar"
    >
      <TwitterLogo width={96} height={96} className="fill-social-twitter" />
    </SocialWidget>
  );
}
