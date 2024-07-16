"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import Pagination from "@/components/Utilities/Pagination"
import Navigation from "@/components/AnimeId/Navigation"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import SkeletonAnimeCard from "@/components/Utilities/SkeletonAnimeCard"

const nav = [
  {
    condition: true,
    link: "anime",
    title: "Anime",
  },
  {
    condition: false,
    link: "topanime",
    title: "Anime Teratas",
  },
  {
    condition: false,
    link: "rekomendasi",
    title: "Anime Rekomendasi",
  },
]

const AnimePage = () => {
  const [page, setPage] = useState(1)
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse("anime", `page=${page}`)
    setAnime(semuaAnime)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Anime #${page}`} />
        <Navigation nav={nav} />
        {loading ? <SkeletonAnimeCard /> : <AnimeList api={anime} />}
        <Pagination
          page={page}
          lastPage={anime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default AnimePage
