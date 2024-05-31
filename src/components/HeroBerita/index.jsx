import Image from "next/image"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const HeroBerita = ({ title, url, date }) => {
  const dates = format(new Date(date), "dd MMMM yyyy", { locale: id })

  return (
    <div className="border-b-2 border-gray-100 relative text-white">
      <Image width={280} height={50} src={url} alt={url} className="" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-35">
        <h3 className="text-lg px-4 line-clamp-2">{title}</h3>
        <h3 className="px-2">{dates}</h3>
      </div>
    </div>
  )
}
export default HeroBerita
