import React from "react"
import { MotionDiv, transition, variants } from "../Utilities/MotionDiv"
import AnimeCard from "../AnimeCard"

const GenreId = ({ api, keyword }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {api.data
        ?.filter((anime) =>
          anime.genres?.some(
            (genre) => genre.name.toLowerCase() === keyword.toLowerCase()
          )
        )
        .map((anime, index) => (
          <MotionDiv
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
            viewport={{ amount: 0 }}
            className="group cursor-pointer text-white transition-all relative rounded-lg overflow-hidden hover:scale-105 shadow hover:shadow-md"
          >
            <AnimeCard api={anime} />
          </MotionDiv>
        ))}
    </div>
  )
}

export default GenreId
