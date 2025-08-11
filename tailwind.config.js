import formsPlugin from '@tailwindcss/forms'
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home" : "url('/bg.png')"
      },
      backgroundSize:{
        "home-xl" : "50%"
      },
      backgroundPosition: {
        "right-bottom": "right bottom"
      }
    },
  },
  plugins: [formsPlugin],
}