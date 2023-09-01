"use client";
import useSWR from "swr";

import { NowPlayingSong } from "@api/now-playing";
import { RecentlyPlayedSong } from "@api/recently-played";
import AnimatedBars from "@components/AnimatedBars";
import Card from "@components/Card";
import SpotifyLogo from "@drawables/spotify";
import fetcher from "@lib/fetcher";

export default function SpotifyWidget() {
  const { data: nowPlaying, isLoading: nowPlayingLoading } =
    useSWR<NowPlayingSong>("/api/now-playing", fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    });
  const { data: recentlyPlayed, isLoading: recentlyPlayedLoading } = useSWR<
    RecentlyPlayedSong[]
  >("/api/recently-played", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const loading = nowPlayingLoading || recentlyPlayedLoading;

  const recentSong = recentlyPlayed?.[0];

  return (
    <Card className="group flex h-full flex-col justify-between p-8">
      <SpotifyLogo width={72} height={72} className="fill-spotify" />
      <div>
        <div>
          {nowPlaying?.isPlaying ? (
            <div className="flex items-center">
              <AnimatedBars shouldAnimate />
              <span className="ml-2 select-none font-bold text-spotify">
                {loading ? "Looking up…" : "Listening"}
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <AnimatedBars shouldAnimate={false} />
              <div className="ml-2 select-none font-bold text-spotify">
                {loading ? "Looking up…" : "Listened"}
              </div>
            </div>
          )}
          <div className="flex flex-col">
            <a
              className="max-w-max truncate text-xl font-extrabold text-neutral-700 hover:text-neutral-500"
              href={nowPlaying?.songUrl || recentSong?.songUrl || "#"}
              title={nowPlaying?.title || recentSong?.title || "No Song"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nowPlaying?.title || recentSong?.title || "No Song"}
            </a>
            <p
              title={nowPlaying?.artist || recentSong?.artist || "No Artist"}
              className="max-w-max cursor-default truncate text-sm text-neutral-700"
            >
              {nowPlaying?.artist || recentSong?.artist || "No Artist"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
