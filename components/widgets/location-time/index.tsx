import Card from "@components/card";
import ClockIcon from "@drawables/clock";
import LocationPin from "@drawables/location";
import { useEffect, useState } from "react";

export default function LocationTimeWidget() {
  const [date, setDate] = useState(new Date());

  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    hourCycle: "h12",
  };

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

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
        <ClockIcon width={42} height={42} fill="#848494" />
        <div className="ml-4 text-xl font-bold text-neutral-700">
          {date.toLocaleTimeString("en-IN", dateOptions)}
        </div>
      </div>
    </Card>
  );
}
