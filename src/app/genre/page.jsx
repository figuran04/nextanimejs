import Header from "@/components/AnimeList/Header"
import Link from "next/link"

const GenrePage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/anime`
  )
  const { data } = await response.json()

  return (
    <div className="w-full">
      <div className="mx-auto w-11/12">
        <Header title="Genre" />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 text-color-primary">
          {data.map((item, index) => {
            const genre = item.name.toLowerCase()
            return (
              <Link href={`/genre/${genre}`} key={index}>
                <p className="cursor-pointer underline text-base md:text-xl sm:text-lg font-semibold line-clamp-2 hover:text-color-accent">
                  {item.name}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GenrePage
