/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        quickBold: ["QuickBold"],
        quickLight: ["QuickLight"],
        quickMedium: ["QuickMedium"],
        quickRegular: ["QuickRegular"],
        quickSemibold: ["QuickSemiBold"],
        montBold: ["MontserratBold"],
        montLight: ["MontserratLight"],
        montMedium: ["MontserratMedium"],
        montRegular: ["MontserratMedium"],
        montSemibold: ["MontserratSemiBold"],
        montExtraLight: ["MontserratExtraLight"],
        montExtraBold: ["MontserratExtraBold"],
        montItalic: ["MontserratItalic"],
        montBlack: ["MontserratBlack"],
        montThin: ["MontserratThin"],
      },
    },
  },
  plugins: [],
}
