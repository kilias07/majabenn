import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter)"],
        display: ["var(--playfair)"],
      },
      colors: {
        light: {
          full: "#FFFFFF",
          100: "#F9F9F9",
          200: "#EDEDED",
          300: "#E4E4E4",
        },
        dark: {
          500: "#A0A0A0",
          600: "#797979",
          700: "#5C5C5C",
          800: "#3F3F3F",
          900: "#231F20",
          full: "#000000",
        },
        navy: {
          main: "#0C1B33",
        },
        gold: {
          main: "#9D9171",
        },
        perl: {
          main: "#F5F0F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
