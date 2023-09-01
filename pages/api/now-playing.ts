import { getNowPlaying } from "@lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    res.setHeader("Cache-Control", "public, max-age=60");
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    res.setHeader("Cache-Control", "public, max-age=60");
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30",
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
