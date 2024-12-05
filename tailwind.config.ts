import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animations/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        switzer: ["Switzer", "sans-serif"],
      },
      screens: {
        sm: "479px",

        md: "768px",

        lg: "991px",

        xl: "1024px",
      },

    },
  },
  plugins: [],
} satisfies Config;
