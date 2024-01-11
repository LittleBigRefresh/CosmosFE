import type { Config } from 'tailwindcss'

const defaultColors = {
  "background": "#0F0814",
  "header-background": "#261731",
  "container-background": "#2A1936",
  "backdrop": "#1B0F23",

  "divider": "#13071A",

  "header-foreground": "#F7F7F7",
  "foreground": "#F7F7F7",
  "gentle": "#C3C3C3",

  "primary": "#A13DE3",
  "secondary": "#87748A",
  "teritary": "#100915",

  "secondary-bright": "#E2CFE5",

  "success": "#52BC24",
  "dangerous": "#E52E2E",
  "warning": "#F2AA00",

  "rank-gold": "#FFD234",
  "rank-silver": "#F2F2F2",
  "rank-bronze": "#FF8845",
  "rank-other": "#ABABAB",

  "api-retrieve": "#52BC24",
  "api-remove": "#E52E2E",
  "api-push": "#2D43E5"
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Rubik'],
      'body': ['Rubik']
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '11px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
    },
    colors: defaultColors,
    backgroundImage: {
      "hero": "url('/assets/hero.svg')",
      "ss-hero": "url('/assets/ss-hero.png')",
      "logo": "url('/assets/logo.svg')",
    },
  },
  plugins: [],
}
export default config;
