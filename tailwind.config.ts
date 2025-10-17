
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        brand:   { DEFAULT: "#3e6ab1" },
        lilac:   "#d1b2d5",
        navy:    "#21274f",
        tint:    "#e9f2fc",
        surface: "#ffffff",
        bgsoft:  "#f0e6f3",
      },
    },
  },
  plugins: [],
};

export default config;
