/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {fontFamily: {
      sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      
    },
    keyframes: {
              float: {
                 '0%, 100%': { transform: 'translateY(0)' },
                 '50%': { transform: 'translateY(-20px)' },
               }
             },
  },
  animation: {
        float: 'float 6s ease-in-out infinite'
           }
  },
  plugins: [],
}

