import Image from "next/image"
import Link from "next/link"
import FormattedDate from "../FormattedDate"
import { useState } from "react"
import RecommendedCard from "./RecommendedCard"

const Recommended = ({ api }) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }
  if (!api.data) {
    return <p className="font-medium text-lg text-color-primary">Memuat...</p>
  }
  return (
    <div className="dark:text-color-primary text-color-dark">
      <div className="flex flex-col gap-4">
        {api.data?.map((item, index) => (
          <RecommendedCard item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Recommended
