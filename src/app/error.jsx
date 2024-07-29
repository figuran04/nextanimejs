"use client"

import { useRouter } from "next/navigation"

const ErrorPage = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center gap-4 flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center mb-64 gap-2">
          <p className="text-5xl font-black">500</p>
          <p className="Textxl font-bold">HALAMAN BERMASALAH</p>
          <button
            onClick={() => {
              router.back()
            }}
            className="Color cursor-pointer"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
