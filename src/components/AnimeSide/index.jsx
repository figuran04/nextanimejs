import Image from "next/image"
import Link from "next/link"

const AnimeSide = ({ api }) => {
  return (
    <div className="flex flex-col gap-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="group cursor-pointer text-color-primary transition-all relative rounded overflow-hidden hover:scale-105 flex flex-row"
            key={index}
          >
            <div className="absolute top-0 left-0 bg-color-accent rounded-ee font-bold px-2 text-base py-0.5 flex items-center gap-1">
              <p>{anime.rank}</p>
            </div>
            {anime.score ? (
              <div className="absolute bottom-0 right-0 bg-color-accent rounded-s font-bold px-2 text-base py-1 mt-2 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-3"
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
              width={200}
              height={350}
              className="lg:h-28 h-24 lg:w-28 w-24 object-cover transition-all"
            />
            <div className="px-4 w-full flex flex-col transition-all">
              <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
                {anime.title}
              </p>
              <p className="">{`${anime.type}, ${anime.episodes} eps,`}</p>
              <p className="">{`${anime.members} anggota`}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeSide
