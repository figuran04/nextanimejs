import Gambar from "@/components/AnimeId/Gambar"
import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"

const GambarPage = async ({ params: { id } }) => {
  const gambar = await getAnimeResponse(`anime/${id}/pictures`)

  return (
    <div>
      <Navbar id={id} gambar={true} />
      <Gambar gambar={gambar} />
    </div>
  )
}

export default GambarPage
