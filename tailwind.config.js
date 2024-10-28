/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],  // Add Roboto here
      },
      colors: {
        hoverBtn: "#A0BCE0",
        hoverBtn1: "#E07575",
        button2: "#DB4444",
        button1: "#00FF66",
        secondary2: "blue-500",
        secondary1: "#FFFFFF",
        secondary: "#F5F5F5",
        button: "#000000",
        text2: "#000000",
        text1: "#7D8184",
        text: "#777777",
        bg: "#FFFFFF",
        primary1: "#363738",
        primary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
