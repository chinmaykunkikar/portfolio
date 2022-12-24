import TwitterLogo from "../../drawables/twitter";
import SocialWidget from "../social";

export default function TwitterWidget() {
  return (
    <SocialWidget
      socialColor="bg-[#1da1f2] hover:ring-[#1da1f2]/[0.25]"
      socialUrl="https://twitter.com/ChinmayKunkikar"
    >
      <TwitterLogo width={96} height={96} fill="#1da1f2" />
    </SocialWidget>
  );
}
