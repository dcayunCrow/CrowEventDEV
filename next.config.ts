import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qualitycenter.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-cms-static.ticketek.com.ar',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagenes.alpogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'paseshow-img.s3.sa-east-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.getcrowder.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
