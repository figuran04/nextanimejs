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
              return <span>Memuat...</span>
            } else if (item == []) {
              return <span>Tidak ditemukan</span>
            }
            return (
              <div className="flex justify-center">
                <Link
                  href={`/genre/${genre}/page/1`}
                  key={index}
                  className="text-center transition-all cursor-pointer Color line-clamp-2"
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GenrePage
