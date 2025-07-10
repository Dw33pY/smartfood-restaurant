import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  output: 'export',
  basePath: '/smartfood-restaurant',
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com'], // Add your image host domains
  },
  // Optional: Add compiler for styled-components if used
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;