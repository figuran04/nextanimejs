import Link from "next/link"

const Genre = ({ data }) => {
  return (
    <div className="my-2">
      <p className="text-justify h3">Genre</p>
      <div className="flex gap-2 overflow-x-auto">
        {data.genres?.map((item) => {
          const genre = item.name.toLowerCase()
          if (!item) {
            return <p className="text-lg font-medium">Memuat...</p>
          } else if (item == []) {
            return <p className="text-lg font-medium">Tidak ditemukan</p>
          }
          return (
            <Link key={item.mal_id} href={`/genre/${genre}`}>
              <p className="hover:text-color-dark dark:hover:text-color-whiteDark text-color-grey">
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
