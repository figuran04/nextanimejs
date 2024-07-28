"use client"
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

  if (!data)
    return (
      <div>
        <Navbar id={id} statistik={true} />
        Memuat...
      </div>
    )

  const SummaryStats = ({ summary }) => {
    return (
      <div>
        <p className="font-bold text-lg">Statistik Ringkasan</p>
        <p>Sedang Menonton: {summary.watching}</p>
        <p>Selesai: {summary.completed}</p>
        <p>Ditunda: {summary.on_hold}</p>
        <p>Berhenti: {summary.dropped}</p>
        <p>Rencana untuk Menonton: {summary.plan_to_watch}</p>
        <p>Total: {summary.total}</p>
      </div>
    )
  }

  const ScoreStats = ({ scores }) => {
    return (
      <div>
        <p className="font-bold text-lg">Statistik Skor</p>
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
    <div>
      <Navbar id={id} statistik={true} />
      <div className="flex justify-between">
        <span className="font-bold text-xl">Statistik</span>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <SummaryStats summary={data} />
        {data.scores && <ScoreStats scores={data.scores} />}
      </div>
    </div>
  )
}

export default StatistikPage
