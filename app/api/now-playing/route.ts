import { getAccessToken } from "@lib/spotify";
import { NextResponse } from "next/server";

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export async function GET() {
  const { access_token } = await getAccessToken();
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 60 },
  });

  if (response.status === 204 || response.status > 400) {
    return new NextResponse(JSON.stringify({ isPlaying: false }));
  }

  const song = await response.json();

  if (song.item === null) {
    return new NextResponse(JSON.stringify({ isPlaying: false }));
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
