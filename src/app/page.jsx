"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const Splash = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/beranda")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="w-screen h-screen font-montBold bg-blue-700 text-white">
      <div className="flex w-screen justify-center items-center h-5/6">
        <div className="flex justify-center flex-wrap">
          {/* <img src="/hero.png" alt="logo" className="w-52 rounded-2xl" /> */}
          <h1 className="w-full text-center text-3xl p-3">Digitech</h1>
        </div>
      </div>
      <div className="flex flex-wrap w-screen justify-center items-center h-1/6 pb-8 font-montRegular">
        <div className="flex justify-center flex-wrap w-full"></div>
        <p>Already a member?</p>
      </div>
    </div>
  )
}

export default Splash
