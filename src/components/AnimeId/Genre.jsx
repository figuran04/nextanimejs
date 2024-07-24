import Link from "next/link"

const Genre = ({ data }) => {
  return (
    <div className="my-2">
      <h3 className="h3">Genre</h3>
      <div className="flex gap-2 overflow-x-auto">
        {data.genres?.map((item) => {
          const genre = item.name.toLowerCase()
          if (!item) {
            return <p>Memuat...</p>
          } else if (item == []) {
            return <p>Tidak ditemukan</p>
          }
          return (
            <Link key={item.mal_id} href={`/genre/${genre}`}>
              <p className="Color">{item.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Genre
