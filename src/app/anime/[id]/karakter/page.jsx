import Navbar from "@/components/AnimeId/Navbar"
import CharacterCard from "@/components/CharacterCard"
import {
  MotionDiv,
  transition,
  variants,
} from "@/components/Utilities/MotionDiv"
import { getAnimeResponse } from "@/libs/api-libs"

const KarakterPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/characters`)
  const Karakter = ({ karakter }) => {
    if (!karakter) {
      return <p className="font-medium text-lg">Memuat...</p>
    } else if (karakter == []) {
      return <p className="font-medium text-lg">Tidak ditemukan</p>
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-11/12">
        {karakter?.map((item, index) => {
          const voiceActor = item.voice_actors?.find(
            (actor) => actor.language === "Japanese"
          )
          return (
            <MotionDiv
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={transition}
              viewport={{ amount: 0 }}
              className="group cursor-pointer text-white transition-all relative rounded-lg overflow-hidden hover:scale-105 shadow hover:shadow-md"
            >
              <CharacterCard item={item} voiceActor={voiceActor} />
            </MotionDiv>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <Navbar id={id} karakter={true} />
      <p className="text-justify text-2xl font-bold">Karakter</p>
      <div className="w-full flex justify-center">
        <Karakter karakter={data} />
      </div>
    </div>
  )
}

export default KarakterPage
