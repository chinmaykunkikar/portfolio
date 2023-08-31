import { getAccessToken } from "@lib/spotify";
import { NextResponse } from "next/server";

export type LastPlayedSong = {
  artist: string;
  playedAt: string;
  songUrl: string;
  title: string;
};

export async function GET() {
  const { access_token } = await getAccessToken();
  const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 300 },
  });
  const { items } = await response.json();

  const recentlyPlayedSongs: LastPlayedSong[] = items.map((item: any) => ({
    title: item.track.name,
    artist: item.track.artists.map((artist: any) => artist.name).join(", "),
    songUrl: item.track.external_urls.spotify,
    playedAt: item.played_at,
  }));

  return NextResponse.json(recentlyPlayedSongs);
}
