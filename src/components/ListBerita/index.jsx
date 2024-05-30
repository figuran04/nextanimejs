import Image from "next/image"

const ListBerita = ({ title, url, desc }) => {
  return (
    <div className="flex flex-wrap shadow-xl my-2 rounded-md justify-center">
      <Image width={330} height={100} src={url} alt={url} />
      <div className="p-4">
        <h1 className="text-xl font-semibold line-clamp-2">{title}</h1>
        <p className="line-clamp-2">{desc}</p>
      </div>
    </div>
  )
}
export default ListBerita
