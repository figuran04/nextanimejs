"use client"
import React, { useState, useEffect } from "react"
import { getBeritaResponse } from "../libs/api-libs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ListBerita from "@/components/ListBerita"
import Navigasi from "@/components/Navigasi"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState([])
  const [antaraPosts, setAntaraPosts] = useState([])
  const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      const dataAntara = await getBeritaResponse("antara", "terbaru")
      setAntaraPosts(dataAntara.data.posts)
    }

    fetchData()
  }, [])
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = antaraPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term)
    )
    setFilteredPosts(filtered)
  }
  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => router.back()}
          className="my-2 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          Kembali
        </button>
        <h1 className="text-4xl font-bold mr-28 mt-4">Cari</h1>
      </div>
      <div className="px-4">
        <input
          type="search"
          placeholder="Cari"
          className="text-lg w-full bg-gray-100 rounded-md py-2 px-4 my-2"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="px-4">
        <h2 className="text-3xl font-bold mr-28 mt-4">Kursus</h2>
        <p>Belum tersedia</p>
      </div>
      <div className="px-4">
        <h2 className="text-3xl font-bold mr-28 mt-4">Berita</h2>
      </div>
      <div className="overflow-x-scroll">
        <div className="mx-4">
          {filteredPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <ListBerita
                title={post.title}
                url={post.thumbnail}
                date={post.pubDate}
              />
            </Link>
          ))}
        </div>
      </div>
      <Navigasi />
    </div>
  )
}
export default Search
