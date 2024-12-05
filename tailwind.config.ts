import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "monospace"],
        "brice-bold": ["var(--font-brice-bold)", "sans-serif"],
      },
      fontSize: {
        "display-1": "clamp(1.75rem, 0.75rem + 5vw, 5.75rem)",
        "display-2": "clamp(1.5rem, 1.25rem + 1.25vw, 2.5rem)",
        "display-3": "clamp(1.25rem, 1.125rem + 1vw, 2rem)",
        "display-span": "clamp(2.75rem, 1.125rem + 8.125vw, 9.25rem)",
        "sub-display": "clamp(1.125rem, 0.9375rem + 0.9375vw, 1.875rem)",
      },
      screens: {
        "1400": "1400px",
        "830": "830px",
        "700": "700px",
        "240": "240px",
      },
      colors: {
        "crimson-500": "#F71313",
        "crimson-800": "#910B0B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
