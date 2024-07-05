import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs"
import AnimeSide from "@/components/AnimeSide"

const HomePage = async () => {
  try {
    const topAnime = await getAnimeResponse("top/anime", "limit=7")
    const seasonNowAnime = await getAnimeResponse("seasons/now", "limit=8")
    const seasonUpcomingAnime = await getAnimeResponse(
      "seasons/upcoming",
      "limit=8"
    )
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime")
    recommendedAnime = reproduce(recommendedAnime, 4)

    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-11/12 flex md:flex-row flex-col">
          <div className="lg:w-8/12 md:w-7/12 w-full">
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
                title="Musim Mendatang"
                linkHref="/musim/mendatang"
                linkTitle="Lihat Semua"
              />
              <AnimeList api={seasonUpcomingAnime} />
            </section>
            <section>
              <Header title="Rekomendasi" />
              <AnimeList api={recommendedAnime} />
            </section>
          </div>
          <section className="lg:w-4/12 md:w-5/12 w-full">
            <Header
              title="Paling Populer"
              linkHref="/populer"
              linkTitle="Lihat Semua"
            />
            <AnimeSide api={topAnime} />
          </section>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error loading homepage data:", error)
    return <div>Error loading data. Please try again later.</div>
  }
}

export default HomePage
