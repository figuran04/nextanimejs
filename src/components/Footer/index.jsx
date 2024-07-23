import Link from "next/link"
import InputSearch from "../Navbar/InputSearch"
import GithubIcon from "../Icons/GithubIcon"

const Footer = () => {
  return (
    <footer className="w-full py-10 mt-10 border-t text-color-grey dark:border-color-grey border-color-grey2">
      <div className="lg:container">
        <div className="flex flex-col justify-between w-full gap-6 px-6 lg:px-4 lg:flex-row">
          <div className="flex justify-between">
            <div>
              <div className="relative textActive mr-4">
                <span className="font-bold text-color-whiteGradient h3">
                  NEXTANIME
                </span>
                <span className="absolute -right-5 md:bottom-1 bottom-0 text-sm font-bold">
                  JS
                </span>
              </div>
            </div>
            <Link
              href="https://github.com/figuran04"
              className="block lg:hidden"
            >
              <GithubIcon />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-10 lg:w-1/2 justify-start lg:justify-between">
            <div>
              <h3 className="mb-2 textActive h4">Navigasi</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/anime"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Anime
                  </Link>
                </li>
                <li>
                  <Link
                    href="/genre"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Genre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 textActive h4">Anime</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/topanime"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Teratas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rekomendasi"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Rekomendasi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 textActive h4">Musim</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/musim/sekarang"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Sekarang
                  </Link>
                </li>
                <li>
                  <Link
                    href="/musim/mendatang"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                  >
                    Mendatang
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 textActive h4">Tentang Kami</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="http://github.com/figuran04/nextanimejs"
                    className="transition-all text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark h4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kode Sumber
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h3 className="mb-2 h4 textActive">Cari Anime</h3>
            <p className="mb-2 h4">
              Gunakan fitur pencarian di bawah ini untuk menemukan anime yang
              Anda inginkan.
            </p>
            <InputSearch />
          </div>
        </div>
        <div className="px-6 lg:px-4 mt-4 h4">
          <p>@ {new Date().getFullYear()} Figuran04.</p>
          <Link
            href="https://github.com/figuran04"
            aria-label="github"
            className="hidden lg:block mt-4 p-1"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
