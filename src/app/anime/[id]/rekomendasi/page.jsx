import Recommendations from "@/components/Recommendations"
import Navbar from "../components/Navbar"

const RekomendasiPage = async ({ params: { id } }) => {
  return (
    <>
      <Navbar id={id} rekomendasi="text-color-accent" />
      <p className="text-justify text-2xl font-bold">Rekomendasi</p>
      <Recommendations animeId={id} />
    </>
  )
}

export default RekomendasiPage
