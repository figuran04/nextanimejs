const Skor = ({ data }) => {
  return (
    <div className="flex dark:text-color-primary text-color-dark flex-row w-full gap-4 flex-nowrap">
      {data.score ? (
        <div className="flex flex-col items-center shadow-md px-3 py-1 rounded">
          <p className="text-lg font-medium">SKOR</p>
          <p className="text-3xl font-bold">{data.score}</p>
          <div className="flex flex-nowrap gap-1">
            <p>Favorit</p>
            <p className="font-bold">{`${data.favorites}`}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-nowrap gap-2 text-xl">
          <p className="font-medium">Favorit</p>
          <p className="font-bold">{`${data.favorites}`}</p>
        </div>
      )}
      <div
        className={`flex flex-nowrap justify-center md:justify-around md:flex-row gap-2 md:gap-0 ml-4 md:ml-0 w-full overflow-x-auto md:items-center ${
          data.score ? `flex-col` : `flex-row`
        }`}
      >
        {data.rank ? (
          <div className="flex flex-nowrap gap-2 lg:text-xl text-lg">
            <p className="">Peringkat</p>
            <p className="font-bold">{`#${data.rank}`}</p>
          </div>
        ) : null}
        {data.popularity ? (
          <div className="flex flex-nowrap gap-2 lg:text-xl text-lg">
            <p className="">Penggemar</p>
            <p className="font-bold">{`#${data.popularity}`}</p>
          </div>
        ) : null}
        {data.members ? (
          <div className="flex flex-nowrap gap-2 lg:text-xl text-lg">
            <p className="">Anggota</p>
            <p className="font-bold">{`${data.members}`}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Skor
