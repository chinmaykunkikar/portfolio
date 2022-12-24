import TwitterLogo from "../../drawables/twitter";
import SocialWidget from "../social";

export default function TwitterWidget() {
  return (
    <SocialWidget
      cardColor="#1da1f2"
      socialUrl="https://twitter.com/ChinmayKunkikar"
    >
      <TwitterLogo width={96} height={96} fill="white" />
    </SocialWidget>
  );
}
