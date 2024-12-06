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
        "blue-primary": "#1D4ED8", // Bright Blue
        "green-primary": "#10B981", // Emerald Green
        "gray-primary": "#111827", // Dark Gray (Text color)
        "blue-dark": "#0e148d", // Sky Blue (Accent)
        "gray-background": "#F3F4F6", // Light Gray (Background)
        "black-primary": "#1B1919", // Black (Text)
        "gray-secondary": "#E5E5E5", // Light Gray (Secondary)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // 'Inter' as the primary font with fallback to sans-serif
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Adding custom gradient background for hero section
        "gradient-blue-green":
          "linear-gradient(to bottom right, #1D4ED8, #10B981)", // Blue to Green Gradient
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
