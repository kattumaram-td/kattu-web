/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#FFF9E5",
          200: "#FFE8B3",
          400: "#FFC107",
        },
        green: {
          600: "#2E7D32",
          700: "#1B5E20",
        },
      },
    },
  },
  plugins: [],
};
