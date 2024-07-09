"use client"
import Recommended from "@/components/Recommended"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const RekomendasiPage = async () => {
  const [page, setPage] = useState(1)
  const [recommendedAnime, setRecommendedAnime] = useState([])
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse(
      "recommendations/anime",
      `page=${page}`
    )
    setRecommendedAnime(semuaAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Rekomendasi #${page}`} />
        <Recommended api={recommendedAnime} />
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
