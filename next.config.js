/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}`],
    deviceSizes: [450, 640, 768, 1024, 1280, 1536],
  },
}

module.exports = nextConfig
