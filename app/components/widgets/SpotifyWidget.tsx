"use client";
import TimeAgo from "react-timeago";
import useSWR from "swr";

import { NowPlayingSong } from "@api/now-playing";
import { RecentlyPlayedSong } from "@api/recently-played";
import AnimatedBars from "@components/AnimatedBars";
import Card from "@components/Card";
import SpotifyLogo from "@drawables/spotify";
import fetcher from "@lib/fetcher";

export default function SpotifyWidget() {
  const { data: nowPlaying, isLoading: nowPlayingLoading } =
    useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  const { data: recentlyPlayed, isLoading: recentlyPlayedLoading } = useSWR<
    RecentlyPlayedSong[]
  >("/api/recently-played", fetcher);

  const loading = nowPlayingLoading || recentlyPlayedLoading;

  const recentSong = recentlyPlayed?.[0];

  return (
    <Card className="group flex h-full flex-col justify-between p-8">
      <SpotifyLogo width={72} height={72} className="fill-spotify" />
      <div>
        {loading ? (
          <div className="flex items-center">
            <AnimatedBars />
            <span className="ml-2 select-none font-bold text-spotify">
              Loading...
            </span>
          </div>
        ) : (
          <div>
            {nowPlaying?.isPlaying ? (
              <div className="flex items-center">
                <AnimatedBars />
                <span className="ml-2 select-none font-bold text-spotify">
                  Currently listening to
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-x-1 font-bold">
                <div className="select-none text-spotify">Last played</div>
                <TimeAgo
                  className="select-none text-xs text-neutral-400 before:content-['('] after:content-[')']"
                  date={recentSong?.playedAt!}
                  title=""
                />
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
        )}
      </div>
    </Card>
  );
}
