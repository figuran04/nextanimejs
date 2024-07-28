import Background from "@/components/AnimeId/Background"
import External from "@/components/AnimeId/External"
import Genre from "@/components/AnimeId/Genre"
import Navbar from "@/components/AnimeId/Navbar"
import Producers from "@/components/AnimeId/Producers"
import Relations from "@/components/AnimeId/Relations"
import Skor from "@/components/AnimeId/Skor"
import Theme from "@/components/AnimeId/Theme"
import { getAnimeResponse } from "@/libs/api-libs"

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/full`)

  return (
    <div>
      <Navbar id={id} detail={true} />
      <Skor data={data} />
      <Genre data={data} />
      <Relations data={data} />
      <div className="flex flex-col gap-2 my-2">
        <span className="text-xl font-bold">Sinopsis</span>
        <p className="text-justify">{data.synopsis}</p>
      </div>
      {data.background != "" && <Background data={data} />}
      {data.theme.openings && data.theme.endings != "" && <Theme data={data} />}
      {data.producers != "" && <Producers data={data} />}
      <External data={data} />
    </div>
  )
}

export default AnimeIdPage
