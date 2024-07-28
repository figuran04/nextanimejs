"use client"
import FormattedDate from "@/components/Utilities/FormattedDate"
import Image from "next/image"
import { useState } from "react"
import Emoji from "./Emoji"
import { StarIcon } from "../Icons/StarIcon"

const Ulasan = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }
  if (!item) {
    return <span className="font-medium text-lg">Memuat...</span>
  } else if (item == []) {
    return <span className="font-medium text-lg">Tidak ditemukan</span>
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
            <span className="text-lg md:text-xl font-bold line-clamp-2">
              {item.user.username}
            </span>
            <div className="flex gap-1">
              <span className="text-base">tag: </span>
              <span className="text-color-blue text-base">
                {item.tags.join(", ")}
              </span>
              <span className="text-base">
                {item.is_spoiler === true && "Spoiler"}
              </span>
              <span className="text-base">
                {item.is_preliminary === true && "Awal"}
              </span>
              <span className="text-base">{item.episodes_watched}</span>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`transition-all text-justify text-base ${
          showFullText ? "" : "line-clamp-5"
        }`}
      >
        {item.review}
      </p>
      <span className="flex items-center text-color-grey text-base">
        {showFullText ? `Penilaian Pengulas: ${item.score}` : ""}
      </span>
      <Emoji item={item} />
      <div className="flex justify-between items-center">
        <FormattedDate dateString={item.date} styles="w-full text-base" />
        <div className="w-full text-right">
          <button
            className="Color mx-2 my-1 text-base"
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
