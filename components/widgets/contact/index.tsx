import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import Turtle from "@public/emoji/turtle.json";
import Link from "next/link";

export default function ContactWidget() {
  return (
    <Card className="md:col-span-2 flex flex-col justify-center select-none">
      <div className="flex items-center mx-auto">
        <div className="font-bold text-3xl mr-2">Let&apos;s get in touch</div>
        <Player
          className="w-16 h-16"
          src={Turtle}
          autoplay={true}
          loop={true}
        />
      </div>
      <CardLinkButton href="/contact" as={Link} variant={ArrowRightIcon} />
    </Card>
  );
}
