import defaultTheme from "tailwindcss/defaultTheme.js";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [{ pattern: /(bg|text)-(primary|secondary|accent)/ }],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0d47a1" },
        secondary: { DEFAULT: "#2563eb" },
        accent: { DEFAULT: "#ff7d1a" },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      dropShadow: {
        logo: "0px 4px 8px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};