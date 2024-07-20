import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "./Icons/StarIcon"

const AnimeSideCard = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.mal_id}`} className="flex flex-row">
      {anime.rank ? (
        <div className="absolute top-0 left-0 dark:bg-color-secondary bg-color-accent dark:text-color-dark text-white rounded-ee font-bold px-2 text-base py-0.5 flex items-center gap-1">
          <p>{anime.rank}</p>
        </div>
      ) : null}
      {anime.score ? (
        <div className="absolute bottom-0 right-0 dark:bg-color-secondary bg-color-accent dark:text-color-dark text-white rounded-s font-bold px-2 text-base py-1 mt-2 flex items-center gap-1">
          <StarIcon />
          <p>{anime.score}</p>
        </div>
      ) : null}
      <Image
        src={anime.images.webp.small_image_url}
        alt={anime.images.jpg.small_image_url}
        width={200}
        height={350}
        className="lg:h-28 h-24 lg:w-28 w-24 object-cover transition-all rounded"
      />
      <div className="px-4 w-full flex flex-col transition-all">
        <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
          {anime.title}
        </p>
        <div className="flex gap-2 flex-wrap">
          {anime.type ? <p>{`${anime.type},`}</p> : null}
          {anime.episodes ? <p>{`${anime.episodes} eps,`}</p> : null}
          {anime.members ? <p>{`${anime.members} anggota`}</p> : null}
        </div>
      </div>
    </Link>
  )
}

export default AnimeSideCard
