/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: 'var(--white_color)',
        black738: 'var(--black738)',
        white_5F5: 'var(--white_5F5)',
        white_FEFAF1: 'var(--white_FEFAF1)',
        white_FFFFFF: 'var(--white_FFFFFF)',
        text_white: 'var(--text_white)',
        text_7D8184: 'var(--text_7D8184)',
        text_000000: 'var(--text_000000)',
        button_000000: 'var(--button_000000)',
        button_00FF66: 'var(--button_00FF66)',
        star: 'var(--star_color)',
        hoverbtn_E07575: 'var(--hoverbtn_E07575)',
        hoverbtn_A0BCE0: 'var(--hoverbtn_A0BCE0)',
        red_DB4444: 'var(--red_DB4444)',
        shop_color: 'var(--shop_color)',

      },
    },
    fontFamily: {
      "poppins": "var(--poppins)",
      "Inter": "var(--Inter)",
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // // '2xl': '1rem',
      },
    },

  },
  plugins: [],
}