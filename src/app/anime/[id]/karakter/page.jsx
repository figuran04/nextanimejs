"use client"
import { useEffect, useState } from "react"
import Navbar from "@/components/AnimeId/Navbar"
import CharacterCard from "@/components/CharacterCard"
import {
  MotionDiv,
  transition,
  variants,
} from "@/components/Utilities/MotionDiv"
import { getAnimeResponse } from "@/libs/api-libs"

const KarakterPage = ({ params: { id } }) => {
  const [data, setData] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/characters`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const Karakter = ({ karakter }) => {
    const displayedCharacters = showAll ? karakter : karakter.slice(0, 3)

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
        {displayedCharacters?.map((item, index) => {
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
              className="transition-all relative rounded-lg overflow-hidden shadow hover:shadow-md"
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
      <div className="flex justify-between">
        <h3 className="h3">Karakter</h3>
        {data.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className="Color">
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Karakter"}
          </button>
        )}
      </div>
      <div className="w-full flex justify-center mt-3">
        <Karakter karakter={data} />
      </div>
    </div>
  )
}

export default KarakterPage
