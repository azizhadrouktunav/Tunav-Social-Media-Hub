export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A4BFF",
          dark: "#0039D9",
          cyan: "#00B6FF",
          soft: "#EEF3FF",
        },
        ink: {
          DEFAULT: "#0B1B3F",
          muted: "#55607A",
        },
      },
      fontFamily: {
        display: ["Kanit", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
