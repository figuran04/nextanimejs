const Title = ({ data }) => {
  if (!data) {
    return <p className="font-medium text-lg">Memuat...</p>
  } else if (data == []) {
    return <p className="font-medium text-lg">Tidak ditemukan</p>
  }
  return (
    <div className="pt-4 px-4">
      <h3 className="h3">
        {data.title}
        {data.year ? ` - ${data.year}` : null}
      </h3>
      <h5 className="h5 text-color-grey">{data?.title_english}</h5>
    </div>
  )
}

export default Title
