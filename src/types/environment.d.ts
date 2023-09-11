export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: string;
      NEXT_PUBLIC_MAP_LONGITUDE: float;
      NEXT_PUBLIC_MAP_LATITUDE: float;
    }
  }
}
