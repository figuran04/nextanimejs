const Skor = ({ data }) => {
  if (!data) {
    return <p className="text-lg font-medium">Memuat...</p>
  } else if (data == []) {
    return <p className="text-lg font-medium">Tidak ditemukan</p>
  }
  const Fav = ({ data }) => {
    return (
      <div className="flex gap-1 flex-nowrap h5">
        <span className="text-color-grey">Favorit</span>
        <span>{`${data.favorites}`}</span>
      </div>
    )
  }
  return (
    <div className="flex flex-row w-full gap-4 my-2 flex-nowrap">
      {data.score ? (
        <div className="flex flex-col items-center px-3 py-1 rounded-lg Border">
          <h4 className="h4">SKOR</h4>
          <h2 className="h2">{data.score}</h2>
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
          <div className="flex gap-2 flex-nowrap h5">
            <span className="text-color-grey">Peringkat</span>
            <p>{`#${data.rank}`}</p>
          </div>
        ) : null}
        {data.popularity ? (
          <div className="flex gap-2 flex-nowrap h5">
            <span className="text-color-grey">Penggemar</span>
            <p>{`#${data.popularity}`}</p>
          </div>
        ) : null}
        {data.members ? (
          <div className="flex gap-2 h5">
            <span className="text-color-grey">Anggota</span>
            <span>{`${data.members}`}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Skor
