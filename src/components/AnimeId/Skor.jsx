const Skor = ({ data }) => {
  if (!data) {
    return <span>Memuat...</span>
  } else if (data == []) {
    return <span>Tidak ditemukan</span>
  }
  const Fav = ({ data }) => {
    return (
      <div className={`flex gap-1 flex-nowrap ${data.score && "text-sm"}`}>
        <span className="text-color-grey">Pengguna</span>
        <span>{`${data.scored_by}`}</span>
      </div>
    )
  }
  return (
    <div>
      <div className="flex gap-3 capitalize">
        <div className="flex gap-1">
          {data.season != "" && <span>{data.season}</span>}
          {data.year != "" && <span>{data.year}</span>}
        </div>
        <span>{data.type}</span>
        {data.studios.map((item, index) => {
          return (
            <div key={index} className="flex gap-1">
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row w-full gap-4 my-2 flex-nowrap">
        {data.score ? (
          <div className="flex flex-col items-center px-3 py-1 rounded-lg Border">
            <p className="font-bold">SKOR</p>
            <p className="text-2xl font-bold">{data.score}</p>
            <Fav data={data} />
          </div>
        ) : (
          <Fav data={data} />
        )}
        <div
          className={`flex flex-nowrap justify-center md:justify-around md:flex-row w-full overflow-x-auto md:items-center no-scrollbar ${
            data.score ? `flex-col` : `flex-row pl-2 gap-2`
          }`}
        >
          {data.rank ? (
            <div className="flex gap-2 flex-nowrap">
              <span className="text-color-grey">Peringkat</span>
              <p>{`#${data.rank}`}</p>
            </div>
          ) : null}
          {data.popularity ? (
            <div className="flex gap-2 flex-nowrap">
              <span className="text-color-grey">Penggemar</span>
              <p>{`#${data.popularity}`}</p>
            </div>
          ) : null}
          {data.members ? (
            <div className="flex gap-2">
              <span className="text-color-grey">Anggota</span>
              <span>{`${data.members}`}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Skor
