import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const AnimePage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl font-bold">
          {data.title} - {data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="flex fles-col justify-center items-center border-2 border-color-primary py-2 px-3 gap-2">
          <h3>PERINGKAT</h3>
          <p>{data.rank}</p>
        </div>
        <div className="flex fles-col justify-center items-center border-2 border-color-primary py-2 px-3 gap-2">
          <h3>SKOR</h3>
          <p>{data.score}</p>
        </div>
        <div className="flex fles-col justify-center items-center border-2 border-color-primary py-2 px-3 gap-2">
          <h3>ANGGOTA </h3>
          <p>{data.members}</p>
        </div>
        <div className="flex fles-col justify-center items-center border-2 border-color-primary py-2 px-3 gap-2">
          <h3>EPISODE </h3>
          <p>{data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex md:flex-row flex-col gap-2 text-color-primary">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default AnimePage
