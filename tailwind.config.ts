import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(1px)",
          },
          "75%": {
            opacity: "0.6",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        "ds-gray-100": "var(--ds-gray-100)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
      },
    },
  },
  plugins: [],
} satisfies Config;

// --font-sans: var(--font-geist-sans);
// --font-mono: var(--font-geist-mono);

// --color-background: var(--background);
// --color-foreground: var(--foreground);
// --color-primary: var(--primary);
// --color-primary-foreground: var(--primary-foreground);
// --color-text: var(--text);
// --color-text-muted: var(--text-muted);
