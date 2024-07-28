const Theme = ({ data }) => {
  return (
    <div className="my-2">
      <span className="text-xl font-bold">Lagu Tema</span>
      <table>
        <tbody>
          <tr>
            <td className="text-base">Opening</td>
            <td>
              {data.theme.openings?.map((item, index) => {
                return (
                  <p key={index} className="text-color-grey text-base">
                    {item}
                  </p>
                )
              })}
            </td>
          </tr>
          <tr>
            <td className="text-base">Ending</td>
            <td>
              {data.theme.endings?.map((item, index) => {
                return (
                  <p key={index} className="text-color-grey text-base">
                    {item}
                  </p>
                )
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Theme
