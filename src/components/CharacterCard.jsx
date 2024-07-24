import Image from "next/image"

const CharacterCard = ({ item, voiceActor }) => {
  return (
    <div className="flex justify-between gap-2 shadow px-2 py-1 rounded-lg Button">
      <div>
        <Image
          src={item.character.images.webp.image_url}
          alt={item.character.images.jpg.image_url}
          height={60}
          width={60}
          className="min-w-16 h-24 rounded-lg"
        />
        <p>{item.character.name}</p>
      </div>
      <div>
        {voiceActor && (
          <div className="flex flex-col items-end">
            <Image
              src={voiceActor.person.images.jpg.image_url}
              alt={voiceActor.language}
              height={60}
              width={60}
              className="min-w-16 h-24 rounded-lg"
            />
            <p>{voiceActor.person.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterCard
