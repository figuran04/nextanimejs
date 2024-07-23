import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Title from "@/components/AnimeId/Title"

const AnimeIdPage = async ({ children, params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)

  return (
    <div>
      <Title data={data} />
      <div className="flex flex-col gap-4 px-4 pt-4 md:flex-row">
        <div className="md:w-1/4">
          <Image
            src={data.images.webp.image_url}
            alt={data.title}
            width={250}
            height={250}
            className="object-cover w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-3/4">{children}</div>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </div>
  )
}

export default AnimeIdPage
