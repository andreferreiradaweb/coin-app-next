/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scroll-left": {
          from: {
            transform: "translateX(0%)"
          },
          to: {
            transform: "translateX(-100%)"
          }
        }
      },
      animation: {
        'scrolling-left': 'scroll-left 15s linear infinite',
      },
      boxShadow: {
        "menu": "0px 4px 8px rgba(77, 77, 77, 0.1)",
        "card": " 0px 12px 24px rgba(0, 0, 0, 0.05)",
        "trade": "0px 8px 16px rgba(0, 0, 0, 0.1)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%)",
        "newsletter-gradient": "linear-gradient(97.85deg, #FBAB34 -5.87%, #AD721A 118.06%)"
      },
      colors: {
        "gray": "#5D6670",
        "primary": {
          100: "#FFF6E8",
          200: "#FFE1B5",
          300: "#FFCD82",
          400: "#FFB94F",
          500: "#FBAB34",
          600: "#E09422",
          700: "#AD721A",
          800: "#7A4E0C",
          900: "#472C04"
        },
        "secondary": {
          100: "#F6F6F6",
          200: "#F4F3F8",
          300: "#E0DEEA",
          400: "#ACABB7",
          500: "#8C8A97",
          600: "#716F7A",
          700: "#5F5C6B",
          800: "#4E4B59",
          900: "#33303E"
        },
        "tertiary": {
          100: "#E8FAF1",
          200: "#D1F6E3",
          300: "#A4EDC6",
          400: "#8DE8B8",
          500: "#1BD171",
          600: "#18B863",
          700: "#149E55",
          800: "#0E6B3A",
          900: "#07381E"
        },
        "quartenary": {
          100: "#FFF2F3",
          200: "#FFCFD0",
          300: "#FF9497",
          400: "#FA7D80",
          500: "#EC3237",
          600: "#D42D31",
          700: "#A12226",
          800: "#6E171A",
          900: "#3B0C0E"
        }
      },
    },
  },
  plugins: [],
}