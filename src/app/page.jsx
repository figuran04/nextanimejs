"use client"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/Utilities/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import LoadMoreRecommend from "@/components/Recommended/Loadmore"
import { useInView } from "react-intersection-observer"
import SkeletonAnimeRecommend from "@/components/Utilities/SkeletonAnimeRecommend"
import SkeletonAnimeSide from "@/components/Utilities/SkeletonAnimeSide"
import { useEffect, useState } from "react"
import AnimeSide from "@/components/AnimeSide"

const HomePage = () => {
  const [topAnimeView, inTopAnimeView] = useInView({
    triggerOnce: true,
  })
  const [recommendedView, inRecommendedView] = useInView({
    triggerOnce: true,
  })
  const [topAnime, setTopAnime] = useState([])
  const [recommendedAnime, setRecomendedAnime] = useState([])
  const [seasonNowAnime, setSeasonNowAnime] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const seasonNowAnimeRes = await getAnimeResponse("seasons/now", "limit=8")
      setSeasonNowAnime(seasonNowAnimeRes)

      const topAnimeRes = await getAnimeResponse("top/anime", "limit=5")
      const recommendedAnimeRes = await getAnimeResponse(
        "recommendations/anime"
      )

      if (inTopAnimeView) {
        setTopAnime(topAnimeRes)
      } else {
        setTopAnime([])
      }

      if (inRecommendedView) {
        setRecomendedAnime(recommendedAnimeRes)
      } else {
        setRecomendedAnime([])
      }
    }

    fetchData()
  }, [inTopAnimeView, inRecommendedView])

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
          <section ref={recommendedView}>
            <Header
              title="Anime Rekomendasi"
              linkHref="/rekomendasi"
              linkTitle="Lihat Semua"
            />
            {inRecommendedView ? (
              <LoadMoreRecommend api={recommendedAnime} />
            ) : (
              <SkeletonAnimeRecommend />
            )}
          </section>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full flex flex-col gap-6">
          <section ref={topAnimeView}>
            <Header
              title="Anime Teratas"
              linkHref="/topanime"
              linkTitle="Lihat Semua"
            />
            {inTopAnimeView ? (
              <AnimeSide api={topAnime} />
            ) : (
              <SkeletonAnimeSide />
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomePage
