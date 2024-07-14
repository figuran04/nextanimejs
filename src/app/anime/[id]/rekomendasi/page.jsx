import Navbar from "@/components/AnimeId/Navbar"
import Recommendations from "@/components/Recommendations"

const RekomendasiPage = ({ params: { id } }) => {
  return (
    <div>
      <Navbar id={id} rekomendasi={true} />
      <p className="text-justify text-2xl font-bold">Rekomendasi</p>
      <Recommendations animeId={id} />
    </div>
  )
}

export default RekomendasiPage
