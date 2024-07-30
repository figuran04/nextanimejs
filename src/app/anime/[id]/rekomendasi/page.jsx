"use client"
import Handle from "@/components/AnimeId/Handle"
import HeaderAnime from "@/components/AnimeId/HeaderAnime"
import More from "@/components/AnimeId/More"
import Navbar from "@/components/AnimeId/Navbar"
import AnimeSide from "@/components/AnimeSide"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const RekomendasiPage = ({ params: { id } }) => {
  const [data, setData] = useState(null)
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
    <div className="flex flex-col gap-1">
      <Navbar id={id} rekomendasi={true} />
      <HeaderAnime title="Rekomendasi" />
      <Handle data={data} render={(data) => <Rekomendasi animeId={data} />} />
      <More data={data} fungsi={() => setShowAll(!showAll)} showAll={showAll} />
    </div>
  )
}

export default RekomendasiPage
