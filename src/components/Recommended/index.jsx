import Image from "next/image"
import Link from "next/link"

const Recommended = ({ api }) => {
  console.log(api)
  return (
    <div className="text-color-primary">
      <ul className="flex flex-col gap-4">
        {api.data.map((item) => (
          <li key={item.mal_id}>
            <div className="flex justify-between gap-2">
              {item.entry.map((entry, index) => (
                <Link
                  key={entry.mal_id}
                  href={`/anime/${entry.mal_id}`}
                  className="w-1/2 flex gap-2 group hover:scale-105 transition-all relative rounded overflow-hidden cursor-pointer text-color-primary"
                >
                  {entry.score ? (
                    <div className="absolute top-0 left-0 bg-color-accent rounded-s font-bold px-2 py-1 mt-2 flex items-center gap-1">
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
                      <p>{entry.score}</p>
                    </div>
                  ) : null}
                  <Image
                    src={entry.images.jpg.image_url}
                    alt={entry.title}
                    width={100}
                    height={100}
                    className="lg:h-28 h-24 lg:w-28 w-24 object-cover transition-all"
                  />
                  <div className="text-sm">
                    {index == 0 ? (
                      <p>Jika Anda suka</p>
                    ) : (
                      <p>...maka mungkin Anda suka</p>
                    )}
                    <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
                      {entry.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="my-2">
              <p>{item.content}</p>
              <p>{item.date}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recommended
