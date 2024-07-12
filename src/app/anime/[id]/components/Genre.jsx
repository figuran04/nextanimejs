import Link from "next/link"

const Genre = ({ data }) => {
  return (
    <div className="">
      <p className="text-justify text-2xl font-bold">Genre</p>
      <div className="flex text-lg gap-2 overflow-x-auto font-medium">
        {data.genres?.map((item) => {
          const genre = item.name.toLowerCase()
          return (
            <Link key={item.mal_id} href={`/genre/${genre}`}>
              <p className="hover:underline hover:text-color-accent dark:hover:text-color-secondary">
                {item.name}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Genre
