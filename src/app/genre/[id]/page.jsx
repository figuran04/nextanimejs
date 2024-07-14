"use client"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import SkeletonAnimeCard from "@/components/SkeletonAnimeCard"
import AnimeCard from "@/components/AnimeCard"
import { MotionDiv } from "@/components/MotionDiv"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const GenreIdPage = ({ params: { id } }) => {
  const keyword = decodeURI(id)
  const [page, setPage] = useState(1)
  const [genAnime, setGenAnime] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const genreAnime = await getAnimeResponse("anime", `page=${page}`)
    setGenAnime(genreAnime)
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
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            {genAnime.data
              ?.filter((anime) =>
                anime.genres?.some(
                  (genre) => genre.name.toLowerCase() === keyword.toLowerCase()
                )
              )
              .map((anime, index) => (
                <MotionDiv
                  key={index}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.25,
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  viewport={{ amount: 0 }}
                  className="group cursor-pointer text-white transition-all relative rounded-lg overflow-hidden hover:scale-105 shadow hover:shadow-md"
                >
                  <AnimeCard api={anime} />
                </MotionDiv>
              ))}
          </div>
        )}
        <Pagination
          page={page}
          lastPage={genAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  )
}

export default GenreIdPage
