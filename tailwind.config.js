/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".shadow-inset-bottom-green": {
            boxShadow: "inset 0 -2px 0 0 #388878",
          },
          ".shadow-inset-bottom-white": {
            boxShadow: "inset 0 -2px 0 0 white",
          },
        },
        ["responsive", "hover", "dark:hover"]
      );
    },
  ],
};
