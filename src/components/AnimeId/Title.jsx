const Title = ({ data }) => {
  if (!data) {
    return <span className="font-medium text-lg">Memuat...</span>
  } else if (data == []) {
    return <span className="font-medium text-lg">Tidak ditemukan</span>
  }
  return (
    <div className="pt-4 px-4">
      <p className="text-lg md:text-xl font-bold">
        {data.title}
        {data.year && ` - ${data.year}`}
      </p>
      <p className="text-base md:text-lg font-bold text-color-grey">
        {data?.title_english}
      </p>
    </div>
  )
}

export default Title
