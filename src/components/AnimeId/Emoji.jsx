"use client"
import { useEffect, useState } from "react"
import { StarIcon } from "../Icons/StarIcon"

export const reactionEmojis = {
  nice: "👍",
  love_it: "❤️",
  funny: "😂",
  confusing: "🤨",
  informative: "📘",
  well_written: "✍️",
  creative: "🎨",
}

const Emoji = ({ item }) => {
  const [topReactions, setTopReactions] = useState([])

  useEffect(() => {
    const sortedReactions = Object.entries(item.reactions)
      .filter(([key]) => key !== "overall")
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)

    setTopReactions(sortedReactions)
  }, [])
  return (
    <div className="flex gap-4">
      {topReactions.map(([key, value], index) => {
        return (
          <div key={index}>
            {value == "0" ? null : (
              <div className="flex gap-1">
                <span>{reactionEmojis[key]}</span>
                <span className="text-color-grey text-base">{value}</span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Emoji
