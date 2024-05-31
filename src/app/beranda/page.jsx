"use client"
import Fitur from "@/components/Fitur"
import Hero from "@/components/Hero"
import ListBerita from "@/components/ListBerita"
import { getBeritaResponse } from "../libs/api-libs"
import Link from "next/link"
import Navigasi from "@/components/Navigasi"

const fitur = [
  { title: "Kursus", url: "/kursus" },
  { title: "Berita", url: "/berita" },
]

const primaryColor = "primaryColorClassName"

const Beranda = async () => {
  const data = await getBeritaResponse("antara", "terbaru")

  return (
    <div className={`min-h-screen ${primaryColor} font-georgiaReguler`}>
      <Hero />
      <div className={`grid grid-cols-2 gap-2 ${primaryColor} p-4`}>
        {fitur.map((item, index) => (
          <Link key={index} href={item.url}>
            <Fitur title={item.title} />
          </Link>
        ))}
      </div>
      <div className={`rounded-tl-3xl rounded-tr-3xl pt-4 bg-white`}>
        <div className="flex flex-wrap mx-4 gap-3 justify-center mb-4 text-lg">
          <div className="w-full rounded-md px-2 py-2 flex justify-center bg-gray-200 hover:scale-105 hover:shadow-sm transition-all">
            Cara mengikuti kursus
          </div>
          <div className="w-full rounded-md px-2 py-2 flex justify-center bg-gray-200 hover:scale-105 hover:shadow-sm transition-all">
            Cara mengikuti kursus
          </div>
          <div className="w-full rounded-md px-2 py-2 flex justify-center bg-gray-200 hover:scale-105 hover:shadow-sm transition-all">
            Cara mengikuti kursus
          </div>
        </div>
        <div className="flex justify-between items-center px-4">
          <h2 className="text-2xl font-semibold py-2">Berita Terkini</h2>
          <Link
            href="/berita"
            className="bg-gray-200 rounded-full text-gray-500 px-4 py-1"
          >
            Lihat semua
          </Link>
        </div>
        <div className="px-4">
          {data.data.posts.map((post, index) => (
            <Link href={post.link} key={index}>
              <ListBerita
                title={post.title}
                url={post.thumbnail}
                date={post.pubDate}
              />
            </Link>
          ))}
        </div>
      </div>
      <Navigasi />
    </div>
  )
}
export default Beranda
