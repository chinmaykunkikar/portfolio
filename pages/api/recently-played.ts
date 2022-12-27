import { getRecentlyPlayed } from "@lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

export type RecentlyPlayedSong = {
  artist: string;
  songUrl: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const title = items[0].track.name;
  const artist = items[0].track.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const songUrl = items[0].track.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, max-age=300, stale-while-revalidate=600"
  );

  return res.status(200).json({ artist, title, songUrl });
}
