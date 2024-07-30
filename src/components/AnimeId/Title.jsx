const Title = ({ data }) => {
  if (!data) {
    return <span className="font-medium Textlg">Memuat...</span>
  } else if (data == []) {
    return <span className="font-medium Textlg">Tidak ditemukan</span>
  }
  return (
    <div className="pt-4 px-4">
      <p className="Textlg md:Textxl font-bold">
        {data.title}
        {data.year && ` - ${data.year}`}
      </p>
      <p className=" md:Textlg font-bold text-color-grey">
        {data?.title_english}
      </p>
    </div>
  )
}

export default Title
