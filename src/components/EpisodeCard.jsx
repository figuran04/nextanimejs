import FormattedDate from "./Utilities/FormattedDate"

const EpisodeCard = ({ data }) => {
  return (
    <table className="">
      <thead>
        <tr>
          <td className="text-base">No</td>
          <td className="text-base">Judul Episode</td>
          <td className="text-base">Ditayangkan</td>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <tr key={item.mal_id}>
              <td>
                <p className="flex justify-center items-center">
                  {item.mal_id}
                </p>
              </td>
              <td className="w-full">
                <p className="line-clamp-1 text-base">{item.title}</p>
                <p className="text-color-grey line-clamp-1 text-base">
                  {item.title_romanji}
                </p>
              </td>
              <td className="whitespace-nowrap text-center">
                <FormattedDate dateString={item.aired} styles="text-base" />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default EpisodeCard
