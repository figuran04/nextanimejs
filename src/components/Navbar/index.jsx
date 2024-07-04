import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <Link href="/" className="font-bold text-2xl">
          NEXTANIME
        </Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar
