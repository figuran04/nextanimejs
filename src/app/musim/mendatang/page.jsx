"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"

const MusimMendatangPage = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  const fetchData = async () => {
    const populerAnime = await getAnimeResponse(
      "seasons/upcoming",
      `page=${page}`
    )
    setTopAnime(populerAnime)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`MENDATANG TERATAS #${page}`} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 dark:text-color-primary text-color-dark mb-4">
          <Link
            href={`/musim/sekarang`}
            className="group shadow p-2 transition-all rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-secondary group-hover:text-color-accent">
              Musim Sekarang
            </p>
          </Link>
          <Link
            href={`/musim/mendatang`}
            className="group shadow p-2 transition-all dark:bg-color-secondary bg-color-accent rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center dark:text-color-dark text-color-primary">
              Musim Mendatang
            </p>
          </Link>
        </div>
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

export default MusimMendatangPage
