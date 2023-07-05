/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        veryDarkMagenta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",
        darkGrayishMagenta: "hsl(303, 10%, 53%)",
        lightGrayishMagenta: "hsl(300, 24%, 96%)",
        white: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        topPatternMobile: "url('/images/bg-pattern-top-mobile.svg')",
        topPatternDekstop: "url('/images/bg-pattern-top-desktop.svg')",
      },
    },
  },
  plugins: [],
};
