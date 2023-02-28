/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js,jsx}",
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {colors: {
      'blume': '#00aaff',
    },},
  },
  plugins: [],
};
