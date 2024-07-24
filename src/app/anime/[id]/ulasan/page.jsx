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
        <h3 className="h3">Ulasan</h3>
        {data?.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className="Color">
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Ulasan"}
          </button>
        )}
      </div>
      {displayedReviews?.map((item, index) => (
        <div className="p-2 rounded-md shadow mt-3" key={index}>
          <Ulasan item={item} />
        </div>
      ))}
    </div>
  )
}

export default UlasanPage
