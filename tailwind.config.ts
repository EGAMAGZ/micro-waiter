import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [
    //@ts-ignore It is the proper way to add a plugin
    daisyui,
  ],
  daisyui: {
    themes: [
      "corporate",
    ],
  },
} satisfies Config;
