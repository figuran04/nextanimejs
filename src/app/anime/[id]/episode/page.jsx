"use client"
import Handle from "@/components/AnimeId/Handle"
import HeaderAnime from "@/components/AnimeId/HeaderAnime"
import More from "@/components/AnimeId/More"
import Navbar from "@/components/AnimeId/Navbar"
import FormattedDate from "@/components/Utilities/FormattedDate"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const EpisodePage = ({ params: { id } }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/episodes`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const EpisodeCard = ({ data }) => {
    return (
      <table className="">
        <thead>
          <tr className="text-center font-bold">
            <td>Eps</td>
            <td>Judul Episode</td>
            <td>Tayang</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.mal_id}>
                <td>
                  <p className="flex justify-center items-center">
                    {item.mal_id}
                  </p>
                </td>
                <td className="w-full flex flex-col">
                  <p className="line-clamp-1">{item.title}</p>
                  <p className="text-color-grey line-clamp-1">
                    {item.title_romanji}
                  </p>
                </td>
                <td className="whitespace-nowrap text-center">
                  <FormattedDate dateString={item.aired} styles="" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <Navbar id={id} episode={true} />
      <HeaderAnime title="Episode" />
      <Handle data={data} render={(data) => <EpisodeCard data={data} />} />
    </div>
  )
}

export default EpisodePage
