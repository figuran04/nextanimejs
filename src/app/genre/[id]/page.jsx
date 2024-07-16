"use client"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import Pagination from "@/components/Utilities/Pagination"
import SkeletonAnimeCard from "@/components/Utilities/SkeletonAnimeCard"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"
import GenreId from "@/components/GenreId"

const GenreIdPage = ({ params: { id } }) => {
  const keyword = decodeURI(id)
  const [page, setPage] = useState(1)
  const [genreAnime, setGenreAnime] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const genreAnimeRes = await getAnimeResponse("anime", `page=${page}`)
    setGenreAnime(genreAnimeRes)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={keyword} />
        {loading ? (
          <SkeletonAnimeCard />
        ) : (
          <GenreId api={genreAnime} keyword={keyword} />
        )}
        <Pagination
          page={page}
          lastPage={genreAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default GenreIdPage
