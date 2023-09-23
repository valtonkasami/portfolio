import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    screens: {
      big: '1397px',
      ipad: '1108px',
      twoz: '1065px',
      col: '1030px',
      con: '935px',
      pr: '800px',
      md: '700px',
      ed: '650px',
      sm: '623px',
      ex: '500px',
      ut: '377px'
    },
  },
  plugins: [],
}
export default config
