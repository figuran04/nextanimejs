"use client"
import React, { useState, useEffect } from "react"
import ListBerita from "@/components/ListBerita"
import Link from "next/link"
import { getBeritaResponse } from "../libs/api-libs"

const Berita = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBeritaResponse("cnn", "terbaru")
      setPosts(data.data.posts)
      setFilteredPosts(data.data.posts)
    }

    fetchData()
  }, [])

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term)
    )
    setFilteredPosts(filtered)
  }

  return (
    <div className="min-h-screen p-6">
      <Link href="/beranda" className="my-2">
        Kembali
      </Link>
      <h1 className="text-4xl font-semibold pt-4 pb-2">Berita</h1>
      <input
        type="search"
        placeholder="Cari"
        className="text-lg w-full bg-gray-100 rounded-md py-2 px-4 my-2"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredPosts.map((post, index) => (
          <Link href={post.link} key={index}>
            <ListBerita
              title={post.title}
              url={post.thumbnail}
              desc={post.description}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Berita
