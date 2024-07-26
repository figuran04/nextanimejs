"use client"
import Navbar from "@/components/AnimeId/Navbar"
import AnimeSide from "@/components/AnimeSide"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const RekomendasiPage = ({ params: { id } }) => {
  const [data, setData] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/recommendations`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const Rekomendasi = ({ animeId }) => {
    const displayedRecommendations = showAll ? data : data.slice(0, 3)

    const api = {
      data: displayedRecommendations.map((item) => ({
        mal_id: item.entry.mal_id,
        title: item.entry.title,
        type: item.votes + " suara",
        images: item.entry.images,
      })),
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
        <AnimeSide api={api} />
      </div>
    )
  }

  return (
    <div>
      <Navbar id={id} rekomendasi={true} />
      <div className="flex justify-between">
        <h3 className="h3">Rekomendasi</h3>
      </div>
      <div className="mt-3">
        <Rekomendasi animeId={id} />
        <div className="flex justify-center mt-3">
          {data.length > 3 && (
            <button onClick={() => setShowAll(!showAll)} className="Color">
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Rekomendasi"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RekomendasiPage
