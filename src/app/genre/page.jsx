import HeaderMenu from "@/components/Utilities/HeaderCenter"
import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"

const GenrePage = async () => {
  const { data } = await getAnimeResponse("genres/anime")

  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto lg:w-8/12 md:w-9/12 sm:w-10/12">
        <HeaderMenu title="Genre" />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3">
          {data.map((item, index) => {
            const genre = item.name.toLowerCase()
            if (!item) {
              return <p className="text-lg font-medium">Memuat...</p>
            } else if (item == []) {
              return <p className="text-lg font-medium">Tidak ditemukan</p>
            }
            return (
              <Link href={`/genre/${genre}`} key={index} className="">
                <p className="text-center transition-all cursor-pointer text-color-grey line-clamp-2 hover:dark:text-color-whiteDark hover:text-color-dark">
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
