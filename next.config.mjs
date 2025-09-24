/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com", 
      "placehold.co",
      "res.cloudinary.com"
    ],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
