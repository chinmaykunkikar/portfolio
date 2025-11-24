import { getNowPlaying, getRecentlyPlayed } from "@lib/spotify";
import { SpotifyResponse } from "@types/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const nowPlayingResponse = await getNowPlaying();

  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    const recentlyPlayedResponse = await getRecentlyPlayed();

    if (recentlyPlayedResponse.status !== 200) {
      return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }

    const { items } = await recentlyPlayedResponse.json();

    if (items.length === 0) {
      return NextResponse.json(
        {
          isPlaying: false,
        },
        { status: 200 },
      );
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

    return NextResponse.json(recentlyPlayedData, { status: 200 });
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

  return NextResponse.json(nowPlayingDataResponse, { status: 200 });
}
