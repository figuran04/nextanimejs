"use client"
import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const GambarPage = ({ params: { id } }) => {
  const [data, setData] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnimeResponse(`anime/${id}/pictures`)
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [id])

  const Gambar = ({ gambar }) => {
    const displayedImages = showAll ? gambar : gambar.slice(0, 3)

    return (
      <div className="flex flex-wrap gap-2">
        {displayedImages?.map((item, index) => (
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
    <div>
      <Navbar id={id} gambar={true} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-xl font-bold">Gambar</span>
        </div>
        <div className="mt-3">
          <Gambar gambar={data} />
          <div className="flex justify-center mt-3">
            {data.length > 3 && (
              <button onClick={() => setShowAll(!showAll)} className="Color">
                {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Gambar"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GambarPage
