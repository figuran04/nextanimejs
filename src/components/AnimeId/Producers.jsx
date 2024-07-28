const Producers = ({ data }) => {
  return (
    <div className="my-2">
      <span className="text-xl font-bold">Produser</span>
      <div className="flex flex-wrap gap-1 overflow-x-auto">
        {data.producers?.map((item) => {
          if (!item) {
            return <span>Memuat...</span>
          } else if (item == []) {
            return <span>Tidak ditemukan</span>
          }
          return (
            <span className="flex flex-nowrap p-1 Border rounded">
              {item.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Producers
