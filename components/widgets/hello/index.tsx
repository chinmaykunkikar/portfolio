import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Namaskar from "../../../public/namaskar.json";
import Hello from "../../../public/hello.json";
import Card from "../../card";

export default function HelloWidget() {
  const [showHello, setShowHello] = useState<boolean | undefined>(false);

  return (
    <Card
      className="col-span-2 flex cursor-default flex-col items-start justify-center px-10"
      onMouseEnter={() => setShowHello(true)}
      onMouseLeave={() => setShowHello(false)}
    >
      <div className="flex items-center">
        <Player
          src={showHello ? Hello : Namaskar}
          autoplay={showHello}
          loop={showHello}
          style={{ width: "4em", height: "4em" }}
        />
        <div className="ml-4 pt-4 text-4xl font-bold">
          {showHello ? "Hello!" : "नमस्कार!"}
        </div>
      </div>
      <span className="pt-6">
        I&apos;m <span className="font-bold">Chinmay</span>, a frontend
        developer from India, thriving on the joy of creating delightful web
        experiences.
      </span>
    </Card>
  );
}
