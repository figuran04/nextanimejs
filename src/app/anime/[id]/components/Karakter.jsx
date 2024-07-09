import Image from "next/image"

const Karakter = ({ karakter }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-11/12">
        {karakter.data?.map((item, index) => {
          const voiceActor = item.voice_actors?.find(
            (actor) => actor.language === "Japanese"
          )
          return (
            <div
              key={index}
              className="flex justify-between gap-2 shadow-md px-2 py-1 rounded"
            >
              <div>
                <Image
                  src={item.character.images.webp.image_url}
                  alt={item.character.images.jpg.image_url}
                  height={60}
                  width={60}
                  className="min-w-16 h-24 rounded"
                />
                <p className="text-lg">{item.character.name}</p>
              </div>
              <div>
                {voiceActor && (
                  <div className="flex flex-col items-end">
                    <Image
                      src={voiceActor.person.images.jpg.image_url}
                      alt={voiceActor.language}
                      height={60}
                      width={60}
                      className="min-w-16 h-24 rounded"
                    />
                    <p className="text-right text-lg">
                      {voiceActor.person.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Karakter
