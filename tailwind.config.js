/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors:{
        'pinkkk' : '#ED71AD',
        'greennnn' : '#7277F1',
      },
      fontFamily:{
        'Poppins' : ['Poppins']
      }
    },
  },
  plugins: [],
}