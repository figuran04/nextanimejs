const Skor = ({ data }) => {
  const Item = ({ data, output, title }) => {
    return (
      <>
        {data != null && (
          <div className="flex gap-2 flex-nowrap">
            <span className="text-color-grey">{title}</span>
            <span>{output}</span>
          </div>
        )}
      </>
    )
  }
  return (
    <div>
      <div className="flex gap-3">
        {data.season && data.year != "" && (
          <div className="flex gap-1 capitalize">
            {data.season != "" && <span>{data.season}</span>}
            {data.year != "" && <span>{data.year}</span>}
          </div>
        )}
        <span>{data.type}</span>
        {data.studios.map((item, index) => {
          return (
            <div key={index} className="flex gap-1">
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row w-full gap-2 flex-nowrap">
        {data.score && (
          <div className="flex flex-col items-center px-3 py-1 rounded-lg Border">
            <p className="font-bold ">SKOR</p>
            <p className="Text2xl font-bold">{data.score}</p>
            <Item
              data={data.scored_by}
              output={`${data.scored_by}`}
              title="Pengguna"
            />
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 lg:mx-2 w-full">
          {!data.score && (
            <Item
              data={data.scored_by}
              output={`${data.scored_by}`}
              title="Pengguna"
            />
          )}
          {data.rank && (
            <Item data={data.rank} output={`#${data.rank}`} title="Peringkat" />
          )}
          {data.popularity && (
            <Item
              data={data.popularity}
              output={`#${data.popularity}`}
              title="Penggemar"
            />
          )}
          {data.members && (
            <Item
              data={data.members}
              output={`${data.members}`}
              title="Anggota"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Skor
