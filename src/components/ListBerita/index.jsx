import Image from "next/image"

const ListBerita = ({ title, url }) => {
  return (
    <div className="flex flex-wrap my-2 justify-center border-b-2 border-gray-500">
      <Image width={330} height={100} src={url} alt={url} classname="rounded-md" />
      <div className="py-2">
        <h1 className="text-xl font-semibold line-clamp-3">{title}</h1>
      </div>
    </div>
  )
}
export default ListBerita
