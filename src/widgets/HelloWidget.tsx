"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import Balancer from "react-wrap-balancer";
import Card from "src/components/Card";
import CardLinkButton from "src/components/CardLinkButton";

export default function HelloWidget() {
  const [showHello, setShowHello] = useState<boolean>(false);

  return (
    <Card
      className="flex cursor-default select-none flex-col items-start justify-center p-4 md:px-10"
      onPointerEnter={() => setShowHello(true)}
      onPointerLeave={() => setShowHello(false)}
    >
      <div className="pointer-events-none flex items-center">
        <Image
          alt={showHello ? "Hello!" : "नमस्कार!"}
          src={showHello ? "/emoji/hello.png" : "/emoji/namaskar.png"}
          width={48}
          height={48}
          quality={100}
          priority
        />
        <div className="ml-2 text-2xl font-bold lg:text-3xl">
          {showHello ? "Hello!" : "नमस्कार!"}
        </div>
      </div>
      <span className="mt-2 text-base lg:text-lg">
        <Balancer>
          I&apos;m{" "}
          <span className="font-extrabold lg:text-2xl">Chinmay Kunkikar</span>,
          a frontend web developer based in India, an open source software
          enthusiast, and a passenger through space and time.
        </Balancer>
      </span>
      <CardLinkButton href="/about" variant={ArrowRightIcon} />
    </Card>
  );
}