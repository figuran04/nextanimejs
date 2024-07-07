const Skor = ({ data }) => {
  return (
    <div className="flex text-color-primary flex-row w-full gap-2 flex-nowrap">
      {data.score ? (
        <div className="flex flex-col items-center border-2 px-2 py-1 rounded">
          <p className="text-lg font-medium">SKOR</p>
          <p className="text-3xl font-bold">{data.score}</p>
          <div className="flex flex-nowrap gap-1">
            <p>Favorit</p>
            <p className="font-bold">{`#${data.favorites}`}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-nowrap gap-2 text-xl">
          <p className="font-medium">Favorit</p>
          <p className="font-bold">{`${data.favorites}`}</p>
        </div>
      )}
      <div className="flex flex-nowrap justify-around flex-row w-full overflow-x-auto gap-2 items-center">
        {data.rank ? (
          <div className="flex flex-nowrap gap-2 text-xl">
            <p className="font-medium">Peringkat</p>
            <p className="font-bold">{`#${data.rank}`}</p>
          </div>
        ) : null}
        {data.popularity ? (
          <div className="flex flex-nowrap gap-2 text-xl">
            <p className="font-medium">Penggemar</p>
            <p className="font-bold">{`#${data.popularity}`}</p>
          </div>
        ) : null}
        {data.members ? (
          <div className="flex flex-nowrap gap-2 text-xl">
            <p className="font-medium">{`Anggota`}</p>
            <p className="font-bold">{`${data.members}`}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Skor
