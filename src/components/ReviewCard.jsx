"use client"
import FormattedDate from "@/components/Utilities/FormattedDate"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ReviewCard = ({ review }) => {
  const { review: reviewText, user, entry, date, tags } = review
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <>
      <div className="flex gap-2">
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center mb-2">
            <Link
              href={`/anime/${entry.mal_id}`}
              className="rounded overflow-hidden transition-all cursor-pointer shadow-sm hover:shadow w-auto"
            >
              <Image
                src={entry.images.webp.image_url}
                alt={entry.images.jpg.image_url}
                width={100}
                height={100}
                className="h-full md:w-16 w-14 min-h-14 object-cover transition-all"
              />
            </Link>
            <div className="w-full mx-2">
              <Link
                href={`/anime/${entry.mal_id}`}
                className="cursor-pointer text-lg md:text-xl font-bold line-clamp-2"
              >
                {entry.title}
              </Link>
              <div className="flex gap-1 text-base">
                tags:{" "}
                <span className="text-color-blue text-base">
                  {tags.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`transition-all text-justify text-base ${
          showFullText ? "" : "line-clamp-5"
        }`}
      >
        {reviewText}
      </p>
      <div className="w-full flex flex-wrap items-center">
        <div className="flex gap-2 items-center md:w-1/2 text-base">
          <FormattedDate dateString={date} styles="text-base" />
          oleh <span className="text-color-blue">{user.username}</span>
          <Image
            className="w-6 h-6 object-cover rounded-full"
            src={user.images.webp.image_url}
            width={50}
            height={50}
            alt={user.username}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <button
            className="Color mx-2 my-1 float-right text-base"
            onClick={toggleFullText}
          >
            {showFullText ? "Kembali semula" : "Baca selengkapnya"}
          </button>
        </div>
      </div>
    </>
  )
}

export default ReviewCard
