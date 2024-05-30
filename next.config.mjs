/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.antaranews.com",
      },
    ],
  },
}

export default nextConfig
