const Title = ({ data }) => {
  return (
    <div className="pt-4 px-4">
      {data?.year ? (
        <h3 className="text-color-primary text-2xl font-bold">
          {data?.title} - {data?.year}
        </h3>
      ) : (
        <h3 className="text-color-primary text-2xl font-bold">{data?.title}</h3>
      )}
      <h4 className="font-bold text-color-primary text-lg opacity-70">
        {data?.title_english}
      </h4>
    </div>
  )
}

export default Title
