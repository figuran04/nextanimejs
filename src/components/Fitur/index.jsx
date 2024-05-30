import Link from "next/link"

const Fitur = ({ title }) => {
  return (
    <div className="rounded-md px-4 py-2 bg-blue-500 text-white text-2xl font-semibold flex justify-center">
      <h2>{title}</h2>
    </div>
  )
}

export default Fitur
