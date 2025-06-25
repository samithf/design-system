import type { Config } from "tailwindcss";
import {
  colors,
  white,
  black,
  transparent,
  currentColor,
} from "./src/token/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,html}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
  },
  plugins: [],
} satisfies Config;
