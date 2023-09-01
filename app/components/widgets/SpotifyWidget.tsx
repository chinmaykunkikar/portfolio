"use client";
import useSWR from "swr";

import { SpotifyResponse } from "@api/spotify";
import Card from "@components/Card";
import MusicBars from "@components/MusicBars";
import SpotifyLogo from "@drawables/spotify";
import fetcher from "@lib/fetcher";

export default function SpotifyWidget() {
  const { data: songData, isLoading } = useSWR<SpotifyResponse>(
    "/api/spotify",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return (
    <Card className="group flex h-full flex-col justify-between p-8">
      <SpotifyLogo width={72} height={72} className="fill-spotify" />
      <div>
        <div>
          {songData?.isPlaying ? (
            <div className="flex items-center">
              <MusicBars />
              <span className="ml-2 select-none font-bold text-spotify">
                {isLoading ? "Looking up…" : "Listening"}
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <MusicBars />
              <div className="ml-2 select-none font-bold text-spotify">
                {isLoading ? "Looking up…" : "Last played"}
              </div>
            </div>
          )}
          <div className="flex flex-col">
            <a
              className="max-w-max truncate text-xl font-extrabold text-neutral-700 hover:text-neutral-500"
              href={songData?.songUrl || "#"}
              title={songData?.title || "No Song"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {songData?.title || "No Song"}
            </a>
            <p
              title={songData?.artist || "No Artist"}
              className="max-w-max cursor-default truncate text-sm text-neutral-700"
            >
              {songData?.artist || "No Artist"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
