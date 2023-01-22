/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^from-/,
    },
    {
      pattern: /^to-/,
    },
    {
      pattern: /^text-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
