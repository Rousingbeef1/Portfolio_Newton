import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {

      keyframes: {
        slideFade: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFaded:{
         '0%':{ transform: 'translateX(200%)', opacity: '0'},
         '100%':{transform: 'tranlateX(0)', opacity:'1'},
        },
        aparecer:{
          '0%':{ opacity:'0.5'},
          '100%':{ opacity:'0'}
        }
      },
      animation: {
        'slide-fade': 'slideFade 1.7s ease-in-out',
        'slide-fade-direita': 'slideFaded 1.7s ease-in-out',
        'surgir': 'aparecer 0.4s ease-in-out'
      },

      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        poppinsBold: ['Poppins-bold', 'sans-serif'],
        poppinsextralight: ['Poppins-extralight', 'sans-serif'],
        poppinssemibold: ['Poppins-semibold', 'sans-serif']
      },
      
      colors: {
        cinzaClaro: "#121212",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
