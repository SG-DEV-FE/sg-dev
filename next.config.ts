import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
  },
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary domain
  },
};

export default nextConfig;