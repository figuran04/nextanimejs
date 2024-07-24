import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const GambarPreview = async ({ params: { id, index } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/pictures`)
  return (
    <div>
      <Navbar id={id} gambar={true} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h3 className="h3">Detail Gambar</h3>
        </div>
        <Image
          src={data[index].webp.image_url}
          alt={data[index].jpg.image_url}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default GambarPreview
