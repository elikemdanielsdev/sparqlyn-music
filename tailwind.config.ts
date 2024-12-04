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
        "display-1": "clamp(1.75rem, 0.9375rem + 4.0625vw, 5rem)",
        "display-2": "clamp(1.5rem, 1.25rem + 1.25vw, 2.5rem)",
        "display-3": "clamp(1.25rem, 1.125rem + 1vw, 2rem)",
        "sub-display": "clamp(1.125rem, 0.9375rem + 0.9375vw, 1.875rem)",
      },
      screens: {
        "1200": "1200px",
        "1000": "1000px",
        "700": "700px",
        "600": "600px",
        "500": "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
