import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "./Icons/StarIcon"

const AnimeSideCard = ({ anime }) => {
  const desc = () => {
    const descriptions = []
    if (anime.type) descriptions.push(<span key="type">{anime.type}</span>)
    if (anime.episodes)
      descriptions.push(<span key="episodes">{anime.episodes} eps</span>)
    if (anime.members)
      descriptions.push(<span key="members">{anime.members} anggota</span>)
    return descriptions
  }

  return (
    <Link href={`/anime/${anime.mal_id}`} className="flex flex-row">
      {anime.rank ? (
        <div className="absolute top-2 left-0 dark:bg-color-whiteDark bg-color-dark Textdark rounded-e font-bold px-2 py-0.5 flex items-center gap-1 bg-opacity-70 dark:bg-opacity-70 backdrop-blur">
          <p>{anime.rank}</p>
        </div>
      ) : null}
      {anime.score ? (
        <div className="absolute bottom-1 right-0 flex items-center gap-1 px-2 py-0.5 mt-2 text-base font-bold Textdark dark:bg-color-whiteDark bg-color-dark rounded-s bg-opacity-70 dark:bg-opacity-70 backdrop-blur">
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
        <p className="text-lg font-bold xl:text-xl line-clamp-2">
          {anime.title}
        </p>
        <div className="flex flex-wrap gap-2 text-color-grey">{desc()}</div>
      </div>
    </Link>
  )
}

export default AnimeSideCard
