import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const AnimePage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`)
  const gambar = await getAnimeResponse(`anime/${id}/pictures`)
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl font-bold">
          {data.title} - {data.year}
        </h3>
        <h4 className="font-bold text-color-primary text-lg opacity-70">
          {data.title_english}
        </h4>
      </div>
      <div className="pt-4 px-4 flex md:flex-row flex-col gap-4 text-color-primary">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={250}
          height={250}
          className="md:w-2/5 w-full rounded object-cover"
        />

        <div className="flex flex-col gap-4 md:w-3/5">
          {/* <div>
            <ul className="flex gap-2">
              <li>Detail</li>
              <li>Karakter</li>
              <li>Episode</li>
              <li>Video</li>
              <li>Video</li>
            </ul>
          </div> */}
          <div className="flex text-color-primary flex-row w-full gap-2 flex-nowrap">
            <div className="flex flex-col w-full items-center border-2 px-2 py-1">
              <p className="text-3xl font-bold">{data.score}</p>
              <p>{`Favorit #${data.favorites}`}</p>
            </div>
            <div className="flex flex-nowrap justify-around flex-row w-full overflow-x-auto gap-2 items-center">
              <p className=" text-xl ">{`Peringkat #${data.rank}`}</p>
              <p className=" text-xl ">{`Penggemar #${data.popularity}`}</p>
              <p className=" text-xl ">{`Anggota #${data.members}`}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-justify text-2xl font-bold">Gambar</p>
            <div className="flex gap-2 overflow-x-auto flex-nowrap">
              {gambar.data?.map((item, index) => {
                return (
                  <Image
                    src={item.webp.image_url}
                    alt={item.jpg.image_url}
                    width={100}
                    height={100}
                    className="w-auto h-36 object-cover"
                    key={index}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-justify text-2xl font-bold">Sinopsis</p>
            <p className="text-justify text-xl">{data.synopsis}</p>
          </div>
        </div>
      </div>

      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default AnimePage
