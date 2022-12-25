import Card from "../../card";
import Clock from "../../drawables/clock";
import LocationPin from "../../drawables/location";

export default function LocationTimeWidget() {
  return (
    <Card className="flex flex-col items-center justify-between p-8">
      <div className="flex items-center">
        <LocationPin width={42} height={42} fill="#d74242" />
        <a
          href="https://en.wikipedia.org/wiki/Thane"
          target="_blank"
          rel="noreferrer"
        >
          <div className="ml-4 text-xl font-bold text-neutral-700">
            Thane, IN
          </div>
        </a>
      </div>
      <div className="flex items-center">
        <Clock width={42} height={42} fill="#848494" />
        <div className="ml-4 text-xl font-bold text-neutral-700">12:27 AM</div>
      </div>
    </Card>
  );
}
