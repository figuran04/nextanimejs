import { getAnimeResponse } from "@/libs/api-libs"
import Karakter from "../components/Karakter"
import Navbar from "../components/Navbar"

const KarakterPage = async ({ params: { id } }) => {
  const karakter = await getAnimeResponse(`anime/${id}/characters`)
  return (
    <>
      <Navbar
        id={id}
        karakter="bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
      />
      <p className="text-justify text-2xl font-bold">Karakter</p>
      <Karakter karakter={karakter} />
    </>
  )
}

export default KarakterPage
