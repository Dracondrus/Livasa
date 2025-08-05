import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Твоя конфигурация Next.js
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Осторожно: разрешает все внешние картинки
      },
    ],
  },
};

// Оборачиваем конфиг плагином next-intl
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
