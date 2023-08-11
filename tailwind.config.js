/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gris: "#3f3f3c",
        rosa: "#ffb9b8",
        verde: "#41c0ab",
        salmon: "#f3b998",
      }
    },
  },
  plugins: [],
}

