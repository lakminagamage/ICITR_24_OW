/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0372D8",
        "green-primary": "#6CBD47",
        "gray-primary": "#515151",
        "blue-dark": "#2C3E50",
        "red-primary": "#A40E0E",
        "black-primary": "#1B1919"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 'Poppins' as the primary font with fallback to sans-serif
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
