"use client"
import Navbar from "@/components/AnimeId/Navbar"
import EpisodeCard from "@/components/EpisodeCard"
import {
  MotionDiv,
  transition,
  variants,
} from "@/components/Utilities/MotionDiv"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const EpisodePage = ({ params: { id } }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/episodes`)
      setData(response.data)
    }
    fetchData()
  }, [id])
  const Episode = ({ episode }) => {
    return (
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={transition}
        viewport={{ amount: 0 }}
        className="transition-all relative"
      >
        <EpisodeCard data={episode} />
      </MotionDiv>
    )
  }
  return (
    <div>
      <Navbar id={id} episode={true} />
      <div className="flex justify-between">
        <span className="font-bold text-xl">Episode</span>
      </div>
      <div className="mt-3">
        <Episode episode={data} />
      </div>
    </div>
  )
}

export default EpisodePage
