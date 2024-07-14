import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"

const GenrePage = async () => {
  const { data } = await getAnimeResponse("genres/anime")

  return (
    <div className="w-full">
      <div className="mx-auto lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title="Genre" />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 dark:text-color-primary text-color-dark">
          {data.map((item, index) => {
            const genre = item.name.toLowerCase()
            if (!item) {
              return <p className="font-medium text-lg">Memuat...</p>
            } else if (item == []) {
              return <p className="font-medium text-lg">Tidak ditemukan</p>
            }
            return (
              <Link
                href={`/genre/${genre}`}
                key={index}
                className="group shadow p-2 hover:scale-105 transition-all dark:hover:bg-color-secondary hover:bg-color-accent rounded-lg"
              >
                <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-dark group-hover:text-color-primary">
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
