import localFont from "next/font/local"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/Navbar"
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
  title: "NextAnime",
  description: "Website Animelist Generate Use Next js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sfProDisplay.className}`}>
      <body suppressHydrationWarning={true} className="bg-color-dark">
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
