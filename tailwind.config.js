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
    extend: {
      animation: {
        wiggle: 'wiggle .3s ease-in-out ',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(4)' },
          '100%': { transform: 'scale(1) ' },
// translate(0.25rem) backdropFilter:'blur(4px) ',opacity:1 //opacity:.0
        }},
      colors: {
      'blume': '#00aaff',
      'kerem':{300:'#efb687',500:'#eca46a',700:'#ef945a'
                              }
    }},
  },
  plugins: [],
};
