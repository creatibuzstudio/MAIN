/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        heartbeatGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 15px rgba(248, 88, 0, 0.4)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 30px rgba(248, 88, 0, 0.8)",
          },
        },
      },
      animation: {
        "heartbeat-glow": "heartbeatGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
