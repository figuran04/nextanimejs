"use client"
import React, { useState, useEffect } from "react"
import ListBerita from "@/components/ListBerita"
import Link from "next/link"
import { getBeritaResponse } from "../libs/api-libs"
import HeroBerita from "@/components/HeroBerita"

const Berita = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBeritaResponse("antara", "terbaru")
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
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap w-max gap-2">
          {filteredPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <HeroBerita
                title={post.title}
                url={post.thumbnail}
                date={post.pubDate}
              />
            </Link>
          ))}
        </div>
      </div>
      <h3 className="text-2xl font-semibold pt-6">Berita</h3>
      <div>
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
  )
}

export default Berita
