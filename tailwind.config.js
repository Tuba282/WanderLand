// filepath: c:\React-Next(projects)\wanderland\tailwind.config.js
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [tailwindScrollbar({ nocompatible: true })],
  };