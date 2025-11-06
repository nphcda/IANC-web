/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary70: "#14A673",
        primary50: "#2FCF97",
        primary90: "#027D52",
        primary10: "#EEFFF9",
        light10: "#FEFEFE",
        light90: "#959596",
        secondary400: "#3B4250",
        secondary300: "#6A707F",
        secondary30: "#899197",
        secondary90: "#AEF207",
        dark50: "#212529",
        dark90: "#141619",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
      danc: ["Dancing Script", "cursive"],
      popp: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
      vibes: ["Great Vibes", "cursive"],
      rubik: ["Rubik", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      times: ["Times New Roman", "Times", "serif"],
    },
  },
  plugins: [],
};
