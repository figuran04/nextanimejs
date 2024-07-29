"use client"
import Handle from "@/components/AnimeId/Handle"
import HeaderAnime from "@/components/AnimeId/HeaderAnime"
import Navbar from "@/components/AnimeId/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"
import { useEffect, useState } from "react"

const StatistikPage = ({ params: { id } }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(`anime/${id}/statistics`)
      setData(response.data)
    }
    fetchData()
  }, [id])

  const SummaryStats = ({ summary }) => {
    return (
      <table className="border-none w-min">
        <tbody>
          <tr>
            <td className="border-none whitespace-nowrap p-0">
              Sedang Menonton
            </td>
            <td className="border-none whitespace-nowrap p-0">{`: ${summary.watching}`}</td>
          </tr>
          <tr>
            <td className="border-none whitespace-nowrap p-0">Selesai</td>
            <td className="border-none whitespace-nowrap p-0">{`: ${summary.completed}`}</td>
          </tr>
          <tr>
            <td className="border-none whitespace-nowrap p-0">Ditunda</td>
            <td className="border-none whitespace-nowrap p-0">{`: ${summary.on_hold}`}</td>
          </tr>
          <tr>
            <td className="border-none whitespace-nowrap p-0">Berhenti</td>
            <td className="border-none whitespace-nowrap p-0">{`: ${summary.dropped}`}</td>
          </tr>
          <tr>
            <td className="border-none whitespace-nowrap p-0">
              Rencana untuk Menonton
            </td>
            <td className="border-none whitespace-nowrap p-0">{`: ${summary.plan_to_watch}`}</td>
          </tr>
          <tr>
            <td className="border-none whitespace-nowrap p-0">Total</td>
            <td className="border-none whitespace-nowrap p-0">{`: ${summary.total}`}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  const ScoreStats = ({ scores }) => {
    return (
      <div className="flex flex-col gap-1">
        <HeaderAnime title="Statistik Skor" />
        <div className="flex flex-col-reverse">
          {scores.map((score) => (
            <div key={score.score} className="flex gap-2 items-center">
              <span className="w-4">{score.score}</span>
              <div
                className="bg-color-blue h-4"
                style={{ width: `${score.percentage}%` }}
              ></div>
              <span className="truncate">
                {score.percentage.toFixed(1)}% ({score.votes} suara)
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <Navbar id={id} statistik={true} />
      <HeaderAnime title="Statistik" />
      <Handle data={data} render={(data) => <SummaryStats summary={data} />} />
      <Handle
        data={data}
        render={(data) => <ScoreStats scores={data.scores} />}
      />
    </div>
  )
}

export default StatistikPage
