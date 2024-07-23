"use client"
import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/Utilities/Header"
import SkeletonAnimeCard from "@/components/Utilities/SkeletonAnimeCard"
import { useEffect, useState } from "react"

const SearchPage = ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const [searchAnime, setSearchAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const anime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    setSearchAnime(anime)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        {loading ? <SkeletonAnimeCard /> : <AnimeList api={searchAnime} />}
      </section>
    </div>
  )
}

export default SearchPage
