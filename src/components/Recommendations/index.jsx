"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { getAnimeResponse } from "@/libs/api-libs"

const Recommendations = ({ animeId }) => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const anime = await getAnimeResponse(`anime/${animeId}/recommendations`)
        const mappedEntries = anime.data.data.map((item) => item.entry)
        setEntries(mappedEntries)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching recommendations:", error)
      }
    }

    fetchRecommendations()
  }, [animeId])

  return (
    <div className="flex overflow-x-scroll gap-2 overflow-y-hidden">
      {loading ? (
        <p className="font-medium text-lg">Memuat...</p>
      ) : (
        entries.map((entry, index) => (
          <Link
            href={`/anime/${entry.mal_id}`}
            key={index}
            className="flex relative hover:scale-105 transition-all"
          >
            <Image
              src={entry.images.webp.image_url}
              alt={entry.images.jpg.image_url}
              width={50}
              height={50}
              className="min-w-24 h-32 object-cover rounded"
            />
            <div className="px-2 bg-gradient-to-t dark:from-color-dark from-color-primary to-transparent w-full md:h-20 sm:h-16 h-14 flex absolute bottom-0 items-center transition-all">
              <p className="text-base md:text-lg font-bold line-clamp-2">
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
