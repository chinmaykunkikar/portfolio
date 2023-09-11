import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying, getRecentlyPlayed } from "src/lib/spotify";

export type SpotifyResponse = {
  isPlaying: boolean;
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const nowPlayingResponse = await getNowPlaying();

  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    const recentlyPlayedResponse = await getRecentlyPlayed();

    if (recentlyPlayedResponse.status !== 200) {
      return res.status(500).json({ error: "Error fetching data" });
    }

    const { items } = await recentlyPlayedResponse.json();

    if (items.length === 0) {
      return res.status(200).json({
        isPlaying: false,
      });
    }

    const recentlyPlayedSong = items[0];

    const recentlyPlayedData: SpotifyResponse = {
      isPlaying: false,
      album: recentlyPlayedSong.track.album.name,
      albumImageUrl: recentlyPlayedSong.track.album.images[0].url,
      artist: recentlyPlayedSong.track.artists
        .map((artist: { name: string }) => artist.name)
        .join(", "),
      songUrl: recentlyPlayedSong.track.external_urls.spotify,
      title: recentlyPlayedSong.track.name,
    };

    return res.status(200).json(recentlyPlayedData);
  }

  const nowPlayingData = await nowPlayingResponse.json();

  const isPlaying = nowPlayingData.is_playing;
  const title = nowPlayingData.item.name;
  const artist = nowPlayingData.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const album = nowPlayingData.item.album.name;
  const albumImageUrl = nowPlayingData.item.album.images[0].url;
  const songUrl = nowPlayingData.item.external_urls.spotify;

  const nowPlayingDataResponse: SpotifyResponse = {
    isPlaying,
    album,
    albumImageUrl,
    artist,
    songUrl,
    title,
  };

  return res.status(200).json(nowPlayingDataResponse);
}
