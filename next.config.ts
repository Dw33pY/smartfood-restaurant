import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  output: 'export',
  basePath: '/smartfood-restaurant', // MUST match repo name
  images: { unoptimized: true }
}

export default nextConfig;
