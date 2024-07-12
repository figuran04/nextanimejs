"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (event) => {
    const keyword = searchRef.current.value

    if (!keyword || keyword.trim() == "") return
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari anime..."
        className="py-2 px-3 rounded-lg w-full text-color-dark bg-color-primary dark:bg-color-dark dark:text-color-primary outline-color-accent dark:outline-color-secondary"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-0 end-0 p-2 text-color-dark dark:text-color-primary"
        onClick={handleSearch}
        aria-label="search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  )
}
export default InputSearch
