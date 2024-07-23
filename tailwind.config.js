const { color } = require("framer-motion")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        color: {
          primary: "#EDEDED",
          secondary: "#EDEDED",
          accent: "#000000",
          blue: "#0064D9",
          whiteGradient: "linear-gradient(to bottom, #FFFFFF 40%, #FAFAFA 40%)",
          dark: "#111111",
          darkHover: "#383838",
          white: "#FFFFFF",
          grey3: "#FAFAFA",
          grey2: "#F2F2F2",
          grey: "#666666",
          darkGrey: "#1A1A1A",
          darkDark: "#000000",
          whiteDark: "#EDEDED",
          greyDark: "#888888",
          // dark: "#222831",
          // primary: "#eeeeee",
          // dark: "#1f1f1f",
          // accent: "#9944FF",
          // secondary: "#14F194",
          // dark: "#222831",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
