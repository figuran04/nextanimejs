"use client"

import { useRouter } from "next/navigation"

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className="max-w-xl mx-auto flex items-center justify-center">
      <div className="flex justify-center items-center gap-4 flex-col min-h-screen">
        <h3 className="text-color-accent text-2xl font-bold">🚫</h3>
        <h3 className="text-color-accent text-2xl font-bold">
          TIDAK DITEMUKAN
        </h3>
        <button
          onClick={() => {
            router.back()
          }}
          className="text-color-primary underline cursor-pointer hover:text-color-accent"
        >
          Kembali
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
