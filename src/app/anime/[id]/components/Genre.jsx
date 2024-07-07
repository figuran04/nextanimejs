import Link from "next/link"

const Genre = ({ data }) => {
  return (
    <div className="">
      <p className="text-justify text-2xl font-bold">Genre</p>
      <div className="flex text-xl font-medium gap-2 overflow-x-auto">
        {data.genres?.map((item) => {
          const genre = item.name.toLowerCase()
          return (
            <Link key={item.mal_id} href={`/genre/${genre}`}>
              <p className="underline hover:text-color-accent">{item.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Genre
