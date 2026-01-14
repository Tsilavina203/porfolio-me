/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable the Next.js dev indicator (the "N" bubble shown in dev mode).
  devIndicators: false,
}

export default nextConfig
