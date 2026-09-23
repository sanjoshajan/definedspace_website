import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          accent: "#006D5B",
          green: {
            DEFAULT: "#006D5B",
            50: "#F0F9F7",
            100: "#DBF0EB",
            200: "#B8E2D8",
            300: "#8ACEC1",
            400: "#4DB3A1",
            500: "#006D5B",
            600: "#005E4E",
            700: "#004D40",
            800: "#003E34",
            900: "#002C25",
          },
          dark: "#1A1F1C",
          body: "#5B615C",
          muted: "#8D948E",
          bg: {
            DEFAULT: "#FFFFFF",
            subtle: "#F7FAF7",
            card: "#FAFCFA",
          },
          border: {
            DEFAULT: "#DCE7E0",
            dark: "#C3D5C9",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".18em",
        mega: ".25em",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(79, 122, 94, 0.08)',
        'elevated': '0 20px 40px -15px rgba(26, 31, 28, 0.07)',
        'glass': '0 8px 32px 0 rgba(79, 122, 94, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
