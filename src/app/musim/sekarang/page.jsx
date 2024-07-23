"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Navigation from "@/components/AnimeId/Navigation"
import SkeletonAnimeCard from "@/components/Utilities/SkeletonAnimeCard"

const nav = [
  {
    condition: true,
    link: "musim/sekarang",
    title: "Musim Sekarang",
  },
  {
    condition: false,
    link: "musim/mendatang",
    title: "Musim Mendatang",
  },
]

const MusimSekarangPage = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("seasons/now", `page=${page}`)
    setTopAnime(populerAnime)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`MUSIM SEKARANG #${page}`} />
        <Navigation nav={nav} />
        {loading ? <SkeletonAnimeCard /> : <AnimeList api={topAnime} />}
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default MusimSekarangPage
