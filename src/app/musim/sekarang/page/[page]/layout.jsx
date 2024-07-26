"use client"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import Navigation from "@/components/AnimeId/Navigation"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Paginasi from "@/components/Utilities/Paginasi"

const nav = [
  {
    condition: true,
    link: "musim/sekarang/page/1",
    title: "Musim Sekarang",
  },
  {
    condition: false,
    link: "musim/mendatang/page/1",
    title: "Musim Mendatang",
  },
]

const AnimeLayoutPage = ({ children, params: { page } }) => {
  const [anime, setAnime] = useState([])
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse("seasons/now", `page=${page}`)
    setAnime(semuaAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`MUSIM SEKARANG #${page}`} />
        <Navigation nav={nav} />
        {children}
        <Paginasi
          halaman="musim/sekarang"
          page={page}
          lastPage={anime.pagination?.last_visible_page}
        />
      </section>
    </div>
  )
}

export default AnimeLayoutPage
