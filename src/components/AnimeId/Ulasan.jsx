"use client"
import FormattedDate from "@/components/Utilities/FormattedDate"
import Image from "next/image"
import { useState } from "react"
import Emoji from "./Emoji"

const Ulasan = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }
  if (!item) {
    return <p className="font-medium text-lg">Memuat...</p>
  } else if (item == []) {
    return <p className="font-medium text-lg">Tidak ditemukan</p>
  }
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center mb-2">
          <Image
            className="w-12 h-12 object-cover rounded-full mr-4"
            src={item.user.images.webp.image_url}
            width={50}
            height={50}
            alt={item.user.username}
          />
          <div>
            <h2 className="text-lg md:text-2xl sm:text-xl font-bold line-clamp-2">
              {item.user.username}
            </h2>
            <div className="flex gap-1">
              <span>tag: </span>
              <span className="text-color-accent dark:text-color-secondary">
                {item.tags.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`text-lg lg:text-xl transition-all text-justify ${
          showFullText ? "" : "line-clamp-5"
        }`}
      >
        {item.review}
      </p>
      <Emoji item={item} />
      <div className="flex justify-between items-center">
        <FormattedDate dateString={item.date} styles="opacity-50 w-full" />
        <div className="w-full text-right">
          <button
            className="hover:underline opacity-50 mx-2 my-1"
            aria-label="more"
            onClick={toggleFullText}
          >
            {showFullText ? "Kembali semula" : "Baca selengkapnya"}
          </button>
        </div>
      </div>
    </>
  )
}

export default Ulasan
