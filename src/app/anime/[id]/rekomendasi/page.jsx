import Navbar from "@/components/AnimeId/Navbar"
import AnimeList from "@/components/AnimeList"
import { getAnimeResponse } from "@/libs/api-libs"

const RekomendasiPage = ({ params: { id } }) => {
  const Rekomendasi = async ({ animeId }) => {
    const { data } = await getAnimeResponse(`anime/${animeId}/recommendations`)
    const api = {
      data: data.map((item) => ({
        mal_id: item.entry.mal_id,
        title: item.entry.title,
        url: item.entry.url,
        images: item.entry.images,
      })),
    }
    return <AnimeList api={api} />
  }
  return (
    <div>
      <Navbar id={id} rekomendasi={true} />
      <p className="text-justify text-2xl font-bold">Rekomendasi</p>
      <Rekomendasi animeId={id} />
    </div>
  )
}

export default RekomendasiPage
