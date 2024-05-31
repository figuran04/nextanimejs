import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center h-48 text-white p-4">
      <a
        href="/"
        className="bg-gray-300 rounded-full mt-6 px-4 py-1 font-normal text-gray-600"
      >
        Search
      </a>
      <h1 className="text-4xl font-bold mr-28 mt-4">Selamat Datang, User</h1>
    </div>
  )
}

export default Hero
