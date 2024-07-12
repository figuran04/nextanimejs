import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Link from "next/link"
import React from "react"

const MusimPage = () => {
  return (
    <div className="w-full">
      <div className="mx-auto lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title="Musim" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 dark:text-color-primary text-color-dark">
          <Link
            href={`/musim/sekarang`}
            className="group shadow p-2 hover:scale-105 transition-all dark:hover:bg-color-secondary hover:bg-color-accent rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-dark group-hover:text-color-primary">
              Musim Sekarang
            </p>
          </Link>
          <Link
            href={`/musim/mendatang`}
            className="group shadow p-2 hover:scale-105 transition-all dark:hover:bg-color-secondary hover:bg-color-accent rounded-lg"
          >
            <p className="cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center group-hover:dark:text-color-dark group-hover:text-color-primary">
              Musim Mendatang
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MusimPage
