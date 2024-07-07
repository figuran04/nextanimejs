import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import Recommendations from "@/components/Recommendations"
import Title from "./components/Title"
import Skor from "./components/Skor"
import Gambar from "./components/Gambar"
import Genre from "./components/Genre"
import Karakter from "./components/Karakter"

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)
  const karakter = await getAnimeResponse(`anime/${id}/characters`)
  const gambar = await getAnimeResponse(`anime/${id}/pictures`)

  return (
    <>
      <Title data={data} />
      <div className="pt-4 px-4 flex md:flex-row flex-col gap-4 text-color-primary">
        <div className="md:w-1/4">
          <Image
            src={data.images.webp.image_url}
            alt={data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-3/4">
          <Skor data={data} />
          <Gambar gambar={gambar} />
          <Genre data={data} />
          <div className="flex flex-col gap-2">
            <p className="text-justify text-2xl font-bold">Sinopsis</p>
            <p className="text-justify text-xl">{data.synopsis}</p>
          </div>
          <div>
            <p className="text-justify text-2xl font-bold">Karakter</p>
            <Karakter karakter={karakter} />
          </div>
          <div>
            <p className="text-justify text-2xl font-bold">Rekomendasi</p>
            <Recommendations animeId={id} />
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default AnimeIdPage
