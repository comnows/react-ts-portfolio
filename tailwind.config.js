/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          from: {
            top: "-25px",
            opacity: "0",
          },
          to: {
            top: "10px",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 1.5s infinite",
      },
    },
  },
  plugins: [],
};
