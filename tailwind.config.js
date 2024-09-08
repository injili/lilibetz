/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neo: '-10px 10px 29px #bebebe, 10px -10px 29px #ffffff',
        teo: '-5px 5px 15px #bebebe,5px -5px 15px #ffffff',
      },
      fontFamily: {
        DMsans: ['DM Sans', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        bowldyOneSC: ['Bowlby One SC', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
        poiretOne: ['Poiret One', 'sans-serif']
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
}

