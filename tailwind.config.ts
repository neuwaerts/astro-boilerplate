import animate from 'tailwindcss-animate';
import forms from '@tailwindcss/forms';
import type { Config } from "tailwindcss"
import typography from '@tailwindcss/typography';


const config: Config = {
  content: ["components/**", "layouts/**", "pages/**", "public/**"],
  theme: {
    extend: {
      fontSize: {
        xsmall: '0.8125rem',
        small: ".875rem",
        p: "1rem",
        h6: "1.25rem",
        h5: "1.625rem",
        h4: "2.125rem",
        h3: "2.75rem",
        h2: "3.5rem",
        h1: "4.375rem",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",

        border: "hsl(var(--border) / <alpha-value>)",

        focus: "hsl(var(--focus) / <alpha-value>)",

        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },

        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },

        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },

        informative: {
          DEFAULT: "hsl(var(--informative) / <alpha-value>)",
          foreground: "hsl(var(--informative-foreground) / <alpha-value>)",
        },

        successful: {
          DEFAULT: "hsl(var(--successful) / <alpha-value>)",
          foreground: "hsl(var(--successful-foreground) / <alpha-value>)",
        },

        cautionary: {
          DEFAULT: "hsl(var(--cautionary) / <alpha-value>)",
          foreground: "hsl(var(--cautionary-foreground) / <alpha-value>)",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
      },
      spacing: {
        18: '4.5rem'
      },
      borderRadius: {
        "0.5x": '0.5rem',
        "1x": '1rem',
        "2x": '2rem',
      },
      lineHeight: {
        12: '3rem'
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
      },
      animation: {
        "accordion-down": "accordion-down 0.15s ease-out",
        "accordion-up": "accordion-up 0.15s ease-out",
      },
      typography: () => ({
        accent: {
          css: {
            "--tw-prose-body": "hsl(var(--muted-foreground))",
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-lead": "hsl(var(--muted-foreground))",
            "--tw-prose-links": "hsl(var(--accent))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-counters": "hsl(var(--accent))",
            "--tw-prose-bullets": "hsl(var(--accent))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--accent))",
            "--tw-prose-captions": "hsl(var(--muted-foreground))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-pre-code": "hsl(var(--foreground))",
            "--tw-prose-pre-bg": "hsl(var(--muted))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",
          },
        },
      }),
    },
  },
  plugins: [animate, forms, typography],
}

export default config