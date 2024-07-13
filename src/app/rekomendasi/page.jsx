"use client"
import Recommended from "@/components/Recommended"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"
import { useEffect, useState } from "react"

const RekomendasiPage = () => {
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 dark:text-color-primary text-color-dark mb-4">
          <Link
            href={`/anime`}
            className="group shadow p-2 transition-all rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-secondary group-hover:text-color-accent">
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
            className="group shadow p-2 transition-all dark:bg-color-secondary bg-color-accent rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center dark:text-color-dark text-color-primary">
              Anime Rekomendasi
            </p>
          </Link>
        </div>
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
