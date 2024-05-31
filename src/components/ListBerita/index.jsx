import Image from "next/image"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const ListBerita = ({ title, url, date }) => {
  const dates = format(new Date(date), "dd MMMM yyyy", { locale: id })

  return (
    <div className="border-b-2 border-gray-100">
      <div className="flex my-2 justify-center">
        <div className="w-3/12 py-4">
          <Image width={100} height={50} src={url} alt={url} className="" />
        </div>
        <div className="w-9/12 pl-4">
          <h1 className="text-lg font-semibold line-clamp-3">{title}</h1>
        </div>
      </div>
      <h3>{dates}</h3>
    </div>
  )
}
export default ListBerita
