import { getAnimeResponse } from "@/libs/api-libs"
import Skor from "./components/Skor"
import Genre from "./components/Genre"

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)

  return (
    <>
      <div className="flex flex-col gap-4">
        <Skor data={data} />
        <Genre data={data} />
        <div className="flex flex-col gap-2">
          <p className="text-justify text-2xl font-bold">Sinopsis</p>
          <p className="text-justify text-xl">{data?.synopsis}</p>
        </div>
      </div>
    </>
  )
}

export default AnimeIdPage
