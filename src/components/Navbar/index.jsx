import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-color-accent text-white">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <div className="flex justify-between flex-row w-full items-end">
          <Link href="/" className="font-bold text-2xl">
            NEXTANIME
          </Link>
          <div className="flex flex-nowrap gap-4 mx-4">
            <Link
              href={`/anime`}
              className="font-semibold text-xl underline cursor-pointer"
            >
              Anime
            </Link>
            <Link
              href={`/genre`}
              className="font-semibold text-xl underline cursor-pointer"
            >
              Genre
            </Link>
          </div>
        </div>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar
