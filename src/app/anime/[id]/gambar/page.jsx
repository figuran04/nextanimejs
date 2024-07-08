import { getAnimeResponse } from "@/libs/api-libs"
import Gambar from "../components/Gambar"

const GambarPage = async ({ params: { id } }) => {
  const gambar = await getAnimeResponse(`anime/${id}/pictures`)
  return <Gambar gambar={gambar} />
}

export default GambarPage
