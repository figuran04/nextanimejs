import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Providers } from "./providers"
import Footer from "@/components/Footer"
const sfProDisplay = localFont({
  src: [
    {
      path: "../assets/standerd-standerd-black-800.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-extrabold-800.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-bold-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-semibold-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-medium-500.ttf",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "../assets/standerd-standerd-regular-400.ttf",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/standerd-standerd-regular-400.ttf",
    //   weight: "800",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/standerd-standerd-regular-400.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/standerd-standerd-regular-400.ttf",
    //   weight: "600",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/standerd-standerd-regular-400.ttf",
    //   weight: "500",
    //   style: "normal",
    // },
    {
      path: "../assets/standerd-standerd-regular-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-regular-400.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-regular-400.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/standerd-standerd-regular-400.ttf",
      weight: "100",
      style: "normal",
    },
    // {
    //   path: "../assets/standerd-standerd-light-200.ttf",
    //   weight: "200",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/standerd-standerd-extra-light-100.ttf",
    //   weight: "100",
    //   style: "normal",
    // },
  ],
})

export const metadata = {
  title: "NextAnimeJS",
  description: "Website Animelist Generate Next JS Framework",
  authors: [
    {
      name: "figuran04",
      url: "https://nextanimejs.vercel.app",
    },
  ],
  openGraph: {
    title: "NextAnimeJS",
    description: "Website Animelist Generate Next JS Framework",
    url: "https://nextanimejs.vercel.app",
    images: [
      {
        url: "https://nextanimejs.vercel.app/next.svg",
        width: 800,
        height: 600,
        alt: "NextAnimeJS",
      },
    ],
    site_name: "NextAnimeJS",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextanimejs",
    title: "NextAnimeJS",
    description: "Website Animelist Generate Next JS Framework",
    image: "https://nextanimejs.vercel.app/next.svg",
  },
  robots: "index, follow",
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff",
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${sfProDisplay.className} dark:bg-color-darkDark bg-color-white mt-28 md:mt-16`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
