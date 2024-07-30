"use client"
import Handle from "@/components/AnimeId/Handle"
import HeaderAnime from "@/components/AnimeId/HeaderAnime"
import More from "@/components/AnimeId/More"
import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const GambarPage = ({ params: { id } }) => {
  const [data, setData] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/pictures`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const Gambar = ({ gambar }) => {
    const displayedImages = showAll ? gambar : gambar.slice(0, 3)
    return (
      <div className="flex flex-wrap gap-2">
        {displayedImages.map((item, index) => (
          <Link href={`/anime/${id}/gambar/preview/${index}`} key={index}>
            <Image
              src={item.webp.image_url}
              alt={item.jpg.image_url}
              width={80}
              height={100}
              className="object-cover h-32 w-auto"
            />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <Navbar id={id} gambar={true} />
      <HeaderAnime title="Gambar" />
      <Handle data={data} render={(data) => <Gambar gambar={data} />} />
      <More data={data} fungsi={() => setShowAll(!showAll)} showAll={showAll} />
    </div>
  )
}

export default GambarPage
