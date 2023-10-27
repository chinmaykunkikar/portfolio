import Card from "@components/Card";
import Balancer from "react-wrap-balancer";

export default function IntroWidget() {
  return (
    <Card
      className="flex w-full flex-col items-center justify-center p-8 text-sm text-type md:col-span-2 md:p-4 lg:text-lg"
      aria-label="Introduction Widget"
    >
      <Balancer>
        <p className="mb-2">
          I&apos;m passionate about building delightful web experiences.
        </p>
        <p className="mb-2">
          I&apos;m interested in React, Cloud computing, Linux, Design, and
          Music.
        </p>
        {/* <p className="mb-2">
          You might find me enjoying hot sips of coffee while musing over my
          myriad thoughts.
        </p> */}
      </Balancer>
    </Card>
  );
}
