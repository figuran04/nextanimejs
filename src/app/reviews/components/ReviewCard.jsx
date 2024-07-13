"use client"
import FormattedDate from "@/components/FormattedDate"
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
            <Image
              className="w-12 h-12 object-cover rounded-full mr-4"
              src={user.images.webp.image_url}
              width={50}
              height={50}
              alt={user.username}
            />
            <div>
              <h2 className="text-lg md:text-2xl sm:text-xl font-bold line-clamp-2">
                {entry.title}
              </h2>
              <div className="flex gap-1">
                <span>oleh</span>
                <span className="text-color-accent dark:text-color-secondary">
                  {user.username}
                </span>
                <FormattedDate dateString={date} styles="opacity-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/12 lg:w-2/12 w-auto flex items-center justify-center">
          <Link
            href={`/anime/${entry.mal_id}`}
            className="rounded overflow-hidden hover:scale-105 transition-all cursor-pointer"
          >
            <Image
              src={entry.images.webp.small_image_url}
              alt={entry.images.jpg.small_image_url}
              width={100}
              height={100}
              className="h-full md:w-16 w-14 object-cover transition-all"
            />
          </Link>
        </div>
      </div>
      <p
        className={`${
          showFullText ? "" : "line-clamp-5"
        } text-lg lg:text-xl transition-all text-justify`}
      >
        {reviewText}
      </p>
      <div className="w-full text-right">
        <button
          className="hover:underline opacity-50 mx-2 my-1"
          onClick={toggleFullText}
        >
          {showFullText ? "Kembali semula" : "Baca selengkapnya"}
        </button>
      </div>
    </>
  )
}

export default ReviewCard
