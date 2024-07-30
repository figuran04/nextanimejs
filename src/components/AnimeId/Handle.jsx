const Handle = ({ data, render }) => (
  <div className="mt-3">
    {!data ? (
      <p>Memuat...</p>
    ) : data.length === 0 ? (
      <p>Tidak tersedia</p>
    ) : (
      render(data)
    )}
  </div>
)

export default Handle
