import { cn } from "@/scripts/utilities";
import { cva } from "class-variance-authority";
import type { JSX } from "astro/jsx-runtime";

const app_env = process.env.APP_ENV;

const variants = cva([], {
  variants: {
    bg: {
      development: "bg-successful",
      preview: "bg-cautionary",
      production: "bg-destructive"
    },

    text: {
      development: "text-successful-background",
      preview: "text-cautionary-background",
      production: "text-destructive-background"
    },

    border: {
      development: "hover:outline-successful",
      preview: "hover:outline-cautionary",
      production: "hover:outline-destructive"
    },
  },
})

export interface IFeature {
  ({ flag, children }: {
    flag?: 'development' | 'preview' | 'production' | string,
    children?: JSX.Element
  }): JSX.Element
}

export const Feature: IFeature = ({ flag = 'development', children }) => {
  if (process.env.NODE_ENV != 'development') return;
  if (app_env == 'preview' && flag == 'development') return;
  if (app_env == 'production' && flag != 'production') return;

  return (
    <div className={cn("group relative outline-1 hover:outline", variants({ border: flag as any }))}>
      <span className={cn("hidden group-hover:block !text-xsmall font-mono absolute -top-6 -left-px px-1.5 font-bold leading-6", variants({ bg: flag, text: flag }))}>{flag}</span>
      {children}
    </div >
  )
}

