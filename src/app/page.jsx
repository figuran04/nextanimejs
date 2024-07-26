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
  const [topAnime, setTopAnime] = useState([])
  // const [recommendedView, inRecommendedView] = useInView({
  //   triggerOnce: true,
  // })
  // const [recommendedAnime, setRecomendedAnime] = useState([])
  const [seasonNowAnime, setSeasonNowAnime] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const seasonNowAnimeRes = await getAnimeResponse("seasons/now", "limit=8")
      setSeasonNowAnime(seasonNowAnimeRes)
      const topAnimeRes = await getAnimeResponse("top/anime", "limit=4")
      // const recommendedAnimeRes = await getAnimeResponse(
      //   "recommendations/anime"
      // )
      // if (inRecommendedView) {
      //   setRecomendedAnime(recommendedAnimeRes)
      // } else {
      //   setRecomendedAnime([])
      // }

      if (inTopAnimeView) {
        setTopAnime(topAnimeRes)
      } else {
        setTopAnime([])
      }
    }

    fetchData()
  }, [inTopAnimeView])

  return (
    <div className="flex flex-col items-center w-full">
      <div className="container flex flex-col gap-6 px-4 md:flex-row">
        <div className="flex flex-col w-full gap-4 lg:w-8/12 md:w-7/12">
          <section>
            <Header
              title="Musim Sekarang"
              linkHref="/musim/sekarang/page/1"
              linkTitle="Lihat Semua"
            />
            <AnimeList api={seasonNowAnime} />
          </section>
          {/* <section ref={recommendedView}>
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
          </section> */}
        </div>
        <div className="flex flex-col w-full gap-6 lg:w-4/12 md:w-5/12">
          <section ref={topAnimeView}>
            <Header
              title="Anime Teratas"
              linkHref="/topanime/page/1"
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
