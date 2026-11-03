import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge doesn't know about the project's custom fluid font-size scale
 * (`text-fluid-*`, defined in tailwind.config.ts / tokens.css). Without this,
 * it misreads e.g. `text-fluid-3xl` as a `text-*` color and drops it when a real
 * color like `text-paper` is also present — silently shrinking headings. Register
 * the fluid sizes as font-size utilities so size + color no longer conflict.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "fluid-lg",
            "fluid-xl",
            "fluid-2xl",
            "fluid-3xl",
            "fluid-4xl",
            "fluid-display",
            "fluid-hero",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
