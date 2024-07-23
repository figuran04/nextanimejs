import Link from "next/link"
import Image from "next/image"
import { StarIcon } from "./Icons/StarIcon"

const AnimeCard = ({ api }) => {
  return (
    <Link href={`/anime/${api.mal_id}`}>
      {api.score ? (
        <div className="absolute top-0 right-0 dark:bg-color-secondary bg-color-accent dark:text-color-dark text-color-white rounded-s font-bold px-2 py-1 mt-2 flex items-center gap-1 bg-opacity-70 dark:bg-opacity-70 backdrop-blur">
          <StarIcon />
          <p>{api.score}</p>
        </div>
      ) : null}
      <Image
        src={api.images.webp.image_url}
        alt={api.images.jpg.image_url}
        width={350}
        height={400}
        className="w-full max-h-64 object-cover transition-all"
      />
      <div className="px-4 bg-gradient-to-t dark:from-color-darkDark from-color-white from-35% to-transparent text-color-darkDark dark:text-color-white 100% w-full md:h-20 sm:h-16 h-14 flex absolute bottom-0 items-center transition-all pt-4">
        <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
          {api.title}
        </p>
      </div>
    </Link>
  )
}

export default AnimeCard
