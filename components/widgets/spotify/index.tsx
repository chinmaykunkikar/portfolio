import { useEffect } from "react";
import useSWR from "swr";
import { animate } from "motion";

import fetcher from "../../../lib/fetcher";
import Card from "../../card";
import Image from "next/image";
import { NowPlayingSong } from "../../../pages/api/now-playing";
import { RecentlyPlayedSong } from "../../../pages/api/recently-played";

function AnimatedBars() {
  useEffect(() => {
    animate(
      "#bar1",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(1.5) translateY(-0.082rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar2",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar3",
      {
        transform: [
          "scaleY(1.0)  translateY(0rem)",
          "scaleY(0.5) translateY(0.37rem)",
          "scaleY(1.0)  translateY(0rem)",
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
  }, []);

  return (
    <div className="flex w-auto items-end overflow-hidden">
      <span
        id="bar1"
        className="mr-[3px] h-2 w-1 bg-neutral-300 opacity-75 dark:bg-neutral-500"
      />
      <span
        id="bar2"
        className="mr-[3px] h-1 w-1 bg-neutral-300 dark:bg-neutral-500"
      />
      <span
        id="bar3"
        className="h-3 w-1 bg-neutral-300 opacity-80 dark:bg-neutral-500"
      />
    </div>
  );
}

export default function SpotifyWidget() {
  const { data: nowPlayingData } = useSWR<NowPlayingSong>(
    "/api/now-playing",
    fetcher
  );
  const { data: recentlyPlayedData } = useSWR<RecentlyPlayedSong>(
    "/api/recently-played",
    fetcher
  );

  console.log(recentlyPlayedData);

  return (
    <Card className="flex flex-col justify-between p-8">
      <Image src="/spotify.svg" width={80} height={80} alt={"Spotify Logo"} />
      <div>
        {nowPlayingData?.isPlaying ? (
          <div className="flex items-center">
            <AnimatedBars />
            <span className="ml-2 select-none text-sm font-bold text-[#00DA5A]">
              Currently listening to
            </span>
          </div>
        ) : (
          <span className="select-none text-sm font-bold text-[#00DA5A]">
            Last played
          </span>
        )}
        {nowPlayingData?.songUrl ? (
          <div className="flex flex-col">
            <a
              className="max-w-max truncate font-bold text-neutral-700 hover:text-neutral-500"
              href={nowPlayingData.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nowPlayingData.title}
            </a>
            <p
              title={nowPlayingData.artist}
              className="max-w-max select-none truncate text-sm text-neutral-700"
            >
              {nowPlayingData.artist}
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <a
              className="max-w-max truncate font-bold text-neutral-700 hover:text-neutral-500"
              href={recentlyPlayedData?.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {recentlyPlayedData?.title}
            </a>
            <p
              title={recentlyPlayedData?.artist}
              className="max-w-max select-none truncate text-sm text-neutral-700"
            >
              {recentlyPlayedData?.artist}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
