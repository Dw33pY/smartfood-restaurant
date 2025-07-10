import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  // Remove basePath for Vercel:
  // basePath: '/smartfood-restaurant',  // ← Comment out or delete this line
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;