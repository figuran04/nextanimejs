import Link from "next/link"

const Fitur = ({ title }) => {
  return (
    <div className="rounded-md bg-gray-300 text-xl font-medium flex flex-wrap justify-center hover:scale-105 transition-all">
      <h2 className="py-2">{title}</h2>
    </div>
  )
}

export default Fitur
