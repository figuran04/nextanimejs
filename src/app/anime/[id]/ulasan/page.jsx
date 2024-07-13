import Navbar from "../components/Navbar"
import { getAnimeResponse } from "@/libs/api-libs"
import Ulasan from "../components/Ulasan"

const UlasanPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/reviews`)
  return (
    <>
      <Navbar
        id={id}
        ulasan="bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
      />
      <p className="text-justify text-2xl font-bold">Ulasan</p>
      {data?.map((item, index) => (
        <div
          className="dark:text-color-primary text-color-dark p-2 rounded-md shadow-md mb-4"
          key={index}
        >
          <Ulasan item={item} index={index} />
        </div>
      ))}
    </>
  )
}

export default UlasanPage
