/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0f",
          secondary: "#0f0f14",
          accent: "#1a1a24",
        },
        primary: {
          DEFAULT: "#00d9ff",
          cyan: "#00d9ff",
          blue: "#0ea5e9",
        },
        secondary: {
          DEFAULT: "#14b8a6",
          teal: "#14b8a6",
          purple: "#8b5cf6",
        },
        foreground: "#ffffff",
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
