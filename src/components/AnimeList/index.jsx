import Link from "next/link"
import { MotionDiv } from "../MotionDiv"
import SkeletonAnimeList from "../Skeleton/SkeletonAnimeList"
import AnimeListCard from "./AnimeListCard"
import Image from "next/image"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const AnimeList = ({ api }) => {
  if (!api.data) {
    return <SkeletonAnimeList />
  }

  return (
    <div>
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
              <Link href={`/anime/${anime.mal_id}`} className="">
                {anime.score ? (
                  <div className="absolute top-0 right-0 dark:bg-color-secondary bg-color-accent dark:text-color-dark text-white rounded-s font-bold px-2 py-1 mt-2 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>{anime.score}</p>
                  </div>
                ) : null}
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.images.jpg.image_url}
                  width={350}
                  height={400}
                  className="w-full max-h-64 object-cover transition-all"
                  priority={true}
                />
                <div className="px-4 bg-gradient-to-t from-color-dark to-transparent w-full md:h-20 sm:h-16 h-14 flex absolute bottom-0 items-center transition-all">
                  <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
                    {anime.title}
                  </p>
                </div>
              </Link>
            </MotionDiv>
          )
        })}
      </div>
    </div>
  )
}

export default AnimeList
