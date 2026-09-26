import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
