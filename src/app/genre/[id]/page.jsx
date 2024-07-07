"use client"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { getAnimeResponse } from "@/libs/api-libs"
import AnimeGen from "@/components/AnimeGen"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"

const GenreIdPage = async ({ params: { id } }) => {
  const keyword = decodeURI(id)
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("anime", `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={keyword} />
        <AnimeGen api={topAnime} keyword={keyword} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default GenreIdPage
