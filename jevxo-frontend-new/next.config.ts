import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.api.jevxo.com',
      },
      {
        protocol: 'https',
        hostname: 'api.jevxo.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  /* config options he */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
