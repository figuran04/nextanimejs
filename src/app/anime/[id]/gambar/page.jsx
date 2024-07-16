import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const GambarPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/pictures`)
  const Gambar = ({ gambar }) => {
    if (!gambar) {
      return <p className="font-medium text-lg">Memuat...</p>
    } else if (gambar == []) {
      return <p className="font-medium text-lg">Tidak ditemukan</p>
    }
    return (
      <div className="flex gap-2 overflow-x-auto flex-nowrap">
        {gambar?.map((item, index) => (
          <Image
            src={item.webp.image_url}
            alt={item.jpg.image_url}
            width={70}
            height={100}
            className="w-auto h-36 object-cover"
            key={index}
          />
        ))}
      </div>
    )
  }

  return (
    <div>
      <Navbar id={id} gambar={true} />
      <div className="flex flex-col gap-2">
        <p className="text-justify text-2xl font-bold">Gambar</p>
        <Gambar gambar={data} />
      </div>
    </div>
  )
}

export default GambarPage
