import Card from "@components/card";
import IntroWidget from "@components/widgets/intro";

export default function About() {
  return (
    <div className="text-neutral-500">
      <h1 className="font-semibold flex justify-center px-10 py-8 text-9xl text-neutral-200">
        About Me
      </h1>
      <div className="grid-rows-auto grid min-h-screen grid-cols-1 gap-6 px-16 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card>Hi, I&apos;m Chinmay</Card>
        <IntroWidget />
        <Card className="">Photo</Card>
        <Card className="md:col-span-2">Experience</Card>
        <Card className="">LinkedIn</Card>
        <Card className="">Resume</Card>
      </div>
    </div>
  );
}
