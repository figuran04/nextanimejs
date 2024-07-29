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
import Handle from "@/components/AnimeId/Handle"
import More from "@/components/AnimeId/More"
import HeaderAnime from "@/components/AnimeId/HeaderAnime"

const KarakterPage = ({ params: { id } }) => {
  const [data, setData] = useState(null)
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
        {displayedCharacters.map((item, index) => {
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
    <div className="flex flex-col gap-1">
      <Navbar id={id} karakter={true} />
      <HeaderAnime title="Karakter" />
      <Handle data={data} render={(data) => <Karakter karakter={data} />} />
      <More data={data} fungsi={() => setShowAll(!showAll)} showAll={showAll} />
    </div>
  )
}

export default KarakterPage
