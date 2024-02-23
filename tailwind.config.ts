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
        lexend: "Lexend",
        lexendtera: "LexendTera",
      },
      colors: {
        red_primary: "#cb011b",
        black_primary: "#101010",
      },
      fontSize: {
        titles: "26px",
        subtitles: "20px",
        p: "16px",
        smtitles: "20px",
        smsubtitles: "16px",
        smp: "14px",
        details: "13px",
      },
    },
  },
  plugins: [],
};
export default config;
