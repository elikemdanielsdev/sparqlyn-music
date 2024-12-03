import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#9fcfee",
  //         secondary: "#5f55ff",
  //         accent: "#bbc800",
  //         neutral: "#31293f",
  //         "base-100": "#fffbf5",
  //         info: "#0093ff",
  //         success: "#7edf00",
  //         warning: "#c86800",
  //         error: "#be2134",
  //       },
  //     },
  //   ],
  // },
};
export default config;
