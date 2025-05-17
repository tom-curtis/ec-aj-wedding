import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F0", // Anti-flash white
        primary: "#9AAB89", // Cambridge blue
        foreground: "#35393C", // Onyx
        accent: "#9D8189", // Mountbatten pink
        destructive: "#DB5461", // Indian red
        success: "#6BBF59", // Custom success green
        warning: "#E6B422", // Custom warning yellow
      },
      fontFamily: {
        serif: ["Bodoni Moda", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
  //     animation: {
  //       'fade-in': 'fadeIn 1s ease-out forwards',
  //     },
  //     keyframes: {
  //       fadeIn: {
  //         '0%': { opacity: 0 },
  //         '100%': { opacity: 1 },
  //       },
  //     },
  //     transitionDelay: {
  //       1000: '1000ms',
  //     },
  },
  darkMode: "class",
  plugins: [heroui()],
}}
