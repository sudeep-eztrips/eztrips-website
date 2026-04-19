import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00327d',
        'primary-container': '#0047ab',
        tertiary: '#ffb77d',
        'tertiary-dark': '#562c00',
        surface: '#faf8ff',
        'on-surface': '#191b22',
        'pilgrimage-saffron': '#FF9933',
        'pilgrimage-maroon': '#800000',
        'pilgrimage-ivory': '#FFFFF0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 20px 40px rgba(25,27,34,0.06)',
        'ambient-lg': '0 30px 60px rgba(25,27,34,0.10)',
        card: '0 4px 20px rgba(25,27,34,0.08)',
      },
      borderRadius: {
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      letterSpacing: {
        label: '0.05em',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #00327d 0%, #0047ab 100%)',
        'orange-gradient': 'linear-gradient(135deg, #ffb77d 0%, #ff8c38 100%)',
      },
    },
  },
  plugins: [],
}

export default config
