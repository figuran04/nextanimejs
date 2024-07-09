import Image from "next/image"

const Gambar = ({ gambar }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-justify text-2xl font-bold">Gambar</p>
      <div className="flex gap-2 overflow-x-auto flex-nowrap">
        {gambar.data?.map((item, index) => (
          <Image
            src={item.webp.image_url}
            alt={item.jpg.image_url}
            width={70}
            height={100}
            className="w-auto h-36 object-cover"
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Gambar
