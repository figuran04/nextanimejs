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
        <div className="xl:w-11/12 lg:w-10/12 w-full flex flex-col gap-3">
          <div className="flex items-center mb-2">
            <Link
              href={`/anime/${entry.mal_id}`}
              className="rounded overflow-hidden transition-all cursor-pointer shadow-sm hover:shadow w-1/5 md:w-auto"
            >
              <Image
                src={entry.images.webp.image_url}
                alt={entry.images.jpg.image_url}
                width={100}
                height={100}
                className="h-full md:w-16 w-14 min-h-14 object-cover transition-all"
              />
            </Link>
            <div className="w-4/5 md:w-auto md:mx-2 mx-0">
              <Link href={`/anime/${entry.mal_id}`} className="cursor-pointer">
                <h3 className="h3 line-clamp-2">{entry.title}</h3>
              </Link>
              <div className="flex gap-1">
                <span>tags: </span>
                <span className="text-color-blue">{tags.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`transition-all text-justify ${
          showFullText ? "" : "line-clamp-5"
        }`}
      >
        {reviewText}
      </p>
      <div className="w-full flex flex-wrap items-center">
        <div className="flex gap-2 items-center md:w-1/2">
          <FormattedDate dateString={date} styles="font-bold" />
          <span>oleh</span>
          <span className="text-color-blue">{user.username}</span>
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
            className="Color mx-2 my-1 float-right"
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
