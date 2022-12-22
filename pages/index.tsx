import Card from "../components/card";
import GitHubWidget from "../components/widgets/github";
import HelloWidget from "../components/widgets/hello";
import LinkedInWidget from "../components/widgets/linkedin";
import TwitterWidget from "../components/widgets/twitter";

export default function Home() {
  return (
    <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-16 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <HelloWidget />
      <GitHubWidget />
      <LinkedInWidget />
      <TwitterWidget />
      <Card>Projects</Card>
      <Card className="col-span-2">Skills</Card>
      <Card>Spotify</Card>
      <Card className="col-span-2">Let&apos;s get in touch</Card>
      <Card>Mumbai, IN and Time</Card>
    </div>
  );
}
