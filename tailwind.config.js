/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*{html,js, jsx, ts, tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EEA474",
          secondary: "#92CFDD",
          accent: "#F471B5",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          info: "#0CA5E9",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",
        },
      },
    ],
  },
  extend: {},

  plugins: [require("daisyui")],
};
