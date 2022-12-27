import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import Turtle from "@public/turtle.json";
import Link from "next/link";
import { useState } from "react";

export default function ContactWidget() {
  const [hovered, setHovered] = useState<boolean | undefined>(false);

  return (
    <Card
      className="col-span-2 flex flex-col justify-center"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="flex items-center mx-auto">
        <div className="font-bold text-3xl mr-2">
          Let&apos;s start a conversation
        </div>
        <Player
          src={Turtle}
          autoplay={true}
          loop={true}
          style={{ width: "4em", height: "4em" }}
        />
      </div>
      <CardLinkButton href="/contact" as={Link} variant={ArrowRightIcon} />
    </Card>
  );
}
