const Title = ({ data }) => {
  if (!data) {
    return <p className="font-medium text-lg">Memuat...</p>
  } else if (data == []) {
    return <p className="font-medium text-lg">Tidak ditemukan</p>
  }
  return (
    <div className="pt-4 px-4">
      {data.year ? (
        <h3 className="dark:text-color-primary text-color-dark text-2xl font-bold">
          {data.title} - {data.year}
        </h3>
      ) : (
        <h3 className="dark:text-color-primary text-color-dark text-2xl font-bold">
          {data.title}
        </h3>
      )}
      <h4 className="font-bold dark:text-color-primary text-color-dark text-lg opacity-70">
        {data?.title_english}
      </h4>
    </div>
  )
}

export default Title
