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
    },
    colors: {
      background: "#0B0E14",
      navbar: "#191E29",
      navbar2: "#2c3549",
      text: "#e1e8f5",
      text2: "#000000",
      card: "#141a24",
      button: "#3B4C6C",
      buttonClick: "#2F3C56",
      cardAccent: "#263245",
    },
  },
  plugins: [],
};
