import Link from "next/link"

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center h-48 text-white p-4 pt-8">
      <Link
        href="/search"
        className="bg-gray-700 rounded-full p-1 font-normal text-gray-400 hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mr-28 mt-4">Selamat Datang, User</h1>
    </div>
  )
}

export default Hero
