/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee-infinite' : 'marquee 25s linear infinite',
        'marquee-infinite2' : 'marquee2 25s linear infinite',
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
