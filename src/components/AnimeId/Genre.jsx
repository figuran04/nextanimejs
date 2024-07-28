import Link from "next/link"

const Genre = ({ data }) => {
  return (
    <div className="my-2">
      <span className="text-xl font-bold">Genre</span>
      <div className="flex gap-2 overflow-x-auto">
        {data.demographics?.map((item) => {
          const demo = item.name.toLowerCase()
          if (!item) {
            return <span>Memuat...</span>
          } else if (item == []) {
            return <span>Tidak ditemukan</span>
          }
          return (
            <Link key={item.mal_id} href={`/genre/${demo}`}>
              <p className="Color">{item.name}</p>
            </Link>
          )
        })}
        {data.genres?.map((item) => {
          const genre = item.name.toLowerCase()
          if (!item) {
            return <span>Memuat...</span>
          } else if (item == []) {
            return <span>Tidak ditemukan</span>
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
