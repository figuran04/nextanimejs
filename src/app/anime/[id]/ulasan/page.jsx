"use client"
import Handle from "@/components/AnimeId/Handle"
import HeaderAnime from "@/components/AnimeId/HeaderAnime"
import More from "@/components/AnimeId/More"
import Navbar from "@/components/AnimeId/Navbar"
import Ulasan from "@/components/AnimeId/Ulasan"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const UlasanPage = ({ params: { id } }) => {
  const [data, setData] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/reviews`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const UlasanMap = ({ data, showAll }) => {
    const displayedReviews = showAll ? data : data?.slice(0, 3)
    return (
      <>
        {displayedReviews?.map((item, index) => (
          <div className="p-2 rounded-md shadow" key={index}>
            <Ulasan item={item} />
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <Navbar id={id} ulasan={true} />
      <HeaderAnime title="Ulasan" />
      <Handle
        data={data}
        render={(data) => <UlasanMap data={data} showAll={showAll} />}
      />
      <More data={data} fungsi={() => setShowAll(!showAll)} showAll={showAll} />
    </div>
  )
}

export default UlasanPage
