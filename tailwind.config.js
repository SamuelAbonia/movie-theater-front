/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#1DE782',
      },
      height: {
        '85': '23rem',
      },
      keyframes: {
        'slide-up': {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        }
      },
      animation: {
        'slide-up-delayed': 'slide-up 0.8s ease-out 0.3s forwards'
      }
    },
  },
  plugins: [],
}

