const Skor = ({ data }) => {
  if (!data) {
    return <p className="text-lg font-medium">Memuat...</p>
  } else if (data == []) {
    return <p className="text-lg font-medium">Tidak ditemukan</p>
  }
  return (
    <div className="flex flex-row w-full gap-4 my-2 flex-nowrap">
      {data.score ? (
        <div className="flex flex-col items-center px-3 py-1 border rounded-md dark:border-color-grey border-color-grey2">
          <p className="h4">SKOR</p>
          <p className="h2">{data.score}</p>
          <div className="flex gap-1 flex-nowrap">
            <p className="text-color-grey">Favorit</p>
            <p className="font-bold">{`${data.favorites}`}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 text-lg flex-nowrap lg:text-xl">
          <p className="text-color-grey">Favorit</p>
          <p className="font-bold">{`${data.favorites}`}</p>
        </div>
      )}
      <div
        className={`flex flex-nowrap justify-center md:justify-around md:flex-row w-full overflow-x-auto md:items-center no-scrollbar ${
          data.score ? `flex-col` : `flex-row pl-4 gap-2`
        }`}
      >
        {data.rank ? (
          <div className="flex gap-2 text-lg flex-nowrap lg:text-xl">
            <p className="text-color-grey">Peringkat</p>
            <p className="font-bold">{`#${data.rank}`}</p>
          </div>
        ) : null}
        {data.popularity ? (
          <div className="flex gap-2 text-lg flex-nowrap lg:text-xl">
            <p className="text-color-grey">Penggemar</p>
            <p className="font-bold">{`#${data.popularity}`}</p>
          </div>
        ) : null}
        {data.members ? (
          <div className="flex gap-2 text-lg flex-nowrap lg:text-xl">
            <p className="text-color-grey">Anggota</p>
            <p className="font-bold">{`${data.members}`}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Skor
