/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#171614",
        "custom-light": "#F0EDEE",
        "custom-primary":"#472ECD"
      },
    },
    plugins: [],
  },
};
