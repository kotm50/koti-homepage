module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 0.75 },
        },
      },
      animation: {
        blink: "blink 1000ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
