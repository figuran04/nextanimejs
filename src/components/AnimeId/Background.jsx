const Background = ({ data }) => {
  return (
    <div className="my-2">
      <span className="text-xl font-bold">Latar Belakang</span>
      <div className="flex gap-2 overflow-x-auto">
        <p className="text-justify">{data.background}</p>
      </div>
    </div>
  )
}

export default Background
