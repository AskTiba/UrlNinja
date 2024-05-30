/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  // './pages/**/*.{ts,tsx}',
  // './components/**/*.{ts,tsx}',
  // './app/**/*.{ts,tsx}',
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {},
  extend: {
    screens: {
      mobile: { max: "768px" },
      desktop: "1440px",
    },
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      red: "hsl(0, 87%, 67%)",
      blue: "hsl(255, 11%, 22%)",
      gray: {
        100: "hsl(0, 0%, 75%)",
        300: "hsl(257, 7%, 63%)",
      },
      violet: {
        300: "hsl(257, 27%, 26%)",
        500: "hsl(260, 8%, 14%)",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      base: "1rem",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
