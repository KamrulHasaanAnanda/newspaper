import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com", "api.dailyshilpobangla.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during production build
  },
};

export default nextConfig;
