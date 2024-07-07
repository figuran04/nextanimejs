import Image from "next/image"

const Karakter = ({ karakter }) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <p className="text-justify text-2xl font-bold">Karakter</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-5/6">
        {karakter.data?.map((item, index) => {
          const voiceActor = item.voice_actors?.find(
            (actor) => actor.language === "Japanese"
          )
          return (
            <div key={index} className="flex justify-between gap-3">
              <div>
                <Image
                  src={item.character.images.webp.image_url}
                  alt={item.character.images.jpg.image_url}
                  height={60}
                  width={60}
                  className="min-w-16 h-24"
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
                      className="min-w-16 h-24"
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
