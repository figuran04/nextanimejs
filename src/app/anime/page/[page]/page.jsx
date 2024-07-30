"use client"
import AnimeList from "@/components/AnimeList"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import SkeletonAnimeCard from "@/components/Utilities/SkeletonAnimeCard"

const AnimePagePage = ({ params: { page } }) => {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const semuaAnime = await getAnimeResponse("anime", `page=${page}`)
    setAnime(semuaAnime)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [page])

  return <>{loading ? <SkeletonAnimeCard /> : <AnimeList api={anime} />}</>
}

export default AnimePagePage
