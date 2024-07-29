"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import SearchIcon from "../Icons/SearchIcon"

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
        className="py-2 px-3 rounded-lg w-full Text placeholder:text-color-grey bg-color-grey2 dark:bg-color-darkGrey outline-color-blue"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-0 end-0 p-2 Text"
        onClick={handleSearch}
        aria-label="search"
      >
        <SearchIcon />
      </button>
    </div>
  )
}
export default InputSearch
