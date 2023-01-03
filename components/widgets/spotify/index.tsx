import useSWR from "swr";

import AnimatedBars from "@components/animated-bars";
import Card from "@components/card";
import SpotifyLogo from "@drawables/spotify";
import fetcher from "@lib/fetcher";
import { NowPlayingSong } from "@pages/api/now-playing";
import { RecentlyPlayedSong } from "@pages/api/recently-played";
import TimeAgo from "react-timeago";

export default function SpotifyWidget() {
  const { data: nowPlaying } = useSWR<NowPlayingSong>(
    "/api/now-playing",
    fetcher
  );
  const { data: recentlyPlayed } = useSWR<RecentlyPlayedSong>(
    "/api/recently-played",
    fetcher
  );

  return (
    <Card className="group flex flex-col justify-between p-8">
      <SpotifyLogo width={72} height={72} fill="#00da5a" />
      <div>
        {nowPlaying?.isPlaying ? (
          <div className="flex items-center">
            <AnimatedBars />
            <span className="ml-2 select-none font-bold text-[#00da5a]">
              Currently listening to
            </span>
          </div>
        ) : (
          <div className="flex gap-x-1 flex-wrap font-bold items-center">
            <div className="select-none  text-[#00da5a]">Last played</div>
            <TimeAgo
              className="text-xs select-none text-neutral-400 before:content-['('] after:content-[')']"
              date={recentlyPlayed?.playedAt!}
              title={""}
            />
          </div>
        )}
        <div className="flex flex-col">
          <a
            className="max-w-max truncate text-xl font-extrabold text-neutral-700 hover:text-neutral-500"
            href={
              nowPlaying?.songUrl ? nowPlaying.songUrl : recentlyPlayed?.songUrl
            }
            title={nowPlaying?.title ? nowPlaying.title : recentlyPlayed?.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nowPlaying?.title ? nowPlaying.title : recentlyPlayed?.title}
          </a>
          <p
            title={
              nowPlaying?.artist ? nowPlaying.artist : recentlyPlayed?.artist
            }
            className="max-w-max cursor-default truncate text-sm text-neutral-700"
          >
            {nowPlaying?.artist ? nowPlaying.artist : recentlyPlayed?.artist}
          </p>
        </div>
      </div>
    </Card>
  );
}
