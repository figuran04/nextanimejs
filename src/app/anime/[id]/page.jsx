import { getAnimeResponse } from "@/libs/api-libs"
import Skor from "./components/Skor"
import Genre from "./components/Genre"
import Navbar from "./components/Navbar"

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)

  return (
    <>
      <Navbar id={id} detail="bg-color-accent shadow-md" />
      <Skor data={data} />
      <Genre data={data} />
      <div className="flex flex-col gap-2">
        <p className="text-justify text-2xl font-bold">Sinopsis</p>
        <p className="text-justify text-lg">{data.synopsis}</p>
      </div>
    </>
  )
}

export default AnimeIdPage
