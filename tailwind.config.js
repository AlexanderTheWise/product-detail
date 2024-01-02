/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayBlue: "hsl(219, 9%, 45%)",
      grayBlue: "hsl(220, 14%, 75%)",
      lightGrayBlue: "hsl(223, 64%, 98%)",
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    extend: {
      spacing: {
        mainHorizontal: "clamp(1.375rem, -1.662rem + 12.958vw, 10rem)",
      },
    },
  },
  plugins: [],
};
