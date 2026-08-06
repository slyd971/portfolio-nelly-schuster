/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Design tokens (colors, fonts) are defined via the `@theme` block in
  // src/styles/globals.css — Tailwind v4's CSS-first mechanism. This file
  // only needs to declare content globs.
};
