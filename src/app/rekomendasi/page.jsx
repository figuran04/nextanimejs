"use client"
import Navigation from "@/components/AnimeId/Navigation"
import Recommended from "@/components/Recommended"
import SkeletonAnimeRecommend from "@/components/Utilities/SkeletonAnimeRecommend"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import Pagination from "@/components/Utilities/Pagination"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const nav = [
  {
    condition: false,
    link: "anime",
    title: "Anime",
  },
  {
    condition: false,
    link: "topanime",
    title: "Anime Teratas",
  },
  {
    condition: true,
    link: "rekomendasi",
    title: "Anime Rekomendasi",
  },
]

const RekomendasiPage = () => {
  const [page, setPage] = useState(1)
  const [recommendedAnime, setRecommendedAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse(
      "recommendations/anime",
      `page=${page}`
    )
    setRecommendedAnime(semuaAnime)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Rekomendasi #${page}`} />
        <Navigation nav={nav} />
        {loading ? (
          <SkeletonAnimeRecommend />
        ) : (
          <Recommended api={recommendedAnime} />
        )}
        <Pagination
          page={page}
          lastPage={recommendedAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default RekomendasiPage
