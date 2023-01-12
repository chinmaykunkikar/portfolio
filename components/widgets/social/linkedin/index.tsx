import LinkedInLogo from "@drawables/linkedin";
import SocialWidget from "@widgets/social";

export default function LinkedInWidget() {
  return (
    <SocialWidget
      socialBgColor="bg-social-linkedin"
      socialRingColor="hover:ring-social-linkedin/[0.25]"
      socialUrl="https://www.linkedin.com/in/chinmaykunkikar/"
    >
      <LinkedInLogo width={96} height={96} className="fill-social-linkedin" />
    </SocialWidget>
  );
}
