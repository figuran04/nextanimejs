import Link from "next/link"

const External = ({ data }) => {
  return (
    <div className="my-2">
      <span className="text-xl font-bold">Eksternal</span>
      <div className="flex flex-wrap">
        {data.external?.map((item, index) => {
          return (
            <div key={index}>
              <Link
                href={item.url}
                target="_blank"
                className="Color whitespace-nowrap mr-3 text-base"
              >
                {item.name}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default External
