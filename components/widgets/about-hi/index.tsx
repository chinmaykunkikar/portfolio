import Card from "@components/card";
import { Player } from "@lottiefiles/react-lottie-player";
import Hi from "@public/hi.json";

export default function HiWidget() {
  return (
    <Card className="flex flex-col justify-center items-center">
      <div>
        <Player className="w-28 h-28" src={Hi} autoplay={true} loop={2} hover />
      </div>
    </Card>
  );
}
