"use client"
import React, { useState, useEffect } from "react"
import ListBerita from "@/components/ListBerita"
import Link from "next/link"
import { getBeritaResponse } from "../libs/api-libs"
import HeroBerita from "@/components/HeroBerita"
import { useRouter } from "next/navigation"
import Navigasi from "@/components/Navigasi"

const Berita = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [cnnPosts, setCnnPosts] = useState([]) // Tambahkan state untuk data dari CNN
  const [antaraPosts, setAntaraPosts] = useState([]) // Tambahkan state untuk data dari Antara
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const dataCnn = await getBeritaResponse("cnn", "terbaru") // Ambil data dari CNN
      const dataAntara = await getBeritaResponse("antara", "terbaru") // Ambil data dari Antara
      setCnnPosts(dataCnn.data.posts) // Set data dari CNN ke state
      setAntaraPosts(dataAntara.data.posts) // Set data dari Antara ke state
    }

    fetchData()
  }, [])

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = antaraPosts.filter(
      // Gunakan data dari Antara untuk filtering
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term)
    )
    setFilteredPosts(filtered)
  }

  return (
    <div className="min-h-screen p-5">
      <button onClick={() => router.back()} className="my-2">
        Kembali
      </button>
      <h1 className="text-4xl font-semibold pt-4 pb-2">Berita</h1>
      <input
        type="search"
        placeholder="Cari"
        className="text-lg w-full bg-gray-100 rounded-md py-2 px-4 my-2"
        value={searchTerm}
        onChange={handleSearch}
        disabled="disabled"
      />
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap w-max gap-2">
          {antaraPosts.map(
            (
              post,
              index // Gunakan data dari CNN untuk HeroBerita
            ) => (
              <Link href={post.link} key={index}>
                <HeroBerita
                  title={post.title}
                  url={post.thumbnail}
                  date={post.pubDate}
                />
              </Link>
            )
          )}
        </div>
      </div>
      <h3 className="text-2xl font-semibold pt-6">Berita</h3>
      <div>
        {cnnPosts.map(
          (
            post,
            index // Gunakan data dari Antara untuk ListBerita
          ) => (
            <Link href={post.link} key={index}>
              <ListBerita
                title={post.title}
                url={post.thumbnail}
                date={post.pubDate}
              />
            </Link>
          )
        )}
      </div>
      <Navigasi />
    </div>
  )
}

export default Berita
