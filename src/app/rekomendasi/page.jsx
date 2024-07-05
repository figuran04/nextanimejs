"use client"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import Header from "@/components/AnimeList/Header"
import Recommended from "@/components/Recommended"

const RekomendasiPage = async () => {
  const recommendedAnime = await getAnimeResponse("recommendations/anime")

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`ANIME REKOMENDASI`} />
        <Recommended api={recommendedAnime} />
      </section>
    </div>
  )
}

export default RekomendasiPage
