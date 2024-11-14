/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  basePath: '/nextanimejs',
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
}

export default nextConfig
