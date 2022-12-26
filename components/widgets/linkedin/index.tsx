import LinkedInLogo from "../../drawables/linkedin";
import SocialWidget from "../social";

export default function LinkedInWidget() {
  return (
    <SocialWidget
      socialBgColor="bg-[#0a66c2]"
      socialRingColor="hover:ring-[#0a66c2]/[0.25]"
      socialUrl="https://www.linkedin.com/in/chinmaykunkikar/"
    >
      <LinkedInLogo width={96} height={96} fill="#0a66c2" />
    </SocialWidget>
  );
}
