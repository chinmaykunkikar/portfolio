"use client"
import { Player } from "@lottiefiles/react-lottie-player";
import Heart from "@public/emoji/heart.json";

export default function Footer() {
  return (
    <div className="flex justify-center p-4 text-xs lg:px-16 lg:py-4 lg:text-base">
      <span className="flex items-end text-neutral-500">
        <span>Built with</span>
        <Player
          src={Heart}
          autoplay={true}
          loop={true}
          className="h-6 w-6 lg:h-8 lg:w-8"
        />
        <span>
          &nbsp;by <span className="font-bold">Chinmay Kunkikar</span>
        </span>
      </span>
    </div>
  );
}
