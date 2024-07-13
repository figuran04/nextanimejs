import Recommendations from "@/components/Recommendations"
import Navbar from "../components/Navbar"

const RekomendasiPage = ({ params: { id } }) => {
  return (
    <>
      <Navbar
        id={id}
        rekomendasi="bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
      />
      <p className="text-justify text-2xl font-bold">Rekomendasi</p>

      <Recommendations animeId={id} />
    </>
  )
}

export default RekomendasiPage
