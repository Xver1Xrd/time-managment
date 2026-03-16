import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-soft": "hsl(var(--accent-soft) / <alpha-value>)"
      },
      boxShadow: {
        premium:
          "0 20px 50px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        "radial-premium":
          "radial-gradient(circle at 15% 20%, rgba(211, 137, 78, 0.18), transparent 42%), radial-gradient(circle at 85% 12%, rgba(77, 113, 181, 0.2), transparent 38%), radial-gradient(circle at 45% 85%, rgba(232, 194, 149, 0.08), transparent 38%)"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      letterSpacing: {
        tighter2: "-0.04em"
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
        float: "float 8s ease-in-out infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-140%)" },
          "100%": { transform: "translateX(140%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
