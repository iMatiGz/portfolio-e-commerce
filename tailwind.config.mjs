/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'prim-lime': '#dcf70c',
        'prim-lime-darker': '#bcd70c',
      },
    },
  },
  plugins: [],
};
