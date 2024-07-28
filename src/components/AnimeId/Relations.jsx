import Link from "next/link"

const Relations = ({ data }) => {
  return (
    <div className="my-2">
      <span className="text-xl font-bold">Relasi</span>
      <table>
        <tbody>
          {data.relations?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-base">{item.relation}</td>
                <td>
                  {item.entry?.map((item) => {
                    return (
                      <>
                        {item.type === "anime" ? (
                          <Link
                            key={item.mal_id}
                            href={`/anime/${item.mal_id}`}
                          >
                            <p className="Color text-base">{`${item.name} (${item.type})`}</p>
                          </Link>
                        ) : (
                          <p className="Color text-base">{`${item.name} (${item.type})`}</p>
                        )}
                      </>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Relations
