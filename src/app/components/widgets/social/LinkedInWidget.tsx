import LinkedInLogo from "src/app/components/drawables/linkedin";
import SocialWidget from "src/app/components/widgets/social";

export default function LinkedInWidget() {
  return (
    <SocialWidget
      linkBgColor="bg-social-linkedin"
      linkRingColor="hover:ring-social-linkedin/[0.25]"
      socialUrl="https://www.linkedin.com/in/chinmaykunkikar/"
    >
      <LinkedInLogo width={96} height={96} className="fill-social-linkedin" />
    </SocialWidget>
  );
}
