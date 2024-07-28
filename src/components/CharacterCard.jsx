import Image from "next/image"

const CharacterCard = ({ item, voiceActor }) => {
  return (
    <div className="flex justify-between gap-2 shadow-sm hover:shadow rounded-lg Border">
      <div className="flex w-full">
        <Image
          src={item.character.images.webp.image_url}
          alt={item.character.images.jpg.image_url}
          height={60}
          width={60}
          className="min-w-16 h-24 rounded-lg p-1"
        />
        <div className="flex flex-col justify-between">
          <p className="line-clamp-2 text-base">{item.character.name}</p>
          <p className="text-color-blue text-base">{item.role}</p>
          <p className="text-color-grey text-base">{`${item.favorites} Favorit`}</p>
        </div>
      </div>
      {voiceActor && (
        <div className="flex w-full flex-row-reverse">
          <Image
            src={voiceActor.person.images.jpg.image_url}
            alt={voiceActor.language}
            height={60}
            width={60}
            className="min-w-16 h-24 rounded-lg p-1"
          />
          <p className="line-clamp-2 text-base">{voiceActor.person.name}</p>
        </div>
      )}
    </div>
  )
}

export default CharacterCard
