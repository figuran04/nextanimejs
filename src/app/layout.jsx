import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Providers } from "./providers"
const sfProDisplay = localFont({
  src: [
    {
      path: "../assets/SFProDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-UltralightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-RegularItalic.ttf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-Ultralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-LightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/SFProDisplay-Regular.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/SFProDisplay-BoldItalic.ttf",
      weight: "bold",
      style: "italic",
    },
  ],
})

export const metadata = {
  title: "nextanimejs",
  description: "Website Animelist Generate Use Next js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${sfProDisplay.className} dark:bg-color-dark bg-color-primary pb-16`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
