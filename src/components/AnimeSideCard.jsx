import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "./Icons/StarIcon"

const AnimeSideCard = ({ anime }) => {
  const desc = () => {
    const descriptions = []
    if (anime.type) descriptions.push(<p key="type">{anime.type}</p>)
    if (anime.episodes)
      descriptions.push(<p key="episodes">{anime.episodes} eps</p>)
    if (anime.members)
      descriptions.push(<p key="members">{anime.members} anggota</p>)
    return descriptions
  }

  return (
    <Link href={`/anime/${anime.mal_id}`} className="flex flex-row">
      {anime.rank ? (
        <div className="absolute top-2 left-0 dark:bg-color-whiteDark bg-color-dark dark:text-color-darkDark text-color-white rounded-e font-bold px-2 text-base py-0.5 flex items-center gap-1 bg-opacity-70 dark:bg-opacity-70 backdrop-blur">
          <p>{anime.rank}</p>
        </div>
      ) : null}
      {anime.score ? (
        <div className="absolute bottom-1 right-0 flex items-center gap-1 px-2 py-0.5 mt-2 text-base font-bold text-color-white dark:bg-color-whiteDark bg-color-dark dark:text-color-darkDark rounded-s bg-opacity-70 dark:bg-opacity-70 backdrop-blur">
          <StarIcon />
          <p>{anime.score}</p>
        </div>
      ) : null}
      <Image
        src={anime.images.webp.image_url}
        alt={anime.images.jpg.image_url}
        width={200}
        height={350}
        className="object-cover w-24 h-24 transition-all rounded-lg lg:h-28 lg:w-28"
      />
      <div className="flex flex-col w-full px-2 transition-all">
        <p className="text-base font-bold md:text-xl sm:text-lg line-clamp-2">
          {anime.title}
        </p>
        <div className="flex flex-wrap gap-2">{desc()}</div>
      </div>
    </Link>
  )
}

export default AnimeSideCard
