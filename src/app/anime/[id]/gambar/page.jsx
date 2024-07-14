import { getAnimeResponse } from "@/libs/api-libs"
import Navbar from "../components/Navbar"
import Gambar from "../components/Gambar"

const GambarPage = async ({ params: { id } }) => {
  const gambar = await getAnimeResponse(`anime/${id}/pictures`)

  return (
    <div>
      <Navbar
        id={id}
        gambar="bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
      />
      <Gambar gambar={gambar} />
    </div>
  )
}

export default GambarPage
