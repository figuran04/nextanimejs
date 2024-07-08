import Recommended from "@/components/Recommended"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { getAnimeResponse } from "@/libs/api-libs"

const RekomendasiPage = async () => {
  const recommendedAnime = await getAnimeResponse("recommendations/anime")
  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Rekomendasi`} />
        <Recommended api={recommendedAnime} />
      </section>
    </div>
  )
}

export default RekomendasiPage
