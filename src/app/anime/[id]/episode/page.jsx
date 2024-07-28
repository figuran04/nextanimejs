"use client"
import Navbar from "@/components/AnimeId/Navbar"
import EpisodeCard from "@/components/EpisodeCard"
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
  return (
    <div>
      <Navbar id={id} episode={true} />
      <div className="flex justify-between">
        <span className="font-bold text-xl">Episode</span>
      </div>
      <div className="mt-3">
        <EpisodeCard data={data} />
      </div>
    </div>
  )
}

export default EpisodePage
