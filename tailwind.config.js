/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          lg: '20px',
          xl: '20px',
          '2xl': '20px',
        },
        screens: {
          '2xl': '1500px',
        },
      },
      extend: {
        FontFamily: {
          roboto: ['"Roboto"', 'sans-serif'],
          openSans: ['"Open Sans"', 'sans-serif'],
          yellowtail: ['"Yellowtail"', 'cursive'],
          inter: ['"Inter"', 'sans-serif'],
        },
      },
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}