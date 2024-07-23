"use client"

import { useRouter } from "next/navigation"

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center gap-4 flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center mb-64 text-color-accent dark:text-color-secondary gap-2">
          <h1 className="h1">404</h1>
          <h3 className="h3">TIDAK DITEMUKAN</h3>
          <button
            onClick={() => {
              router.back()
            }}
            className="cursor-pointer text-color-grey hover:text-color-white"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
