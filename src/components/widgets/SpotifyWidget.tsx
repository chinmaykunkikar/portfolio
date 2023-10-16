"use client";

import { SpotifyResponse } from "@api/spotify";
import Card from "@components/Card";
import MusicBars from "@components/MusicBars";
import { Skeleton } from "@components/Skeleton";
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
                <Skeleton className="my-2 h-5 w-36 rounded-full bg-neutral-400" />
                <Skeleton className="h-3 w-20 rounded-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
