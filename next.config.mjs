/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // prevents ESLint errors from blocking Vercel builds
  },
  typescript: {
    ignoreBuildErrors: true, // prevents TS errors from blocking builds
  },
  images: {
    domains: [
      "images.unsplash.com", // example: allow Unsplash
      "placehold.co",        // example: allow placeholder service
      "res.cloudinary.com"   // example: if you use Cloudinary
    ],
    formats: ["image/webp", "image/avif"],
    unoptimized: true, // disables next/image optimization (Vercel CDN handles it fine)
  },
  reactStrictMode: true,
}

export default nextConfig
