"use client"
import Image from "next/image"
import FormattedDate from "./Utilities/FormattedDate"
import Link from "next/link"
import { useState } from "react"

const RecommendedCard = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }
  return (
    <>
      <div className="flex justify-between gap-2">
        {item.entry?.map((entry, index) => (
          <Link
            key={entry.mal_id}
            href={`/anime/${entry.mal_id}`}
            className="w-1/2 flex gap-1 group transition-all relative rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={entry.images.webp.image_url}
              alt={entry.images.jpg.image_url}
              width={100}
              height={100}
              className="lg:h-full h-full lg:w-16 w-14 object-cover transition-all rounded-lg p-1"
            />
            <div className="text-sm">
              {index == 0 ? (
                <p className="line-clamp-1 text-color-blue">Jika suka</p>
              ) : (
                <p className="line-clamp-1 text-color-blue">
                  maka mungkin suka
                </p>
              )}
              <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
                {entry.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-2">
        <p className={`text-justify ${showFullText ? "" : "line-clamp-5"}`}>
          {item.content}
        </p>
        <div className="flex justify-between items-center">
          <FormattedDate dateString={item.date} styles="font-bold" />

          <button className="Color mx-2 my-1" onClick={toggleFullText}>
            {showFullText ? "Kembali semula" : "Baca selengkapnya"}
          </button>
        </div>
      </div>
    </>
  )
}

export default RecommendedCard
