import Image from "next/image"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const ListBerita = ({ title, url, date }) => {
  const dates = format(new Date(date), "HH:mm", { locale: id })
  const datess = format(new Date(date), "dd MMMM yyyy", { locale: id })

  return (
    <div className="border-b-2 border-gray-200">
      <div className="flex my-2 justify-center">
        <div className="w-4/12 py-2">
          <Image
            width={100}
            height={65}
            src={url}
            alt={url}
            className="transition-all hover:scale-105 skeleton"
          />
        </div>
        <div className="w-8/12 pl-1">
          <h1 className="text-xl font-normal line-clamp-3">{title}</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <h3>{dates}</h3>
        <h3>{datess}</h3>
      </div>
    </div>
  )
}
export default ListBerita
