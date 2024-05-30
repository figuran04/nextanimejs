import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-nowrap items-center my-2">
      <div className="">
        <a href="/">
          <p>Search</p>
        </a>
        <h1 className="text-4xl font-bold py-2">Knowledge Is Power</h1>
      </div>
      <Image width={180} height={180} src="/hero.png" alt="hero" />
    </div>
  )
}

export default Hero
