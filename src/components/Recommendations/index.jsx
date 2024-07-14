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
      const anime = await getAnimeResponse(`anime/${animeId}/recommendations`)
      const mappedEntries = anime.data.map((item) => item.entry)
      setEntries(mappedEntries)
      setLoading(false)
    }
    fetchRecommendations()
  }, [animeId])

  return (
    <div className="flex overflow-x-scroll gap-2 overflow-y-hidden">
      {loading ? (
        <p className="font-medium text-lg h-32">Memuat...</p>
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
            <div className="px-2 bg-gradient-to-t from-color-dark to-transparent w-full md:h-20 sm:h-16 h-14 flex absolute bottom-0 items-center transition-all">
              <p className="text-base md:text-lg font-bold line-clamp-2 text-color-primary">
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
