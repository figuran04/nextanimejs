"use client"
const Pengaturan = () => {
  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => router.back()}
          className="my-2 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
          Kembali
        </button>
        <h1 className="text-4xl font-bold mr-28 mt-4">Pengaturan</h1>
      </div>
    </div>
  )
}
export default Pengaturan
