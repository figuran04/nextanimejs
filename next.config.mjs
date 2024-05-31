/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.antaranews.com",
      },
      {
        hostname: "akcdn.detik.net.id",
      },
    ],
  },
}

export default nextConfig
