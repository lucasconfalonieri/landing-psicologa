
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
        brand: {
          50: "#fff3ef",
          100: "#ffe4d9",
          200: "#f9ccb9",
          300: "#f1ad93",
          400: "#e58c6f",
          500: "#CC7A5E",
          600: "#b1614a",
          700: "#8f4d3b",
          800: "#6f3c2f",
          900: "#5a3127",
        },
        peach: "#F4CFBA",
        mist: "#D5DADB",
        teal: "#5A7577",
      },
    },
  },
  plugins: [],
};

export default config;
