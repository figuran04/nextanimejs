"use client"
import Fitur from "@/components/Fitur"
import Hero from "@/components/Hero"
import ListBerita from "@/components/ListBerita"
import { getBeritaResponse } from "../libs/api-libs"
import Link from "next/link"

const fitur = [
  { title: "Kursus", url: "/kursus" },
  { title: "Berita", url: "/berita" },
]

const Beranda = async () => {
  const data = await getBeritaResponse("antara", "terbaru")

  return (
    <div className="min-h-screen p-6">
      <Hero />
      <div className="grid grid-cols-2 gap-2">
        {fitur.map((item, index) => (
          <Link key={index} href={item.url}>
            <Fitur title={item.title} />
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold py-2">Berita Terkini</h2>
        <Link href="/berita">Lihat semua</Link>
      </div>
      <div>
        {data.data.posts.map((post, index) => (
          <Link href={post.link} key={index}>
            <ListBerita
              title={post.title}
              url={post.thumbnail}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Beranda
