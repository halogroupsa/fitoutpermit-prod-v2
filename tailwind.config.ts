import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // RGB-channel form so Tailwind opacity modifiers (bg-paper/92) work.
        paper: {
          DEFAULT: "rgb(var(--color-paper-rgb) / <alpha-value>)",
          warm: "rgb(var(--color-paper-warm-rgb) / <alpha-value>)",
          deep: "rgb(var(--color-paper-deep-rgb) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink-rgb) / <alpha-value>)",
          soft: "rgb(var(--color-ink-soft-rgb) / <alpha-value>)",
          mute: "rgb(var(--color-ink-mute-rgb) / <alpha-value>)",
        },
        carbon: {
          DEFAULT: "rgb(var(--color-carbon-rgb) / <alpha-value>)",
          deep: "rgb(var(--color-carbon-deep-rgb) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent-rgb) / <alpha-value>)",
          soft: "rgb(var(--color-accent-soft-rgb) / <alpha-value>)",
          deep: "rgb(var(--color-accent-deep-rgb) / <alpha-value>)",
        },
        steel: {
          DEFAULT: "rgb(var(--color-steel-rgb) / <alpha-value>)",
          soft: "rgb(var(--color-steel-soft-rgb) / <alpha-value>)",
        },
        approve: {
          DEFAULT: "rgb(var(--color-approve-rgb) / <alpha-value>)",
          soft: "rgb(var(--color-approve-soft-rgb) / <alpha-value>)",
        },
        rule: {
          DEFAULT: "rgb(var(--color-rule-rgb) / <alpha-value>)",
          strong: "rgb(var(--color-rule-strong-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      // Full scale wired to the canonical tokens in src/styles/tokens.css —
      // text-sm here and var(--text-sm) in CSS always agree. No arbitrary
      // text-[...] sizes; if a size is missing, add a token first.
      fontSize: {
        "2xs": ["var(--text-2xs)", { lineHeight: "1.5" }],
        xs: ["var(--text-xs)", { lineHeight: "1.55" }],
        sm: ["var(--text-sm)", { lineHeight: "1.6" }],
        base: ["var(--text-base)", { lineHeight: "1.62" }],
        lg: ["var(--text-lg)", { lineHeight: "1.5" }],
        xl: ["var(--text-xl)", { lineHeight: "1.35" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "1.25" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "1.15" }],
        "4xl": ["var(--text-4xl)", { lineHeight: "1.1" }],
        display: ["var(--text-display)", { lineHeight: "1.05" }],
        hero: ["var(--text-hero)", { lineHeight: "1.08" }],
      },
      maxWidth: {
        "container-max": "var(--container-max)",
        "container-wide": "var(--container-wide)",
      },
      // Documents have square corners — force every rounded-* utility to 0.
      borderRadius: {
        none: "0",
        xs: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
        DEFAULT: "0",
      },
      transitionTimingFunction: {
        "out-soft": "var(--ease-out)",
        "in-soft": "var(--ease-in)",
        "in-out-soft": "var(--ease-in-out)",
      },
      transitionDuration: {
        fast: "160ms",
        base: "280ms",
        slow: "460ms",
        slower: "720ms",
      },
    },
  },
  plugins: [],
};

export default config;
