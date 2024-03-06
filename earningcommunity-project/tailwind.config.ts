import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBg: '#F3A133',
        lightFooterBg: '#DBDBD1',
        lightText: '#F5F5F5',
        darkBg: '#C99D5C',
        darkFooterBg: '#333533',
        darkText: '#333533',
      },
    },
  },
  plugins: [],
};
export default config;
