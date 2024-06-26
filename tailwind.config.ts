import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'minecraft-green': '#44bd32',
        'minecraft-blue': '#0097e6',
        'minecraft-red': '#e84118',
        'minecraft-yellow': '#fbc531',
        'minecraft-gray': '#95a5a6',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pixel-float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pixel-float": "pixel-float 3s ease-in-out infinite",
      },
      fontFamily: {
        minecraft: ['Minecraft', 'sans-serif'],
      },
      textShadow: {
        'default': '2px 2px 0 #000',
        'md': '3px 3px 0 #000',
        'h1': '0 1px 0 #c0c0c0, 0 2px 0 #b0b0b0, 0 3px 0 #a0a0a0, 0 4px 0 #909090, 0 5px 10px rgba(0, 0, 0, 0.6)',
      },
      boxShadow: {
        'minecraft': 'inset -2px -4px #0006, inset 2px 2px #FFF7',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': theme('textShadow.default', '2px 2px 0 #000'),
        },
        '.text-shadow-md': {
          'text-shadow': theme('textShadow.md', '3px 3px 0 #000'),
        },
        '.text-shadow-h1': {
          'text-shadow': theme('textShadow.h1', '0 1px 0 #c0c0c0, 0 2px 0 #b0b0b0, 0 3px 0 #a0a0a0, 0 4px 0 #909090, 0 5px 10px rgba(0, 0, 0, 0.6)'),
        },
        '.pixelated': {
          'image-rendering': 'pixelated',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config

export default config