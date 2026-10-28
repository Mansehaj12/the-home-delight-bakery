/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        bakery: {
          ivory: '#FFF9F0',
          cream: '#FBF5EB',
          card: '#FFFFFF',
          sand: '#F3EADB',
          border: '#EADBC8',
          maroon: {
            DEFAULT: '#641522',
            hover: '#7E1C2C',
            dark: '#480E18',
            light: '#8C2132',
            faint: '#FDF4F5'
          },
          gold: {
            DEFAULT: '#C49A45',
            light: '#DCB86A',
            dark: '#A67F30',
            faint: '#FDF8EE',
            border: '#D8B365'
          },
          brown: {
            DEFAULT: '#49342C',
            deep: '#33231C',
            muted: '#715A50',
            light: '#978278'
          },
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 2px 8px -2px rgba(73, 52, 44, 0.06), 0 1px 3px -1px rgba(73, 52, 44, 0.04)',
        'card-hover': '0 8px 20px -4px rgba(100, 21, 34, 0.12), 0 3px 6px -2px rgba(196, 154, 69, 0.15)',
        'festive': '0 10px 25px -5px rgba(100, 21, 34, 0.08), 0 4px 10px -2px rgba(196, 154, 69, 0.12)',
      }
    },
  },
  plugins: [],
}
