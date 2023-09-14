import Balancer from "react-wrap-balancer";
import Card from "src/components/Card";

export default function IntroWidget() {
  return (
    <Card className="flex w-full flex-col items-center justify-center p-8 text-sm text-neutral-500 md:col-span-2 md:p-4 lg:text-lg">
      <Balancer>
        <p className="mb-2">
          I&apos;m{" "}
          <span className="font-extrabold lg:text-xl">Chinmay Kunkikar</span>, a
          frontend developer from India, who is passionate about building
          delightful web experiences. I&apos;m interested in React, Cloud
          computing, Linux, Design, and Music.
        </p>
        <p className="mb-2">
          I started my journey in web development during 2021 while I was
          building my academic project, Vide.
        </p>
        {/* <p className="mb-2">
          You might find me enjoying hot sips of coffee while musing over my
          myriad thoughts.
        </p> */}
      </Balancer>
    </Card>
  );
}
