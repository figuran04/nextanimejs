const Navigasi = () => {
  return (
    <div className="flex font-semibold justify-between text-lg fixed bottom-0 left-0 w-screen">
      <div className="grid grid-cols-3 justify-around items-end w-full h-28">
        <div className="w-full py-2 pl-2 border-t-2 bg-white">
          <div className="flex justify-around flex-wrap cursor-pointer hover:scale-110 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>

            <h3 className="w-full flex justify-center">Beranda</h3>
          </div>
        </div>
        <div className="w-full flex justify-center bg-white">
          <div className="bg-white rounded-full py-3 px-6 fixed bottom-7 border-4 cursor-pointer hover:scale-110 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 w-full text-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          </div>
          <p className="pt-11 border-t-2">Text To Speech</p>
        </div>
        <div className="w-full py-2 pl-2 border-t-2 bg-white">
          <div className="flex justify-around flex-wrap cursor-pointer hover:scale-110 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <h3 className="w-full flex justify-center">Menu</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navigasi
{
  /* <div className="grid grid-cols-3 justify-around items-end w-full h-16">
        <div className="flex justify-around w-full py-3 bg-rose-700 pl-2">
          <Chats size={32} />
          <Ranking size={32} />
        </div>
        <div className="w-full flex justify-center bg-rose-700 text-black">
          <div className="bg-white rounded-full p-3 fixed bottom-6 border-4">
            <MagnifyingGlass size={40} />
          </div>
          <p className="pt-8 font-quickSemibold text-white">Match</p>
        </div>
        <div className="flex justify-around w-full py-3 bg-rose-700 pr-2">
          <Gear size={32} />
          <Users size={32} />
        </div>
      </div> */
}
