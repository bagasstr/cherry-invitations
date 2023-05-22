/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: '300px', max: '767px' },
        //   mobile: '300px',
        tablet: { min: '768px', max: '1023px' },
        desktop: '1024px',
      },

      colors: {
        bg: '#F6F1F1',
        text: '#27374D',
        accent: '#1189f7',
        accent2: '#dbedff',
      },
    },
  },
  plugins: [],
}
