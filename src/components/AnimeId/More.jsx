const More = ({ data, fungsi, showAll }) => {
  return (
    <>
      {data?.length > 3 && (
        <div className="flex justify-center mt-3">
          <button onClick={fungsi} className="Color">
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
          </button>
        </div>
      )}
    </>
  )
}
export default More
