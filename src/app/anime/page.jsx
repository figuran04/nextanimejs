"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"

const AnimePage = () => {
  const [page, setPage] = useState(1)
  const [anime, setAnime] = useState([])
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse("anime", `page=${page}`)
    setAnime(semuaAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Anime #${page}`} />
        <AnimeList api={anime} />
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
