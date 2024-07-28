import Link from "next/link"
import InputSearch from "../Navbar/InputSearch"
import GithubIcon from "../Icons/GithubIcon"

const Footer = () => {
  return (
    <footer className="w-full py-10 mt-10 border-t text-color-grey dark:border-color-grey border-color-grey2">
      <div className="lg:container">
        <div className="flex flex-col justify-between w-full gap-6 px-6 lg:px-4 lg:flex-row">
          <div className="flex justify-between items-center lg:items-start">
            <div>
              <div className="relative Text mr-4 font-bold">
                <span className="text-color-whiteGradient text-xl">
                  NEXTANIME
                </span>
                <span className="absolute -right-5 bottom-0 text-sm">JS</span>
              </div>
            </div>
            <Link
              href="https://github.com/figuran04"
              className="block lg:hidden"
              aria-label="github"
            >
              <GithubIcon />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-10 lg:w-1/2 justify-start lg:justify-between">
            <div>
              <p className="mb-2 textActive text-base">Navigasi</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="transition-all Color text-base">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/anime/page/1"
                    className="transition-all Color text-base"
                  >
                    Anime
                  </Link>
                </li>
                <li>
                  <Link
                    href="/genre"
                    className="transition-all Color text-base"
                  >
                    Genre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    className="transition-all Color text-base"
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 textActive text-base">Anime</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/topanime/page/1"
                    className="transition-all Color text-base"
                  >
                    Teratas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rekomendasi/page/1"
                    className="transition-all Color text-base"
                  >
                    Rekomendasi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 textActive text-base">Musim</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/musim/sekarang/page/1"
                    className="transition-all Color text-base"
                  >
                    Sekarang
                  </Link>
                </li>
                <li>
                  <Link
                    href="/musim/mendatang/page/1"
                    className="transition-all Color text-base"
                  >
                    Mendatang
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 textActive text-base">Tentang Kami</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="http://github.com/figuran04/nextanimejs"
                    className="transition-all Color text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kode
                    <br />
                    Sumber
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 my-4 md:my-0">
            <p className="mb-2 textActive text-base">Cari anime</p>
            <p className="mb-2 text-base">
              Gunakan fitur pencarian di bawah ini untuk menemukan anime yang
              Anda inginkan.
            </p>
            <InputSearch />
          </div>
        </div>
        <div className="px-6 lg:px-4 mt-4">
          <span className="text-base">
            @ {new Date().getFullYear()} Figuran04.
          </span>
        </div>
        <div className="px-6 lg:px-4 mt-4">
          <Link
            href="https://github.com/figuran04"
            aria-label="github"
            className="hidden lg:inline-block"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
