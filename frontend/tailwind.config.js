export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f6b7a',
        'background-light': '#fbfaf9',
        'background-dark': '#22262a',
        'accent-gold': '#d4a373',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Epilogue', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
