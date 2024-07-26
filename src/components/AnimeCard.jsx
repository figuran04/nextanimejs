import Link from "next/link"
import Image from "next/image"
import { StarIcon } from "./Icons/StarIcon"

const AnimeCard = ({ api }) => {
  return (
    <Link href={`/anime/${api.mal_id}`}>
      {api.score ? (
        <div className="absolute top-0 right-0 Card px-2 py-1 mt-2 flex items-center gap-1 bg-opacity-70 dark:bg-opacity-70 backdrop-blur">
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
      <div className="px-3 bg-gradient-to-t dark:from-color-darkDark from-color-white to-transparent w-full md:h-22 sm:h-20 h-16 flex absolute bottom-0 items-center transition-all py-2">
        <p className="text-lg md:text-xl font-bold line-clamp-2 Text">
          {api.title}
        </p>
      </div>
    </Link>
  )
}

export default AnimeCard
