export default function sitemap() {
  const pages = [
    "/",
    "/anime",
    "/topanime",
    "/rekomendasi",
    "/musim/sekarang",
    "/musim/mendatang",
    "/genre",
    "/reviews",
    "/search",
  ]

  const urls = pages.map((page) => ({
    url: `https://nextanimejs.vercel.app${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return urls
}
