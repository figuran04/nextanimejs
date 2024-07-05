import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const SearchPage = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  )
}

export default SearchPage
