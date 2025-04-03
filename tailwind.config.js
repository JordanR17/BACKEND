/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.underline-gray': {
          textDecoration: 'underline',
          textDecorationColor: 'gray',
        },
        '.hover-underline-gray:hover': { // 🟢 Ahora se aplica solo en hover
          textDecoration: 'underline',
          textDecorationColor: 'gray',
        },
      };
      addUtilities(newUtilities, ['hover']); // 🟢 Se indica que debe usarse en hover
    },
  ],
};
