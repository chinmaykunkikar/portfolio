"use client";

import { SpotifyResponse } from "@api/spotify";
import Card from "@components/Card";
import MusicBars from "@components/MusicBars";
import SpotifyLogo from "@drawables/spotify";
import fetcher from "@lib/fetcher";
import Link from "next/link";
import useSWR from "swr";

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
    <Card className="group flex aspect-auto flex-col justify-between p-8">
      <SpotifyLogo width={72} height={72} className="fill-brand-spotify" />
      <div className="keep">
        <div>
          {songData?.isPlaying ? (
            <div className="flex items-center">
              <MusicBars />
              <span className="ml-2 select-none font-bold text-brand-spotify-dark">
                {isLoading ? "Looking up…" : "Listening"}
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <MusicBars />
              <div className="ml-2 select-none font-bold text-brand-spotify-dark">
                {isLoading ? "Looking up…" : "Last played"}
              </div>
            </div>
          )}
          <div className="flex flex-col">
            {songData ? (
              <>
                <Link
                  className="max-w-max truncate text-xl font-extrabold text-type hover:text-type-hover"
                  href={songData.songUrl}
                  title={songData.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {songData.title}
                </Link>
                <p
                  title={songData.artist}
                  className="max-w-max cursor-default truncate text-sm tracking-normal text-type"
                >
                  {songData.artist}
                </p>
              </>
            ) : (
              <>
                <p
                  className="pointer-events-none max-w-max cursor-default text-xl font-extrabold text-type blur-sm"
                  title="No Song"
                >
                  No Song
                </p>
                <p
                  title="No Artist"
                  className="pointer-events-none max-w-max cursor-default text-sm text-type blur-sm"
                >
                  No Artist
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
