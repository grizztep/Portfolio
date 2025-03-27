/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Correct paths
    theme: {
      extend: {
        colors: {
          black: "#000000",
          dirtyWhite: "#f9f6f1",
          lightGray: "#d3d3d3",
        },
      },
    },
    plugins: [],
  };
  