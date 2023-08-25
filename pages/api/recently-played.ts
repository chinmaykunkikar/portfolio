import { getRecentlyPlayed } from "@lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

export type RecentlyPlayedSong = {
  artist: string;
  playedAt: string;
  songUrl: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const recentlyPlayedSongs: RecentlyPlayedSong[] = items.map((item: any) => ({
    title: item.track.name,
    artist: item.track.artists.map((artist: any) => artist.name).join(", "),
    songUrl: item.track.external_urls.spotify,
    playedAt: item.played_at,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, max-age=300, stale-while-revalidate=600",
  );

  return res.status(200).json(recentlyPlayedSongs);
}
