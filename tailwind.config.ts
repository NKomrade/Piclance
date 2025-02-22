import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: PluginAPI): void {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors)
      .filter(([_, val]) => typeof val === "string")
      .map(([key, val]) => [`--${key}`, val])
  ) as Record<string, string>;

  addBase({
    ":root": newVars as Record<string, string>,
  });
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...colors,
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        lobster: ['Lobster', 'cursive'],
      },
      animation: {
        float: 'float 1.5s ease-in-out forwards',
        'fade-in': 'fadeIn 1s ease-in forwards',
        marquee: 'marquee 40s linear infinite',
        "curtain-down": "curtain-down 1s ease-in-out",
        "curtain-up": "curtain-up 1s ease-in-out"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "curtain-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        "curtain-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwind-scrollbar-hide"),
  ],
} as const;

export default config;