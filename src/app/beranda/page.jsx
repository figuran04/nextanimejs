// "use client"
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
    <div className={`min-h-screen ${primaryColor} bg-gray-800`}>
      <Hero />
      <div
        className={`grid grid-cols-2 gap-2 ${primaryColor} p-4 sticky top-0`}
      >
        <Link
          href="/kursus"
          className="bg-gray-300 hover:scale-105 transition-all rounded-md flex flex-wrap justify-center py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 w-full"
          >
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>
          <Fitur title="Kursus" />
        </Link>
        <Link
          href="/berita"
          className="bg-gray-300 hover:scale-105 transition-all rounded-md flex flex-wrap justify-center py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 w-full"
          >
            <path
              fillRule="evenodd"
              d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
              clipRule="evenodd"
            />
            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
          </svg>

          <Fitur title="Berita" />
        </Link>
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
        <div className="px-4 mb-28">
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
