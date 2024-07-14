"use client"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import { useState, useEffect } from "react"
import LoadMoreRecommend from "@/components/Recommended/Loadmore"
import LoadMoreSide from "@/components/AnimeSide/LoadMoreSide"

const HomePage = () => {
  const [topAnime, setTopAnime] = useState([])
  const [seasonNowAnime, setSeasonNowAnime] = useState([])
  const [recommendedAnime, setRecommendedAnime] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

      const seasonNowAnimeResponse = await getAnimeResponse(
        "seasons/now",
        "limit=8"
      )
      setSeasonNowAnime(seasonNowAnimeResponse)
      await delay(510)
      const topAnimeResponse = await getAnimeResponse("top/anime", "limit=5")
      setTopAnime(topAnimeResponse)
      await delay(510)
      const recommendedAnimeResponse = await getAnimeResponse(
        "recommendations/anime"
      )
      setRecommendedAnime(recommendedAnimeResponse)
    }

    fetchData()
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 flex md:flex-row flex-col gap-6">
        <div className="lg:w-8/12 md:w-7/12 w-full flex flex-col gap-4">
          <section>
            <Header
              title="Musim Sekarang"
              linkHref="/musim/sekarang"
              linkTitle="Lihat Semua"
            />
            <AnimeList api={seasonNowAnime} />
          </section>
          <section>
            <Header
              title="Anime Rekomendasi"
              linkHref="/rekomendasi"
              linkTitle="Lihat Semua"
            />
            <LoadMoreRecommend api={recommendedAnime} />
          </section>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full flex flex-col gap-6">
          <section>
            <Header
              title="Anime Teratas"
              linkHref="/topanime"
              linkTitle="Lihat Semua"
            />
            <LoadMoreSide api={topAnime} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomePage
