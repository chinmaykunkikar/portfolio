import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Balancer from "react-wrap-balancer";
import Namaskar from "@public/namaskar.json";
import Hello from "@public/hello.json";
import Card from "@components/card";
import LinkArrow from "@components/link-arrow";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HelloWidget() {
  const [showHello, setShowHello] = useState<boolean | undefined>(false);

  return (
    <Card
      className="col-span-2 flex cursor-default select-none flex-col items-start justify-center px-10"
      onPointerEnter={() => setShowHello(true)}
      onPointerLeave={() => setShowHello(false)}
    >
      <div className="flex items-center">
        <Player
          src={showHello ? Hello : Namaskar}
          autoplay={true}
          loop={showHello}
          style={{ width: "4em", height: "4em" }}
        />
        <div className="ml-2 pt-4 text-3xl font-bold">
          {showHello ? "Hello!" : "नमस्कार!"}
        </div>
      </div>
      <span className="pt-6 text-lg">
        <Balancer>
          I&apos;m{" "}
          <span className="text-2xl font-extrabold">Chinmay Kunkikar</span>, a
          frontend developer from India, thriving on the joy of creating
          delightful web experiences.
        </Balancer>
      </span>
      <LinkArrow href="/about" as={Link} variant={ArrowRightIcon} />
    </Card>
  );
}
