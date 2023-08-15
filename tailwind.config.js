/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#030E28', 
          100: '#0F206C'
        },
        secondary: { 
          DEFAULT: '#22A5AB', 
          400: '#186B99' 
        },
        
        grey: '#3C3C3B',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      
    },
  },
  plugins: [],
}
