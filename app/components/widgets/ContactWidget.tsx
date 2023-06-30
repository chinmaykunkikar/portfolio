"use client";
import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import Turtle from "@public/emoji/turtle.json";
import Link from "next/link";

export default function ContactWidget() {
  return (
    <Card className="flex select-none flex-col justify-center md:col-span-2">
      <div className="mx-auto flex items-center">
        <div className="mr-2 text-3xl font-bold">Let&apos;s get in touch</div>
        <Player
          className="h-16 w-16"
          src={Turtle}
          autoplay={true}
          loop={true}
        />
      </div>
      <CardLinkButton href="/contact" as={Link} variant={ArrowRightIcon} />
    </Card>
  );
}
