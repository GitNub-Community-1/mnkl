/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
      'mx': { max: '520px' },
    },
    },
  },
  plugins: [],
}

