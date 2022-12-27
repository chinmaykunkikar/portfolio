import { Player } from "@lottiefiles/react-lottie-player";
import Fire from "@public/fire.json";

export default function Footer() {
  return (
    <div className="flex justify-center px-16 py-4">
      <span className="flex items-end text-neutral-500">
        <span>Built with</span>
        <Player
          src={Fire}
          autoplay={true}
          loop={true}
          style={{ width: "2em", height: "2em" }}
        />{" "}
        <span>
          by <span className="font-bold">Chinmay</span>
        </span>
      </span>
    </div>
  );
}
