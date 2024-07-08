import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import Title from "./components/Title"
import Navbar from "./components/Navbar"

const AnimeLayout = async ({ children, params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)

  return (
    <>
      <Title data={data} />
      <div className="pt-4 px-4 flex md:flex-row flex-col gap-4 text-color-primary">
        <div className="md:w-1/4">
          <Image
            src={data?.images.webp.image_url}
            alt={data?.title}
            width={250}
            height={250}
            className="w-full rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-3/4">
          <Navbar id={id} />
          {children}
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={data?.trailer.youtube_id} />
      </div>
    </>
  )
}

export default AnimeLayout
