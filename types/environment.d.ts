export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      MAPBOX_ACCESS_TOKEN: string;
      MAP_LATITUDE: number;
      MAP_LONGITUDE: number;
    }
  }
}
