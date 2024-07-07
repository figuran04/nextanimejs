import Link from "next/link"

const GenrePage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/anime`
  )
  const { data } = await response.json()

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 text-color-primary">
      {data.map((item, index) => {
        const genre = item.mal_id
        return (
          <Link href={`/genre/${genre}`} key={index}>
            <p>{item.name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default GenrePage
