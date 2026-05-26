/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        popx: {
          purple: {
            DEFAULT: '#6c25e8',
            hover: '#581bc3',
            light: '#edd8ff',
            lightHover: '#dfbdfc',
          },
          text: {
            dark: '#1d2226',
            gray: '#5d5d5d',
            muted: '#7a7a7a',
          },
          border: {
            DEFAULT: '#cbcbcb',
            active: '#6c25e8',
          },
          bg: {
            DEFAULT: '#f9f9f9',
            card: '#ffffff',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'popx-shadow': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
