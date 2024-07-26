"use client"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Recommended from "@/components/Recommended"
import SkeletonAnimeRecommend from "@/components/Utilities/SkeletonAnimeRecommend"

const RekomendasiPagePage = ({ params: { page } }) => {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse(
      "recommendations/anime",
      `page=${page}`
    )
    setAnime(semuaAnime)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>{loading ? <SkeletonAnimeRecommend /> : <Recommended api={anime} />}</>
  )
}

export default RekomendasiPagePage
