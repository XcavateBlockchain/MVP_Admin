/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-900": 'Poppins-900',
        "poppins-900-italic": 'Poppins-900-Italic',
        "poppins-800": 'Poppins-800',
        "poppins-800-italic": 'Poppins-800-Italic',
        "poppins-700": 'Poppins-700',
        "poppins-700-italic": 'Poppins-700-Italic',
        "poppins-600": 'Poppins-600',
        "poppins-600-italic": 'Poppins-600-Italic',
        "poppins-500": 'Poppins-500',
        "poppins-500-italic": 'Poppins-500-Italic',
        "poppins-400": 'Poppins-400',
        "poppins-400-italic": 'Poppins-400-Italic',
        "poppins-300": 'Poppins-300',
        "poppins-300-italic": 'Poppins-300-Italic',
        "poppins-200": 'Poppins-200',
        "poppins-200-italic": 'Poppins-200-Italic',
        "poppins-100": 'Poppins-100',
        "poppins-100-italic": 'Poppins-100-Italic',
      },
      backgroundColor: {
        "main": '#EDFAFA',
        "hover": 'var(--wanos-teal-100, #D5F5F6)',
        "button": 'var(--wanos-teal-700, #036672)',
      },
      colors: {

      },
      textColor: {
        "header": 'var(--wanos-teal-700, #036672)',
        "hover": '#06a9ba',
        "light": '#058b99',
        "dark": '#025159',
        "placeholder": 'var(--wanos-teal-200, #AFECEF)',
      },
      borderColor: {
        "main": '#AFECEF',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
}

