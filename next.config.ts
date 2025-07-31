import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Разрешить все хосты — осторожно с этим!
      },
    ],
    // или можно указать конкретные надёжные хосты, чтобы избежать рисков
    // domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
};

export default nextConfig;
