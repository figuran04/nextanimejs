"use client"
import Navbar from "@/components/AnimeId/Navbar"
import Ulasan from "@/components/AnimeId/Ulasan"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const UlasanPage = ({ params: { id } }) => {
  const [data, setData] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/reviews`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const displayedReviews = showAll ? data : data?.slice(0, 3)

  return (
    <div>
      <Navbar id={id} ulasan={true} />
      <div className="flex justify-between">
        <span className="font-bold text-xl">Ulasan</span>
      </div>
      <div className="mt-3">
        {displayedReviews?.map((item, index) => (
          <div className="p-2 rounded-md shadow" key={index}>
            <Ulasan item={item} />
          </div>
        ))}
        <div className="flex justify-center mt-3">
          {data?.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="Color text-base"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Ulasan"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default UlasanPage
