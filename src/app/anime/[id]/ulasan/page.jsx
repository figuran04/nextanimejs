import Navbar from "@/components/AnimeId/Navbar"
import Ulasan from "@/components/AnimeId/Ulasan"
import { getAnimeResponse } from "@/libs/api-libs"

const UlasanPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/reviews`)
  return (
    <div>
      <Navbar id={id} ulasan={true} />
      <p className="text-justify text-2xl font-bold">Ulasan</p>
      {data?.map((item, index) => (
        <div
          className="dark:text-color-primary text-color-dark p-2 rounded-md shadow-md mb-4"
          key={index}
        >
          <Ulasan item={item} />
        </div>
      ))}
    </div>
  )
}

export default UlasanPage
