"use client"
import React from "react"
import { useEffect, useState } from "react"

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
    // Mengonversi JSON menjadi array dan mengurutkan berdasarkan nilai
    const sortedReactions = Object.entries(item.reactions)
      .filter(([key]) => key !== "overall") // Mengabaikan "overall"
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3) // Mendapatkan top 3

    setTopReactions(sortedReactions)
  }, [])
  return (
    <div className="flex gap-4">
      {topReactions.map(([key, value], index) => {
        return (
          <div>
            {value == "0" ? null : (
              <div key={index} className="flex gap-1">
                <span>{reactionEmojis[key]}</span>
                <span className="opacity-50">{value}</span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Emoji
