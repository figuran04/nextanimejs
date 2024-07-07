import AnimeList from "@/components/AnimeList"
import AnimeSide from "@/components/AnimeSide"
import Recommended from "@/components/Recommended"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, reproduce } from "@/libs/api-libs"

const HomePage = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=5")
  const seasonNowAnime = await getAnimeResponse("seasons/now", "limit=8")
  const seasonUpcomingAnime = await getAnimeResponse(
    "seasons/upcoming",
    "limit=5"
  )
  let recommendedAnime = await getAnimeResponse("recommendations/anime")
  // let recommendedAnime = await getNestedAnimeResponse("recommendations/anime")
  recommendedAnime = reproduce(recommendedAnime, 4)
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 flex md:flex-row flex-col gap-6">
        <div className="lg:w-8/12 md:w-7/12 w-full flex flex-col gap-4">
          <section>
            <Header
              title="Musim Sekarang"
              linkHref="/musim/sekarang"
              linkTitle="Lihat Semua"
              api={seasonNowAnime}
            />
            <AnimeList api={seasonNowAnime} />
          </section>

          {/* <section>
            <Header
              title="Anime Rekomendasi"
              linkHref="/rekomendasi"
              linkTitle="Lihat Semua"
            />
            <Recommended api={recommendedAnime} />
          </section> */}

          {/* <section className="">
            <Header title="Rekomendasi" />
            <AnimeList api={recommendedAnime} />
          </section> */}
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full flex flex-col gap-6">
          <section>
            <Header
              title="Anime Teratas"
              linkHref="/topanime"
              linkTitle="Lihat Semua"
            />
            <AnimeSide api={topAnime} />
          </section>
          <section>
            <Header
              title="Mendatang Teratas"
              linkHref="/musim/mendatang"
              linkTitle="Lihat Semua"
            />
            <AnimeSide api={seasonUpcomingAnime} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomePage
