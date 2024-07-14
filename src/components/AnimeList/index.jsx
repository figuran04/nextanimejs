import { MotionDiv } from "../MotionDiv"
import SkeletonAnimeList from "../SkeletonAnimeCard"
import AnimeCard from "../AnimeCard"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const AnimeList = ({ api }) => {
  if (!api.data) {
    return <SkeletonAnimeList />
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime, index) => {
        return (
          <MotionDiv
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.25,
              ease: "easeInOut",
              duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            className="group cursor-pointer text-white transition-all relative rounded-lg overflow-hidden hover:scale-105 shadow hover:shadow-md"
          >
            <AnimeCard api={anime} />
          </MotionDiv>
        )
      })}
    </div>
  )
}

export default AnimeList
