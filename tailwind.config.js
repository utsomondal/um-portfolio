/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F7F9",
        card: "#FFFFFF",
        surface: "#EEF0F3",
        border: "#DEE1E7",
        text: "#14161A",
        muted: "#6E7180",
        accent: "#1266C4",
        "accent-hover": "#0E509A",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
        content: "56rem",
      },
      borderRadius: {
        card: "0.875rem",
      },
    },
  },
  plugins: [],
};
