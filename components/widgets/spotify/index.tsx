import useSWR from "swr";

import fetcher from "../../../lib/fetcher";
import Card from "../../card";
import Image from "next/image";
import { NowPlayingSong } from "../../../pages/api/now-playing";
import { RecentlyPlayedSong } from "../../../pages/api/recently-played";
import AnimatedBars from "../../animated-bars";

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
    <Card className="flex flex-col justify-between p-8">
      <Image src="/spotify.svg" width={80} height={80} alt={"Spotify Logo"} />
      <div>
        {nowPlaying?.isPlaying ? (
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
        {nowPlaying?.songUrl ? (
          <div className="flex flex-col">
            <a
              className="max-w-max truncate font-bold text-neutral-700 hover:text-neutral-500"
              href={nowPlaying.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nowPlaying.title}
            </a>
            <p
              title={nowPlaying.artist}
              className="max-w-max select-none truncate text-sm text-neutral-700"
            >
              {nowPlaying.artist}
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <a
              className="max-w-max truncate font-bold text-neutral-700 hover:text-neutral-500"
              href={recentlyPlayed?.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {recentlyPlayed?.title}
            </a>
            <p
              title={recentlyPlayed?.artist}
              className="max-w-max select-none truncate text-sm text-neutral-700"
            >
              {recentlyPlayed?.artist}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
