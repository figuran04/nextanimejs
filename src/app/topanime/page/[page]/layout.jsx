"use client"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import Navigation from "@/components/AnimeId/Navigation"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Paginasi from "@/components/Utilities/Paginasi"

const nav = [
  {
    condition: false,
    link: "anime/page/1",
    title: "Anime",
  },
  {
    condition: true,
    link: "topanime/page/1",
    title: "Anime Teratas",
  },
  {
    condition: false,
    link: "rekomendasi/page/1",
    title: "Anime Rekomendasi",
  },
]

const AnimeLayoutPage = ({ children, params: { page } }) => {
  const [anime, setAnime] = useState([])
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setAnime(semuaAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`ANIME TERATAS #${page}`} />
        <Navigation nav={nav} />
        {children}
        <Paginasi
          halaman="topanime"
          page={page}
          lastPage={anime.pagination?.last_visible_page}
        />
      </section>
    </div>
  )
}

export default AnimeLayoutPage
