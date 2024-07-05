"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api-libs"
import Header from "@/components/AnimeList/Header"

const TopAnimePage = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`ANIME TERATAS #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default TopAnimePage
