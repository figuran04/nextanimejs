"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"

const MusimSekarangPage = () => {
  const [page, setPage] = useState(() => {
    // Ambil nilai page dari localStorage jika ada, jika tidak, gunakan 1
    const savedPage = localStorage.getItem("currentPage")
    return savedPage ? parseInt(savedPage, 10) : 1
  })
  const [topAnime, setTopAnime] = useState([])
  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("seasons/now", `page=${page}`)
    setTopAnime(populerAnime)
  }
  useEffect(() => {
    fetchData()
    // Simpan nilai page ke localStorage setiap kali page berubah
    localStorage.setItem("currentPage", page)
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`MUSIM SEKARANG #${page}`} />
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

export default MusimSekarangPage
