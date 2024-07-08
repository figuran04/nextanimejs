import Karakter from "../components/Karakter"
import { getAnimeResponse } from "@/libs/api-libs"

const KarakterPage = async ({ params: { id } }) => {
  const karakter = await getAnimeResponse(`anime/${id}/characters`)
  return (
    <div>
      <p className="text-justify text-2xl font-bold">Karakter</p>
      <Karakter karakter={karakter} />
    </div>
  )
}

export default KarakterPage
