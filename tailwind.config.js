/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          ivory: '#FDFBF7',
          cream: '#F7F2E8',
          card: '#FFFFFF',
          sand: '#EFE7DA',
          border: '#E8DCC8',
          maroon: {
            DEFAULT: '#5C131D',
            hover: '#731925',
            dark: '#3D0A12',
            light: '#8E2230',
            faint: '#FDF2F3'
          },
          gold: {
            DEFAULT: '#C89D47',
            light: '#E5C479',
            dark: '#9B7428',
            faint: '#FAF5EA',
            border: '#D9B76A'
          },
          brown: {
            DEFAULT: '#2C1810',
            deep: '#1F110B',
            muted: '#665348',
            light: '#8F7A70'
          },
          ruby: {
            DEFAULT: '#9E2A2B',
            dark: '#7A1F21'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'festive': '0 10px 30px -5px rgba(92, 19, 29, 0.08), 0 4px 12px -2px rgba(200, 157, 71, 0.12)',
        'festive-lg': '0 20px 40px -10px rgba(92, 19, 29, 0.15), 0 8px 20px -4px rgba(200, 157, 71, 0.2)',
        'gold-glow': '0 0 25px -3px rgba(200, 157, 71, 0.35)',
      },
      backgroundImage: {
        'diwali-pattern': "radial-gradient(#C89D47 0.75px, transparent 0.75px), radial-gradient(#5C131D 0.75px, #FDFBF7 0.75px)",
      }
    },
  },
  plugins: [],
}
