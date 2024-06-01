const Navigasi = () => {
  return (
    <div className="flex font-semibold justify-between bg-white text-lg fixed bottom-0 left-0 w-screen border-t-2">
      <div className="grid grid-cols-3 justify-around items-end w-full h-16">
        <div className="flex justify-around w-full py-4 pl-2">
          <h3>Beranda</h3>
        </div>
        <div className="w-full flex justify-center text-black">
          <div className="bg-gray-200 rounded-full p-1 fixed bottom-6 border-4 w-28 hover:scale-105 transition-all cursor-pointer">
            <h3 className="w-full text-center text-gray-200">Text To Speech</h3>
          </div>
          <p className="pt-8">Text To Speech</p>
        </div>
        <div className="flex justify-around w-full py-4 pr-2">
          <h3>Menu</h3>
        </div>
      </div>
    </div>
  )
}
export default Navigasi
