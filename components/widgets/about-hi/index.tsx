import Card from "@components/card";
import { Player } from "@lottiefiles/react-lottie-player";
import Hi from "@public/emoji/hi.json";

export default function HiWidget() {
  return (
    <Card className="flex flex-col items-center justify-center">
      <div>
        <Player className="h-28 w-28" src={Hi} autoplay={true} loop={2} hover />
      </div>
    </Card>
  );
}
