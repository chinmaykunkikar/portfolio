"use client";
import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import Balancer from "react-wrap-balancer";

export default function HelloWidget() {
  const [showHello, setShowHello] = useState<boolean | undefined>(false);

  return (
    <Card
      className="flex aspect-video w-full cursor-default select-none flex-col items-start justify-center p-4 md:px-10"
      onPointerEnter={() => setShowHello(true)}
      onPointerLeave={() => setShowHello(false)}
    >
      <div className="flex items-center">
        <Image
          alt="Greetings"
          src={showHello ? "/emoji/hello.png" : "/emoji/namaskar.png"}
          width={64}
          height={64}
        />
        <div className="ml-2 pt-4 text-3xl font-bold">
          {showHello ? "Hello!" : "नमस्कार!"}
        </div>
      </div>
      <span className="pt-6 text-lg">
        <Balancer>
          I&apos;m{" "}
          <span className="text-2xl font-extrabold">Chinmay Kunkikar</span>, a
          passenger through space and time, frontend web developer based in
          India, and bittersweet music enthusiast.
        </Balancer>
      </span>
      <CardLinkButton href="/about" variant={ArrowRightIcon} />
    </Card>
  );
}
