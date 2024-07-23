import Genre from "@/components/AnimeId/Genre"
import Navbar from "@/components/AnimeId/Navbar"
import Skor from "@/components/AnimeId/Skor"
import { getAnimeResponse } from "@/libs/api-libs"

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)

  return (
    <div>
      <Navbar id={id} detail={true} />
      <Skor data={data} />
      <Genre data={data} />
      <div className="flex flex-col gap-2 my-2">
        <p className="text-justify h3">Sinopsis</p>
        <p className="text-base text-justify md:text-lg">{data.synopsis}</p>
      </div>
    </div>
  )
}

export default AnimeIdPage
