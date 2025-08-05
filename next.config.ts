import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ❌ Not valid – see below for workaround
      }
    ],
    // This disables optimization (but allows any domain)
    unoptimized: true
  }
};

export default nextConfig;
