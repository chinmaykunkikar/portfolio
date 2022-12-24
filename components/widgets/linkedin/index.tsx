import LinkedInLogo from "../../drawables/linkedin";
import SocialWidget from "../social";

export default function LinkedInWidget() {
  return (
    <SocialWidget
      cardColor="#0a66c2"
      socialUrl="https://www.linkedin.com/in/chinmaykunkikar/"
    >
      <LinkedInLogo width={96} height={96} fill="white" />
    </SocialWidget>
  );
}
