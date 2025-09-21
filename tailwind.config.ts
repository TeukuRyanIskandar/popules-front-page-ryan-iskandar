// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        "magenta-bright": "oklch(0.5973 0.2386 0.22)",
      },
    },
  },
} satisfies Config;
