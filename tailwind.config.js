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
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        'rubik': ['Rubik'],
        'superaGothic': ['']
      },
      colors:{
        currentRed: '#DA002B',
        currentBlue: '#09273E',
        currentGrey: '#8A8A8A',        
        currentGreen: '#36E3A4',        
        darkBlue: '#0F1F39',
        borderGrey: '#D9D9D9',
        addCard: '#E91756',
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
