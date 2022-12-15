import Card from "../components/card";

export default function Home() {
  return (
    <div className="grid-rows-auto mx-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="col-span-2">Hi, I&apos;m Chinmay</Card>
      <Card>GitHub</Card>
      <Card>Resume</Card>
      <Card>LinkedIn</Card>
      <Card>Projects</Card>
      <Card className="col-span-2">Skills</Card>
      <Card>Spotify</Card>
      <Card className="col-span-2">Let&apos;s get in touch</Card>
      <Card>Mumbai, IN and Time</Card>
    </div>
  );
}
