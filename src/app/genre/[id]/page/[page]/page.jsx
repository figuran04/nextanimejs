"use client"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import SkeletonAnimeCard from "@/components/Utilities/SkeletonAnimeCard"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"
import GenreId from "@/components/GenreId"
import Paginasi from "@/components/Utilities/Paginasi"

const GenreIdPage = ({ params: { id, page } }) => {
  const keyword = decodeURI(id)
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
        <Paginasi
          halaman={`genre/${id}`}
          page={page}
          lastPage={genreAnime.pagination?.last_visible_page}
        />
      </section>
    </div>
  )
}

export default GenreIdPage
