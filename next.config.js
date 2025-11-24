/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
};

module.exports = nextConfig;
