export default function sitemap() {
  const pages = [
    "/",
    "/anime/page/1",
    "/topanime/page/1",
    "/rekomendasi/page/1",
    "/musim/sekarang/page/1",
    "/musim/mendatang/page/1",
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
