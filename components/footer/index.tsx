import { Player } from "@lottiefiles/react-lottie-player";
import Heart from "@public/emoji/heart.json";

export default function Footer() {
  return (
    <div className="flex justify-center px-16 py-4">
      <span className="flex items-end text-neutral-500">
        <span>
          Built in <span className="text-xl">🇮🇳</span> with&nbsp;
        </span>
        <Player src={Heart} autoplay={true} loop={true} className="w-8 h-8" />
        <span>
          &nbsp;by <span className="font-bold">Chinmay Kunkikar</span>
        </span>
      </span>
    </div>
  );
}
