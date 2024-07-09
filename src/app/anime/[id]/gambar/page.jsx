import { getAnimeResponse } from "@/libs/api-libs"
import Navbar from "../components/Navbar"
import Gambar from "../components/Gambar"

const GambarPage = async ({ params: { id } }) => {
  const gambar = await getAnimeResponse(`anime/${id}/pictures`)

  return (
    <>
      <Navbar id={id} gambar="bg-color-accent shadow-md" />
      <Gambar gambar={gambar} />
    </>
  )
}

export default GambarPage
