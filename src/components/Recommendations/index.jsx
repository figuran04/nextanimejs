"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

const Recommendations = ({ animeId }) => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${animeId}/recommendations`
        )
        const mappedEntries = response.data.data.map((item) => item.entry)
        setEntries(mappedEntries)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching recommendations:", error)
      }
    }

    fetchRecommendations()
  }, [animeId])

  return (
    <div className="flex overflow-x-scroll space-x-4 py-4">
      {loading ? (
        <p className="font-medium text-lg">Memuat...</p>
      ) : (
        entries.map((entry, index) => (
          <Link
            href={`anime/${entry.mal_id}`}
            key={index}
            className="flex relative"
          >
            <Image
              src={entry.images.webp.image_url}
              alt={entry.images.jpg.image_url}
              width={50}
              height={50}
              className="min-w-32 h-44 object-cover"
            />
            <div className="px-2 bg-gradient-to-t from-color-dark to-transparent w-full md:h-20 sm:h-16 h-14 flex absolute bottom-0 items-center transition-all">
              <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
                {entry.title}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

export default Recommendations
