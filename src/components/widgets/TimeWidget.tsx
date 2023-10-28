"use client";

import { ClockIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export function TimeWidget() {
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
    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-center">
      <div className="flex select-none items-center justify-between rounded-full bg-neutral-50 px-3 py-1 shadow-lg">
        <ClockIcon width={20} height={20} stroke="#ac92fa" strokeWidth={2} />
        <div className="ml-2 font-bold">
          {date.toLocaleTimeString("en-IN", dateOptions)}
        </div>
      </div>
    </div>
  );
}
