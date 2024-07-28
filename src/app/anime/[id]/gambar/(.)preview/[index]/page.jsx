import Modal from "@/components/Modal"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const GambarPreviewPage = async ({ params: { id, index } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/pictures`)

  return (
    <Modal>
      <Image
        src={data[index].webp.image_url}
        alt={data[index].jpg.image_url}
        width={300}
        height={300}
        className="h-full"
      />
    </Modal>
  )
}

export default GambarPreviewPage
