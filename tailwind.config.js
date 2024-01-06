/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    

    extend: {
      container : {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '8rem'
        },
        center:true,
      },
      fontFamily: {
        'rubik': ['Rubik'],
      },
      colors:{
        currentRed: '#DA002B',
        darkBlue: '#0F1F39',
        dark: '#191919',
        darkText:"#666",
        currentGold:'#dbad76',
        curretWhiteText: '#bababa'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
