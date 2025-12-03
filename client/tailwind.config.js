
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        
        primary: 'var(--color-primary)',
        'primary-dull': 'var(--color-primary-dull)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        'gray-50': 'var(--color-gray-50)',
        white: '#fff',
      },
    },
  },
  plugins: [],
}

