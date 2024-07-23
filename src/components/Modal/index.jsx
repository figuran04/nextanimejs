"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function Modal({ children }) {
  const router = useRouter()
  const modalRef = useRef(null)

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      router.back()
    }
  }

  return (
    <div
      className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 backdrop-blur"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </div>
    </div>
  )
}
