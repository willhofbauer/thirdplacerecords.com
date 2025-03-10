/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f4.bcbits.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
}

export default nextConfig;
