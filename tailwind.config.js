/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F141E",
        secondary: "#171D2F",
        assets: "#FD6039",
      },
      borderRadius: {
        normal: "0.5rem",
      },
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
}
