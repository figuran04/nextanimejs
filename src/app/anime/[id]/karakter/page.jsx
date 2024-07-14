import Karakter from "@/components/AnimeId/Karakter"
import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"

const KarakterPage = async ({ params: { id } }) => {
  const karakter = await getAnimeResponse(`anime/${id}/characters`)
  return (
    <div>
      <Navbar id={id} karakter={true} />
      <p className="text-justify text-2xl font-bold">Karakter</p>
      <Karakter karakter={karakter} />
    </div>
  )
}

export default KarakterPage
