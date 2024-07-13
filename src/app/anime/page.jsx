"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 dark:text-color-primary text-color-dark mb-4">
          <Link
            href={`/anime`}
            className="group shadow p-2 transition-all dark:bg-color-secondary bg-color-accent rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center dark:text-color-dark text-color-primary">
              Anime
            </p>
          </Link>
          <Link
            href={`/topanime`}
            className="group shadow p-2 transition-all rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-secondary group-hover:text-color-accent">
              Anime Teratas
            </p>
          </Link>
          <Link
            href={`/rekomendasi`}
            className="group shadow p-2 transition-all rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-secondary group-hover:text-color-accent">
              Anime Rekomendasi
            </p>
          </Link>
        </div>
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
