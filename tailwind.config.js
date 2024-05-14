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
        morph: {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "25% 85% 75% 55% / 75% 60% 80% 60%",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 1.5s infinite",
        morph: "morph 6s ease-in-out infinite 1s",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "620px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
