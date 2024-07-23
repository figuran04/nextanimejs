import Navbar from "@/components/AnimeId/Navbar"
import AnimeSide from "@/components/AnimeSide"
import { getAnimeResponse } from "@/libs/api-libs"

const RekomendasiPage = ({ params: { id } }) => {
  const Rekomendasi = async ({ animeId }) => {
    const { data } = await getAnimeResponse(`anime/${animeId}/recommendations`)
    const api = {
      data: data.map((item) => ({
        mal_id: item.entry.mal_id,
        title: item.entry.title,
        type: item.votes + " suara",
        images: item.entry.images,
      })),
    }
    return <AnimeSide api={api} />
  }
  return (
    <div>
      <Navbar id={id} rekomendasi={true} />
      <p className="text-justify h3">Rekomendasi</p>
      <div className="mt-4 md:w-5/6">
        <Rekomendasi animeId={id} />
      </div>
    </div>
  )
}

export default RekomendasiPage
