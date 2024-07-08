"use client"
import { useState } from "react"
import Link from "next/link"

const Navbar = ({ id }) => {
  const [activeTab, setActiveTab] = useState("detail")

  return (
    <nav className="flex flex-nowrap gap-4 overflow-x-auto flex-row text-color-primary text-lg">
      <Link
        href={`/anime/${id}`}
        className={`underline hover:text-color-accent ${
          activeTab === "detail" ? "text-color-accent" : ""
        }`}
        onClick={() => setActiveTab("detail")}
      >
        Detail
      </Link>
      <Link
        href={`/anime/${id}/gambar`}
        className={`underline hover:text-color-accent ${
          activeTab === "gambar" ? "text-color-accent" : ""
        }`}
        onClick={() => setActiveTab("gambar")}
      >
        Gambar
      </Link>
      <Link
        href={`/anime/${id}/karakter`}
        className={`underline hover:text-color-accent ${
          activeTab === "karakter" ? "text-color-accent" : ""
        }`}
        onClick={() => setActiveTab("karakter")}
      >
        Karakter
      </Link>
      <Link
        href={`/anime/${id}/rekomendasi`}
        className={`underline hover:text-color-accent ${
          activeTab === "rekomendasi" ? "text-color-accent" : ""
        }`}
        onClick={() => setActiveTab("rekomendasi")}
      >
        Rekomendasi
      </Link>
    </nav>
  )
}

export default Navbar
