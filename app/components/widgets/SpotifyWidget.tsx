"use client";
import useSWR from "swr";

import AnimatedBars from "@components/AnimatedBars";
import Card from "@components/Card";
import SpotifyLogo from "@components/drawables/spotify";
import fetcher from "@lib/fetcher";
import { NowPlayingSong } from "@pages/api/now-playing";
import { RecentlyPlayedSong } from "@pages/api/recently-played";
import TimeAgo from "react-timeago";

// Type guard function
function isNowPlaying(
  song: RecentlyPlayedSong | NowPlayingSong,
): song is NowPlayingSong {
  return (song as NowPlayingSong).isPlaying !== undefined;
}

export default function SpotifyWidget() {
  const {
    data: nowPlaying,
    error: nowPlayingError,
    isLoading: nowPlayingLoading,
  } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  
  const {
    data: recentlyPlayed,
    error: recentlyPlayedError,
    isLoading: recentlyPlayedLoading,
  } = useSWR<RecentlyPlayedSong>("/api/recently-played", fetcher);

  if (nowPlayingError && recentlyPlayedError) {
    return <div>Error fetching data</div>;
  }

  const isNowPlayingLoading = nowPlayingLoading || recentlyPlayedLoading;

  if (isNowPlayingLoading) {
    return <div>Loading...</div>;
  }

  const isPlaying = nowPlaying ? isNowPlaying(nowPlaying) : false;
  const songData = isPlaying ? nowPlaying : recentlyPlayed;

  if (!songData) {
    return <div>No song data available</div>;
  }

  const { title, artist, songUrl, playedAt } = songData;

  return (
    <Card className="group flex flex-col justify-between p-8">
      <SpotifyLogo width={72} height={72} className="fill-spotify" />
      <div>
        {isPlaying ? (
          <div className="flex items-center">
            <AnimatedBars />
            <span className="ml-2 select-none font-bold text-spotify">
              Currently listening to
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-x-1 font-bold">
            <div className="select-none  text-spotify">Last played</div>
            <TimeAgo
              className="select-none text-xs text-neutral-400 before:content-['('] after:content-[')']"
              date={new Date(playedAt!).getTime()}
              title={""}
            />
          </div>
        )}
        <div className="flex flex-col">
          <a
            className="max-w-max truncate text-xl font-extrabold text-neutral-700 hover:text-neutral-500"
            href={songUrl}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <p
            title={artist}
            className="max-w-max cursor-default truncate text-sm text-neutral-700"
          >
            {artist}
          </p>
        </div>
      </div>
    </Card>
  );
}
