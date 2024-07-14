"use client"

import { useRouter } from "next/navigation"

const ErrorPage = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center gap-4 flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center mb-64 text-color-accent dark:text-color-secondary gap-2">
          <p className="text-5xl font-black">500</p>
          <p className=" text-xl font-bold">HALAMAN BERMASALAH</p>
          <button
            onClick={() => {
              router.back()
            }}
            className="dark:text-color-primary text-color-dark underline cursor-pointer hover:text-color-accent dark:hover:text-color-secondary"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
